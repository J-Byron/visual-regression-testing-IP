import { Component, Prop, State, h, Listen, Element } from '@stencil/core';
import Fragment from '../../../shared/fragment';
import { Utils } from '../../../shared/utils';
import * as iconData from './global-nav-icons.json';
import { HTMLStencilElement } from '@stencil/core/internal';
import { isAuthenticated, getAuthService } from '../../../global/authInit';
import { CrdsApolloService } from '../../../shared/apollo';
import { GET_USER } from './global-nav.graphql';
import { CrdsAuthenticationService } from '@crds_npm/crds-client-auth';

@Component({
  tag: 'global-nav',
  styleUrl: 'global-nav.scss',
  shadow: true
})
export class GlobalNav {
  @Prop() env: string;
  @Prop() data: any = {};

  @State() openNavName: string = '';
  @State() isAuthenticated: boolean = false;
  @State() topOffset: number;
  @State() avatarUrl: string;
  @State() user: any;
  @Element() public host: HTMLStencilElement;

  private element: HTMLElement;
  private auth: CrdsAuthenticationService;
  private preventClose: boolean;

  public async componentWillLoad() {
    this.auth = getAuthService();
    await CrdsApolloService.subscribeToApolloClient();
    if (isAuthenticated()) this.getUser();
    if (!this.data.config) return;
  }

  public componentDidLoad() {
    this.topOffset = this.element.getBoundingClientRect().top + window.scrollY;
  }

  private getUser() {
    return CrdsApolloService.apolloClient.query({ query: GET_USER }).then(response => {
      this.user = response.data.user;
    });
  }

  private authChangeCallback() {
    if (!isAuthenticated()) this.redirectToRoot();
  }

  /* Handle authentication */
  private handleSignOut() {
    this.auth.signOut().subscribe(() => {
      this.authChangeCallback();
    });
  }

  private redirectToRoot() {
    window.location.replace(this.rootURL());
  }

  /* Handle nav open/close */
  private isNavOpen() {
    const navNames = ['main-nav', 'my-site', 'give-nav', 'profile-nav'];
    return navNames.includes(this.openNavName);
  }

  private toggleNav(event, navName, navRequiresAuth: boolean = false) {
    const path = event.composedPath && event.composedPath(event.target);
    if (
      path &&
      path.find(
        el =>
          el.classList &&
          Object.keys(el.classList).find(cl => el.classList[cl] == 'popper') &&
          path.find(el => Object.keys(el.classList).find(cl => el.classList[cl] == 'open'))
      )
    )
      return (this.preventClose = true);
    if (this.openNavName === navName) {
      event.preventDefault();
      this.openNavName = '';
    } else if (navRequiresAuth) {
      if (isAuthenticated()) {
        event.preventDefault();
        this.openNavName = navName;
      }
    } else {
      event.preventDefault();
      this.openNavName = navName;
    }
    const overflow = Utils.isMobile() ? 'overflow: hidden' : 'overflow: scroll';
    this.preventClose = true;
    const docStyle = this.isNavOpen() ? `${overflow}; position: absolute; width: 100vw;` : `overflow: scroll;`;
    document.body.setAttribute('style', docStyle);
  }

  @Listen('click', { target: 'window' })
  closeNav(event) {
    const path = event.composedPath && event.composedPath(event.target);
    if (path && path.find(el => el.className === this.openNavName)) return;
    if (this.preventClose) return (this.preventClose = false);
    if (this.isNavOpen()) {
      event.preventDefault();
    }

    this.openNavName = '';
    document.body.setAttribute('style', 'overflow: scroll;');
  }

  /* Misc */
  private rootURL() {
    return `https://${Utils.getSubdomain(this.env)}.crossroads.net`;
  }

  private authProfileIcon() {
    const avatarUrl = this.user && this.user.imageUrl;
    return `<div class="account-authenticated" style="background-image: url('${avatarUrl || ''}');"/>`;
  }

