"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryServiceClientImpl = exports.QueryVaultsResponse = exports.QueryVaultsRequest = exports.QueryVaultResponse = exports.QueryVaultRequest = exports.VaultInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "comdex.vault.v1beta1";
const baseVaultInfo = {
    id: long_1.default.UZERO,
    pairId: long_1.default.UZERO,
    owner: "",
    collateralizationRatio: "",
};
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVaultInfo };
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVaultInfo };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.pairId !== undefined && object.pairId !== null) {
            message.pairId = long_1.default.fromString(object.pairId);
        }
        else {
            message.pairId = long_1.default.UZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromJSON(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromJSON(object.debt);
        }
        else {
            message.debt = undefined;
        }
        if (object.collateralizationRatio !== undefined &&
            object.collateralizationRatio !== null) {
            message.collateralizationRatio = String(object.collateralizationRatio);
        }
        else {
            message.collateralizationRatio = "";
        }
        return message;
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVaultInfo };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        if (object.pairId !== undefined && object.pairId !== null) {
            message.pairId = object.pairId;
        }
        else {
            message.pairId = long_1.default.UZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.collateral !== undefined && object.collateral !== null) {
            message.collateral = coin_1.Coin.fromPartial(object.collateral);
        }
        else {
            message.collateral = undefined;
        }
        if (object.debt !== undefined && object.debt !== null) {
            message.debt = coin_1.Coin.fromPartial(object.debt);
        }
        else {
            message.debt = undefined;
        }
        if (object.collateralizationRatio !== undefined &&
            object.collateralizationRatio !== null) {
            message.collateralizationRatio = object.collateralizationRatio;
        }
        else {
            message.collateralizationRatio = "";
        }
        return message;
    },
};
const baseQueryVaultRequest = { id: long_1.default.UZERO };
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
        const message = { ...baseQueryVaultRequest };
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
        const message = { ...baseQueryVaultRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryVaultRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryVaultResponse = {};
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
        const message = { ...baseQueryVaultResponse };
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
        const message = { ...baseQueryVaultResponse };
        if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
            message.vaultInfo = exports.VaultInfo.fromJSON(object.vaultInfo);
        }
        else {
            message.vaultInfo = undefined;
        }
        return message;
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
        const message = { ...baseQueryVaultResponse };
        if (object.vaultInfo !== undefined && object.vaultInfo !== null) {
            message.vaultInfo = exports.VaultInfo.fromPartial(object.vaultInfo);
        }
        else {
            message.vaultInfo = undefined;
        }
        return message;
    },
};
const baseQueryVaultsRequest = { owner: "" };
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
        const message = { ...baseQueryVaultsRequest };
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
        const message = { ...baseQueryVaultsRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = { ...baseQueryVaultsRequest };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryVaultsResponse = {};
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
        const message = { ...baseQueryVaultsResponse };
        message.vaultsInfo = [];
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
        const message = { ...baseQueryVaultsResponse };
        message.vaultsInfo = [];
        if (object.vaultsInfo !== undefined && object.vaultsInfo !== null) {
            for (const e of object.vaultsInfo) {
                message.vaultsInfo.push(exports.VaultInfo.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
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
        const message = { ...baseQueryVaultsResponse };
        message.vaultsInfo = [];
        if (object.vaultsInfo !== undefined && object.vaultsInfo !== null) {
            for (const e of object.vaultsInfo) {
                message.vaultsInfo.push(exports.VaultInfo.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
class QueryServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryVault = this.QueryVault.bind(this);
        this.QueryVaults = this.QueryVaults.bind(this);
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
}
exports.QueryServiceClientImpl = QueryServiceClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=querier.js.map