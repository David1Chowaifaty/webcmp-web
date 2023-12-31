'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4476fe0b.js');

const cmButtonCss = ".sc-cm-button-h{display:block;--ring-color:hsl(var(--ring))}button.sc-cm-button{all:unset;cursor:pointer;padding:10px;border-radius:var(--radius);transition:all 300ms ease-in-out;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:500;gap:10px;position:relative;box-sizing:border-box}button.sc-cm-button:focus-visible{outline:1px solid var(--ring-color);outline-offset:2px}.default.sc-cm-button{background:hsla(var(--primary));color:hsl(var(--primary-foreground));--ring-color:hsl(var(--primary));--spinner-background:hsl(var(--primary-foreground))}.link.sc-cm-button{color:hsl(var(--primary));--ring-color:hsl(var(--primary))}.secondary.sc-cm-button{background:hsl(var(--secondary));--ring-color:hsl(var(--secondary));color:hsl(var(--secondary-foreground));--spinner-background:hsl(var(--secondary-foreground))}.danger.sc-cm-button{background:hsl(var(--destructive));color:hsl(var(--destructive-foreground));--spinner-background:hsl(var(--destructive-foreground));--ring-color:hsl(var(--destructive))}.default.sc-cm-button:hover{background:hsla(var(--primary), 0.8)}.secondary.sc-cm-button:hover{background:hsla(var(--secondary), 0.8)}.danger.sc-cm-button:hover{background-color:hsla(var(--destructive), 0.8)}.link.sc-cm-button:hover{text-decoration:underline}.spinner.sc-cm-button{height:24px;width:24px}";

const CmButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
    this.type = 'button';
    this.disabled = false;
    this.variants = 'default';
    this.name = undefined;
    this.value = undefined;
    this.isLoading = false;
  }
  render() {
    return (index.h("button", { class: this.variants, onClick: e => this.buttonClicked.emit(e), type: this.type, disabled: this.disabled, name: this.name, value: this.value }, index.h("slot", null), this.isLoading && index.h("cm-spinner", { class: 'spinner' })));
  }
};
CmButton.style = cmButtonCss;

const cmCheckboxCss = ".sc-cm-checkbox-h{display:block;position:relative}.root-container.sc-cm-checkbox{display:flex;align-items:center;width:min-content;height:min-content}button.sc-cm-checkbox{all:unset}input.sc-cm-checkbox{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:0;height:0}.CheckboxRoot.sc-cm-checkbox{border:2px solid hsl(var(--border));width:25px;height:25px;border-radius:var(--radius);display:flex;align-items:center;justify-content:center;box-sizing:border-box}.CheckboxRoot[data-state='checked'].sc-cm-checkbox{border-width:0;background:hsl(var(--primary))}.CheckboxRoot[data-state='checked'].sc-cm-checkbox:hover{background:hsla(var(--primary), 0.8)}.CheckboxRoot[data-state='unchecked'].sc-cm-checkbox:hover{background-color:hsla(var(--input), 0.1)}.CheckboxRoot.sc-cm-checkbox:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px}.CheckboxIndicator.sc-cm-checkbox{color:hsl(var(--primary-foreground));display:flex;align-items:center;justify-content:center;opacity:0}.CheckboxIndicator[data-state='checked'].sc-cm-checkbox{animation:fadeIn 200ms forwards}.CheckboxIndicator[data-state='unchecked'].sc-cm-checkbox{animation:fadeOut 200ms forwards}.Label.sc-cm-checkbox{color:var(--foreground);padding-left:15px;font-size:15px;line-height:1}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";

const CmCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.checkedChange = index.createEvent(this, "checkedChange", 7);
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
    return (index.h(index.Host, null, index.h("div", { class: "root-container" }, index.h("button", { type: "button", role: "checkbox", onClick: this.handleChange.bind(this), "aria-checked": this.checked, "data-state": this.checked ? 'checked' : 'unchecked', value: "on", id: "c1", class: "CheckboxRoot" }, index.h("p", { class: 'sr-only' }, "checkbox"), index.h("span", { "data-state": this.checked ? 'checked' : 'unchecked', class: "CheckboxIndicator" }, index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))), index.h("input", { type: "checkbox", "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.checked }), this.labelMessage && (index.h("label", { htmlFor: "c1", class: "Label" }, this.labelMessage)))));
  }
};
CmCheckbox.style = cmCheckboxCss;

const cmDropdownCss = ".sc-cm-dropdown-h{display:block;max-width:var(--max-width, 300px);position:relative}ul.sc-cm-dropdown,li.sc-cm-dropdown,div.sc-cm-dropdown,button.sc-cm-dropdown{all:unset;box-sizing:border-box}.search-container.sc-cm-dropdown{display:flex;align-items:center;gap:5px;padding:10px;margin-bottom:5px;border-bottom:1px solid hsl(var(--border));position:relative;z-index:2000;width:100%;height:40px}.combobox-trigger.sc-cm-dropdown{width:100%;border-radius:var(--radius);border:1px solid hsl(var(--border));display:inline-flex;align-items:center;padding:0 15px;justify-content:space-between;font-size:13px;line-height:1;height:35px;box-shadow:0 2px 10px rgba(0, 0, 0, 0.2)}.combobox-trigger.sc-cm-dropdown:focus,.combobox-trigger.sc-cm-dropdown:active{box-shadow:0 0 1px 1px hsl(var(--ring))}.combobox-item.sc-cm-dropdown{font-size:13px;line-height:1;color:hsl(var(--foreground));border-radius:3px;display:flex;align-items:center;justify-content:space-between;height:25px;padding:0 35px 0 25px;-webkit-user-select:none;user-select:none}.combobox-item[data-highlighted='true'].sc-cm-dropdown{background-color:hsl(var(--primary));color:hsl(var(--primary-foreground))}.combobox-item[data-disabled].sc-cm-dropdown{color:hsla(var(--foreground), 0.6)}input.sc-cm-dropdown{flex:1;overflow:hidden;background:hsl(var(--background));border:0;color:hsl(var(--foreground))}input.sc-cm-dropdown:focus{outline:none}.combobox-content.sc-cm-dropdown{opacity:0;overflow:hidden;position:absolute;z-index:100000;background-color:hsl(var(--background));border-radius:var(--radius);min-width:300px;border:1px solid hsl(var(--border));box-shadow:0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2)}.combobox-viewport.sc-cm-dropdown{padding:0 5px}.combobox-content[data-visibility='show'].sc-cm-dropdown,.combobox-content[data-visibility='hide'].sc-cm-dropdown{animation-duration:100ms;animation-timing-function:ease-in-out;animation-fill-mode:forwards}.combobox-content[data-visibility='show'].sc-cm-dropdown{animation-name:fadeIn}.combobox-content[data-visibility='hide'].sc-cm-dropdown{animation-name:fadeOut}.combobox-content[data-position='above'].sc-cm-dropdown{bottom:40px;left:0}.combobox-content[data-position='below'].sc-cm-dropdown{top:40px;left:0}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";

const CmDropdown = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemClick = index.createEvent(this, "itemClick", 7);
    this.itemNames = [
      { item: 'Settings' },
      { item: 'Profile' },
      { item: 'Notifications', disabled: true },
      { item: 'Messages' },
      { item: 'Support', disabled: true },
      { item: 'Account' },
      { item: 'Dashboard' },
      { item: 'Logout' },
      { item: 'Help' },
      { item: 'Feedback' },
    ];
    this.rtl = false;
    this.search = true;
    this.dropdownTitle = 'Toggle DropDown';
    this.isDropdownVisible = false;
    this.searchQuery = '';
    this.selectedItemName = '';
    this.currentHighlightedIndex = -1;
    this.filteredItemNames = this.itemNames;
  }
  componentWillLoad() {
    this.filteredItemNames = [...this.itemNames];
  }
  addFocusToButton() {
    var _a;
    (_a = this.buttonRef) === null || _a === void 0 ? void 0 : _a.focus();
  }
  componentDidLoad() {
    this.updateListFocus();
    this.detectRTLContext();
  }
  detectRTLContext() {
    const direction = getComputedStyle(this.el).direction;
    this.rtl = direction === 'rtl';
  }
  handleDocumentClick(event) {
    const target = event.target;
    if (!this.el.contains(target)) {
      this.isDropdownVisible = false;
    }
  }
  updateListFocus() {
    if (this.isDropdownVisible) {
      let list = this.el.querySelector('.combobox-viewport');
      list === null || list === void 0 ? void 0 : list.focus();
    }
  }
  onMouseOver(index) {
    this.currentHighlightedIndex = index;
  }
  handleSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.filteredItemNames = this.itemNames.filter(item => item.item.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }, 100);
    if (this.searchQuery === '') {
      this.filteredItemNames = [...this.itemNames];
    }
  }
  onKeyDown(event) {
    this.handleNavigation(event);
  }
  handleInputKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.filteredItemNames.length > 0) {
        setTimeout(() => {
          this.updateListFocus();
        }, 20);
        this.currentHighlightedIndex = 0;
      }
    }
  }
  handleNavigation(event) {
    const itemCount = this.filteredItemNames.length;
    let newIndex = this.currentHighlightedIndex;
    switch (event.key) {
      case 'ArrowDown':
        newIndex = (newIndex + 1) % itemCount;
        if (this.filteredItemNames[newIndex].disabled) {
          newIndex = (newIndex + 1) % itemCount;
        }
        break;
      case 'ArrowUp':
        newIndex = (newIndex - 1 + itemCount) % itemCount;
        if (this.filteredItemNames[newIndex].disabled) {
          newIndex = (newIndex - 1 + itemCount) % itemCount;
        }
        break;
      case 'Enter':
      case ' ':
        this.onItemClick();
        break;
      case 'Escape':
        this.toggleDropdown();
        break;
    }
    this.currentHighlightedIndex = newIndex;
    event.preventDefault();
  }
  onItemClick() {
    const selectedItem = this.filteredItemNames[this.currentHighlightedIndex];
    this.itemClick.emit(selectedItem.item);
    this.selectedItemName = selectedItem.item;
    this.toggleDropdown();
  }
  onMouseLeave() {
    this.currentHighlightedIndex = -1;
  }
  toggleDropdown() {
    if (!this.isDropdownVisible) {
      this.isDropdownVisible = true;
      this.calculateDropdownPosition();
      this.buttonRef.blur();
      setTimeout(() => {
        this.updateListFocus();
      }, 50);
    }
    else {
      this.isDropdownVisible = false;
      this.addFocusToButton();
      if (this.searchQuery !== '') {
        this.searchQuery = '';
        this.filteredItemNames = [...this.itemNames];
      }
    }
  }
  calculateDropdownPosition() {
    const buttonRect = this.el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceAbove = buttonRect.top;
    const spaceBelow = viewportHeight - buttonRect.bottom;
    const dropdownHeight = 200;
    if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
      this.dropdownContainer.setAttribute('data-position', 'below');
    }
    else {
      this.dropdownContainer.setAttribute('data-position', 'above');
    }
  }
  renderItem(item, index$1) {
    return (index.h("li", { "data-disabled": item.disabled, "data-highlighted": this.currentHighlightedIndex === index$1 ? 'true' : 'false', class: 'combobox-item', tabIndex: index$1, onMouseOver: () => {
        if (!item.disabled) {
          this.onMouseOver(index$1);
        }
      }, onClick: () => {
        if (!item.disabled) {
          this.onItemClick();
        }
      } }, item.item, this.selectedItemName === item.item && (index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))));
  }
  renderButtonName() {
    if (this.selectedItemName !== '') {
      return this.selectedItemName;
    }
    return this.dropdownTitle;
  }
  handleChange(event) {
    this.searchQuery = event.target.value;
    this.handleSearch();
    this.inputRef.addEventListener('keydown', this.handleInputKeyDown.bind(this));
  }
  handleButtonKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.toggleDropdown();
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { ref: el => (this.buttonRef = el), type: "button", onKeyDown: event => this.handleButtonKeyDown(event), class: 'combobox-trigger', onClick: () => this.toggleDropdown() }, this.renderButtonName(), index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), index.h("div", { ref: el => (this.dropdownContainer = el), "data-visibility": this.isDropdownVisible ? 'show' : 'hide', class: 'combobox-content' }, this.isDropdownVisible && (index.h(index.Fragment, null, this.search && (index.h("div", { class: "search-container" }, index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })), index.h("input", { autoFocus: true, onBlur: () => this.updateListFocus(), ref: el => (this.inputRef = el), id: "drp-search", type: "text", placeholder: "Search", value: this.searchQuery, onInput: event => this.handleChange(event) }))), this.filteredItemNames.length > 0 ? (index.h("ul", { class: 'combobox-viewport', tabindex: "0", onKeyDown: event => this.onKeyDown(event), onMouseLeave: () => this.onMouseLeave() }, this.filteredItemNames.map((name, index) => this.renderItem(name, index)))) : (index.h("p", { "data-disabled": true, class: "combobox-item" }, "No result found")))))));
  }
  get el() { return index.getElement(this); }
};
CmDropdown.style = cmDropdownCss;

