import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cmInputCss = ".sc-cm-input-h{display:block}input.sc-cm-input{box-sizing:border-box;display:flex;height:2.25rem;width:100%;border-radius:var(--radius);border:1px solid hsl(var(--border));background-color:transparent;padding:4px 12px;font-size:0.875rem;line-height:1.25rem;box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input[type='file'].sc-cm-input{border:none;background-color:transparent;font-size:0.875rem;line-height:1.25rem;font-weight:500}input.sc-cm-input::placeholder{color:hsl(var(--muted-foreground))}input.sc-cm-input:focus{outline:none;box-shadow:0 0 0 calc(0px + var(--cm-ring-offset-width)) hsl(var(--ring))}input.sc-cm-input:disabled{cursor:not-allowed;opacity:0.5}";

const CmInput = /*@__PURE__*/ proxyCustomElement(class CmInput extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.textChanged = createEvent(this, "textChanged", 7);
    this.type = undefined;
    this.name = undefined;
    this.placeholder = undefined;
    this.value = undefined;
    this.inputid = undefined;
    this.class = undefined;
    this.required = undefined;
    this.disabled = undefined;
    this.readonly = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.max = undefined;
    this.step = undefined;
    this.pattern = undefined;
    this.autocomplete = undefined;
    this.autofocus = undefined;
    this.size = undefined;
    this.multiple = undefined;
  }
  render() {
    return (h(Host, null, h("input", { type: this.type, name: this.name, placeholder: this.placeholder, value: this.value, id: this.inputid, class: this.class, required: this.required, disabled: this.disabled, readonly: this.readonly, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, pattern: this.pattern, autocomplete: this.autocomplete, autofocus: this.autofocus, size: this.size, multiple: this.multiple, onChange: e => this.textChanged.emit(e.target.value) })));
  }
  static get style() { return cmInputCss; }
}, [2, "cm-input", {
    "type": [513],
    "name": [513],
    "placeholder": [513],
    "value": [513],
    "inputid": [513],
    "class": [513],
    "required": [516],
    "disabled": [516],
    "readonly": [516],
    "maxlength": [514],
    "min": [520],
    "max": [520],
    "step": [520],
    "pattern": [513],
    "autocomplete": [513],
    "autofocus": [516],
    "size": [514],
    "multiple": [516]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-input"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmInput);
      }
      break;
  } });
}

export { CmInput as C, defineCustomElement as d };

//# sourceMappingURL=cm-input2.js.map