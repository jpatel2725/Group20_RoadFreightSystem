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
exports.Shipment = void 0;
const typeorm_1 = require("typeorm");
const Customer_1 = require("./Customer");
const Trip_1 = require("./Trip");
let Shipment = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _weight_decorators;
    let _weight_initializers = [];
    let _weight_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _origin_decorators;
    let _origin_initializers = [];
    let _origin_extraInitializers = [];
    let _destination_decorators;
    let _destination_initializers = [];
    let _destination_extraInitializers = [];
    let _customer_decorators;
    let _customer_initializers = [];
    let _customer_extraInitializers = [];
    let _trip_decorators;
    let _trip_initializers = [];
    let _trip_extraInitializers = [];
    var Shipment = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.weight = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _weight_initializers, void 0));
            this.value = (__runInitializers(this, _weight_extraInitializers), __runInitializers(this, _value_initializers, void 0));
            this.origin = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _origin_initializers, void 0));
            this.destination = (__runInitializers(this, _origin_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
            this.customer = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _customer_initializers, void 0));
            this.trip = (__runInitializers(this, _customer_extraInitializers), __runInitializers(this, _trip_initializers, void 0));
            __runInitializers(this, _trip_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Shipment");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _weight_decorators = [(0, typeorm_1.Column)()];
        _value_decorators = [(0, typeorm_1.Column)()];
        _origin_decorators = [(0, typeorm_1.Column)()];
        _destination_decorators = [(0, typeorm_1.Column)()];
        _customer_decorators = [(0, typeorm_1.ManyToOne)(() => Customer_1.Customer, (customer) => customer.shipments)];
        _trip_decorators = [(0, typeorm_1.ManyToOne)(() => Trip_1.Trip, (trip) => trip.shipments)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _weight_decorators, { kind: "field", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, get: obj => obj.weight, set: (obj, value) => { obj.weight = value; } }, metadata: _metadata }, _weight_initializers, _weight_extraInitializers);
        __esDecorate(null, null, _value_decorators, { kind: "field", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
        __esDecorate(null, null, _origin_decorators, { kind: "field", name: "origin", static: false, private: false, access: { has: obj => "origin" in obj, get: obj => obj.origin, set: (obj, value) => { obj.origin = value; } }, metadata: _metadata }, _origin_initializers, _origin_extraInitializers);
        __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: obj => "destination" in obj, get: obj => obj.destination, set: (obj, value) => { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
        __esDecorate(null, null, _customer_decorators, { kind: "field", name: "customer", static: false, private: false, access: { has: obj => "customer" in obj, get: obj => obj.customer, set: (obj, value) => { obj.customer = value; } }, metadata: _metadata }, _customer_initializers, _customer_extraInitializers);
        __esDecorate(null, null, _trip_decorators, { kind: "field", name: "trip", static: false, private: false, access: { has: obj => "trip" in obj, get: obj => obj.trip, set: (obj, value) => { obj.trip = value; } }, metadata: _metadata }, _trip_initializers, _trip_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Shipment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Shipment = _classThis;
})();
exports.Shipment = Shipment;
