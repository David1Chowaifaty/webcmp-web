import { EventEmitter } from '../../stencil-public-runtime';
export declare class CmInput {
  type: InputType;
  name: string;
  placeholder: string;
  value: string;
  inputid: string;
  class: string;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  maxlength: number;
  min: string | number;
  max: string | number;
  step: string | number;
  pattern: string;
  autocomplete: string;
  autofocus: boolean;
  size: number;
  multiple: boolean;
  textChanged: EventEmitter<string>;
  render(): any;
}
