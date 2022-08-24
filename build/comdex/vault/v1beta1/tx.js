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
exports.MsgClientImpl = exports.MsgVaultInterestCalcResponse = exports.MsgVaultInterestCalcRequest = exports.MsgWithdrawStableMintResponse = exports.MsgWithdrawStableMintRequest = exports.MsgDepositStableMintResponse = exports.MsgDepositStableMintRequest = exports.MsgCreateStableMintResponse = exports.MsgCreateStableMintRequest = exports.MsgDepositAndDrawResponse = exports.MsgDepositAndDrawRequest = exports.MsgCloseResponse = exports.MsgCloseRequest = exports.MsgRepayResponse = exports.MsgRepayRequest = exports.MsgDrawResponse = exports.MsgDrawRequest = exports.MsgWithdrawResponse = exports.MsgWithdrawRequest = exports.MsgDepositResponse = exports.MsgDepositRequest = exports.MsgCreateResponse = exports.MsgCreateRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseMsgCreateRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amountIn: "",
        amountOut: "",
    };
}
exports.MsgCreateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.amountIn !== "") {
            writer.uint32(34).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(42).string(message.amountOut);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.amountIn = reader.string();
                    break;
                case 5:
                    message.amountOut = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.amountIn = (_b = object.amountIn) !== null && _b !== void 0 ? _b : "";
        message.amountOut = (_c = object.amountOut) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateResponse() {
    return {};
}
exports.MsgCreateResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResponse();
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
        const message = createBaseMsgCreateResponse();
        return message;
    },
};
function createBaseMsgDepositRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(32).uint64(message.userVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultId = reader.uint64();
                    break;
                case 5:
                    message.amount = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDepositRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
        const message = createBaseMsgDepositResponse();
        return message;
    },
};
function createBaseMsgWithdrawRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgWithdrawRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(32).uint64(message.userVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultId = reader.uint64();
                    break;
                case 5:
                    message.amount = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgWithdrawResponse() {
    return {};
}
exports.MsgWithdrawResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawResponse();
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
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
};
function createBaseMsgDrawRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgDrawRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(32).uint64(message.userVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultId = reader.uint64();
                    break;
                case 5:
                    message.amount = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDrawRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgDrawResponse() {
    return {};
}
exports.MsgDrawResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawResponse();
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
        const message = createBaseMsgDrawResponse();
        return message;
    },
};
function createBaseMsgRepayRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgRepayRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(32).uint64(message.userVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultId = reader.uint64();
                    break;
                case 5:
                    message.amount = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRepayRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRepayResponse() {
    return {};
}
exports.MsgRepayResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayResponse();
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
        const message = createBaseMsgRepayResponse();
        return message;
    },
};
function createBaseMsgCloseRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultId: long_1.default.UZERO,
    };
}
exports.MsgCloseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(32).uint64(message.userVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultId = reader.uint64();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCloseRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCloseResponse() {
    return {};
}
exports.MsgCloseResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseResponse();
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
        const message = createBaseMsgCloseResponse();
        return message;
    },
};
function createBaseMsgDepositAndDrawRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgDepositAndDrawRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(32).uint64(message.userVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAndDrawRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultId = reader.uint64();
                    break;
                case 5:
                    message.amount = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDepositAndDrawRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgDepositAndDrawResponse() {
    return {};
}
exports.MsgDepositAndDrawResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAndDrawResponse();
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
        const message = createBaseMsgDepositAndDrawResponse();
        return message;
    },
};
function createBaseMsgCreateStableMintRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgCreateStableMintRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableMintRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.amount = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateStableMintRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgCreateStableMintResponse() {
    return {};
}
exports.MsgCreateStableMintResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableMintResponse();
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
        const message = createBaseMsgCreateStableMintResponse();
        return message;
    },
};
function createBaseMsgDepositStableMintRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amount: "",
        stableVaultId: long_1.default.UZERO,
    };
}
exports.MsgDepositStableMintRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (!message.stableVaultId.isZero()) {
            writer.uint32(40).uint64(message.stableVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositStableMintRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.stableVaultId = reader.uint64();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
            stableVaultId: isSet(object.stableVaultId)
                ? long_1.default.fromValue(object.stableVaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        message.stableVaultId !== undefined &&
            (obj.stableVaultId = (message.stableVaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDepositStableMintRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.stableVaultId =
            object.stableVaultId !== undefined && object.stableVaultId !== null
                ? long_1.default.fromValue(object.stableVaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgDepositStableMintResponse() {
    return {};
}
exports.MsgDepositStableMintResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositStableMintResponse();
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
        const message = createBaseMsgDepositStableMintResponse();
        return message;
    },
};
function createBaseMsgWithdrawStableMintRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amount: "",
        stableVaultId: long_1.default.UZERO,
    };
}
exports.MsgWithdrawStableMintRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (!message.stableVaultId.isZero()) {
            writer.uint32(40).uint64(message.stableVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawStableMintRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.stableVaultId = reader.uint64();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
            stableVaultId: isSet(object.stableVaultId)
                ? long_1.default.fromValue(object.stableVaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        message.stableVaultId !== undefined &&
            (obj.stableVaultId = (message.stableVaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgWithdrawStableMintRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.stableVaultId =
            object.stableVaultId !== undefined && object.stableVaultId !== null
                ? long_1.default.fromValue(object.stableVaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgWithdrawStableMintResponse() {
    return {};
}
exports.MsgWithdrawStableMintResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawStableMintResponse();
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
        const message = createBaseMsgWithdrawStableMintResponse();
        return message;
    },
};
function createBaseMsgVaultInterestCalcRequest() {
    return { from: "", appId: long_1.default.UZERO, userVaultId: long_1.default.UZERO };
}
exports.MsgVaultInterestCalcRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.userVaultId.isZero()) {
            writer.uint32(24).uint64(message.userVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVaultInterestCalcRequest();
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
                    message.userVaultId = reader.uint64();
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
            userVaultId: isSet(object.userVaultId)
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.userVaultId !== undefined &&
            (obj.userVaultId = (message.userVaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgVaultInterestCalcRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.userVaultId =
            object.userVaultId !== undefined && object.userVaultId !== null
                ? long_1.default.fromValue(object.userVaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgVaultInterestCalcResponse() {
    return {};
}
exports.MsgVaultInterestCalcResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVaultInterestCalcResponse();
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
        const message = createBaseMsgVaultInterestCalcResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgCreate = this.MsgCreate.bind(this);
        this.MsgDeposit = this.MsgDeposit.bind(this);
        this.MsgWithdraw = this.MsgWithdraw.bind(this);
        this.MsgDraw = this.MsgDraw.bind(this);
        this.MsgRepay = this.MsgRepay.bind(this);
        this.MsgClose = this.MsgClose.bind(this);
        this.MsgDepositAndDraw = this.MsgDepositAndDraw.bind(this);
        this.MsgCreateStableMint = this.MsgCreateStableMint.bind(this);
        this.MsgDepositStableMint = this.MsgDepositStableMint.bind(this);
        this.MsgWithdrawStableMint = this.MsgWithdrawStableMint.bind(this);
        this.MsgVaultInterestCalc = this.MsgVaultInterestCalc.bind(this);
    }
    MsgCreate(request) {
        const data = exports.MsgCreateRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgCreate", data);
        return promise.then((data) => exports.MsgCreateResponse.decode(new _m0.Reader(data)));
    }
    MsgDeposit(request) {
        const data = exports.MsgDepositRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDeposit", data);
        return promise.then((data) => exports.MsgDepositResponse.decode(new _m0.Reader(data)));
    }
    MsgWithdraw(request) {
        const data = exports.MsgWithdrawRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgWithdraw", data);
        return promise.then((data) => exports.MsgWithdrawResponse.decode(new _m0.Reader(data)));
    }
    MsgDraw(request) {
        const data = exports.MsgDrawRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDraw", data);
        return promise.then((data) => exports.MsgDrawResponse.decode(new _m0.Reader(data)));
    }
    MsgRepay(request) {
        const data = exports.MsgRepayRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgRepay", data);
        return promise.then((data) => exports.MsgRepayResponse.decode(new _m0.Reader(data)));
    }
    MsgClose(request) {
        const data = exports.MsgCloseRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgClose", data);
        return promise.then((data) => exports.MsgCloseResponse.decode(new _m0.Reader(data)));
    }
    MsgDepositAndDraw(request) {
        const data = exports.MsgDepositAndDrawRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDepositAndDraw", data);
        return promise.then((data) => exports.MsgDepositAndDrawResponse.decode(new _m0.Reader(data)));
    }
    MsgCreateStableMint(request) {
        const data = exports.MsgCreateStableMintRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgCreateStableMint", data);
        return promise.then((data) => exports.MsgCreateStableMintResponse.decode(new _m0.Reader(data)));
    }
    MsgDepositStableMint(request) {
        const data = exports.MsgDepositStableMintRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDepositStableMint", data);
        return promise.then((data) => exports.MsgDepositStableMintResponse.decode(new _m0.Reader(data)));
    }
    MsgWithdrawStableMint(request) {
        const data = exports.MsgWithdrawStableMintRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgWithdrawStableMint", data);
        return promise.then((data) => exports.MsgWithdrawStableMintResponse.decode(new _m0.Reader(data)));
    }
    MsgVaultInterestCalc(request) {
        const data = exports.MsgVaultInterestCalcRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgVaultInterestCalc", data);
        return promise.then((data) => exports.MsgVaultInterestCalcResponse.decode(new _m0.Reader(data)));
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