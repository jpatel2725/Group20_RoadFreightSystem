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
exports.Customer = void 0;
const typeorm_1 = require("typeorm");
const Shipment_1 = require("./Shipment");
let Customer = (() => {
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
    let _address_decorators;
    let _address_initializers = [];
    let _address_extraInitializers = [];
    let _phone1_decorators;
    let _phone1_initializers = [];
    let _phone1_extraInitializers = [];
    let _phone2_decorators;
    let _phone2_initializers = [];
    let _phone2_extraInitializers = [];
    let _shipments_decorators;
    let _shipments_initializers = [];
    let _shipments_extraInitializers = [];
    var Customer = _classThis = class {
        constructor() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.address = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _address_initializers, void 0));
            this.phone1 = (__runInitializers(this, _address_extraInitializers), __runInitializers(this, _phone1_initializers, void 0));
            this.phone2 = (__runInitializers(this, _phone1_extraInitializers), __runInitializers(this, _phone2_initializers, void 0));
            this.shipments = (__runInitializers(this, _phone2_extraInitializers), __runInitializers(this, _shipments_initializers, void 0));
            __runInitializers(this, _shipments_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Customer");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _name_decorators = [(0, typeorm_1.Column)()];
        _address_decorators = [(0, typeorm_1.Column)()];
        _phone1_decorators = [(0, typeorm_1.Column)()];
        _phone2_decorators = [(0, typeorm_1.Column)({ nullable: true })];
        _shipments_decorators = [(0, typeorm_1.OneToMany)(() => Shipment_1.Shipment, (shipment) => shipment.customer)];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _address_decorators, { kind: "field", name: "address", static: false, private: false, access: { has: obj => "address" in obj, get: obj => obj.address, set: (obj, value) => { obj.address = value; } }, metadata: _metadata }, _address_initializers, _address_extraInitializers);
        __esDecorate(null, null, _phone1_decorators, { kind: "field", name: "phone1", static: false, private: false, access: { has: obj => "phone1" in obj, get: obj => obj.phone1, set: (obj, value) => { obj.phone1 = value; } }, metadata: _metadata }, _phone1_initializers, _phone1_extraInitializers);
        __esDecorate(null, null, _phone2_decorators, { kind: "field", name: "phone2", static: false, private: false, access: { has: obj => "phone2" in obj, get: obj => obj.phone2, set: (obj, value) => { obj.phone2 = value; } }, metadata: _metadata }, _phone2_initializers, _phone2_extraInitializers);
        __esDecorate(null, null, _shipments_decorators, { kind: "field", name: "shipments", static: false, private: false, access: { has: obj => "shipments" in obj, get: obj => obj.shipments, set: (obj, value) => { obj.shipments = value; } }, metadata: _metadata }, _shipments_initializers, _shipments_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Customer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Customer = _classThis;
})();
exports.Customer = Customer;
