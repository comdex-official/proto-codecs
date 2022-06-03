"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
const fetch_price_1 = require("./fetch_price");
exports.protobufPackage = "comdex.bandoracle.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, portId: "", markets: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        for (const v of message.markets) {
            fetch_price_1.Market.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.markets.push(fetch_price_1.Market.decode(reader, reader.uint32()));
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets)
                ? object.markets.map((e) => fetch_price_1.Market.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? fetch_price_1.Market.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.markets = ((_b = object.markets) === null || _b === void 0 ? void 0 : _b.map((e) => fetch_price_1.Market.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map