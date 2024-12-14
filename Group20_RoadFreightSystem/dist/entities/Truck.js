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
exports.Truck = void 0;
const typeorm_1 = require("typeorm");
const Trip_1 = require("./Trip");
const Repairs_1 = require("./Repairs");
let Truck = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _brand_decorators;
    let _brand_initializers = [];
    let _brand_extraInitializers = [];
    let _load_decorators;
    let _load_initializers = [];
    let _load_extraInitializers = [];
    let _capacity_decorators;
    let _capacity_initializers = [];
    let _capacity_extraInitializers = [];
    let _year_decorators;
    let _year_initializers = [];
    let _year_extraInitializers = [];
    let _numRepairs_decorators;
    let _numRepairs_initializers = [];
    let _numRepairs_extraInitializers = [];
    let _trips_decorators;
    let _trips_initializers = [];
    let _trips_extraInitializers = [];
    let _repairs_decorators;
    let _repairs_initializers = [];
    let _repairs_extraInitializers = [];
    var Truck = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.brand = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _brand_initializers, void 0));
            this.load = (__runInitializers(this, _brand_extraInitializers), __runInitializers(this, _load_initializers, void 0));
            this.capacity = (__runInitializers(this, _load_extraInitializers), __runInitializers(this, _capacity_initializers, void 0));
            this.year = (__runInitializers(this, _capacity_extraInitializers), __runInitializers(this, _year_initializers, void 0));
            this.numRepairs = (__runInitializers(this, _year_extraInitializers), __runInitializers(this, _numRepairs_initializers, void 0));
            this.trips = (__runInitializers(this, _numRepairs_extraInitializers), __runInitializers(this, _trips_initializers, void 0));
            this.repairs = (__runInitializers(this, _trips_extraInitializers), __runInitializers(this, _repairs_initializers, void 0));
            __runInitializers(this, _repairs_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Truck");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _brand_decorators = [(0, typeorm_1.Column)()];
        _load_decorators = [(0, typeorm_1.Column)()];
        _capacity_decorators = [(0, typeorm_1.Column)()];
        _year_decorators = [(0, typeorm_1.Column)()];
        _numRepairs_decorators = [(0, typeorm_1.Column)()];
        _trips_decorators = [(0, typeorm_1.OneToMany)(() => Trip_1.Trip, (trip) => trip.truck)];
        _repairs_decorators = [(0, typeorm_1.OneToMany)(() => Repairs_1.Repairs, (repairs) => repairs.truck)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _brand_decorators, { kind: "field", name: "brand", static: false, private: false, access: { has: obj => "brand" in obj, get: obj => obj.brand, set: (obj, value) => { obj.brand = value; } }, metadata: _metadata }, _brand_initializers, _brand_extraInitializers);
        __esDecorate(null, null, _load_decorators, { kind: "field", name: "load", static: false, private: false, access: { has: obj => "load" in obj, get: obj => obj.load, set: (obj, value) => { obj.load = value; } }, metadata: _metadata }, _load_initializers, _load_extraInitializers);
        __esDecorate(null, null, _capacity_decorators, { kind: "field", name: "capacity", static: false, private: false, access: { has: obj => "capacity" in obj, get: obj => obj.capacity, set: (obj, value) => { obj.capacity = value; } }, metadata: _metadata }, _capacity_initializers, _capacity_extraInitializers);
        __esDecorate(null, null, _year_decorators, { kind: "field", name: "year", static: false, private: false, access: { has: obj => "year" in obj, get: obj => obj.year, set: (obj, value) => { obj.year = value; } }, metadata: _metadata }, _year_initializers, _year_extraInitializers);
        __esDecorate(null, null, _numRepairs_decorators, { kind: "field", name: "numRepairs", static: false, private: false, access: { has: obj => "numRepairs" in obj, get: obj => obj.numRepairs, set: (obj, value) => { obj.numRepairs = value; } }, metadata: _metadata }, _numRepairs_initializers, _numRepairs_extraInitializers);
        __esDecorate(null, null, _trips_decorators, { kind: "field", name: "trips", static: false, private: false, access: { has: obj => "trips" in obj, get: obj => obj.trips, set: (obj, value) => { obj.trips = value; } }, metadata: _metadata }, _trips_initializers, _trips_extraInitializers);
        __esDecorate(null, null, _repairs_decorators, { kind: "field", name: "repairs", static: false, private: false, access: { has: obj => "repairs" in obj, get: obj => obj.repairs, set: (obj, value) => { obj.repairs = value; } }, metadata: _metadata }, _repairs_initializers, _repairs_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Truck = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Truck = _classThis;
})();
exports.Truck = Truck;
