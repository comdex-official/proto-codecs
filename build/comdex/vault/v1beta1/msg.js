"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgWithdrawStableMintResponse = exports.MsgWithdrawStableMintRequest = exports.MsgDepositStableMintResponse = exports.MsgDepositStableMintRequest = exports.MsgCreateStableMintResponse = exports.MsgCreateStableMintRequest = exports.MsgCloseResponse = exports.MsgCloseRequest = exports.MsgRepayResponse = exports.MsgRepayRequest = exports.MsgDrawResponse = exports.MsgDrawRequest = exports.MsgWithdrawResponse = exports.MsgWithdrawRequest = exports.MsgDepositResponse = exports.MsgDepositRequest = exports.MsgCreateResponse = exports.MsgCreateRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseMsgCreateRequest() {
    return {
        from: "",
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amountIn: "",
        amountOut: "",
    };
}
exports.MsgCreateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateRequest();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
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
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
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
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultid: "",
        amount: "",
    };
}
exports.MsgDepositRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.userVaultid !== "") {
            writer.uint32(34).string(message.userVaultid);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultid = reader.string();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultid: isSet(object.userVaultid) ? String(object.userVaultid) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultid !== undefined &&
            (obj.userVaultid = message.userVaultid);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDepositRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultid = (_b = object.userVaultid) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultid: "",
        amount: "",
    };
}
exports.MsgWithdrawRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.userVaultid !== "") {
            writer.uint32(34).string(message.userVaultid);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultid = reader.string();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultid: isSet(object.userVaultid) ? String(object.userVaultid) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultid !== undefined &&
            (obj.userVaultid = message.userVaultid);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgWithdrawRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultid = (_b = object.userVaultid) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgWithdrawResponse() {
    return {};
}
exports.MsgWithdrawResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultid: "",
        amount: "",
    };
}
exports.MsgDrawRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.userVaultid !== "") {
            writer.uint32(34).string(message.userVaultid);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultid = reader.string();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultid: isSet(object.userVaultid) ? String(object.userVaultid) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultid !== undefined &&
            (obj.userVaultid = message.userVaultid);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDrawRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultid = (_b = object.userVaultid) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgDrawResponse() {
    return {};
}
exports.MsgDrawResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultid: "",
        amount: "",
    };
}
exports.MsgRepayRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.userVaultid !== "") {
            writer.uint32(34).string(message.userVaultid);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultid = reader.string();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultid: isSet(object.userVaultid) ? String(object.userVaultid) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultid !== undefined &&
            (obj.userVaultid = message.userVaultid);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgRepayRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultid = (_b = object.userVaultid) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgRepayResponse() {
    return {};
}
exports.MsgRepayResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        userVaultid: "",
    };
}
exports.MsgCloseRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.userVaultid !== "") {
            writer.uint32(34).string(message.userVaultid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.userVaultid = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            userVaultid: isSet(object.userVaultid) ? String(object.userVaultid) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.userVaultid !== undefined &&
            (obj.userVaultid = message.userVaultid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCloseRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.userVaultid = (_b = object.userVaultid) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgCloseResponse() {
    return {};
}
exports.MsgCloseResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
function createBaseMsgCreateStableMintRequest() {
    return {
        from: "",
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amount: "",
    };
}
exports.MsgCreateStableMintRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableMintRequest();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateStableMintRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
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
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amount: "",
        stableVaultid: "",
    };
}
exports.MsgDepositStableMintRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.stableVaultid !== "") {
            writer.uint32(42).string(message.stableVaultid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositStableMintRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.stableVaultid = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
            stableVaultid: isSet(object.stableVaultid)
                ? String(object.stableVaultid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        message.stableVaultid !== undefined &&
            (obj.stableVaultid = message.stableVaultid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgDepositStableMintRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.stableVaultid = (_c = object.stableVaultid) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgDepositStableMintResponse() {
    return {};
}
exports.MsgDepositStableMintResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        appMappingId: long_1.default.UZERO,
        extendedPairVaultId: long_1.default.UZERO,
        amount: "",
        stableVaultid: "",
    };
}
exports.MsgWithdrawStableMintRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairVaultId);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.stableVaultid !== "") {
            writer.uint32(42).string(message.stableVaultid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawStableMintRequest();
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
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.stableVaultid = reader.string();
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
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromString(object.extendedPairVaultId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? String(object.amount) : "",
            stableVaultid: isSet(object.stableVaultid)
                ? String(object.stableVaultid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount);
        message.stableVaultid !== undefined &&
            (obj.stableVaultid = message.stableVaultid);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgWithdrawStableMintRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.stableVaultid = (_c = object.stableVaultid) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgWithdrawStableMintResponse() {
    return {};
}
exports.MsgWithdrawStableMintResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgCreate = this.MsgCreate.bind(this);
        this.MsgDeposit = this.MsgDeposit.bind(this);
        this.MsgWithdraw = this.MsgWithdraw.bind(this);
        this.MsgDraw = this.MsgDraw.bind(this);
        this.MsgRepay = this.MsgRepay.bind(this);
        this.MsgClose = this.MsgClose.bind(this);
        this.MsgCreateStableMint = this.MsgCreateStableMint.bind(this);
        this.MsgDepositStableMint = this.MsgDepositStableMint.bind(this);
        this.MsgWithdrawStableMint = this.MsgWithdrawStableMint.bind(this);
    }
    MsgCreate(request) {
        const data = exports.MsgCreateRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgCreate", data);
        return promise.then((data) => exports.MsgCreateResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDeposit(request) {
        const data = exports.MsgDepositRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDeposit", data);
        return promise.then((data) => exports.MsgDepositResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgWithdraw(request) {
        const data = exports.MsgWithdrawRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgWithdraw", data);
        return promise.then((data) => exports.MsgWithdrawResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDraw(request) {
        const data = exports.MsgDrawRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDraw", data);
        return promise.then((data) => exports.MsgDrawResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgRepay(request) {
        const data = exports.MsgRepayRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgRepay", data);
        return promise.then((data) => exports.MsgRepayResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgClose(request) {
        const data = exports.MsgCloseRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgClose", data);
        return promise.then((data) => exports.MsgCloseResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgCreateStableMint(request) {
        const data = exports.MsgCreateStableMintRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgCreateStableMint", data);
        return promise.then((data) => exports.MsgCreateStableMintResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgDepositStableMint(request) {
        const data = exports.MsgDepositStableMintRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgDepositStableMint", data);
        return promise.then((data) => exports.MsgDepositStableMintResponse.decode(new minimal_1.default.Reader(data)));
    }
    MsgWithdrawStableMint(request) {
        const data = exports.MsgWithdrawStableMintRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Msg", "MsgWithdrawStableMint", data);
        return promise.then((data) => exports.MsgWithdrawStableMintResponse.decode(new minimal_1.default.Reader(data)));
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
//# sourceMappingURL=msg.js.map