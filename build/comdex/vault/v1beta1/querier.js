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
exports.QueryServiceClientImpl = exports.QueryTVLlockedByAppResponse = exports.QueryTVLlockedByAppRequest = exports.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDResponse = exports.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDRequest = exports.QueryExtendedPairVaultMappingByOwnerAndAppResponse = exports.QueryExtendedPairVaultMappingByOwnerAndAppRequest = exports.QueryExtendedPairVaultMappingByAppResponse = exports.QueryExtendedPairVaultMappingByAppRequest = exports.QueryExtendedPairVaultMappingByAppAndExtendedPairIdResponse = exports.QueryExtendedPairVaultMappingByAppAndExtendedPairIdRequest = exports.QueryStableVaultByProductExtendedPairResponse = exports.QueryStableVaultByProductExtendedPairRequest = exports.QueryAllStableVaultsResponse = exports.QueryAllStableVaultsRequest = exports.QueryStableVaultInfoResponse = exports.QueryStableVaultInfoRequest = exports.QueryExtendedPairIDByProductResponse = exports.QueryExtendedPairIDByProductRequest = exports.QueryTotalValueLockedByProductExtendedPairResponse = exports.QueryTotalValueLockedByProductExtendedPairRequest = exports.QueryVaultCountByProductAndPairResponse = exports.QueryVaultCountByProductAndPairRequest = exports.QueryVaultCountByProductResponse = exports.QueryVaultCountByProductRequest = exports.QueryTokenMintedAllProductsResponse = exports.QueryTokenMintedAllProductsRequest = exports.QueryTokenMintedAllProductsByPairResponse = exports.QueryTokenMintedAllProductsByPairRequest = exports.QueryAllVaultByOwnerResponse = exports.QueryAllVaultByOwnerRequest = exports.QueryVaultByProductResponse = exports.QueryVaultByProductRequest = exports.QueryVaultOfOwnerByExtendedPairResponse = exports.QueryVaultOfOwnerByExtendedPairRequest = exports.QueryAllVaultsByAppAndExtendedPairResponse = exports.QueryAllVaultsByAppAndExtendedPairRequest = exports.QueryAllVaultsByProductResponse = exports.QueryAllVaultsByProductRequest = exports.QueryAllVaultsResponse = exports.QueryAllVaultsRequest = exports.QueryVaultInfoResponse = exports.QueryVaultInfoRequest = exports.QueryVaultResponse = exports.QueryVaultRequest = exports.VaultInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const vault_1 = require("./comdex/vault/v1beta1/vault");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseVaultInfo() {
    return {
        id: "",
        pairId: long_1.default.UZERO,
        owner: "",
        collateral: "",
        debt: "",
        collateralizationRatio: "",
    };
}
exports.VaultInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
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
                    message.id = reader.string();
                    break;
                case 2:
                    message.pairId = reader.uint64();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            pairId: isSet(object.pairId) ? long_1.default.fromValue(object.pairId) : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            collateral: isSet(object.collateral) ? String(object.collateral) : "",
            debt: isSet(object.debt) ? String(object.debt) : "",
            collateralizationRatio: isSet(object.collateralizationRatio)
                ? String(object.collateralizationRatio)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateral !== undefined && (obj.collateral = message.collateral);
        message.debt !== undefined && (obj.debt = message.debt);
        message.collateralizationRatio !== undefined &&
            (obj.collateralizationRatio = message.collateralizationRatio);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseVaultInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.collateral = (_c = object.collateral) !== null && _c !== void 0 ? _c : "";
        message.debt = (_d = object.debt) !== null && _d !== void 0 ? _d : "";
        message.collateralizationRatio = (_e = object.collateralizationRatio) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseQueryVaultRequest() {
    return { id: "" };
}
exports.QueryVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
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
                    message.id = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
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
function createBaseQueryVaultInfoRequest() {
    return { id: "" };
}
exports.QueryVaultInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultInfoRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryVaultInfoResponse() {
    return { vaultsInfo: undefined };
}
exports.QueryVaultInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultsInfo !== undefined) {
            exports.VaultInfo.encode(message.vaultsInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultInfoResponse();
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
        const message = createBaseQueryVaultInfoResponse();
        message.vaultsInfo =
            object.vaultsInfo !== undefined && object.vaultsInfo !== null
                ? exports.VaultInfo.fromPartial(object.vaultsInfo)
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
function createBaseQueryAllVaultsByProductRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryAllVaultsByProductRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsByProductRequest();
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
        const message = createBaseQueryAllVaultsByProductRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAllVaultsByProductResponse() {
    return { vault: [], pagination: undefined };
}
exports.QueryAllVaultsByProductResponse = {
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
        const message = createBaseQueryAllVaultsByProductResponse();
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
        const message = createBaseQueryAllVaultsByProductResponse();
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
function createBaseQueryVaultOfOwnerByExtendedPairRequest() {
    return {
        productId: long_1.default.UZERO,
        owner: "",
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryVaultOfOwnerByExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
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
        const message = createBaseQueryVaultOfOwnerByExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
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
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
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
        const message = createBaseQueryVaultOfOwnerByExtendedPairRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
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
function createBaseQueryVaultOfOwnerByExtendedPairResponse() {
    return { vaultId: "" };
}
exports.QueryVaultOfOwnerByExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultId !== "") {
            writer.uint32(10).string(message.vaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultOfOwnerByExtendedPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = reader.string();
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
            vaultId: isSet(object.vaultId) ? String(object.vaultId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultId !== undefined && (obj.vaultId = message.vaultId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultOfOwnerByExtendedPairResponse();
        message.vaultId = (_a = object.vaultId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryVaultByProductRequest() {
    return { productId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryVaultByProductRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultByProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultByProductRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultByProductResponse() {
    return { vaultIds: [] };
}
exports.QueryVaultByProductResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaultIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultByProductResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultIds.push(reader.string());
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
                ? object.vaultIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaultIds) {
            obj.vaultIds = message.vaultIds.map((e) => e);
        }
        else {
            obj.vaultIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVaultByProductResponse();
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryAllVaultByOwnerRequest() {
    return { owner: "", pagination: undefined };
}
exports.QueryAllVaultByOwnerRequest = {
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
        const message = createBaseQueryAllVaultByOwnerRequest();
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
        const message = createBaseQueryAllVaultByOwnerRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllVaultByOwnerResponse() {
    return { vaultIds: [] };
}
exports.QueryAllVaultByOwnerResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaultIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultIds.push(reader.string());
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
                ? object.vaultIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaultIds) {
            obj.vaultIds = message.vaultIds.map((e) => e);
        }
        else {
            obj.vaultIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllVaultByOwnerResponse();
        message.vaultIds = ((_a = object.vaultIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryTokenMintedAllProductsByPairRequest() {
    return {
        productId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryTokenMintedAllProductsByPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
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
        const message = createBaseQueryTokenMintedAllProductsByPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
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
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedAllProductsByPairRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
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
function createBaseQueryTokenMintedAllProductsByPairResponse() {
    return { tokenMinted: "" };
}
exports.QueryTokenMintedAllProductsByPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenMinted !== "") {
            writer.uint32(10).string(message.tokenMinted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedAllProductsByPairResponse();
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
        const message = createBaseQueryTokenMintedAllProductsByPairResponse();
        message.tokenMinted = (_a = object.tokenMinted) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTokenMintedAllProductsRequest() {
    return { productId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryTokenMintedAllProductsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedAllProductsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenMintedAllProductsRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTokenMintedAllProductsResponse() {
    return { tokenMinted: "" };
}
exports.QueryTokenMintedAllProductsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokenMinted !== "") {
            writer.uint32(10).string(message.tokenMinted);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenMintedAllProductsResponse();
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
        const message = createBaseQueryTokenMintedAllProductsResponse();
        message.tokenMinted = (_a = object.tokenMinted) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryVaultCountByProductRequest() {
    return { productId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryVaultCountByProductRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultCountByProductRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultCountByProductResponse() {
    return { vaultCount: long_1.default.UZERO };
}
exports.QueryVaultCountByProductResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.vaultCount.isZero()) {
            writer.uint32(8).uint64(message.vaultCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByProductResponse();
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
        const message = createBaseQueryVaultCountByProductResponse();
        message.vaultCount =
            object.vaultCount !== undefined && object.vaultCount !== null
                ? long_1.default.fromValue(object.vaultCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryVaultCountByProductAndPairRequest() {
    return {
        productId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryVaultCountByProductAndPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
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
        const message = createBaseQueryVaultCountByProductAndPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
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
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultCountByProductAndPairRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
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
function createBaseQueryVaultCountByProductAndPairResponse() {
    return { vaultCount: long_1.default.UZERO };
}
exports.QueryVaultCountByProductAndPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.vaultCount.isZero()) {
            writer.uint32(8).uint64(message.vaultCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultCountByProductAndPairResponse();
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
        const message = createBaseQueryVaultCountByProductAndPairResponse();
        message.vaultCount =
            object.vaultCount !== undefined && object.vaultCount !== null
                ? long_1.default.fromValue(object.vaultCount)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTotalValueLockedByProductExtendedPairRequest() {
    return {
        productId: long_1.default.UZERO,
        extendedPairId: long_1.default.UZERO,
        pagination: undefined,
    };
}
exports.QueryTotalValueLockedByProductExtendedPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
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
        const message = createBaseQueryTotalValueLockedByProductExtendedPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
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
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.extendedPairId !== undefined &&
            (obj.extendedPairId = (message.extendedPairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalValueLockedByProductExtendedPairRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
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
function createBaseQueryTotalValueLockedByProductExtendedPairResponse() {
    return { valueLocked: "" };
}
exports.QueryTotalValueLockedByProductExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valueLocked !== "") {
            writer.uint32(10).string(message.valueLocked);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalValueLockedByProductExtendedPairResponse();
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
        const message = createBaseQueryTotalValueLockedByProductExtendedPairResponse();
        message.valueLocked = (_a = object.valueLocked) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryExtendedPairIDByProductRequest() {
    return { productId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryExtendedPairIDByProductRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.productId.isZero()) {
            writer.uint32(8).uint64(message.productId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairIDByProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.productId = reader.uint64();
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
            productId: isSet(object.productId)
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.productId !== undefined &&
            (obj.productId = (message.productId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairIDByProductRequest();
        message.productId =
            object.productId !== undefined && object.productId !== null
                ? long_1.default.fromValue(object.productId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairIDByProductResponse() {
    return { extendedPairIds: [] };
}
exports.QueryExtendedPairIDByProductResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.extendedPairIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairIDByProductResponse();
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
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairIDByProductResponse();
        message.extendedPairIds =
            ((_a = object.extendedPairIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseQueryStableVaultInfoRequest() {
    return { stableVaultId: "" };
}
exports.QueryStableVaultInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stableVaultId !== "") {
            writer.uint32(10).string(message.stableVaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableVaultId = reader.string();
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
                ? String(object.stableVaultId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.stableVaultId !== undefined &&
            (obj.stableVaultId = message.stableVaultId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryStableVaultInfoRequest();
        message.stableVaultId = (_a = object.stableVaultId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryStableVaultInfoResponse() {
    return { stableMintVault: undefined };
}
exports.QueryStableVaultInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stableMintVault !== undefined) {
            vault_1.StableMintVault.encode(message.stableMintVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultInfoResponse();
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
        const message = createBaseQueryStableVaultInfoResponse();
        message.stableMintVault =
            object.stableMintVault !== undefined && object.stableMintVault !== null
                ? vault_1.StableMintVault.fromPartial(object.stableMintVault)
                : undefined;
        return message;
    },
};
function createBaseQueryAllStableVaultsRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryAllStableVaultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllStableVaultsRequest();
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
        const message = createBaseQueryAllStableVaultsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryAllStableVaultsResponse() {
    return { stableMintVault: [] };
}
exports.QueryAllStableVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.stableMintVault) {
            vault_1.StableMintVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllStableVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stableMintVault.push(vault_1.StableMintVault.decode(reader, reader.uint32()));
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
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllStableVaultsResponse();
        message.stableMintVault =
            ((_a = object.stableMintVault) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.StableMintVault.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryStableVaultByProductExtendedPairRequest() {
    return { appId: long_1.default.UZERO, extendedPairId: long_1.default.UZERO };
}
exports.QueryStableVaultByProductExtendedPairRequest = {
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
        const message = createBaseQueryStableVaultByProductExtendedPairRequest();
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
        const message = createBaseQueryStableVaultByProductExtendedPairRequest();
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
function createBaseQueryStableVaultByProductExtendedPairResponse() {
    return { stableMintVault: undefined };
}
exports.QueryStableVaultByProductExtendedPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stableMintVault !== undefined) {
            vault_1.StableMintVault.encode(message.stableMintVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStableVaultByProductExtendedPairResponse();
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
        const message = createBaseQueryStableVaultByProductExtendedPairResponse();
        message.stableMintVault =
            object.stableMintVault !== undefined && object.stableMintVault !== null
                ? vault_1.StableMintVault.fromPartial(object.stableMintVault)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairIdRequest() {
    return { appId: long_1.default.UZERO, extendedPairId: long_1.default.UZERO };
}
exports.QueryExtendedPairVaultMappingByAppAndExtendedPairIdRequest = {
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
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairIdRequest();
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
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairIdRequest();
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
function createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairIdResponse() {
    return { extendedPairVaultMapping: undefined };
}
exports.QueryExtendedPairVaultMappingByAppAndExtendedPairIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.extendedPairVaultMapping !== undefined) {
            vault_1.ExtendedPairVaultMapping.encode(message.extendedPairVaultMapping, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairVaultMapping = vault_1.ExtendedPairVaultMapping.decode(reader, reader.uint32());
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
                ? vault_1.ExtendedPairVaultMapping.fromJSON(object.extendedPairVaultMapping)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.extendedPairVaultMapping !== undefined &&
            (obj.extendedPairVaultMapping = message.extendedPairVaultMapping
                ? vault_1.ExtendedPairVaultMapping.toJSON(message.extendedPairVaultMapping)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExtendedPairVaultMappingByAppAndExtendedPairIdResponse();
        message.extendedPairVaultMapping =
            object.extendedPairVaultMapping !== undefined &&
                object.extendedPairVaultMapping !== null
                ? vault_1.ExtendedPairVaultMapping.fromPartial(object.extendedPairVaultMapping)
                : undefined;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryExtendedPairVaultMappingByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
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
        const message = createBaseQueryExtendedPairVaultMappingByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByAppResponse() {
    return { extendedPairVaultMapping: [] };
}
exports.QueryExtendedPairVaultMappingByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.extendedPairVaultMapping) {
            vault_1.ExtendedPairVaultMapping.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.extendedPairVaultMapping.push(vault_1.ExtendedPairVaultMapping.decode(reader, reader.uint32()));
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
                ? object.extendedPairVaultMapping.map((e) => vault_1.ExtendedPairVaultMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPairVaultMapping) {
            obj.extendedPairVaultMapping = message.extendedPairVaultMapping.map((e) => e ? vault_1.ExtendedPairVaultMapping.toJSON(e) : undefined);
        }
        else {
            obj.extendedPairVaultMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairVaultMappingByAppResponse();
        message.extendedPairVaultMapping =
            ((_a = object.extendedPairVaultMapping) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.ExtendedPairVaultMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByOwnerAndAppRequest() {
    return { owner: "", appId: long_1.default.UZERO };
}
exports.QueryExtendedPairVaultMappingByOwnerAndAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByOwnerAndAppResponse() {
    return { extendedPairtoVaultMapping: [] };
}
exports.QueryExtendedPairVaultMappingByOwnerAndAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.extendedPairtoVaultMapping) {
            vault_1.ExtendedPairToVaultMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extendedPairtoVaultMapping.push(vault_1.ExtendedPairToVaultMapping.decode(reader, reader.uint32()));
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
            extendedPairtoVaultMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairtoVaultMapping)
                ? object.extendedPairtoVaultMapping.map((e) => vault_1.ExtendedPairToVaultMapping.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.extendedPairtoVaultMapping) {
            obj.extendedPairtoVaultMapping = message.extendedPairtoVaultMapping.map((e) => (e ? vault_1.ExtendedPairToVaultMapping.toJSON(e) : undefined));
        }
        else {
            obj.extendedPairtoVaultMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppResponse();
        message.extendedPairtoVaultMapping =
            ((_a = object.extendedPairtoVaultMapping) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.ExtendedPairToVaultMapping.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDRequest() {
    return { owner: "", appId: long_1.default.UZERO, extendedPair: long_1.default.UZERO };
}
exports.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (!message.extendedPair.isZero()) {
            writer.uint32(24).uint64(message.extendedPair);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.extendedPair = reader.uint64();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            extendedPair: isSet(object.extendedPair)
                ? long_1.default.fromValue(object.extendedPair)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.extendedPair !== undefined &&
            (obj.extendedPair = (message.extendedPair || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.extendedPair =
            object.extendedPair !== undefined && object.extendedPair !== null
                ? long_1.default.fromValue(object.extendedPair)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDResponse() {
    return { vaultId: "" };
}
exports.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vaultId !== "") {
            writer.uint32(10).string(message.vaultId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultId = reader.string();
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
            vaultId: isSet(object.vaultId) ? String(object.vaultId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultId !== undefined && (obj.vaultId = message.vaultId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDResponse();
        message.vaultId = (_a = object.vaultId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryTVLlockedByAppRequest() {
    return { appId: long_1.default.UZERO };
}
exports.QueryTVLlockedByAppRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTVLlockedByAppRequest();
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
        const message = createBaseQueryTVLlockedByAppRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTVLlockedByAppResponse() {
    return { tvldata: [] };
}
exports.QueryTVLlockedByAppResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tvldata) {
            vault_1.TvlLockedDataMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTVLlockedByAppResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tvldata.push(vault_1.TvlLockedDataMap.decode(reader, reader.uint32()));
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
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTVLlockedByAppResponse();
        message.tvldata =
            ((_a = object.tvldata) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.TvlLockedDataMap.fromPartial(e))) || [];
        return message;
    },
};
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryVault = this.QueryVault.bind(this);
        this.QueryVaultInfo = this.QueryVaultInfo.bind(this);
        this.QueryAllVaults = this.QueryAllVaults.bind(this);
        this.QueryAllVaultsByProduct = this.QueryAllVaultsByProduct.bind(this);
        this.QueryAllVaultsByAppAndExtendedPair =
            this.QueryAllVaultsByAppAndExtendedPair.bind(this);
        this.QueryVaultOfOwnerByExtendedPair =
            this.QueryVaultOfOwnerByExtendedPair.bind(this);
        this.QueryVaultByProduct = this.QueryVaultByProduct.bind(this);
        this.QueryAllVaultByOwner = this.QueryAllVaultByOwner.bind(this);
        this.QueryTokenMintedAllProductsByPair =
            this.QueryTokenMintedAllProductsByPair.bind(this);
        this.QueryTokenMintedAllProducts =
            this.QueryTokenMintedAllProducts.bind(this);
        this.QueryVaultCountByProduct = this.QueryVaultCountByProduct.bind(this);
        this.QueryVaultCountByProductAndPair =
            this.QueryVaultCountByProductAndPair.bind(this);
        this.QueryTotalValueLockedByProductExtendedPair =
            this.QueryTotalValueLockedByProductExtendedPair.bind(this);
        this.QueryExtendedPairIDByProduct =
            this.QueryExtendedPairIDByProduct.bind(this);
        this.QueryStableVaultInfo = this.QueryStableVaultInfo.bind(this);
        this.QueryAllStableVaults = this.QueryAllStableVaults.bind(this);
        this.QueryStableVaultByProductExtendedPair =
            this.QueryStableVaultByProductExtendedPair.bind(this);
        this.QueryExtendedPairVaultMappingByAppAndExtendedPairId =
            this.QueryExtendedPairVaultMappingByAppAndExtendedPairId.bind(this);
        this.QueryExtendedPairVaultMappingByApp =
            this.QueryExtendedPairVaultMappingByApp.bind(this);
        this.QueryExtendedPairVaultMappingByOwnerAndApp =
            this.QueryExtendedPairVaultMappingByOwnerAndApp.bind(this);
        this.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairID =
            this.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairID.bind(this);
        this.QueryTVLlockedByApp = this.QueryTVLlockedByApp.bind(this);
    }
    QueryVault(request) {
        const data = exports.QueryVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVault", data);
        return promise.then((data) => exports.QueryVaultResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultInfo(request) {
        const data = exports.QueryVaultInfoRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVaultInfo", data);
        return promise.then((data) => exports.QueryVaultInfoResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaults(request) {
        const data = exports.QueryAllVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryAllVaults", data);
        return promise.then((data) => exports.QueryAllVaultsResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaultsByProduct(request) {
        const data = exports.QueryAllVaultsByProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryAllVaultsByProduct", data);
        return promise.then((data) => exports.QueryAllVaultsByProductResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaultsByAppAndExtendedPair(request) {
        const data = exports.QueryAllVaultsByAppAndExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryAllVaultsByAppAndExtendedPair", data);
        return promise.then((data) => exports.QueryAllVaultsByAppAndExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultOfOwnerByExtendedPair(request) {
        const data = exports.QueryVaultOfOwnerByExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVaultOfOwnerByExtendedPair", data);
        return promise.then((data) => exports.QueryVaultOfOwnerByExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultByProduct(request) {
        const data = exports.QueryVaultByProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVaultByProduct", data);
        return promise.then((data) => exports.QueryVaultByProductResponse.decode(new _m0.Reader(data)));
    }
    QueryAllVaultByOwner(request) {
        const data = exports.QueryAllVaultByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryAllVaultByOwner", data);
        return promise.then((data) => exports.QueryAllVaultByOwnerResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenMintedAllProductsByPair(request) {
        const data = exports.QueryTokenMintedAllProductsByPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryTokenMintedAllProductsByPair", data);
        return promise.then((data) => exports.QueryTokenMintedAllProductsByPairResponse.decode(new _m0.Reader(data)));
    }
    QueryTokenMintedAllProducts(request) {
        const data = exports.QueryTokenMintedAllProductsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryTokenMintedAllProducts", data);
        return promise.then((data) => exports.QueryTokenMintedAllProductsResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultCountByProduct(request) {
        const data = exports.QueryVaultCountByProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVaultCountByProduct", data);
        return promise.then((data) => exports.QueryVaultCountByProductResponse.decode(new _m0.Reader(data)));
    }
    QueryVaultCountByProductAndPair(request) {
        const data = exports.QueryVaultCountByProductAndPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVaultCountByProductAndPair", data);
        return promise.then((data) => exports.QueryVaultCountByProductAndPairResponse.decode(new _m0.Reader(data)));
    }
    QueryTotalValueLockedByProductExtendedPair(request) {
        const data = exports.QueryTotalValueLockedByProductExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryTotalValueLockedByProductExtendedPair", data);
        return promise.then((data) => exports.QueryTotalValueLockedByProductExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairIDByProduct(request) {
        const data = exports.QueryExtendedPairIDByProductRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryExtendedPairIDByProduct", data);
        return promise.then((data) => exports.QueryExtendedPairIDByProductResponse.decode(new _m0.Reader(data)));
    }
    QueryStableVaultInfo(request) {
        const data = exports.QueryStableVaultInfoRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryStableVaultInfo", data);
        return promise.then((data) => exports.QueryStableVaultInfoResponse.decode(new _m0.Reader(data)));
    }
    QueryAllStableVaults(request) {
        const data = exports.QueryAllStableVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryAllStableVaults", data);
        return promise.then((data) => exports.QueryAllStableVaultsResponse.decode(new _m0.Reader(data)));
    }
    QueryStableVaultByProductExtendedPair(request) {
        const data = exports.QueryStableVaultByProductExtendedPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryStableVaultByProductExtendedPair", data);
        return promise.then((data) => exports.QueryStableVaultByProductExtendedPairResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairVaultMappingByAppAndExtendedPairId(request) {
        const data = exports.QueryExtendedPairVaultMappingByAppAndExtendedPairIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryExtendedPairVaultMappingByAppAndExtendedPairId", data);
        return promise.then((data) => exports.QueryExtendedPairVaultMappingByAppAndExtendedPairIdResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairVaultMappingByApp(request) {
        const data = exports.QueryExtendedPairVaultMappingByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryExtendedPairVaultMappingByApp", data);
        return promise.then((data) => exports.QueryExtendedPairVaultMappingByAppResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairVaultMappingByOwnerAndApp(request) {
        const data = exports.QueryExtendedPairVaultMappingByOwnerAndAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryExtendedPairVaultMappingByOwnerAndApp", data);
        return promise.then((data) => exports.QueryExtendedPairVaultMappingByOwnerAndAppResponse.decode(new _m0.Reader(data)));
    }
    QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairID(request) {
        const data = exports.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairID", data);
        return promise.then((data) => exports.QueryExtendedPairVaultMappingByOwnerAndAppAndExtendedPairIDResponse.decode(new _m0.Reader(data)));
    }
    QueryTVLlockedByApp(request) {
        const data = exports.QueryTVLlockedByAppRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryTVLlockedByApp", data);
        return promise.then((data) => exports.QueryTVLlockedByAppResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querier.js.map