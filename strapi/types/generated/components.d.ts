import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_component_faq_items';
  info: {
    description: '';
    displayName: 'faq item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentFeatures extends Struct.ComponentSchema {
  collectionName: 'components_component_features';
  info: {
    description: '';
    displayName: 'features item';
  };
  attributes: {
    content: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentInfo extends Struct.ComponentSchema {
  collectionName: 'components_component_infos';
  info: {
    description: '';
    displayName: 'info';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_component_menu_items';
  info: {
    description: '';
    displayName: 'menu item';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentMetaData extends Struct.ComponentSchema {
  collectionName: 'components_component_meta_data';
  info: {
    description: '';
    displayName: 'Meta Data';
  };
  attributes: {
    metaAuthor: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentParams extends Struct.ComponentSchema {
  collectionName: 'components_component_params';
  info: {
    description: '';
    displayName: 'Params';
  };
  attributes: {
    contactFormAction: Schema.Attribute.String;
    copyright: Schema.Attribute.String;
    footerContent: Schema.Attribute.String;
    tagManagerId: Schema.Attribute.String;
  };
}

export interface ComponentPlanItem extends Struct.ComponentSchema {
  collectionName: 'components_component_plan_items';
  info: {
    description: '';
    displayName: 'plan item';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    features: Schema.Attribute.Component<'shared.strings', true>;
    price: Schema.Attribute.Decimal;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['month', 'year']>;
  };
}

export interface ComponentServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_component_service_items';
  info: {
    description: '';
    displayName: 'service item';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.Text;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneBanner extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_call_to_actions';
  info: {
    description: '';
    displayName: 'call to action';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneFeatures extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_features';
  info: {
    description: '';
    displayName: 'features';
  };
  attributes: {
    features: Schema.Attribute.Component<'component.features', true>;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneFooter extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    menu: Schema.Attribute.Component<'component.menu-item', true>;
    name: Schema.Attribute.String;
  };
}

export interface DynamicZoneSetting extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_settings';
  info: {
    displayName: 'setting';
  };
  attributes: {
    pagination: Schema.Attribute.Integer;
    summaryLength: Schema.Attribute.Integer;
  };
}

export interface DynamicZoneSite extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_sites';
  info: {
    description: '';
    displayName: 'site';
  };
  attributes: {
    basePath: Schema.Attribute.String;
    baseUrl: Schema.Attribute.String;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoHeight: Schema.Attribute.Integer;
    logoText: Schema.Attribute.String;
    logoWidth: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    trailingSlash: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    enable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    description: '';
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_intros';
  info: {
    description: '';
    displayName: 'intro';
    icon: 'globe';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'rich text';
  };
  attributes: {
    rich_text: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'hashtag';
  };
  attributes: {
    meta_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedStrings extends Struct.ComponentSchema {
  collectionName: 'components_shared_strings';
  info: {
    description: '';
    displayName: 'strings';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.faq-item': ComponentFaqItem;
      'component.features': ComponentFeatures;
      'component.info': ComponentInfo;
      'component.menu-item': ComponentMenuItem;
      'component.meta-data': ComponentMetaData;
      'component.params': ComponentParams;
      'component.plan-item': ComponentPlanItem;
      'component.service-item': ComponentServiceItem;
      'dynamic-zone.banner': DynamicZoneBanner;
      'dynamic-zone.call-to-action': DynamicZoneCallToAction;
      'dynamic-zone.features': DynamicZoneFeatures;
      'dynamic-zone.footer': DynamicZoneFooter;
      'dynamic-zone.setting': DynamicZoneSetting;
      'dynamic-zone.site': DynamicZoneSite;
      'shared.button': SharedButton;
      'shared.gallery': SharedGallery;
      'shared.intro': SharedIntro;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.strings': SharedStrings;
    }
  }
}
