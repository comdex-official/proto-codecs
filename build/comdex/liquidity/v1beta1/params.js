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
exports.GenericParams = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseParams() {
    return {};
}
exports.Params = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
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
    fromPartial(_) {
        const message = createBaseParams();
        return message;
    },
};
function createBaseGenericParams() {
    return {
        batchSize: long_1.default.UZERO,
        tickPrecision: long_1.default.UZERO,
        feeCollectorAddress: "",
        dustCollectorAddress: "",
        minInitialPoolCoinSupply: "",
        pairCreationFee: [],
        poolCreationFee: [],
        minInitialDepositAmount: "",
        maxPriceLimitRatio: "",
        maxOrderLifespan: undefined,
        swapFeeRate: "",
        withdrawFeeRate: "",
        depositExtraGas: long_1.default.UZERO,
        withdrawExtraGas: long_1.default.UZERO,
        orderExtraGas: long_1.default.UZERO,
        swapFeeDistrDenom: "",
        swapFeeBurnRate: "",
        appId: long_1.default.UZERO,
    };
}
exports.GenericParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.batchSize.isZero()) {
            writer.uint32(8).uint64(message.batchSize);
        }
        if (!message.tickPrecision.isZero()) {
            writer.uint32(16).uint64(message.tickPrecision);
        }
        if (message.feeCollectorAddress !== "") {
            writer.uint32(26).string(message.feeCollectorAddress);
        }
        if (message.dustCollectorAddress !== "") {
            writer.uint32(34).string(message.dustCollectorAddress);
        }
        if (message.minInitialPoolCoinSupply !== "") {
            writer.uint32(42).string(message.minInitialPoolCoinSupply);
        }
        for (const v of message.pairCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.minInitialDepositAmount !== "") {
            writer.uint32(66).string(message.minInitialDepositAmount);
        }
        if (message.maxPriceLimitRatio !== "") {
            writer.uint32(74).string(message.maxPriceLimitRatio);
        }
        if (message.maxOrderLifespan !== undefined) {
            duration_1.Duration.encode(message.maxOrderLifespan, writer.uint32(82).fork()).ldelim();
        }
        if (message.swapFeeRate !== "") {
            writer.uint32(90).string(message.swapFeeRate);
        }
        if (message.withdrawFeeRate !== "") {
            writer.uint32(98).string(message.withdrawFeeRate);
        }
        if (!message.depositExtraGas.isZero()) {
            writer.uint32(104).uint64(message.depositExtraGas);
        }
        if (!message.withdrawExtraGas.isZero()) {
            writer.uint32(112).uint64(message.withdrawExtraGas);
        }
        if (!message.orderExtraGas.isZero()) {
            writer.uint32(120).uint64(message.orderExtraGas);
        }
        if (message.swapFeeDistrDenom !== "") {
            writer.uint32(130).string(message.swapFeeDistrDenom);
        }
        if (message.swapFeeBurnRate !== "") {
            writer.uint32(138).string(message.swapFeeBurnRate);
        }
        if (!message.appId.isZero()) {
            writer.uint32(144).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchSize = reader.uint64();
                    break;
                case 2:
                    message.tickPrecision = reader.uint64();
                    break;
                case 3:
                    message.feeCollectorAddress = reader.string();
                    break;
                case 4:
                    message.dustCollectorAddress = reader.string();
                    break;
                case 5:
                    message.minInitialPoolCoinSupply = reader.string();
                    break;
                case 6:
                    message.pairCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.minInitialDepositAmount = reader.string();
                    break;
                case 9:
                    message.maxPriceLimitRatio = reader.string();
                    break;
                case 10:
                    message.maxOrderLifespan = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.swapFeeRate = reader.string();
                    break;
                case 12:
                    message.withdrawFeeRate = reader.string();
                    break;
                case 13:
                    message.depositExtraGas = reader.uint64();
                    break;
                case 14:
                    message.withdrawExtraGas = reader.uint64();
                    break;
                case 15:
                    message.orderExtraGas = reader.uint64();
                    break;
                case 16:
                    message.swapFeeDistrDenom = reader.string();
                    break;
                case 17:
                    message.swapFeeBurnRate = reader.string();
                    break;
                case 18:
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
            batchSize: isSet(object.batchSize)
                ? long_1.default.fromValue(object.batchSize)
                : long_1.default.UZERO,
            tickPrecision: isSet(object.tickPrecision)
                ? long_1.default.fromValue(object.tickPrecision)
                : long_1.default.UZERO,
            feeCollectorAddress: isSet(object.feeCollectorAddress)
                ? String(object.feeCollectorAddress)
                : "",
            dustCollectorAddress: isSet(object.dustCollectorAddress)
                ? String(object.dustCollectorAddress)
                : "",
            minInitialPoolCoinSupply: isSet(object.minInitialPoolCoinSupply)
                ? String(object.minInitialPoolCoinSupply)
                : "",
            pairCreationFee: Array.isArray(object === null || object === void 0 ? void 0 : object.pairCreationFee)
                ? object.pairCreationFee.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            poolCreationFee: Array.isArray(object === null || object === void 0 ? void 0 : object.poolCreationFee)
                ? object.poolCreationFee.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            minInitialDepositAmount: isSet(object.minInitialDepositAmount)
                ? String(object.minInitialDepositAmount)
                : "",
            maxPriceLimitRatio: isSet(object.maxPriceLimitRatio)
                ? String(object.maxPriceLimitRatio)
                : "",
            maxOrderLifespan: isSet(object.maxOrderLifespan)
                ? duration_1.Duration.fromJSON(object.maxOrderLifespan)
                : undefined,
            swapFeeRate: isSet(object.swapFeeRate) ? String(object.swapFeeRate) : "",
            withdrawFeeRate: isSet(object.withdrawFeeRate)
                ? String(object.withdrawFeeRate)
                : "",
            depositExtraGas: isSet(object.depositExtraGas)
                ? long_1.default.fromValue(object.depositExtraGas)
                : long_1.default.UZERO,
            withdrawExtraGas: isSet(object.withdrawExtraGas)
                ? long_1.default.fromValue(object.withdrawExtraGas)
                : long_1.default.UZERO,
            orderExtraGas: isSet(object.orderExtraGas)
                ? long_1.default.fromValue(object.orderExtraGas)
                : long_1.default.UZERO,
            swapFeeDistrDenom: isSet(object.swapFeeDistrDenom)
                ? String(object.swapFeeDistrDenom)
                : "",
            swapFeeBurnRate: isSet(object.swapFeeBurnRate)
                ? String(object.swapFeeBurnRate)
                : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.batchSize !== undefined &&
            (obj.batchSize = (message.batchSize || long_1.default.UZERO).toString());
        message.tickPrecision !== undefined &&
            (obj.tickPrecision = (message.tickPrecision || long_1.default.UZERO).toString());
        message.feeCollectorAddress !== undefined &&
            (obj.feeCollectorAddress = message.feeCollectorAddress);
        message.dustCollectorAddress !== undefined &&
            (obj.dustCollectorAddress = message.dustCollectorAddress);
        message.minInitialPoolCoinSupply !== undefined &&
            (obj.minInitialPoolCoinSupply = message.minInitialPoolCoinSupply);
        if (message.pairCreationFee) {
            obj.pairCreationFee = message.pairCreationFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.pairCreationFee = [];
        }
        if (message.poolCreationFee) {
            obj.poolCreationFee = message.poolCreationFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.poolCreationFee = [];
        }
        message.minInitialDepositAmount !== undefined &&
            (obj.minInitialDepositAmount = message.minInitialDepositAmount);
        message.maxPriceLimitRatio !== undefined &&
            (obj.maxPriceLimitRatio = message.maxPriceLimitRatio);
        message.maxOrderLifespan !== undefined &&
            (obj.maxOrderLifespan = message.maxOrderLifespan
                ? duration_1.Duration.toJSON(message.maxOrderLifespan)
                : undefined);
        message.swapFeeRate !== undefined &&
            (obj.swapFeeRate = message.swapFeeRate);
        message.withdrawFeeRate !== undefined &&
            (obj.withdrawFeeRate = message.withdrawFeeRate);
        message.depositExtraGas !== undefined &&
            (obj.depositExtraGas = (message.depositExtraGas || long_1.default.UZERO).toString());
        message.withdrawExtraGas !== undefined &&
            (obj.withdrawExtraGas = (message.withdrawExtraGas || long_1.default.UZERO).toString());
        message.orderExtraGas !== undefined &&
            (obj.orderExtraGas = (message.orderExtraGas || long_1.default.UZERO).toString());
        message.swapFeeDistrDenom !== undefined &&
            (obj.swapFeeDistrDenom = message.swapFeeDistrDenom);
        message.swapFeeBurnRate !== undefined &&
            (obj.swapFeeBurnRate = message.swapFeeBurnRate);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseGenericParams();
        message.batchSize =
            object.batchSize !== undefined && object.batchSize !== null
                ? long_1.default.fromValue(object.batchSize)
                : long_1.default.UZERO;
        message.tickPrecision =
            object.tickPrecision !== undefined && object.tickPrecision !== null
                ? long_1.default.fromValue(object.tickPrecision)
                : long_1.default.UZERO;
        message.feeCollectorAddress = (_a = object.feeCollectorAddress) !== null && _a !== void 0 ? _a : "";
        message.dustCollectorAddress = (_b = object.dustCollectorAddress) !== null && _b !== void 0 ? _b : "";
        message.minInitialPoolCoinSupply = (_c = object.minInitialPoolCoinSupply) !== null && _c !== void 0 ? _c : "";
        message.pairCreationFee =
            ((_d = object.pairCreationFee) === null || _d === void 0 ? void 0 : _d.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.poolCreationFee =
            ((_e = object.poolCreationFee) === null || _e === void 0 ? void 0 : _e.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.minInitialDepositAmount = (_f = object.minInitialDepositAmount) !== null && _f !== void 0 ? _f : "";
        message.maxPriceLimitRatio = (_g = object.maxPriceLimitRatio) !== null && _g !== void 0 ? _g : "";
        message.maxOrderLifespan =
            object.maxOrderLifespan !== undefined && object.maxOrderLifespan !== null
                ? duration_1.Duration.fromPartial(object.maxOrderLifespan)
                : undefined;
        message.swapFeeRate = (_h = object.swapFeeRate) !== null && _h !== void 0 ? _h : "";
        message.withdrawFeeRate = (_j = object.withdrawFeeRate) !== null && _j !== void 0 ? _j : "";
        message.depositExtraGas =
            object.depositExtraGas !== undefined && object.depositExtraGas !== null
                ? long_1.default.fromValue(object.depositExtraGas)
                : long_1.default.UZERO;
        message.withdrawExtraGas =
            object.withdrawExtraGas !== undefined && object.withdrawExtraGas !== null
                ? long_1.default.fromValue(object.withdrawExtraGas)
                : long_1.default.UZERO;
        message.orderExtraGas =
            object.orderExtraGas !== undefined && object.orderExtraGas !== null
                ? long_1.default.fromValue(object.orderExtraGas)
                : long_1.default.UZERO;
        message.swapFeeDistrDenom = (_k = object.swapFeeDistrDenom) !== null && _k !== void 0 ? _k : "";
        message.swapFeeBurnRate = (_l = object.swapFeeBurnRate) !== null && _l !== void 0 ? _l : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
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
//# sourceMappingURL=params.js.map