const cmInputCss = ".sc-cm-input-h{display:block}input.sc-cm-input{box-sizing:border-box;display:flex;height:2.25rem;width:100%;border-radius:var(--radius);border:1px solid hsl(var(--border));background-color:transparent;padding:4px 12px;font-size:0.875rem;line-height:1.25rem;box-shadow:0 1px 2px 0 rgb(0 0 0 / 0.05);transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input[type='file'].sc-cm-input{border:none;background-color:transparent;font-size:0.875rem;line-height:1.25rem;font-weight:500}input.sc-cm-input::placeholder{color:hsl(var(--muted-foreground))}input.sc-cm-input:focus{outline:none;box-shadow:0 0 0 calc(0px + var(--cm-ring-offset-width)) hsl(var(--ring))}input.sc-cm-input:disabled{cursor:not-allowed;opacity:0.5}";

const CmInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.textChanged = index.createEvent(this, "textChanged", 7);
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
    return (index.h(index.Host, null, index.h("input", { type: this.type, name: this.name, placeholder: this.placeholder, value: this.value, id: this.inputid, class: this.class, required: this.required, disabled: this.disabled, readonly: this.readonly, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, pattern: this.pattern, autocomplete: this.autocomplete, autofocus: this.autofocus, size: this.size, multiple: this.multiple, onChange: e => this.textChanged.emit(e.target.value) })));
  }
};
CmInput.style = cmInputCss;

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

