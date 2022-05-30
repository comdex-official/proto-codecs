"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgWithdrawAssetResponse = exports.MsgWithdrawAssetRequest = exports.MsgDepositAssetResponse = exports.MsgDepositAssetRequest = exports.MsgAddWhiteListedAssetResponse = exports.MsgAddWhiteListedAssetRequest = exports.MsgCreateLockerResponse = exports.MsgCreateLockerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.locker.v1beta1";
function createBaseMsgCreateLockerRequest() {
    return {
        depositor: "",
        amount: "",
        assetId: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
    };
}
exports.MsgCreateLockerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(32).uint64(message.appMappingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLockerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.assetId = reader.uint64();
                    break;
                case 4:
                    message.appMappingId = reader.uint64();
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
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.amount !== undefined && (obj.amount = message.amount);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateLockerRequest();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCreateLockerResponse() {
    return {};
}
exports.MsgCreateLockerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateLockerResponse();
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
        const message = createBaseMsgCreateLockerResponse();
        return message;
    },
};
function createBaseMsgAddWhiteListedAssetRequest() {
    return { from: "", appMappingId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.MsgAddWhiteListedAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddWhiteListedAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.appMappingId = reader.uint64();
                    break;
                case 3:
                    message.assetId = reader.uint64();
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
            from: isSet(object.from) ? String(object.from) : "",
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgAddWhiteListedAssetRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgAddWhiteListedAssetResponse() {
    return {};
}
exports.MsgAddWhiteListedAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddWhiteListedAssetResponse();
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
        const message = createBaseMsgAddWhiteListedAssetResponse();
        return message;
    },
};
function createBaseMsgDepositAssetRequest() {
    return {
        depositor: "",
        lockerId: "",
        amount: "",
        assetId: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
    };
}
exports.MsgDepositAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (message.lockerId !== "") {
            writer.uint32(18).string(message.lockerId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(32).uint64(message.assetId);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(40).uint64(message.appMappingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.lockerId = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.assetId = reader.uint64();
                    break;
                case 5:
                    message.appMappingId = reader.uint64();
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
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            lockerId: isSet(object.lockerId) ? String(object.lockerId) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.lockerId !== undefined && (obj.lockerId = message.lockerId);
        message.amount !== undefined && (obj.amount = message.amount);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDepositAssetRequest();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.lockerId = (_b = object.lockerId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgDepositAssetResponse() {
    return {};
}
exports.MsgDepositAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAssetResponse();
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
        const message = createBaseMsgDepositAssetResponse();
        return message;
    },
};
function createBaseMsgWithdrawAssetRequest() {
    return {
        depositor: "",
        lockerId: "",
        amount: "",
        assetId: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
    };
}
exports.MsgWithdrawAssetRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (message.lockerId !== "") {
            writer.uint32(18).string(message.lockerId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(32).uint64(message.assetId);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(40).uint64(message.appMappingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.lockerId = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.assetId = reader.uint64();
                    break;
                case 5:
                    message.appMappingId = reader.uint64();
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
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            lockerId: isSet(object.lockerId) ? String(object.lockerId) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.lockerId !== undefined && (obj.lockerId = message.lockerId);
        message.amount !== undefined && (obj.amount = message.amount);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgWithdrawAssetRequest();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.lockerId = (_b = object.lockerId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgWithdrawAssetResponse() {
    return {};
}
exports.MsgWithdrawAssetResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAssetResponse();
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
        const message = createBaseMsgWithdrawAssetResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgAddWhiteListedAsset = this.MsgAddWhiteListedAsset.bind(this);
        this.MsgCreateLocker = this.MsgCreateLocker.bind(this);
        this.MsgDepositAsset = this.MsgDepositAsset.bind(this);
        this.MsgWithdrawAsset = this.MsgWithdrawAsset.bind(this);
    }
    MsgAddWhiteListedAsset(request) {
        const data = exports.MsgAddWhiteListedAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgAddWhiteListedAsset", data);
        return promise.then((data) => exports.MsgAddWhiteListedAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgCreateLocker(request) {
        const data = exports.MsgCreateLockerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgCreateLocker", data);
        return promise.then((data) => exports.MsgCreateLockerResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDepositAsset(request) {
        const data = exports.MsgDepositAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgDepositAsset", data);
        return promise.then((data) => exports.MsgDepositAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgWithdrawAsset(request) {
        const data = exports.MsgWithdrawAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgWithdrawAsset", data);
        return promise.then((data) => exports.MsgWithdrawAssetResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map