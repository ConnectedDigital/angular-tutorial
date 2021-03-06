import { OnInit, AfterViewInit, OnDestroy, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class OverlayPanel implements OnInit, AfterViewInit, OnDestroy {
    protected el: ElementRef;
    protected domHandler: DomHandler;
    protected renderer: Renderer;
    dismissable: boolean;
    showCloseIcon: boolean;
    style: any;
    styleClass: string;
    appendTo: any;
    onBeforeShow: EventEmitter<any>;
    onAfterShow: EventEmitter<any>;
    onBeforeHide: EventEmitter<any>;
    onAfterHide: EventEmitter<any>;
    container: any;
    visible: boolean;
    hoverCloseIcon: boolean;
    documentClickListener: any;
    selfClick: boolean;
    targetEvent: boolean;
    target: any;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggle(event: any, target?: any): void;
    show(event: any, target?: any): void;
    hide(): void;
    onPanelClick(): void;
    onCloseClick(event: any): void;
    ngOnDestroy(): void;
}
export declare class OverlayPanelModule {
}
