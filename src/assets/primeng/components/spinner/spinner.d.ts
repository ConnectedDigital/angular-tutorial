import { ElementRef, AfterViewInit, EventEmitter } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare const SPINNER_VALUE_ACCESSOR: any;
export declare class Spinner implements AfterViewInit, ControlValueAccessor {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    onChange: EventEmitter<any>;
    step: number;
    min: number;
    max: number;
    maxlength: number;
    size: number;
    disabled: boolean;
    value: number;
    onModelChange: Function;
    onModelTouched: Function;
    protected hoverUp: boolean;
    protected activeUp: boolean;
    protected hoverDown: boolean;
    protected activeDown: boolean;
    protected precision: number;
    protected timer: any;
    protected inputtext: any;
    constructor(el: ElementRef, domHandler: DomHandler);
    ngAfterViewInit(): void;
    repeat(interval: any, dir: any, input: any): void;
    spin(dir: number, inputElement: any): void;
    toFixed(value: number, precision: number): string;
    onUpButtonMousedown(event: any, input: any): void;
    onUpButtonMouseup(event: any): void;
    onUpButtonMouseenter(event: any): void;
    onUpButtonMouseleave(event: any): void;
    onDownButtonMousedown(event: any, input: any): void;
    onDownButtonMouseup(event: any): void;
    onDownButtonMouseenter(event: any): void;
    onDownButtonMouseleave(event: any): void;
    onInputKeydown(event: any, inputElement: any): void;
    onInput(event: any): void;
    onBlur(inputElement: any): void;
    parseValue(val: string): number;
    handleChange(event: any): void;
    clearTimer(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
}
export declare class SpinnerModule {
}
