"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgRemoveWhitelistAppIdResponse = exports.MsgWhitelistAppIdResponse = exports.RemoveWhitelistAppId = exports.WhitelistAppId = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.liquidation.v1beta1";
function createBaseWhitelistAppId() {
    return { appMappingId: long_1.default.UZERO, from: "" };
}
exports.WhitelistAppId = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistAppId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWhitelistAppId();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveWhitelistAppId() {
    return { appMappingId: long_1.default.UZERO, from: "" };
}
exports.RemoveWhitelistAppId = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveWhitelistAppId();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromString(object.appMappingId)
                : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveWhitelistAppId();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgWhitelistAppIdResponse() {
    return {};
}
exports.MsgWhitelistAppIdResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWhitelistAppIdResponse();
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
        const message = createBaseMsgWhitelistAppIdResponse();
        return message;
    },
};
function createBaseMsgRemoveWhitelistAppIdResponse() {
    return {};
}
exports.MsgRemoveWhitelistAppIdResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveWhitelistAppIdResponse();
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
        const message = createBaseMsgRemoveWhitelistAppIdResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.WhitelistApp = this.WhitelistApp.bind(this);
        this.RemoveWhitelistApp = this.RemoveWhitelistApp.bind(this);
    }
    WhitelistApp(request) {
        const data = exports.WhitelistAppId.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Msg", "WhitelistApp", data);
        return promise.then((data) => exports.MsgWhitelistAppIdResponse.decode(new minimal_1.default.Reader(data)));
    }
    RemoveWhitelistApp(request) {
        const data = exports.RemoveWhitelistAppId.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Msg", "RemoveWhitelistApp", data);
        return promise.then((data) => exports.MsgRemoveWhitelistAppIdResponse.decode(new minimal_1.default.Reader(data)));
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