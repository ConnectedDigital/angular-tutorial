import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const TOGGLEBUTTON_VALUE_ACCESSOR: any;
export declare class ToggleButton implements ControlValueAccessor {
    onLabel: string;
    offLabel: string;
    onIcon: string;
    offIcon: string;
    disabled: boolean;
    style: any;
    styleClass: string;
    onChange: EventEmitter<any>;
    checked: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    protected hover: boolean;
    getIconClass(): string;
    toggle(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
export declare class ToggleButtonModule {
}
