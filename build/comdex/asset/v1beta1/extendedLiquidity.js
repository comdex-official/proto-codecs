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
exports.ExtendedPairLiquidity = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseExtendedPairLiquidity() {
    return {
        pairId: long_1.default.UZERO,
        currentBatchId: long_1.default.UZERO,
        escrowAddress: "",
        lastOrderId: long_1.default.UZERO,
        lastPrice: "",
        quoteCoinDenom: "",
    };
}
exports.ExtendedPairLiquidity = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.pairId.isZero()) {
            writer.uint32(8).uint64(message.pairId);
        }
        if (!message.currentBatchId.isZero()) {
            writer.uint32(16).uint64(message.currentBatchId);
        }
        if (message.escrowAddress !== "") {
            writer.uint32(26).string(message.escrowAddress);
        }
        if (!message.lastOrderId.isZero()) {
            writer.uint32(32).uint64(message.lastOrderId);
        }
        if (message.lastPrice !== "") {
            writer.uint32(42).string(message.lastPrice);
        }
        if (message.quoteCoinDenom !== "") {
            writer.uint32(50).string(message.quoteCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairLiquidity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = reader.uint64();
                    break;
                case 2:
                    message.currentBatchId = reader.uint64();
                    break;
                case 3:
                    message.escrowAddress = reader.string();
                    break;
                case 4:
                    message.lastOrderId = reader.uint64();
                    break;
                case 5:
                    message.lastPrice = reader.string();
                    break;
                case 6:
                    message.quoteCoinDenom = reader.string();
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
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            currentBatchId: isSet(object.currentBatchId)
                ? long_1.default.fromValue(object.currentBatchId)
                : long_1.default.UZERO,
            escrowAddress: isSet(object.escrowAddress)
                ? String(object.escrowAddress)
                : "",
            lastOrderId: isSet(object.lastOrderId)
                ? long_1.default.fromValue(object.lastOrderId)
                : long_1.default.UZERO,
            lastPrice: isSet(object.lastPrice) ? String(object.lastPrice) : "",
            quoteCoinDenom: isSet(object.quoteCoinDenom)
                ? String(object.quoteCoinDenom)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.currentBatchId !== undefined &&
            (obj.currentBatchId = (message.currentBatchId || long_1.default.UZERO).toString());
        message.escrowAddress !== undefined &&
            (obj.escrowAddress = message.escrowAddress);
        message.lastOrderId !== undefined &&
            (obj.lastOrderId = (message.lastOrderId || long_1.default.UZERO).toString());
        message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
        message.quoteCoinDenom !== undefined &&
            (obj.quoteCoinDenom = message.quoteCoinDenom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExtendedPairLiquidity();
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.currentBatchId =
            object.currentBatchId !== undefined && object.currentBatchId !== null
                ? long_1.default.fromValue(object.currentBatchId)
                : long_1.default.UZERO;
        message.escrowAddress = (_a = object.escrowAddress) !== null && _a !== void 0 ? _a : "";
        message.lastOrderId =
            object.lastOrderId !== undefined && object.lastOrderId !== null
                ? long_1.default.fromValue(object.lastOrderId)
                : long_1.default.UZERO;
        message.lastPrice = (_b = object.lastPrice) !== null && _b !== void 0 ? _b : "";
        message.quoteCoinDenom = (_c = object.quoteCoinDenom) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=extendedLiquidity.js.map