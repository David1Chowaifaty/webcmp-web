import type { Components, JSX } from "../types/components";

interface CmInput extends Components.CmInput, HTMLElement {}
export const CmInput: {
  prototype: CmInput;
  new (): CmInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
