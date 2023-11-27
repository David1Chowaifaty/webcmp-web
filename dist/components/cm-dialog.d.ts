import type { Components, JSX } from "../types/components";

interface CmDialog extends Components.CmDialog, HTMLElement {}
export const CmDialog: {
  prototype: CmDialog;
  new (): CmDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
