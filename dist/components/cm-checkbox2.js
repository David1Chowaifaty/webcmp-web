import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cmCheckboxCss = ".sc-cm-checkbox-h{display:block;position:relative}.root-container.sc-cm-checkbox{display:flex;align-items:center;width:min-content;height:min-content}button.sc-cm-checkbox{all:unset}input.sc-cm-checkbox{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:0;height:0}.CheckboxRoot.sc-cm-checkbox{border:2px solid hsl(var(--border));width:25px;height:25px;border-radius:var(--radius);display:flex;align-items:center;justify-content:center;box-sizing:border-box}.CheckboxRoot[data-state='checked'].sc-cm-checkbox{border-width:0;background:hsl(var(--primary))}.CheckboxRoot[data-state='checked'].sc-cm-checkbox:hover{background:hsla(var(--primary), 0.8)}.CheckboxRoot[data-state='unchecked'].sc-cm-checkbox:hover{background-color:hsla(var(--input), 0.1)}.CheckboxRoot.sc-cm-checkbox:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px}.CheckboxIndicator.sc-cm-checkbox{color:hsl(var(--primary-foreground));display:flex;align-items:center;justify-content:center;opacity:0}.CheckboxIndicator[data-state='checked'].sc-cm-checkbox{animation:fadeIn 200ms forwards}.CheckboxIndicator[data-state='unchecked'].sc-cm-checkbox{animation:fadeOut 200ms forwards}.Label.sc-cm-checkbox{color:var(--foreground);padding-left:15px;font-size:15px;line-height:1}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";

const CmCheckbox = /*@__PURE__*/ proxyCustomElement(class CmCheckbox extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.name = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.value = undefined;
    this.checked = false;
    this.defaultChecked = undefined;
    this.labelMessage = undefined;
  }
  handleChange() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
  render() {
    return (h(Host, null, h("div", { class: "root-container" }, h("button", { type: "button", role: "checkbox", onClick: this.handleChange.bind(this), "aria-checked": this.checked, "data-state": this.checked ? 'checked' : 'unchecked', value: "on", id: "c1", class: "CheckboxRoot" }, h("p", { class: 'sr-only' }, "checkbox"), h("span", { "data-state": this.checked ? 'checked' : 'unchecked', class: "CheckboxIndicator" }, h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))), h("input", { type: "checkbox", "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.checked }), this.labelMessage && (h("label", { htmlFor: "c1", class: "Label" }, this.labelMessage)))));
  }
  static get style() { return cmCheckboxCss; }
}, [2, "cm-checkbox", {
    "name": [513],
    "required": [516],
    "disabled": [516],
    "value": [513],
    "checked": [1540],
    "defaultChecked": [516, "default-checked"],
    "labelMessage": [513, "label-message"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmCheckbox);
      }
      break;
  } });
}

export { CmCheckbox as C, defineCustomElement as d };

//# sourceMappingURL=cm-checkbox2.js.map