import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$8 } from './cm-button2.js';
import { d as defineCustomElement$7 } from './cm-checkbox2.js';
import { d as defineCustomElement$6 } from './cm-dropdown2.js';
import { d as defineCustomElement$5 } from './cm-input2.js';
import { d as defineCustomElement$4 } from './cm-spinner2.js';
import { d as defineCustomElement$3 } from './cm-switch2.js';
import { d as defineCustomElement$2 } from './cm-toast2.js';

/*Input */
const inputProperties = [
  { prop: 'type', type: 'InputType', default: 'null' },
  { prop: 'name', type: 'string', default: '_' },
  { prop: 'placeholder', type: 'string', default: '_' },
  { prop: 'value', type: 'string', default: '_' },
  { prop: 'inputid', type: 'string', default: '_' },
  { prop: 'class', type: 'string', default: '_' },
  { prop: 'required', type: 'boolean', default: 'false' },
  { prop: 'disabled', type: 'boolean', default: 'false' },
  { prop: 'readonly', type: 'boolean', default: 'false' },
  { prop: 'maxlength', type: 'number', default: 'null' },
  { prop: 'min', type: 'string | number', default: 'null' },
  { prop: 'max', type: 'string | number', default: 'null' },
  { prop: 'step', type: 'string | number', default: 'null' },
  { prop: 'pattern', type: 'string', default: '_' },
  { prop: 'autocomplete', type: 'string', default: 'off' },
  { prop: 'autofocus', type: 'boolean', default: 'false' },
  { prop: 'size', type: 'number', default: 'null' },
  { prop: 'multiple', type: 'boolean', default: 'false' },
];
const inputFeatures = [
  'Supports various input types (text, number, email, etc.)',
  "Configurable properties: 'name', 'placeholder', 'value', 'inputid', 'class'",
  "Optional attributes: 'required', 'disabled', 'readonly', 'maxlength', 'min', 'max', 'step', 'pattern', 'autocomplete', 'autofocus', 'size', 'multiple'",
  'Designed for flexible integration in forms and UIs',
];
const inputEventProperties = [{ prop: 'textChanged', type: 'string' }];
/*Switch */
const switchProperties = [
  { prop: 'name', type: 'string', default: '_' },
  { prop: 'required', type: 'boolean', default: 'false' },
  { prop: 'disabled', type: 'boolean', default: 'false' },
  { prop: 'value', type: 'string', default: '_' },
  { prop: 'checked', type: 'boolean', default: 'false' },
  { prop: 'defaultChecked', type: 'boolean', default: 'false' },
];
const switchEventProperties = [{ prop: 'checkedChange', type: 'boolean' }];
const switchFeatures = ['Full keyboard navigation.', 'Can be controlled or uncontrolled.'];
/*Tost*/
const toastProperties = [
  { prop: 'position', type: 'TPositions', default: 'bottom-left' },
  { prop: 'swipable', type: 'boolean', default: 'false' },
];
const toastEventProperties = [{ prop: 'toast', type: 'IToast' }];
const toastFeatures = [
  'Full keyboard navigation',
  'Can be controlled or uncontrolled',
  'Automatically closes',
  'Supports closing via swipe gesture',
  'Exposes CSS variables for swipe gesture animations',
  'Customizable layout',
];
/*Button */
const buttonProperties = [
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: 'button' },
  { prop: 'disabled', type: 'boolean', default: 'false' },
  { prop: 'variants', type: "'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link'", default: 'default' },
  { prop: 'name', type: 'string', default: 'undefined' },
  { prop: 'value', type: 'string', default: 'undefined' },
  { prop: 'isLoading', type: 'boolean', default: 'false' },
];
const buttonEventProperties = [{ prop: 'buttonClicked', type: 'MouseEvent' }];
const buttonFeatures = ['Configurable disabled state', 'Loading state with spinner', 'Supports slot for custom content'];
/*Checkbox */
const checkboxFeatures = [
  "Supports 'name', 'required', 'disabled', 'value', and 'labelMessage' properties",
  'Custom checkbox functionality using a button element',
  'Aria accessibility attributes for screen readers',
  'Optional label message displayed next to the checkbox',
];
const checkboxProperties = [
  { prop: 'name', type: 'string', default: 'undefined' },
  { prop: 'required', type: 'boolean', default: 'undefined' },
  { prop: 'disabled', type: 'boolean', default: 'undefined' },
  { prop: 'value', type: 'string', default: 'undefined' },
  { prop: 'checked', type: 'boolean', default: 'false' },
  { prop: 'defaultChecked', type: 'boolean', default: 'undefined' },
  { prop: 'labelMessage', type: 'string', default: 'undefined' },
];
const checkboxEvents = [{ event: 'checkedChange', type: 'EventEmitter<boolean>' }];
/*Dropdown */
const dropdownFeatures = [
  'Configurable item list with optional disabled items',
  'Right-to-left (RTL) support',
  'Search functionality within dropdown items',
  'Customizable dropdown title',
  'Toggleable dropdown visibility',
  'Keyboard navigation support for item selection',
  'Automatically filters items based on search query',
  'Dropdown positioning based on available space',
  'Supports custom rendering of dropdown items',
];
const dropdownProperties = [
  {
    prop: 'itemNames',
    type: 'IItems[]',
    default: '_',
  },
  { prop: 'rtl', type: 'boolean', default: 'false' },
  { prop: 'search', type: 'boolean', default: 'true' },
  { prop: 'dropdownTitle', type: 'string', default: 'Toggle DropDown' },
];
const dropdownEvents = [{ event: 'itemClick', type: 'EventEmitter<string>' }];

