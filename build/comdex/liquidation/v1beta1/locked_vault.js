"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedVault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("codec/google/protobuf/timestamp");
exports.protobufPackage = "comdex.liquidation.v1beta1";
function createBaseLockedVault() {
    return {
        id: long_1.default.UZERO,
        vaultId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        owner: "",
        amountIn: "",
        amountOut: "",
        initiator: "",
        isAuctionComplete: false,
        isAuctionInProgress: false,
        crAtLiquidation: "",
        currentCollateralisationRatio: "",
        collateralToBeAuctioned: "",
        liquidationTimestamp: undefined,
        selloffHistory: [],
    };
}
exports.LockedVault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.vaultId.isZero()) {
            writer.uint32(16).uint64(message.vaultId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(24).uint64(message.pairId);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.amountIn !== "") {
            writer.uint32(42).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(50).string(message.amountOut);
        }
        if (message.initiator !== "") {
            writer.uint32(58).string(message.initiator);
        }
        if (message.isAuctionComplete === true) {
            writer.uint32(64).bool(message.isAuctionComplete);
        }
        if (message.isAuctionInProgress === true) {
            writer.uint32(72).bool(message.isAuctionInProgress);
        }
        if (message.crAtLiquidation !== "") {
            writer.uint32(82).string(message.crAtLiquidation);
        }
        if (message.currentCollateralisationRatio !== "") {
            writer.uint32(90).string(message.currentCollateralisationRatio);
        }
        if (message.collateralToBeAuctioned !== "") {
            writer.uint32(98).string(message.collateralToBeAuctioned);
        }
        if (message.liquidationTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.liquidationTimestamp), writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.selloffHistory) {
            writer.uint32(114).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.vaultId = reader.uint64();
                    break;
                case 3:
                    message.pairId = reader.uint64();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.amountIn = reader.string();
                    break;
                case 6:
                    message.amountOut = reader.string();
                    break;
                case 7:
                    message.initiator = reader.string();
                    break;
                case 8:
                    message.isAuctionComplete = reader.bool();
                    break;
                case 9:
                    message.isAuctionInProgress = reader.bool();
                    break;
                case 10:
                    message.crAtLiquidation = reader.string();
                    break;
                case 11:
                    message.currentCollateralisationRatio = reader.string();
                    break;
                case 12:
                    message.collateralToBeAuctioned = reader.string();
                    break;
                case 13:
                    message.liquidationTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.selloffHistory.push(reader.string());
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
            vaultId: isSet(object.vaultId)
                ? long_1.default.fromString(object.vaultId)
                : long_1.default.UZERO,
            pairId: isSet(object.pairId)
                ? long_1.default.fromString(object.pairId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            initiator: isSet(object.initiator) ? String(object.initiator) : "",
            isAuctionComplete: isSet(object.isAuctionComplete)
                ? Boolean(object.isAuctionComplete)
                : false,
            isAuctionInProgress: isSet(object.isAuctionInProgress)
                ? Boolean(object.isAuctionInProgress)
                : false,
            crAtLiquidation: isSet(object.crAtLiquidation)
                ? String(object.crAtLiquidation)
                : "",
            currentCollateralisationRatio: isSet(object.currentCollateralisationRatio)
                ? String(object.currentCollateralisationRatio)
                : "",
            collateralToBeAuctioned: isSet(object.collateralToBeAuctioned)
                ? String(object.collateralToBeAuctioned)
                : "",
            liquidationTimestamp: isSet(object.liquidationTimestamp)
                ? fromJsonTimestamp(object.liquidationTimestamp)
                : undefined,
            selloffHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.selloffHistory)
                ? object.selloffHistory.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.vaultId !== undefined &&
            (obj.vaultId = (message.vaultId || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.isAuctionComplete !== undefined &&
            (obj.isAuctionComplete = message.isAuctionComplete);
        message.isAuctionInProgress !== undefined &&
            (obj.isAuctionInProgress = message.isAuctionInProgress);
        message.crAtLiquidation !== undefined &&
            (obj.crAtLiquidation = message.crAtLiquidation);
        message.currentCollateralisationRatio !== undefined &&
            (obj.currentCollateralisationRatio =
                message.currentCollateralisationRatio);
        message.collateralToBeAuctioned !== undefined &&
            (obj.collateralToBeAuctioned = message.collateralToBeAuctioned);
        message.liquidationTimestamp !== undefined &&
            (obj.liquidationTimestamp = message.liquidationTimestamp.toISOString());
        if (message.selloffHistory) {
            obj.selloffHistory = message.selloffHistory.map((e) => e);
        }
        else {
            obj.selloffHistory = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseLockedVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? long_1.default.fromValue(object.vaultId)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.amountIn = (_b = object.amountIn) !== null && _b !== void 0 ? _b : "";
        message.amountOut = (_c = object.amountOut) !== null && _c !== void 0 ? _c : "";
        message.initiator = (_d = object.initiator) !== null && _d !== void 0 ? _d : "";
        message.isAuctionComplete = (_e = object.isAuctionComplete) !== null && _e !== void 0 ? _e : false;
        message.isAuctionInProgress = (_f = object.isAuctionInProgress) !== null && _f !== void 0 ? _f : false;
        message.crAtLiquidation = (_g = object.crAtLiquidation) !== null && _g !== void 0 ? _g : "";
        message.currentCollateralisationRatio =
            (_h = object.currentCollateralisationRatio) !== null && _h !== void 0 ? _h : "";
        message.collateralToBeAuctioned = (_j = object.collateralToBeAuctioned) !== null && _j !== void 0 ? _j : "";
        message.liquidationTimestamp = (_k = object.liquidationTimestamp) !== null && _k !== void 0 ? _k : undefined;
        message.selloffHistory = ((_l = object.selloffHistory) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=locked_vault.js.map