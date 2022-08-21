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
exports.QueryUserExtendedPairTotalDataResponse = exports.QueryUserExtendedPairTotalDataRequest = exports.QueryUserMyPositionByAppResponse = exports.QueryUserMyPositionByAppRequest = exports.QueryTVLByAppResponse = exports.QueryTVLByAppRequest = exports.QueryTVLByAppOfAllExtendedPairsResponse = exports.QueryTVLByAppOfAllExtendedPairsRequest = exports.QueryExtendedPairVaultMappingByAppResponse = exports.QueryExtendedPairVaultMappingByAppRequest = exports.QueryExtendedPairVaultMappingByAppAndExtendedPairResponse = exports.QueryExtendedPairVaultMappingByAppAndExtendedPairRequest = exports.QueryStableVaultByAppAndExtendedPairResponse = exports.QueryStableVaultByAppAndExtendedPairRequest = exports.QueryStableVaultByAppResponse = exports.QueryStableVaultByAppRequest = exports.QueryStableVaultByVaultIDResponse = exports.QueryStableVaultByVaultIDRequest = exports.QueryExtendedPairIDsByAppResponse = exports.QueryExtendedPairIDsByAppRequest = exports.QueryTotalValueLockedByAppAndExtendedPairResponse = exports.QueryTotalValueLockedByAppAndExtendedPairRequest = exports.QueryVaultCountByAppAndExtendedPairResponse = exports.QueryVaultCountByAppAndExtendedPairRequest = exports.QueryVaultCountByAppResponse = exports.QueryVaultCountByAppRequest = exports.QueryTokenMintedAssetWiseByAppResponse = exports.QueryTokenMintedAssetWiseByAppRequest = exports.QueryTokenMintedByAppAndExtendedPairResponse = exports.QueryTokenMintedByAppAndExtendedPairRequest = exports.QueryAllVaultIdsByAnOwnerResponse = exports.QueryAllVaultIdsByAnOwnerRequest = exports.QueryVaultIdsByAppInAllExtendedPairsResponse = exports.QueryVaultIdsByAppInAllExtendedPairsRequest = exports.QueryVaultIDOfOwnerByExtendedPairAndAppResponse = exports.QueryVaultIDOfOwnerByExtendedPairAndAppRequest = exports.QueryAllVaultsByAppAndExtendedPairResponse = exports.QueryAllVaultsByAppAndExtendedPairRequest = exports.QueryAllVaultsByAppResponse = exports.QueryAllVaultsByAppRequest = exports.QueryAllVaultsResponse = exports.QueryAllVaultsRequest = exports.QueryVaultInfoOfOwnerByAppResponse = exports.QueryVaultInfoOfOwnerByAppRequest = exports.QueryVaultInfoByVaultIDResponse = exports.QueryVaultInfoByVaultIDRequest = exports.QueryVaultResponse = exports.QueryVaultRequest = exports.VaultInfo = exports.protobufPackage = void 0;
exports.QueryClientImpl = exports.QueryPairsLockedAndMintedStatisticByAppResponse = exports.QueryPairsLockedAndMintedStatisticByAppRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const vault_1 = require("../../../comdex/vault/v1beta1/vault");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseVaultInfo() {
    return {
        id: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        owner: "",
        collateral: "",
        debt: "",
        collateralizationRatio: "",
        extendedPairName: "",
        interestRate: "",
        assetInDenom: "",
        assetOutDenom: "",
        minCr: "",
    };
}
exports.VaultInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.collateral !== "") {
            writer.uint32(34).string(message.collateral);
        }
        if (message.debt !== "") {
            writer.uint32(42).string(message.debt);
        }
        if (message.collateralizationRatio !== "") {
            writer.uint32(50).string(message.collateralizationRatio);
        }
        if (message.extendedPairName !== "") {
            writer.uint32(58).string(message.extendedPairName);
        }
        if (message.interestRate !== "") {
            writer.uint32(66).string(message.interestRate);
        }
        if (message.assetInDenom !== "") {
            writer.uint32(74).string(message.assetInDenom);
        }
        if (message.assetOutDenom !== "") {
            writer.uint32(82).string(message.assetOutDenom);
        }
        if (message.minCr !== "") {
            writer.uint32(90).string(message.minCr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.collateral = reader.string();
                    break;
                case 5:
                    message.debt = reader.string();
                    break;
                case 6:
                    message.collateralizationRatio = reader.string();
                    break;
                case 7:
                    message.extendedPairName = reader.string();
                    break;
                case 8:
                    message.interestRate = reader.string();
                    break;
                case 9:
                    message.assetInDenom = reader.string();
                    break;
                case 10:
                    message.assetOutDenom = reader.string();
                    break;
                case 11:
                    message.minCr = reader.string();
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            collateral: isSet(object.collateral) ? String(object.collateral) : "",
            debt: isSet(object.debt) ? String(object.debt) : "",
            collateralizationRatio: isSet(object.collateralizationRatio)
                ? String(object.collateralizationRatio)
                : "",
            extendedPairName: isSet(object.extendedPairName)
                ? String(object.extendedPairName)
                : "",
            interestRate: isSet(object.interestRate)
                ? String(object.interestRate)
                : "",
            assetInDenom: isSet(object.assetInDenom)
                ? String(object.assetInDenom)
                : "",
            assetOutDenom: isSet(object.assetOutDenom)
                ? String(object.assetOutDenom)
                : "",
            minCr: isSet(object.minCr) ? String(object.minCr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateral !== undefined && (obj.collateral = message.collateral);
        message.debt !== undefined && (obj.debt = message.debt);
        message.collateralizationRatio !== undefined &&
            (obj.collateralizationRatio = message.collateralizationRatio);
        message.extendedPairName !== undefined &&
            (obj.extendedPairName = message.extendedPairName);
        message.interestRate !== undefined &&
            (obj.interestRate = message.interestRate);
        message.assetInDenom !== undefined &&
            (obj.assetInDenom = message.assetInDenom);
        message.assetOutDenom !== undefined &&
            (obj.assetOutDenom = message.assetOutDenom);
        message.minCr !== undefined && (obj.minCr = message.minCr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseVaultInfo();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateral = (_b = object.collateral) !== null && _b !== void 0 ? _b : "";
        message.debt = (_c = object.debt) !== null && _c !== void 0 ? _c : "";
        message.collateralizationRatio = (_d = object.collateralizationRatio) !== null && _d !== void 0 ? _d : "";
        message.extendedPairName = (_e = object.extendedPairName) !== null && _e !== void 0 ? _e : "";
        message.interestRate = (_f = object.interestRate) !== null && _f !== void 0 ? _f : "";
        message.assetInDenom = (_g = object.assetInDenom) !== null && _g !== void 0 ? _g : "";
        message.assetOutDenom = (_h = object.assetOutDenom) !== null && _h !== void 0 ? _h : "";
        message.minCr = (_j = object.minCr) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseQueryVaultRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryVaultResponse() {
    return { vault: undefined };
}
exports.QueryVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vault !== undefined) {
            vault_1.Vault.encode(message.vault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vault = vault_1.Vault.decode(reader, reader.uint32());
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
            vault: isSet(object.vault) ? vault_1.Vault.fromJSON(object.vault) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vault !== undefined &&
            (obj.vault = message.vault ? vault_1.Vault.toJSON(message.vault) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultResponse();
        message.vault =
            object.vault !== undefined && object.vault !== null
                ? vault_1.Vault.fromPartial(object.vault)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultInfoByVaultIDRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryVaultInfoByVaultIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultInfoByVaultIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultInfoByVaultIDRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryVaultInfoByVaultIDResponse() {
    return { vaultsInfo: undefined };
}
exports.QueryVaultInfoByVaultIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultsInfo !== undefined) {
            exports.VaultInfo.encode(message.vaultsInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultInfoByVaultIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultsInfo = exports.VaultInfo.decode(reader, reader.uint32());
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
            vaultsInfo: isSet(object.vaultsInfo)
                ? exports.VaultInfo.fromJSON(object.vaultsInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultsInfo !== undefined &&
            (obj.vaultsInfo = message.vaultsInfo
                ? exports.VaultInfo.toJSON(message.vaultsInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultInfoByVaultIDResponse();
        message.vaultsInfo =
            object.vaultsInfo !== undefined && object.vaultsInfo !== null
                ? exports.VaultInfo.fromPartial(object.vaultsInfo)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultInfoOfOwnerByAppRequest() {
    return { appId: long_1.default.UZERO, owner: "", pagination: undefined };
}
exports.QueryVaultInfoOfOwnerByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultInfoOfOwnerByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultInfoOfOwnerByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultInfoOfOwnerByAppResponse() {
    return { vaultsInfo: [], pagination: undefined };
}
exports.QueryVaultInfoOfOwnerByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaultsInfo) {
            exports.VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultInfoOfOwnerByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultsInfo.push(exports.VaultInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            vaultsInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultsInfo)
                ? object.vaultsInfo.map((e) => exports.VaultInfo.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaultsInfo) {
            obj.vaultsInfo = message.vaultsInfo.map((e) => e ? exports.VaultInfo.toJSON(e) : undefined);
        }
        else {
            obj.vaultsInfo = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultInfoOfOwnerByAppResponse();
        message.vaultsInfo =
            ((_a = object.vaultsInfo) === null || _a === void 0 ? void 0 : _a.map((e) => exports.VaultInfo.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsRequest() {
    return { pagination: undefined };
}
exports.QueryAllVaultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVaultsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsResponse() {
    return { vault: [], pagination: undefined };
}
exports.QueryAllVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vault) {
            vault_1.Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vault.push(vault_1.Vault.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            vault: Array.isArray(object === null || object === void 0 ? void 0 : object.vault)
                ? object.vault.map((e) => vault_1.Vault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vault) {
            obj.vault = message.vault.map((e) => (e ? vault_1.Vault.toJSON(e) : undefined));
        }
        else {
            obj.vault = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllVaultsResponse();
        message.vault = ((_a = object.vault) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.Vault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryAllVaultsByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVaultsByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsByAppResponse() {
    return { vault: [], pagination: undefined };
}
exports.QueryAllVaultsByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vault) {
            vault_1.Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vault.push(vault_1.Vault.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            vault: Array.isArray(object === null || object === void 0 ? void 0 : object.vault)
                ? object.vault.map((e) => vault_1.Vault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vault) {
            obj.vault = message.vault.map((e) => (e ? vault_1.Vault.toJSON(e) : undefined));
        }
        else {
            obj.vault = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllVaultsByAppResponse();
        message.vault = ((_a = object.vault) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.Vault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsByAppAndExtendedPairRequest() {
    return {
        appId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryAllVaultsByAppAndExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsByAppAndExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVaultsByAppAndExtendedPairRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultsByAppAndExtendedPairResponse() {
    return { vault: [], pagination: undefined };
}
exports.QueryAllVaultsByAppAndExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vault) {
            vault_1.Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsByAppAndExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vault.push(vault_1.Vault.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            vault: Array.isArray(object === null || object === void 0 ? void 0 : object.vault)
                ? object.vault.map((e) => vault_1.Vault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vault) {
            obj.vault = message.vault.map((e) => (e ? vault_1.Vault.toJSON(e) : undefined));
        }
        else {
            obj.vault = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllVaultsByAppAndExtendedPairResponse();
        message.vault = ((_a = object.vault) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.Vault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultIDOfOwnerByExtendedPairAndAppRequest() {
    return {
        appId: long_1.default.UZERO,
        owner: "",
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryVaultIDOfOwnerByExtendedPairAndAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(24).uint64(message.extendedPairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultIDOfOwnerByExtendedPairAndAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.extendedPairId = reader.uint64();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultIDOfOwnerByExtendedPairAndAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultIDOfOwnerByExtendedPairAndAppResponse() {
    return { vaultId: long_1.default.UZERO };
}
exports.QueryVaultIDOfOwnerByExtendedPairAndAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.vaultId.isZero()) {
            writer.uint32(8).uint64(message.vaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultIDOfOwnerByExtendedPairAndAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = reader.uint64();
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
            vaultId: isSet(object.vaultId)
                ? long_1.default.fromValue(object.vaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultId !== undefined &&
            (obj.vaultId = (message.vaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultIDOfOwnerByExtendedPairAndAppResponse();
        message.vaultId =
            object.vaultId !== undefined && object.vaultId !== null
                ? long_1.default.fromValue(object.vaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryVaultIdsByAppInAllExtendedPairsRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryVaultIdsByAppInAllExtendedPairsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultIdsByAppInAllExtendedPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultIdsByAppInAllExtendedPairsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultIdsByAppInAllExtendedPairsResponse() {
    return { vaultIds: [], pagination: undefined };
}
exports.QueryVaultIdsByAppInAllExtendedPairsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.vaultIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultIdsByAppInAllExtendedPairsResponse();
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
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
                ? object.vaultIds.map((e) => long_1.default.fromValue(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultIdsByAppInAllExtendedPairsResponse();
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultIdsByAnOwnerRequest() {
    return { owner: "", pagination: undefined };
}
exports.QueryAllVaultIdsByAnOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultIdsByAnOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllVaultIdsByAnOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultIdsByAnOwnerResponse() {
    return { vaultIds: [], pagination: undefined };
}
exports.QueryAllVaultIdsByAnOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.vaultIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultIdsByAnOwnerResponse();
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
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
                ? object.vaultIds.map((e) => long_1.default.fromValue(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllVaultIdsByAnOwnerResponse();
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedByAppAndExtendedPairRequest() {
    return {
        appId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryTokenMintedByAppAndExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByAppAndExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedByAppAndExtendedPairRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedByAppAndExtendedPairResponse() {
    return { tokenMinted: "" };
}
exports.QueryTokenMintedByAppAndExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenMinted !== "") {
            writer.uint32(10).string(message.tokenMinted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedByAppAndExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenMinted = reader.string();
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
            tokenMinted: isSet(object.tokenMinted) ? String(object.tokenMinted) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenMinted !== undefined &&
            (obj.tokenMinted = message.tokenMinted);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTokenMintedByAppAndExtendedPairResponse();
        message.tokenMinted = (_a = object.tokenMinted) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTokenMintedAssetWiseByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTokenMintedAssetWiseByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedAssetWiseByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedAssetWiseByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedAssetWiseByAppResponse() {
    return { mintedData: [], pagination: undefined };
}
exports.QueryTokenMintedAssetWiseByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.mintedData) {
            vault_1.MintedDataMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedAssetWiseByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintedData.push(vault_1.MintedDataMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            mintedData: Array.isArray(object === null || object === void 0 ? void 0 : object.mintedData)
                ? object.mintedData.map((e) => vault_1.MintedDataMap.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.mintedData) {
            obj.mintedData = message.mintedData.map((e) => e ? vault_1.MintedDataMap.toJSON(e) : undefined);
        }
        else {
            obj.mintedData = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTokenMintedAssetWiseByAppResponse();
        message.mintedData =
            ((_a = object.mintedData) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.MintedDataMap.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultCountByAppRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryVaultCountByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultCountByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryVaultCountByAppResponse() {
    return { vaultCount: long_1.default.UZERO };
}
exports.QueryVaultCountByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.vaultCount.isZero()) {
            writer.uint32(8).uint64(message.vaultCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultCount = reader.uint64();
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
            vaultCount: isSet(object.vaultCount)
                ? long_1.default.fromValue(object.vaultCount)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultCount !== undefined &&
            (obj.vaultCount = (message.vaultCount || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultCountByAppResponse();
        message.vaultCount =
            object.vaultCount !== undefined && object.vaultCount !== null
                ? long_1.default.fromValue(object.vaultCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryVaultCountByAppAndExtendedPairRequest() {
    return {
        appId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryVaultCountByAppAndExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByAppAndExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultCountByAppAndExtendedPairRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultCountByAppAndExtendedPairResponse() {
    return { vaultCount: long_1.default.UZERO };
}
exports.QueryVaultCountByAppAndExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.vaultCount.isZero()) {
            writer.uint32(8).uint64(message.vaultCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByAppAndExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultCount = reader.uint64();
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
            vaultCount: isSet(object.vaultCount)
                ? long_1.default.fromValue(object.vaultCount)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultCount !== undefined &&
            (obj.vaultCount = (message.vaultCount || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultCountByAppAndExtendedPairResponse();
        message.vaultCount =
            object.vaultCount !== undefined && object.vaultCount !== null
                ? long_1.default.fromValue(object.vaultCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTotalValueLockedByAppAndExtendedPairRequest() {
    return {
        appId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryTotalValueLockedByAppAndExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalValueLockedByAppAndExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalValueLockedByAppAndExtendedPairRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalValueLockedByAppAndExtendedPairResponse() {
    return { valueLocked: "" };
}
exports.QueryTotalValueLockedByAppAndExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valueLocked !== "") {
            writer.uint32(10).string(message.valueLocked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalValueLockedByAppAndExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valueLocked = reader.string();
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
            valueLocked: isSet(object.valueLocked) ? String(object.valueLocked) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.valueLocked !== undefined &&
            (obj.valueLocked = message.valueLocked);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalValueLockedByAppAndExtendedPairResponse();
        message.valueLocked = (_a = object.valueLocked) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryExtendedPairIDsByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryExtendedPairIDsByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairIDsByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairIDsByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairIDsByAppResponse() {
    return { extendedPairIds: [], pagination: undefined };
}
exports.QueryExtendedPairIDsByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.extendedPairIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairIDsByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extendedPairIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.extendedPairIds.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            extendedPairIds: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairIds)
                ? object.extendedPairIds.map((e) => long_1.default.fromValue(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPairIds) {
            obj.extendedPairIds = message.extendedPairIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.extendedPairIds = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairIDsByAppResponse();
        message.extendedPairIds =
            ((_a = object.extendedPairIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryStableVaultByVaultIDRequest() {
    return { stableVaultId: long_1.default.UZERO };
}
exports.QueryStableVaultByVaultIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.stableVaultId.isZero()) {
            writer.uint32(8).uint64(message.stableVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByVaultIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableVaultId = reader.uint64();
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
            stableVaultId: isSet(object.stableVaultId)
                ? long_1.default.fromValue(object.stableVaultId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.stableVaultId !== undefined &&
            (obj.stableVaultId = (message.stableVaultId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStableVaultByVaultIDRequest();
        message.stableVaultId =
            object.stableVaultId !== undefined && object.stableVaultId !== null
                ? long_1.default.fromValue(object.stableVaultId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryStableVaultByVaultIDResponse() {
    return { stableMintVault: undefined };
}
exports.QueryStableVaultByVaultIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stableMintVault !== undefined) {
            vault_1.StableMintVault.encode(message.stableMintVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByVaultIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableMintVault = vault_1.StableMintVault.decode(reader, reader.uint32());
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
            stableMintVault: isSet(object.stableMintVault)
                ? vault_1.StableMintVault.fromJSON(object.stableMintVault)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.stableMintVault !== undefined &&
            (obj.stableMintVault = message.stableMintVault
                ? vault_1.StableMintVault.toJSON(message.stableMintVault)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStableVaultByVaultIDResponse();
        message.stableMintVault =
            object.stableMintVault !== undefined && object.stableMintVault !== null
                ? vault_1.StableMintVault.fromPartial(object.stableMintVault)
                : undefined;
        return message;
    },
};
function createBaseQueryStableVaultByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryStableVaultByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStableVaultByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryStableVaultByAppResponse() {
    return { stableMintVault: [], pagination: undefined };
}
exports.QueryStableVaultByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.stableMintVault) {
            vault_1.StableMintVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableMintVault.push(vault_1.StableMintVault.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            stableMintVault: Array.isArray(object === null || object === void 0 ? void 0 : object.stableMintVault)
                ? object.stableMintVault.map((e) => vault_1.StableMintVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stableMintVault) {
            obj.stableMintVault = message.stableMintVault.map((e) => e ? vault_1.StableMintVault.toJSON(e) : undefined);
        }
        else {
            obj.stableMintVault = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryStableVaultByAppResponse();
        message.stableMintVault =
            ((_a = object.stableMintVault) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.StableMintVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryStableVaultByAppAndExtendedPairRequest() {
    return { appId: long_1.default.UZERO, extendedPairId: long_1.default.UZERO };
}
exports.QueryStableVaultByAppAndExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByAppAndExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStableVaultByAppAndExtendedPairRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryStableVaultByAppAndExtendedPairResponse() {
    return { stableMintVault: undefined };
}
exports.QueryStableVaultByAppAndExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stableMintVault !== undefined) {
            vault_1.StableMintVault.encode(message.stableMintVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByAppAndExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableMintVault = vault_1.StableMintVault.decode(reader, reader.uint32());
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
            stableMintVault: isSet(object.stableMintVault)
                ? vault_1.StableMintVault.fromJSON(object.stableMintVault)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.stableMintVault !== undefined &&
            (obj.stableMintVault = message.stableMintVault
                ? vault_1.StableMintVault.toJSON(message.stableMintVault)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStableVaultByAppAndExtendedPairResponse();
        message.stableMintVault =
            object.stableMintVault !== undefined && object.stableMintVault !== null
                ? vault_1.StableMintVault.fromPartial(object.stableMintVault)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairRequest() {
    return { appId: long_1.default.UZERO, extendedPairId: long_1.default.UZERO };
}
exports.QueryExtendedPairVaultMappingByAppAndExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.extendedPairId.isZero()) {
            writer.uint32(16).uint64(message.extendedPairId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.extendedPairId = reader.uint64();
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
            extendedPairId: isSet(object.extendedPairId)
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPairId =
            object.extendedPairId !== undefined && object.extendedPairId !== null
                ? long_1.default.fromValue(object.extendedPairId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairResponse() {
    return { extendedPairVaultMapping: undefined };
}
exports.QueryExtendedPairVaultMappingByAppAndExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.extendedPairVaultMapping !== undefined) {
            vault_1.AppExtendedPairVaultMappingData.encode(message.extendedPairVaultMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairVaultMapping =
                        vault_1.AppExtendedPairVaultMappingData.decode(reader, reader.uint32());
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
            extendedPairVaultMapping: isSet(object.extendedPairVaultMapping)
                ? vault_1.AppExtendedPairVaultMappingData.fromJSON(object.extendedPairVaultMapping)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.extendedPairVaultMapping !== undefined &&
            (obj.extendedPairVaultMapping = message.extendedPairVaultMapping
                ? vault_1.AppExtendedPairVaultMappingData.toJSON(message.extendedPairVaultMapping)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairResponse();
        message.extendedPairVaultMapping =
            object.extendedPairVaultMapping !== undefined &&
                object.extendedPairVaultMapping !== null
                ? vault_1.AppExtendedPairVaultMappingData.fromPartial(object.extendedPairVaultMapping)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryExtendedPairVaultMappingByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairVaultMappingByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppResponse() {
    return { extendedPairVaultMapping: [], pagination: undefined };
}
exports.QueryExtendedPairVaultMappingByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.extendedPairVaultMapping) {
            vault_1.AppExtendedPairVaultMappingData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairVaultMapping.push(vault_1.AppExtendedPairVaultMappingData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            extendedPairVaultMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairVaultMapping)
                ? object.extendedPairVaultMapping.map((e) => vault_1.AppExtendedPairVaultMappingData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPairVaultMapping) {
            obj.extendedPairVaultMapping = message.extendedPairVaultMapping.map((e) => e ? vault_1.AppExtendedPairVaultMappingData.toJSON(e) : undefined);
        }
        else {
            obj.extendedPairVaultMapping = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairVaultMappingByAppResponse();
        message.extendedPairVaultMapping =
            ((_a = object.extendedPairVaultMapping) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.AppExtendedPairVaultMappingData.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTVLByAppOfAllExtendedPairsRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTVLByAppOfAllExtendedPairsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTVLByAppOfAllExtendedPairsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTVLByAppOfAllExtendedPairsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTVLByAppOfAllExtendedPairsResponse() {
    return { tvldata: [], pagination: undefined };
}
exports.QueryTVLByAppOfAllExtendedPairsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tvldata) {
            vault_1.TvlLockedDataMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTVLByAppOfAllExtendedPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tvldata.push(vault_1.TvlLockedDataMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            tvldata: Array.isArray(object === null || object === void 0 ? void 0 : object.tvldata)
                ? object.tvldata.map((e) => vault_1.TvlLockedDataMap.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tvldata) {
            obj.tvldata = message.tvldata.map((e) => e ? vault_1.TvlLockedDataMap.toJSON(e) : undefined);
        }
        else {
            obj.tvldata = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTVLByAppOfAllExtendedPairsResponse();
        message.tvldata =
            ((_a = object.tvldata) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.TvlLockedDataMap.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTVLByAppRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryTVLByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTVLByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTVLByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTVLByAppResponse() {
    return { collateralLocked: "" };
}
exports.QueryTVLByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collateralLocked !== "") {
            writer.uint32(10).string(message.collateralLocked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTVLByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralLocked = reader.string();
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
            collateralLocked: isSet(object.collateralLocked)
                ? String(object.collateralLocked)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralLocked !== undefined &&
            (obj.collateralLocked = message.collateralLocked);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTVLByAppResponse();
        message.collateralLocked = (_a = object.collateralLocked) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryUserMyPositionByAppRequest() {
    return { appId: long_1.default.UZERO, owner: "" };
}
exports.QueryUserMyPositionByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserMyPositionByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserMyPositionByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryUserMyPositionByAppResponse() {
    return {
        collateralLocked: "",
        totalDue: "",
        availableToBorrow: "",
        averageCrRatio: "",
    };
}
exports.QueryUserMyPositionByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collateralLocked !== "") {
            writer.uint32(10).string(message.collateralLocked);
        }
        if (message.totalDue !== "") {
            writer.uint32(18).string(message.totalDue);
        }
        if (message.availableToBorrow !== "") {
            writer.uint32(26).string(message.availableToBorrow);
        }
        if (message.averageCrRatio !== "") {
            writer.uint32(34).string(message.averageCrRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserMyPositionByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collateralLocked = reader.string();
                    break;
                case 2:
                    message.totalDue = reader.string();
                    break;
                case 3:
                    message.availableToBorrow = reader.string();
                    break;
                case 4:
                    message.averageCrRatio = reader.string();
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
            collateralLocked: isSet(object.collateralLocked)
                ? String(object.collateralLocked)
                : "",
            totalDue: isSet(object.totalDue) ? String(object.totalDue) : "",
            availableToBorrow: isSet(object.availableToBorrow)
                ? String(object.availableToBorrow)
                : "",
            averageCrRatio: isSet(object.averageCrRatio)
                ? String(object.averageCrRatio)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collateralLocked !== undefined &&
            (obj.collateralLocked = message.collateralLocked);
        message.totalDue !== undefined && (obj.totalDue = message.totalDue);
        message.availableToBorrow !== undefined &&
            (obj.availableToBorrow = message.availableToBorrow);
        message.averageCrRatio !== undefined &&
            (obj.averageCrRatio = message.averageCrRatio);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryUserMyPositionByAppResponse();
        message.collateralLocked = (_a = object.collateralLocked) !== null && _a !== void 0 ? _a : "";
        message.totalDue = (_b = object.totalDue) !== null && _b !== void 0 ? _b : "";
        message.availableToBorrow = (_c = object.availableToBorrow) !== null && _c !== void 0 ? _c : "";
        message.averageCrRatio = (_d = object.averageCrRatio) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseQueryUserExtendedPairTotalDataRequest() {
    return { owner: "" };
}
exports.QueryUserExtendedPairTotalDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserExtendedPairTotalDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserExtendedPairTotalDataRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryUserExtendedPairTotalDataResponse() {
    return { userTotalData: [] };
}
exports.QueryUserExtendedPairTotalDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.userTotalData) {
            vault_1.OwnerAppExtendedPairVaultMappingData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserExtendedPairTotalDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userTotalData.push(vault_1.OwnerAppExtendedPairVaultMappingData.decode(reader, reader.uint32()));
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
            userTotalData: Array.isArray(object === null || object === void 0 ? void 0 : object.userTotalData)
                ? object.userTotalData.map((e) => vault_1.OwnerAppExtendedPairVaultMappingData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userTotalData) {
            obj.userTotalData = message.userTotalData.map((e) => e ? vault_1.OwnerAppExtendedPairVaultMappingData.toJSON(e) : undefined);
        }
        else {
            obj.userTotalData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserExtendedPairTotalDataResponse();
        message.userTotalData =
            ((_a = object.userTotalData) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.OwnerAppExtendedPairVaultMappingData.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPairsLockedAndMintedStatisticByAppRequest() {
    return { appId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryPairsLockedAndMintedStatisticByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsLockedAndMintedStatisticByAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPairsLockedAndMintedStatisticByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPairsLockedAndMintedStatisticByAppResponse() {
    return { pairStatisticData: [], pagination: undefined };
}
exports.QueryPairsLockedAndMintedStatisticByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairStatisticData) {
            vault_1.PairStatisticData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPairsLockedAndMintedStatisticByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairStatisticData.push(vault_1.PairStatisticData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            pairStatisticData: Array.isArray(object === null || object === void 0 ? void 0 : object.pairStatisticData)
                ? object.pairStatisticData.map((e) => vault_1.PairStatisticData.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairStatisticData) {
            obj.pairStatisticData = message.pairStatisticData.map((e) => e ? vault_1.PairStatisticData.toJSON(e) : undefined);
        }
        else {
            obj.pairStatisticData = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPairsLockedAndMintedStatisticByAppResponse();
        message.pairStatisticData =
            ((_a = object.pairStatisticData) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.PairStatisticData.fromPartial(e))) ||
                [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryVault = this.QueryVault.bind(this);
        this.QueryUserExtendedPairTotalData =
            this.QueryUserExtendedPairTotalData.bind(this);
        this.QueryVaultInfoByVaultID = this.QueryVaultInfoByVaultID.bind(this);
        this.QueryVaultInfoOfOwnerByApp =
            this.QueryVaultInfoOfOwnerByApp.bind(this);
        this.QueryAllVaults = this.QueryAllVaults.bind(this);
        this.QueryAllVaultsByApp = this.QueryAllVaultsByApp.bind(this);
        this.QueryAllVaultsByAppAndExtendedPair =
            this.QueryAllVaultsByAppAndExtendedPair.bind(this);
        this.QueryVaultIDOfOwnerByExtendedPairAndApp =
            this.QueryVaultIDOfOwnerByExtendedPairAndApp.bind(this);
        this.QueryVaultIdsByAppInAllExtendedPairs =
            this.QueryVaultIdsByAppInAllExtendedPairs.bind(this);
        this.QueryAllVaultIdsByAnOwner = this.QueryAllVaultIdsByAnOwner.bind(this);
        this.QueryTokenMintedByAppAndExtendedPair =
            this.QueryTokenMintedByAppAndExtendedPair.bind(this);
        this.QueryTokenMintedAssetWiseByApp =
            this.QueryTokenMintedAssetWiseByApp.bind(this);
        this.QueryVaultCountByApp = this.QueryVaultCountByApp.bind(this);
        this.QueryVaultCountByAppAndExtendedPair =
            this.QueryVaultCountByAppAndExtendedPair.bind(this);
        this.QueryTotalValueLockedByAppAndExtendedPair =
            this.QueryTotalValueLockedByAppAndExtendedPair.bind(this);
        this.QueryExtendedPairIDsByApp = this.QueryExtendedPairIDsByApp.bind(this);
        this.QueryStableVaultByVaultID = this.QueryStableVaultByVaultID.bind(this);
        this.QueryStableVaultByApp = this.QueryStableVaultByApp.bind(this);
        this.QueryStableVaultByAppAndExtendedPair =
            this.QueryStableVaultByAppAndExtendedPair.bind(this);
        this.QueryExtendedPairVaultMappingByAppAndExtendedPair =
            this.QueryExtendedPairVaultMappingByAppAndExtendedPair.bind(this);
        this.QueryExtendedPairVaultMappingByApp =
            this.QueryExtendedPairVaultMappingByApp.bind(this);
        this.QueryTVLByAppOfAllExtendedPairs =
            this.QueryTVLByAppOfAllExtendedPairs.bind(this);
        this.QueryTVLByApp = this.QueryTVLByApp.bind(this);
        this.QueryUserMyPositionByApp = this.QueryUserMyPositionByApp.bind(this);
        this.QueryPairsLockedAndMintedStatisticByApp =
            this.QueryPairsLockedAndMintedStatisticByApp.bind(this);
    }
    QueryVault(request) {
        const data = exports.QueryVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVault", data);
        return promise.then((data) => exports.QueryVaultResponse.decode(new _m0.Reader(data)));
    }
    QueryUserExtendedPairTotalData(request) {
        const data = exports.QueryUserExtendedPairTotalDataRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryUserExtendedPairTotalData", data);
        return promise.then((data) => exports.QueryUserExtendedPairTotalDataResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultInfoByVaultID(request) {
        const data = exports.QueryVaultInfoByVaultIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVaultInfoByVaultID", data);
        return promise.then((data) => exports.QueryVaultInfoByVaultIDResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultInfoOfOwnerByApp(request) {
        const data = exports.QueryVaultInfoOfOwnerByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVaultInfoOfOwnerByApp", data);
        return promise.then((data) => exports.QueryVaultInfoOfOwnerByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaults(request) {
        const data = exports.QueryAllVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryAllVaults", data);
        return promise.then((data) => exports.QueryAllVaultsResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaultsByApp(request) {
        const data = exports.QueryAllVaultsByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryAllVaultsByApp", data);
        return promise.then((data) => exports.QueryAllVaultsByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaultsByAppAndExtendedPair(request) {
        const data = exports.QueryAllVaultsByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryAllVaultsByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryAllVaultsByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultIDOfOwnerByExtendedPairAndApp(request) {
        const data = exports.QueryVaultIDOfOwnerByExtendedPairAndAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVaultIDOfOwnerByExtendedPairAndApp", data);
        return promise.then((data) => exports.QueryVaultIDOfOwnerByExtendedPairAndAppResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultIdsByAppInAllExtendedPairs(request) {
        const data = exports.QueryVaultIdsByAppInAllExtendedPairsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVaultIdsByAppInAllExtendedPairs", data);
        return promise.then((data) => exports.QueryVaultIdsByAppInAllExtendedPairsResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaultIdsByAnOwner(request) {
        const data = exports.QueryAllVaultIdsByAnOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryAllVaultIdsByAnOwner", data);
        return promise.then((data) => exports.QueryAllVaultIdsByAnOwnerResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenMintedByAppAndExtendedPair(request) {
        const data = exports.QueryTokenMintedByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryTokenMintedByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryTokenMintedByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenMintedAssetWiseByApp(request) {
        const data = exports.QueryTokenMintedAssetWiseByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryTokenMintedAssetWiseByApp", data);
        return promise.then((data) => exports.QueryTokenMintedAssetWiseByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultCountByApp(request) {
        const data = exports.QueryVaultCountByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVaultCountByApp", data);
        return promise.then((data) => exports.QueryVaultCountByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultCountByAppAndExtendedPair(request) {
        const data = exports.QueryVaultCountByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryVaultCountByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryVaultCountByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryTotalValueLockedByAppAndExtendedPair(request) {
        const data = exports.QueryTotalValueLockedByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryTotalValueLockedByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryTotalValueLockedByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairIDsByApp(request) {
        const data = exports.QueryExtendedPairIDsByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryExtendedPairIDsByApp", data);
        return promise.then((data) => exports.QueryExtendedPairIDsByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryStableVaultByVaultID(request) {
        const data = exports.QueryStableVaultByVaultIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryStableVaultByVaultID", data);
        return promise.then((data) => exports.QueryStableVaultByVaultIDResponse.decode(new _m0.Reader(data)));
    }
    QueryStableVaultByApp(request) {
        const data = exports.QueryStableVaultByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryStableVaultByApp", data);
        return promise.then((data) => exports.QueryStableVaultByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryStableVaultByAppAndExtendedPair(request) {
        const data = exports.QueryStableVaultByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryStableVaultByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryStableVaultByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairVaultMappingByAppAndExtendedPair(request) {
        const data = exports.QueryExtendedPairVaultMappingByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryExtendedPairVaultMappingByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryExtendedPairVaultMappingByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairVaultMappingByApp(request) {
        const data = exports.QueryExtendedPairVaultMappingByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryExtendedPairVaultMappingByApp", data);
        return promise.then((data) => exports.QueryExtendedPairVaultMappingByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryTVLByAppOfAllExtendedPairs(request) {
        const data = exports.QueryTVLByAppOfAllExtendedPairsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryTVLByAppOfAllExtendedPairs", data);
        return promise.then((data) => exports.QueryTVLByAppOfAllExtendedPairsResponse.decode(new _m0.Reader(data)));
    }
    QueryTVLByApp(request) {
        const data = exports.QueryTVLByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryTVLByApp", data);
        return promise.then((data) => exports.QueryTVLByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryUserMyPositionByApp(request) {
        const data = exports.QueryUserMyPositionByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryUserMyPositionByApp", data);
        return promise.then((data) => exports.QueryUserMyPositionByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryPairsLockedAndMintedStatisticByApp(request) {
        const data = exports.QueryPairsLockedAndMintedStatisticByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.Query", "QueryPairsLockedAndMintedStatisticByApp", data);
        return promise.then((data) => exports.QueryPairsLockedAndMintedStatisticByAppResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map