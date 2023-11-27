import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';

const cmDialogCss = ":host{display:block}.dialog{opacity:0;pointer-events:none;background-color:hsl(var(--background));border-radius:6px;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:90vw;max-width:450px;max-height:85vh;padding:25px;z-index:1000;box-sizing:border-box}.dialog[data-state='hidden']{opacity:0;pointer-events:none}.dialog[data-state='visible']{opacity:1;pointer-events:all;animation:contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}button{all:unset}.backdrop{position:fixed;inset:0;z-index:999;background-color:rgba(0, 0, 0, 0.5)}.backdrop[data-state='hidden']{opacity:0;pointer-events:none}.backdrop[data-state='visible']{opacity:1;pointer-events:all;animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.IconButton{font-family:inherit;border-radius:100%;height:25px;width:25px;display:inline-flex;align-items:center;justify-content:center;color:hsl(var(--primary));position:absolute;top:10px;right:10px}.IconButton:hover{background-color:hsl(var(--muted))}.IconButton:focus{box-shadow:0 0 0 2px hsla(var(--muted-foreground), 0.5)}::slotted([slot='dialog-header']){box-sizing:border-box;margin:0;font-weight:500;color:hsl(var(--foreground));font-size:17px}::slotted([slot='dialog-body']){box-sizing:border-box;display:flex;flex-direction:column;gap:10px;margin:10px 0 20px;color:hsla(var(--foreground), 0.7);font-size:15px;line-height:1.5}::slotted([slot='dialog-footer']){box-sizing:border-box;width:100%;display:flex;align-items:center;justify-content:flex-end;gap:10px}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}";

const CmDialog = /*@__PURE__*/ proxyCustomElement(class CmDialog extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.openDialog = createEvent(this, "openDialog", 7);
    this.closeDialog = createEvent(this, "closeDialog", 7);
    this.isDialogVisible = false;
    this.isAlertDialog = false;
  }
  handleOpenDialog() {
    this.toggleOpen();
  }
  handleCloseDialog() {
    this.toggleClose();
  }
  async toggleOpen() {
    this.isDialogVisible = true;
    document.body.style.pointerEvents = 'none';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      var _a;
      this.updateFocusableElements();
      (_a = this.firstFocusableEl) === null || _a === void 0 ? void 0 : _a.focus();
    }, 150);
  }
  async toggleClose() {
    this.isDialogVisible = false;
    document.body.style.pointerEvents = 'all';
    document.body.style.overflow = 'auto';
    this.el.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
  updateFocusableElements() {
    const focusableSelectors = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]),[tabindex]:not([tabindex="-1"])';
    const lightDOMFocusableEls = Array.from(this.el.querySelectorAll(focusableSelectors));
    const shadowDOMFocusableEls = Array.from(this.el.shadowRoot.querySelectorAll(focusableSelectors));
    this.allFocusableEls = [...lightDOMFocusableEls, ...shadowDOMFocusableEls];
    this.firstFocusableEl = this.allFocusableEls[0];
    this.lastFocusableEl = this.allFocusableEls[this.allFocusableEls.length - 1];
  }
  handleKeyDown(e) {
    if (!this.isDialogVisible || e.key !== 'Tab')
      return;
    const activeElement = document.activeElement.shadowRoot ? document.activeElement.shadowRoot.activeElement : document.activeElement;
    const lastElementIndex = this.allFocusableEls.indexOf(this.lastFocusableEl);
    const firstElementIndex = this.allFocusableEls.indexOf(this.firstFocusableEl);
    if (e.shiftKey) {
      if (activeElement === this.firstFocusableEl) {
        this.allFocusableEls[lastElementIndex].focus();
        e.preventDefault();
      }
    }
    else {
      if (activeElement === this.lastFocusableEl) {
        this.allFocusableEls[firstElementIndex].focus();
        e.preventDefault();
      }
    }
  }
  handleBackdropClick() {
    if (!this.isAlertDialog)
      this.toggleClose();
  }
  componentDidLoad() {
    this.updateFocusableElements();
    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  render() {
    return (h(Host, null, h("div", { onClick: this.handleBackdropClick.bind(this), "data-state": this.isDialogVisible ? 'visible' : 'hidden', class: 'backdrop' }), h("div", { tabIndex: -1, "data-state": this.isDialogVisible ? 'visible' : 'hidden', class: 'dialog' }, this.isDialogVisible && (h(Fragment, null, h("slot", { name: "dialog-header" }), h("slot", { name: "dialog-body" }), h("slot", { name: "dialog-footer" }), !this.isAlertDialog && (h("button", { "aria-label": "Close", onClick: this.toggleClose.bind(this), class: 'IconButton' }, h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))))))));
  }
  get el() { return this; }
  static get style() { return cmDialogCss; }
}, [1, "cm-dialog", {
    "isAlertDialog": [516, "is-alert-dialog"],
    "isDialogVisible": [32],
    "toggleOpen": [64],
    "toggleClose": [64]
  }, [[16, "openDialog", "handleOpenDialog"], [16, "closeDialog", "handleCloseDialog"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-dialog"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-dialog":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmDialog);
      }
      break;
  } });
}

export { CmDialog as C, defineCustomElement as d };

//# sourceMappingURL=cm-dialog2.js.map