const cmMainAppCss = ".sc-cm-main-app-h{display:block;--selected-color:hsl(217.2, 91.2%, 59.8%);color:hsl(var(--foreground));width:100%}.title.sc-cm-main-app{display:block;margin-bottom:30px;font-size:24px;font-weight:bold}.circle-btn.sc-cm-main-app{height:25px;width:25px;border-radius:25px;margin-right:15px;margin-top:20px}.circle-btn[data-state='checked'].sc-cm-main-app{outline:1px solid var(--selected-color);outline-offset:2px}.blue.sc-cm-main-app{background:hsl(217.2, 91.2%, 59.8%);--selected-color:hsl(217.2, 91.2%, 59.8%)}.yellow.sc-cm-main-app{background:hsl(47.9, 95.8%, 53.1%);--selected-color:hsl(47.9, 95.8%, 53.1%)}.green.sc-cm-main-app{background:hsl(142.1, 76.2%, 36.3%);--selected-color:hsl(142.1, 76.2%, 36.3%)}.features.sc-cm-main-app,.title-section.sc-cm-main-app,.component-container.sc-cm-main-app,.reference.sc-cm-main-app{display:flex;flex-direction:column;gap:10px;margin-top:10px;width:100%}h1.sc-cm-main-app{font-size:24px;font-weight:700;display:block;margin-bottom:10px}.component-container.sc-cm-main-app{margin-top:20px;margin-bottom:60px;padding:20px 0}.features.sc-cm-main-app h3.sc-cm-main-app,.reference.sc-cm-main-app h3.sc-cm-main-app{color:hsla(var(--foreground), 0.9);font-weight:600;margin-bottom:10px;font-size:18px}.title-section.sc-cm-main-app p.sc-cm-main-app,.reference.sc-cm-main-app p.sc-cm-main-app{color:hsla(var(--foreground), 0.8);font-weight:500;margin-bottom:5px;font-size:16px}.features.sc-cm-main-app p.sc-cm-main-app{color:hsla(var(--foreground), 0.6);font-size:14px;display:flex;align-items:center}.features.sc-cm-main-app p.sc-cm-main-app span.sc-cm-main-app{height:18px;width:18px;border-radius:12px;background:hsla(var(--primary), 0.4);border:1px solid hsl(var(--primary));display:flex;align-items:center;justify-content:center;margin-right:5px;color:hsl(var(--primary-foreground))}.table-container.sc-cm-main-app{position:relative;width:100%;overflow:auto;border-radius:var(--radius)}table.sc-cm-main-app{width:100%;caption-side:bottom;font-size:0.875rem;line-height:1.25rem;border-radius:var(--radius);border-color:hsl(var(--border))}thead.sc-cm-main-app{border-bottom:1px solid hsl(var(--border));background:hsl(var(--muted));border-radius:var(--radius);margin:0;border-color:inherit}thead.sc-cm-main-app:hover{background:hsla(var(--muted), 0.8);border-color:inherit}tr.sc-cm-main-app{border-bottom:1px solid hsl(var(--border));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}tr.sc-cm-main-app:hover{background:hsla(var(--muted), 0.5)}th.sc-cm-main-app{height:2.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:left;font-weight:500;color:hsl(var(--muted-foreground))}td.sc-cm-main-app{padding:0.5rem;vertical-align:middle;color:hsl(var(--muted-foreground))}.buttons-container.sc-cm-main-app{display:flex;width:100%;align-items:center;flex-wrap:wrap;justify-content:space-evenly;gap:20px}";

