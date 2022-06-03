"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const liquidity_1 = require("./liquidity");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        lastPairId: long_1.default.UZERO,
        lastPoolId: long_1.default.UZERO,
        pairs: [],
        pools: [],
        depositRequests: [],
        withdrawRequests: [],
        orders: [],
    };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            liquidity_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (!message.lastPairId.isZero()) {
            writer.uint32(16).uint64(message.lastPairId);
        }
        if (!message.lastPoolId.isZero()) {
            writer.uint32(24).uint64(message.lastPoolId);
        }
        for (const v of message.pairs) {
            liquidity_1.Pair.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.pools) {
            liquidity_1.Pool.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.depositRequests) {
            liquidity_1.DepositRequest.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.withdrawRequests) {
            liquidity_1.WithdrawRequest.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.orders) {
            liquidity_1.Order.encode(v, writer.uint32(66).fork()).ldelim();
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
                    message.params = liquidity_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastPairId = reader.uint64();
                    break;
                case 3:
                    message.lastPoolId = reader.uint64();
                    break;
                case 4:
                    message.pairs.push(liquidity_1.Pair.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.pools.push(liquidity_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depositRequests.push(liquidity_1.DepositRequest.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.withdrawRequests.push(liquidity_1.WithdrawRequest.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.orders.push(liquidity_1.Order.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? liquidity_1.Params.fromJSON(object.params) : undefined,
            lastPairId: isSet(object.lastPairId)
                ? long_1.default.fromString(object.lastPairId)
                : long_1.default.UZERO,
            lastPoolId: isSet(object.lastPoolId)
                ? long_1.default.fromString(object.lastPoolId)
                : long_1.default.UZERO,
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs)
                ? object.pairs.map((e) => liquidity_1.Pair.fromJSON(e))
                : [],
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools)
                ? object.pools.map((e) => liquidity_1.Pool.fromJSON(e))
                : [],
            depositRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.depositRequests)
                ? object.depositRequests.map((e) => liquidity_1.DepositRequest.fromJSON(e))
                : [],
            withdrawRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.withdrawRequests)
                ? object.withdrawRequests.map((e) => liquidity_1.WithdrawRequest.fromJSON(e))
                : [],
            orders: Array.isArray(object === null || object === void 0 ? void 0 : object.orders)
                ? object.orders.map((e) => liquidity_1.Order.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? liquidity_1.Params.toJSON(message.params) : undefined);
        message.lastPairId !== undefined &&
            (obj.lastPairId = (message.lastPairId || long_1.default.UZERO).toString());
        message.lastPoolId !== undefined &&
            (obj.lastPoolId = (message.lastPoolId || long_1.default.UZERO).toString());
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => (e ? liquidity_1.Pair.toJSON(e) : undefined));
        }
        else {
            obj.pairs = [];
        }
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? liquidity_1.Pool.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        if (message.depositRequests) {
            obj.depositRequests = message.depositRequests.map((e) => e ? liquidity_1.DepositRequest.toJSON(e) : undefined);
        }
        else {
            obj.depositRequests = [];
        }
        if (message.withdrawRequests) {
            obj.withdrawRequests = message.withdrawRequests.map((e) => e ? liquidity_1.WithdrawRequest.toJSON(e) : undefined);
        }
        else {
            obj.withdrawRequests = [];
        }
        if (message.orders) {
            obj.orders = message.orders.map((e) => (e ? liquidity_1.Order.toJSON(e) : undefined));
        }
        else {
            obj.orders = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? liquidity_1.Params.fromPartial(object.params)
                : undefined;
        message.lastPairId =
            object.lastPairId !== undefined && object.lastPairId !== null
                ? long_1.default.fromValue(object.lastPairId)
                : long_1.default.UZERO;
        message.lastPoolId =
            object.lastPoolId !== undefined && object.lastPoolId !== null
                ? long_1.default.fromValue(object.lastPoolId)
                : long_1.default.UZERO;
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map((e) => liquidity_1.Pair.fromPartial(e))) || [];
        message.pools = ((_b = object.pools) === null || _b === void 0 ? void 0 : _b.map((e) => liquidity_1.Pool.fromPartial(e))) || [];
        message.depositRequests =
            ((_c = object.depositRequests) === null || _c === void 0 ? void 0 : _c.map((e) => liquidity_1.DepositRequest.fromPartial(e))) || [];
        message.withdrawRequests =
            ((_d = object.withdrawRequests) === null || _d === void 0 ? void 0 : _d.map((e) => liquidity_1.WithdrawRequest.fromPartial(e))) || [];
        message.orders = ((_e = object.orders) === null || _e === void 0 ? void 0 : _e.map((e) => liquidity_1.Order.fromPartial(e))) || [];
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