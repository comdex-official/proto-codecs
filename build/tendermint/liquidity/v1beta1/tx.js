"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSwapWithinBatchResponse = exports.MsgSwapWithinBatch = exports.MsgWithdrawWithinBatchResponse = exports.MsgWithdrawWithinBatch = exports.MsgDepositWithinBatchResponse = exports.MsgDepositWithinBatch = exports.MsgCreatePoolResponse = exports.MsgCreatePool = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const baseMsgCreatePool = { poolCreatorAddress: "", poolTypeId: 0 };
exports.MsgCreatePool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.poolCreatorAddress !== "") {
            writer.uint32(10).string(message.poolCreatorAddress);
        }
        if (message.poolTypeId !== 0) {
            writer.uint32(16).uint32(message.poolTypeId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool };
        message.depositCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreatorAddress = reader.string();
                    break;
                case 2:
                    message.poolTypeId = reader.uint32();
                    break;
                case 4:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool };
        message.depositCoins = [];
        if (object.poolCreatorAddress !== undefined &&
            object.poolCreatorAddress !== null) {
            message.poolCreatorAddress = String(object.poolCreatorAddress);
        }
        else {
            message.poolCreatorAddress = "";
        }
        if (object.poolTypeId !== undefined && object.poolTypeId !== null) {
            message.poolTypeId = Number(object.poolTypeId);
        }
        else {
            message.poolTypeId = 0;
        }
        if (object.depositCoins !== undefined && object.depositCoins !== null) {
            for (const e of object.depositCoins) {
                message.depositCoins.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolCreatorAddress !== undefined &&
            (obj.poolCreatorAddress = message.poolCreatorAddress);
        message.poolTypeId !== undefined && (obj.poolTypeId = message.poolTypeId);
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool };
        message.depositCoins = [];
        if (object.poolCreatorAddress !== undefined &&
            object.poolCreatorAddress !== null) {
            message.poolCreatorAddress = object.poolCreatorAddress;
        }
        else {
            message.poolCreatorAddress = "";
        }
        if (object.poolTypeId !== undefined && object.poolTypeId !== null) {
            message.poolTypeId = object.poolTypeId;
        }
        else {
            message.poolTypeId = 0;
        }
        if (object.depositCoins !== undefined && object.depositCoins !== null) {
            for (const e of object.depositCoins) {
                message.depositCoins.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgCreatePoolResponse = {};
exports.MsgCreatePoolResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePoolResponse };
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
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
};
const baseMsgDepositWithinBatch = {
    depositorAddress: "",
    poolId: long_1.default.UZERO,
};
exports.MsgDepositWithinBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositWithinBatch };
        message.depositCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDepositWithinBatch };
        message.depositCoins = [];
        if (object.depositorAddress !== undefined &&
            object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        }
        else {
            message.depositorAddress = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.depositCoins !== undefined && object.depositCoins !== null) {
            for (const e of object.depositCoins) {
                message.depositCoins.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.depositorAddress !== undefined &&
            (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDepositWithinBatch };
        message.depositCoins = [];
        if (object.depositorAddress !== undefined &&
            object.depositorAddress !== null) {
            message.depositorAddress = object.depositorAddress;
        }
        else {
            message.depositorAddress = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.depositCoins !== undefined && object.depositCoins !== null) {
            for (const e of object.depositCoins) {
                message.depositCoins.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgDepositWithinBatchResponse = {};
exports.MsgDepositWithinBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDepositWithinBatchResponse,
        };
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
        const message = {
            ...baseMsgDepositWithinBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDepositWithinBatchResponse,
        };
        return message;
    },
};
const baseMsgWithdrawWithinBatch = {
    withdrawerAddress: "",
    poolId: long_1.default.UZERO,
};
exports.MsgWithdrawWithinBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.withdrawerAddress !== "") {
            writer.uint32(10).string(message.withdrawerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.poolCoin !== undefined) {
            coin_1.Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawWithinBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.poolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgWithdrawWithinBatch };
        if (object.withdrawerAddress !== undefined &&
            object.withdrawerAddress !== null) {
            message.withdrawerAddress = String(object.withdrawerAddress);
        }
        else {
            message.withdrawerAddress = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.poolCoin !== undefined && object.poolCoin !== null) {
            message.poolCoin = coin_1.Coin.fromJSON(object.poolCoin);
        }
        else {
            message.poolCoin = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.withdrawerAddress !== undefined &&
            (obj.withdrawerAddress = message.withdrawerAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.poolCoin !== undefined &&
            (obj.poolCoin = message.poolCoin
                ? coin_1.Coin.toJSON(message.poolCoin)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgWithdrawWithinBatch };
        if (object.withdrawerAddress !== undefined &&
            object.withdrawerAddress !== null) {
            message.withdrawerAddress = object.withdrawerAddress;
        }
        else {
            message.withdrawerAddress = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.poolCoin !== undefined && object.poolCoin !== null) {
            message.poolCoin = coin_1.Coin.fromPartial(object.poolCoin);
        }
        else {
            message.poolCoin = undefined;
        }
        return message;
    },
};
const baseMsgWithdrawWithinBatchResponse = {};
exports.MsgWithdrawWithinBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawWithinBatchResponse,
        };
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
        const message = {
            ...baseMsgWithdrawWithinBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgWithdrawWithinBatchResponse,
        };
        return message;
    },
};
const baseMsgSwapWithinBatch = {
    swapRequesterAddress: "",
    poolId: long_1.default.UZERO,
    swapTypeId: 0,
    demandCoinDenom: "",
    orderPrice: "",
};
exports.MsgSwapWithinBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.swapRequesterAddress !== "") {
            writer.uint32(10).string(message.swapRequesterAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.swapTypeId !== 0) {
            writer.uint32(24).uint32(message.swapTypeId);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.offerCoinFee !== undefined) {
            coin_1.Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(message.orderPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSwapWithinBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapRequesterAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.swapTypeId = reader.uint32();
                    break;
                case 4:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.offerCoinFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSwapWithinBatch };
        if (object.swapRequesterAddress !== undefined &&
            object.swapRequesterAddress !== null) {
            message.swapRequesterAddress = String(object.swapRequesterAddress);
        }
        else {
            message.swapRequesterAddress = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = long_1.default.fromString(object.poolId);
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.swapTypeId !== undefined && object.swapTypeId !== null) {
            message.swapTypeId = Number(object.swapTypeId);
        }
        else {
            message.swapTypeId = 0;
        }
        if (object.offerCoin !== undefined && object.offerCoin !== null) {
            message.offerCoin = coin_1.Coin.fromJSON(object.offerCoin);
        }
        else {
            message.offerCoin = undefined;
        }
        if (object.demandCoinDenom !== undefined &&
            object.demandCoinDenom !== null) {
            message.demandCoinDenom = String(object.demandCoinDenom);
        }
        else {
            message.demandCoinDenom = "";
        }
        if (object.offerCoinFee !== undefined && object.offerCoinFee !== null) {
            message.offerCoinFee = coin_1.Coin.fromJSON(object.offerCoinFee);
        }
        else {
            message.offerCoinFee = undefined;
        }
        if (object.orderPrice !== undefined && object.orderPrice !== null) {
            message.orderPrice = String(object.orderPrice);
        }
        else {
            message.orderPrice = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swapRequesterAddress !== undefined &&
            (obj.swapRequesterAddress = message.swapRequesterAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.swapTypeId !== undefined && (obj.swapTypeId = message.swapTypeId);
        message.offerCoin !== undefined &&
            (obj.offerCoin = message.offerCoin
                ? coin_1.Coin.toJSON(message.offerCoin)
                : undefined);
        message.demandCoinDenom !== undefined &&
            (obj.demandCoinDenom = message.demandCoinDenom);
        message.offerCoinFee !== undefined &&
            (obj.offerCoinFee = message.offerCoinFee
                ? coin_1.Coin.toJSON(message.offerCoinFee)
                : undefined);
        message.orderPrice !== undefined && (obj.orderPrice = message.orderPrice);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSwapWithinBatch };
        if (object.swapRequesterAddress !== undefined &&
            object.swapRequesterAddress !== null) {
            message.swapRequesterAddress = object.swapRequesterAddress;
        }
        else {
            message.swapRequesterAddress = "";
        }
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.swapTypeId !== undefined && object.swapTypeId !== null) {
            message.swapTypeId = object.swapTypeId;
        }
        else {
            message.swapTypeId = 0;
        }
        if (object.offerCoin !== undefined && object.offerCoin !== null) {
            message.offerCoin = coin_1.Coin.fromPartial(object.offerCoin);
        }
        else {
            message.offerCoin = undefined;
        }
        if (object.demandCoinDenom !== undefined &&
            object.demandCoinDenom !== null) {
            message.demandCoinDenom = object.demandCoinDenom;
        }
        else {
            message.demandCoinDenom = "";
        }
        if (object.offerCoinFee !== undefined && object.offerCoinFee !== null) {
            message.offerCoinFee = coin_1.Coin.fromPartial(object.offerCoinFee);
        }
        else {
            message.offerCoinFee = undefined;
        }
        if (object.orderPrice !== undefined && object.orderPrice !== null) {
            message.orderPrice = object.orderPrice;
        }
        else {
            message.orderPrice = "";
        }
        return message;
    },
};
const baseMsgSwapWithinBatchResponse = {};
exports.MsgSwapWithinBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSwapWithinBatchResponse,
        };
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
        const message = {
            ...baseMsgSwapWithinBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSwapWithinBatchResponse,
        };
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreatePool = this.CreatePool.bind(this);
        this.DepositWithinBatch = this.DepositWithinBatch.bind(this);
        this.WithdrawWithinBatch = this.WithdrawWithinBatch.bind(this);
        this.Swap = this.Swap.bind(this);
    }
    CreatePool(request) {
        const data = exports.MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "CreatePool", data);
        return promise.then((data) => exports.MsgCreatePoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    DepositWithinBatch(request) {
        const data = exports.MsgDepositWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "DepositWithinBatch", data);
        return promise.then((data) => exports.MsgDepositWithinBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    WithdrawWithinBatch(request) {
        const data = exports.MsgWithdrawWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "WithdrawWithinBatch", data);
        return promise.then((data) => exports.MsgWithdrawWithinBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    Swap(request) {
        const data = exports.MsgSwapWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "Swap", data);
        return promise.then((data) => exports.MsgSwapWithinBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=tx.js.map