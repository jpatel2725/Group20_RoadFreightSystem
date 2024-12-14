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
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const Repairs_1 = require("./Repairs");
const Trip_1 = require("./Trip");
let Employee = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _surname_decorators;
    let _surname_initializers = [];
    let _surname_extraInitializers = [];
    let _seniority_decorators;
    let _seniority_initializers = [];
    let _seniority_extraInitializers = [];
    let _category_decorators;
    let _category_initializers = [];
    let _category_extraInitializers = [];
    let _specializedBrand_decorators;
    let _specializedBrand_initializers = [];
    let _specializedBrand_extraInitializers = [];
    let _trips_decorators;
    let _trips_initializers = [];
    let _trips_extraInitializers = [];
    let _repairs_decorators;
    let _repairs_initializers = [];
    let _repairs_extraInitializers = [];
    var Employee = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.surname = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _surname_initializers, void 0));
            this.seniority = (__runInitializers(this, _surname_extraInitializers), __runInitializers(this, _seniority_initializers, void 0));
            this.category = (__runInitializers(this, _seniority_extraInitializers), __runInitializers(this, _category_initializers, void 0));
            this.specializedBrand = (__runInitializers(this, _category_extraInitializers), __runInitializers(this, _specializedBrand_initializers, void 0));
            this.trips = (__runInitializers(this, _specializedBrand_extraInitializers), __runInitializers(this, _trips_initializers, void 0));
            this.repairs = (__runInitializers(this, _trips_extraInitializers), __runInitializers(this, _repairs_initializers, void 0));
            __runInitializers(this, _repairs_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Employee");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _surname_decorators = [(0, typeorm_1.Column)()];
        _seniority_decorators = [(0, typeorm_1.Column)()];
        _category_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _specializedBrand_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _trips_decorators = [(0, typeorm_1.OneToMany)(() => Trip_1.Trip, (trip) => trip.driver)];
        _repairs_decorators = [(0, typeorm_1.OneToMany)(() => Repairs_1.Repairs, (repairs) => repairs.mechanic)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _surname_decorators, { kind: "field", name: "surname", static: false, private: false, access: { has: obj => "surname" in obj, get: obj => obj.surname, set: (obj, value) => { obj.surname = value; } }, metadata: _metadata }, _surname_initializers, _surname_extraInitializers);
        __esDecorate(null, null, _seniority_decorators, { kind: "field", name: "seniority", static: false, private: false, access: { has: obj => "seniority" in obj, get: obj => obj.seniority, set: (obj, value) => { obj.seniority = value; } }, metadata: _metadata }, _seniority_initializers, _seniority_extraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: obj => "category" in obj, get: obj => obj.category, set: (obj, value) => { obj.category = value; } }, metadata: _metadata }, _category_initializers, _category_extraInitializers);
        __esDecorate(null, null, _specializedBrand_decorators, { kind: "field", name: "specializedBrand", static: false, private: false, access: { has: obj => "specializedBrand" in obj, get: obj => obj.specializedBrand, set: (obj, value) => { obj.specializedBrand = value; } }, metadata: _metadata }, _specializedBrand_initializers, _specializedBrand_extraInitializers);
        __esDecorate(null, null, _trips_decorators, { kind: "field", name: "trips", static: false, private: false, access: { has: obj => "trips" in obj, get: obj => obj.trips, set: (obj, value) => { obj.trips = value; } }, metadata: _metadata }, _trips_initializers, _trips_extraInitializers);
        __esDecorate(null, null, _repairs_decorators, { kind: "field", name: "repairs", static: false, private: false, access: { has: obj => "repairs" in obj, get: obj => obj.repairs, set: (obj, value) => { obj.repairs = value; } }, metadata: _metadata }, _repairs_initializers, _repairs_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Employee = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Employee = _classThis;
})();
exports.Employee = Employee;
