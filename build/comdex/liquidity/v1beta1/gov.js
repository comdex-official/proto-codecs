"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGenericParamsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseUpdateGenericParamsProposal() {
    return {
        appId: long_1.default.UZERO,
        keys: [],
        values: [],
        title: "",
        description: "",
    };
}
exports.UpdateGenericParamsProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v);
        }
        for (const v of message.values) {
            writer.uint32(26).string(v);
        }
        if (message.title !== "") {
            writer.uint32(34).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateGenericParamsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.keys.push(reader.string());
                    break;
                case 3:
                    message.values.push(reader.string());
                    break;
                case 4:
                    message.title = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
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
            appId: isSet(object.appId) ? long_1.default.fromString(object.appId) : long_1.default.UZERO,
            keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys)
                ? object.keys.map((e) => String(e))
                : [],
            values: Array.isArray(object === null || object === void 0 ? void 0 : object.values)
                ? object.values.map((e) => String(e))
                : [],
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        if (message.keys) {
            obj.keys = message.keys.map((e) => e);
        }
        else {
            obj.keys = [];
        }
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateGenericParamsProposal();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.title = (_c = object.title) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=gov.js.map