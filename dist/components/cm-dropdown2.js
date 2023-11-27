import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';

const cmDropdownCss = ".sc-cm-dropdown-h{display:block;width:100%;position:relative;max-width:450px}ul.sc-cm-dropdown,li.sc-cm-dropdown,div.sc-cm-dropdown,button.sc-cm-dropdown{all:unset;box-sizing:border-box}.search-container.sc-cm-dropdown{display:flex;align-items:center;gap:5px;padding:10px;margin-bottom:5px;border-bottom:1px solid hsl(var(--border));position:relative;z-index:2000;width:100%;height:40px}.combobox-trigger.sc-cm-dropdown{width:100%;border-radius:var(--radius);border:1px solid hsl(var(--border));display:inline-flex;align-items:center;padding:0 15px;justify-content:space-between;font-size:13px;line-height:1;height:35px;box-shadow:0 2px 10px rgba(0, 0, 0, 0.2)}.combobox-trigger.sc-cm-dropdown:focus,.combobox-trigger.sc-cm-dropdown:active{box-shadow:0 0 1px 1px hsl(var(--ring))}.combobox-item.sc-cm-dropdown{font-size:13px;line-height:1;color:hsl(var(--foreground));border-radius:3px;display:flex;align-items:center;justify-content:space-between;height:25px;padding:0 35px 0 25px;-webkit-user-select:none;user-select:none}.combobox-item[data-highlighted='true'].sc-cm-dropdown{background-color:hsl(var(--primary));color:hsl(var(--primary-foreground))}.combobox-item[data-disabled].sc-cm-dropdown{color:hsla(var(--foreground), 0.6)}input.sc-cm-dropdown{flex:1;overflow:hidden;background:hsl(var(--background));border:0;color:hsl(var(--foreground))}input.sc-cm-dropdown:focus{outline:none}.combobox-content.sc-cm-dropdown{opacity:0;overflow:hidden;position:absolute;z-index:100000;background-color:hsl(var(--background));border-radius:var(--radius);width:100%;border:1px solid hsl(var(--border));box-shadow:0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2)}.combobox-viewport.sc-cm-dropdown{padding:0 5px}.combobox-content[data-visibility='show'].sc-cm-dropdown,.combobox-content[data-visibility='hide'].sc-cm-dropdown{animation-duration:100ms;animation-timing-function:ease-in-out;animation-fill-mode:forwards}.combobox-content[data-visibility='show'].sc-cm-dropdown{animation-name:fadeIn}.combobox-content[data-visibility='hide'].sc-cm-dropdown{animation-name:fadeOut}.combobox-content[data-position='above'].sc-cm-dropdown{bottom:40px;left:0}.combobox-content[data-position='below'].sc-cm-dropdown{top:40px;left:0}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";

const CmDropdown = /*@__PURE__*/ proxyCustomElement(class CmDropdown extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemClick = createEvent(this, "itemClick", 7);
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
  renderItem(item, index) {
    return (h("li", { "data-disabled": item.disabled, "data-highlighted": this.currentHighlightedIndex === index ? 'true' : 'false', class: 'combobox-item', tabIndex: index, onMouseOver: () => {
        if (!item.disabled) {
          this.onMouseOver(index);
        }
      }, onClick: () => {
        if (!item.disabled) {
          this.onItemClick();
        }
      } }, item.item, this.selectedItemName === item.item && (h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })))));
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
    return (h(Host, null, h("button", { ref: el => (this.buttonRef = el), type: "button", onKeyDown: event => this.handleButtonKeyDown(event), class: 'combobox-trigger', onClick: () => this.toggleDropdown() }, this.renderButtonName(), h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))), h("div", { ref: el => (this.dropdownContainer = el), "data-visibility": this.isDropdownVisible ? 'show' : 'hide', class: 'combobox-content' }, this.isDropdownVisible && (h(Fragment, null, this.search && (h("div", { class: "search-container" }, h("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" })), h("input", { autoFocus: true, onBlur: () => this.updateListFocus(), ref: el => (this.inputRef = el), id: "drp-search", type: "text", placeholder: "Search", value: this.searchQuery, onInput: event => this.handleChange(event) }))), this.filteredItemNames.length > 0 ? (h("ul", { class: 'combobox-viewport', tabindex: "0", onKeyDown: event => this.onKeyDown(event), onMouseLeave: () => this.onMouseLeave() }, this.filteredItemNames.map((name, index) => this.renderItem(name, index)))) : (h("p", { "data-disabled": true, class: "combobox-item" }, "No result found")))))));
  }
  get el() { return this; }
  static get style() { return cmDropdownCss; }
}, [2, "cm-dropdown", {
    "itemNames": [16],
    "rtl": [1540],
    "search": [516],
    "dropdownTitle": [513, "dropdown-title"],
    "isDropdownVisible": [32],
    "searchQuery": [32],
    "selectedItemName": [32],
    "currentHighlightedIndex": [32],
    "filteredItemNames": [32]
  }, [[4, "click", "handleDocumentClick"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cm-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "cm-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CmDropdown);
      }
      break;
  } });
}

export { CmDropdown as C, defineCustomElement as d };

//# sourceMappingURL=cm-dropdown2.js.map