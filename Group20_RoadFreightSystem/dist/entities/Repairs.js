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
exports.Repairs = void 0;
const typeorm_1 = require("typeorm");
const Truck_1 = require("./Truck");
const Employee_1 = require("./Employee");
let Repairs = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _truck_decorators;
    let _truck_initializers = [];
    let _truck_extraInitializers = [];
    let _mechanic_decorators;
    let _mechanic_initializers = [];
    let _mechanic_extraInitializers = [];
    let _estimatedRepairTime_decorators;
    let _estimatedRepairTime_initializers = [];
    let _estimatedRepairTime_extraInitializers = [];
    var Repairs = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.truck = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _truck_initializers, void 0));
            this.mechanic = (__runInitializers(this, _truck_extraInitializers), __runInitializers(this, _mechanic_initializers, void 0));
            this.estimatedRepairTime = (__runInitializers(this, _mechanic_extraInitializers), __runInitializers(this, _estimatedRepairTime_initializers, void 0));
            __runInitializers(this, _estimatedRepairTime_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Repairs");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _truck_decorators = [(0, typeorm_1.ManyToOne)(() => Truck_1.Truck, (truck) => truck.repairs)];
        _mechanic_decorators = [(0, typeorm_1.ManyToOne)(() => Employee_1.Employee, (mechanic) => mechanic.repairs)];
        _estimatedRepairTime_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _truck_decorators, { kind: "field", name: "truck", static: false, private: false, access: { has: obj => "truck" in obj, get: obj => obj.truck, set: (obj, value) => { obj.truck = value; } }, metadata: _metadata }, _truck_initializers, _truck_extraInitializers);
        __esDecorate(null, null, _mechanic_decorators, { kind: "field", name: "mechanic", static: false, private: false, access: { has: obj => "mechanic" in obj, get: obj => obj.mechanic, set: (obj, value) => { obj.mechanic = value; } }, metadata: _metadata }, _mechanic_initializers, _mechanic_extraInitializers);
        __esDecorate(null, null, _estimatedRepairTime_decorators, { kind: "field", name: "estimatedRepairTime", static: false, private: false, access: { has: obj => "estimatedRepairTime" in obj, get: obj => obj.estimatedRepairTime, set: (obj, value) => { obj.estimatedRepairTime = value; } }, metadata: _metadata }, _estimatedRepairTime_initializers, _estimatedRepairTime_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Repairs = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Repairs = _classThis;
})();
exports.Repairs = Repairs;
