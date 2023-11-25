import { EventEmitter } from '../../stencil-public-runtime';
export declare class CmButton {
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  variants: 'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link';
  name: string;
  value: string;
  isLoading: boolean;
  buttonClicked: EventEmitter<MouseEvent>;
  render(): any;
}
