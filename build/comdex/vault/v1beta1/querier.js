"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceClientImpl = exports.QueryCAssetsMintStatsResponse = exports.QueryCAssetsMintStatsRequest = exports.QueryTotalCollateralResponse = exports.QueryTotalCollateralRequest = exports.QueryAllVaultsResponse = exports.QueryAllVaultsRequest = exports.QueryVaultsResponse = exports.QueryVaultsRequest = exports.QueryVaultResponse = exports.QueryVaultRequest = exports.VaultInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const vault_1 = require("./vault");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseVaultInfo() {
    return {
        id: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        owner: "",
        collateral: undefined,
        debt: undefined,
        collateralizationRatio: "",
        rewardsReceived: [],
    };
}
exports.VaultInfo = {
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
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(42).fork()).ldelim();
        }
        if (message.collateralizationRatio !== "") {
            writer.uint32(50).string(message.collateralizationRatio);
        }
        for (const v of message.rewardsReceived) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVaultInfo();
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
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.collateralizationRatio = reader.string();
                    break;
                case 7:
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
            collateral: isSet(object.collateral)
                ? coin_1.Coin.fromJSON(object.collateral)
                : undefined,
            debt: isSet(object.debt) ? coin_1.Coin.fromJSON(object.debt) : undefined,
            collateralizationRatio: isSet(object.collateralizationRatio)
                ? String(object.collateralizationRatio)
                : "",
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
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        message.collateralizationRatio !== undefined &&
            (obj.collateralizationRatio = message.collateralizationRatio);
        if (message.rewardsReceived) {
            obj.rewardsReceived = message.rewardsReceived.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewardsReceived = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVaultInfo();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateral =
            object.collateral !== undefined && object.collateral !== null
                ? coin_1.Coin.fromPartial(object.collateral)
                : undefined;
        message.debt =
            object.debt !== undefined && object.debt !== null
                ? coin_1.Coin.fromPartial(object.debt)
                : undefined;
        message.collateralizationRatio = (_b = object.collateralizationRatio) !== null && _b !== void 0 ? _b : "";
        message.rewardsReceived =
            ((_c = object.rewardsReceived) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryVaultRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryVaultRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            id: isSet(object.id) ? long_1.default.fromString(object.id) : long_1.default.UZERO,
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
    return { vaultInfo: undefined };
}
exports.QueryVaultResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.vaultInfo !== undefined) {
            exports.VaultInfo.encode(message.vaultInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultInfo = exports.VaultInfo.decode(reader, reader.uint32());
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
            vaultInfo: isSet(object.vaultInfo)
                ? exports.VaultInfo.fromJSON(object.vaultInfo)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vaultInfo !== undefined &&
            (obj.vaultInfo = message.vaultInfo
                ? exports.VaultInfo.toJSON(message.vaultInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVaultResponse();
        message.vaultInfo =
            object.vaultInfo !== undefined && object.vaultInfo !== null
                ? exports.VaultInfo.fromPartial(object.vaultInfo)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultsRequest() {
    return { owner: "", pagination: undefined };
}
exports.QueryVaultsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultsRequest();
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
        const message = createBaseQueryVaultsRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVaultsResponse() {
    return { vaultsInfo: [], pagination: undefined };
}
exports.QueryVaultsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vaultsInfo) {
            exports.VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVaultsResponse();
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
        const message = createBaseQueryVaultsResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    return { vaultsInfo: [], pagination: undefined };
}
exports.QueryAllVaultsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vaultsInfo) {
            exports.VaultInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVaultsResponse();
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
        const message = createBaseQueryAllVaultsResponse();
        message.vaultsInfo =
            ((_a = object.vaultsInfo) === null || _a === void 0 ? void 0 : _a.map((e) => exports.VaultInfo.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalCollateralRequest() {
    return {};
}
exports.QueryTotalCollateralRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalCollateralRequest();
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
        const message = createBaseQueryTotalCollateralRequest();
        return message;
    },
};
function createBaseQueryTotalCollateralResponse() {
    return { collaterals: [] };
}
exports.QueryTotalCollateralResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.collaterals) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalCollateralResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collaterals.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            collaterals: Array.isArray(object === null || object === void 0 ? void 0 : object.collaterals)
                ? object.collaterals.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collaterals) {
            obj.collaterals = message.collaterals.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.collaterals = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalCollateralResponse();
        message.collaterals =
            ((_a = object.collaterals) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryCAssetsMintStatsRequest() {
    return {};
}
exports.QueryCAssetsMintStatsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCAssetsMintStatsRequest();
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
        const message = createBaseQueryCAssetsMintStatsRequest();
        return message;
    },
};
function createBaseQueryCAssetsMintStatsResponse() {
    return { mintStats: [] };
}
exports.QueryCAssetsMintStatsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.mintStats) {
            vault_1.CAssetsMintStatistics.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCAssetsMintStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintStats.push(vault_1.CAssetsMintStatistics.decode(reader, reader.uint32()));
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
            mintStats: Array.isArray(object === null || object === void 0 ? void 0 : object.mintStats)
                ? object.mintStats.map((e) => vault_1.CAssetsMintStatistics.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.mintStats) {
            obj.mintStats = message.mintStats.map((e) => e ? vault_1.CAssetsMintStatistics.toJSON(e) : undefined);
        }
        else {
            obj.mintStats = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCAssetsMintStatsResponse();
        message.mintStats =
            ((_a = object.mintStats) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.CAssetsMintStatistics.fromPartial(e))) || [];
        return message;
    },
};
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryVault = this.QueryVault.bind(this);
        this.QueryVaults = this.QueryVaults.bind(this);
        this.QueryAllVaults = this.QueryAllVaults.bind(this);
        this.QueryTotalCollaterals = this.QueryTotalCollaterals.bind(this);
        this.QueryCAssetMintStatistics = this.QueryCAssetMintStatistics.bind(this);
    }
    QueryVault(request) {
        const data = exports.QueryVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVault", data);
        return promise.then((data) => exports.QueryVaultResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryVaults(request) {
        const data = exports.QueryVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryVaults", data);
        return promise.then((data) => exports.QueryVaultsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAllVaults(request) {
        const data = exports.QueryAllVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryAllVaults", data);
        return promise.then((data) => exports.QueryAllVaultsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryTotalCollaterals(request) {
        const data = exports.QueryTotalCollateralRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryTotalCollaterals", data);
        return promise.then((data) => exports.QueryTotalCollateralResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryCAssetMintStatistics(request) {
        const data = exports.QueryCAssetsMintStatsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.vault.v1beta1.QueryService", "QueryCAssetMintStatistics", data);
        return promise.then((data) => exports.QueryCAssetsMintStatsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querier.js.map