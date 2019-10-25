/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Response,
} from './components/crds-tithe-challenge/crds-tithe-challenge.interface';
import {
  MySiteUser,
} from './components/crds-shared-header/profile-nav/my-site/my-site-interface';

export namespace Components {
  interface CrdsGreeting {
    'authToken': string;
    'defaultName': string;
  }
  interface CrdsGroupList {
    'authToken': string;
  }
  interface CrdsHeartButton {
    /**
    * Unique identifier for likeable resource
    */
    'contentfulId': string;
    /**
    * Total number of hearts
    */
    'count': number;
    /**
    * Boolean indicating whether likeable resource has been liked
    */
    'isLiked': boolean;
    /**
    * Cache key for localStorage
    */
    'storageKey': string;
  }
  interface CrdsModal {
    'isActive': boolean;
    'label': string;
    'onModalClose': Function;
  }
  interface CrdsRecommendedContent {
    'authToken': string;
  }
  interface CrdsSharedFooter {
    'env': string;
    'src': string;
  }
  interface CrdsSharedHeader {
    'env': string;
    'src': string;
  }
  interface CrdsSiteHappenings {
    'authToken': string;
  }
  interface CrdsSnailTrail {
    'env': string;
    'name': string;
    'src': string;
  }
  interface CrdsSnailTrailLink {
    'automationId': string;
    'href': string;
    'isActive': boolean;
  }
  interface CrdsSubscribe {
    'label': string;
    'src': string;
  }
  interface CrdsTitheChallenge {
    'authToken': string;
    'selectedFeeling': Response;
  }
  interface GiveNav {
    'data': any;
    'isNavShowing': boolean;
  }
  interface GlobalNav {
    'data': any;
    'env': string;
  }
  interface MainNav {
    'data': any;
    'isNavShowing': boolean;
    'promoData': string;
  }
  interface MySite {
    'authToken': string;
    'defaultName': string;
    'user': MySiteUser;
  }
  interface NavCtas {
    'data': string;
  }
  interface NavSection {
    'handleClick': Function;
    'isActive': boolean;
    'sectionName': string;
  }
  interface NavSectionSubnav {
    'data': any;
    'handleBackClick': Function;
    'isActive': boolean;
    'subNavName': string;
  }
  interface ProfileNav {
    'currentUser': any;
    'data': any;
    'handleSignOut': Function;
    'isNavShowing': boolean;
  }
}

