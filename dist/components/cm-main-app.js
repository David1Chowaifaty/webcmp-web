import { proxyCustomElement, HTMLElement, createEvent, h, Fragment, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$9 } from './cm-button2.js';
import { d as defineCustomElement$8 } from './cm-checkbox2.js';
import { d as defineCustomElement$7 } from './cm-dialog2.js';
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
const dialogFeatures = ['Keyboard navigation support.', 'Slot support for dialog header, body, and footer'];
const dialogProperties = [
  {
    prop: 'openDialog',
    type: 'null',
  },
  {
    prop: 'closeDialog',
    type: 'null',
  },
];
const dialogMethods = [
  {
    Name: 'toggleOpen',
    Parameters: '_',
    Description: 'Opens the dialog.',
  },
  {
    Name: 'toggleClose',
    Parameters: '_',
    Description: 'Closes the dialog.',
  },
];

const cmMainAppCss = ".sc-cm-main-app-h{display:block;--selected-color:hsl(217.2, 91.2%, 59.8%);color:hsl(var(--foreground));width:100%;overflow-x:hidden;padding:0 24px}.title.sc-cm-main-app{display:block;font-size:24px;font-weight:bold;margin:0}.circle-btn.sc-cm-main-app{height:25px;width:25px;border-radius:25px;margin-right:15px;margin-top:20px}.circle-btn[data-state='checked'].sc-cm-main-app{outline:1px solid var(--selected-color);outline-offset:2px}.blue.sc-cm-main-app{background:hsl(217.2, 91.2%, 59.8%);--selected-color:hsl(217.2, 91.2%, 59.8%)}.yellow.sc-cm-main-app{background:hsl(47.9, 95.8%, 53.1%);--selected-color:hsl(47.9, 95.8%, 53.1%)}.green.sc-cm-main-app{background:hsl(142.1, 76.2%, 36.3%);--selected-color:hsl(142.1, 76.2%, 36.3%)}.features.sc-cm-main-app,.title-section.sc-cm-main-app,.component-container.sc-cm-main-app,.reference.sc-cm-main-app{display:flex;flex-direction:column;gap:10px;margin-top:10px;width:100%}h1.sc-cm-main-app{font-size:24px;font-weight:700;display:block;margin-bottom:10px}.component-container.sc-cm-main-app{margin-top:20px;margin-bottom:60px;padding:20px 0}nav.sc-cm-main-app ul.sc-cm-main-app li.sc-cm-main-app{list-style:none;margin:0;padding:0}header.sc-cm-main-app{display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}nav.sc-cm-main-app ul.sc-cm-main-app li.sc-cm-main-app a.sc-cm-main-app{text-decoration:none;font-size:16px;font-weight:500;color:hsl(var(--foreground))}nav.sc-cm-main-app ul.sc-cm-main-app li.sc-cm-main-app a.sc-cm-main-app:hover{color:hsl(var(--primary))}nav.sc-cm-main-app ul.sc-cm-main-app{display:flex;gap:20px}.features.sc-cm-main-app h3.sc-cm-main-app,.reference.sc-cm-main-app h3.sc-cm-main-app{color:hsla(var(--foreground), 0.9);font-weight:600;margin-bottom:10px;font-size:18px}.title-section.sc-cm-main-app p.sc-cm-main-app,.reference.sc-cm-main-app p.sc-cm-main-app{color:hsla(var(--foreground), 0.8);font-weight:500;margin-bottom:5px;font-size:16px}.features.sc-cm-main-app p.sc-cm-main-app{color:hsla(var(--foreground), 0.6);font-size:14px;display:flex;align-items:center}.features.sc-cm-main-app p.sc-cm-main-app span.sc-cm-main-app{height:18px;width:18px;border-radius:12px;background:hsla(var(--primary), 0.4);border:1px solid hsl(var(--primary));display:flex;align-items:center;justify-content:center;margin-right:5px;color:hsl(var(--foreground))}.table-container.sc-cm-main-app{position:relative;width:100%;overflow:auto;border-top-right-radius:var(--radius);border-top-left-radius:var(--radius)}.buttons-container.sc-cm-main-app{display:flex;width:100%;align-items:center;flex-wrap:wrap;justify-content:space-evenly;gap:20px}";

