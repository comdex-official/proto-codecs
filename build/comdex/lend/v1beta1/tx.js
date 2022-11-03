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
exports.MsgClientImpl = exports.MsgCalculateInterestAndRewardsResponse = exports.MsgFundModuleAccountsResponse = exports.MsgBorrowAlternateResponse = exports.MsgCloseBorrowResponse = exports.MsgDrawResponse = exports.MsgDepositBorrowResponse = exports.MsgRepayResponse = exports.MsgBorrowResponse = exports.MsgCloseLendResponse = exports.MsgDepositResponse = exports.MsgWithdrawResponse = exports.MsgLendResponse = exports.MsgCalculateInterestAndRewards = exports.MsgFundModuleAccounts = exports.MsgBorrowAlternate = exports.MsgCloseBorrow = exports.MsgDraw = exports.MsgDepositBorrow = exports.MsgRepay = exports.MsgBorrow = exports.MsgCloseLend = exports.MsgDeposit = exports.MsgWithdraw = exports.MsgLend = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseMsgLend() {
    return {
        lender: "",
        assetId: long_1.default.UZERO,
        amount: undefined,
        poolId: long_1.default.UZERO,
        appId: long_1.default.UZERO,
    };
}
exports.MsgLend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lender !== "") {
            writer.uint32(10).string(message.lender);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (!message.poolId.isZero()) {
            writer.uint32(32).uint64(message.poolId);
        }
        if (!message.appId.isZero()) {
            writer.uint32(40).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lender = reader.string();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.poolId = reader.uint64();
                    break;
                case 5:
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
            lender: isSet(object.lender) ? String(object.lender) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lender !== undefined && (obj.lender = message.lender);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgLend();
        message.lender = (_a = object.lender) !== null && _a !== void 0 ? _a : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgWithdraw() {
    return { lender: "", lendId: long_1.default.UZERO, amount: undefined };
}
exports.MsgWithdraw = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lender !== "") {
            writer.uint32(10).string(message.lender);
        }
        if (!message.lendId.isZero()) {
            writer.uint32(16).uint64(message.lendId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.lender = reader.string();
                    break;
                case 2:
                    message.lendId = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            lender: isSet(object.lender) ? String(object.lender) : "",
            lendId: isSet(object.lendId) ? long_1.default.fromValue(object.lendId) : long_1.default.UZERO,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lender !== undefined && (obj.lender = message.lender);
        message.lendId !== undefined &&
            (obj.lendId = (message.lendId || long_1.default.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdraw();
        message.lender = (_a = object.lender) !== null && _a !== void 0 ? _a : "";
        message.lendId =
            object.lendId !== undefined && object.lendId !== null
                ? long_1.default.fromValue(object.lendId)
                : long_1.default.UZERO;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgDeposit() {
    return { lender: "", lendId: long_1.default.UZERO, amount: undefined };
}
exports.MsgDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lender !== "") {
            writer.uint32(10).string(message.lender);
        }
        if (!message.lendId.isZero()) {
            writer.uint32(16).uint64(message.lendId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.lender = reader.string();
                    break;
                case 2:
                    message.lendId = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            lender: isSet(object.lender) ? String(object.lender) : "",
            lendId: isSet(object.lendId) ? long_1.default.fromValue(object.lendId) : long_1.default.UZERO,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lender !== undefined && (obj.lender = message.lender);
        message.lendId !== undefined &&
            (obj.lendId = (message.lendId || long_1.default.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDeposit();
        message.lender = (_a = object.lender) !== null && _a !== void 0 ? _a : "";
        message.lendId =
            object.lendId !== undefined && object.lendId !== null
                ? long_1.default.fromValue(object.lendId)
                : long_1.default.UZERO;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgCloseLend() {
    return { lender: "", lendId: long_1.default.UZERO };
}
exports.MsgCloseLend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lender !== "") {
            writer.uint32(10).string(message.lender);
        }
        if (!message.lendId.isZero()) {
            writer.uint32(16).uint64(message.lendId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lender = reader.string();
                    break;
                case 2:
                    message.lendId = reader.uint64();
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
            lender: isSet(object.lender) ? String(object.lender) : "",
            lendId: isSet(object.lendId) ? long_1.default.fromValue(object.lendId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lender !== undefined && (obj.lender = message.lender);
        message.lendId !== undefined &&
            (obj.lendId = (message.lendId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCloseLend();
        message.lender = (_a = object.lender) !== null && _a !== void 0 ? _a : "";
        message.lendId =
            object.lendId !== undefined && object.lendId !== null
                ? long_1.default.fromValue(object.lendId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgBorrow() {
    return {
        borrower: "",
        lendId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        isStableBorrow: false,
        amountIn: undefined,
        amountOut: undefined,
    };
}
exports.MsgBorrow = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (!message.lendId.isZero()) {
            writer.uint32(16).uint64(message.lendId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        if (message.isStableBorrow === true) {
            writer.uint32(32).bool(message.isStableBorrow);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(42).fork()).ldelim();
        }
        if (message.amountOut !== undefined) {
            coin_1.Coin.encode(message.amountOut, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.lendId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
                    break;
                case 4:
                    message.isStableBorrow = reader.bool();
                    break;
                case 5:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.amountOut = coin_1.Coin.decode(reader, reader.uint32());
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
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
            lendId: isSet(object.lendId) ? long_1.default.fromValue(object.lendId) : long_1.default.UZERO,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            isStableBorrow: isSet(object.isStableBorrow)
                ? Boolean(object.isStableBorrow)
                : false,
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            amountOut: isSet(object.amountOut)
                ? coin_1.Coin.fromJSON(object.amountOut)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrower !== undefined && (obj.borrower = message.borrower);
        message.lendId !== undefined &&
            (obj.lendId = (message.lendId || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.isStableBorrow !== undefined &&
            (obj.isStableBorrow = message.isStableBorrow);
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.amountOut !== undefined &&
            (obj.amountOut = message.amountOut
                ? coin_1.Coin.toJSON(message.amountOut)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBorrow();
        message.borrower = (_a = object.borrower) !== null && _a !== void 0 ? _a : "";
        message.lendId =
            object.lendId !== undefined && object.lendId !== null
                ? long_1.default.fromValue(object.lendId)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.isStableBorrow = (_b = object.isStableBorrow) !== null && _b !== void 0 ? _b : false;
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.amountOut =
            object.amountOut !== undefined && object.amountOut !== null
                ? coin_1.Coin.fromPartial(object.amountOut)
                : undefined;
        return message;
    },
};
function createBaseMsgRepay() {
    return { borrower: "", borrowId: long_1.default.UZERO, amount: undefined };
}
exports.MsgRepay = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (!message.borrowId.isZero()) {
            writer.uint32(16).uint64(message.borrowId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.borrowId = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
            borrowId: isSet(object.borrowId)
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrower !== undefined && (obj.borrower = message.borrower);
        message.borrowId !== undefined &&
            (obj.borrowId = (message.borrowId || long_1.default.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgRepay();
        message.borrower = (_a = object.borrower) !== null && _a !== void 0 ? _a : "";
        message.borrowId =
            object.borrowId !== undefined && object.borrowId !== null
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgDepositBorrow() {
    return { borrower: "", borrowId: long_1.default.UZERO, amount: undefined };
}
exports.MsgDepositBorrow = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (!message.borrowId.isZero()) {
            writer.uint32(16).uint64(message.borrowId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.borrowId = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
            borrowId: isSet(object.borrowId)
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrower !== undefined && (obj.borrower = message.borrower);
        message.borrowId !== undefined &&
            (obj.borrowId = (message.borrowId || long_1.default.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDepositBorrow();
        message.borrower = (_a = object.borrower) !== null && _a !== void 0 ? _a : "";
        message.borrowId =
            object.borrowId !== undefined && object.borrowId !== null
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgDraw() {
    return { borrower: "", borrowId: long_1.default.UZERO, amount: undefined };
}
exports.MsgDraw = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (!message.borrowId.isZero()) {
            writer.uint32(16).uint64(message.borrowId);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDraw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.borrowId = reader.uint64();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
            borrowId: isSet(object.borrowId)
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO,
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrower !== undefined && (obj.borrower = message.borrower);
        message.borrowId !== undefined &&
            (obj.borrowId = (message.borrowId || long_1.default.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDraw();
        message.borrower = (_a = object.borrower) !== null && _a !== void 0 ? _a : "";
        message.borrowId =
            object.borrowId !== undefined && object.borrowId !== null
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO;
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgCloseBorrow() {
    return { borrower: "", borrowId: long_1.default.UZERO };
}
exports.MsgCloseBorrow = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        if (!message.borrowId.isZero()) {
            writer.uint32(16).uint64(message.borrowId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBorrow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
                    break;
                case 2:
                    message.borrowId = reader.uint64();
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
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
            borrowId: isSet(object.borrowId)
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrower !== undefined && (obj.borrower = message.borrower);
        message.borrowId !== undefined &&
            (obj.borrowId = (message.borrowId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCloseBorrow();
        message.borrower = (_a = object.borrower) !== null && _a !== void 0 ? _a : "";
        message.borrowId =
            object.borrowId !== undefined && object.borrowId !== null
                ? long_1.default.fromValue(object.borrowId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgBorrowAlternate() {
    return {
        lender: "",
        assetId: long_1.default.UZERO,
        poolId: long_1.default.UZERO,
        amountIn: undefined,
        pairId: long_1.default.UZERO,
        isStableBorrow: false,
        amountOut: undefined,
        appId: long_1.default.UZERO,
    };
}
exports.MsgBorrowAlternate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.lender !== "") {
            writer.uint32(10).string(message.lender);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(24).uint64(message.poolId);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(34).fork()).ldelim();
        }
        if (!message.pairId.isZero()) {
            writer.uint32(40).uint64(message.pairId);
        }
        if (message.isStableBorrow === true) {
            writer.uint32(48).bool(message.isStableBorrow);
        }
        if (message.amountOut !== undefined) {
            coin_1.Coin.encode(message.amountOut, writer.uint32(58).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(64).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBorrowAlternate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lender = reader.string();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.poolId = reader.uint64();
                    break;
                case 4:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pairId = reader.uint64();
                    break;
                case 6:
                    message.isStableBorrow = reader.bool();
                    break;
                case 7:
                    message.amountOut = coin_1.Coin.decode(reader, reader.uint32());
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
            lender: isSet(object.lender) ? String(object.lender) : "",
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            isStableBorrow: isSet(object.isStableBorrow)
                ? Boolean(object.isStableBorrow)
                : false,
            amountOut: isSet(object.amountOut)
                ? coin_1.Coin.fromJSON(object.amountOut)
                : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lender !== undefined && (obj.lender = message.lender);
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.isStableBorrow !== undefined &&
            (obj.isStableBorrow = message.isStableBorrow);
        message.amountOut !== undefined &&
            (obj.amountOut = message.amountOut
                ? coin_1.Coin.toJSON(message.amountOut)
                : undefined);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgBorrowAlternate();
        message.lender = (_a = object.lender) !== null && _a !== void 0 ? _a : "";
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.isStableBorrow = (_b = object.isStableBorrow) !== null && _b !== void 0 ? _b : false;
        message.amountOut =
            object.amountOut !== undefined && object.amountOut !== null
                ? coin_1.Coin.fromPartial(object.amountOut)
                : undefined;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgFundModuleAccounts() {
    return {
        poolId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        lender: "",
        amount: undefined,
    };
}
exports.MsgFundModuleAccounts = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.lender !== "") {
            writer.uint32(26).string(message.lender);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundModuleAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.lender = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            lender: isSet(object.lender) ? String(object.lender) : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.lender !== undefined && (obj.lender = message.lender);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgFundModuleAccounts();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.lender = (_a = object.lender) !== null && _a !== void 0 ? _a : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgCalculateInterestAndRewards() {
    return { borrower: "" };
}
exports.MsgCalculateInterestAndRewards = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.borrower !== "") {
            writer.uint32(10).string(message.borrower);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCalculateInterestAndRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.borrower = reader.string();
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
            borrower: isSet(object.borrower) ? String(object.borrower) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.borrower !== undefined && (obj.borrower = message.borrower);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCalculateInterestAndRewards();
        message.borrower = (_a = object.borrower) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgLendResponse() {
    return {};
}
exports.MsgLendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLendResponse();
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
        const message = createBaseMsgLendResponse();
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
    fromPartial(_) {
        const message = createBaseMsgWithdrawResponse();
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
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
};
function createBaseMsgCloseLendResponse() {
    return {};
}
exports.MsgCloseLendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseLendResponse();
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
        const message = createBaseMsgCloseLendResponse();
        return message;
    },
};
function createBaseMsgBorrowResponse() {
    return {};
}
exports.MsgBorrowResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBorrowResponse();
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
        const message = createBaseMsgBorrowResponse();
        return message;
    },
};
function createBaseMsgRepayResponse() {
    return {};
}
exports.MsgRepayResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRepayResponse();
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
        const message = createBaseMsgRepayResponse();
        return message;
    },
};
function createBaseMsgDepositBorrowResponse() {
    return {};
}
exports.MsgDepositBorrowResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositBorrowResponse();
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
        const message = createBaseMsgDepositBorrowResponse();
        return message;
    },
};
function createBaseMsgDrawResponse() {
    return {};
}
exports.MsgDrawResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawResponse();
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
        const message = createBaseMsgDrawResponse();
        return message;
    },
};
function createBaseMsgCloseBorrowResponse() {
    return {};
}
exports.MsgCloseBorrowResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCloseBorrowResponse();
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
        const message = createBaseMsgCloseBorrowResponse();
        return message;
    },
};
function createBaseMsgBorrowAlternateResponse() {
    return {};
}
exports.MsgBorrowAlternateResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBorrowAlternateResponse();
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
        const message = createBaseMsgBorrowAlternateResponse();
        return message;
    },
};
function createBaseMsgFundModuleAccountsResponse() {
    return {};
}
exports.MsgFundModuleAccountsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundModuleAccountsResponse();
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
        const message = createBaseMsgFundModuleAccountsResponse();
        return message;
    },
};
function createBaseMsgCalculateInterestAndRewardsResponse() {
    return {};
}
exports.MsgCalculateInterestAndRewardsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCalculateInterestAndRewardsResponse();
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
        const message = createBaseMsgCalculateInterestAndRewardsResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Lend = this.Lend.bind(this);
        this.Withdraw = this.Withdraw.bind(this);
        this.Deposit = this.Deposit.bind(this);
        this.CloseLend = this.CloseLend.bind(this);
        this.Borrow = this.Borrow.bind(this);
        this.Repay = this.Repay.bind(this);
        this.DepositBorrow = this.DepositBorrow.bind(this);
        this.Draw = this.Draw.bind(this);
        this.CloseBorrow = this.CloseBorrow.bind(this);
        this.BorrowAlternate = this.BorrowAlternate.bind(this);
        this.FundModuleAccounts = this.FundModuleAccounts.bind(this);
        this.CalculateInterestAndRewards =
            this.CalculateInterestAndRewards.bind(this);
    }
    Lend(request) {
        const data = exports.MsgLend.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Lend", data);
        return promise.then((data) => exports.MsgLendResponse.decode(new _m0.Reader(data)));
    }
    Withdraw(request) {
        const data = exports.MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Withdraw", data);
        return promise.then((data) => exports.MsgWithdrawResponse.decode(new _m0.Reader(data)));
    }
    Deposit(request) {
        const data = exports.MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Deposit", data);
        return promise.then((data) => exports.MsgDepositResponse.decode(new _m0.Reader(data)));
    }
    CloseLend(request) {
        const data = exports.MsgCloseLend.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "CloseLend", data);
        return promise.then((data) => exports.MsgCloseLendResponse.decode(new _m0.Reader(data)));
    }
    Borrow(request) {
        const data = exports.MsgBorrow.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Borrow", data);
        return promise.then((data) => exports.MsgBorrowResponse.decode(new _m0.Reader(data)));
    }
    Repay(request) {
        const data = exports.MsgRepay.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Repay", data);
        return promise.then((data) => exports.MsgRepayResponse.decode(new _m0.Reader(data)));
    }
    DepositBorrow(request) {
        const data = exports.MsgDepositBorrow.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "DepositBorrow", data);
        return promise.then((data) => exports.MsgDepositBorrowResponse.decode(new _m0.Reader(data)));
    }
    Draw(request) {
        const data = exports.MsgDraw.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Draw", data);
        return promise.then((data) => exports.MsgDrawResponse.decode(new _m0.Reader(data)));
    }
    CloseBorrow(request) {
        const data = exports.MsgCloseBorrow.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "CloseBorrow", data);
        return promise.then((data) => exports.MsgCloseBorrowResponse.decode(new _m0.Reader(data)));
    }
    BorrowAlternate(request) {
        const data = exports.MsgBorrowAlternate.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "BorrowAlternate", data);
        return promise.then((data) => exports.MsgBorrowAlternateResponse.decode(new _m0.Reader(data)));
    }
    FundModuleAccounts(request) {
        const data = exports.MsgFundModuleAccounts.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "FundModuleAccounts", data);
        return promise.then((data) => exports.MsgFundModuleAccountsResponse.decode(new _m0.Reader(data)));
    }
    CalculateInterestAndRewards(request) {
        const data = exports.MsgCalculateInterestAndRewards.encode(request).finish();
        const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "CalculateInterestAndRewards", data);
        return promise.then((data) => exports.MsgCalculateInterestAndRewardsResponse.decode(new _m0.Reader(data)));
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