const CmMainApp = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toast = index.createEvent(this, "toast", 7);
    this.defaultThemesColor = ['blue', 'yellow', 'green'];
    this.selectedColor = this.defaultThemesColor[0];
  }
  handleThemeChange(color) {
    this.selectedColor = color;
    document.body.className = `${color}`;
  }
  createRootTable(data) {
    return (index.h("div", { class: 'table-container' }, index.h("table", null, index.h("thead", null, index.h("tr", null, index.h("th", null, "Prop"), index.h("th", null, "Type"), index.h("th", null, "Default"))), index.h("tbody", null, data.map(property => (index.h("tr", null, Object.keys(property).map(p => (index.h("td", null, property[p]))))))))));
  }
  createEventTable(data) {
    return (index.h("div", { class: 'table-container' }, index.h("table", null, index.h("thead", null, index.h("tr", null, index.h("th", null, "Event"), index.h("th", null, "Type"))), index.h("tbody", null, data.map(property => (index.h("tr", null, Object.keys(property).map(p => (index.h("td", null, property[p]))))))))));
  }
  createFeatures(data) {
    return (index.h("div", { class: "features" }, index.h("h3", null, "Features"), data.map(d => (index.h("p", null, index.h("span", null, index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), d)))));
  }
  render() {
    return (index.h(index.Host, null, index.h("h1", { class: "title" }, "CM Components"), index.h("h1", null, "Customize Your Experience with Themes"), index.h("p", null, "Personalize your app's look and feel by selecting a color theme that suits your style! Simply tap on one of the colored circles under the \"Themes\" section to switch to a new theme."), index.h("div", { class: "container flex items-center justify-center" }, this.defaultThemesColor.map(color => (index.h("button", { class: `circle-btn ${color}`, onClick: () => this.handleThemeChange(color), "data-state": this.selectedColor === color ? 'checked' : 'unchecked' }, index.h("p", { class: 'sr-only' }, `${color} theme button`))))), index.h("section", { class: "component-container" }, index.h("div", { class: 'title-section' }, index.h("h1", null, "Buttons"), index.h("p", null, "Displays a button or a component that looks like a button.")), index.h("div", { class: "buttons-container" }, index.h("cm-button", null, "Primary"), index.h("cm-button", { variants: "secondary" }, "Secondary"), index.h("cm-button", { variants: "danger" }, "Danger"), index.h("cm-button", { isLoading: true }, "With Loading")), this.createFeatures(buttonFeatures), index.h("div", { class: "reference" }, index.h("h3", null, "Root"), this.createRootTable(buttonProperties), index.h("h3", null, "Events"), this.createEventTable(buttonEventProperties))), index.h("section", { class: "component-container" }, index.h("div", { class: 'title-section' }, index.h("h1", null, "Checkbox"), index.h("p", null, "A control that allows the user to toggle between checked and not checked.")), index.h("cm-checkbox", null), this.createFeatures(checkboxFeatures), index.h("div", { class: "reference" }, index.h("h3", null, "Root"), this.createRootTable(checkboxProperties), index.h("h3", null, "Events"), this.createEventTable(checkboxEvents))), index.h("section", { class: "component-container" }, index.h("div", { class: 'title-section' }, index.h("h1", null, "Dropdown"), index.h("p", null, "Autocomplete input and command palette with a list of suggestions.")), index.h("cm-dropdown", null), this.createFeatures(dropdownFeatures), index.h("div", { class: "reference" }, index.h("h3", null, "Root"), this.createRootTable(dropdownProperties), index.h("h3", null, "Events"), this.createEventTable(dropdownEvents))), index.h("section", { class: "component-container" }, index.h("div", { class: 'title-section' }, index.h("h1", null, "Input"), index.h("p", null, "Displays a form input field or a component that looks like an input field.")), index.h("cm-input", { placeholder: "Input" }), this.createFeatures(inputFeatures), index.h("div", { class: "reference" }, index.h("h3", null, "Root"), this.createRootTable(inputProperties), index.h("h3", null, "Events"), this.createEventTable(inputEventProperties))), index.h("section", { class: "component-container" }, index.h("div", { class: 'title-section' }, index.h("h1", null, "Switch"), index.h("p", null, "A control that allows the user to toggle between checked and not checked.")), index.h("cm-switch", null), this.createFeatures(switchFeatures), index.h("div", { class: "reference" }, index.h("h3", null, "Root"), index.h("p", null, "Contains all the parts of a switch. An input will also render when used within a form to ensure events propagate correctly."), this.createRootTable(switchProperties), index.h("h3", null, "Events"), this.createEventTable(switchEventProperties))), index.h("section", { class: "component-container" }, index.h("div", { class: 'title-section' }, index.h("h1", null, "Toast"), index.h("p", null, "A succinct message that is displayed temporarily.")), index.h("cm-toast", null), index.h("cm-button", { onButtonClicked: () => {
        this.toast.emit({
          type: 'success',
          title: 'Success',
          description: 'Your account have been created.',
          position: 'top-right',
          swipable: true,
        });
      } }, "Trigger Toast"), this.createFeatures(toastFeatures), index.h("div", { class: "reference" }, index.h("h3", null, "Root"), index.h("p", null, "The toast that automatically closes. It should not be held open to acquire a user response."), this.createRootTable(toastProperties), index.h("h3", null, "Events"), this.createEventTable(toastEventProperties)))));
  }
};
CmMainApp.style = cmMainAppCss;

