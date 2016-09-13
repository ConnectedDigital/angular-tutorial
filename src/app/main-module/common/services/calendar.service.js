"use strict";
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var CalendarService = (function () {
    function CalendarService(http) {
        this.http = http;
        this.url = 'src/app/main-module/common/services/data.json';
    }
    CalendarService.prototype.getEvents = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CalendarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CalendarService);
    return CalendarService;
}());
exports.CalendarService = CalendarService;
//# sourceMappingURL=calendar.service.js.map