declare global {


  interface HTMLCrdsGreetingElement extends Components.CrdsGreeting, HTMLStencilElement {}
  var HTMLCrdsGreetingElement: {
    prototype: HTMLCrdsGreetingElement;
    new (): HTMLCrdsGreetingElement;
  };

  interface HTMLCrdsGroupListElement extends Components.CrdsGroupList, HTMLStencilElement {}
  var HTMLCrdsGroupListElement: {
    prototype: HTMLCrdsGroupListElement;
    new (): HTMLCrdsGroupListElement;
  };

  interface HTMLCrdsHeartButtonElement extends Components.CrdsHeartButton, HTMLStencilElement {}
  var HTMLCrdsHeartButtonElement: {
    prototype: HTMLCrdsHeartButtonElement;
    new (): HTMLCrdsHeartButtonElement;
  };

  interface HTMLCrdsModalElement extends Components.CrdsModal, HTMLStencilElement {}
  var HTMLCrdsModalElement: {
    prototype: HTMLCrdsModalElement;
    new (): HTMLCrdsModalElement;
  };

  interface HTMLCrdsRecommendedContentElement extends Components.CrdsRecommendedContent, HTMLStencilElement {}
  var HTMLCrdsRecommendedContentElement: {
    prototype: HTMLCrdsRecommendedContentElement;
    new (): HTMLCrdsRecommendedContentElement;
  };

  interface HTMLCrdsSharedFooterElement extends Components.CrdsSharedFooter, HTMLStencilElement {}
  var HTMLCrdsSharedFooterElement: {
    prototype: HTMLCrdsSharedFooterElement;
    new (): HTMLCrdsSharedFooterElement;
  };

  interface HTMLCrdsSharedHeaderElement extends Components.CrdsSharedHeader, HTMLStencilElement {}
  var HTMLCrdsSharedHeaderElement: {
    prototype: HTMLCrdsSharedHeaderElement;
    new (): HTMLCrdsSharedHeaderElement;
  };

  interface HTMLCrdsSiteHappeningsElement extends Components.CrdsSiteHappenings, HTMLStencilElement {}
  var HTMLCrdsSiteHappeningsElement: {
    prototype: HTMLCrdsSiteHappeningsElement;
    new (): HTMLCrdsSiteHappeningsElement;
  };

  interface HTMLCrdsSnailTrailElement extends Components.CrdsSnailTrail, HTMLStencilElement {}
  var HTMLCrdsSnailTrailElement: {
    prototype: HTMLCrdsSnailTrailElement;
    new (): HTMLCrdsSnailTrailElement;
  };

  interface HTMLCrdsSnailTrailLinkElement extends Components.CrdsSnailTrailLink, HTMLStencilElement {}
  var HTMLCrdsSnailTrailLinkElement: {
    prototype: HTMLCrdsSnailTrailLinkElement;
    new (): HTMLCrdsSnailTrailLinkElement;
  };

  interface HTMLCrdsSubscribeElement extends Components.CrdsSubscribe, HTMLStencilElement {}
  var HTMLCrdsSubscribeElement: {
    prototype: HTMLCrdsSubscribeElement;
    new (): HTMLCrdsSubscribeElement;
  };

  interface HTMLCrdsTitheChallengeElement extends Components.CrdsTitheChallenge, HTMLStencilElement {}
  var HTMLCrdsTitheChallengeElement: {
    prototype: HTMLCrdsTitheChallengeElement;
    new (): HTMLCrdsTitheChallengeElement;
  };

  interface HTMLGiveNavElement extends Components.GiveNav, HTMLStencilElement {}
  var HTMLGiveNavElement: {
    prototype: HTMLGiveNavElement;
    new (): HTMLGiveNavElement;
  };

  interface HTMLGlobalNavElement extends Components.GlobalNav, HTMLStencilElement {}
  var HTMLGlobalNavElement: {
    prototype: HTMLGlobalNavElement;
    new (): HTMLGlobalNavElement;
  };

  interface HTMLMainNavElement extends Components.MainNav, HTMLStencilElement {}
  var HTMLMainNavElement: {
    prototype: HTMLMainNavElement;
    new (): HTMLMainNavElement;
  };

  interface HTMLMySiteElement extends Components.MySite, HTMLStencilElement {}
  var HTMLMySiteElement: {
    prototype: HTMLMySiteElement;
    new (): HTMLMySiteElement;
  };

  interface HTMLNavCtasElement extends Components.NavCtas, HTMLStencilElement {}
  var HTMLNavCtasElement: {
    prototype: HTMLNavCtasElement;
    new (): HTMLNavCtasElement;
  };

  interface HTMLNavSectionElement extends Components.NavSection, HTMLStencilElement {}
  var HTMLNavSectionElement: {
    prototype: HTMLNavSectionElement;
    new (): HTMLNavSectionElement;
  };

  interface HTMLNavSectionSubnavElement extends Components.NavSectionSubnav, HTMLStencilElement {}
  var HTMLNavSectionSubnavElement: {
    prototype: HTMLNavSectionSubnavElement;
    new (): HTMLNavSectionSubnavElement;
  };

  interface HTMLProfileNavElement extends Components.ProfileNav, HTMLStencilElement {}
  var HTMLProfileNavElement: {
    prototype: HTMLProfileNavElement;
    new (): HTMLProfileNavElement;
  };
  interface HTMLElementTagNameMap {
    'crds-greeting': HTMLCrdsGreetingElement;
    'crds-group-list': HTMLCrdsGroupListElement;
    'crds-heart-button': HTMLCrdsHeartButtonElement;
    'crds-modal': HTMLCrdsModalElement;
    'crds-recommended-content': HTMLCrdsRecommendedContentElement;
    'crds-shared-footer': HTMLCrdsSharedFooterElement;
    'crds-shared-header': HTMLCrdsSharedHeaderElement;
    'crds-site-happenings': HTMLCrdsSiteHappeningsElement;
    'crds-snail-trail': HTMLCrdsSnailTrailElement;
    'crds-snail-trail-link': HTMLCrdsSnailTrailLinkElement;
    'crds-subscribe': HTMLCrdsSubscribeElement;
    'crds-tithe-challenge': HTMLCrdsTitheChallengeElement;
    'give-nav': HTMLGiveNavElement;
    'global-nav': HTMLGlobalNavElement;
    'main-nav': HTMLMainNavElement;
    'my-site': HTMLMySiteElement;
    'nav-ctas': HTMLNavCtasElement;
    'nav-section': HTMLNavSectionElement;
    'nav-section-subnav': HTMLNavSectionSubnavElement;
    'profile-nav': HTMLProfileNavElement;
  }
}

