import { Component, Prop, h, State } from '@stencil/core';
import { Utils } from '../../../shared/utils';
import Fragment from '../../../shared/fragment'; //TODO what are these needed for?
import { SimpleNavHelper } from '../profile-nav/simple-nav-helper';

@Component({
  tag: 'main-nav'
})
export class MainMenu {
  //TODO need to add these to component interface class
  @Prop() mainNavIsShowing: boolean = true;
  @Prop() data: JSON;
  @Prop() promoData: string;

  @State() activeSection: string;
  private simpleNav: SimpleNavHelper;

  constructor() {
    this.simpleNav = new SimpleNavHelper();
    this.simpleNav.formatMenuEntry = (element) => {return element}; //Don't add extra formatting to entries
  }

  navClasses() {
    let classes = [];
    if (this.mainNavIsShowing) classes.push('is-showing');
    if (this.activeSection) classes.push(`section--${this.activeSection}`);
    return classes.join(' ');
  }

  handleBackClick(event) {
    event.preventDefault();
    this.activeSection = null;
  }

   /**
   * Section handleSectionClick event handler
   * @param event Event
   * @param sectionName string
   */
  protected handleSectionClick(event, sectionName) {
    event.preventDefault();
    this.activeSection = sectionName;
  }

   /**
   * Renders all sections from payload
   */
  private maybeRenderSections(data) {
    if(!Array.isArray(data))
      return;

    return data.map(section => {
      const sectionName = Utils.parameterize(section.title);
      return (
        <nav-section sectionName={sectionName} handleClick={this.handleSectionClick.bind(this)} isActive={this.activeSection === sectionName}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </nav-section>
      );
    });
  }

  /**
   * Returns all subnav elements
   * @param data
   */
  // TODO: refactor renderSubnavs to work with
  // nav-section-subnav, profile nav, and give nav
  // ------------------------------------------------------
  private maybeRenderSubnavs(data) {
    if(!Array.isArray(data))
      return;

    return data.map(section => {
      const subNavName = Utils.parameterize(section.title);
      return (
        <nav-section-subnav subNavName={subNavName} handleBackClick={this.handleBackClick.bind(this)} isActive={this.activeSection === subNavName}>
          {this.simpleNav.formatMenuTitle(section.title)}
          {this.simpleNav.maybeRenderMenuEntries(section.children)}
        </nav-section-subnav>
      );
    });
  }

  //TODO cleanup nav-ctas
  render() {
    if (!this.mainNavIsShowing || !Array.isArray(this.data)) return null;

    return (
      <nav class={this.navClasses()} onClick={event => event.stopPropagation()}>
          <div class="content">
            <div class="navigation">
              <ul>{this.maybeRenderSections(this.data)}</ul>
            </div>
            <div class="subnavigation">
              {this.maybeRenderSubnavs(this.data)}
            </div>
            <nav-ctas isActive={this.activeSection ? true : false} data={this.promoData} />
          </div>
        </nav>
        )
  }
}