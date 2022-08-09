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
exports.GenesisState = exports.AppGenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/liquidity/v1beta1/params");
const liquidity_1 = require("../../../comdex/liquidity/v1beta1/liquidity");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseAppGenesisState() {
    return {
        appId: long_1.default.UZERO,
        genericParams: undefined,
        lastPairId: long_1.default.UZERO,
        lastPoolId: long_1.default.UZERO,
        pairs: [],
        pools: [],
        depositRequests: [],
        withdrawRequests: [],
        orders: [],
        activeFarmers: [],
        queuedFarmers: [],
    };
}
exports.AppGenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.genericParams !== undefined) {
            params_1.GenericParams.encode(message.genericParams, writer.uint32(18).fork()).ldelim();
        }
        if (!message.lastPairId.isZero()) {
            writer.uint32(24).uint64(message.lastPairId);
        }
        if (!message.lastPoolId.isZero()) {
            writer.uint32(32).uint64(message.lastPoolId);
        }
        for (const v of message.pairs) {
            liquidity_1.Pair.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.pools) {
            liquidity_1.Pool.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.depositRequests) {
            liquidity_1.DepositRequest.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.withdrawRequests) {
            liquidity_1.WithdrawRequest.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.orders) {
            liquidity_1.Order.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.activeFarmers) {
            liquidity_1.ActiveFarmer.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.queuedFarmers) {
            liquidity_1.QueuedFarmer.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.genericParams = params_1.GenericParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastPairId = reader.uint64();
                    break;
                case 4:
                    message.lastPoolId = reader.uint64();
                    break;
                case 5:
                    message.pairs.push(liquidity_1.Pair.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.pools.push(liquidity_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.depositRequests.push(liquidity_1.DepositRequest.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.withdrawRequests.push(liquidity_1.WithdrawRequest.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.orders.push(liquidity_1.Order.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.activeFarmers.push(liquidity_1.ActiveFarmer.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.queuedFarmers.push(liquidity_1.QueuedFarmer.decode(reader, reader.uint32()));
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
            genericParams: isSet(object.genericParams)
                ? params_1.GenericParams.fromJSON(object.genericParams)
                : undefined,
            lastPairId: isSet(object.lastPairId)
                ? long_1.default.fromValue(object.lastPairId)
                : long_1.default.UZERO,
            lastPoolId: isSet(object.lastPoolId)
                ? long_1.default.fromValue(object.lastPoolId)
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
            activeFarmers: Array.isArray(object === null || object === void 0 ? void 0 : object.activeFarmers)
                ? object.activeFarmers.map((e) => liquidity_1.ActiveFarmer.fromJSON(e))
                : [],
            queuedFarmers: Array.isArray(object === null || object === void 0 ? void 0 : object.queuedFarmers)
                ? object.queuedFarmers.map((e) => liquidity_1.QueuedFarmer.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.genericParams !== undefined &&
            (obj.genericParams = message.genericParams
                ? params_1.GenericParams.toJSON(message.genericParams)
                : undefined);
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
        if (message.activeFarmers) {
            obj.activeFarmers = message.activeFarmers.map((e) => e ? liquidity_1.ActiveFarmer.toJSON(e) : undefined);
        }
        else {
            obj.activeFarmers = [];
        }
        if (message.queuedFarmers) {
            obj.queuedFarmers = message.queuedFarmers.map((e) => e ? liquidity_1.QueuedFarmer.toJSON(e) : undefined);
        }
        else {
            obj.queuedFarmers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAppGenesisState();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.genericParams =
            object.genericParams !== undefined && object.genericParams !== null
                ? params_1.GenericParams.fromPartial(object.genericParams)
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
        message.activeFarmers =
            ((_f = object.activeFarmers) === null || _f === void 0 ? void 0 : _f.map((e) => liquidity_1.ActiveFarmer.fromPartial(e))) || [];
        message.queuedFarmers =
            ((_g = object.queuedFarmers) === null || _g === void 0 ? void 0 : _g.map((e) => liquidity_1.QueuedFarmer.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return { params: undefined, appGenesisState: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.appGenesisState) {
            exports.AppGenesisState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appGenesisState.push(exports.AppGenesisState.decode(reader, reader.uint32()));
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
            appGenesisState: Array.isArray(object === null || object === void 0 ? void 0 : object.appGenesisState)
                ? object.appGenesisState.map((e) => exports.AppGenesisState.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.appGenesisState) {
            obj.appGenesisState = message.appGenesisState.map((e) => e ? exports.AppGenesisState.toJSON(e) : undefined);
        }
        else {
            obj.appGenesisState = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.appGenesisState =
            ((_a = object.appGenesisState) === null || _a === void 0 ? void 0 : _a.map((e) => exports.AppGenesisState.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map