"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bodyParser = tslib_1.__importStar(require("body-parser"));
var core_1 = require("@overnightjs/core");
var logger_1 = require("@overnightjs/logger");
var UserController_1 = require("./UserController");
var SampleServer = (function (_super) {
    tslib_1.__extends(SampleServer, _super);
    function SampleServer() {
        var _this = _super.call(this, process.env.NODE_ENV === 'development') || this;
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        _this.setupControllers();
        return _this;
    }
    SampleServer.prototype.setupControllers = function () {
        var userController = new UserController_1.UserController();
        _super.prototype.addControllers.call(this, [userController]);
    };
    SampleServer.prototype.start = function (port) {
        this.app.listen(port, function () {
            logger_1.Logger.Imp('Server listening on port: ' + port);
        });
    };
    return SampleServer;
}(core_1.Server));
exports.SampleServer = SampleServer;
