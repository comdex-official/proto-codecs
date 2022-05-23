"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolLiquidityProvidersData_LiquidityProvidersEntry = exports.PoolLiquidityProvidersData = exports.QueuedLiquidityProvider = exports.DepositsMade = exports.Order = exports.WithdrawRequest = exports.DepositRequest = exports.Pool = exports.Pair = exports.Params = exports.addressTypeToJSON = exports.addressTypeFromJSON = exports.AddressType = exports.orderStatusToJSON = exports.orderStatusFromJSON = exports.OrderStatus = exports.requestStatusToJSON = exports.requestStatusFromJSON = exports.RequestStatus = exports.orderDirectionToJSON = exports.orderDirectionFromJSON = exports.OrderDirection = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.liquidity.v1beta1";
/** OrderDirection enumerates order directions. */
var OrderDirection;
(function (OrderDirection) {
    /** ORDER_DIRECTION_UNSPECIFIED - ORDER_DIRECTION_UNSPECIFIED specifies unknown order direction */
    OrderDirection[OrderDirection["ORDER_DIRECTION_UNSPECIFIED"] = 0] = "ORDER_DIRECTION_UNSPECIFIED";
    /** ORDER_DIRECTION_BUY - ORDER_DIRECTION_BUY specifies buy(swap quote coin to base coin) order direction */
    OrderDirection[OrderDirection["ORDER_DIRECTION_BUY"] = 1] = "ORDER_DIRECTION_BUY";
    /** ORDER_DIRECTION_SELL - ORDER_DIRECTION_SELL specifies sell(swap base coin to quote coin) order direction */
    OrderDirection[OrderDirection["ORDER_DIRECTION_SELL"] = 2] = "ORDER_DIRECTION_SELL";
    OrderDirection[OrderDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
function orderDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_DIRECTION_UNSPECIFIED":
            return OrderDirection.ORDER_DIRECTION_UNSPECIFIED;
        case 1:
        case "ORDER_DIRECTION_BUY":
            return OrderDirection.ORDER_DIRECTION_BUY;
        case 2:
        case "ORDER_DIRECTION_SELL":
            return OrderDirection.ORDER_DIRECTION_SELL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderDirection.UNRECOGNIZED;
    }
}
exports.orderDirectionFromJSON = orderDirectionFromJSON;
function orderDirectionToJSON(object) {
    switch (object) {
        case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
            return "ORDER_DIRECTION_UNSPECIFIED";
        case OrderDirection.ORDER_DIRECTION_BUY:
            return "ORDER_DIRECTION_BUY";
        case OrderDirection.ORDER_DIRECTION_SELL:
            return "ORDER_DIRECTION_SELL";
        default:
            return "UNKNOWN";
    }
}
exports.orderDirectionToJSON = orderDirectionToJSON;
/** RequestStatus enumerates request statuses. */
var RequestStatus;
(function (RequestStatus) {
    /** REQUEST_STATUS_UNSPECIFIED - REQUEST_STATUS_UNSPECIFIED specifies unknown request status */
    RequestStatus[RequestStatus["REQUEST_STATUS_UNSPECIFIED"] = 0] = "REQUEST_STATUS_UNSPECIFIED";
    /** REQUEST_STATUS_NOT_EXECUTED - REQUEST_STATUS_NOT_EXECUTED indicates the request is not executed yet */
    RequestStatus[RequestStatus["REQUEST_STATUS_NOT_EXECUTED"] = 1] = "REQUEST_STATUS_NOT_EXECUTED";
    /** REQUEST_STATUS_SUCCEEDED - REQUEST_STATUS_SUCCEEDED indicates the request has been succeeded */
    RequestStatus[RequestStatus["REQUEST_STATUS_SUCCEEDED"] = 2] = "REQUEST_STATUS_SUCCEEDED";
    /** REQUEST_STATUS_FAILED - REQUEST_STATUS_FAILED indicates the request is failed */
    RequestStatus[RequestStatus["REQUEST_STATUS_FAILED"] = 3] = "REQUEST_STATUS_FAILED";
    RequestStatus[RequestStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
function requestStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "REQUEST_STATUS_UNSPECIFIED":
            return RequestStatus.REQUEST_STATUS_UNSPECIFIED;
        case 1:
        case "REQUEST_STATUS_NOT_EXECUTED":
            return RequestStatus.REQUEST_STATUS_NOT_EXECUTED;
        case 2:
        case "REQUEST_STATUS_SUCCEEDED":
            return RequestStatus.REQUEST_STATUS_SUCCEEDED;
        case 3:
        case "REQUEST_STATUS_FAILED":
            return RequestStatus.REQUEST_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RequestStatus.UNRECOGNIZED;
    }
}
exports.requestStatusFromJSON = requestStatusFromJSON;
function requestStatusToJSON(object) {
    switch (object) {
        case RequestStatus.REQUEST_STATUS_UNSPECIFIED:
            return "REQUEST_STATUS_UNSPECIFIED";
        case RequestStatus.REQUEST_STATUS_NOT_EXECUTED:
            return "REQUEST_STATUS_NOT_EXECUTED";
        case RequestStatus.REQUEST_STATUS_SUCCEEDED:
            return "REQUEST_STATUS_SUCCEEDED";
        case RequestStatus.REQUEST_STATUS_FAILED:
            return "REQUEST_STATUS_FAILED";
        default:
            return "UNKNOWN";
    }
}
exports.requestStatusToJSON = requestStatusToJSON;
/** OrderStatus enumerates order statuses. */
var OrderStatus;
(function (OrderStatus) {
    /** ORDER_STATUS_UNSPECIFIED - ORDER_STATUS_UNSPECIFIED specifies unknown order status */
    OrderStatus[OrderStatus["ORDER_STATUS_UNSPECIFIED"] = 0] = "ORDER_STATUS_UNSPECIFIED";
    /** ORDER_STATUS_NOT_EXECUTED - ORDER_STATUS_NOT_EXECUTED indicates the order has not been executed yet */
    OrderStatus[OrderStatus["ORDER_STATUS_NOT_EXECUTED"] = 1] = "ORDER_STATUS_NOT_EXECUTED";
    /** ORDER_STATUS_NOT_MATCHED - ORDER_STATUS_NOT_MATCHED indicates the order has been executed but has no match */
    OrderStatus[OrderStatus["ORDER_STATUS_NOT_MATCHED"] = 2] = "ORDER_STATUS_NOT_MATCHED";
    /** ORDER_STATUS_PARTIALLY_MATCHED - ORDER_STATUS_PARTIALLY_MATCHED indicates the order has been partially matched */
    OrderStatus[OrderStatus["ORDER_STATUS_PARTIALLY_MATCHED"] = 3] = "ORDER_STATUS_PARTIALLY_MATCHED";
    /** ORDER_STATUS_COMPLETED - ORDER_STATUS_COMPLETED indicates the order has been fully matched and completed */
    OrderStatus[OrderStatus["ORDER_STATUS_COMPLETED"] = 4] = "ORDER_STATUS_COMPLETED";
    /** ORDER_STATUS_CANCELED - ORDER_STATUS_CANCELED indicates the order has been canceled */
    OrderStatus[OrderStatus["ORDER_STATUS_CANCELED"] = 5] = "ORDER_STATUS_CANCELED";
    /** ORDER_STATUS_EXPIRED - ORDER_STATUS_EXPIRED indicates the order has been expired */
    OrderStatus[OrderStatus["ORDER_STATUS_EXPIRED"] = 6] = "ORDER_STATUS_EXPIRED";
    OrderStatus[OrderStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
function orderStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_STATUS_UNSPECIFIED":
            return OrderStatus.ORDER_STATUS_UNSPECIFIED;
        case 1:
        case "ORDER_STATUS_NOT_EXECUTED":
            return OrderStatus.ORDER_STATUS_NOT_EXECUTED;
        case 2:
        case "ORDER_STATUS_NOT_MATCHED":
            return OrderStatus.ORDER_STATUS_NOT_MATCHED;
        case 3:
        case "ORDER_STATUS_PARTIALLY_MATCHED":
            return OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED;
        case 4:
        case "ORDER_STATUS_COMPLETED":
            return OrderStatus.ORDER_STATUS_COMPLETED;
        case 5:
        case "ORDER_STATUS_CANCELED":
            return OrderStatus.ORDER_STATUS_CANCELED;
        case 6:
        case "ORDER_STATUS_EXPIRED":
            return OrderStatus.ORDER_STATUS_EXPIRED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderStatus.UNRECOGNIZED;
    }
}
exports.orderStatusFromJSON = orderStatusFromJSON;
function orderStatusToJSON(object) {
    switch (object) {
        case OrderStatus.ORDER_STATUS_UNSPECIFIED:
            return "ORDER_STATUS_UNSPECIFIED";
        case OrderStatus.ORDER_STATUS_NOT_EXECUTED:
            return "ORDER_STATUS_NOT_EXECUTED";
        case OrderStatus.ORDER_STATUS_NOT_MATCHED:
            return "ORDER_STATUS_NOT_MATCHED";
        case OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED:
            return "ORDER_STATUS_PARTIALLY_MATCHED";
        case OrderStatus.ORDER_STATUS_COMPLETED:
            return "ORDER_STATUS_COMPLETED";
        case OrderStatus.ORDER_STATUS_CANCELED:
            return "ORDER_STATUS_CANCELED";
        case OrderStatus.ORDER_STATUS_EXPIRED:
            return "ORDER_STATUS_EXPIRED";
        default:
            return "UNKNOWN";
    }
}
exports.orderStatusToJSON = orderStatusToJSON;
/** AddressType enumerates the available types of a address. */
var AddressType;
(function (AddressType) {
    /** ADDRESS_TYPE_32_BYTES - the 32 bytes length address type of ADR 028. */
    AddressType[AddressType["ADDRESS_TYPE_32_BYTES"] = 0] = "ADDRESS_TYPE_32_BYTES";
    /** ADDRESS_TYPE_20_BYTES - the default 20 bytes length address type. */
    AddressType[AddressType["ADDRESS_TYPE_20_BYTES"] = 1] = "ADDRESS_TYPE_20_BYTES";
    AddressType[AddressType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
function addressTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ADDRESS_TYPE_32_BYTES":
            return AddressType.ADDRESS_TYPE_32_BYTES;
        case 1:
        case "ADDRESS_TYPE_20_BYTES":
            return AddressType.ADDRESS_TYPE_20_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AddressType.UNRECOGNIZED;
    }
}
exports.addressTypeFromJSON = addressTypeFromJSON;
function addressTypeToJSON(object) {
    switch (object) {
        case AddressType.ADDRESS_TYPE_32_BYTES:
            return "ADDRESS_TYPE_32_BYTES";
        case AddressType.ADDRESS_TYPE_20_BYTES:
            return "ADDRESS_TYPE_20_BYTES";
        default:
            return "UNKNOWN";
    }
}
exports.addressTypeToJSON = addressTypeToJSON;
function createBaseParams() {
    return {
        batchSize: 0,
        tickPrecision: 0,
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
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batchSize !== 0) {
            writer.uint32(8).uint32(message.batchSize);
        }
        if (message.tickPrecision !== 0) {
            writer.uint32(16).uint32(message.tickPrecision);
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
                    message.batchSize = reader.uint32();
                    break;
                case 2:
                    message.tickPrecision = reader.uint32();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            batchSize: isSet(object.batchSize) ? Number(object.batchSize) : 0,
            tickPrecision: isSet(object.tickPrecision)
                ? Number(object.tickPrecision)
                : 0,
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
                ? long_1.default.fromString(object.depositExtraGas)
                : long_1.default.UZERO,
            withdrawExtraGas: isSet(object.withdrawExtraGas)
                ? long_1.default.fromString(object.withdrawExtraGas)
                : long_1.default.UZERO,
            orderExtraGas: isSet(object.orderExtraGas)
                ? long_1.default.fromString(object.orderExtraGas)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.batchSize !== undefined &&
            (obj.batchSize = Math.round(message.batchSize));
        message.tickPrecision !== undefined &&
            (obj.tickPrecision = Math.round(message.tickPrecision));
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseParams();
        message.batchSize = (_a = object.batchSize) !== null && _a !== void 0 ? _a : 0;
        message.tickPrecision = (_b = object.tickPrecision) !== null && _b !== void 0 ? _b : 0;
        message.feeCollectorAddress = (_c = object.feeCollectorAddress) !== null && _c !== void 0 ? _c : "";
        message.dustCollectorAddress = (_d = object.dustCollectorAddress) !== null && _d !== void 0 ? _d : "";
        message.minInitialPoolCoinSupply = (_e = object.minInitialPoolCoinSupply) !== null && _e !== void 0 ? _e : "";
        message.pairCreationFee =
            ((_f = object.pairCreationFee) === null || _f === void 0 ? void 0 : _f.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.poolCreationFee =
            ((_g = object.poolCreationFee) === null || _g === void 0 ? void 0 : _g.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.minInitialDepositAmount = (_h = object.minInitialDepositAmount) !== null && _h !== void 0 ? _h : "";
        message.maxPriceLimitRatio = (_j = object.maxPriceLimitRatio) !== null && _j !== void 0 ? _j : "";
        message.maxOrderLifespan =
            object.maxOrderLifespan !== undefined && object.maxOrderLifespan !== null
                ? duration_1.Duration.fromPartial(object.maxOrderLifespan)
                : undefined;
        message.swapFeeRate = (_k = object.swapFeeRate) !== null && _k !== void 0 ? _k : "";
        message.withdrawFeeRate = (_l = object.withdrawFeeRate) !== null && _l !== void 0 ? _l : "";
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
        return message;
    },
};
function createBasePair() {
    return {
        id: long_1.default.UZERO,
        baseCoinDenom: "",
        quoteCoinDenom: "",
        escrowAddress: "",
        lastOrderId: long_1.default.UZERO,
        lastPrice: "",
        currentBatchId: long_1.default.UZERO,
    };
}
exports.Pair = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.baseCoinDenom !== "") {
            writer.uint32(18).string(message.baseCoinDenom);
        }
        if (message.quoteCoinDenom !== "") {
            writer.uint32(26).string(message.quoteCoinDenom);
        }
        if (message.escrowAddress !== "") {
            writer.uint32(34).string(message.escrowAddress);
        }
        if (!message.lastOrderId.isZero()) {
            writer.uint32(40).uint64(message.lastOrderId);
        }
        if (message.lastPrice !== "") {
            writer.uint32(50).string(message.lastPrice);
        }
        if (!message.currentBatchId.isZero()) {
            writer.uint32(56).uint64(message.currentBatchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.baseCoinDenom = reader.string();
                    break;
                case 3:
                    message.quoteCoinDenom = reader.string();
                    break;
                case 4:
                    message.escrowAddress = reader.string();
                    break;
                case 5:
                    message.lastOrderId = reader.uint64();
                    break;
                case 6:
                    message.lastPrice = reader.string();
                    break;
                case 7:
                    message.currentBatchId = reader.uint64();
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
            baseCoinDenom: isSet(object.baseCoinDenom)
                ? String(object.baseCoinDenom)
                : "",
            quoteCoinDenom: isSet(object.quoteCoinDenom)
                ? String(object.quoteCoinDenom)
                : "",
            escrowAddress: isSet(object.escrowAddress)
                ? String(object.escrowAddress)
                : "",
            lastOrderId: isSet(object.lastOrderId)
                ? long_1.default.fromString(object.lastOrderId)
                : long_1.default.UZERO,
            lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
            currentBatchId: isSet(object.currentBatchId)
                ? long_1.default.fromString(object.currentBatchId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.baseCoinDenom !== undefined &&
            (obj.baseCoinDenom = message.baseCoinDenom);
        message.quoteCoinDenom !== undefined &&
            (obj.quoteCoinDenom = message.quoteCoinDenom);
        message.escrowAddress !== undefined &&
            (obj.escrowAddress = message.escrowAddress);
        message.lastOrderId !== undefined &&
            (obj.lastOrderId = (message.lastOrderId || long_1.default.UZERO).toString());
        message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
        message.currentBatchId !== undefined &&
            (obj.currentBatchId = (message.currentBatchId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePair();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.baseCoinDenom = (_a = object.baseCoinDenom) !== null && _a !== void 0 ? _a : "";
        message.quoteCoinDenom = (_b = object.quoteCoinDenom) !== null && _b !== void 0 ? _b : "";
        message.escrowAddress = (_c = object.escrowAddress) !== null && _c !== void 0 ? _c : "";
        message.lastOrderId =
            object.lastOrderId !== undefined && object.lastOrderId !== null
                ? long_1.default.fromValue(object.lastOrderId)
                : long_1.default.UZERO;
        message.lastPrice = (_d = object.lastPrice) !== null && _d !== void 0 ? _d : "";
        message.currentBatchId =
            object.currentBatchId !== undefined && object.currentBatchId !== null
                ? long_1.default.fromValue(object.currentBatchId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBasePool() {
    return {
        id: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        reserveAddress: "",
        poolCoinDenom: "",
        lastDepositRequestId: long_1.default.UZERO,
        lastWithdrawRequestId: long_1.default.UZERO,
        disabled: false,
    };
}
exports.Pool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.reserveAddress !== "") {
            writer.uint32(26).string(message.reserveAddress);
        }
        if (message.poolCoinDenom !== "") {
            writer.uint32(34).string(message.poolCoinDenom);
        }
        if (!message.lastDepositRequestId.isZero()) {
            writer.uint32(40).uint64(message.lastDepositRequestId);
        }
        if (!message.lastWithdrawRequestId.isZero()) {
            writer.uint32(48).uint64(message.lastWithdrawRequestId);
        }
        if (message.disabled === true) {
            writer.uint32(56).bool(message.disabled);
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
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.reserveAddress = reader.string();
                    break;
                case 4:
                    message.poolCoinDenom = reader.string();
                    break;
                case 5:
                    message.lastDepositRequestId = reader.uint64();
                    break;
                case 6:
                    message.lastWithdrawRequestId = reader.uint64();
                    break;
                case 7:
                    message.disabled = reader.bool();
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
            pairId: isSet(object.pairId)
                ? long_1.default.fromString(object.pairId)
                : long_1.default.UZERO,
            reserveAddress: isSet(object.reserveAddress)
                ? String(object.reserveAddress)
                : "",
            poolCoinDenom: isSet(object.poolCoinDenom)
                ? String(object.poolCoinDenom)
                : "",
            lastDepositRequestId: isSet(object.lastDepositRequestId)
                ? long_1.default.fromString(object.lastDepositRequestId)
                : long_1.default.UZERO,
            lastWithdrawRequestId: isSet(object.lastWithdrawRequestId)
                ? long_1.default.fromString(object.lastWithdrawRequestId)
                : long_1.default.UZERO,
            disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.reserveAddress !== undefined &&
            (obj.reserveAddress = message.reserveAddress);
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        message.lastDepositRequestId !== undefined &&
            (obj.lastDepositRequestId = (message.lastDepositRequestId || long_1.default.UZERO).toString());
        message.lastWithdrawRequestId !== undefined &&
            (obj.lastWithdrawRequestId = (message.lastWithdrawRequestId || long_1.default.UZERO).toString());
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePool();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.reserveAddress = (_a = object.reserveAddress) !== null && _a !== void 0 ? _a : "";
        message.poolCoinDenom = (_b = object.poolCoinDenom) !== null && _b !== void 0 ? _b : "";
        message.lastDepositRequestId =
            object.lastDepositRequestId !== undefined &&
                object.lastDepositRequestId !== null
                ? long_1.default.fromValue(object.lastDepositRequestId)
                : long_1.default.UZERO;
        message.lastWithdrawRequestId =
            object.lastWithdrawRequestId !== undefined &&
                object.lastWithdrawRequestId !== null
                ? long_1.default.fromValue(object.lastWithdrawRequestId)
                : long_1.default.UZERO;
        message.disabled = (_c = object.disabled) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseDepositRequest() {
    return {
        id: long_1.default.UZERO,
        poolId: long_1.default.UZERO,
        msgHeight: long_1.default.ZERO,
        depositor: "",
        depositCoins: [],
        acceptedCoins: [],
        mintedPoolCoin: undefined,
        status: 0,
    };
}
exports.DepositRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (!message.msgHeight.isZero()) {
            writer.uint32(24).int64(message.msgHeight);
        }
        if (message.depositor !== "") {
            writer.uint32(34).string(message.depositor);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.acceptedCoins) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.mintedPoolCoin !== undefined) {
            coin_1.Coin.encode(message.mintedPoolCoin, writer.uint32(58).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.msgHeight = reader.int64();
                    break;
                case 4:
                    message.depositor = reader.string();
                    break;
                case 5:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.acceptedCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.mintedPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.status = reader.int32();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            depositCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.depositCoins)
                ? object.depositCoins.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            acceptedCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.acceptedCoins)
                ? object.acceptedCoins.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            mintedPoolCoin: isSet(object.mintedPoolCoin)
                ? coin_1.Coin.fromJSON(object.mintedPoolCoin)
                : undefined,
            status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        if (message.acceptedCoins) {
            obj.acceptedCoins = message.acceptedCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.acceptedCoins = [];
        }
        message.mintedPoolCoin !== undefined &&
            (obj.mintedPoolCoin = message.mintedPoolCoin
                ? coin_1.Coin.toJSON(message.mintedPoolCoin)
                : undefined);
        message.status !== undefined &&
            (obj.status = requestStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDepositRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO;
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        message.depositCoins =
            ((_b = object.depositCoins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.acceptedCoins =
            ((_c = object.acceptedCoins) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.mintedPoolCoin =
            object.mintedPoolCoin !== undefined && object.mintedPoolCoin !== null
                ? coin_1.Coin.fromPartial(object.mintedPoolCoin)
                : undefined;
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseWithdrawRequest() {
    return {
        id: long_1.default.UZERO,
        poolId: long_1.default.UZERO,
        msgHeight: long_1.default.ZERO,
        withdrawer: "",
        poolCoin: undefined,
        withdrawnCoins: [],
        status: 0,
    };
}
exports.WithdrawRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (!message.msgHeight.isZero()) {
            writer.uint32(24).int64(message.msgHeight);
        }
        if (message.withdrawer !== "") {
            writer.uint32(34).string(message.withdrawer);
        }
        if (message.poolCoin !== undefined) {
            coin_1.Coin.encode(message.poolCoin, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.withdrawnCoins) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.msgHeight = reader.int64();
                    break;
                case 4:
                    message.withdrawer = reader.string();
                    break;
                case 5:
                    message.poolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.withdrawnCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.status = reader.int32();
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO,
            withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
            poolCoin: isSet(object.poolCoin)
                ? coin_1.Coin.fromJSON(object.poolCoin)
                : undefined,
            withdrawnCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.withdrawnCoins)
                ? object.withdrawnCoins.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
        message.poolCoin !== undefined &&
            (obj.poolCoin = message.poolCoin
                ? coin_1.Coin.toJSON(message.poolCoin)
                : undefined);
        if (message.withdrawnCoins) {
            obj.withdrawnCoins = message.withdrawnCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.withdrawnCoins = [];
        }
        message.status !== undefined &&
            (obj.status = requestStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseWithdrawRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO;
        message.withdrawer = (_a = object.withdrawer) !== null && _a !== void 0 ? _a : "";
        message.poolCoin =
            object.poolCoin !== undefined && object.poolCoin !== null
                ? coin_1.Coin.fromPartial(object.poolCoin)
                : undefined;
        message.withdrawnCoins =
            ((_b = object.withdrawnCoins) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseOrder() {
    return {
        id: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        msgHeight: long_1.default.ZERO,
        orderer: "",
        direction: 0,
        offerCoin: undefined,
        remainingOfferCoin: undefined,
        receivedCoin: undefined,
        price: "",
        amount: "",
        openAmount: "",
        batchId: long_1.default.UZERO,
        expireAt: undefined,
        status: 0,
    };
}
exports.Order = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (!message.msgHeight.isZero()) {
            writer.uint32(24).int64(message.msgHeight);
        }
        if (message.orderer !== "") {
            writer.uint32(34).string(message.orderer);
        }
        if (message.direction !== 0) {
            writer.uint32(40).int32(message.direction);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(50).fork()).ldelim();
        }
        if (message.remainingOfferCoin !== undefined) {
            coin_1.Coin.encode(message.remainingOfferCoin, writer.uint32(58).fork()).ldelim();
        }
        if (message.receivedCoin !== undefined) {
            coin_1.Coin.encode(message.receivedCoin, writer.uint32(66).fork()).ldelim();
        }
        if (message.price !== "") {
            writer.uint32(74).string(message.price);
        }
        if (message.amount !== "") {
            writer.uint32(82).string(message.amount);
        }
        if (message.openAmount !== "") {
            writer.uint32(90).string(message.openAmount);
        }
        if (!message.batchId.isZero()) {
            writer.uint32(96).uint64(message.batchId);
        }
        if (message.expireAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expireAt), writer.uint32(106).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(112).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.msgHeight = reader.int64();
                    break;
                case 4:
                    message.orderer = reader.string();
                    break;
                case 5:
                    message.direction = reader.int32();
                    break;
                case 6:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.remainingOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.receivedCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.price = reader.string();
                    break;
                case 10:
                    message.amount = reader.string();
                    break;
                case 11:
                    message.openAmount = reader.string();
                    break;
                case 12:
                    message.batchId = reader.uint64();
                    break;
                case 13:
                    message.expireAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.status = reader.int32();
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
            pairId: isSet(object.pairId)
                ? long_1.default.fromString(object.pairId)
                : long_1.default.UZERO,
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO,
            orderer: isSet(object.orderer) ? String(object.orderer) : "",
            direction: isSet(object.direction)
                ? orderDirectionFromJSON(object.direction)
                : 0,
            offerCoin: isSet(object.offerCoin)
                ? coin_1.Coin.fromJSON(object.offerCoin)
                : undefined,
            remainingOfferCoin: isSet(object.remainingOfferCoin)
                ? coin_1.Coin.fromJSON(object.remainingOfferCoin)
                : undefined,
            receivedCoin: isSet(object.receivedCoin)
                ? coin_1.Coin.fromJSON(object.receivedCoin)
                : undefined,
            price: isSet(object.price) ? String(object.price) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            openAmount: isSet(object.openAmount) ? String(object.openAmount) : "",
            batchId: isSet(object.batchId)
                ? long_1.default.fromString(object.batchId)
                : long_1.default.UZERO,
            expireAt: isSet(object.expireAt)
                ? fromJsonTimestamp(object.expireAt)
                : undefined,
            status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.orderer !== undefined && (obj.orderer = message.orderer);
        message.direction !== undefined &&
            (obj.direction = orderDirectionToJSON(message.direction));
        message.offerCoin !== undefined &&
            (obj.offerCoin = message.offerCoin
                ? coin_1.Coin.toJSON(message.offerCoin)
                : undefined);
        message.remainingOfferCoin !== undefined &&
            (obj.remainingOfferCoin = message.remainingOfferCoin
                ? coin_1.Coin.toJSON(message.remainingOfferCoin)
                : undefined);
        message.receivedCoin !== undefined &&
            (obj.receivedCoin = message.receivedCoin
                ? coin_1.Coin.toJSON(message.receivedCoin)
                : undefined);
        message.price !== undefined && (obj.price = message.price);
        message.amount !== undefined && (obj.amount = message.amount);
        message.openAmount !== undefined && (obj.openAmount = message.openAmount);
        message.batchId !== undefined &&
            (obj.batchId = (message.batchId || long_1.default.UZERO).toString());
        message.expireAt !== undefined &&
            (obj.expireAt = message.expireAt.toISOString());
        message.status !== undefined &&
            (obj.status = orderStatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseOrder();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO;
        message.orderer = (_a = object.orderer) !== null && _a !== void 0 ? _a : "";
        message.direction = (_b = object.direction) !== null && _b !== void 0 ? _b : 0;
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? coin_1.Coin.fromPartial(object.offerCoin)
                : undefined;
        message.remainingOfferCoin =
            object.remainingOfferCoin !== undefined &&
                object.remainingOfferCoin !== null
                ? coin_1.Coin.fromPartial(object.remainingOfferCoin)
                : undefined;
        message.receivedCoin =
            object.receivedCoin !== undefined && object.receivedCoin !== null
                ? coin_1.Coin.fromPartial(object.receivedCoin)
                : undefined;
        message.price = (_c = object.price) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.openAmount = (_e = object.openAmount) !== null && _e !== void 0 ? _e : "";
        message.batchId =
            object.batchId !== undefined && object.batchId !== null
                ? long_1.default.fromValue(object.batchId)
                : long_1.default.UZERO;
        message.expireAt = (_f = object.expireAt) !== null && _f !== void 0 ? _f : undefined;
        message.status = (_g = object.status) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBaseDepositsMade() {
    return { coins: [] };
}
exports.DepositsMade = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositsMade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object === null || object === void 0 ? void 0 : object.coins)
                ? object.coins.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDepositsMade();
        message.coins = ((_a = object.coins) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueuedLiquidityProvider() {
    return { address: "", supplyProvided: [], createdAt: undefined };
}
exports.QueuedLiquidityProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.supplyProvided) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueuedLiquidityProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.supplyProvided.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            supplyProvided: Array.isArray(object === null || object === void 0 ? void 0 : object.supplyProvided)
                ? object.supplyProvided.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.supplyProvided) {
            obj.supplyProvided = message.supplyProvided.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.supplyProvided = [];
        }
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueuedLiquidityProvider();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.supplyProvided =
            ((_b = object.supplyProvided) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePoolLiquidityProvidersData() {
    return {
        poolId: long_1.default.UZERO,
        bondedLockIds: [],
        liquidityProviders: {},
        queuedLiquidityProviders: [],
    };
}
exports.PoolLiquidityProvidersData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        writer.uint32(18).fork();
        for (const v of message.bondedLockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        Object.entries(message.liquidityProviders).forEach(([key, value]) => {
            exports.PoolLiquidityProvidersData_LiquidityProvidersEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        for (const v of message.queuedLiquidityProviders) {
            exports.QueuedLiquidityProvider.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolLiquidityProvidersData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.bondedLockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.bondedLockIds.push(reader.uint64());
                    }
                    break;
                case 3:
                    const entry3 = exports.PoolLiquidityProvidersData_LiquidityProvidersEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.liquidityProviders[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.queuedLiquidityProviders.push(exports.QueuedLiquidityProvider.decode(reader, reader.uint32()));
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
            bondedLockIds: Array.isArray(object === null || object === void 0 ? void 0 : object.bondedLockIds)
                ? object.bondedLockIds.map((e) => long_1.default.fromString(e))
                : [],
            liquidityProviders: isObject(object.liquidityProviders)
                ? Object.entries(object.liquidityProviders).reduce((acc, [key, value]) => {
                    acc[key] = exports.DepositsMade.fromJSON(value);
                    return acc;
                }, {})
                : {},
            queuedLiquidityProviders: Array.isArray(object === null || object === void 0 ? void 0 : object.queuedLiquidityProviders)
                ? object.queuedLiquidityProviders.map((e) => exports.QueuedLiquidityProvider.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.bondedLockIds) {
            obj.bondedLockIds = message.bondedLockIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.bondedLockIds = [];
        }
        obj.liquidityProviders = {};
        if (message.liquidityProviders) {
            Object.entries(message.liquidityProviders).forEach(([k, v]) => {
                obj.liquidityProviders[k] = exports.DepositsMade.toJSON(v);
            });
        }
        if (message.queuedLiquidityProviders) {
            obj.queuedLiquidityProviders = message.queuedLiquidityProviders.map((e) => e ? exports.QueuedLiquidityProvider.toJSON(e) : undefined);
        }
        else {
            obj.queuedLiquidityProviders = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePoolLiquidityProvidersData();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.bondedLockIds =
            ((_a = object.bondedLockIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.liquidityProviders = Object.entries((_b = object.liquidityProviders) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.DepositsMade.fromPartial(value);
            }
            return acc;
        }, {});
        message.queuedLiquidityProviders =
            ((_c = object.queuedLiquidityProviders) === null || _c === void 0 ? void 0 : _c.map((e) => exports.QueuedLiquidityProvider.fromPartial(e))) || [];
        return message;
    },
};
function createBasePoolLiquidityProvidersData_LiquidityProvidersEntry() {
    return { key: "", value: undefined };
}
exports.PoolLiquidityProvidersData_LiquidityProvidersEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.DepositsMade.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolLiquidityProvidersData_LiquidityProvidersEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.DepositsMade.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value)
                ? exports.DepositsMade.fromJSON(object.value)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.DepositsMade.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePoolLiquidityProvidersData_LiquidityProvidersEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.DepositsMade.fromPartial(object.value)
                : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=liquidity.js.map