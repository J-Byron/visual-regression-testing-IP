import { Component, Prop, State, h, Listen } from '@stencil/core';
import Fragment from '../../../shared/fragment';

// import { Auth } from '../../../shared/auth';
import { Utils } from '../../../shared/utils';
import { Auth } from '../../../shared/__mocks__/auth';
//TODO need to simplify around profile auth
import * as iconData from './global-nav-icon.json';

@Component({
  tag: 'global-nav',
  styleUrl: 'global-nav.scss',
  shadow: true
})
export class GlobalNav {
  @Prop() config: Object;
  @Prop() env: string;
  @Prop() data: JSON;

  @State() openNavName: string = '';
  @State() isAuthenticated: boolean = false;
  @State() offset: number;

  private element: HTMLElement;
  //private navNames = ['main-nav', 'give-nav', 'profile-nav'];

  auth: any = {};

  componentDidLoad() {
    this.offset = this.element.getBoundingClientRect().top + window.scrollY;
  }

  componentWillLoad() {
    if (!this.config || this.auth.config) return;
    this.auth = new Auth(Object.assign(this.config, { env: this.env }));
    this.auth.listen(this.authChangeCallback.bind(this));
  }

  /* Handle authentication */
  handleSignOut() {
    this.auth.signOut(this.authChangeCallback.bind(this));
  }

  authChangeCallback() {
    this.isAuthenticated = this.auth.authenticated;
    if (!this.isAuthenticated) {
      this.redirectToRoot();
    }
  }

  redirectToRoot() {
    window.location.replace(this.rootURL());
  }

  /* Handle nav open/close */
  isNavOpen() {
    const navNames = ['main-nav', 'give-nav', 'profile-nav'];
    return navNames.includes(this.openNavName);
  }

  toggleNav(event, navName, navRequiresAuth: boolean = false) {
    event.stopPropagation();

    if (this.openNavName === navName) {
      event.preventDefault();
      this.openNavName = '';//Nav can always close
    } else if (navRequiresAuth) {
      if (this.isAuthenticated) {
        event.preventDefault();
        this.openNavName = navName;
      }
    } else {
      event.preventDefault();
      this.openNavName = navName;
    }

    const docStyle = this.isNavOpen() ? 'overflow: hidden; position: absolute; width: 100vw;' : 'overflow: scroll;';
    document.body.setAttribute('style', docStyle);
  }

  @Listen('click', { target: 'window' })
  closeNav(event) {
    if (this.isNavOpen()) {
      event.preventDefault(); //Don't prevent other links from working
    }

    this.openNavName = '';
    document.body.setAttribute('style', 'overflow: scroll;');
  }

  /* Misc */
  rootURL() {
    return `https://${Utils.getSubdomain(this.env)}.crossroads.net`;
  }

  authProfileIcon() {
    const avatarUrl = ((this.auth && this.auth.currentUser as any) || {}).avatarUrl
    return `<div class="account-authenticated" style="background-image: url('${avatarUrl || ''}');"/>`
  }

  /* Render elements */
  render() {
    return (
      <Fragment>
        <header
          ref={el => (this.element = el)}
          class={this.isNavOpen() ? 'nav-is-showing' : ''}
          style={{ top: `${this.openNavName === 'profile-nav' || this.openNavName === 'give-nav' ? this.offset : 0}px` }}
        >
          <div>
            <div class="global-nav-items">
              <div class="global-actions">
                <a
                  class={`menu-container ${this.openNavName === 'main-nav' ? 'nav-is-showing' : ''}`}
                  onClick={event => this.toggleNav(event, 'main-nav')}
                  data-label="menu"
                  data-automation-id="sh-menu">
                  <div class={iconData.main.class} innerHTML={iconData.main.innerHTML} />
                  <div class={iconData.close.class} innerHTML={iconData.close.innerHTML} />
                </a>

                <a href="/search" class="search-container" data-automation-id="sh-search" data-label="search">
                  <div class={iconData.search.class} innerHTML={iconData.search.innerHTML} />
                </a>
              </div>

              <a href={this.rootURL()} data-automation-id="sh-logo" class={iconData.logo.class} innerHTML={iconData.logo.innerHTML} />

              <div class="user-actions">
                <a
                  class={`give-container ${this.openNavName === 'give-nav' ? 'nav-is-showing' : ''}`}
                  onClick={event => this.toggleNav(event, 'give-nav')}
                  data-label="give"
                  data-automation-id="sh-give">
                  <div class={iconData.give.class} innerHTML={iconData.give.innerHTML} />
                  <div class={iconData.close.class} innerHTML={iconData.close.innerHTML} />
                </a>

                <a
                  class={`profile-container ${this.openNavName === 'profile-nav' ? 'nav-is-showing' : ''}`}
                  onClick={event => this.toggleNav(event, 'profile-nav', true)}
                  data-label={this.isAuthenticated ? 'my account' : 'sign in'}
                  href={`${this.rootURL()}/signin`}
                  data-automation-id="sh-profile">
                  <div class={iconData.profile.class} innerHTML={this.isAuthenticated ? this.authProfileIcon() : iconData.profile.innerHTML} />
                  <div class={iconData.close.class} innerHTML={iconData.close.innerHTML} />
                </a>

              </div>
            </div>
            <give-nav isNavShowing={this.openNavName === 'give-nav'} data={(this.data as any).give} />
            <profile-nav
              isNavShowing={this.openNavName === 'profile-nav' && this.isAuthenticated}
              handleSignOut={this.handleSignOut.bind(this)}
              currentUser={this.auth.currentUser}
              data={(this.data as any).profile}
            />
          </div>
        </header>
        <main-nav
          isNavShowing={this.openNavName === 'main-nav'}
          data={(this.data as any).nav}
          promoData={(this.data as any).promos}
        />

        <div class={`close-nav ${this.isNavOpen() ? 'is-showing' : ''}`}>
          <div class="close-nav-icon" innerHTML={iconData.close.innerHTML} onClick={this.closeNav.bind(this)} />
        </div>
      </Fragment>
    );
  }
  //TODO if profile picture set, changing the size of the dev tools shrinks the picture - this doesn't happen with give. Prevent this from happening. This is an existing bug.
}//230