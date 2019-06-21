/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface HeartButton {
    /**
    * Total number of hearts
    */
    'count': number;
    /**
    * Unique identifier for likeable resource
    */
    'id': string;
    /**
    * Boolean indicating whether likeable resource has been liked
    */
    'isLiked': boolean;
    /**
    * Cache key for localStorage
    */
    'key': string;
  }
  interface HeartButtonAttributes extends StencilHTMLAttributes {
    /**
    * Total number of hearts
    */
    'count'?: number;
    /**
    * Unique identifier for likeable resource
    */
    'id'?: string;
    /**
    * Boolean indicating whether likeable resource has been liked
    */
    'isLiked'?: boolean;
    /**
    * Cache key for localStorage
    */
    'key'?: string;
  }

  interface SharedFooter {
    'env': string;
    'src': string;
  }
  interface SharedFooterAttributes extends StencilHTMLAttributes {
    'env'?: string;
    'src'?: string;
  }

  interface GlobalNav {
    'config': Object;
    'env': string;
    'giveData': JSON;
    'giveNavIsShowing': boolean;
    'href': string;
    'mainNavIsShowing': boolean;
    'navClickHandler': Function;
    'profileData': JSON;
    'profileNavIsShowing': boolean;
  }
  interface GlobalNavAttributes extends StencilHTMLAttributes {
    'config'?: Object;
    'env'?: string;
    'giveData'?: JSON;
    'giveNavIsShowing'?: boolean;
    'href'?: string;
    'mainNavIsShowing'?: boolean;
    'navClickHandler'?: Function;
    'profileData'?: JSON;
    'profileNavIsShowing'?: boolean;
  }

  interface NavCtas {
    'active': string;
    'data': string;
    'href': string;
  }
  interface NavCtasAttributes extends StencilHTMLAttributes {
    'active'?: string;
    'data'?: string;
    'href'?: string;
  }

  interface NavSectionSubnav {
    'active': string;
    'id': string;
    'onBack': Function;
  }
  interface NavSectionSubnavAttributes extends StencilHTMLAttributes {
    'active'?: string;
    'id'?: string;
    'onBack'?: Function;
  }

  interface NavSection {
    'activeSection': any;
    'id': string;
    'isActive': boolean;
    'onActivate': any;
  }
  interface NavSectionAttributes extends StencilHTMLAttributes {
    'activeSection'?: any;
    'id'?: string;
    'isActive'?: boolean;
    'onActivate'?: any;
  }

  interface GiveNav {
    'data': JSON;
    'giveNavIsShowing': boolean;
  }
  interface GiveNavAttributes extends StencilHTMLAttributes {
    'data'?: JSON;
    'giveNavIsShowing'?: boolean;
  }

  interface ProfileNav {
    'config': any;
    'currentUser': any;
    'data': JSON;
    'onSignOut': Function;
    'profileNavIsShowing': boolean;
  }
  interface ProfileNavAttributes extends StencilHTMLAttributes {
    'config'?: any;
    'currentUser'?: any;
    'data'?: JSON;
    'onSignOut'?: Function;
    'profileNavIsShowing'?: boolean;
  }

  interface SharedHeader {
    'env': string;
    'src': string;
  }
  interface SharedHeaderAttributes extends StencilHTMLAttributes {
    'env'?: string;
    'src'?: string;
  }

  interface SnailTrailLink {
    'automationId': string;
    'href': string;
    'isActive': boolean;
  }
  interface SnailTrailLinkAttributes extends StencilHTMLAttributes {
    'automationId'?: string;
    'href'?: string;
    'isActive'?: boolean;
  }

  interface SnailTrail {
    'env': string;
    'name': string;
    'src': string;
  }
  interface SnailTrailAttributes extends StencilHTMLAttributes {
    'env'?: string;
    'name'?: string;
    'src'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'HeartButton': Components.HeartButton;
    'SharedFooter': Components.SharedFooter;
    'GlobalNav': Components.GlobalNav;
    'NavCtas': Components.NavCtas;
    'NavSectionSubnav': Components.NavSectionSubnav;
    'NavSection': Components.NavSection;
    'GiveNav': Components.GiveNav;
    'ProfileNav': Components.ProfileNav;
    'SharedHeader': Components.SharedHeader;
    'SnailTrailLink': Components.SnailTrailLink;
    'SnailTrail': Components.SnailTrail;
  }

  interface StencilIntrinsicElements {
    'heart-button': Components.HeartButtonAttributes;
    'shared-footer': Components.SharedFooterAttributes;
    'global-nav': Components.GlobalNavAttributes;
    'nav-ctas': Components.NavCtasAttributes;
    'nav-section-subnav': Components.NavSectionSubnavAttributes;
    'nav-section': Components.NavSectionAttributes;
    'give-nav': Components.GiveNavAttributes;
    'profile-nav': Components.ProfileNavAttributes;
    'shared-header': Components.SharedHeaderAttributes;
    'snail-trail-link': Components.SnailTrailLinkAttributes;
    'snail-trail': Components.SnailTrailAttributes;
  }


  interface HTMLHeartButtonElement extends Components.HeartButton, HTMLStencilElement {}
  var HTMLHeartButtonElement: {
    prototype: HTMLHeartButtonElement;
    new (): HTMLHeartButtonElement;
  };

  interface HTMLSharedFooterElement extends Components.SharedFooter, HTMLStencilElement {}
  var HTMLSharedFooterElement: {
    prototype: HTMLSharedFooterElement;
    new (): HTMLSharedFooterElement;
  };

  interface HTMLGlobalNavElement extends Components.GlobalNav, HTMLStencilElement {}
  var HTMLGlobalNavElement: {
    prototype: HTMLGlobalNavElement;
    new (): HTMLGlobalNavElement;
  };

  interface HTMLNavCtasElement extends Components.NavCtas, HTMLStencilElement {}
  var HTMLNavCtasElement: {
    prototype: HTMLNavCtasElement;
    new (): HTMLNavCtasElement;
  };

  interface HTMLNavSectionSubnavElement extends Components.NavSectionSubnav, HTMLStencilElement {}
  var HTMLNavSectionSubnavElement: {
    prototype: HTMLNavSectionSubnavElement;
    new (): HTMLNavSectionSubnavElement;
  };

  interface HTMLNavSectionElement extends Components.NavSection, HTMLStencilElement {}
  var HTMLNavSectionElement: {
    prototype: HTMLNavSectionElement;
    new (): HTMLNavSectionElement;
  };

  interface HTMLGiveNavElement extends Components.GiveNav, HTMLStencilElement {}
  var HTMLGiveNavElement: {
    prototype: HTMLGiveNavElement;
    new (): HTMLGiveNavElement;
  };

  interface HTMLProfileNavElement extends Components.ProfileNav, HTMLStencilElement {}
  var HTMLProfileNavElement: {
    prototype: HTMLProfileNavElement;
    new (): HTMLProfileNavElement;
  };

  interface HTMLSharedHeaderElement extends Components.SharedHeader, HTMLStencilElement {}
  var HTMLSharedHeaderElement: {
    prototype: HTMLSharedHeaderElement;
    new (): HTMLSharedHeaderElement;
  };

  interface HTMLSnailTrailLinkElement extends Components.SnailTrailLink, HTMLStencilElement {}
  var HTMLSnailTrailLinkElement: {
    prototype: HTMLSnailTrailLinkElement;
    new (): HTMLSnailTrailLinkElement;
  };

  interface HTMLSnailTrailElement extends Components.SnailTrail, HTMLStencilElement {}
  var HTMLSnailTrailElement: {
    prototype: HTMLSnailTrailElement;
    new (): HTMLSnailTrailElement;
  };

  interface HTMLElementTagNameMap {
    'heart-button': HTMLHeartButtonElement
    'shared-footer': HTMLSharedFooterElement
    'global-nav': HTMLGlobalNavElement
    'nav-ctas': HTMLNavCtasElement
    'nav-section-subnav': HTMLNavSectionSubnavElement
    'nav-section': HTMLNavSectionElement
    'give-nav': HTMLGiveNavElement
    'profile-nav': HTMLProfileNavElement
    'shared-header': HTMLSharedHeaderElement
    'snail-trail-link': HTMLSnailTrailLinkElement
    'snail-trail': HTMLSnailTrailElement
  }

  interface ElementTagNameMap {
    'heart-button': HTMLHeartButtonElement;
    'shared-footer': HTMLSharedFooterElement;
    'global-nav': HTMLGlobalNavElement;
    'nav-ctas': HTMLNavCtasElement;
    'nav-section-subnav': HTMLNavSectionSubnavElement;
    'nav-section': HTMLNavSectionElement;
    'give-nav': HTMLGiveNavElement;
    'profile-nav': HTMLProfileNavElement;
    'shared-header': HTMLSharedHeaderElement;
    'snail-trail-link': HTMLSnailTrailLinkElement;
    'snail-trail': HTMLSnailTrailElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
