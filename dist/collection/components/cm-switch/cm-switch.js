import { Host, h } from "@stencil/core";
export class CmSwitch {
  constructor() {
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
  static get is() { return "cm-switch"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-switch.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-switch.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": true
      },
      "required": {
        "type": "boolean",
        "mutable": false,
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
        "attribute": "required",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
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
        "attribute": "disabled",
        "reflect": true
      },
      "value": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": true
      },
      "checked": {
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
        "attribute": "checked",
        "reflect": true
      },
      "defaultChecked": {
        "type": "boolean",
        "mutable": false,
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
        "attribute": "default-checked",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "checkedChange",
        "name": "checkedChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=cm-switch.js.map
