"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_status_codes_1 = require("http-status-codes");
var core_1 = require("@overnightjs/core");
var logger_1 = require("@overnightjs/logger");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.get = function (req, res) {
        logger_1.Logger.Info('get called');
        return res.status(http_status_codes_1.OK).json({
            message: 'get_called',
        });
    };
    UserController.prototype.post = function (req, res) {
        logger_1.Logger.Info('post called');
        return res.status(http_status_codes_1.OK).json({
            message: 'post_called',
        });
    };
    tslib_1.__decorate([
        core_1.Get(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Object)
    ], UserController.prototype, "get", null);
    tslib_1.__decorate([
        core_1.Post(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, Object]),
        tslib_1.__metadata("design:returntype", Object)
    ], UserController.prototype, "post", null);
    UserController = tslib_1.__decorate([
        core_1.Controller('user/say-hello')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
