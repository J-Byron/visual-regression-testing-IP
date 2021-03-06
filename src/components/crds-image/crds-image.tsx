import { Component, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'crds-image',
  styleUrl: 'crds-image.scss',
  shadow: true
})
export class CrdsImage {
  @Prop() src: string;
  @Prop() size: string;

  @State() imgDidLoad: boolean = false;
  @State() cachedImg: HTMLElement;

  private imgWrapper: HTMLDivElement;

  private sizes = ['card', 'thumbnail', 'overlay', 'media-object'];

  private validateSize() {
    if (this.sizes.indexOf(this.size) == -1) {
      throw new Error(`${this.size} is an invalid value for crds-image size`);
    }
  }

  connectedCallback() {
    this.validateSize();
  }

  public addObserver() {
    // Cache Images
    const img = new Image();
    img.classList.add('crds-img');

    img.onload = () => {
        img.classList.add('loaded');
        this.imgDidLoad = true;
        this.cachedImg = img;
    };

    // Create observer
    const options = {
      threshold: 0
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0) {
          img.src = this.src;
        }
      });
    });
    observer.observe(this.imgWrapper);
  }

  public componentDidLoad() {
      this.addObserver();
  }

  renderInnerHTML(){
    const { imgDidLoad, cachedImg} = this;
    if(imgDidLoad){
      return cachedImg.outerHTML
    }
  }

  render() {
    const { size } = this;
    return (
      <div
        class={`crds-img-container ${size? size : '' }`}
        innerHTML={this.renderInnerHTML()}
        ref={el => (this.imgWrapper = el as HTMLDivElement)}
      />
    );
  }
}
