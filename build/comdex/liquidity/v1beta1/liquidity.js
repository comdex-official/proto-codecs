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
exports.QueuedFarmer = exports.QueuedCoin = exports.ActiveFarmer = exports.Order = exports.WithdrawRequest = exports.DepositRequest = exports.Pool = exports.Pair = exports.addressTypeToJSON = exports.addressTypeFromJSON = exports.AddressType = exports.orderStatusToJSON = exports.orderStatusFromJSON = exports.OrderStatus = exports.requestStatusToJSON = exports.requestStatusFromJSON = exports.RequestStatus = exports.orderDirectionToJSON = exports.orderDirectionFromJSON = exports.OrderDirection = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
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
        case OrderDirection.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
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
        case RequestStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
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
        case OrderStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
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
        case AddressType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.addressTypeToJSON = addressTypeToJSON;
function createBasePair() {
    return {
        id: long_1.default.UZERO,
        baseCoinDenom: "",
        quoteCoinDenom: "",
        escrowAddress: "",
        lastOrderId: long_1.default.UZERO,
        lastPrice: "",
        currentBatchId: long_1.default.UZERO,
        swapFeeCollectorAddress: "",
        appId: long_1.default.UZERO,
    };
}
exports.Pair = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (message.swapFeeCollectorAddress !== "") {
            writer.uint32(66).string(message.swapFeeCollectorAddress);
        }
        if (!message.appId.isZero()) {
            writer.uint32(72).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                case 8:
                    message.swapFeeCollectorAddress = reader.string();
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
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
                ? long_1.default.fromValue(object.lastOrderId)
                : long_1.default.UZERO,
            lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
            currentBatchId: isSet(object.currentBatchId)
                ? long_1.default.fromValue(object.currentBatchId)
                : long_1.default.UZERO,
            swapFeeCollectorAddress: isSet(object.swapFeeCollectorAddress)
                ? String(object.swapFeeCollectorAddress)
                : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
        message.swapFeeCollectorAddress !== undefined &&
            (obj.swapFeeCollectorAddress = message.swapFeeCollectorAddress);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
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
        message.swapFeeCollectorAddress = (_e = object.swapFeeCollectorAddress) !== null && _e !== void 0 ? _e : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
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
        appId: long_1.default.UZERO,
    };
}
exports.Pool = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            reserveAddress: isSet(object.reserveAddress)
                ? String(object.reserveAddress)
                : "",
            poolCoinDenom: isSet(object.poolCoinDenom)
                ? String(object.poolCoinDenom)
                : "",
            lastDepositRequestId: isSet(object.lastDepositRequestId)
                ? long_1.default.fromValue(object.lastDepositRequestId)
                : long_1.default.UZERO,
            lastWithdrawRequestId: isSet(object.lastWithdrawRequestId)
                ? long_1.default.fromValue(object.lastWithdrawRequestId)
                : long_1.default.UZERO,
            disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
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
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
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
        appId: long_1.default.UZERO,
    };
}
exports.DepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (!message.appId.isZero()) {
            writer.uint32(72).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromValue(object.msgHeight)
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
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
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
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
        appId: long_1.default.UZERO,
    };
}
exports.WithdrawRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromValue(object.msgHeight)
                : long_1.default.ZERO,
            withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
            poolCoin: isSet(object.poolCoin)
                ? coin_1.Coin.fromJSON(object.poolCoin)
                : undefined,
            withdrawnCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.withdrawnCoins)
                ? object.withdrawnCoins.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            status: isSet(object.status) ? requestStatusFromJSON(object.status) : 0,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
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
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
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
        appId: long_1.default.UZERO,
    };
}
exports.Order = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (!message.appId.isZero()) {
            writer.uint32(120).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                case 15:
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            msgHeight: isSet(object.msgHeight)
                ? long_1.default.fromValue(object.msgHeight)
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
                ? long_1.default.fromValue(object.batchId)
                : long_1.default.UZERO,
            expireAt: isSet(object.expireAt)
                ? fromJsonTimestamp(object.expireAt)
                : undefined,
            status: isSet(object.status) ? orderStatusFromJSON(object.status) : 0,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
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
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
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
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseActiveFarmer() {
    return {
        appId: long_1.default.UZERO,
        poolId: long_1.default.UZERO,
        farmer: "",
        farmedPoolCoin: undefined,
    };
}
exports.ActiveFarmer = {
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
        if (message.farmedPoolCoin !== undefined) {
            coin_1.Coin.encode(message.farmedPoolCoin, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveFarmer();
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
                    message.farmedPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
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
            farmedPoolCoin: isSet(object.farmedPoolCoin)
                ? coin_1.Coin.fromJSON(object.farmedPoolCoin)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.farmer !== undefined && (obj.farmer = message.farmer);
        message.farmedPoolCoin !== undefined &&
            (obj.farmedPoolCoin = message.farmedPoolCoin
                ? coin_1.Coin.toJSON(message.farmedPoolCoin)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseActiveFarmer();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.farmer = (_a = object.farmer) !== null && _a !== void 0 ? _a : "";
        message.farmedPoolCoin =
            object.farmedPoolCoin !== undefined && object.farmedPoolCoin !== null
                ? coin_1.Coin.fromPartial(object.farmedPoolCoin)
                : undefined;
        return message;
    },
};
function createBaseQueuedCoin() {
    return { farmedPoolCoin: undefined, createdAt: undefined };
}
exports.QueuedCoin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.farmedPoolCoin !== undefined) {
            coin_1.Coin.encode(message.farmedPoolCoin, writer.uint32(10).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueuedCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.farmedPoolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
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
            farmedPoolCoin: isSet(object.farmedPoolCoin)
                ? coin_1.Coin.fromJSON(object.farmedPoolCoin)
                : undefined,
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.farmedPoolCoin !== undefined &&
            (obj.farmedPoolCoin = message.farmedPoolCoin
                ? coin_1.Coin.toJSON(message.farmedPoolCoin)
                : undefined);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueuedCoin();
        message.farmedPoolCoin =
            object.farmedPoolCoin !== undefined && object.farmedPoolCoin !== null
                ? coin_1.Coin.fromPartial(object.farmedPoolCoin)
                : undefined;
        message.createdAt = (_a = object.createdAt) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseQueuedFarmer() {
    return { appId: long_1.default.UZERO, poolId: long_1.default.UZERO, farmer: "", queudCoins: [] };
}
exports.QueuedFarmer = {
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
        for (const v of message.queudCoins) {
            exports.QueuedCoin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueuedFarmer();
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
                    message.queudCoins.push(exports.QueuedCoin.decode(reader, reader.uint32()));
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
            queudCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.queudCoins)
                ? object.queudCoins.map((e) => exports.QueuedCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.farmer !== undefined && (obj.farmer = message.farmer);
        if (message.queudCoins) {
            obj.queudCoins = message.queudCoins.map((e) => e ? exports.QueuedCoin.toJSON(e) : undefined);
        }
        else {
            obj.queudCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueuedFarmer();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.farmer = (_a = object.farmer) !== null && _a !== void 0 ? _a : "";
        message.queudCoins =
            ((_b = object.queudCoins) === null || _b === void 0 ? void 0 : _b.map((e) => exports.QueuedCoin.fromPartial(e))) || [];
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=liquidity.js.map