declare namespace LocalJSX {
  interface CrdsGreeting extends JSXBase.HTMLAttributes<HTMLCrdsGreetingElement> {
    'authToken'?: string;
    'defaultName'?: string;
  }
  interface CrdsGroupList extends JSXBase.HTMLAttributes<HTMLCrdsGroupListElement> {
    'authToken'?: string;
  }
  interface CrdsHeartButton extends JSXBase.HTMLAttributes<HTMLCrdsHeartButtonElement> {
    /**
    * Unique identifier for likeable resource
    */
    'contentfulId'?: string;
    /**
    * Total number of hearts
    */
    'count'?: number;
    /**
    * Boolean indicating whether likeable resource has been liked
    */
    'isLiked'?: boolean;
    /**
    * Cache key for localStorage
    */
    'storageKey'?: string;
  }
  interface CrdsModal extends JSXBase.HTMLAttributes<HTMLCrdsModalElement> {
    'isActive'?: boolean;
    'label'?: string;
    'onModalClose'?: Function;
  }
  interface CrdsRecommendedContent extends JSXBase.HTMLAttributes<HTMLCrdsRecommendedContentElement> {
    'authToken'?: string;
  }
  interface CrdsSharedFooter extends JSXBase.HTMLAttributes<HTMLCrdsSharedFooterElement> {
    'env'?: string;
    'src'?: string;
  }
  interface CrdsSharedHeader extends JSXBase.HTMLAttributes<HTMLCrdsSharedHeaderElement> {
    'env'?: string;
    'src'?: string;
  }
  interface CrdsSiteHappenings extends JSXBase.HTMLAttributes<HTMLCrdsSiteHappeningsElement> {
    'authToken'?: string;
  }
  interface CrdsSnailTrail extends JSXBase.HTMLAttributes<HTMLCrdsSnailTrailElement> {
    'env'?: string;
    'name'?: string;
    'src'?: string;
  }
  interface CrdsSnailTrailLink extends JSXBase.HTMLAttributes<HTMLCrdsSnailTrailLinkElement> {
    'automationId'?: string;
    'href'?: string;
    'isActive'?: boolean;
  }
  interface CrdsSubscribe extends JSXBase.HTMLAttributes<HTMLCrdsSubscribeElement> {
    'label'?: string;
    'src'?: string;
  }
  interface CrdsTitheChallenge extends JSXBase.HTMLAttributes<HTMLCrdsTitheChallengeElement> {
    'authToken'?: string;
    'selectedFeeling'?: Response;
  }
  interface GiveNav extends JSXBase.HTMLAttributes<HTMLGiveNavElement> {
    'data'?: any;
    'isNavShowing'?: boolean;
  }
  interface GlobalNav extends JSXBase.HTMLAttributes<HTMLGlobalNavElement> {
    'data'?: any;
    'env'?: string;
  }
  interface MainNav extends JSXBase.HTMLAttributes<HTMLMainNavElement> {
    'data'?: any;
    'isNavShowing'?: boolean;
    'promoData'?: string;
  }
  interface MySite extends JSXBase.HTMLAttributes<HTMLMySiteElement> {
    'authToken'?: string;
    'defaultName'?: string;
    'user'?: MySiteUser;
  }
  interface NavCtas extends JSXBase.HTMLAttributes<HTMLNavCtasElement> {
    'data'?: string;
  }
  interface NavSection extends JSXBase.HTMLAttributes<HTMLNavSectionElement> {
    'handleClick'?: Function;
    'isActive'?: boolean;
    'sectionName'?: string;
  }
  interface NavSectionSubnav extends JSXBase.HTMLAttributes<HTMLNavSectionSubnavElement> {
    'data'?: any;
    'handleBackClick'?: Function;
    'isActive'?: boolean;
    'subNavName'?: string;
  }
  interface ProfileNav extends JSXBase.HTMLAttributes<HTMLProfileNavElement> {
    'currentUser'?: any;
    'data'?: any;
    'handleSignOut'?: Function;
    'isNavShowing'?: boolean;
  }

  interface IntrinsicElements {
    'crds-greeting': CrdsGreeting;
    'crds-group-list': CrdsGroupList;
    'crds-heart-button': CrdsHeartButton;
    'crds-modal': CrdsModal;
    'crds-recommended-content': CrdsRecommendedContent;
    'crds-shared-footer': CrdsSharedFooter;
    'crds-shared-header': CrdsSharedHeader;
    'crds-site-happenings': CrdsSiteHappenings;
    'crds-snail-trail': CrdsSnailTrail;
    'crds-snail-trail-link': CrdsSnailTrailLink;
    'crds-subscribe': CrdsSubscribe;
    'crds-tithe-challenge': CrdsTitheChallenge;
    'give-nav': GiveNav;
    'global-nav': GlobalNav;
    'main-nav': MainNav;
    'my-site': MySite;
    'nav-ctas': NavCtas;
    'nav-section': NavSection;
    'nav-section-subnav': NavSectionSubnav;
    'profile-nav': ProfileNav;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


