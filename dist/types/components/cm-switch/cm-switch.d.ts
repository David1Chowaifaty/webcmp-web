import { EventEmitter } from '../../stencil-public-runtime';
export declare class CmSwitch {
  name: string;
  required: boolean;
  disabled: boolean;
  value: string;
  checked: boolean;
  defaultChecked: boolean;
  checkedChange: EventEmitter<boolean>;
  componentWillLoad(): void;
  private toggleChecked;
  handleKeyDown(event: KeyboardEvent): void;
  render(): any;
}
