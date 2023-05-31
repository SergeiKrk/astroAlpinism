export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface ServiceItem {
  description: string;
  icon: string;
  title: string;
  price: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialsItem {
  avatar: string;
  name: string;
  testimonial: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface TestimonialSite {
  name: string;
  image: ImageMetadata;
  testimonial: string;
}

export interface Badges {
  badge: string;
  bdg: string;
}

export interface Bdg {
  bdg: string;
}