const CmMainApp$1 = /*@__PURE__*/ proxyCustomElement(class CmMainApp extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.toast = createEvent(this, "toast", 7);
    this.defaultThemesColor = ['blue', 'yellow', 'green'];
    this.selectedColor = this.defaultThemesColor[0];
  }
  handleThemeChange(color) {
    this.selectedColor = color;
    document.body.className = `${color}`;
  }
  createRootTable(data) {
    return (h("div", { class: 'table-container' }, h("table", null, h("thead", null, h("tr", null, h("th", null, "Prop"), h("th", null, "Type"), h("th", null, "Default"))), h("tbody", null, data.map(property => (h("tr", null, Object.keys(property).map(p => (h("td", null, property[p]))))))))));
  }
  createEventTable(data) {
    return (h("div", { class: 'table-container' }, h("table", null, h("thead", null, h("tr", null, h("th", null, "Event"), h("th", null, "Type"))), h("tbody", null, data.map(property => (h("tr", null, Object.keys(property).map(p => (h("td", null, property[p]))))))))));
  }
  createFeatures(data) {
    return (h("div", { class: "features" }, h("h3", null, "Features"), data.map(d => (h("p", null, h("span", null, h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), d)))));
  }
  render() {
    return (h(Host, null, h("h1", { class: "title" }, "CM Components"), h("h1", null, "Customize Your Experience with Themes"), h("p", null, "Personalize your app's look and feel by selecting a color theme that suits your style! Simply tap on one of the colored circles under the \"Themes\" section to switch to a new theme."), h("div", { class: "container flex items-center justify-center" }, this.defaultThemesColor.map(color => (h("button", { class: `circle-btn ${color}`, onClick: () => this.handleThemeChange(color), "data-state": this.selectedColor === color ? 'checked' : 'unchecked' }, h("p", { class: 'sr-only' }, `${color} theme button`))))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Buttons"), h("p", null, "Displays a button or a component that looks like a button.")), h("div", { class: "buttons-container" }, h("cm-button", null, "Primary"), h("cm-button", { variants: "secondary" }, "Secondary"), h("cm-button", { variants: "danger" }, "Danger"), h("cm-button", { isLoading: true }, "With Loading")), this.createFeatures(buttonFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(buttonProperties), h("h3", null, "Events"), this.createEventTable(buttonEventProperties))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Checkbox"), h("p", null, "A control that allows the user to toggle between checked and not checked.")), h("cm-checkbox", null), this.createFeatures(checkboxFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(checkboxProperties), h("h3", null, "Events"), this.createEventTable(checkboxEvents))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Dropdown"), h("p", null, "Autocomplete input and command palette with a list of suggestions.")), h("cm-dropdown", null), this.createFeatures(dropdownFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(dropdownProperties), h("h3", null, "Events"), this.createEventTable(dropdownEvents))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Input"), h("p", null, "Displays a form input field or a component that looks like an input field.")), h("cm-input", { placeholder: "Input" }), this.createFeatures(inputFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(inputProperties), h("h3", null, "Events"), this.createEventTable(inputEventProperties))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Switch"), h("p", null, "A control that allows the user to toggle between checked and not checked.")), h("cm-switch", null), this.createFeatures(switchFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), h("p", null, "Contains all the parts of a switch. An input will also render when used within a form to ensure events propagate correctly."), this.createRootTable(switchProperties), h("h3", null, "Events"), this.createEventTable(switchEventProperties))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Toast"), h("p", null, "A succinct message that is displayed temporarily.")), h("cm-toast", null), h("cm-button", { onButtonClicked: () => {
        this.toast.emit({
          type: 'success',
          title: 'Success',
          description: 'Your account have been created.',
          position: 'top-right',
          swipable: true,
        });
      } }, "Trigger Toast"), this.createFeatures(toastFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), h("p", null, "The toast that automatically closes. It should not be held open to acquire a user response."), this.createRootTable(toastProperties), h("h3", null, "Events"), this.createEventTable(toastEventProperties)))));
  }
  static get style() { return cmMainAppCss; }
}, [2, "cm-main-app", {
    "selectedColor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-main-app", "cm-button", "cm-checkbox", "cm-dropdown", "cm-input", "cm-spinner", "cm-switch", "cm-toast"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-main-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmMainApp$1);
      }
      break;
    case "cm-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "cm-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "cm-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "cm-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "cm-spinner":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "cm-switch":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "cm-toast":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CmMainApp = CmMainApp$1;
const defineCustomElement = defineCustomElement$1;

export { CmMainApp, defineCustomElement };

//# sourceMappingURL=cm-main-app.js.map