import type { Components, JSX } from "../types/components";

interface CmSpinner extends Components.CmSpinner, HTMLElement {}
export const CmSpinner: {
  prototype: CmSpinner;
  new (): CmSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
