import { MenuItem } from '../common/api';
import { Router } from '@angular/router';
export declare class BasePanelMenuItem {
    protected router: Router;
    constructor(router: Router);
    handleClick(event: any, item: any): void;
}
export declare class PanelMenuSub extends BasePanelMenuItem {
    item: MenuItem;
    expanded: boolean;
    constructor(router: Router);
}
export declare class PanelMenu extends BasePanelMenuItem {
    model: MenuItem[];
    style: any;
    styleClass: string;
    constructor(router: Router);
    unsubscribe(item: any): void;
    ngOnDestroy(): void;
}
export declare class PanelMenuModule {
}
