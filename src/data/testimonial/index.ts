// adapted from https://github.com/withastro/astro.build/blob/112bdc723b3ba305997c95d7ce02304624d0d3ce/src/data/Testimonial/index.ts

import type { TestimonialSite } from "~/types";
import sitesData from "./sites.json";

const allImages = import.meta.glob<ImageMetadata>("./images/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

let _loadTestimonial: Promise<Array<TestimonialSite>>;

async function loadTestimonial(): Promise<Array<TestimonialSite>> {
  const sites = await Promise.all(
    sitesData.map(async (site) => {
      if (!(site.image in allImages)) {
        console.error(
          `Image for "${site.title}" not found (provided: "${site.image}")`
        );
      }

      const image = await allImages[site.image];

      return {
        ...site,
        image,
      };
    })
  );

  return sites;
}

export async function getTestimonial() {
  _loadTestimonial = _loadTestimonial || loadTestimonial();
  return _loadTestimonial;
}
