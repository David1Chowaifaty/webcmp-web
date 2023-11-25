import type { Components, JSX } from "../types/components";

interface CmSwitch extends Components.CmSwitch, HTMLElement {}
export const CmSwitch: {
  prototype: CmSwitch;
  new (): CmSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
