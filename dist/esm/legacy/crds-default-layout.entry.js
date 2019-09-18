import { r as registerInstance, h } from './chunk-b0145544.js';
var CrdsDefaultLayout = /** @class */ (function () {
    function CrdsDefaultLayout(hostRef) {
        registerInstance(this, hostRef);
        this.icons = {
            article: 'media-article',
            video: 'media-video',
            'podcast-episode': '',
            message: '',
            song: 'media-music'
        };
    }
    CrdsDefaultLayout.prototype.render = function () {
        var _a = this, imageSrc = _a.imageSrc, heading = _a.heading, meta = _a.meta, metaPosition = _a.metaPosition, body = _a.body, buttonSrc = _a.buttonSrc, thumbnailSrc = _a.thumbnailSrc, url = _a.url, contentType = _a.contentType, icons = _a.icons;
        return (h("div", { class: "card-wrapper" }, h("div", { class: "card-image-wrapper" }, imageSrc && h("crds-image", { src: imageSrc, size: "card" }), icons[contentType] && (h("div", { class: "card-stamp-container" }, h("crds-icon", { name: icons[contentType], size: '15', color: 'white' }), h("span", { class: "card-stamp" }, contentType))), thumbnailSrc && (h("div", { class: "card-thumbnail" }, h("crds-image", { src: thumbnailSrc, size: "thumbnail" })))), metaPosition == 'top' && h("span", { class: "card-meta-top" }, meta), heading && h("h2", { class: "card-heading" }, " ", heading, " "), metaPosition == 'bottom' && h("span", { class: "card-meta-bottom" }, meta), body && h("div", { class: "card-content", innerHTML: body }), buttonSrc && (h("a", { class: "card-button", href: buttonSrc, role: "button" }, "Learn more"))));
    };
    Object.defineProperty(CrdsDefaultLayout, "style", {
        get: function () { return ".card-wrapper{margin-bottom:2.75rem;max-width:360px;font-family:acumin-pro,helvetica,arial,sans-serif}.card-image-wrapper{margin-bottom:.5rem;overflow:hidden;position:relative}.card-stamp-container{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:hsla(0,0%,9%,.9);top:1em;padding:.5rem;position:absolute;left:1em;display:-ms-flexbox;display:flex;max-height:28px}.card-stamp-container .card-stamp{margin-left:.25rem}.card-stamp{display:inline-block;color:#fff;font-size:.625rem;font-weight:600;text-transform:uppercase}.card-meta-top{color:#737373;display:block;font-size:.8125rem;line-height:1.67}.card-heading,.card-meta-top{font-weight:500;text-transform:uppercase}.card-heading{color:#4d4d4d;font-family:acumin-pro-extra-condensed,sans-serif;font-size:38px;line-height:.89;margin:0 0 .5rem;-webkit-transition:color .3s;transition:color .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.card-heading:hover{color:#000}.card-meta-bottom{color:#979797;display:block;font-size:.8125rem;font-weight:300;line-height:1;margin:0;margin-bottom:.5rem}.card-content{overflow-y:hidden}.card-content p{display:block;font-size:1rem;font-weight:300;line-height:24px;color:#4d4d4d;margin:0}.card-content p a{text-decoration:none;color:#0095d9}.hover:hover{cursor:pointer}.inactive{display:none}.card-button{display:inline-block;background-color:#3b6e8f;color:#fff;border-radius:4px;margin-top:1.375em;text-decoration:none;cursor:pointer;height:43px;vertical-align:middle;line-height:43px;padding:0 1rem;font-size:.875rem}.card-thumbnail{background-color:hsla(0,0%,9%,.9);top:1em;position:absolute;right:1em;max-width:65px;max-height:65px}"; },
        enumerable: true,
        configurable: true
    });
    return CrdsDefaultLayout;
}());
export { CrdsDefaultLayout as crds_default_layout };
