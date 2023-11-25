import type { Components, JSX } from "../types/components";

interface CmToast extends Components.CmToast, HTMLElement {}
export const CmToast: {
  prototype: CmToast;
  new (): CmToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
