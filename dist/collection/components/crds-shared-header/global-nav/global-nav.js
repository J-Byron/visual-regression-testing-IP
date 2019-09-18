import { h } from '@stencil/core';
import Fragment from '../../../shared/fragment';
import { Auth } from '../../../shared/auth';
import { Utils } from '../../../shared/utils';
export class GlobalNav {
    constructor() {
        this.giveNavIsShowing = false;
        this.mainNavIsShowing = false;
        this.profileNavIsShowing = false;
        this.authenticated = false;
        this.auth = {};
    }
    initAuth() {
        if (!this.config || this.auth.config)
            return;
        this.auth = new Auth(Object.assign(this.config, { env: this.env }));
        this.auth.listen(this.authChangeCallback.bind(this));
    }
    componentDidLoad() {
        this.offset = this.element.getBoundingClientRect().top + window.scrollY;
    }
    authChangeCallback() {
        this.authenticated = this.auth.authenticated;
        if (!this.authenticated) {
            this.redirectToRoot();
        }
    }
    handleSignOut() {
        this.auth.signOut(this.authChangeCallback.bind(this));
    }
    redirectToRoot() {
        window.location.replace(this.rootURL());
    }
    handleProfileClick(event) {
        if (!this.auth.authenticated)
            return event.stopPropagation();
        return this.navClickHandler(event, 'profile-nav');
    }
    // TODO: consoliate menuClasses, profileClasses, and  giveClasses
    // ------------------------------------------------------
    menuClasses() {
        let classes = ['menu-container'];
        if (this.mainNavIsShowing)
            classes.push('nav-is-showing');
        return classes.join(' ');
    }
    profileClasses() {
        let classes = ['profile-container'];
        if (this.profileNavIsShowing && this.authenticated)
            classes.push('nav-is-showing');
        return classes.join(' ');
    }
    giveClasses() {
        let classes = ['give-container'];
        if (this.giveNavIsShowing)
            classes.push('nav-is-showing');
        return classes.join(' ');
    }
    rootURL() {
        return `https://${Utils.getSubdomain(this.env)}.crossroads.net`;
    }
    render() {
        this.initAuth();
        let logo = '<svg width="308" height="81" viewBox="0 0 308 81" xmlns="http://www.w3.org/2000/svg"><path id="crossroads-church-logo" d="M211.9 52.2h3.3v10.5h.1c1.1-2.4 3.9-3.4 6.3-3.4 5.2 0 6.8 3 6.8 7.3v13H225V66.2c0-2.4-1.5-4-4-4-4 0-5.9 2.6-5.9 6.2v11.2h-3.3V52.2h.1zm-7.2 14c-.5-2.5-2.2-4-4.9-4-4.7 0-6.2 3.7-6.2 7.8 0 3.6 1.7 7.3 5.8 7.3 3.1 0 5-1.8 5.4-4.8h3.3c-.7 4.8-3.8 7.7-8.7 7.7-6.1 0-9.3-4.2-9.3-10.1 0-5.9 3.1-10.6 9.4-10.6 4.5 0 8.1 2.1 8.6 6.8h-3.4v-.1zm49.5-6.4h3.1V64h.1c1.6-3.2 3.8-4.8 7.3-4.6v3.5c-5.3 0-7.2 3-7.2 8v8.8h-3.3V59.8zm-4.8 19.8h-3.1v-3.1h-.1c-1.4 2.5-3.6 3.6-6.4 3.6-5.2 0-6.8-3-6.8-7.3v-13h3.3v13.4c0 2.4 1.5 4 4 4 4 0 5.9-2.6 5.9-6.2V59.8h3.3v19.8h-.1zm38.2-27.4h3.3v10.5h.1c1.1-2.4 3.9-3.4 6.3-3.4 5.2 0 6.8 3 6.8 7.3v13h-3.3V66.2c0-2.4-1.5-4-4-4-4 0-5.9 2.6-5.9 6.2v11.2h-3.3V52.2zm-7.2 14c-.5-2.5-2.2-4-4.9-4-4.7 0-6.2 3.7-6.2 7.8 0 3.6 1.7 7.3 5.8 7.3 3.1 0 5-1.8 5.4-4.8h3.3c-.7 4.8-3.8 7.7-8.7 7.7-6.1 0-9.3-4.2-9.3-10.1 0-5.9 3.1-10.6 9.4-10.6 4.5 0 8.1 2.1 8.6 6.8h-3.4v-.1zm7.6-45.7c0-1.6 1.4-2.2 3.6-2.2 1 0 1.9.2 2.5.8.7.5 1.1 1.3 1.2 2.3h11.4c-.7-8.4-8.8-10-15.7-10-6 0-13.6 2-14.8 8.6V.5h-12.6v15c-2.7-3.1-5.4-4.1-9.4-4.1-6.5 0-11.7 5-13 13 0-7.5-1-13-15.9-13-12.5 0-17.3 3.9-17.3 10.6h12.1c.3-2.7 2.7-3.1 4.4-3.1 1.3 0 4.1.3 4.1 2.6 0 4.7-14.5 1.5-20.2 7.4v-1.2c0-9.8-6.9-16.4-18-16.4-6.5 0-11.7 2.3-14.8 6.5v-6.3c-.5-.1-1.1-.2-1.6-.2-4.9 0-8 2.4-9.7 7.3l-.1-6.4h-11.4v17.6c-3.9-7.3-19.1-5.6-19.1-9.4 0-1.6 1.4-2.2 3.6-2.2 1 0 1.9.2 2.5.8.7.5 1.1 1.3 1.2 2.3h11.4c-.7-8.4-8.8-10-15.7-10-6.6 0-14.9 2.4-14.9 10.4 0 12.3 19.4 8.2 19.4 13.3 0 2.2-2.1 2.8-4 2.8-1.2 0-2.3-.3-3.1-1-.8-.7-1.3-1.6-1.3-2.9H123v-.3c0-11.8-20-8.9-20-13.3 0-1.6 1.4-2.2 3.6-2.2 1 0 1.9.2 2.5.8.7.5 1.1 1.3 1.2 2.3h11.4c-.7-8.4-8.8-10-15.7-10-6.6 0-15 2.4-15 10.4v.3c-2.2-6.6-8.3-10.7-17.1-10.7-6.5 0-11.7 2.3-14.8 6.5v-6.3c-.5-.1-1.1-.2-1.6-.2-4.9 0-8 2.4-9.7 7.3l-.1-6.4H36.3v19.4H23.8c-.4 2.5-1.6 4.7-4.9 4.7-3.7 0-5.5-3.1-5.5-7.9 0-3.7.8-8.6 5.5-8.6 1.4 0 2.5.4 3.2 1.3.8.8 1.3 1.9 1.3 3.3h12.7c-.9-9.4-8.9-13-17.3-13-10.4 0-18 6.2-18 17 0 10.7 7.8 16.4 18 16.4 8.4 0 15.8-3.3 17.4-12v11.1h12.5V33c0-6.8 2.6-9.2 7.7-9.2-.3 1.5-.5 3-.5 4.7 0 10.8 7.8 16.3 18 16.3 7.4 0 13.6-2.9 16.4-9 1.5 7.1 8.9 9 15.6 9 8.7 0 14-2.5 16-6.6 2.5 5.1 8.9 6.6 14.8 6.6 8.9 0 14.1-2.6 16.1-6.8v5.9h12.6V33c0-6.8 2.6-9.2 7.7-9.2-.3 1.5-.5 3-.5 4.7 0 10.8 7.8 16.3 18 16.3 6.9 0 12.8-2.5 15.8-7.8.9 5.4 5.7 7.8 11.1 7.8 4.7 0 8.3-1 11.9-4.3l.6 3.4h13v-.6c-1.6-1.3-1.7-2.2-1.7-4v-6.5c1.3 7 6 12.1 14 12.1 4 0 6.7-1.3 9.7-5.1V44h11.3v-5.6c2.6 5 8.9 6.5 14.7 6.5 11.6 0 17-4.5 17-11 0-11.9-20-9-20-13.4zM74 36.4c-3.2 0-5.4-2.6-5.4-8.6 0-3.5 1.3-8 5.6-8 3.3-.2 5.3 3.3 5.3 8-.1 6-2.1 8.6-5.5 8.6zm32.5 1.6c-1.2 0-2.3-.3-3.1-1-.8-.7-1.3-1.6-1.3-2.9h-11c.6-1.8.9-3.9.9-6.3 0-.8-.1-1.5-.1-2.2 3.6 7.7 18.6 5.1 18.6 9.6-.1 2.1-2.1 2.8-4 2.8zm84.1-1.6c-3.2 0-5.4-2.6-5.4-8.6 0-3.5 1.3-8 5.5-8 3.3-.2 5.3 3.3 5.3 8 0 6-2 8.6-5.4 8.6zm32.6 1.3c-2.5 0-4-1.1-4-2.7 0-4.1 5.4-3.1 9.5-5.1.3 4.4-1.1 7.8-5.5 7.8zm35.2-1.9c-4.1 0-4.9-3.9-4.9-7.2 0-3.5 1.1-7.5 5.3-7.5 4.2 0 5.4 3.8 5.4 7.3-.1 3.7-1.4 7.4-5.8 7.4zm33.1 2.2c-1.2 0-2.3-.3-3.1-1-.9-.7-1.3-1.6-1.3-2.9h-10.8V23.8c1.9 9.9 19.2 6.6 19.2 11.4 0 2.1-2.1 2.8-4 2.8z" fill-rule="nonzero" fill=""/></svg>';
        let menu = '<svg id="menu-thin" width="256" height="256" viewBox="0 0 256 256"><g><path d="M242.852679,47.6875 L14.1473214,47.6875 C12.4091038,47.6875 11,46.5915304 11,45.2395833 L11,35.4479167 C11,34.0959696 12.4091038,33 14.1473214,33 L242.852679,33 C244.590896,33 246,34.0959696 246,35.4479167 L246,45.2395833 C246,46.5915304 244.590896,47.6875 242.852679,47.6875 Z M242.852679,135.8125 L14.1473214,135.8125 C12.4091038,135.8125 11,134.71653 11,133.364583 L11,123.572917 C11,122.22097 12.4091038,121.125 14.1473214,121.125 L242.852679,121.125 C244.590896,121.125 246,122.22097 246,123.572917 L246,133.364583 C246,134.71653 244.590896,135.8125 242.852679,135.8125 Z M242.852679,223.9375 L14.1473214,223.9375 C12.4091038,223.9375 11,222.84153 11,221.489583 L11,211.697917 C11,210.34597 12.4091038,209.25 14.1473214,209.25 L242.852679,209.25 C244.590896,209.25 246,210.34597 246,211.697917 L246,221.489583 C246,222.84153 244.590896,223.9375 242.852679,223.9375 Z"/></g></svg>';
        let search = '<svg id="search-thin" width="256" height="256" viewBox="0 0 256 256"><g><path d="M244.375275,231.976661 L184.91724,172.518627 C183.857136,171.458523 182.474391,170.905425 180.999463,170.905425 L176.252038,170.905425 C192.061423,153.805478 201.740638,130.990186 201.740638,105.870319 C201.740638,52.911186 158.829452,10 105.870319,10 C52.911186,10 10,52.911186 10,105.870319 C10,158.829452 52.911186,201.740638 105.870319,201.740638 C130.990186,201.740638 153.805478,192.061423 170.905425,176.29813 L170.905425,180.999463 C170.905425,182.474391 171.504614,183.857136 172.518627,184.91724 L231.976661,244.375275 C234.142962,246.541575 237.645916,246.541575 239.812216,244.375275 L244.375275,239.812216 C246.541575,237.645916 246.541575,234.142962 244.375275,231.976661 Z M105.870319,186.991358 C61.0232899,186.991358 24.7492798,150.717348 24.7492798,105.870319 C24.7492798,61.0232899 61.0232899,24.7492798 105.870319,24.7492798 C150.717348,24.7492798 186.991358,61.0232899 186.991358,105.870319 C186.991358,150.717348 150.717348,186.991358 105.870319,186.991358 Z"/></g></svg>';
        let account = '<svg id="account-thin" width="256" height="256" viewBox="0 0 256 256"><g><path d="M128,10 C62.8145161,10 10,62.8145161 10,128 C10,193.185484 62.8145161,246 128,246 C193.185484,246 246,193.185484 246,128 C246,62.8145161 193.185484,10 128,10 Z M188.903226,210.6 C171.821774,223.208871 150.791129,230.774194 128,230.774194 C105.208871,230.774194 84.1782258,223.208871 67.0967742,210.6 L67.0967742,204.129032 C67.0967742,187.333065 80.7524194,173.677419 97.5483871,173.677419 C102.829839,173.677419 110.633065,179.101613 128,179.101613 C145.414516,179.101613 153.122581,173.677419 158.451613,173.677419 C175.247581,173.677419 188.903226,187.333065 188.903226,204.129032 L188.903226,210.6 Z M203.462903,197.515323 C200.227419,175.437903 181.433065,158.451613 158.451613,158.451613 C148.697581,158.451613 143.987097,163.875806 128,163.875806 C112.012903,163.875806 107.35,158.451613 97.5483871,158.451613 C74.5669355,158.451613 55.7725806,175.437903 52.5370968,197.515323 C35.6459677,179.196774 25.2258065,154.835484 25.2258065,128 C25.2258065,71.3314516 71.3314516,25.2258065 128,25.2258065 C184.668548,25.2258065 230.774194,71.3314516 230.774194,128 C230.774194,154.835484 220.354032,179.196774 203.462903,197.515323 Z M128,63.2903226 C104.875806,63.2903226 86.1290323,82.0370968 86.1290323,105.16129 C86.1290323,128.285484 104.875806,147.032258 128,147.032258 C151.124194,147.032258 169.870968,128.285484 169.870968,105.16129 C169.870968,82.0370968 151.124194,63.2903226 128,63.2903226 Z M128,131.806452 C113.297581,131.806452 101.354839,119.86371 101.354839,105.16129 C101.354839,90.458871 113.297581,78.516129 128,78.516129 C142.702419,78.516129 154.645161,90.458871 154.645161,105.16129 C154.645161,119.86371 142.702419,131.806452 128,131.806452 Z"/></g></svg>';
        let give = '<svg viewBox="0 0 244.36 244.36"><defs><mask id="a" x="-6" y="-6" width="256" height="256" maskUnits="userSpaceOnUse"><g transform="translate(-6 -6)"><rect width="256" height="256" style="fill:#fff"/></g></mask></defs><g style="mask:url(#a)"><path d="M113.39,109.09A27.82,27.82,0,0,1,100,100.74a25.23,25.23,0,0,1-6.2-14.08,24.08,24.08,0,0,1,6.44-19.09,24.39,24.39,0,0,1,18.85-8.12h1.44V48a4.09,4.09,0,0,1,3.81-3.82H132A4.11,4.11,0,0,1,135.82,48V59.45h.48a33.71,33.71,0,0,1,20.52,6.69,5.46,5.46,0,0,1,1.67,3.1,3.56,3.56,0,0,1-1.19,3.1l-5.25,5.25a4.29,4.29,0,0,1-2.39,1.19,2.6,2.6,0,0,1-2.39-.71,17.88,17.88,0,0,0-10.5-3.34H119.11A9.72,9.72,0,0,0,112,77.59,8.94,8.94,0,0,0,109.09,84,10.29,10.29,0,0,0,111,90.24a9.5,9.5,0,0,0,5.25,3.58l28.16,8.11a24.66,24.66,0,0,1,15.27,12.41,23.29,23.29,0,0,1,1.43,20,22.1,22.1,0,0,1-9.3,12.17,27.73,27.73,0,0,1-15.51,4.53h-.48v11.46a4.11,4.11,0,0,1-3.82,3.81h-7.64a4.09,4.09,0,0,1-3.81-3.81V151.09h-.48a32.24,32.24,0,0,1-20.52-7.16,3.64,3.64,0,0,1-1.68-2.62,3.58,3.58,0,0,1,1.2-3.11l5.25-5.25a4.29,4.29,0,0,1,2.38-1.19,2.58,2.58,0,0,1,2.39.72,18.71,18.71,0,0,0,11,3.34h17.18a9.72,9.72,0,0,0,7.16-2.87,8.87,8.87,0,0,0,2.86-6.44,10.2,10.2,0,0,0-1.91-6.2,9.45,9.45,0,0,0-5.25-3.58Zm121.7,34.36a15.49,15.49,0,0,1,15.27,15.28v76.36a15.47,15.47,0,0,1-15.27,15.27H21.27a14.71,14.71,0,0,1-10.74-4.53A14.68,14.68,0,0,1,6,235.09V158.73A14.68,14.68,0,0,1,10.53,148a14.72,14.72,0,0,1,10.74-4.54H36.55a97.2,97.2,0,0,1-7.64-38.18A96.4,96.4,0,0,1,42.27,55.4a100.25,100.25,0,0,1,36-36A96.4,96.4,0,0,1,128.18,6a96.43,96.43,0,0,1,49.88,13.36,100.3,100.3,0,0,1,36,36,96.4,96.4,0,0,1,13.36,49.87,97.37,97.37,0,0,1-7.63,38.18ZM128.18,21.27a83.6,83.6,0,0,0-84,84,83.57,83.57,0,0,0,84,84,83.57,83.57,0,0,0,84-84,83.6,83.6,0,0,0-84-84ZM235.09,235.09V158.73H211.7a99.76,99.76,0,0,1-30.54,30.54h19.57a4.11,4.11,0,0,1,3.81,3.82v7.64a4.09,4.09,0,0,1-3.81,3.81H55.64a4.09,4.09,0,0,1-3.82-3.81v-7.64a4.11,4.11,0,0,1,3.82-3.82h20a97.93,97.93,0,0,1-31-30.54H21.27v76.36Z" transform="translate(-6 -6)"/></g></svg>';
        let close = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>';
        const navIsShowing = this.mainNavIsShowing || this.profileNavIsShowing || this.giveNavIsShowing;
        return (h(Fragment, null,
            h("header", { ref: el => (this.element = el), class: navIsShowing ? 'nav-is-showing' : '', style: { top: `${this.profileNavIsShowing || this.giveNavIsShowing ? this.offset : 0}px` } },
                h("div", null,
                    h("div", { class: "global-nav-items" },
                        h("div", { class: "global-actions" },
                            h("a", { href: "", "data-automation-id": "sh-menu", "data-label": "menu", class: this.menuClasses(), onClick: event => this.navClickHandler(event, 'main-nav') },
                                h("div", { class: "menu", innerHTML: menu }),
                                h("div", { class: "close", innerHTML: close })),
                            h("a", { href: `${this.rootURL()}/search`, class: "search-container", "data-automation-id": "sh-search", "data-label": "search" },
                                h("div", { class: "search", innerHTML: search }))),
                        h("a", { href: this.rootURL(), "data-automation-id": "sh-logo", class: "logo", innerHTML: logo }),
                        h("div", { class: "user-actions" },
                            h("a", { href: "", "data-automation-id": "sh-give", "data-label": "give", class: this.giveClasses(), onClick: event => this.navClickHandler(event, 'give-nav') },
                                h("div", { class: "donate", innerHTML: give }),
                                h("div", { class: "close", innerHTML: close })),
                            h("a", { href: `${this.rootURL()}/signin`, class: this.profileClasses(), onClick: event => this.handleProfileClick(event), "data-automation-id": "sh-profile", "data-label": this.authenticated ? 'my account' : 'sign in' },
                                this.authenticated ? (h("div", { class: "account" },
                                    h("div", { class: "account-authenticated", style: { backgroundImage: `url('${this.auth.currentUser.avatarUrl}')` } }))) : (h("div", { class: "account", innerHTML: account })),
                                h("div", { class: "close", innerHTML: close })))),
                    h("profile-nav", { profileNavIsShowing: this.profileNavIsShowing && this.authenticated, handleSignOut: this.handleSignOut.bind(this), currentUser: this.auth.currentUser, data: this.profileData }),
                    h("give-nav", { data: this.giveData, giveNavIsShowing: this.giveNavIsShowing })))));
    }
    static get is() { return "global-nav"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["global-nav.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["global-nav.css"]
    }; }
    static get properties() { return {
        "config": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Object",
                "resolved": "Object",
                "references": {
                    "Object": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "env": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "env",
            "reflect": false
        },
        "giveNavIsShowing": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "give-nav-is-showing",
            "reflect": false,
            "defaultValue": "false"
        },
        "href": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "href",
            "reflect": false
        },
        "mainNavIsShowing": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "main-nav-is-showing",
            "reflect": false,
            "defaultValue": "false"
        },
        "navClickHandler": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "profileNavIsShowing": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "profile-nav-is-showing",
            "reflect": false,
            "defaultValue": "false"
        },
        "giveData": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "JSON",
                "resolved": "JSON",
                "references": {
                    "JSON": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "profileData": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "JSON",
                "resolved": "JSON",
                "references": {
                    "JSON": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "authenticated": {},
        "offset": {}
    }; }
}
