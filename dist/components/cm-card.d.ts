import type { Components, JSX } from "../types/components";

interface CmCard extends Components.CmCard, HTMLElement {}
export const CmCard: {
  prototype: CmCard;
  new (): CmCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
