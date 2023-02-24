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
exports.CreateNewLiquidityPairProposal = exports.UpdateGenericParamsProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
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
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
function createBaseCreateNewLiquidityPairProposal() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        baseCoinDenom: "",
        quoteCoinDenom: "",
        title: "",
        description: "",
    };
}
exports.CreateNewLiquidityPairProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (message.baseCoinDenom !== "") {
            writer.uint32(26).string(message.baseCoinDenom);
        }
        if (message.quoteCoinDenom !== "") {
            writer.uint32(34).string(message.quoteCoinDenom);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateNewLiquidityPairProposal();
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
                    message.baseCoinDenom = reader.string();
                    break;
                case 4:
                    message.quoteCoinDenom = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
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
            from: isSet(object.from) ? String(object.from) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            baseCoinDenom: isSet(object.baseCoinDenom)
                ? String(object.baseCoinDenom)
                : "",
            quoteCoinDenom: isSet(object.quoteCoinDenom)
                ? String(object.quoteCoinDenom)
                : "",
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.baseCoinDenom !== undefined &&
            (obj.baseCoinDenom = message.baseCoinDenom);
        message.quoteCoinDenom !== undefined &&
            (obj.quoteCoinDenom = message.quoteCoinDenom);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCreateNewLiquidityPairProposal();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.baseCoinDenom = (_b = object.baseCoinDenom) !== null && _b !== void 0 ? _b : "";
        message.quoteCoinDenom = (_c = object.quoteCoinDenom) !== null && _c !== void 0 ? _c : "";
        message.title = (_d = object.title) !== null && _d !== void 0 ? _d : "";
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=gov.js.map