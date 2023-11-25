import { h } from "@stencil/core";
export class CmButton {
  constructor() {
    this.type = 'button';
    this.disabled = false;
    this.variants = 'default';
    this.name = undefined;
    this.value = undefined;
    this.isLoading = false;
  }
  render() {
    return (h("button", { class: this.variants, onClick: e => this.buttonClicked.emit(e), type: this.type, disabled: this.disabled, name: this.name, value: this.value }, h("slot", null), this.isLoading && h("cm-spinner", { class: 'spinner' })));
  }
  static get is() { return "cm-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["cm-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cm-button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'button' | 'submit' | 'reset'",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": true,
        "defaultValue": "'button'"
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
        "reflect": true,
        "defaultValue": "false"
      },
      "variants": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link'",
          "resolved": "\"danger\" | \"default\" | \"ghost\" | \"icon\" | \"link\" | \"secondary\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "variants",
        "reflect": true,
        "defaultValue": "'default'"
      },
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
      "isLoading": {
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
        "attribute": "is-loading",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "buttonClicked",
        "name": "buttonClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "MouseEvent",
          "resolved": "MouseEvent",
          "references": {
            "MouseEvent": {
              "location": "global",
              "id": "global::MouseEvent"
            }
          }
        }
      }];
  }
}
//# sourceMappingURL=cm-button.js.map
