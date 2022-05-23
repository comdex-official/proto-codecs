"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const market_1 = require("./market");
exports.protobufPackage = "comdex.market.v1beta1";
function createBaseGenesisState() {
    return { markets: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.markets) {
            market_1.Market.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.markets.push(market_1.Market.decode(reader, reader.uint32()));
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
            markets: Array.isArray(object === null || object === void 0 ? void 0 : object.markets)
                ? object.markets.map((e) => market_1.Market.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => e ? market_1.Market.toJSON(e) : undefined);
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.markets = ((_a = object.markets) === null || _a === void 0 ? void 0 : _a.map((e) => market_1.Market.fromPartial(e))) || [];
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=genesis.js.map