// Common types
interface BaseAttributes {
  id: number;
  title: string;
  description: string;
}

interface Button {
  enable: boolean;
  label: string;
  link: string;
}

interface Image {
  data: {
    attributes: {
      url: string;
    };
  };
}

// Navigation types
interface NavigationItem {
  name: string;
  url: string;
}

interface FooterMenu {
  name: string;
  menu: NavigationItem[];
}

export interface Navigation {
  id: number;
  main: NavigationItem[];
  footer: FooterMenu[];
}

// Configuration types
interface SiteConfig {
  title: string;
  baseUrl: string;
  basePath: string;
  trailingSlash: boolean;
  favicon: string;
  logo: Image;
  logoWidth: number;
  logoHeight: number;
  logoText: string;
}

interface Settings {
  pagination: number;
  summaryLength: number;
}

interface Params {
  contactFormAction: string;
  tagManager_id: string;
  footerContent: string;
  copyright: string;
}

interface Metadata {
  metaAuthor: string;
  metaImage: string;
  metaDescription: string;
}

export interface Config {
  id: number;
  site: SiteConfig;
  settings: Settings;
  navButton: Button;
  params: Params;
  metadata: Metadata;
}

// Social media links
export interface Social extends Record<string, string | undefined> {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
  linkedin?: string;
  github?: string;
  discord?: string;
  twitch?: string;
  pinterest?: string;
  spotify?: string;
  soundcloud?: string;
  applemusic?: string;
}

// Page content types
interface Feature {
  name: string;
  icon?: string;
  content?: string;
}

interface Service {
  title?: string;
  content?: string;
  images?: string[];
  button?: Button;
}

export interface HomePage {
  banner?: {
    title?: string;
    content?: string;
    image?: string;
    button?: Button;
  };
  feature: {
    title: string;
    features: Feature[];
  };
  services?: Service[];
  workflow?: {
    title?: string;
    description?: string;
    image: string;
  };
  call_to_action?: {
    title?: string;
    content?: string;
    image: string;
    button?: Button;
  };
}

export interface Page extends BaseAttributes {
  createdAt: string;
  updatedAt: string;
  image: Image;
  slug: string;
  richText: string;
}

export interface Post extends BaseAttributes {
  image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  richText: string;
}

export interface PostIndex extends BaseAttributes {}

export interface ContactPage extends BaseAttributes {
  createdAt: string;
  updatedAt: string;
  draft: boolean;
  info: {
    title: string;
    description: string;
    contacts: { value: string }[];
  };
}

interface FAQ {
  title: string;
  answer: string;
}

export interface FAQPage extends BaseAttributes {
  draft: boolean;
  faqs: FAQ[];
}

interface Plan {
  title: string;
  subtitle: string;
  price: number;
  type: "month" | "year";
  recommended?: boolean;
  features: { value: string }[];
  button: {
    label: string;
    link: string;
  };
}

interface CallToAction {
  title: string;
  content: string;
  image: string;
  button: Button;
}

export interface PricingPage extends BaseAttributes {
  plans: Plan[];
  callToAction: CallToAction;
}

export interface NotFoundPage {
  title: string;
  description: string;
  richText: string;
}
