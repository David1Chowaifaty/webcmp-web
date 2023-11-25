import { Host, h } from "@stencil/core";
import { buttonEventProperties, buttonFeatures, buttonProperties, checkboxEvents, checkboxFeatures, checkboxProperties, dropdownEvents, dropdownFeatures, dropdownProperties, inputEventProperties, inputFeatures, inputProperties, switchEventProperties, switchFeatures, switchProperties, toastEventProperties, toastFeatures, toastProperties, } from "./data";
export class CmMainApp {
  constructor() {
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
  static get is() { return "cm-main-app"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-main-app.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-main-app.css"]
    };
  }
  static get states() {
    return {
      "selectedColor": {}
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
              "path": "../cm-toast/toast",
              "id": "src/components/cm-toast/toast.d.ts::IToast"
            }
          }
        }
      }];
  }
}
//# sourceMappingURL=cm-main-app.js.map
