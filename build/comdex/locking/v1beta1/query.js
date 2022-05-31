"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllUnlockingsResponse = exports.QueryAllUnlockingsRequest = exports.QueryUnlockingsByOwnerResponse = exports.QueryUnlockingsByOwnerRequest = exports.QueryUnlockingByIdResponse = exports.QueryUnlockingByIdRequest = exports.QueryAllLocksResponse = exports.QueryAllLocksRequest = exports.QueryLocksByOwnerResponse = exports.QueryLocksByOwnerRequest = exports.QueryLockByIdResponse = exports.QueryLockByIdRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
const lock_1 = require("./lock");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "comdex.locking.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryLockByIdRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryLockByIdRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockByIdRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockByIdResponse() {
    return { lock: undefined };
}
exports.QueryLockByIdResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lock !== undefined) {
            lock_1.Lock.encode(message.lock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock = lock_1.Lock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            lock: isSet(object.lock) ? lock_1.Lock.fromJSON(object.lock) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock !== undefined &&
            (obj.lock = message.lock ? lock_1.Lock.toJSON(message.lock) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockByIdResponse();
        message.lock =
            object.lock !== undefined && object.lock !== null
                ? lock_1.Lock.fromPartial(object.lock)
                : undefined;
        return message;
    },
};
function createBaseQueryLocksByOwnerRequest() {
    return { owner: "" };
}
exports.QueryLocksByOwnerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLocksByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLocksByOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryLocksByOwnerResponse() {
    return { locks: [] };
}
exports.QueryLocksByOwnerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.locks) {
            lock_1.Lock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLocksByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.Lock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks)
                ? object.locks.map((e) => lock_1.Lock.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.Lock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLocksByOwnerResponse();
        message.locks = ((_a = object.locks) === null || _a === void 0 ? void 0 : _a.map((e) => lock_1.Lock.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAllLocksRequest() {
    return { pagination: undefined };
}
exports.QueryAllLocksRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLocksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllLocksRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllLocksResponse() {
    return { locks: [], pagination: undefined };
}
exports.QueryAllLocksResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.locks) {
            lock_1.Lock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllLocksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.Lock.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            locks: Array.isArray(object === null || object === void 0 ? void 0 : object.locks)
                ? object.locks.map((e) => lock_1.Lock.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map((e) => (e ? lock_1.Lock.toJSON(e) : undefined));
        }
        else {
            obj.locks = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllLocksResponse();
        message.locks = ((_a = object.locks) === null || _a === void 0 ? void 0 : _a.map((e) => lock_1.Lock.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryUnlockingByIdRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryUnlockingByIdRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnlockingByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnlockingByIdRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryUnlockingByIdResponse() {
    return { unlocking: undefined };
}
exports.QueryUnlockingByIdResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.unlocking !== undefined) {
            lock_1.Unlocking.encode(message.unlocking, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnlockingByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocking = lock_1.Unlocking.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            unlocking: isSet(object.unlocking)
                ? lock_1.Unlocking.fromJSON(object.unlocking)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.unlocking !== undefined &&
            (obj.unlocking = message.unlocking
                ? lock_1.Unlocking.toJSON(message.unlocking)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnlockingByIdResponse();
        message.unlocking =
            object.unlocking !== undefined && object.unlocking !== null
                ? lock_1.Unlocking.fromPartial(object.unlocking)
                : undefined;
        return message;
    },
};
function createBaseQueryUnlockingsByOwnerRequest() {
    return { owner: "" };
}
exports.QueryUnlockingsByOwnerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnlockingsByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUnlockingsByOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryUnlockingsByOwnerResponse() {
    return { unlockings: [] };
}
exports.QueryUnlockingsByOwnerResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.unlockings) {
            lock_1.Unlocking.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnlockingsByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlockings.push(lock_1.Unlocking.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            unlockings: Array.isArray(object === null || object === void 0 ? void 0 : object.unlockings)
                ? object.unlockings.map((e) => lock_1.Unlocking.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unlockings) {
            obj.unlockings = message.unlockings.map((e) => e ? lock_1.Unlocking.toJSON(e) : undefined);
        }
        else {
            obj.unlockings = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUnlockingsByOwnerResponse();
        message.unlockings =
            ((_a = object.unlockings) === null || _a === void 0 ? void 0 : _a.map((e) => lock_1.Unlocking.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryAllUnlockingsRequest() {
    return { pagination: undefined };
}
exports.QueryAllUnlockingsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUnlockingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllUnlockingsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllUnlockingsResponse() {
    return { unlockings: [], pagination: undefined };
}
exports.QueryAllUnlockingsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.unlockings) {
            lock_1.Unlocking.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllUnlockingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlockings.push(lock_1.Unlocking.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            unlockings: Array.isArray(object === null || object === void 0 ? void 0 : object.unlockings)
                ? object.unlockings.map((e) => lock_1.Unlocking.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unlockings) {
            obj.unlockings = message.unlockings.map((e) => e ? lock_1.Unlocking.toJSON(e) : undefined);
        }
        else {
            obj.unlockings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllUnlockingsResponse();
        message.unlockings =
            ((_a = object.unlockings) === null || _a === void 0 ? void 0 : _a.map((e) => lock_1.Unlocking.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.QueryLockByID = this.QueryLockByID.bind(this);
        this.QueryLocksByOwner = this.QueryLocksByOwner.bind(this);
        this.QueryAllLocks = this.QueryAllLocks.bind(this);
        this.QueryUnlockingByID = this.QueryUnlockingByID.bind(this);
        this.QueryUnlockingsByOwner = this.QueryUnlockingsByOwner.bind(this);
        this.QueryAllUnlockings = this.QueryAllUnlockings.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryLockByID(request) {
        const data = exports.QueryLockByIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "QueryLockByID", data);
        return promise.then((data) => exports.QueryLockByIdResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryLocksByOwner(request) {
        const data = exports.QueryLocksByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "QueryLocksByOwner", data);
        return promise.then((data) => exports.QueryLocksByOwnerResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAllLocks(request) {
        const data = exports.QueryAllLocksRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "QueryAllLocks", data);
        return promise.then((data) => exports.QueryAllLocksResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryUnlockingByID(request) {
        const data = exports.QueryUnlockingByIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "QueryUnlockingByID", data);
        return promise.then((data) => exports.QueryUnlockingByIdResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryUnlockingsByOwner(request) {
        const data = exports.QueryUnlockingsByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "QueryUnlockingsByOwner", data);
        return promise.then((data) => exports.QueryUnlockingsByOwnerResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAllUnlockings(request) {
        const data = exports.QueryAllUnlockingsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Query", "QueryAllUnlockings", data);
        return promise.then((data) => exports.QueryAllUnlockingsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map