const CmMainApp$1 = /*@__PURE__*/ proxyCustomElement(class CmMainApp extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.toast = createEvent(this, "toast", 7);
    this.openDialog = createEvent(this, "openDialog", 7);
    this.closeDialog = createEvent(this, "closeDialog", 7);
    this.defaultThemesColor = ['blue', 'yellow', 'green'];
    this.selectedColor = this.defaultThemesColor[0];
    this.isDarkTheme = false;
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.className = this.isDarkTheme ? `dark-theme ${this.selectedColor}` : this.selectedColor;
    localStorage.setItem('theme', this.isDarkTheme ? 'light' : 'dark');
  }
  handleThemeChange(color) {
    this.selectedColor = color;
    document.body.className = this.isDarkTheme ? `dark-theme ${this.selectedColor}` : this.selectedColor;
  }
  createRootTable(data, options = {}) {
    return (h("div", { class: 'table-container' }, h("table", null, h("thead", null, h("tr", null, Object.keys(options).length > 0 ? (Object.keys(options[0]).map(opt => h("th", null, opt))) : (h(Fragment, null, h("th", null, "Prop"), h("th", null, "Type"), h("th", null, "Default"))))), h("tbody", null, data.map(property => (h("tr", null, Object.keys(property).map(p => (h("td", null, property[p]))))))))));
  }
  createEventTable(data) {
    return (h("div", { class: 'table-container' }, h("table", null, h("thead", null, h("tr", null, h("th", null, "Event"), h("th", null, "Type"))), h("tbody", null, data.map(property => (h("tr", null, Object.keys(property).map(p => (h("td", null, property[p]))))))))));
  }
  createFeatures(data) {
    return (h("div", { class: "features" }, h("h3", null, "Features"), data.map(d => (h("p", null, h("span", null, h("svg", { width: "12", height: "12", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), d)))));
  }
  render() {
    return (h(Host, null, h("header", null, h("h1", { class: "title" }, "CM Components"), h("nav", null, h("ul", null, h("li", null, h("a", { href: "#toast" }, "Toast")), h("li", null, h("a", { href: "#dialog" }, "Dialog")), h("li", null))), h("cm-button", { "aria-label": "theme-button", variants: "ghost", onClick: this.toggleTheme.bind(this) }, this.isDarkTheme ? (h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))) : (h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), h("h1", null, "Customize Your Experience with Themes"), h("p", null, "Personalize your app's look and feel by selecting a color theme that suits your style! Simply tap on one of the colored circles under the \"Themes\" section to switch to a new theme."), h("div", { class: "container flex items-center justify-center" }, this.defaultThemesColor.map(color => (h("button", { class: `circle-btn ${color}`, onClick: () => this.handleThemeChange(color), "data-state": this.selectedColor === color ? 'checked' : 'unchecked' }, h("p", { class: 'sr-only' }, `${color} theme button`))))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Buttons"), h("p", null, "Displays a button or a component that looks like a button.")), h("div", { class: "buttons-container" }, h("cm-button", null, "Primary"), h("cm-button", { variants: "secondary" }, "Secondary"), h("cm-button", { variants: "danger" }, "Danger"), h("cm-button", { isLoading: true }, "With Loading")), this.createFeatures(buttonFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(buttonProperties), h("h3", null, "Events"), this.createEventTable(buttonEventProperties))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Checkbox"), h("p", null, "A control that allows the user to toggle between checked and not checked.")), h("cm-checkbox", null), this.createFeatures(checkboxFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(checkboxProperties), h("h3", null, "Events"), this.createEventTable(checkboxEvents))), h("section", { id: "dialog", class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Dialog"), h("p", null, "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.")), h("cm-dialog", null, h("div", { slot: "dialog-header" }, h("p", null, "Update User")), h("div", { slot: "dialog-body" }, h("cm-input", { required: true, placeholder: "Email" }), h("cm-input", { placeholder: "Password", type: "password" })), h("div", { slot: "dialog-footer" }, h("cm-button", { onButtonClicked: () => this.closeDialog.emit(null), variants: "secondary" }, "cancel"), h("cm-button", { onButtonClicked: () => this.closeDialog.emit(null), variants: "danger" }, "delete"))), h("cm-button", { onButtonClicked: () => {
        this.openDialog.emit(null);
      } }, "Open Dialog"), this.createFeatures(dialogFeatures), h("div", { class: "reference" }, h("h3", null, "Events"), this.createEventTable(dialogProperties), h("h3", null, "Public Methods"), this.createRootTable(dialogMethods, dialogMethods))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Dropdown"), h("p", null, "Autocomplete input and command palette with a list of suggestions.")), h("cm-dropdown", null), this.createFeatures(dropdownFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(dropdownProperties), h("h3", null, "Events"), this.createEventTable(dropdownEvents))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Input"), h("p", null, "Displays a form input field or a component that looks like an input field.")), h("cm-input", { placeholder: "Input" }), this.createFeatures(inputFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), this.createRootTable(inputProperties), h("h3", null, "Events"), this.createEventTable(inputEventProperties))), h("section", { class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Switch"), h("p", null, "A control that allows the user to toggle between checked and not checked.")), h("cm-switch", null), this.createFeatures(switchFeatures), h("div", { class: "reference" }, h("h3", null, "Root"), h("p", null, "Contains all the parts of a switch. An input will also render when used within a form to ensure events propagate correctly."), this.createRootTable(switchProperties), h("h3", null, "Events"), this.createEventTable(switchEventProperties))), h("section", { id: "toast", class: "component-container" }, h("div", { class: 'title-section' }, h("h1", null, "Toast"), h("p", null, "A succinct message that is displayed temporarily.")), h("cm-toast", null), h("cm-button", { onButtonClicked: () => {
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
    "selectedColor": [32],
    "isDarkTheme": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-main-app", "cm-button", "cm-checkbox", "cm-dialog", "cm-dropdown", "cm-input", "cm-spinner", "cm-switch", "cm-toast"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-main-app":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmMainApp$1);
      }
      break;
    case "cm-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$9();
      }
      break;
    case "cm-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "cm-dialog":
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