const cmSpinnerCss = "div.spinner.sc-cm-spinner{position:relative;width:100%;height:100%;display:inline-block;box-sizing:border-box}div.spinner.sc-cm-spinner div.sc-cm-spinner{width:6%;height:16%;background:var(--spinner-background, inherit);position:absolute;left:49%;top:43%;opacity:0;-webkit-border-radius:50px;border-radius:50px;-webkit-box-shadow:0 0 3px rgba(0, 0, 0, 0.2);box-shadow:0 0 3px rgba(0, 0, 0, 0.2);-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}@-webkit-keyframes fade{from{opacity:1}to{opacity:0.25}}@keyframes fade{from{opacity:1}to{opacity:0.25}}div.spinner.sc-cm-spinner div.bar1.sc-cm-spinner{-webkit-transform:rotate(0deg) translate(0, -130%);transform:rotate(0deg) translate(0, -130%);-webkit-animation-delay:0s;animation-delay:0s}div.spinner.sc-cm-spinner div.bar2.sc-cm-spinner{-webkit-transform:rotate(30deg) translate(0, -130%);transform:rotate(30deg) translate(0, -130%);-webkit-animation-delay:-0.9167s;animation-delay:-0.9167s}div.spinner.sc-cm-spinner div.bar3.sc-cm-spinner{-webkit-transform:rotate(60deg) translate(0, -130%);transform:rotate(60deg) translate(0, -130%);-webkit-animation-delay:-0.833s;animation-delay:-0.833s}div.spinner.sc-cm-spinner div.bar4.sc-cm-spinner{-webkit-transform:rotate(90deg) translate(0, -130%);transform:rotate(90deg) translate(0, -130%);-webkit-animation-delay:-0.7497s;animation-delay:-0.7497s}div.spinner.sc-cm-spinner div.bar5.sc-cm-spinner{-webkit-transform:rotate(120deg) translate(0, -130%);transform:rotate(120deg) translate(0, -130%);-webkit-animation-delay:-0.667s;animation-delay:-0.667s}div.spinner.sc-cm-spinner div.bar6.sc-cm-spinner{-webkit-transform:rotate(150deg) translate(0, -130%);transform:rotate(150deg) translate(0, -130%);-webkit-animation-delay:-0.5837s;animation-delay:-0.5837s}div.spinner.sc-cm-spinner div.bar7.sc-cm-spinner{-webkit-transform:rotate(180deg) translate(0, -130%);transform:rotate(180deg) translate(0, -130%);-webkit-animation-delay:-0.5s;animation-delay:-0.5s}div.spinner.sc-cm-spinner div.bar8.sc-cm-spinner{-webkit-transform:rotate(210deg) translate(0, -130%);transform:rotate(210deg) translate(0, -130%);-webkit-animation-delay:-0.4167s;animation-delay:-0.4167s}div.spinner.sc-cm-spinner div.bar9.sc-cm-spinner{-webkit-transform:rotate(240deg) translate(0, -130%);transform:rotate(240deg) translate(0, -130%);-webkit-animation-delay:-0.333s;animation-delay:-0.333s}div.spinner.sc-cm-spinner div.bar10.sc-cm-spinner{-webkit-transform:rotate(270deg) translate(0, -130%);transform:rotate(270deg) translate(0, -130%);-webkit-animation-delay:-0.2497s;animation-delay:-0.2497s}div.spinner.sc-cm-spinner div.bar11.sc-cm-spinner{-webkit-transform:rotate(300deg) translate(0, -130%);transform:rotate(300deg) translate(0, -130%);-webkit-animation-delay:-0.167s;animation-delay:-0.167s}div.spinner.sc-cm-spinner div.bar12.sc-cm-spinner{-webkit-transform:rotate(330deg) translate(0, -130%);transform:rotate(330deg) translate(0, -130%);-webkit-animation-delay:-0.0833s;animation-delay:-0.0833s}";

