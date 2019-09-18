System.register(["./p-f77949ba.system.js"],(function(e){"use strict";var t,i;return{setters:[function(e){t=e.r;i=e.h}],execute:function(){var r=e("crds_image",function(){function e(e){t(this,e);this.imgDidLoad=false;this.sizes=["card","thumbnail","overlay","media-object"]}e.prototype.validateSize=function(){if(this.sizes.indexOf(this.size)==-1){throw new Error(this.size+" is an invalid value for crds-image size")}};e.prototype.connectedCallback=function(){this.validateSize()};e.prototype.addObserver=function(){var e=this;var t=new Image;t.classList.add("crds-img");t.onload=function(){e.imgDidLoad=true;e.cachedImg=t;t.classList.add("loaded")};var i={threshold:0};var r=new IntersectionObserver((function(i){i.forEach((function(i){if(i.isIntersecting&&i.intersectionRatio>=0){t.src=e.src}}))}),i);r.observe(this.imgWrapper)};e.prototype.componentDidLoad=function(){this.addObserver()};e.prototype.render=function(){var e=this;var t=this,r=t.imgDidLoad,n=t.cachedImg,s=t.size;return i("div",{class:"crds-img-container "+s,"data-instrinsic":"4:3",innerHTML:r?n.outerHTML:"",ref:function(t){return e.imgWrapper=t}})};Object.defineProperty(e,"style",{get:function(){return".crds-img-container{display:block;background-color:#e7e7e7;position:relative;overflow:hidden}.crds-img-container.card{height:202px}.crds-img-container.thumbnail{height:65px}.crds-img-container .crds-img{height:100%}.crds-img-container .crds-img.loaded{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:1s;animation-duration:1s}\@-webkit-keyframes fade-in{0%{visibility:hidden;-webkit-filter:blur(20px);filter:blur(20px)}50%{-webkit-filter:blur(20px);filter:blur(20px)}to{-webkit-filter:blur(.1px);filter:blur(.1px)}}\@keyframes fade-in{0%{visibility:hidden;-webkit-filter:blur(20px);filter:blur(20px)}50%{-webkit-filter:blur(20px);filter:blur(20px)}to{-webkit-filter:blur(.1px);filter:blur(.1px)}}"},enumerable:true,configurable:true});return e}())}}}));