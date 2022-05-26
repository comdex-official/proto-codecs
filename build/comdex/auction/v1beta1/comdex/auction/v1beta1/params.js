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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseParams() {
    return {
        liquidationPenaltyPercent: "",
        auctionDiscountPercent: "",
        auctionDurationSeconds: long_1.default.UZERO,
        debtMintTokenDecreasePercentage: "",
        buffer: "",
        cusp: "",
        tau: "",
        dutchDecreasePercentage: "",
        chost: "",
        step: "",
        priceFunctionType: long_1.default.UZERO,
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.liquidationPenaltyPercent !== "") {
            writer.uint32(10).string(message.liquidationPenaltyPercent);
        }
        if (message.auctionDiscountPercent !== "") {
            writer.uint32(18).string(message.auctionDiscountPercent);
        }
        if (!message.auctionDurationSeconds.isZero()) {
            writer.uint32(24).uint64(message.auctionDurationSeconds);
        }
        if (message.debtMintTokenDecreasePercentage !== "") {
            writer.uint32(34).string(message.debtMintTokenDecreasePercentage);
        }
        if (message.buffer !== "") {
            writer.uint32(42).string(message.buffer);
        }
        if (message.cusp !== "") {
            writer.uint32(50).string(message.cusp);
        }
        if (message.tau !== "") {
            writer.uint32(58).string(message.tau);
        }
        if (message.dutchDecreasePercentage !== "") {
            writer.uint32(66).string(message.dutchDecreasePercentage);
        }
        if (message.chost !== "") {
            writer.uint32(74).string(message.chost);
        }
        if (message.step !== "") {
            writer.uint32(82).string(message.step);
        }
        if (!message.priceFunctionType.isZero()) {
            writer.uint32(88).uint64(message.priceFunctionType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidationPenaltyPercent = reader.string();
                    break;
                case 2:
                    message.auctionDiscountPercent = reader.string();
                    break;
                case 3:
                    message.auctionDurationSeconds = reader.uint64();
                    break;
                case 4:
                    message.debtMintTokenDecreasePercentage = reader.string();
                    break;
                case 5:
                    message.buffer = reader.string();
                    break;
                case 6:
                    message.cusp = reader.string();
                    break;
                case 7:
                    message.tau = reader.string();
                    break;
                case 8:
                    message.dutchDecreasePercentage = reader.string();
                    break;
                case 9:
                    message.chost = reader.string();
                    break;
                case 10:
                    message.step = reader.string();
                    break;
                case 11:
                    message.priceFunctionType = reader.uint64();
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
            liquidationPenaltyPercent: isSet(object.liquidationPenaltyPercent)
                ? String(object.liquidationPenaltyPercent)
                : "",
            auctionDiscountPercent: isSet(object.auctionDiscountPercent)
                ? String(object.auctionDiscountPercent)
                : "",
            auctionDurationSeconds: isSet(object.auctionDurationSeconds)
                ? long_1.default.fromValue(object.auctionDurationSeconds)
                : long_1.default.UZERO,
            debtMintTokenDecreasePercentage: isSet(object.debtMintTokenDecreasePercentage)
                ? String(object.debtMintTokenDecreasePercentage)
                : "",
            buffer: isSet(object.buffer) ? String(object.buffer) : "",
            cusp: isSet(object.cusp) ? String(object.cusp) : "",
            tau: isSet(object.tau) ? String(object.tau) : "",
            dutchDecreasePercentage: isSet(object.dutchDecreasePercentage)
                ? String(object.dutchDecreasePercentage)
                : "",
            chost: isSet(object.chost) ? String(object.chost) : "",
            step: isSet(object.step) ? String(object.step) : "",
            priceFunctionType: isSet(object.priceFunctionType)
                ? long_1.default.fromValue(object.priceFunctionType)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.liquidationPenaltyPercent !== undefined &&
            (obj.liquidationPenaltyPercent = message.liquidationPenaltyPercent);
        message.auctionDiscountPercent !== undefined &&
            (obj.auctionDiscountPercent = message.auctionDiscountPercent);
        message.auctionDurationSeconds !== undefined &&
            (obj.auctionDurationSeconds = (message.auctionDurationSeconds || long_1.default.UZERO).toString());
        message.debtMintTokenDecreasePercentage !== undefined &&
            (obj.debtMintTokenDecreasePercentage =
                message.debtMintTokenDecreasePercentage);
        message.buffer !== undefined && (obj.buffer = message.buffer);
        message.cusp !== undefined && (obj.cusp = message.cusp);
        message.tau !== undefined && (obj.tau = message.tau);
        message.dutchDecreasePercentage !== undefined &&
            (obj.dutchDecreasePercentage = message.dutchDecreasePercentage);
        message.chost !== undefined && (obj.chost = message.chost);
        message.step !== undefined && (obj.step = message.step);
        message.priceFunctionType !== undefined &&
            (obj.priceFunctionType = (message.priceFunctionType || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseParams();
        message.liquidationPenaltyPercent = (_a = object.liquidationPenaltyPercent) !== null && _a !== void 0 ? _a : "";
        message.auctionDiscountPercent = (_b = object.auctionDiscountPercent) !== null && _b !== void 0 ? _b : "";
        message.auctionDurationSeconds =
            object.auctionDurationSeconds !== undefined &&
                object.auctionDurationSeconds !== null
                ? long_1.default.fromValue(object.auctionDurationSeconds)
                : long_1.default.UZERO;
        message.debtMintTokenDecreasePercentage =
            (_c = object.debtMintTokenDecreasePercentage) !== null && _c !== void 0 ? _c : "";
        message.buffer = (_d = object.buffer) !== null && _d !== void 0 ? _d : "";
        message.cusp = (_e = object.cusp) !== null && _e !== void 0 ? _e : "";
        message.tau = (_f = object.tau) !== null && _f !== void 0 ? _f : "";
        message.dutchDecreasePercentage = (_g = object.dutchDecreasePercentage) !== null && _g !== void 0 ? _g : "";
        message.chost = (_h = object.chost) !== null && _h !== void 0 ? _h : "";
        message.step = (_j = object.step) !== null && _j !== void 0 ? _j : "";
        message.priceFunctionType =
            object.priceFunctionType !== undefined &&
                object.priceFunctionType !== null
                ? long_1.default.fromValue(object.priceFunctionType)
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