import { Fragment, h, Host } from "@stencil/core";
export class CmToast {
  constructor() {
    this.duration = 5000;
    this.toastBody = { description: '', type: 'success' };
    this.eventsAdded = false;
    this.position = 'bottom-left';
    this.swipable = false;
    this.isVisible = false;
    this.isDragging = false;
    this.toastClicked = false;
    this.isFocused = false;
  }
  componentWillLoad() {
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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
    this.setToastTimeout();
  }
  handleDocumentClick(event) {
    const target = event.target;
    if (!this.element.contains(target) && this.toastClicked) {
      this.toastClicked = false;
      this.setToastTimeout();
    }
  }
  handleTouchEnd() {
    this.handleSwipeEnd(this.startX - this.endX);
  }
  handleMouseDown(event) {
    this.clearToastTimeout();
    this.toastClicked = true;
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
    if (!this.isDragging)
      return;
    this.isDragging = false;
    this.handleSwipeEnd(this.startX - this.endX);
  }
  setToastTimeout() {
    this.showToastTimeOut = setTimeout(() => {
      this.hideToast();
    }, this.duration);
  }
  clearToastTimeout() {
    if (this.showToastTimeOut) {
      clearTimeout(this.showToastTimeOut);
      this.showToastTimeOut = undefined;
    }
  }
  handleMouseLeave() {
    if (this.isFocused || this.toastClicked || this.isDragging) {
      return;
    }
    this.setToastTimeout();
  }
  updateSwipePosition(deltaX) {
    this.toastRef.style.setProperty('--rd-toast-swipe-move-x', `${deltaX}px`);
  }
  handleSwipeEnd(delta) {
    if (!isNaN(delta)) {
      const isLeft = this.position.includes('left');
      let MAX_SWIPE = isLeft ? 2500 : -2500;
      if (this.isDragging) {
        MAX_SWIPE = isLeft ? 280 : -280;
        this.isDragging = false;
      }
      if ((!isLeft && delta <= -100 && delta >= MAX_SWIPE) || (isLeft && delta >= 100 && delta <= MAX_SWIPE)) {
        this.toastRef.style.setProperty('--rd-toast-swipe-end-x', `${-delta}px`);
        this.dismissToast();
        this.startX = 0;
        this.endX = 0;
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
    this.clearToastTimeout();
    this.resetSwipePosition();
    this.toastRef.setAttribute('data-state', 'close');
    this.toastRef.style.opacity = '0';
    this.isVisible = false;
    if (this.isDragging) {
      this.isDragging = false;
    }
    if (this.swipable) {
      this.removeEvents();
    }
  }
  async showToast() {
    this.clearToastTimeout();
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
    this.clearToastTimeout();
  }
  removeEvents() {
    if (this.eventsAdded) {
      this.toastRef.removeEventListener('touchstart', this.handleTouchStart);
      this.toastRef.removeEventListener('touchmove', this.handleTouchMove);
      this.toastRef.removeEventListener('touchend', this.handleTouchEnd);
      this.toastRef.removeEventListener('mousedown', this.handleMouseDown);
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.toastRef.removeEventListener('mouseleave', this.handleMouseLeave);
      this.eventsAdded = false;
    }
  }
  addEvents() {
    if (!this.eventsAdded) {
      this.toastRef.addEventListener('touchstart', this.handleTouchStart);
      this.toastRef.addEventListener('touchmove', this.handleTouchMove);
      this.toastRef.addEventListener('touchend', this.handleTouchEnd);
      this.toastRef.addEventListener('mousedown', this.handleMouseDown);
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      this.toastRef.addEventListener('mouseleave', this.handleMouseLeave);
      this.eventsAdded = true;
    }
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
  handleMouseEnter() {
    this.clearToastTimeout();
  }
  handleToastClicked() {
    if (!this.isDragging) {
      this.clearToastTimeout();
      this.toastClicked = true;
    }
  }
  handleFocus() {
    this.isFocused = true;
    this.clearToastTimeout();
  }
  render() {
    return (h(Host, null, h("section", { "aria-live": "off", role: "status", "aria-atomic": "true", tabIndex: 0, onMouseLeave: this.handleMouseLeave.bind(this), onMouseEnter: this.handleMouseEnter.bind(this), onFocus: this.handleFocus.bind(this), ref: el => (this.toastRef = el), class: `ToastRoot` }, this.isVisible && (h(Fragment, null, this.toastBody.type === 'custom' ? (this.toastBody.body) : (h(Fragment, null, h("h3", { class: "ToastTitle" }, this.toastBody.title), h("p", { class: "ToastDescription" }, this.toastBody.description), this.renderIcon())))))));
  }
  static get is() { return "cm-toast"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-toast.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-toast.css"]
    };
  }
  static get properties() {
    return {
      "position": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "TPositions",
          "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
          "references": {
            "TPositions": {
              "location": "import",
              "path": "./toast",
              "id": "src/components/cm-toast/toast.d.ts::TPositions"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "position",
        "reflect": true,
        "defaultValue": "'bottom-left'"
      },
      "swipable": {
        "type": "boolean",
        "mutable": true,
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
        "attribute": "swipable",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isVisible": {},
      "isDragging": {},
      "toastClicked": {},
      "isFocused": {}
    };
  }
  static get events() {
    return [{
        "method": "toast",
        "name": "toast",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "IToast",
          "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
          "references": {
            "IToast": {
              "location": "import",
              "path": "./toast",
              "id": "src/components/cm-toast/toast.d.ts::IToast"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "hideToast": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "showToast": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
  static get listeners() {
    return [{
        "name": "toast",
        "method": "onToast",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "handleDocumentClick",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=cm-toast.js.map
