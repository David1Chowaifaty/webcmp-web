/*Input */
export const inputProperties = [
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
export const inputFeatures = [
  'Supports various input types (text, number, email, etc.)',
  "Configurable properties: 'name', 'placeholder', 'value', 'inputid', 'class'",
  "Optional attributes: 'required', 'disabled', 'readonly', 'maxlength', 'min', 'max', 'step', 'pattern', 'autocomplete', 'autofocus', 'size', 'multiple'",
  'Designed for flexible integration in forms and UIs',
];
export const inputEventProperties = [{ prop: 'textChanged', type: 'string' }];
/*Switch */
export const switchProperties = [
  { prop: 'name', type: 'string', default: '_' },
  { prop: 'required', type: 'boolean', default: 'false' },
  { prop: 'disabled', type: 'boolean', default: 'false' },
  { prop: 'value', type: 'string', default: '_' },
  { prop: 'checked', type: 'boolean', default: 'false' },
  { prop: 'defaultChecked', type: 'boolean', default: 'false' },
];
export const switchEventProperties = [{ prop: 'checkedChange', type: 'boolean' }];
export const switchFeatures = ['Full keyboard navigation.', 'Can be controlled or uncontrolled.'];
/*Tost*/
export const toastProperties = [
  { prop: 'position', type: 'TPositions', default: 'bottom-left' },
  { prop: 'swipable', type: 'boolean', default: 'false' },
];
export const toastEventProperties = [{ prop: 'toast', type: 'IToast' }];
export const toastFeatures = [
  'Full keyboard navigation',
  'Can be controlled or uncontrolled',
  'Automatically closes',
  'Supports closing via swipe gesture',
  'Exposes CSS variables for swipe gesture animations',
  'Customizable layout',
];
/*Button */
export const buttonProperties = [
  { prop: 'type', type: "'button' | 'submit' | 'reset'", default: 'button' },
  { prop: 'disabled', type: 'boolean', default: 'false' },
  { prop: 'variants', type: "'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link'", default: 'default' },
  { prop: 'name', type: 'string', default: 'undefined' },
  { prop: 'value', type: 'string', default: 'undefined' },
  { prop: 'isLoading', type: 'boolean', default: 'false' },
];
export const buttonEventProperties = [{ prop: 'buttonClicked', type: 'MouseEvent' }];
export const buttonFeatures = ['Configurable disabled state', 'Loading state with spinner', 'Supports slot for custom content'];
/*Card */
export const cardFeatures = [
  'Custom card component with shadow DOM encapsulation',
  'Uses <slot> for content projection',
  "Automatically assigns 'container' class to the host element on load",
];
/*Checkbox */
export const checkboxFeatures = [
  "Supports 'name', 'required', 'disabled', 'value', and 'labelMessage' properties",
  'Custom checkbox functionality using a button element',
  'Aria accessibility attributes for screen readers',
  'Optional label message displayed next to the checkbox',
];
export const checkboxProperties = [
  { prop: 'name', type: 'string', default: 'undefined' },
  { prop: 'required', type: 'boolean', default: 'undefined' },
  { prop: 'disabled', type: 'boolean', default: 'undefined' },
  { prop: 'value', type: 'string', default: 'undefined' },
  { prop: 'checked', type: 'boolean', default: 'false' },
  { prop: 'defaultChecked', type: 'boolean', default: 'undefined' },
  { prop: 'labelMessage', type: 'string', default: 'undefined' },
];
export const checkboxEvents = [{ event: 'checkedChange', type: 'EventEmitter<boolean>' }];
/*Dropdown */
export const dropdownFeatures = [
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
export const dropdownProperties = [
  {
    prop: 'itemNames',
    type: 'IItems[]',
    default: '_',
  },
  { prop: 'rtl', type: 'boolean', default: 'false' },
  { prop: 'search', type: 'boolean', default: 'true' },
  { prop: 'dropdownTitle', type: 'string', default: 'Toggle DropDown' },
];
export const dropdownEvents = [{ event: 'itemClick', type: 'EventEmitter<string>' }];
//# sourceMappingURL=data.js.map
