export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
  price: string;
  href: string;
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

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}

export interface Badges {
  badge: string;
  bdg: string;
}

export interface Bdg {
  bdg: string;
}
