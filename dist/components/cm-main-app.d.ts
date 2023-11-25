import type { Components, JSX } from "../types/components";

interface CmMainApp extends Components.CmMainApp, HTMLElement {}
export const CmMainApp: {
  prototype: CmMainApp;
  new (): CmMainApp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
