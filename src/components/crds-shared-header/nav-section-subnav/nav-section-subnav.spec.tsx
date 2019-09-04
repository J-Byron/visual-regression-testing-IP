import { NavSectionSubnav } from "./nav-section-subnav";

describe('<nav-section-subnav>', () => {
  beforeEach(() => {
    this.component = new NavSectionSubnav();
  });

  describe('Tests render()', () => {
    it('Checks element class not hidden if active element', () => {
      this.component.slug = 'subnav-come-visit';
      this.component.active = 'subnav-come-visit';

      const rendered = this.component.render();

      expect(rendered.$attrs$.class).not.toMatch(/.*hidden.*/);
    });

    it('Checks element class hidden if not active element', () => {
      this.component.slug = 'subnav-come-visit';
      this.component.active = 'subnav-media';

      const rendered = this.component.render();

      expect(rendered.$attrs$.class).toMatch(/.*hidden.*/);
    });

    it('Checks element returned has data-automation-id', () => {
      this.component.slug = 'come-visit';

      const rendered = this.component.render();
      const renderedElement = rendered.$children$[0];

      expect(renderedElement.$attrs$['data-automation-id']).toBe('sh-section-subnav-come-visit');
    });

    it('Checks element returned has icon', () => {
      const rendered = this.component.render();

      const renderedElement = rendered.$children$[0].$children$[0];

      expect(renderedElement.$attrs$.innerHTML).toMatch(/<svg.*/);
    });

    it('Checks element returned has onClick', () => {
      const rendered = this.component.render();
      const renderedElement = rendered.$children$[0];

      expect(typeof renderedElement.$attrs$.onClick).toBe('function');
    });

    it('Checks element onClick event bound to expected method', () => {
      this.component.onBack = jest.fn();

      const rendered = this.component.render();
      const renderedEntry = rendered.$children$[0]
      renderedEntry.$attrs$.onClick();

      expect(this.component.onBack).toBeCalledTimes(1);
    });
  });
});