/* tslint:disable:no-unused-variable */
import { addProviders, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App: TestCli', function () {
    beforeEach(function () {
        addProviders([AppComponent]);
    });
    it('should create the app', inject([AppComponent], function (app) {
        expect(app).toBeTruthy();
    }));
    it('should have as title \'app works!\'', inject([AppComponent], function (app) {
        expect(app.title).toEqual('app works!');
    }));
});
//# sourceMappingURL=E:/Programowanie/front-end/projects/angular-tutorial/src/app/app.component.spec.js.map