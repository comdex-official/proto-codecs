"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.MsgClientImpl = exports.MsgUnfarmAndWithdrawResponse = exports.MsgUnfarmAndWithdraw = exports.MsgDepositAndFarmResponse = exports.MsgDepositAndFarm = exports.MsgUnfarmResponse = exports.MsgUnfarm = exports.MsgFarmResponse = exports.MsgFarm = exports.MsgCancelMMOrderResponse = exports.MsgCancelMMOrder = exports.MsgCancelAllOrdersResponse = exports.MsgCancelAllOrders = exports.MsgCancelOrderResponse = exports.MsgCancelOrder = exports.MsgMMOrderResponse = exports.MsgMMOrder = exports.MsgMarketOrderResponse = exports.MsgMarketOrder = exports.MsgLimitOrderResponse = exports.MsgLimitOrder = exports.MsgWithdrawResponse = exports.MsgWithdraw = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgCreateRangedPoolResponse = exports.MsgCreateRangedPool = exports.MsgCreatePoolResponse = exports.MsgCreatePool = exports.MsgCreatePairResponse = exports.MsgCreatePair = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const liquidity_1 = require("../../../comdex/liquidity/v1beta1/liquidity");
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseMsgCreatePair() {
    return { creator: "", baseCoinDenom: "", quoteCoinDenom: "", appId: long_1.default.UZERO };
}
exports.MsgCreatePair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.baseCoinDenom !== "") {
            writer.uint32(18).string(message.baseCoinDenom);
        }
        if (message.quoteCoinDenom !== "") {
            writer.uint32(26).string(message.quoteCoinDenom);
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.baseCoinDenom = reader.string();
                    break;
                case 3:
                    message.quoteCoinDenom = reader.string();
                    break;
                case 4:
                    message.appId = reader.uint64();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            baseCoinDenom: isSet(object.baseCoinDenom) ? String(object.baseCoinDenom) : "",
            quoteCoinDenom: isSet(object.quoteCoinDenom) ? String(object.quoteCoinDenom) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.baseCoinDenom !== undefined && (obj.baseCoinDenom = message.baseCoinDenom);
        message.quoteCoinDenom !== undefined && (obj.quoteCoinDenom = message.quoteCoinDenom);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgCreatePair.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreatePair();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.baseCoinDenom = (_b = object.baseCoinDenom) !== null && _b !== void 0 ? _b : "";
        message.quoteCoinDenom = (_c = object.quoteCoinDenom) !== null && _c !== void 0 ? _c : "";
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCreatePairResponse() {
    return {};
}
exports.MsgCreatePairResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePairResponse();
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
    create(base) {
        return exports.MsgCreatePairResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreatePairResponse();
        return message;
    },
};
function createBaseMsgCreatePool() {
    return { creator: "", pairId: long_1.default.UZERO, depositCoins: [], appId: long_1.default.UZERO };
}
exports.MsgCreatePool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.appId = reader.uint64();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            depositCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.depositCoins) ? object.depositCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgCreatePool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreatePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.depositCoins = ((_b = object.depositCoins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCreatePoolResponse() {
    return {};
}
exports.MsgCreatePoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePoolResponse();
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
    create(base) {
        return exports.MsgCreatePoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreatePoolResponse();
        return message;
    },
};
function createBaseMsgCreateRangedPool() {
    return {
        creator: "",
        appId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        depositCoins: [],
        minPrice: "",
        maxPrice: "",
        initialPrice: "",
    };
}
exports.MsgCreateRangedPool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.minPrice !== "") {
            writer.uint32(42).string(message.minPrice);
        }
        if (message.maxPrice !== "") {
            writer.uint32(50).string(message.maxPrice);
        }
        if (message.initialPrice !== "") {
            writer.uint32(58).string(message.initialPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateRangedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
                    break;
                case 4:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.minPrice = reader.string();
                    break;
                case 6:
                    message.maxPrice = reader.string();
                    break;
                case 7:
                    message.initialPrice = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            depositCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.depositCoins) ? object.depositCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            minPrice: isSet(object.minPrice) ? String(object.minPrice) : "",
            maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : "",
            initialPrice: isSet(object.initialPrice) ? String(object.initialPrice) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        message.minPrice !== undefined && (obj.minPrice = message.minPrice);
        message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
        message.initialPrice !== undefined && (obj.initialPrice = message.initialPrice);
        return obj;
    },
    create(base) {
        return exports.MsgCreateRangedPool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCreateRangedPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.depositCoins = ((_b = object.depositCoins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.minPrice = (_c = object.minPrice) !== null && _c !== void 0 ? _c : "";
        message.maxPrice = (_d = object.maxPrice) !== null && _d !== void 0 ? _d : "";
        message.initialPrice = (_e = object.initialPrice) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgCreateRangedPoolResponse() {
    return {};
}
exports.MsgCreateRangedPoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateRangedPoolResponse();
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
    create(base) {
        return exports.MsgCreateRangedPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateRangedPoolResponse();
        return message;
    },
};
function createBaseMsgDeposit() {
    return { depositor: "", poolId: long_1.default.UZERO, depositCoins: [], appId: long_1.default.UZERO };
}
exports.MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.appId = reader.uint64();
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
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            depositCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.depositCoins) ? object.depositCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgDeposit.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDeposit();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.depositCoins = ((_b = object.depositCoins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
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
    create(base) {
        return exports.MsgDepositResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
};
function createBaseMsgWithdraw() {
    return { withdrawer: "", poolId: long_1.default.UZERO, poolCoin: undefined, appId: long_1.default.UZERO };
}
exports.MsgWithdraw = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawer !== "") {
            writer.uint32(10).string(message.withdrawer);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.poolCoin !== undefined) {
            coin_1.Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawer = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.poolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.appId = reader.uint64();
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
            withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            poolCoin: isSet(object.poolCoin) ? coin_1.Coin.fromJSON(object.poolCoin) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.poolCoin !== undefined && (obj.poolCoin = message.poolCoin ? coin_1.Coin.toJSON(message.poolCoin) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgWithdraw.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdraw();
        message.withdrawer = (_a = object.withdrawer) !== null && _a !== void 0 ? _a : "";
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.poolCoin = (object.poolCoin !== undefined && object.poolCoin !== null)
            ? coin_1.Coin.fromPartial(object.poolCoin)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
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
    create(base) {
        return exports.MsgWithdrawResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawResponse();
        return message;
    },
};
function createBaseMsgLimitOrder() {
    return {
        orderer: "",
        pairId: long_1.default.UZERO,
        direction: 0,
        offerCoin: undefined,
        demandCoinDenom: "",
        price: "",
        amount: "",
        orderLifespan: undefined,
        appId: long_1.default.UZERO,
    };
}
exports.MsgLimitOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.direction !== 0) {
            writer.uint32(24).int32(message.direction);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.price !== "") {
            writer.uint32(50).string(message.price);
        }
        if (message.amount !== "") {
            writer.uint32(58).string(message.amount);
        }
        if (message.orderLifespan !== undefined) {
            duration_1.Duration.encode(message.orderLifespan, writer.uint32(66).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(72).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.direction = reader.int32();
                    break;
                case 4:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.price = reader.string();
                    break;
                case 7:
                    message.amount = reader.string();
                    break;
                case 8:
                    message.orderLifespan = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.appId = reader.uint64();
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            direction: isSet(object.direction) ? (0, liquidity_1.orderDirectionFromJSON)(object.direction) : 0,
            offerCoin: isSet(object.offerCoin) ? coin_1.Coin.fromJSON(object.offerCoin) : undefined,
            demandCoinDenom: isSet(object.demandCoinDenom) ? String(object.demandCoinDenom) : "",
            price: isSet(object.price) ? String(object.price) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            orderLifespan: isSet(object.orderLifespan) ? duration_1.Duration.fromJSON(object.orderLifespan) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.direction !== undefined && (obj.direction = (0, liquidity_1.orderDirectionToJSON)(message.direction));
        message.offerCoin !== undefined && (obj.offerCoin = message.offerCoin ? coin_1.Coin.toJSON(message.offerCoin) : undefined);
        message.demandCoinDenom !== undefined && (obj.demandCoinDenom = message.demandCoinDenom);
        message.price !== undefined && (obj.price = message.price);
        message.amount !== undefined && (obj.amount = message.amount);
        message.orderLifespan !== undefined &&
            (obj.orderLifespan = message.orderLifespan ? duration_1.Duration.toJSON(message.orderLifespan) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgLimitOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgLimitOrder();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.direction = (_b = object.direction) !== null && _b !== void 0 ? _b : 0;
        message.offerCoin = (object.offerCoin !== undefined && object.offerCoin !== null)
            ? coin_1.Coin.fromPartial(object.offerCoin)
            : undefined;
        message.demandCoinDenom = (_c = object.demandCoinDenom) !== null && _c !== void 0 ? _c : "";
        message.price = (_d = object.price) !== null && _d !== void 0 ? _d : "";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : "";
        message.orderLifespan = (object.orderLifespan !== undefined && object.orderLifespan !== null)
            ? duration_1.Duration.fromPartial(object.orderLifespan)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgLimitOrderResponse() {
    return {};
}
exports.MsgLimitOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLimitOrderResponse();
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
    create(base) {
        return exports.MsgLimitOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgLimitOrderResponse();
        return message;
    },
};
function createBaseMsgMarketOrder() {
    return {
        orderer: "",
        pairId: long_1.default.UZERO,
        direction: 0,
        offerCoin: undefined,
        demandCoinDenom: "",
        amount: "",
        orderLifespan: undefined,
        appId: long_1.default.UZERO,
    };
}
exports.MsgMarketOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.direction !== 0) {
            writer.uint32(24).int32(message.direction);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.amount !== "") {
            writer.uint32(50).string(message.amount);
        }
        if (message.orderLifespan !== undefined) {
            duration_1.Duration.encode(message.orderLifespan, writer.uint32(58).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMarketOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.direction = reader.int32();
                    break;
                case 4:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.amount = reader.string();
                    break;
                case 7:
                    message.orderLifespan = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.appId = reader.uint64();
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            direction: isSet(object.direction) ? (0, liquidity_1.orderDirectionFromJSON)(object.direction) : 0,
            offerCoin: isSet(object.offerCoin) ? coin_1.Coin.fromJSON(object.offerCoin) : undefined,
            demandCoinDenom: isSet(object.demandCoinDenom) ? String(object.demandCoinDenom) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            orderLifespan: isSet(object.orderLifespan) ? duration_1.Duration.fromJSON(object.orderLifespan) : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.direction !== undefined && (obj.direction = (0, liquidity_1.orderDirectionToJSON)(message.direction));
        message.offerCoin !== undefined && (obj.offerCoin = message.offerCoin ? coin_1.Coin.toJSON(message.offerCoin) : undefined);
        message.demandCoinDenom !== undefined && (obj.demandCoinDenom = message.demandCoinDenom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.orderLifespan !== undefined &&
            (obj.orderLifespan = message.orderLifespan ? duration_1.Duration.toJSON(message.orderLifespan) : undefined);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgMarketOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgMarketOrder();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.direction = (_b = object.direction) !== null && _b !== void 0 ? _b : 0;
        message.offerCoin = (object.offerCoin !== undefined && object.offerCoin !== null)
            ? coin_1.Coin.fromPartial(object.offerCoin)
            : undefined;
        message.demandCoinDenom = (_c = object.demandCoinDenom) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.orderLifespan = (object.orderLifespan !== undefined && object.orderLifespan !== null)
            ? duration_1.Duration.fromPartial(object.orderLifespan)
            : undefined;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgMarketOrderResponse() {
    return {};
}
exports.MsgMarketOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMarketOrderResponse();
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
    create(base) {
        return exports.MsgMarketOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgMarketOrderResponse();
        return message;
    },
};
function createBaseMsgMMOrder() {
    return {
        orderer: "",
        appId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        maxSellPrice: "",
        minSellPrice: "",
        sellAmount: "",
        maxBuyPrice: "",
        minBuyPrice: "",
        buyAmount: "",
        orderLifespan: undefined,
    };
}
exports.MsgMMOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        if (message.maxSellPrice !== "") {
            writer.uint32(34).string(message.maxSellPrice);
        }
        if (message.minSellPrice !== "") {
            writer.uint32(42).string(message.minSellPrice);
        }
        if (message.sellAmount !== "") {
            writer.uint32(50).string(message.sellAmount);
        }
        if (message.maxBuyPrice !== "") {
            writer.uint32(58).string(message.maxBuyPrice);
        }
        if (message.minBuyPrice !== "") {
            writer.uint32(66).string(message.minBuyPrice);
        }
        if (message.buyAmount !== "") {
            writer.uint32(74).string(message.buyAmount);
        }
        if (message.orderLifespan !== undefined) {
            duration_1.Duration.encode(message.orderLifespan, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMMOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
                    break;
                case 4:
                    message.maxSellPrice = reader.string();
                    break;
                case 5:
                    message.minSellPrice = reader.string();
                    break;
                case 6:
                    message.sellAmount = reader.string();
                    break;
                case 7:
                    message.maxBuyPrice = reader.string();
                    break;
                case 8:
                    message.minBuyPrice = reader.string();
                    break;
                case 9:
                    message.buyAmount = reader.string();
                    break;
                case 10:
                    message.orderLifespan = duration_1.Duration.decode(reader, reader.uint32());
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            maxSellPrice: isSet(object.maxSellPrice) ? String(object.maxSellPrice) : "",
            minSellPrice: isSet(object.minSellPrice) ? String(object.minSellPrice) : "",
            sellAmount: isSet(object.sellAmount) ? String(object.sellAmount) : "",
            maxBuyPrice: isSet(object.maxBuyPrice) ? String(object.maxBuyPrice) : "",
            minBuyPrice: isSet(object.minBuyPrice) ? String(object.minBuyPrice) : "",
            buyAmount: isSet(object.buyAmount) ? String(object.buyAmount) : "",
            orderLifespan: isSet(object.orderLifespan) ? duration_1.Duration.fromJSON(object.orderLifespan) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.maxSellPrice !== undefined && (obj.maxSellPrice = message.maxSellPrice);
        message.minSellPrice !== undefined && (obj.minSellPrice = message.minSellPrice);
        message.sellAmount !== undefined && (obj.sellAmount = message.sellAmount);
        message.maxBuyPrice !== undefined && (obj.maxBuyPrice = message.maxBuyPrice);
        message.minBuyPrice !== undefined && (obj.minBuyPrice = message.minBuyPrice);
        message.buyAmount !== undefined && (obj.buyAmount = message.buyAmount);
        message.orderLifespan !== undefined &&
            (obj.orderLifespan = message.orderLifespan ? duration_1.Duration.toJSON(message.orderLifespan) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgMMOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgMMOrder();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.maxSellPrice = (_b = object.maxSellPrice) !== null && _b !== void 0 ? _b : "";
        message.minSellPrice = (_c = object.minSellPrice) !== null && _c !== void 0 ? _c : "";
        message.sellAmount = (_d = object.sellAmount) !== null && _d !== void 0 ? _d : "";
        message.maxBuyPrice = (_e = object.maxBuyPrice) !== null && _e !== void 0 ? _e : "";
        message.minBuyPrice = (_f = object.minBuyPrice) !== null && _f !== void 0 ? _f : "";
        message.buyAmount = (_g = object.buyAmount) !== null && _g !== void 0 ? _g : "";
        message.orderLifespan = (object.orderLifespan !== undefined && object.orderLifespan !== null)
            ? duration_1.Duration.fromPartial(object.orderLifespan)
            : undefined;
        return message;
    },
};
function createBaseMsgMMOrderResponse() {
    return {};
}
exports.MsgMMOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMMOrderResponse();
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
    create(base) {
        return exports.MsgMMOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgMMOrderResponse();
        return message;
    },
};
function createBaseMsgCancelOrder() {
    return { orderer: "", pairId: long_1.default.UZERO, orderId: long_1.default.UZERO, appId: long_1.default.UZERO };
}
exports.MsgCancelOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (!message.orderId.isZero()) {
            writer.uint32(24).uint64(message.orderId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.orderId = reader.uint64();
                    break;
                case 4:
                    message.appId = reader.uint64();
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            orderId: isSet(object.orderId) ? long_1.default.fromValue(object.orderId) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.orderId !== undefined && (obj.orderId = (message.orderId || long_1.default.UZERO).toString());
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgCancelOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCancelOrder();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        message.orderId = (object.orderId !== undefined && object.orderId !== null)
            ? long_1.default.fromValue(object.orderId)
            : long_1.default.UZERO;
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCancelOrderResponse() {
    return {};
}
exports.MsgCancelOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelOrderResponse();
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
    create(base) {
        return exports.MsgCancelOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelOrderResponse();
        return message;
    },
};
function createBaseMsgCancelAllOrders() {
    return { orderer: "", pairIds: [], appId: long_1.default.UZERO };
}
exports.MsgCancelAllOrders = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        writer.uint32(18).fork();
        for (const v of message.pairIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (!message.appId.isZero()) {
            writer.uint32(24).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelAllOrders();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.pairIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.pairIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.appId = reader.uint64();
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            pairIds: Array.isArray(object === null || object === void 0 ? void 0 : object.pairIds) ? object.pairIds.map((e) => long_1.default.fromValue(e)) : [],
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        if (message.pairIds) {
            obj.pairIds = message.pairIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.pairIds = [];
        }
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgCancelAllOrders.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCancelAllOrders();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.pairIds = ((_b = object.pairIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCancelAllOrdersResponse() {
    return {};
}
exports.MsgCancelAllOrdersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelAllOrdersResponse();
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
    create(base) {
        return exports.MsgCancelAllOrdersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelAllOrdersResponse();
        return message;
    },
};
function createBaseMsgCancelMMOrder() {
    return { orderer: "", appId: long_1.default.UZERO, pairId: long_1.default.UZERO };
}
exports.MsgCancelMMOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orderer !== "") {
            writer.uint32(10).string(message.orderer);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelMMOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderer = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
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
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pairId !== undefined && (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgCancelMMOrder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCancelMMOrder();
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.pairId = (object.pairId !== undefined && object.pairId !== null)
            ? long_1.default.fromValue(object.pairId)
            : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgCancelMMOrderResponse() {
    return {};
}
exports.MsgCancelMMOrderResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelMMOrderResponse();
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
    create(base) {
        return exports.MsgCancelMMOrderResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCancelMMOrderResponse();
        return message;
    },
};
function createBaseMsgFarm() {
    return { appId: long_1.default.UZERO, poolId: long_1.default.UZERO, farmer: "", farmingPoolCoin: undefined };
}
exports.MsgFarm = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.farmer !== "") {
            writer.uint32(26).string(message.farmer);
        }
        if (message.farmingPoolCoin !== undefined) {
            coin_1.Coin.encode(message.farmingPoolCoin, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFarm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.farmer = reader.string();
                    break;
                case 4:
                    message.farmingPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            farmer: isSet(object.farmer) ? String(object.farmer) : "",
            farmingPoolCoin: isSet(object.farmingPoolCoin) ? coin_1.Coin.fromJSON(object.farmingPoolCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.farmer !== undefined && (obj.farmer = message.farmer);
        message.farmingPoolCoin !== undefined &&
            (obj.farmingPoolCoin = message.farmingPoolCoin ? coin_1.Coin.toJSON(message.farmingPoolCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgFarm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgFarm();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.farmer = (_a = object.farmer) !== null && _a !== void 0 ? _a : "";
        message.farmingPoolCoin = (object.farmingPoolCoin !== undefined && object.farmingPoolCoin !== null)
            ? coin_1.Coin.fromPartial(object.farmingPoolCoin)
            : undefined;
        return message;
    },
};
function createBaseMsgFarmResponse() {
    return {};
}
exports.MsgFarmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFarmResponse();
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
    create(base) {
        return exports.MsgFarmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgFarmResponse();
        return message;
    },
};
function createBaseMsgUnfarm() {
    return { appId: long_1.default.UZERO, poolId: long_1.default.UZERO, farmer: "", unfarmingPoolCoin: undefined };
}
exports.MsgUnfarm = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.farmer !== "") {
            writer.uint32(26).string(message.farmer);
        }
        if (message.unfarmingPoolCoin !== undefined) {
            coin_1.Coin.encode(message.unfarmingPoolCoin, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnfarm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.farmer = reader.string();
                    break;
                case 4:
                    message.unfarmingPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            farmer: isSet(object.farmer) ? String(object.farmer) : "",
            unfarmingPoolCoin: isSet(object.unfarmingPoolCoin) ? coin_1.Coin.fromJSON(object.unfarmingPoolCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.farmer !== undefined && (obj.farmer = message.farmer);
        message.unfarmingPoolCoin !== undefined &&
            (obj.unfarmingPoolCoin = message.unfarmingPoolCoin ? coin_1.Coin.toJSON(message.unfarmingPoolCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUnfarm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUnfarm();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.farmer = (_a = object.farmer) !== null && _a !== void 0 ? _a : "";
        message.unfarmingPoolCoin = (object.unfarmingPoolCoin !== undefined && object.unfarmingPoolCoin !== null)
            ? coin_1.Coin.fromPartial(object.unfarmingPoolCoin)
            : undefined;
        return message;
    },
};
function createBaseMsgUnfarmResponse() {
    return {};
}
exports.MsgUnfarmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnfarmResponse();
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
    create(base) {
        return exports.MsgUnfarmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnfarmResponse();
        return message;
    },
};
function createBaseMsgDepositAndFarm() {
    return { depositor: "", poolId: long_1.default.UZERO, depositCoins: [], appId: long_1.default.UZERO };
}
exports.MsgDepositAndFarm = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(32).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAndFarm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.appId = reader.uint64();
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
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            depositCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.depositCoins) ? object.depositCoins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    create(base) {
        return exports.MsgDepositAndFarm.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDepositAndFarm();
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.depositCoins = ((_b = object.depositCoins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgDepositAndFarmResponse() {
    return {};
}
exports.MsgDepositAndFarmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositAndFarmResponse();
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
    create(base) {
        return exports.MsgDepositAndFarmResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDepositAndFarmResponse();
        return message;
    },
};
function createBaseMsgUnfarmAndWithdraw() {
    return { appId: long_1.default.UZERO, poolId: long_1.default.UZERO, farmer: "", unfarmingPoolCoin: undefined };
}
exports.MsgUnfarmAndWithdraw = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.farmer !== "") {
            writer.uint32(26).string(message.farmer);
        }
        if (message.unfarmingPoolCoin !== undefined) {
            coin_1.Coin.encode(message.unfarmingPoolCoin, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnfarmAndWithdraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.farmer = reader.string();
                    break;
                case 4:
                    message.unfarmingPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            farmer: isSet(object.farmer) ? String(object.farmer) : "",
            unfarmingPoolCoin: isSet(object.unfarmingPoolCoin) ? coin_1.Coin.fromJSON(object.unfarmingPoolCoin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined && (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.poolId !== undefined && (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.farmer !== undefined && (obj.farmer = message.farmer);
        message.unfarmingPoolCoin !== undefined &&
            (obj.unfarmingPoolCoin = message.unfarmingPoolCoin ? coin_1.Coin.toJSON(message.unfarmingPoolCoin) : undefined);
        return obj;
    },
    create(base) {
        return exports.MsgUnfarmAndWithdraw.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUnfarmAndWithdraw();
        message.appId = (object.appId !== undefined && object.appId !== null) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO;
        message.poolId = (object.poolId !== undefined && object.poolId !== null)
            ? long_1.default.fromValue(object.poolId)
            : long_1.default.UZERO;
        message.farmer = (_a = object.farmer) !== null && _a !== void 0 ? _a : "";
        message.unfarmingPoolCoin = (object.unfarmingPoolCoin !== undefined && object.unfarmingPoolCoin !== null)
            ? coin_1.Coin.fromPartial(object.unfarmingPoolCoin)
            : undefined;
        return message;
    },
};
function createBaseMsgUnfarmAndWithdrawResponse() {
    return {};
}
exports.MsgUnfarmAndWithdrawResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnfarmAndWithdrawResponse();
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
    create(base) {
        return exports.MsgUnfarmAndWithdrawResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUnfarmAndWithdrawResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "comdex.liquidity.v1beta1.Msg";
        this.rpc = rpc;
        this.CreatePair = this.CreatePair.bind(this);
        this.CreatePool = this.CreatePool.bind(this);
        this.CreateRangedPool = this.CreateRangedPool.bind(this);
        this.Deposit = this.Deposit.bind(this);
        this.Withdraw = this.Withdraw.bind(this);
        this.LimitOrder = this.LimitOrder.bind(this);
        this.MarketOrder = this.MarketOrder.bind(this);
        this.MMOrder = this.MMOrder.bind(this);
        this.CancelOrder = this.CancelOrder.bind(this);
        this.CancelAllOrders = this.CancelAllOrders.bind(this);
        this.CancelMMOrder = this.CancelMMOrder.bind(this);
        this.Farm = this.Farm.bind(this);
        this.Unfarm = this.Unfarm.bind(this);
        this.DepositAndFarm = this.DepositAndFarm.bind(this);
        this.UnfarmAndWithdraw = this.UnfarmAndWithdraw.bind(this);
    }
    CreatePair(request) {
        const data = exports.MsgCreatePair.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreatePair", data);
        return promise.then((data) => exports.MsgCreatePairResponse.decode(new _m0.Reader(data)));
    }
    CreatePool(request) {
        const data = exports.MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreatePool", data);
        return promise.then((data) => exports.MsgCreatePoolResponse.decode(new _m0.Reader(data)));
    }
    CreateRangedPool(request) {
        const data = exports.MsgCreateRangedPool.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateRangedPool", data);
        return promise.then((data) => exports.MsgCreateRangedPoolResponse.decode(new _m0.Reader(data)));
    }
    Deposit(request) {
        const data = exports.MsgDeposit.encode(request).finish();
        const promise = this.rpc.request(this.service, "Deposit", data);
        return promise.then((data) => exports.MsgDepositResponse.decode(new _m0.Reader(data)));
    }
    Withdraw(request) {
        const data = exports.MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request(this.service, "Withdraw", data);
        return promise.then((data) => exports.MsgWithdrawResponse.decode(new _m0.Reader(data)));
    }
    LimitOrder(request) {
        const data = exports.MsgLimitOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "LimitOrder", data);
        return promise.then((data) => exports.MsgLimitOrderResponse.decode(new _m0.Reader(data)));
    }
    MarketOrder(request) {
        const data = exports.MsgMarketOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "MarketOrder", data);
        return promise.then((data) => exports.MsgMarketOrderResponse.decode(new _m0.Reader(data)));
    }
    MMOrder(request) {
        const data = exports.MsgMMOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "MMOrder", data);
        return promise.then((data) => exports.MsgMMOrderResponse.decode(new _m0.Reader(data)));
    }
    CancelOrder(request) {
        const data = exports.MsgCancelOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelOrder", data);
        return promise.then((data) => exports.MsgCancelOrderResponse.decode(new _m0.Reader(data)));
    }
    CancelAllOrders(request) {
        const data = exports.MsgCancelAllOrders.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelAllOrders", data);
        return promise.then((data) => exports.MsgCancelAllOrdersResponse.decode(new _m0.Reader(data)));
    }
    CancelMMOrder(request) {
        const data = exports.MsgCancelMMOrder.encode(request).finish();
        const promise = this.rpc.request(this.service, "CancelMMOrder", data);
        return promise.then((data) => exports.MsgCancelMMOrderResponse.decode(new _m0.Reader(data)));
    }
    Farm(request) {
        const data = exports.MsgFarm.encode(request).finish();
        const promise = this.rpc.request(this.service, "Farm", data);
        return promise.then((data) => exports.MsgFarmResponse.decode(new _m0.Reader(data)));
    }
    Unfarm(request) {
        const data = exports.MsgUnfarm.encode(request).finish();
        const promise = this.rpc.request(this.service, "Unfarm", data);
        return promise.then((data) => exports.MsgUnfarmResponse.decode(new _m0.Reader(data)));
    }
    DepositAndFarm(request) {
        const data = exports.MsgDepositAndFarm.encode(request).finish();
        const promise = this.rpc.request(this.service, "DepositAndFarm", data);
        return promise.then((data) => exports.MsgDepositAndFarmResponse.decode(new _m0.Reader(data)));
    }
    UnfarmAndWithdraw(request) {
        const data = exports.MsgUnfarmAndWithdraw.encode(request).finish();
        const promise = this.rpc.request(this.service, "UnfarmAndWithdraw", data);
        return promise.then((data) => exports.MsgUnfarmAndWithdrawResponse.decode(new _m0.Reader(data)));
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