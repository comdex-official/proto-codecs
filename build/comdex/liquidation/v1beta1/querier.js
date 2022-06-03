"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAppIdsResponse = exports.QueryAppIdsRequest = exports.QueryLockedVaultsPairResponse = exports.QueryLockedVaultsPairRequest = exports.QueryUserLockedVaultsHistoryResponse = exports.QueryUserLockedVaultsHistoryRequest = exports.QueryUserLockedVaultsResponse = exports.QueryUserLockedVaultsRequest = exports.QueryLockedVaultsHistoryResponse = exports.QueryLockedVaultsHistoryRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryLockedVaultsResponse = exports.QueryLockedVaultsRequest = exports.QueryLockedVaultResponse = exports.QueryLockedVaultRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const locked_vault_1 = require("../../../comdex/liquidation/v1beta1/locked_vault");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("../../../comdex/liquidation/v1beta1/params");
exports.protobufPackage = "comdex.liquidation.v1beta1";
function createBaseQueryLockedVaultRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryLockedVaultRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultRequest();
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
        const message = createBaseQueryLockedVaultRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryLockedVaultResponse() {
    return { lockedVault: undefined };
}
exports.QueryLockedVaultResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockedVault !== undefined) {
            locked_vault_1.LockedVault.encode(message.lockedVault, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVault = locked_vault_1.LockedVault.decode(reader, reader.uint32());
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
            lockedVault: isSet(object.lockedVault)
                ? locked_vault_1.LockedVault.fromJSON(object.lockedVault)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockedVault !== undefined &&
            (obj.lockedVault = message.lockedVault
                ? locked_vault_1.LockedVault.toJSON(message.lockedVault)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockedVaultResponse();
        message.lockedVault =
            object.lockedVault !== undefined && object.lockedVault !== null
                ? locked_vault_1.LockedVault.fromPartial(object.lockedVault)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsRequest() {
    return { pagination: undefined };
}
exports.QueryLockedVaultsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsRequest();
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
        const message = createBaseQueryLockedVaultsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsResponse() {
    return { lockedVaults: [], pagination: undefined };
}
exports.QueryLockedVaultsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.lockedVaults) {
            locked_vault_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVaults.push(locked_vault_1.LockedVault.decode(reader, reader.uint32()));
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
            lockedVaults: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVaults)
                ? object.lockedVaults.map((e) => locked_vault_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedVaults) {
            obj.lockedVaults = message.lockedVaults.map((e) => e ? locked_vault_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVaults = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockedVaultsResponse();
        message.lockedVaults =
            ((_a = object.lockedVaults) === null || _a === void 0 ? void 0 : _a.map((e) => locked_vault_1.LockedVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsHistoryRequest() {
    return { pagination: undefined };
}
exports.QueryLockedVaultsHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsHistoryRequest();
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
        const message = createBaseQueryLockedVaultsHistoryRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsHistoryResponse() {
    return { lockedVaultsHistory: [], pagination: undefined };
}
exports.QueryLockedVaultsHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.lockedVaultsHistory) {
            locked_vault_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVaultsHistory.push(locked_vault_1.LockedVault.decode(reader, reader.uint32()));
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
            lockedVaultsHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVaultsHistory)
                ? object.lockedVaultsHistory.map((e) => locked_vault_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedVaultsHistory) {
            obj.lockedVaultsHistory = message.lockedVaultsHistory.map((e) => e ? locked_vault_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVaultsHistory = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockedVaultsHistoryResponse();
        message.lockedVaultsHistory =
            ((_a = object.lockedVaultsHistory) === null || _a === void 0 ? void 0 : _a.map((e) => locked_vault_1.LockedVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryUserLockedVaultsRequest() {
    return { userAddress: "", pagination: undefined };
}
exports.QueryUserLockedVaultsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userAddress !== "") {
            writer.uint32(10).string(message.userAddress);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserLockedVaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddress = reader.string();
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
            userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined &&
            (obj.userAddress = message.userAddress);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserLockedVaultsRequest();
        message.userAddress = (_a = object.userAddress) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryUserLockedVaultsResponse() {
    return { userLockedVaults: [], pagination: undefined };
}
exports.QueryUserLockedVaultsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userLockedVaults) {
            locked_vault_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserLockedVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userLockedVaults.push(locked_vault_1.LockedVault.decode(reader, reader.uint32()));
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
            userLockedVaults: Array.isArray(object === null || object === void 0 ? void 0 : object.userLockedVaults)
                ? object.userLockedVaults.map((e) => locked_vault_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userLockedVaults) {
            obj.userLockedVaults = message.userLockedVaults.map((e) => e ? locked_vault_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.userLockedVaults = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserLockedVaultsResponse();
        message.userLockedVaults =
            ((_a = object.userLockedVaults) === null || _a === void 0 ? void 0 : _a.map((e) => locked_vault_1.LockedVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryUserLockedVaultsHistoryRequest() {
    return { userAddress: "", pagination: undefined };
}
exports.QueryUserLockedVaultsHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userAddress !== "") {
            writer.uint32(10).string(message.userAddress);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserLockedVaultsHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddress = reader.string();
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
            userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined &&
            (obj.userAddress = message.userAddress);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserLockedVaultsHistoryRequest();
        message.userAddress = (_a = object.userAddress) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryUserLockedVaultsHistoryResponse() {
    return { userLockedVaultsHistory: [], pagination: undefined };
}
exports.QueryUserLockedVaultsHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userLockedVaultsHistory) {
            locked_vault_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUserLockedVaultsHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userLockedVaultsHistory.push(locked_vault_1.LockedVault.decode(reader, reader.uint32()));
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
            userLockedVaultsHistory: Array.isArray(object === null || object === void 0 ? void 0 : object.userLockedVaultsHistory)
                ? object.userLockedVaultsHistory.map((e) => locked_vault_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userLockedVaultsHistory) {
            obj.userLockedVaultsHistory = message.userLockedVaultsHistory.map((e) => e ? locked_vault_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.userLockedVaultsHistory = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUserLockedVaultsHistoryResponse();
        message.userLockedVaultsHistory =
            ((_a = object.userLockedVaultsHistory) === null || _a === void 0 ? void 0 : _a.map((e) => locked_vault_1.LockedVault.fromPartial(e))) ||
                [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsPairRequest() {
    return { PairId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryLockedVaultsPairRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.PairId.isZero()) {
            writer.uint32(8).uint64(message.PairId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsPairRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PairId = reader.uint64();
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
            PairId: isSet(object.PairId) ? long_1.default.fromValue(object.PairId) : long_1.default.UZERO,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.PairId !== undefined &&
            (obj.PairId = (message.PairId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockedVaultsPairRequest();
        message.PairId =
            object.PairId !== undefined && object.PairId !== null
                ? long_1.default.fromValue(object.PairId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryLockedVaultsPairResponse() {
    return { lockedVaultsPair: [], pagination: undefined };
}
exports.QueryLockedVaultsPairResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.lockedVaultsPair) {
            locked_vault_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockedVaultsPairResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockedVaultsPair.push(locked_vault_1.LockedVault.decode(reader, reader.uint32()));
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
            lockedVaultsPair: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVaultsPair)
                ? object.lockedVaultsPair.map((e) => locked_vault_1.LockedVault.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedVaultsPair) {
            obj.lockedVaultsPair = message.lockedVaultsPair.map((e) => e ? locked_vault_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVaultsPair = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryLockedVaultsPairResponse();
        message.lockedVaultsPair =
            ((_a = object.lockedVaultsPair) === null || _a === void 0 ? void 0 : _a.map((e) => locked_vault_1.LockedVault.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAppIdsRequest() {
    return {};
}
exports.QueryAppIdsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppIdsRequest();
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
        const message = createBaseQueryAppIdsRequest();
        return message;
    },
};
function createBaseQueryAppIdsResponse() {
    return { WhitelistedAppIds: undefined };
}
exports.QueryAppIdsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.WhitelistedAppIds !== undefined) {
            locked_vault_1.WhitelistedAppIds.encode(message.WhitelistedAppIds, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.WhitelistedAppIds = locked_vault_1.WhitelistedAppIds.decode(reader, reader.uint32());
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
            WhitelistedAppIds: isSet(object.WhitelistedAppIds)
                ? locked_vault_1.WhitelistedAppIds.fromJSON(object.WhitelistedAppIds)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.WhitelistedAppIds !== undefined &&
            (obj.WhitelistedAppIds = message.WhitelistedAppIds
                ? locked_vault_1.WhitelistedAppIds.toJSON(message.WhitelistedAppIds)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAppIdsResponse();
        message.WhitelistedAppIds =
            object.WhitelistedAppIds !== undefined &&
                object.WhitelistedAppIds !== null
                ? locked_vault_1.WhitelistedAppIds.fromPartial(object.WhitelistedAppIds)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryLockedVault = this.QueryLockedVault.bind(this);
        this.QueryLockedVaults = this.QueryLockedVaults.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
        this.QueryLockedVaultsHistory = this.QueryLockedVaultsHistory.bind(this);
        this.QueryUserLockedVaults = this.QueryUserLockedVaults.bind(this);
        this.QueryUserLockedVaultsHistory =
            this.QueryUserLockedVaultsHistory.bind(this);
        this.QueryLockedVaultsPair = this.QueryLockedVaultsPair.bind(this);
        this.QueryAppIds = this.QueryAppIds.bind(this);
    }
    QueryLockedVault(request) {
        const data = exports.QueryLockedVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryLockedVault", data);
        return promise.then((data) => exports.QueryLockedVaultResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryLockedVaults(request) {
        const data = exports.QueryLockedVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryLockedVaults", data);
        return promise.then((data) => exports.QueryLockedVaultsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryLockedVaultsHistory(request) {
        const data = exports.QueryLockedVaultsHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryLockedVaultsHistory", data);
        return promise.then((data) => exports.QueryLockedVaultsHistoryResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryUserLockedVaults(request) {
        const data = exports.QueryUserLockedVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryUserLockedVaults", data);
        return promise.then((data) => exports.QueryUserLockedVaultsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryUserLockedVaultsHistory(request) {
        const data = exports.QueryUserLockedVaultsHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryUserLockedVaultsHistory", data);
        return promise.then((data) => exports.QueryUserLockedVaultsHistoryResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryLockedVaultsPair(request) {
        const data = exports.QueryLockedVaultsPairRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryLockedVaultsPair", data);
        return promise.then((data) => exports.QueryLockedVaultsPairResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAppIds(request) {
        const data = exports.QueryAppIdsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidation.v1beta1.Query", "QueryAppIds", data);
        return promise.then((data) => exports.QueryAppIdsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=querier.js.map