  private giveData() {
    return (this.data as any).give;
  }

  /* Render elements */
  public render() {
    return (
      <Fragment>
        <header
          ref={el => (this.element = el)}
          class={this.isNavOpen() ? 'nav-is-showing' : ''}
          style={{
            top: `${this.openNavName === 'profile-nav' || this.openNavName === 'give-nav' ? this.topOffset : 0}px`
          }}
        >
          <div>
            <div class="global-nav-items">
              <div class="global-actions">
                <a
                  class={`menu-container ${this.openNavName === 'main-nav' ? 'nav-is-showing' : ''}`}
                  onClick={event => this.toggleNav(event, 'main-nav')}
                  data-label="menu"
                  data-automation-id="sh-menu"
                >
                  <div class={iconData.main.class} innerHTML={iconData.main.innerHTML} />
                  <div class={iconData.close.class} innerHTML={iconData.close.innerHTML} />
                </a>
                <a
                  href={`${this.rootURL()}/search`}
                  class="search-container"
                  data-automation-id="sh-search"
                  data-label="search"
                >
                  <div class={iconData.search.class} innerHTML={iconData.search.innerHTML} />
                </a>
              </div>

              <a
                href={this.rootURL()}
                data-automation-id="sh-logo"
                class={iconData.logo.class}
                innerHTML={iconData.logo.innerHTML}
              />

              <div class="user-actions">
                <a
                  class="my-site-container"
                  onClick={event => this.toggleNav(event, 'my-site')}
                  data-automation-id="sh-my-site"
                >
                  <my-site />
                </a>

                {!this.giveData().children && (
                  <a
                    href={this.giveData().href}
                    class="give-container"
                    data-label={this.giveData().title}
                    data-automation-id="sh-give"
                  >
                    <div class={iconData.give.class} innerHTML={iconData.give.innerHTML} />
                  </a>
                )}

                {this.giveData().children && (
                  <a
                    class={`give-container ${this.openNavName === 'give-nav' ? 'nav-is-showing' : ''}`}
                    onClick={event => this.toggleNav(event, 'give-nav')}
                    data-label={this.giveData().title}
                    data-automation-id="sh-give"
                  >
                    <div class={iconData.give.class} innerHTML={iconData.give.innerHTML} />
                    <div class={iconData.close.class} innerHTML={iconData.close.innerHTML} />
                  </a>
                )}

                <a
                  class={`profile-container ${this.openNavName === 'profile-nav' ? 'nav-is-showing' : ''}`}
                  onClick={event => this.toggleNav(event, 'profile-nav', true)}
                  data-label={isAuthenticated() ? 'my account' : 'sign in'}
                  href={`${this.rootURL()}/signin`}
                  data-automation-id="sh-profile"
                >
                  <div
                    class={iconData.profile.class}
                    innerHTML={isAuthenticated() ? this.authProfileIcon() : iconData.profile.innerHTML}
                  />
                  <div class={iconData.close.class} innerHTML={iconData.close.innerHTML} />
                </a>
              </div>
            </div>

            {this.giveData().children && (
              <give-nav isNavShowing={this.openNavName === 'give-nav'} data={this.giveData()} />
            )}
            <profile-nav
              isNavShowing={this.openNavName === 'profile-nav' && isAuthenticated()}
              handleSignOut={this.handleSignOut.bind(this)}
              data={this.data.profile}
            />
          </div>
        </header>
        <main-nav isNavShowing={this.openNavName === 'main-nav'} data={this.data.nav} promoData={this.data.promos} />
        <div class={`popper-overlay ${this.isNavOpen() ? 'is-showing' : ''}`} />
        <div class={`close-nav ${this.isNavOpen() ? 'is-showing' : ''}`}>
          <div class="close-nav-icon" innerHTML={iconData.close.innerHTML} onClick={this.closeNav.bind(this)} />
        </div>
      </Fragment>
    );
  }
}
