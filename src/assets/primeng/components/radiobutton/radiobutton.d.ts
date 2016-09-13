import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const RADIO_VALUE_ACCESSOR: any;
export declare class RadioButton implements ControlValueAccessor {
    value: any;
    name: string;
    disabled: boolean;
    label: string;
    click: EventEmitter<any>;
    model: any;
    onModelChange: Function;
    onModelTouched: Function;
    checked: boolean;
    protected hover: boolean;
    onclick(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    writeValue(model: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
export declare class RadioButtonModule {
}
