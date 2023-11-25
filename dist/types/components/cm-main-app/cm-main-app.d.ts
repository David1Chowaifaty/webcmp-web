import { EventEmitter } from '../../stencil-public-runtime';
import { IToast } from '../cm-toast/toast';
export declare class CmMainApp {
  private defaultThemesColor;
  selectedColor: string;
  toast: EventEmitter<IToast>;
  handleThemeChange(color: string): void;
  createRootTable(data: any[]): any;
  createEventTable(data: any[]): any;
  createFeatures(data: any[]): any;
  render(): any;
}
