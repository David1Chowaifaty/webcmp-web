import type { Components, JSX } from "../types/components";

interface CmDropdown extends Components.CmDropdown, HTMLElement {}
export const CmDropdown: {
  prototype: CmDropdown;
  new (): CmDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
