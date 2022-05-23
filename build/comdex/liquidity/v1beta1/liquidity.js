"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapMsgState = exports.WithdrawMsgState = exports.DepositMsgState = exports.PoolBatch = exports.PoolMetadata = exports.Pool = exports.Params = exports.PoolType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const tx_1 = require("./tx");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBasePoolType() {
    return {
        id: 0,
        name: "",
        minReserveCoinNum: 0,
        maxReserveCoinNum: 0,
        description: "",
    };
}
exports.PoolType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.minReserveCoinNum !== 0) {
            writer.uint32(24).uint32(message.minReserveCoinNum);
        }
        if (message.maxReserveCoinNum !== 0) {
            writer.uint32(32).uint32(message.maxReserveCoinNum);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.minReserveCoinNum = reader.uint32();
                    break;
                case 4:
                    message.maxReserveCoinNum = reader.uint32();
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
            id: isSet(object.id) ? Number(object.id) : 0,
            name: isSet(object.name) ? String(object.name) : "",
            minReserveCoinNum: isSet(object.minReserveCoinNum)
                ? Number(object.minReserveCoinNum)
                : 0,
            maxReserveCoinNum: isSet(object.maxReserveCoinNum)
                ? Number(object.maxReserveCoinNum)
                : 0,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.name !== undefined && (obj.name = message.name);
        message.minReserveCoinNum !== undefined &&
            (obj.minReserveCoinNum = Math.round(message.minReserveCoinNum));
        message.maxReserveCoinNum !== undefined &&
            (obj.maxReserveCoinNum = Math.round(message.maxReserveCoinNum));
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePoolType();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.minReserveCoinNum = (_c = object.minReserveCoinNum) !== null && _c !== void 0 ? _c : 0;
        message.maxReserveCoinNum = (_d = object.maxReserveCoinNum) !== null && _d !== void 0 ? _d : 0;
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseParams() {
    return {
        poolTypes: [],
        minInitDepositAmount: "",
        initPoolCoinMintAmount: "",
        maxReserveCoinAmount: "",
        poolCreationFee: [],
        swapFeeRate: "",
        withdrawFeeRate: "",
        maxOrderAmountRatio: "",
        unitBatchHeight: 0,
        circuitBreakerEnabled: false,
        poolUnbondingDuration: "",
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.poolTypes) {
            exports.PoolType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.minInitDepositAmount !== "") {
            writer.uint32(18).string(message.minInitDepositAmount);
        }
        if (message.initPoolCoinMintAmount !== "") {
            writer.uint32(26).string(message.initPoolCoinMintAmount);
        }
        if (message.maxReserveCoinAmount !== "") {
            writer.uint32(34).string(message.maxReserveCoinAmount);
        }
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.swapFeeRate !== "") {
            writer.uint32(50).string(message.swapFeeRate);
        }
        if (message.withdrawFeeRate !== "") {
            writer.uint32(58).string(message.withdrawFeeRate);
        }
        if (message.maxOrderAmountRatio !== "") {
            writer.uint32(66).string(message.maxOrderAmountRatio);
        }
        if (message.unitBatchHeight !== 0) {
            writer.uint32(72).uint32(message.unitBatchHeight);
        }
        if (message.circuitBreakerEnabled === true) {
            writer.uint32(80).bool(message.circuitBreakerEnabled);
        }
        if (message.poolUnbondingDuration !== "") {
            writer.uint32(98).string(message.poolUnbondingDuration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolTypes.push(exports.PoolType.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.minInitDepositAmount = reader.string();
                    break;
                case 3:
                    message.initPoolCoinMintAmount = reader.string();
                    break;
                case 4:
                    message.maxReserveCoinAmount = reader.string();
                    break;
                case 5:
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapFeeRate = reader.string();
                    break;
                case 7:
                    message.withdrawFeeRate = reader.string();
                    break;
                case 8:
                    message.maxOrderAmountRatio = reader.string();
                    break;
                case 9:
                    message.unitBatchHeight = reader.uint32();
                    break;
                case 10:
                    message.circuitBreakerEnabled = reader.bool();
                    break;
                case 12:
                    message.poolUnbondingDuration = reader.string();
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
            poolTypes: Array.isArray(object === null || object === void 0 ? void 0 : object.poolTypes)
                ? object.poolTypes.map((e) => exports.PoolType.fromJSON(e))
                : [],
            minInitDepositAmount: isSet(object.minInitDepositAmount)
                ? String(object.minInitDepositAmount)
                : "",
            initPoolCoinMintAmount: isSet(object.initPoolCoinMintAmount)
                ? String(object.initPoolCoinMintAmount)
                : "",
            maxReserveCoinAmount: isSet(object.maxReserveCoinAmount)
                ? String(object.maxReserveCoinAmount)
                : "",
            poolCreationFee: Array.isArray(object === null || object === void 0 ? void 0 : object.poolCreationFee)
                ? object.poolCreationFee.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            swapFeeRate: isSet(object.swapFeeRate) ? String(object.swapFeeRate) : "",
            withdrawFeeRate: isSet(object.withdrawFeeRate)
                ? String(object.withdrawFeeRate)
                : "",
            maxOrderAmountRatio: isSet(object.maxOrderAmountRatio)
                ? String(object.maxOrderAmountRatio)
                : "",
            unitBatchHeight: isSet(object.unitBatchHeight)
                ? Number(object.unitBatchHeight)
                : 0,
            circuitBreakerEnabled: isSet(object.circuitBreakerEnabled)
                ? Boolean(object.circuitBreakerEnabled)
                : false,
            poolUnbondingDuration: isSet(object.poolUnbondingDuration)
                ? String(object.poolUnbondingDuration)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.poolTypes) {
            obj.poolTypes = message.poolTypes.map((e) => e ? exports.PoolType.toJSON(e) : undefined);
        }
        else {
            obj.poolTypes = [];
        }
        message.minInitDepositAmount !== undefined &&
            (obj.minInitDepositAmount = message.minInitDepositAmount);
        message.initPoolCoinMintAmount !== undefined &&
            (obj.initPoolCoinMintAmount = message.initPoolCoinMintAmount);
        message.maxReserveCoinAmount !== undefined &&
            (obj.maxReserveCoinAmount = message.maxReserveCoinAmount);
        if (message.poolCreationFee) {
            obj.poolCreationFee = message.poolCreationFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.poolCreationFee = [];
        }
        message.swapFeeRate !== undefined &&
            (obj.swapFeeRate = message.swapFeeRate);
        message.withdrawFeeRate !== undefined &&
            (obj.withdrawFeeRate = message.withdrawFeeRate);
        message.maxOrderAmountRatio !== undefined &&
            (obj.maxOrderAmountRatio = message.maxOrderAmountRatio);
        message.unitBatchHeight !== undefined &&
            (obj.unitBatchHeight = Math.round(message.unitBatchHeight));
        message.circuitBreakerEnabled !== undefined &&
            (obj.circuitBreakerEnabled = message.circuitBreakerEnabled);
        message.poolUnbondingDuration !== undefined &&
            (obj.poolUnbondingDuration = message.poolUnbondingDuration);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseParams();
        message.poolTypes =
            ((_a = object.poolTypes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PoolType.fromPartial(e))) || [];
        message.minInitDepositAmount = (_b = object.minInitDepositAmount) !== null && _b !== void 0 ? _b : "";
        message.initPoolCoinMintAmount = (_c = object.initPoolCoinMintAmount) !== null && _c !== void 0 ? _c : "";
        message.maxReserveCoinAmount = (_d = object.maxReserveCoinAmount) !== null && _d !== void 0 ? _d : "";
        message.poolCreationFee =
            ((_e = object.poolCreationFee) === null || _e === void 0 ? void 0 : _e.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.swapFeeRate = (_f = object.swapFeeRate) !== null && _f !== void 0 ? _f : "";
        message.withdrawFeeRate = (_g = object.withdrawFeeRate) !== null && _g !== void 0 ? _g : "";
        message.maxOrderAmountRatio = (_h = object.maxOrderAmountRatio) !== null && _h !== void 0 ? _h : "";
        message.unitBatchHeight = (_j = object.unitBatchHeight) !== null && _j !== void 0 ? _j : 0;
        message.circuitBreakerEnabled = (_k = object.circuitBreakerEnabled) !== null && _k !== void 0 ? _k : false;
        message.poolUnbondingDuration = (_l = object.poolUnbondingDuration) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBasePool() {
    return {
        id: long_1.default.UZERO,
        typeId: 0,
        reserveCoinDenoms: [],
        reserveAccountAddress: "",
        poolCoinDenom: "",
    };
}
exports.Pool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.typeId !== 0) {
            writer.uint32(16).uint32(message.typeId);
        }
        for (const v of message.reserveCoinDenoms) {
            writer.uint32(26).string(v);
        }
        if (message.reserveAccountAddress !== "") {
            writer.uint32(34).string(message.reserveAccountAddress);
        }
        if (message.poolCoinDenom !== "") {
            writer.uint32(42).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.typeId = reader.uint32();
                    break;
                case 3:
                    message.reserveCoinDenoms.push(reader.string());
                    break;
                case 4:
                    message.reserveAccountAddress = reader.string();
                    break;
                case 5:
                    message.poolCoinDenom = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
            typeId: isSet(object.typeId) ? Number(object.typeId) : 0,
            reserveCoinDenoms: Array.isArray(object === null || object === void 0 ? void 0 : object.reserveCoinDenoms)
                ? object.reserveCoinDenoms.map((e) => String(e))
                : [],
            reserveAccountAddress: isSet(object.reserveAccountAddress)
                ? String(object.reserveAccountAddress)
                : "",
            poolCoinDenom: isSet(object.poolCoinDenom)
                ? String(object.poolCoinDenom)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.typeId !== undefined && (obj.typeId = Math.round(message.typeId));
        if (message.reserveCoinDenoms) {
            obj.reserveCoinDenoms = message.reserveCoinDenoms.map((e) => e);
        }
        else {
            obj.reserveCoinDenoms = [];
        }
        message.reserveAccountAddress !== undefined &&
            (obj.reserveAccountAddress = message.reserveAccountAddress);
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePool();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.typeId = (_a = object.typeId) !== null && _a !== void 0 ? _a : 0;
        message.reserveCoinDenoms = ((_b = object.reserveCoinDenoms) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.reserveAccountAddress = (_c = object.reserveAccountAddress) !== null && _c !== void 0 ? _c : "";
        message.poolCoinDenom = (_d = object.poolCoinDenom) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBasePoolMetadata() {
    return {
        poolId: long_1.default.UZERO,
        poolCoinTotalSupply: undefined,
        reserveCoins: [],
    };
}
exports.PoolMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.poolCoinTotalSupply !== undefined) {
            coin_1.Coin.encode(message.poolCoinTotalSupply, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.reserveCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolCoinTotalSupply = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reserveCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            poolCoinTotalSupply: isSet(object.poolCoinTotalSupply)
                ? coin_1.Coin.fromJSON(object.poolCoinTotalSupply)
                : undefined,
            reserveCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.reserveCoins)
                ? object.reserveCoins.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.poolCoinTotalSupply !== undefined &&
            (obj.poolCoinTotalSupply = message.poolCoinTotalSupply
                ? coin_1.Coin.toJSON(message.poolCoinTotalSupply)
                : undefined);
        if (message.reserveCoins) {
            obj.reserveCoins = message.reserveCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.reserveCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolMetadata();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.poolCoinTotalSupply =
            object.poolCoinTotalSupply !== undefined &&
                object.poolCoinTotalSupply !== null
                ? coin_1.Coin.fromPartial(object.poolCoinTotalSupply)
                : undefined;
        message.reserveCoins =
            ((_a = object.reserveCoins) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePoolBatch() {
    return {
        poolId: long_1.default.UZERO,
        index: long_1.default.UZERO,
        beginHeight: long_1.default.ZERO,
        depositMsgIndex: long_1.default.UZERO,
        withdrawMsgIndex: long_1.default.UZERO,
        swapMsgIndex: long_1.default.UZERO,
        executed: false,
    };
}
exports.PoolBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.index.isZero()) {
            writer.uint32(16).uint64(message.index);
        }
        if (!message.beginHeight.isZero()) {
            writer.uint32(24).int64(message.beginHeight);
        }
        if (!message.depositMsgIndex.isZero()) {
            writer.uint32(32).uint64(message.depositMsgIndex);
        }
        if (!message.withdrawMsgIndex.isZero()) {
            writer.uint32(40).uint64(message.withdrawMsgIndex);
        }
        if (!message.swapMsgIndex.isZero()) {
            writer.uint32(48).uint64(message.swapMsgIndex);
        }
        if (message.executed === true) {
            writer.uint32(56).bool(message.executed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.index = reader.uint64();
                    break;
                case 3:
                    message.beginHeight = reader.int64();
                    break;
                case 4:
                    message.depositMsgIndex = reader.uint64();
                    break;
                case 5:
                    message.withdrawMsgIndex = reader.uint64();
                    break;
                case 6:
                    message.swapMsgIndex = reader.uint64();
                    break;
                case 7:
                    message.executed = reader.bool();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            index: isSet(object.index) ? long_1.default.fromString(object.index) : long_1.default.UZERO,
            beginHeight: isSet(object.beginHeight)
                ? long_1.default.fromString(object.beginHeight)
                : long_1.default.ZERO,
            depositMsgIndex: isSet(object.depositMsgIndex)
                ? long_1.default.fromString(object.depositMsgIndex)
                : long_1.default.UZERO,
            withdrawMsgIndex: isSet(object.withdrawMsgIndex)
                ? long_1.default.fromString(object.withdrawMsgIndex)
                : long_1.default.UZERO,
            swapMsgIndex: isSet(object.swapMsgIndex)
                ? long_1.default.fromString(object.swapMsgIndex)
                : long_1.default.UZERO,
            executed: isSet(object.executed) ? Boolean(object.executed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.index !== undefined &&
            (obj.index = (message.index || long_1.default.UZERO).toString());
        message.beginHeight !== undefined &&
            (obj.beginHeight = (message.beginHeight || long_1.default.ZERO).toString());
        message.depositMsgIndex !== undefined &&
            (obj.depositMsgIndex = (message.depositMsgIndex || long_1.default.UZERO).toString());
        message.withdrawMsgIndex !== undefined &&
            (obj.withdrawMsgIndex = (message.withdrawMsgIndex || long_1.default.UZERO).toString());
        message.swapMsgIndex !== undefined &&
            (obj.swapMsgIndex = (message.swapMsgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolBatch();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.index =
            object.index !== undefined && object.index !== null
                ? long_1.default.fromValue(object.index)
                : long_1.default.UZERO;
        message.beginHeight =
            object.beginHeight !== undefined && object.beginHeight !== null
                ? long_1.default.fromValue(object.beginHeight)
                : long_1.default.ZERO;
        message.depositMsgIndex =
            object.depositMsgIndex !== undefined && object.depositMsgIndex !== null
                ? long_1.default.fromValue(object.depositMsgIndex)
                : long_1.default.UZERO;
        message.withdrawMsgIndex =
            object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null
                ? long_1.default.fromValue(object.withdrawMsgIndex)
                : long_1.default.UZERO;
        message.swapMsgIndex =
            object.swapMsgIndex !== undefined && object.swapMsgIndex !== null
                ? long_1.default.fromValue(object.swapMsgIndex)
                : long_1.default.UZERO;
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseDepositMsgState() {
    return {
        msgHeight: long_1.default.ZERO,
        msgIndex: long_1.default.UZERO,
        executed: false,
        succeeded: false,
        toBeDeleted: false,
        msg: undefined,
    };
}
exports.DepositMsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            tx_1.MsgDepositWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositMsgState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = tx_1.MsgDepositWithinBatch.decode(reader, reader.uint32());
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
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO,
            msgIndex: isSet(object.msgIndex)
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO,
            executed: isSet(object.executed) ? Boolean(object.executed) : false,
            succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
            toBeDeleted: isSet(object.toBeDeleted)
                ? Boolean(object.toBeDeleted)
                : false,
            msg: isSet(object.msg)
                ? tx_1.MsgDepositWithinBatch.fromJSON(object.msg)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? tx_1.MsgDepositWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDepositMsgState();
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromValue(object.msgIndex)
                : long_1.default.UZERO;
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        message.succeeded = (_b = object.succeeded) !== null && _b !== void 0 ? _b : false;
        message.toBeDeleted = (_c = object.toBeDeleted) !== null && _c !== void 0 ? _c : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgDepositWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
function createBaseWithdrawMsgState() {
    return {
        msgHeight: long_1.default.ZERO,
        msgIndex: long_1.default.UZERO,
        executed: false,
        succeeded: false,
        toBeDeleted: false,
        msg: undefined,
    };
}
exports.WithdrawMsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            tx_1.MsgWithdrawWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawMsgState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = tx_1.MsgWithdrawWithinBatch.decode(reader, reader.uint32());
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
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO,
            msgIndex: isSet(object.msgIndex)
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO,
            executed: isSet(object.executed) ? Boolean(object.executed) : false,
            succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
            toBeDeleted: isSet(object.toBeDeleted)
                ? Boolean(object.toBeDeleted)
                : false,
            msg: isSet(object.msg)
                ? tx_1.MsgWithdrawWithinBatch.fromJSON(object.msg)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? tx_1.MsgWithdrawWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseWithdrawMsgState();
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromValue(object.msgIndex)
                : long_1.default.UZERO;
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        message.succeeded = (_b = object.succeeded) !== null && _b !== void 0 ? _b : false;
        message.toBeDeleted = (_c = object.toBeDeleted) !== null && _c !== void 0 ? _c : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgWithdrawWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
function createBaseSwapMsgState() {
    return {
        msgHeight: long_1.default.ZERO,
        msgIndex: long_1.default.UZERO,
        executed: false,
        succeeded: false,
        toBeDeleted: false,
        orderExpiryHeight: long_1.default.ZERO,
        exchangedOfferCoin: undefined,
        remainingOfferCoin: undefined,
        reservedOfferCoinFee: undefined,
        msg: undefined,
    };
}
exports.SwapMsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (!message.orderExpiryHeight.isZero()) {
            writer.uint32(48).int64(message.orderExpiryHeight);
        }
        if (message.exchangedOfferCoin !== undefined) {
            coin_1.Coin.encode(message.exchangedOfferCoin, writer.uint32(58).fork()).ldelim();
        }
        if (message.remainingOfferCoin !== undefined) {
            coin_1.Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
        }
        if (message.reservedOfferCoinFee !== undefined) {
            coin_1.Coin.encode(message.reservedOfferCoinFee, writer.uint32(74).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            tx_1.MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapMsgState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.orderExpiryHeight = reader.int64();
                    break;
                case 7:
                    message.exchangedOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.remainingOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedOfferCoinFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.msg = tx_1.MsgSwapWithinBatch.decode(reader, reader.uint32());
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
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO,
            msgIndex: isSet(object.msgIndex)
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO,
            executed: isSet(object.executed) ? Boolean(object.executed) : false,
            succeeded: isSet(object.succeeded) ? Boolean(object.succeeded) : false,
            toBeDeleted: isSet(object.toBeDeleted)
                ? Boolean(object.toBeDeleted)
                : false,
            orderExpiryHeight: isSet(object.orderExpiryHeight)
                ? long_1.default.fromString(object.orderExpiryHeight)
                : long_1.default.ZERO,
            exchangedOfferCoin: isSet(object.exchangedOfferCoin)
                ? coin_1.Coin.fromJSON(object.exchangedOfferCoin)
                : undefined,
            remainingOfferCoin: isSet(object.remainingOfferCoin)
                ? coin_1.Coin.fromJSON(object.remainingOfferCoin)
                : undefined,
            reservedOfferCoinFee: isSet(object.reservedOfferCoinFee)
                ? coin_1.Coin.fromJSON(object.reservedOfferCoinFee)
                : undefined,
            msg: isSet(object.msg)
                ? tx_1.MsgSwapWithinBatch.fromJSON(object.msg)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.orderExpiryHeight !== undefined &&
            (obj.orderExpiryHeight = (message.orderExpiryHeight || long_1.default.ZERO).toString());
        message.exchangedOfferCoin !== undefined &&
            (obj.exchangedOfferCoin = message.exchangedOfferCoin
                ? coin_1.Coin.toJSON(message.exchangedOfferCoin)
                : undefined);
        message.remainingOfferCoin !== undefined &&
            (obj.remainingOfferCoin = message.remainingOfferCoin
                ? coin_1.Coin.toJSON(message.remainingOfferCoin)
                : undefined);
        message.reservedOfferCoinFee !== undefined &&
            (obj.reservedOfferCoinFee = message.reservedOfferCoinFee
                ? coin_1.Coin.toJSON(message.reservedOfferCoinFee)
                : undefined);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? tx_1.MsgSwapWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSwapMsgState();
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromValue(object.msgIndex)
                : long_1.default.UZERO;
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        message.succeeded = (_b = object.succeeded) !== null && _b !== void 0 ? _b : false;
        message.toBeDeleted = (_c = object.toBeDeleted) !== null && _c !== void 0 ? _c : false;
        message.orderExpiryHeight =
            object.orderExpiryHeight !== undefined &&
                object.orderExpiryHeight !== null
                ? long_1.default.fromValue(object.orderExpiryHeight)
                : long_1.default.ZERO;
        message.exchangedOfferCoin =
            object.exchangedOfferCoin !== undefined &&
                object.exchangedOfferCoin !== null
                ? coin_1.Coin.fromPartial(object.exchangedOfferCoin)
                : undefined;
        message.remainingOfferCoin =
            object.remainingOfferCoin !== undefined &&
                object.remainingOfferCoin !== null
                ? coin_1.Coin.fromPartial(object.remainingOfferCoin)
                : undefined;
        message.reservedOfferCoinFee =
            object.reservedOfferCoinFee !== undefined &&
                object.reservedOfferCoinFee !== null
                ? coin_1.Coin.fromPartial(object.reservedOfferCoinFee)
                : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgSwapWithinBatch.fromPartial(object.msg)
                : undefined;
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
//# sourceMappingURL=liquidity.js.map