"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = exports.FetchPriceResult = exports.FetchPriceCallData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.bandoracle.v1beta1";
function createBaseFetchPriceCallData() {
    return { symbols: [], multiplier: long_1.default.UZERO };
}
exports.FetchPriceCallData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.symbols) {
            writer.uint32(10).string(v);
        }
        if (!message.multiplier.isZero()) {
            writer.uint32(16).uint64(message.multiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFetchPriceCallData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbols.push(reader.string());
                    break;
                case 2:
                    message.multiplier = reader.uint64();
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
            symbols: Array.isArray(object === null || object === void 0 ? void 0 : object.symbols)
                ? object.symbols.map((e) => String(e))
                : [],
            multiplier: isSet(object.multiplier)
                ? long_1.default.fromString(object.multiplier)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.symbols) {
            obj.symbols = message.symbols.map((e) => e);
        }
        else {
            obj.symbols = [];
        }
        message.multiplier !== undefined &&
            (obj.multiplier = (message.multiplier || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFetchPriceCallData();
        message.symbols = ((_a = object.symbols) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.multiplier =
            object.multiplier !== undefined && object.multiplier !== null
                ? long_1.default.fromValue(object.multiplier)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseFetchPriceResult() {
    return { rates: [] };
}
exports.FetchPriceResult = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.rates) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFetchPriceResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.rates.push(reader.uint64());
                        }
                    }
                    else {
                        message.rates.push(reader.uint64());
                    }
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
            rates: Array.isArray(object === null || object === void 0 ? void 0 : object.rates)
                ? object.rates.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rates) {
            obj.rates = message.rates.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.rates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFetchPriceResult();
        message.rates = ((_a = object.rates) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseMarket() {
    return { symbol: "", scriptId: long_1.default.UZERO };
}
exports.Market = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (!message.scriptId.isZero()) {
            writer.uint32(16).uint64(message.scriptId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.scriptId = reader.uint64();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            scriptId: isSet(object.scriptId)
                ? long_1.default.fromString(object.scriptId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.scriptId !== undefined &&
            (obj.scriptId = (message.scriptId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMarket();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        message.scriptId =
            object.scriptId !== undefined && object.scriptId !== null
                ? long_1.default.fromValue(object.scriptId)
                : long_1.default.UZERO;
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
//# sourceMappingURL=fetch_price.js.map