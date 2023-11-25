import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cmSwitchCss = ".sc-cm-switch-h{display:block;--switch-root-width:36px;--switch-root-height:20px;--switch-thumb-size:calc(var(--switch-root-height) - 2px)}input.sc-cm-switch{opacity:0;width:0;height:0}.SwitchRoot.sc-cm-switch{display:inline-flex;align-items:center;width:var(--switch-root-width);height:var(--switch-root-height);background-color:hsl(var(--input));border-radius:9999px;position:relative;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);border:2px solid transparent;flex-shrink:0}.SwitchRoot.sc-cm-switch:focus-within::after{content:'';height:calc(var(--switch-root-height) + 6px);width:calc(var(--switch-root-width) + 6px);border-radius:9999px;position:absolute;z-index:-1;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-user-select:none;user-select:none;box-shadow:0 0 0 1px hsl(var(--ring))}.SwitchRoot[data-disabled].sc-cm-switch{opacity:0.5;cursor:not-allowed}.SwitchRoot[data-state='checked'].sc-cm-switch{background-color:hsl(var(--primary))}.SwitchRoot[data-state='checked'].sc-cm-switch:hover{background-color:hsla(var(--primary), 0.8)}.SwitchThumb.sc-cm-switch{position:absolute;width:var(--switch-thumb-size);height:var(--switch-thumb-size);background-color:white;border-radius:9999px;box-shadow:0 2px 2px rgba(0, 0, 0, 0.1);transition:transform 100ms;transform:translateX(2px);will-change:transform;-webkit-user-select:none;user-select:none}.SwitchRoot[data-state='checked'].sc-cm-switch .SwitchThumb.sc-cm-switch{transform:translateX(calc(var(--switch-root-width) - 2px - var(--switch-thumb-size)))}";

const CmSwitch = /*@__PURE__*/ proxyCustomElement(class CmSwitch extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.name = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.value = undefined;
    this.checked = undefined;
    this.defaultChecked = undefined;
  }
  componentWillLoad() {
    this.checked = this.defaultChecked;
  }
  toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.toggleChecked();
      event.preventDefault();
    }
  }
  render() {
    return (h(Host, null, h("label", { "data-disabled": this.disabled, "data-state": this.checked ? 'checked' : 'unchecked', class: "SwitchRoot" }, h("input", { placeholder: "switch", type: "checkbox", value: this.value, disabled: this.disabled, name: this.name, required: this.required, checked: this.checked, onInput: () => this.toggleChecked(), onKeyDown: e => this.handleKeyDown(e) }), h("span", { class: "SwitchThumb" }))));
  }
  static get style() { return cmSwitchCss; }
}, [2, "cm-switch", {
    "name": [513],
    "required": [516],
    "disabled": [516],
    "value": [513],
    "checked": [1540],
    "defaultChecked": [516, "default-checked"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-switch"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-switch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmSwitch);
      }
      break;
  } });
}

export { CmSwitch as C, defineCustomElement as d };

//# sourceMappingURL=cm-switch2.js.map