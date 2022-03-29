"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAssetsMintStatistics_MintedAssetsEntry = exports.CAssetsMintStatistics = exports.CollateralVaultIdMapping_CassetsVaultIdsMapEntry = exports.CollateralVaultIdMapping = exports.VaultIds = exports.UserVaultIdMapping = exports.Vault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseVault() {
    return {
        id: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        owner: "",
        amountIn: "",
        amountOut: "",
        createdAt: undefined,
        marketCap: "",
        rewardsReceived: [],
    };
}
exports.Vault = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.amountIn !== "") {
            writer.uint32(34).string(message.amountIn);
        }
        if (message.amountOut !== "") {
            writer.uint32(42).string(message.amountOut);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        if (message.marketCap !== "") {
            writer.uint32(58).string(message.marketCap);
        }
        for (const v of message.rewardsReceived) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVault();
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
                    message.owner = reader.string();
                    break;
                case 4:
                    message.amountIn = reader.string();
                    break;
                case 5:
                    message.amountOut = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.marketCap = reader.string();
                    break;
                case 8:
                    message.rewardsReceived.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
            amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            marketCap: isSet(object.marketCap) ? String(object.marketCap) : "",
            rewardsReceived: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardsReceived)
                ? object.rewardsReceived.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.amountOut !== undefined && (obj.amountOut = message.amountOut);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.marketCap !== undefined && (obj.marketCap = message.marketCap);
        if (message.rewardsReceived) {
            obj.rewardsReceived = message.rewardsReceived.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewardsReceived = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseVault();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.amountIn = (_b = object.amountIn) !== null && _b !== void 0 ? _b : "";
        message.amountOut = (_c = object.amountOut) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.marketCap = (_e = object.marketCap) !== null && _e !== void 0 ? _e : "";
        message.rewardsReceived =
            ((_f = object.rewardsReceived) === null || _f === void 0 ? void 0 : _f.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserVaultIdMapping() {
    return { owner: "", vaultIds: [] };
}
exports.UserVaultIdMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        writer.uint32(26).fork();
        for (const v of message.vaultIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserVaultIdMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vaultIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.vaultIds.push(reader.uint64());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            vaultIds: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultIds)
                ? object.vaultIds.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.vaultIds) {
            obj.vaultIds = message.vaultIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.vaultIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserVaultIdMapping();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.vaultIds = ((_b = object.vaultIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseVaultIds() {
    return { vaultIds: [] };
}
exports.VaultIds = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.vaultIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultIds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.vaultIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.vaultIds.push(reader.uint64());
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
            vaultIds: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultIds)
                ? object.vaultIds.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaultIds) {
            obj.vaultIds = message.vaultIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.vaultIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVaultIds();
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseCollateralVaultIdMapping() {
    return { collateralDenom: "", cassetsVaultIdsMap: {} };
}
exports.CollateralVaultIdMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collateralDenom !== "") {
            writer.uint32(10).string(message.collateralDenom);
        }
        Object.entries(message.cassetsVaultIdsMap).forEach(([key, value]) => {
            exports.CollateralVaultIdMapping_CassetsVaultIdsMapEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollateralVaultIdMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralDenom = reader.string();
                    break;
                case 2:
                    const entry2 = exports.CollateralVaultIdMapping_CassetsVaultIdsMapEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.cassetsVaultIdsMap[entry2.key] = entry2.value;
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
            collateralDenom: isSet(object.collateralDenom)
                ? String(object.collateralDenom)
                : "",
            cassetsVaultIdsMap: isObject(object.cassetsVaultIdsMap)
                ? Object.entries(object.cassetsVaultIdsMap).reduce((acc, [key, value]) => {
                    acc[key] = exports.VaultIds.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralDenom !== undefined &&
            (obj.collateralDenom = message.collateralDenom);
        obj.cassetsVaultIdsMap = {};
        if (message.cassetsVaultIdsMap) {
            Object.entries(message.cassetsVaultIdsMap).forEach(([k, v]) => {
                obj.cassetsVaultIdsMap[k] = exports.VaultIds.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCollateralVaultIdMapping();
        message.collateralDenom = (_a = object.collateralDenom) !== null && _a !== void 0 ? _a : "";
        message.cassetsVaultIdsMap = Object.entries((_b = object.cassetsVaultIdsMap) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.VaultIds.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCollateralVaultIdMapping_CassetsVaultIdsMapEntry() {
    return { key: "", value: undefined };
}
exports.CollateralVaultIdMapping_CassetsVaultIdsMapEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.VaultIds.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCollateralVaultIdMapping_CassetsVaultIdsMapEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.VaultIds.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.VaultIds.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.VaultIds.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCollateralVaultIdMapping_CassetsVaultIdsMapEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.VaultIds.fromPartial(object.value)
                : undefined;
        return message;
    },
};
function createBaseCAssetsMintStatistics() {
    return { collateralDenom: "", mintedAssets: {} };
}
exports.CAssetsMintStatistics = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collateralDenom !== "") {
            writer.uint32(10).string(message.collateralDenom);
        }
        Object.entries(message.mintedAssets).forEach(([key, value]) => {
            exports.CAssetsMintStatistics_MintedAssetsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCAssetsMintStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralDenom = reader.string();
                    break;
                case 2:
                    const entry2 = exports.CAssetsMintStatistics_MintedAssetsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.mintedAssets[entry2.key] = entry2.value;
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
            collateralDenom: isSet(object.collateralDenom)
                ? String(object.collateralDenom)
                : "",
            mintedAssets: isObject(object.mintedAssets)
                ? Object.entries(object.mintedAssets).reduce((acc, [key, value]) => {
                    acc[key] = long_1.default.fromValue(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralDenom !== undefined &&
            (obj.collateralDenom = message.collateralDenom);
        obj.mintedAssets = {};
        if (message.mintedAssets) {
            Object.entries(message.mintedAssets).forEach(([k, v]) => {
                obj.mintedAssets[k] = v.toString();
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCAssetsMintStatistics();
        message.collateralDenom = (_a = object.collateralDenom) !== null && _a !== void 0 ? _a : "";
        message.mintedAssets = Object.entries((_b = object.mintedAssets) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = long_1.default.fromValue(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseCAssetsMintStatistics_MintedAssetsEntry() {
    return { key: "", value: long_1.default.UZERO };
}
exports.CAssetsMintStatistics_MintedAssetsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCAssetsMintStatistics_MintedAssetsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.uint64();
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
            value: isSet(object.value) ? long_1.default.fromString(object.value) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = (message.value || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCAssetsMintStatistics_MintedAssetsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? long_1.default.fromValue(object.value)
                : long_1.default.UZERO;
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
//# sourceMappingURL=vault.js.map