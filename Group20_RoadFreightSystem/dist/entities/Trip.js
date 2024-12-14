"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
const typeorm_1 = require("typeorm");
const Truck_1 = require("./Truck");
const Employee_1 = require("./Employee");
const Shipment_1 = require("./Shipment");
let Trip = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _route_decorators;
    let _route_initializers = [];
    let _route_extraInitializers = [];
    let _truck_decorators;
    let _truck_initializers = [];
    let _truck_extraInitializers = [];
    let _driver_decorators;
    let _driver_initializers = [];
    let _driver_extraInitializers = [];
    let _shipments_decorators;
    let _shipments_initializers = [];
    let _shipments_extraInitializers = [];
    var Trip = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.route = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _route_initializers, void 0));
            this.truck = (__runInitializers(this, _route_extraInitializers), __runInitializers(this, _truck_initializers, void 0));
            this.driver = (__runInitializers(this, _truck_extraInitializers), __runInitializers(this, _driver_initializers, void 0));
            this.shipments = (__runInitializers(this, _driver_extraInitializers), __runInitializers(this, _shipments_initializers, void 0));
            __runInitializers(this, _shipments_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Trip");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _route_decorators = [(0, typeorm_1.Column)()];
        _truck_decorators = [(0, typeorm_1.ManyToOne)(() => Truck_1.Truck, (truck) => truck.trips)];
        _driver_decorators = [(0, typeorm_1.ManyToOne)(() => Employee_1.Employee, (driver) => driver.trips)];
        _shipments_decorators = [(0, typeorm_1.OneToMany)(() => Shipment_1.Shipment, (shipment) => shipment.trip)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _route_decorators, { kind: "field", name: "route", static: false, private: false, access: { has: obj => "route" in obj, get: obj => obj.route, set: (obj, value) => { obj.route = value; } }, metadata: _metadata }, _route_initializers, _route_extraInitializers);
        __esDecorate(null, null, _truck_decorators, { kind: "field", name: "truck", static: false, private: false, access: { has: obj => "truck" in obj, get: obj => obj.truck, set: (obj, value) => { obj.truck = value; } }, metadata: _metadata }, _truck_initializers, _truck_extraInitializers);
        __esDecorate(null, null, _driver_decorators, { kind: "field", name: "driver", static: false, private: false, access: { has: obj => "driver" in obj, get: obj => obj.driver, set: (obj, value) => { obj.driver = value; } }, metadata: _metadata }, _driver_initializers, _driver_extraInitializers);
        __esDecorate(null, null, _shipments_decorators, { kind: "field", name: "shipments", static: false, private: false, access: { has: obj => "shipments" in obj, get: obj => obj.shipments, set: (obj, value) => { obj.shipments = value; } }, metadata: _metadata }, _shipments_initializers, _shipments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Trip = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Trip = _classThis;
})();
exports.Trip = Trip;