const CmSpinner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "spinner" }, index.h("div", { class: "bar1" }), index.h("div", { class: "bar2" }), index.h("div", { class: "bar3" }), index.h("div", { class: "bar4" }), index.h("div", { class: "bar5" }), index.h("div", { class: "bar6" }), index.h("div", { class: "bar7" }), index.h("div", { class: "bar8" }), index.h("div", { class: "bar9" }), index.h("div", { class: "bar10" }), index.h("div", { class: "bar11" }), index.h("div", { class: "bar12" }))));
  }
};
CmSpinner.style = cmSpinnerCss;

const cmSwitchCss = ".sc-cm-switch-h{display:block;--switch-root-width:36px;--switch-root-height:20px;--switch-thumb-size:calc(var(--switch-root-height) - 2px)}input.sc-cm-switch{opacity:0;width:0;height:0}.SwitchRoot.sc-cm-switch{display:inline-flex;align-items:center;width:var(--switch-root-width);height:var(--switch-root-height);background-color:hsl(var(--input));border-radius:9999px;position:relative;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);border:2px solid transparent;flex-shrink:0}.SwitchRoot.sc-cm-switch:focus-within::after{content:'';height:calc(var(--switch-root-height) + 6px);width:calc(var(--switch-root-width) + 6px);border-radius:9999px;position:absolute;z-index:-1;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-user-select:none;user-select:none;box-shadow:0 0 0 1px hsl(var(--ring))}.SwitchRoot[data-disabled].sc-cm-switch{opacity:0.5;cursor:not-allowed}.SwitchRoot[data-state='checked'].sc-cm-switch{background-color:hsl(var(--primary))}.SwitchRoot[data-state='checked'].sc-cm-switch:hover{background-color:hsla(var(--primary), 0.8)}.SwitchThumb.sc-cm-switch{position:absolute;width:var(--switch-thumb-size);height:var(--switch-thumb-size);background-color:white;border-radius:9999px;box-shadow:0 2px 2px rgba(0, 0, 0, 0.1);transition:transform 100ms;transform:translateX(2px);will-change:transform;-webkit-user-select:none;user-select:none}.SwitchRoot[data-state='checked'].sc-cm-switch .SwitchThumb.sc-cm-switch{transform:translateX(calc(var(--switch-root-width) - 2px - var(--switch-thumb-size)))}";

const CmSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.checkedChange = index.createEvent(this, "checkedChange", 7);
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
    return (index.h(index.Host, null, index.h("label", { "data-disabled": this.disabled, "data-state": this.checked ? 'checked' : 'unchecked', class: "SwitchRoot" }, index.h("input", { placeholder: "switch", type: "checkbox", value: this.value, disabled: this.disabled, name: this.name, required: this.required, checked: this.checked, onInput: () => this.toggleChecked(), onKeyDown: e => this.handleKeyDown(e) }), index.h("span", { class: "SwitchThumb" }))));
  }
};
CmSwitch.style = cmSwitchCss;

const cmToastCss = "button.sc-cm-toast,p.sc-cm-toast,h3.sc-cm-toast,div.sc-cm-toast{all:unset}.sc-cm-toast-h{--rd-viewport-padding:25px;--rd-element-width:300px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-cm-toast-h{--rd-success:#33b074}}p.sc-cm-toast{color:hsla(var(--foreground), 0.8);font-size:13px;line-height:1.3}h1.sc-cm-toast,h2.sc-cm-toast,h3.sc-cm-toast,h4.sc-cm-toast,h5.sc-cm-toast,h6.sc-cm-toast{font-weight:500;color:hsl(var(--foreground));font-size:15px}[position='top-left'].sc-cm-toast-h{--rd-offset-width:calc(-100% - var(--rd-viewport-padding));top:0;left:0}[position='top-right'].sc-cm-toast-h{--rd-offset-width:calc(100% + var(--rd-viewport-padding));top:0;right:0}[position='bottom-left'].sc-cm-toast-h{--rd-offset-width:calc(-100% - var(--rd-viewport-padding));bottom:0;left:0}[position='bottom-right'].sc-cm-toast-h{--rd-offset-width:calc(100% + var(--rd-viewport-padding));bottom:0;right:0}.icon-container.sc-cm-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0;position:absolute;top:50%;right:calc(var(--rd-viewport-padding) / 2);transform:translateY(-50%)}.icon-container.sc-cm-toast>svg.sc-cm-toast{margin:0;color:white;stroke-width:5px}.success.sc-cm-toast{background-color:var(--rd-success)}.error.sc-cm-toast{background-color:hsl(var(--destructive))}.ToastRoot.sc-cm-toast{width:var(--rd-element-width);background-color:hsl(var(--background));border-radius:var(--radius);box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(var(--border));position:relative}.ToastRoot[data-state='open'].sc-cm-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-cm-toast{pointer-events:none;animation:hide 100ms ease-in}.ToastRoot[data-swipe='move'].sc-cm-toast{transform:translateX(var(--rd-toast-swipe-move-x))}.ToastRoot[data-swipe='cancel'].sc-cm-toast{transform:translateX(0);transition:transform 200ms ease-out}.ToastRoot[data-swipe='end'].sc-cm-toast{animation:swipeOut 100ms ease-out forwards}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@-webkit-keyframes swipeOut{from{transform:translateX(var(--rd-toast-swipe-end-x))}to{transform:translateX(var(--rd-offset-width))}}@keyframes swipeOut{from{transform:translateX(var(--rd-toast-swipe-end-x))}to{transform:translateX(var(--rd-offset-width))}}.ToastTitle.sc-cm-toast{grid-area:title;margin-bottom:5px;font-weight:500;color:hsl(var(--foreground));font-size:15px}.ToastDescription.sc-cm-toast{grid-area:description;margin:0;color:hsla(var(--foreground), 0.8);font-size:13px;line-height:1.3}.ToastAction.sc-cm-toast{grid-area:action}";

const CmToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toast = index.createEvent(this, "toast", 7);
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
        return (index.h("div", { class: "icon-container success" }, index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))));
      case 'error':
        return (index.h("div", { class: "icon-container error" }, index.h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))));
      default:
        return null;
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("section", { ref: el => (this.toastRef = el), class: `ToastRoot` }, this.isVisible && (index.h(index.Fragment, null, this.toastBody.type === 'custom' ? (this.toastBody.body) : (index.h(index.Fragment, null, index.h("h3", { class: "ToastTitle" }, this.toastBody.title), index.h("p", { class: "ToastDescription" }, this.toastBody.description), this.renderIcon())))))));
  }
  get element() { return index.getElement(this); }
};
CmToast.style = cmToastCss;

exports.cm_button = CmButton;
exports.cm_checkbox = CmCheckbox;
exports.cm_dropdown = CmDropdown;
exports.cm_input = CmInput;
exports.cm_main_app = CmMainApp;
exports.cm_spinner = CmSpinner;
exports.cm_switch = CmSwitch;
exports.cm_toast = CmToast;

//# sourceMappingURL=cm-button_8.cjs.entry.js.map