import type { Components, JSX } from "../types/components";

interface CmButton extends Components.CmButton, HTMLElement {}
export const CmButton: {
  prototype: CmButton;
  new (): CmButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
