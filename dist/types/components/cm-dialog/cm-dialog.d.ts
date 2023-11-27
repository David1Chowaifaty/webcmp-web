import { EventEmitter } from '../../stencil-public-runtime';
export declare class CmDialog {
  isDialogVisible: boolean;
  isAlertDialog: boolean;
  dialogTitle: string;
  el: HTMLElement;
  openDialog: EventEmitter<null>;
  closeDialog: EventEmitter<null>;
  private firstFocusableEl;
  private lastFocusableEl;
  private allFocusableEls;
  handleOpenDialog(): void;
  handleCloseDialog(): void;
  toggleOpen(): Promise<void>;
  toggleClose(): Promise<void>;
  updateFocusableElements(): void;
  handleKeyDown(e: KeyboardEvent): void;
  handleBackdropClick(): void;
  componentDidLoad(): void;
  render(): any;
}
