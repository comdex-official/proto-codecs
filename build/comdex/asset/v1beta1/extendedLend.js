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
exports.ExtendedPairLend = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseExtendedPairLend() {
    return {
        id: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        moduleAcc: "",
        baseBorrowRateAsset1: "",
        baseLendRateAsset1: "",
        baseBorrowRateAsset2: "",
        baseLendRateAsset2: "",
        currentBorrowRateAsset1: "",
        currentLendRateAsset1: "",
        currentBorrowRateAsset2: "",
        currentLendRateAsset2: "",
        productMappingId: long_1.default.UZERO,
    };
}
exports.ExtendedPairLend = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.moduleAcc !== "") {
            writer.uint32(26).string(message.moduleAcc);
        }
        if (message.baseBorrowRateAsset1 !== "") {
            writer.uint32(34).string(message.baseBorrowRateAsset1);
        }
        if (message.baseLendRateAsset1 !== "") {
            writer.uint32(42).string(message.baseLendRateAsset1);
        }
        if (message.baseBorrowRateAsset2 !== "") {
            writer.uint32(50).string(message.baseBorrowRateAsset2);
        }
        if (message.baseLendRateAsset2 !== "") {
            writer.uint32(58).string(message.baseLendRateAsset2);
        }
        if (message.currentBorrowRateAsset1 !== "") {
            writer.uint32(66).string(message.currentBorrowRateAsset1);
        }
        if (message.currentLendRateAsset1 !== "") {
            writer.uint32(74).string(message.currentLendRateAsset1);
        }
        if (message.currentBorrowRateAsset2 !== "") {
            writer.uint32(82).string(message.currentBorrowRateAsset2);
        }
        if (message.currentLendRateAsset2 !== "") {
            writer.uint32(90).string(message.currentLendRateAsset2);
        }
        if (!message.productMappingId.isZero()) {
            writer.uint32(96).uint64(message.productMappingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedPairLend();
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
                    message.moduleAcc = reader.string();
                    break;
                case 4:
                    message.baseBorrowRateAsset1 = reader.string();
                    break;
                case 5:
                    message.baseLendRateAsset1 = reader.string();
                    break;
                case 6:
                    message.baseBorrowRateAsset2 = reader.string();
                    break;
                case 7:
                    message.baseLendRateAsset2 = reader.string();
                    break;
                case 8:
                    message.currentBorrowRateAsset1 = reader.string();
                    break;
                case 9:
                    message.currentLendRateAsset1 = reader.string();
                    break;
                case 10:
                    message.currentBorrowRateAsset2 = reader.string();
                    break;
                case 11:
                    message.currentLendRateAsset2 = reader.string();
                    break;
                case 12:
                    message.productMappingId = reader.uint64();
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
            moduleAcc: isSet(object.moduleAcc) ? String(object.moduleAcc) : "",
            baseBorrowRateAsset1: isSet(object.baseBorrowRateAsset1)
                ? String(object.baseBorrowRateAsset1)
                : "",
            baseLendRateAsset1: isSet(object.baseLendRateAsset1)
                ? String(object.baseLendRateAsset1)
                : "",
            baseBorrowRateAsset2: isSet(object.baseBorrowRateAsset2)
                ? String(object.baseBorrowRateAsset2)
                : "",
            baseLendRateAsset2: isSet(object.baseLendRateAsset2)
                ? String(object.baseLendRateAsset2)
                : "",
            currentBorrowRateAsset1: isSet(object.currentBorrowRateAsset1)
                ? String(object.currentBorrowRateAsset1)
                : "",
            currentLendRateAsset1: isSet(object.currentLendRateAsset1)
                ? String(object.currentLendRateAsset1)
                : "",
            currentBorrowRateAsset2: isSet(object.currentBorrowRateAsset2)
                ? String(object.currentBorrowRateAsset2)
                : "",
            currentLendRateAsset2: isSet(object.currentLendRateAsset2)
                ? String(object.currentLendRateAsset2)
                : "",
            productMappingId: isSet(object.productMappingId)
                ? long_1.default.fromValue(object.productMappingId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.moduleAcc !== undefined && (obj.moduleAcc = message.moduleAcc);
        message.baseBorrowRateAsset1 !== undefined &&
            (obj.baseBorrowRateAsset1 = message.baseBorrowRateAsset1);
        message.baseLendRateAsset1 !== undefined &&
            (obj.baseLendRateAsset1 = message.baseLendRateAsset1);
        message.baseBorrowRateAsset2 !== undefined &&
            (obj.baseBorrowRateAsset2 = message.baseBorrowRateAsset2);
        message.baseLendRateAsset2 !== undefined &&
            (obj.baseLendRateAsset2 = message.baseLendRateAsset2);
        message.currentBorrowRateAsset1 !== undefined &&
            (obj.currentBorrowRateAsset1 = message.currentBorrowRateAsset1);
        message.currentLendRateAsset1 !== undefined &&
            (obj.currentLendRateAsset1 = message.currentLendRateAsset1);
        message.currentBorrowRateAsset2 !== undefined &&
            (obj.currentBorrowRateAsset2 = message.currentBorrowRateAsset2);
        message.currentLendRateAsset2 !== undefined &&
            (obj.currentLendRateAsset2 = message.currentLendRateAsset2);
        message.productMappingId !== undefined &&
            (obj.productMappingId = (message.productMappingId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseExtendedPairLend();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.moduleAcc = (_a = object.moduleAcc) !== null && _a !== void 0 ? _a : "";
        message.baseBorrowRateAsset1 = (_b = object.baseBorrowRateAsset1) !== null && _b !== void 0 ? _b : "";
        message.baseLendRateAsset1 = (_c = object.baseLendRateAsset1) !== null && _c !== void 0 ? _c : "";
        message.baseBorrowRateAsset2 = (_d = object.baseBorrowRateAsset2) !== null && _d !== void 0 ? _d : "";
        message.baseLendRateAsset2 = (_e = object.baseLendRateAsset2) !== null && _e !== void 0 ? _e : "";
        message.currentBorrowRateAsset1 = (_f = object.currentBorrowRateAsset1) !== null && _f !== void 0 ? _f : "";
        message.currentLendRateAsset1 = (_g = object.currentLendRateAsset1) !== null && _g !== void 0 ? _g : "";
        message.currentBorrowRateAsset2 = (_h = object.currentBorrowRateAsset2) !== null && _h !== void 0 ? _h : "";
        message.currentLendRateAsset2 = (_j = object.currentLendRateAsset2) !== null && _j !== void 0 ? _j : "";
        message.productMappingId =
            object.productMappingId !== undefined && object.productMappingId !== null
                ? long_1.default.fromValue(object.productMappingId)
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
//# sourceMappingURL=extendedLend.js.map