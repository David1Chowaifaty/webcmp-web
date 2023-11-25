import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';

const cmToastCss = "button.sc-cm-toast,p.sc-cm-toast,h3.sc-cm-toast,div.sc-cm-toast{all:unset}.sc-cm-toast-h{--rd-viewport-padding:25px;--rd-element-width:300px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-cm-toast-h{--rd-success:#33b074}}p.sc-cm-toast{color:hsla(var(--foreground), 0.8);font-size:13px;line-height:1.3}h1.sc-cm-toast,h2.sc-cm-toast,h3.sc-cm-toast,h4.sc-cm-toast,h5.sc-cm-toast,h6.sc-cm-toast{font-weight:500;color:hsl(var(--foreground));font-size:15px}[position='top-left'].sc-cm-toast-h{--rd-offset-width:calc(-100% - var(--rd-viewport-padding));top:0;left:0}[position='top-right'].sc-cm-toast-h{--rd-offset-width:calc(100% + var(--rd-viewport-padding));top:0;right:0}[position='bottom-left'].sc-cm-toast-h{--rd-offset-width:calc(-100% - var(--rd-viewport-padding));bottom:0;left:0}[position='bottom-right'].sc-cm-toast-h{--rd-offset-width:calc(100% + var(--rd-viewport-padding));bottom:0;right:0}.icon-container.sc-cm-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0;position:absolute;top:50%;right:calc(var(--rd-viewport-padding) / 2);transform:translateY(-50%)}.icon-container.sc-cm-toast>svg.sc-cm-toast{margin:0;color:white;stroke-width:5px}.success.sc-cm-toast{background-color:var(--rd-success)}.error.sc-cm-toast{background-color:hsl(var(--destructive))}.ToastRoot.sc-cm-toast{width:var(--rd-element-width);background-color:hsl(var(--background));border-radius:var(--radius);box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(var(--border));position:relative}.ToastRoot[data-state='open'].sc-cm-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-cm-toast{pointer-events:none;animation:hide 100ms ease-in}.ToastRoot[data-swipe='move'].sc-cm-toast{transform:translateX(var(--rd-toast-swipe-move-x))}.ToastRoot[data-swipe='cancel'].sc-cm-toast{transform:translateX(0);transition:transform 200ms ease-out}.ToastRoot[data-swipe='end'].sc-cm-toast{animation:swipeOut 100ms ease-out forwards}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@-webkit-keyframes swipeOut{from{transform:translateX(var(--rd-toast-swipe-end-x))}to{transform:translateX(var(--rd-offset-width))}}@keyframes swipeOut{from{transform:translateX(var(--rd-toast-swipe-end-x))}to{transform:translateX(var(--rd-offset-width))}}.ToastTitle.sc-cm-toast{grid-area:title;margin-bottom:5px;font-weight:500;color:hsl(var(--foreground));font-size:15px}.ToastDescription.sc-cm-toast{grid-area:description;margin:0;color:hsla(var(--foreground), 0.8);font-size:13px;line-height:1.3}.ToastAction.sc-cm-toast{grid-area:action}";

