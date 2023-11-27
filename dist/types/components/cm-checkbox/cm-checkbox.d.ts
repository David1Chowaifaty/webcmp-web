import { EventEmitter } from '../../stencil-public-runtime';
export declare class CmCheckbox {
  name: string;
  required: boolean;
  disabled: boolean;
  value: string;
  checked: boolean;
  defaultChecked: boolean;
  labelMessage: string;
  checkedChange: EventEmitter<boolean>;
  private checkbox;
  componentDidLoad(): void;
  handleChange(): void;
  render(): any;
}
