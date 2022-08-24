"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgLockerRewardCalcResponse = exports.MsgLockerRewardCalcRequest = exports.MsgCloseLockerResponse = exports.MsgCloseLockerRequest = exports.MsgWithdrawAssetResponse = exports.MsgWithdrawAssetRequest = exports.MsgDepositAssetResponse = exports.MsgDepositAssetRequest = exports.MsgAddWhiteListedAssetResponse = exports.MsgAddWhiteListedAssetRequest = exports.MsgCreateLockerResponse = exports.MsgCreateLockerRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.locker.v1beta1";
function createBaseMsgCreateLockerRequest() {
    return { depositor: "", amount: "", assetId: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.MsgCreateLockerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.appId = reader.uint64();
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
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.amount !== undefined && (obj.amount = message.amount);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
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
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCreateLockerResponse() {
    return {};
}
exports.MsgCreateLockerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return { from: "", appId: long_1.default.UZERO, assetId: long_1.default.UZERO };
}
exports.MsgAddWhiteListedAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddWhiteListedAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgAddWhiteListedAssetRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
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
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        lockerId: long_1.default.UZERO,
        amount: "",
        assetId: long_1.default.UZERO,
        appId: long_1.default.UZERO,
    };
}
exports.MsgDepositAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (!message.lockerId.isZero()) {
            writer.uint32(16).uint64(message.lockerId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(32).uint64(message.assetId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(40).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.lockerId = reader.uint64();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.assetId = reader.uint64();
                    break;
                case 5:
                    message.appId = reader.uint64();
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
            lockerId: isSet(object.lockerId)
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.lockerId !== undefined &&
            (obj.lockerId = (message.lockerId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDepositAssetRequest();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.lockerId =
            object.lockerId !== undefined && object.lockerId !== null
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgDepositAssetResponse() {
    return {};
}
exports.MsgDepositAssetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        lockerId: long_1.default.UZERO,
        amount: "",
        assetId: long_1.default.UZERO,
        appId: long_1.default.UZERO,
    };
}
exports.MsgWithdrawAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (!message.lockerId.isZero()) {
            writer.uint32(16).uint64(message.lockerId);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(32).uint64(message.assetId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(40).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.lockerId = reader.uint64();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.assetId = reader.uint64();
                    break;
                case 5:
                    message.appId = reader.uint64();
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
            lockerId: isSet(object.lockerId)
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.lockerId !== undefined &&
            (obj.lockerId = (message.lockerId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawAssetRequest();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.lockerId =
            object.lockerId !== undefined && object.lockerId !== null
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgWithdrawAssetResponse() {
    return {};
}
exports.MsgWithdrawAssetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function createBaseMsgCloseLockerRequest() {
    return {
        depositor: "",
        appId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        lockerId: long_1.default.UZERO,
    };
}
exports.MsgCloseLockerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(24).uint64(message.assetId);
        }
        if (!message.lockerId.isZero()) {
            writer.uint32(32).uint64(message.lockerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLockerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.assetId = reader.uint64();
                    break;
                case 4:
                    message.lockerId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            lockerId: isSet(object.lockerId)
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.lockerId !== undefined &&
            (obj.lockerId = (message.lockerId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCloseLockerRequest();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.lockerId =
            object.lockerId !== undefined && object.lockerId !== null
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCloseLockerResponse() {
    return {};
}
exports.MsgCloseLockerResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLockerResponse();
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
        const message = createBaseMsgCloseLockerResponse();
        return message;
    },
};
function createBaseMsgLockerRewardCalcRequest() {
    return { from: "", appId: long_1.default.UZERO, lockerId: long_1.default.UZERO };
}
exports.MsgLockerRewardCalcRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.lockerId.isZero()) {
            writer.uint32(24).uint64(message.lockerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockerRewardCalcRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.lockerId = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            lockerId: isSet(object.lockerId)
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.lockerId !== undefined &&
            (obj.lockerId = (message.lockerId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgLockerRewardCalcRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.lockerId =
            object.lockerId !== undefined && object.lockerId !== null
                ? long_1.default.fromValue(object.lockerId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgLockerRewardCalcResponse() {
    return {};
}
exports.MsgLockerRewardCalcResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockerRewardCalcResponse();
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
        const message = createBaseMsgLockerRewardCalcResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgCreateLocker = this.MsgCreateLocker.bind(this);
        this.MsgDepositAsset = this.MsgDepositAsset.bind(this);
        this.MsgWithdrawAsset = this.MsgWithdrawAsset.bind(this);
        this.MsgCloseLocker = this.MsgCloseLocker.bind(this);
        this.MsgLockerRewardCalc = this.MsgLockerRewardCalc.bind(this);
    }
    MsgCreateLocker(request) {
        const data = exports.MsgCreateLockerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgCreateLocker", data);
        return promise.then((data) => exports.MsgCreateLockerResponse.decode(new _m0.Reader(data)));
    }
    MsgDepositAsset(request) {
        const data = exports.MsgDepositAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgDepositAsset", data);
        return promise.then((data) => exports.MsgDepositAssetResponse.decode(new _m0.Reader(data)));
    }
    MsgWithdrawAsset(request) {
        const data = exports.MsgWithdrawAssetRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgWithdrawAsset", data);
        return promise.then((data) => exports.MsgWithdrawAssetResponse.decode(new _m0.Reader(data)));
    }
    MsgCloseLocker(request) {
        const data = exports.MsgCloseLockerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgCloseLocker", data);
        return promise.then((data) => exports.MsgCloseLockerResponse.decode(new _m0.Reader(data)));
    }
    MsgLockerRewardCalc(request) {
        const data = exports.MsgLockerRewardCalcRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.locker.v1beta1.Msg", "MsgLockerRewardCalc", data);
        return promise.then((data) => exports.MsgLockerRewardCalcResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map