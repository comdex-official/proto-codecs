"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhitelistedAppIds = exports.LockedVaultToAppMapping = exports.LockedVault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.liquidation.v1beta1";
function createBaseLockedVault() {
    return {
        id: long_1.default.UZERO,
        appMappingId: long_1.default.UZERO,
        appVaultTypeId: "",
        originalVaultId: "",
        extendedPairVaultId: long_1.default.UZERO,
        owner: "",
        amountIn: "",
        amountOut: "",
        updatedAmountOut: "",
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
        if (!message.appMappingId.isZero()) {
            writer.uint32(16).uint64(message.appMappingId);
        }
        if (message.appVaultTypeId !== "") {
            writer.uint32(26).string(message.appVaultTypeId);
        }
        if (message.originalVaultId !== "") {
            writer.uint32(34).string(message.originalVaultId);
        }
        if (!message.extendedPairVaultId.isZero()) {
            writer.uint32(40).uint64(message.extendedPairVaultId);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        if (message.amountIn !== "") {
            writer.uint32(58).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(66).string(message.amountOut);
        }
        if (message.updatedAmountOut !== "") {
            writer.uint32(74).string(message.updatedAmountOut);
        }
        if (message.initiator !== "") {
            writer.uint32(82).string(message.initiator);
        }
        if (message.isAuctionComplete === true) {
            writer.uint32(88).bool(message.isAuctionComplete);
        }
        if (message.isAuctionInProgress === true) {
            writer.uint32(96).bool(message.isAuctionInProgress);
        }
        if (message.crAtLiquidation !== "") {
            writer.uint32(106).string(message.crAtLiquidation);
        }
        if (message.currentCollateralisationRatio !== "") {
            writer.uint32(114).string(message.currentCollateralisationRatio);
        }
        if (message.collateralToBeAuctioned !== "") {
            writer.uint32(122).string(message.collateralToBeAuctioned);
        }
        if (message.liquidationTimestamp !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.liquidationTimestamp), writer.uint32(130).fork()).ldelim();
        }
        for (const v of message.selloffHistory) {
            writer.uint32(138).string(v);
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
                    message.appMappingId = reader.uint64();
                    break;
                case 3:
                    message.appVaultTypeId = reader.string();
                    break;
                case 4:
                    message.originalVaultId = reader.string();
                    break;
                case 5:
                    message.extendedPairVaultId = reader.uint64();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.amountIn = reader.string();
                    break;
                case 8:
                    message.amountOut = reader.string();
                    break;
                case 9:
                    message.updatedAmountOut = reader.string();
                    break;
                case 10:
                    message.initiator = reader.string();
                    break;
                case 11:
                    message.isAuctionComplete = reader.bool();
                    break;
                case 12:
                    message.isAuctionInProgress = reader.bool();
                    break;
                case 13:
                    message.crAtLiquidation = reader.string();
                    break;
                case 14:
                    message.currentCollateralisationRatio = reader.string();
                    break;
                case 15:
                    message.collateralToBeAuctioned = reader.string();
                    break;
                case 16:
                    message.liquidationTimestamp = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 17:
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            appVaultTypeId: isSet(object.appVaultTypeId)
                ? String(object.appVaultTypeId)
                : "",
            originalVaultId: isSet(object.originalVaultId)
                ? String(object.originalVaultId)
                : "",
            extendedPairVaultId: isSet(object.extendedPairVaultId)
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            updatedAmountOut: isSet(object.updatedAmountOut)
                ? String(object.updatedAmountOut)
                : "",
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
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        message.appVaultTypeId !== undefined &&
            (obj.appVaultTypeId = message.appVaultTypeId);
        message.originalVaultId !== undefined &&
            (obj.originalVaultId = message.originalVaultId);
        message.extendedPairVaultId !== undefined &&
            (obj.extendedPairVaultId = (message.extendedPairVaultId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.updatedAmountOut !== undefined &&
            (obj.updatedAmountOut = message.updatedAmountOut);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const message = createBaseLockedVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.appVaultTypeId = (_a = object.appVaultTypeId) !== null && _a !== void 0 ? _a : "";
        message.originalVaultId = (_b = object.originalVaultId) !== null && _b !== void 0 ? _b : "";
        message.extendedPairVaultId =
            object.extendedPairVaultId !== undefined &&
                object.extendedPairVaultId !== null
                ? long_1.default.fromValue(object.extendedPairVaultId)
                : long_1.default.UZERO;
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.amountIn = (_d = object.amountIn) !== null && _d !== void 0 ? _d : "";
        message.amountOut = (_e = object.amountOut) !== null && _e !== void 0 ? _e : "";
        message.updatedAmountOut = (_f = object.updatedAmountOut) !== null && _f !== void 0 ? _f : "";
        message.initiator = (_g = object.initiator) !== null && _g !== void 0 ? _g : "";
        message.isAuctionComplete = (_h = object.isAuctionComplete) !== null && _h !== void 0 ? _h : false;
        message.isAuctionInProgress = (_j = object.isAuctionInProgress) !== null && _j !== void 0 ? _j : false;
        message.crAtLiquidation = (_k = object.crAtLiquidation) !== null && _k !== void 0 ? _k : "";
        message.currentCollateralisationRatio =
            (_l = object.currentCollateralisationRatio) !== null && _l !== void 0 ? _l : "";
        message.collateralToBeAuctioned = (_m = object.collateralToBeAuctioned) !== null && _m !== void 0 ? _m : "";
        message.liquidationTimestamp = (_o = object.liquidationTimestamp) !== null && _o !== void 0 ? _o : undefined;
        message.selloffHistory = ((_p = object.selloffHistory) === null || _p === void 0 ? void 0 : _p.map((e) => e)) || [];
        return message;
    },
};
function createBaseLockedVaultToAppMapping() {
    return { appMappingId: long_1.default.UZERO, lockedVault: [] };
}
exports.LockedVaultToAppMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        for (const v of message.lockedVault) {
            exports.LockedVault.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedVaultToAppMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.lockedVault.push(exports.LockedVault.decode(reader, reader.uint32()));
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            lockedVault: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVault)
                ? object.lockedVault.map((e) => exports.LockedVault.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        if (message.lockedVault) {
            obj.lockedVault = message.lockedVault.map((e) => e ? exports.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVault = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLockedVaultToAppMapping();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.lockedVault =
            ((_a = object.lockedVault) === null || _a === void 0 ? void 0 : _a.map((e) => exports.LockedVault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWhitelistedAppIds() {
    return { whitelistedAppMappingIds: [] };
}
exports.WhitelistedAppIds = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.whitelistedAppMappingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistedAppIds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.whitelistedAppMappingIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.whitelistedAppMappingIds.push(reader.uint64());
                    }
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
            whitelistedAppMappingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedAppMappingIds)
                ? object.whitelistedAppMappingIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.whitelistedAppMappingIds) {
            obj.whitelistedAppMappingIds = message.whitelistedAppMappingIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.whitelistedAppMappingIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWhitelistedAppIds();
        message.whitelistedAppMappingIds =
            ((_a = object.whitelistedAppMappingIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
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