const CmToast = /*@__PURE__*/ proxyCustomElement(class CmToast extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.toast = createEvent(this, "toast", 7);
    this.duration = 5000;
    this.toastBody = { description: '', type: 'success' };
    this.position = 'bottom-left';
    this.swipable = false;
    this.isVisible = false;
    this.isDragging = false;
  }
  handleTouchStart(event) {
    this.startX = event.touches[0].clientX;
  }
  setSwipeEventToRootElement(state) {
    this.toastRef.setAttribute('data-swipe', state);
  }
  handleTouchMove(event) {
    this.endX = event.touches[0].clientX;
    const deltaX = this.startX - this.endX;
    const isLeft = this.position.includes('left');
    if ((isLeft && deltaX > 0) || (!isLeft && deltaX < 0)) {
      this.updateSwipePosition(-deltaX);
      this.setSwipeEventToRootElement('move');
    }
  }
  applyStyles(style) {
    for (const property in style) {
      if (style.hasOwnProperty(property)) {
        this.toastRef.style[property] = style[property];
      }
    }
  }
  onToast(event) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    const { duration, position, style, swipable, type } = event.detail;
    this.toastBody = event.detail;
    if (position) {
      this.position = position;
    }
    if (swipable !== undefined) {
      this.swipable = swipable;
    }
    if (duration) {
      this.duration = duration;
    }
    if (style) {
      this.applyStyles(style);
    }
    if (type === 'error') {
      this.toastRef.style.borderColor = 'hsl(var(--destructive))';
    }
    this.showToast();
    this.showToastTimeOut = setTimeout(() => {
      this.hideToast();
    }, this.duration);
  }
  handleTouchEnd() {
    this.handleSwipeEnd(this.startX - this.endX);
  }
  handleMouseDown(event) {
    this.isDragging = true;
    this.startX = event.clientX;
  }
  handleMouseMove(event) {
    if (!this.isDragging)
      return;
    this.endX = event.clientX;
    const deltaX = this.startX - this.endX;
    const isLeft = this.position.includes('left');
    if ((isLeft && deltaX > 0) || (!isLeft && deltaX < 0)) {
      this.setSwipeEventToRootElement('move');
      this.updateSwipePosition(-deltaX);
    }
  }
  handleMouseUp() {
    this.isDragging = false;
    this.handleSwipeEnd(this.startX - this.endX);
  }
  handleMouseLeave() {
    if (!this.isDragging)
      return;
    this.handleSwipeEnd(this.startX - this.endX);
  }
  updateSwipePosition(deltaX) {
    this.toastRef.style.setProperty('--rd-toast-swipe-move-x', `${deltaX}px`);
  }
  handleSwipeEnd(delta) {
    console.log(delta);
    if (!isNaN(delta)) {
      const isLeft = this.position.includes('left');
      let MAX_SWIPE = isLeft ? 2500 : -2500;
      if (this.isDragging) {
        MAX_SWIPE = isLeft ? 280 : -280;
        this.isDragging = false;
      }
      console.log(MAX_SWIPE);
      if ((!isLeft && delta < -150 && delta > MAX_SWIPE) || (isLeft && delta > 150 && delta < MAX_SWIPE)) {
        this.toastRef.style.setProperty('--rd-toast-swipe-end-x', `${-delta}px`);
        this.dismissToast();
      }
      else {
        this.resetSwipePosition();
        this.setSwipeEventToRootElement('cancel');
      }
    }
  }
  dismissToast() {
    this.setSwipeEventToRootElement('end');
    setTimeout(() => {
      this.setSwipeEventToRootElement('');
      this.hideToast();
    }, 100);
  }
  resetSwipePosition() {
    this.toastRef.style.removeProperty('--rd-toast-swipe-end-x');
    this.toastRef.style.removeProperty('--rd-toast-swipe-move-x');
  }
  async hideToast() {
    this.resetSwipePosition();
    this.toastRef.setAttribute('data-state', 'close');
    this.toastRef.style.opacity = '0';
    this.isVisible = false;
    if (this.isDragging) {
      this.isDragging = false;
    }
    clearTimeout(this.showToastTimeOut);
    if (this.swipable) {
      this.removeEvents();
    }
  }
  async showToast() {
    this.toastRef.style.opacity = '1';
    this.toastRef.setAttribute('data-state', 'open');
    this.isVisible = true;
    if (this.swipable) {
      this.addEvents();
    }
  }
  disconnectedCallback() {
    if (this.swipable) {
      this.removeEvents();
    }
    clearTimeout(this.showToastTimeOut);
  }
  removeEvents() {
    this.toastRef.removeEventListener('touchstart', this.handleTouchStart.bind(this));
    this.toastRef.removeEventListener('touchmove', this.handleTouchMove.bind(this));
    this.toastRef.removeEventListener('touchend', this.handleTouchEnd.bind(this));
    this.toastRef.removeEventListener('mousedown', this.handleMouseDown.bind(this));
    this.toastRef.removeEventListener('mousemove', this.handleMouseMove.bind(this));
    this.toastRef.removeEventListener('mouseup', this.handleMouseUp.bind(this));
    this.toastRef.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }
  addEvents() {
    this.toastRef.addEventListener('touchstart', this.handleTouchStart.bind(this));
    this.toastRef.addEventListener('touchmove', this.handleTouchMove.bind(this));
    this.toastRef.addEventListener('touchend', this.handleTouchEnd.bind(this));
    this.toastRef.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.toastRef.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.toastRef.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.toastRef.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }
  renderIcon() {
    switch (this.toastBody.type) {
      case 'success':
        return (h("div", { class: "icon-container success" }, h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))));
      case 'error':
        return (h("div", { class: "icon-container error" }, h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))));
      default:
        return null;
    }
  }
  render() {
    return (h(Host, null, h("section", { ref: el => (this.toastRef = el), class: `ToastRoot` }, this.isVisible && (h(Fragment, null, this.toastBody.type === 'custom' ? (this.toastBody.body) : (h(Fragment, null, h("h3", { class: "ToastTitle" }, this.toastBody.title), h("p", { class: "ToastDescription" }, this.toastBody.description), this.renderIcon())))))));
  }
  get element() { return this; }
  static get style() { return cmToastCss; }
}, [2, "cm-toast", {
    "position": [1537],
    "swipable": [1540],
    "isVisible": [32],
    "isDragging": [32],
    "hideToast": [64],
    "showToast": [64]
  }, [[16, "toast", "onToast"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-toast"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-toast":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmToast);
      }
      break;
  } });
}

export { CmToast as C, defineCustomElement as d };

//# sourceMappingURL=cm-toast2.js.map