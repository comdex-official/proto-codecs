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
const tx_1 = require("../../../tendermint/liquidity/v1beta1/tx");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const basePoolType = {
    id: 0,
    name: "",
    minReserveCoinNum: 0,
    maxReserveCoinNum: 0,
    description: "",
};
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
        const message = { ...basePoolType };
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
        const message = { ...basePoolType };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.minReserveCoinNum !== undefined &&
            object.minReserveCoinNum !== null) {
            message.minReserveCoinNum = Number(object.minReserveCoinNum);
        }
        else {
            message.minReserveCoinNum = 0;
        }
        if (object.maxReserveCoinNum !== undefined &&
            object.maxReserveCoinNum !== null) {
            message.maxReserveCoinNum = Number(object.maxReserveCoinNum);
        }
        else {
            message.maxReserveCoinNum = 0;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.minReserveCoinNum !== undefined &&
            (obj.minReserveCoinNum = message.minReserveCoinNum);
        message.maxReserveCoinNum !== undefined &&
            (obj.maxReserveCoinNum = message.maxReserveCoinNum);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePoolType };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.minReserveCoinNum !== undefined &&
            object.minReserveCoinNum !== null) {
            message.minReserveCoinNum = object.minReserveCoinNum;
        }
        else {
            message.minReserveCoinNum = 0;
        }
        if (object.maxReserveCoinNum !== undefined &&
            object.maxReserveCoinNum !== null) {
            message.maxReserveCoinNum = object.maxReserveCoinNum;
        }
        else {
            message.maxReserveCoinNum = 0;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        return message;
    },
};
const baseParams = {
    minInitDepositAmount: "",
    initPoolCoinMintAmount: "",
    maxReserveCoinAmount: "",
    swapFeeRate: "",
    withdrawFeeRate: "",
    maxOrderAmountRatio: "",
    unitBatchHeight: 0,
    circuitBreakerEnabled: false,
};
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.poolTypes = [];
        message.poolCreationFee = [];
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        message.poolTypes = [];
        message.poolCreationFee = [];
        if (object.poolTypes !== undefined && object.poolTypes !== null) {
            for (const e of object.poolTypes) {
                message.poolTypes.push(exports.PoolType.fromJSON(e));
            }
        }
        if (object.minInitDepositAmount !== undefined &&
            object.minInitDepositAmount !== null) {
            message.minInitDepositAmount = String(object.minInitDepositAmount);
        }
        else {
            message.minInitDepositAmount = "";
        }
        if (object.initPoolCoinMintAmount !== undefined &&
            object.initPoolCoinMintAmount !== null) {
            message.initPoolCoinMintAmount = String(object.initPoolCoinMintAmount);
        }
        else {
            message.initPoolCoinMintAmount = "";
        }
        if (object.maxReserveCoinAmount !== undefined &&
            object.maxReserveCoinAmount !== null) {
            message.maxReserveCoinAmount = String(object.maxReserveCoinAmount);
        }
        else {
            message.maxReserveCoinAmount = "";
        }
        if (object.poolCreationFee !== undefined &&
            object.poolCreationFee !== null) {
            for (const e of object.poolCreationFee) {
                message.poolCreationFee.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.swapFeeRate !== undefined && object.swapFeeRate !== null) {
            message.swapFeeRate = String(object.swapFeeRate);
        }
        else {
            message.swapFeeRate = "";
        }
        if (object.withdrawFeeRate !== undefined &&
            object.withdrawFeeRate !== null) {
            message.withdrawFeeRate = String(object.withdrawFeeRate);
        }
        else {
            message.withdrawFeeRate = "";
        }
        if (object.maxOrderAmountRatio !== undefined &&
            object.maxOrderAmountRatio !== null) {
            message.maxOrderAmountRatio = String(object.maxOrderAmountRatio);
        }
        else {
            message.maxOrderAmountRatio = "";
        }
        if (object.unitBatchHeight !== undefined &&
            object.unitBatchHeight !== null) {
            message.unitBatchHeight = Number(object.unitBatchHeight);
        }
        else {
            message.unitBatchHeight = 0;
        }
        if (object.circuitBreakerEnabled !== undefined &&
            object.circuitBreakerEnabled !== null) {
            message.circuitBreakerEnabled = Boolean(object.circuitBreakerEnabled);
        }
        else {
            message.circuitBreakerEnabled = false;
        }
        return message;
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
            (obj.unitBatchHeight = message.unitBatchHeight);
        message.circuitBreakerEnabled !== undefined &&
            (obj.circuitBreakerEnabled = message.circuitBreakerEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.poolTypes = [];
        message.poolCreationFee = [];
        if (object.poolTypes !== undefined && object.poolTypes !== null) {
            for (const e of object.poolTypes) {
                message.poolTypes.push(exports.PoolType.fromPartial(e));
            }
        }
        if (object.minInitDepositAmount !== undefined &&
            object.minInitDepositAmount !== null) {
            message.minInitDepositAmount = object.minInitDepositAmount;
        }
        else {
            message.minInitDepositAmount = "";
        }
        if (object.initPoolCoinMintAmount !== undefined &&
            object.initPoolCoinMintAmount !== null) {
            message.initPoolCoinMintAmount = object.initPoolCoinMintAmount;
        }
        else {
            message.initPoolCoinMintAmount = "";
        }
        if (object.maxReserveCoinAmount !== undefined &&
            object.maxReserveCoinAmount !== null) {
            message.maxReserveCoinAmount = object.maxReserveCoinAmount;
        }
        else {
            message.maxReserveCoinAmount = "";
        }
        if (object.poolCreationFee !== undefined &&
            object.poolCreationFee !== null) {
            for (const e of object.poolCreationFee) {
                message.poolCreationFee.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.swapFeeRate !== undefined && object.swapFeeRate !== null) {
            message.swapFeeRate = object.swapFeeRate;
        }
        else {
            message.swapFeeRate = "";
        }
        if (object.withdrawFeeRate !== undefined &&
            object.withdrawFeeRate !== null) {
            message.withdrawFeeRate = object.withdrawFeeRate;
        }
        else {
            message.withdrawFeeRate = "";
        }
        if (object.maxOrderAmountRatio !== undefined &&
            object.maxOrderAmountRatio !== null) {
            message.maxOrderAmountRatio = object.maxOrderAmountRatio;
        }
        else {
            message.maxOrderAmountRatio = "";
        }
        if (object.unitBatchHeight !== undefined &&
            object.unitBatchHeight !== null) {
            message.unitBatchHeight = object.unitBatchHeight;
        }
        else {
            message.unitBatchHeight = 0;
        }
        if (object.circuitBreakerEnabled !== undefined &&
            object.circuitBreakerEnabled !== null) {
            message.circuitBreakerEnabled = object.circuitBreakerEnabled;
        }
        else {
            message.circuitBreakerEnabled = false;
        }
        return message;
    },
};
const basePool = {
    id: long_1.default.UZERO,
    typeId: 0,
    reserveCoinDenoms: "",
    reserveAccountAddress: "",
    poolCoinDenom: "",
};
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
        const message = { ...basePool };
        message.reserveCoinDenoms = [];
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
        const message = { ...basePool };
        message.reserveCoinDenoms = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = Number(object.typeId);
        }
        else {
            message.typeId = 0;
        }
        if (object.reserveCoinDenoms !== undefined &&
            object.reserveCoinDenoms !== null) {
            for (const e of object.reserveCoinDenoms) {
                message.reserveCoinDenoms.push(String(e));
            }
        }
        if (object.reserveAccountAddress !== undefined &&
            object.reserveAccountAddress !== null) {
            message.reserveAccountAddress = String(object.reserveAccountAddress);
        }
        else {
            message.reserveAccountAddress = "";
        }
        if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
            message.poolCoinDenom = String(object.poolCoinDenom);
        }
        else {
            message.poolCoinDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.typeId !== undefined && (obj.typeId = message.typeId);
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
        const message = { ...basePool };
        message.reserveCoinDenoms = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.typeId !== undefined && object.typeId !== null) {
            message.typeId = object.typeId;
        }
        else {
            message.typeId = 0;
        }
        if (object.reserveCoinDenoms !== undefined &&
            object.reserveCoinDenoms !== null) {
            for (const e of object.reserveCoinDenoms) {
                message.reserveCoinDenoms.push(e);
            }
        }
        if (object.reserveAccountAddress !== undefined &&
            object.reserveAccountAddress !== null) {
            message.reserveAccountAddress = object.reserveAccountAddress;
        }
        else {
            message.reserveAccountAddress = "";
        }
        if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
            message.poolCoinDenom = object.poolCoinDenom;
        }
        else {
            message.poolCoinDenom = "";
        }
        return message;
    },
};
const basePoolMetadata = { poolId: long_1.default.UZERO };
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
        const message = { ...basePoolMetadata };
        message.reserveCoins = [];
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
        const message = { ...basePoolMetadata };
        message.reserveCoins = [];
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.poolCoinTotalSupply !== undefined &&
            object.poolCoinTotalSupply !== null) {
            message.poolCoinTotalSupply = coin_1.Coin.fromJSON(object.poolCoinTotalSupply);
        }
        else {
            message.poolCoinTotalSupply = undefined;
        }
        if (object.reserveCoins !== undefined && object.reserveCoins !== null) {
            for (const e of object.reserveCoins) {
                message.reserveCoins.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
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
        const message = { ...basePoolMetadata };
        message.reserveCoins = [];
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.poolCoinTotalSupply !== undefined &&
            object.poolCoinTotalSupply !== null) {
            message.poolCoinTotalSupply = coin_1.Coin.fromPartial(object.poolCoinTotalSupply);
        }
        else {
            message.poolCoinTotalSupply = undefined;
        }
        if (object.reserveCoins !== undefined && object.reserveCoins !== null) {
            for (const e of object.reserveCoins) {
                message.reserveCoins.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const basePoolBatch = {
    poolId: long_1.default.UZERO,
    index: long_1.default.UZERO,
    beginHeight: long_1.default.ZERO,
    depositMsgIndex: long_1.default.UZERO,
    withdrawMsgIndex: long_1.default.UZERO,
    swapMsgIndex: long_1.default.UZERO,
    executed: false,
};
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
        const message = { ...basePoolBatch };
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
        const message = { ...basePoolBatch };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = long_1.default.fromString(object.index);
        }
        else {
            message.index = long_1.default.UZERO;
        }
        if (object.beginHeight !== undefined && object.beginHeight !== null) {
            message.beginHeight = long_1.default.fromString(object.beginHeight);
        }
        else {
            message.beginHeight = long_1.default.ZERO;
        }
        if (object.depositMsgIndex !== undefined &&
            object.depositMsgIndex !== null) {
            message.depositMsgIndex = long_1.default.fromString(object.depositMsgIndex);
        }
        else {
            message.depositMsgIndex = long_1.default.UZERO;
        }
        if (object.withdrawMsgIndex !== undefined &&
            object.withdrawMsgIndex !== null) {
            message.withdrawMsgIndex = long_1.default.fromString(object.withdrawMsgIndex);
        }
        else {
            message.withdrawMsgIndex = long_1.default.UZERO;
        }
        if (object.swapMsgIndex !== undefined && object.swapMsgIndex !== null) {
            message.swapMsgIndex = long_1.default.fromString(object.swapMsgIndex);
        }
        else {
            message.swapMsgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = Boolean(object.executed);
        }
        else {
            message.executed = false;
        }
        return message;
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
        const message = { ...basePoolBatch };
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = long_1.default.UZERO;
        }
        if (object.beginHeight !== undefined && object.beginHeight !== null) {
            message.beginHeight = object.beginHeight;
        }
        else {
            message.beginHeight = long_1.default.ZERO;
        }
        if (object.depositMsgIndex !== undefined &&
            object.depositMsgIndex !== null) {
            message.depositMsgIndex = object.depositMsgIndex;
        }
        else {
            message.depositMsgIndex = long_1.default.UZERO;
        }
        if (object.withdrawMsgIndex !== undefined &&
            object.withdrawMsgIndex !== null) {
            message.withdrawMsgIndex = object.withdrawMsgIndex;
        }
        else {
            message.withdrawMsgIndex = long_1.default.UZERO;
        }
        if (object.swapMsgIndex !== undefined && object.swapMsgIndex !== null) {
            message.swapMsgIndex = object.swapMsgIndex;
        }
        else {
            message.swapMsgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        else {
            message.executed = false;
        }
        return message;
    },
};
const baseDepositMsgState = {
    msgHeight: long_1.default.ZERO,
    msgIndex: long_1.default.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
};
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
        const message = { ...baseDepositMsgState };
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
        const message = { ...baseDepositMsgState };
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = long_1.default.fromString(object.msgHeight);
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = long_1.default.fromString(object.msgIndex);
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = Boolean(object.executed);
        }
        else {
            message.executed = false;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = Boolean(object.succeeded);
        }
        else {
            message.succeeded = false;
        }
        if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
            message.toBeDeleted = Boolean(object.toBeDeleted);
        }
        else {
            message.toBeDeleted = false;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgDepositWithinBatch.fromJSON(object.msg);
        }
        else {
            message.msg = undefined;
        }
        return message;
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
        const message = { ...baseDepositMsgState };
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = object.msgHeight;
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        else {
            message.executed = false;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = object.succeeded;
        }
        else {
            message.succeeded = false;
        }
        if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
            message.toBeDeleted = object.toBeDeleted;
        }
        else {
            message.toBeDeleted = false;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgDepositWithinBatch.fromPartial(object.msg);
        }
        else {
            message.msg = undefined;
        }
        return message;
    },
};
const baseWithdrawMsgState = {
    msgHeight: long_1.default.ZERO,
    msgIndex: long_1.default.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
};
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
        const message = { ...baseWithdrawMsgState };
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
        const message = { ...baseWithdrawMsgState };
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = long_1.default.fromString(object.msgHeight);
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = long_1.default.fromString(object.msgIndex);
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = Boolean(object.executed);
        }
        else {
            message.executed = false;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = Boolean(object.succeeded);
        }
        else {
            message.succeeded = false;
        }
        if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
            message.toBeDeleted = Boolean(object.toBeDeleted);
        }
        else {
            message.toBeDeleted = false;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgWithdrawWithinBatch.fromJSON(object.msg);
        }
        else {
            message.msg = undefined;
        }
        return message;
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
        const message = { ...baseWithdrawMsgState };
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = object.msgHeight;
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        else {
            message.executed = false;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = object.succeeded;
        }
        else {
            message.succeeded = false;
        }
        if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
            message.toBeDeleted = object.toBeDeleted;
        }
        else {
            message.toBeDeleted = false;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgWithdrawWithinBatch.fromPartial(object.msg);
        }
        else {
            message.msg = undefined;
        }
        return message;
    },
};
const baseSwapMsgState = {
    msgHeight: long_1.default.ZERO,
    msgIndex: long_1.default.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
    orderExpiryHeight: long_1.default.ZERO,
};
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
        const message = { ...baseSwapMsgState };
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
        const message = { ...baseSwapMsgState };
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = long_1.default.fromString(object.msgHeight);
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = long_1.default.fromString(object.msgIndex);
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = Boolean(object.executed);
        }
        else {
            message.executed = false;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = Boolean(object.succeeded);
        }
        else {
            message.succeeded = false;
        }
        if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
            message.toBeDeleted = Boolean(object.toBeDeleted);
        }
        else {
            message.toBeDeleted = false;
        }
        if (object.orderExpiryHeight !== undefined &&
            object.orderExpiryHeight !== null) {
            message.orderExpiryHeight = long_1.default.fromString(object.orderExpiryHeight);
        }
        else {
            message.orderExpiryHeight = long_1.default.ZERO;
        }
        if (object.exchangedOfferCoin !== undefined &&
            object.exchangedOfferCoin !== null) {
            message.exchangedOfferCoin = coin_1.Coin.fromJSON(object.exchangedOfferCoin);
        }
        else {
            message.exchangedOfferCoin = undefined;
        }
        if (object.remainingOfferCoin !== undefined &&
            object.remainingOfferCoin !== null) {
            message.remainingOfferCoin = coin_1.Coin.fromJSON(object.remainingOfferCoin);
        }
        else {
            message.remainingOfferCoin = undefined;
        }
        if (object.reservedOfferCoinFee !== undefined &&
            object.reservedOfferCoinFee !== null) {
            message.reservedOfferCoinFee = coin_1.Coin.fromJSON(object.reservedOfferCoinFee);
        }
        else {
            message.reservedOfferCoinFee = undefined;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgSwapWithinBatch.fromJSON(object.msg);
        }
        else {
            message.msg = undefined;
        }
        return message;
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
        const message = { ...baseSwapMsgState };
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = object.msgHeight;
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        if (object.executed !== undefined && object.executed !== null) {
            message.executed = object.executed;
        }
        else {
            message.executed = false;
        }
        if (object.succeeded !== undefined && object.succeeded !== null) {
            message.succeeded = object.succeeded;
        }
        else {
            message.succeeded = false;
        }
        if (object.toBeDeleted !== undefined && object.toBeDeleted !== null) {
            message.toBeDeleted = object.toBeDeleted;
        }
        else {
            message.toBeDeleted = false;
        }
        if (object.orderExpiryHeight !== undefined &&
            object.orderExpiryHeight !== null) {
            message.orderExpiryHeight = object.orderExpiryHeight;
        }
        else {
            message.orderExpiryHeight = long_1.default.ZERO;
        }
        if (object.exchangedOfferCoin !== undefined &&
            object.exchangedOfferCoin !== null) {
            message.exchangedOfferCoin = coin_1.Coin.fromPartial(object.exchangedOfferCoin);
        }
        else {
            message.exchangedOfferCoin = undefined;
        }
        if (object.remainingOfferCoin !== undefined &&
            object.remainingOfferCoin !== null) {
            message.remainingOfferCoin = coin_1.Coin.fromPartial(object.remainingOfferCoin);
        }
        else {
            message.remainingOfferCoin = undefined;
        }
        if (object.reservedOfferCoinFee !== undefined &&
            object.reservedOfferCoinFee !== null) {
            message.reservedOfferCoinFee = coin_1.Coin.fromPartial(object.reservedOfferCoinFee);
        }
        else {
            message.reservedOfferCoinFee = undefined;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgSwapWithinBatch.fromPartial(object.msg);
        }
        else {
            message.msg = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=liquidity.js.map