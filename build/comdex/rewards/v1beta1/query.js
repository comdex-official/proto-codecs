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
exports.QueryClientImpl = exports.QueryExternalRewardLendsResponse = exports.QueryExternalRewardLendsRequest = exports.QueryWhitelistedAppIdsVaultResponse = exports.QueryWhitelistedAppIdsVaultRequest = exports.QueryExternalRewardVaultsResponse = exports.QueryExternalRewardVaultsRequest = exports.QueryExternalRewardsLockersResponse = exports.QueryExternalRewardsLockersRequest = exports.QueryRewardResponse = exports.QueryRewardRequest = exports.QueryRewardsResponse = exports.QueryRewardsRequest = exports.QueryGaugeByDurationResponse = exports.QueryGaugesByDurationRequest = exports.QueryGaugeByIdResponse = exports.QueryGaugeByIdRequest = exports.QueryAllGaugesResponse = exports.QueryAllGaugesRequest = exports.QueryEpochInfoByDurationResponse = exports.QueryEpochInfoByDurationRequest = exports.QueryAllEpochsInfoResponse = exports.QueryAllEpochsInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/rewards/v1beta1/params");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const epochs_1 = require("../../../comdex/rewards/v1beta1/epochs");
const gauge_1 = require("../../../comdex/rewards/v1beta1/gauge");
const rewards_1 = require("../../../comdex/rewards/v1beta1/rewards");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
function createBaseQueryAllEpochsInfoRequest() {
    return { pagination: undefined };
}
exports.QueryAllEpochsInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEpochsInfoRequest();
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
        const message = createBaseQueryAllEpochsInfoRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllEpochsInfoResponse() {
    return { epochs: [], pagination: undefined };
}
exports.QueryAllEpochsInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            epochs_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEpochsInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(epochs_1.EpochInfo.decode(reader, reader.uint32()));
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
            epochs: Array.isArray(object === null || object === void 0 ? void 0 : object.epochs)
                ? object.epochs.map((e) => epochs_1.EpochInfo.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map((e) => e ? epochs_1.EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllEpochsInfoResponse();
        message.epochs = ((_a = object.epochs) === null || _a === void 0 ? void 0 : _a.map((e) => epochs_1.EpochInfo.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryEpochInfoByDurationRequest() {
    return { durationSeconds: long_1.default.UZERO };
}
exports.QueryEpochInfoByDurationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.durationSeconds.isZero()) {
            writer.uint32(8).uint64(message.durationSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochInfoByDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.durationSeconds = reader.uint64();
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
            durationSeconds: isSet(object.durationSeconds)
                ? long_1.default.fromValue(object.durationSeconds)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.durationSeconds !== undefined &&
            (obj.durationSeconds = (message.durationSeconds || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochInfoByDurationRequest();
        message.durationSeconds =
            object.durationSeconds !== undefined && object.durationSeconds !== null
                ? long_1.default.fromValue(object.durationSeconds)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryEpochInfoByDurationResponse() {
    return { epoch: undefined };
}
exports.QueryEpochInfoByDurationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.epoch !== undefined) {
            epochs_1.EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochInfoByDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epoch = epochs_1.EpochInfo.decode(reader, reader.uint32());
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
            epoch: isSet(object.epoch) ? epochs_1.EpochInfo.fromJSON(object.epoch) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch !== undefined &&
            (obj.epoch = message.epoch ? epochs_1.EpochInfo.toJSON(message.epoch) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochInfoByDurationResponse();
        message.epoch =
            object.epoch !== undefined && object.epoch !== null
                ? epochs_1.EpochInfo.fromPartial(object.epoch)
                : undefined;
        return message;
    },
};
function createBaseQueryAllGaugesRequest() {
    return { pagination: undefined };
}
exports.QueryAllGaugesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGaugesRequest();
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
        const message = createBaseQueryAllGaugesRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllGaugesResponse() {
    return { gauges: [], pagination: undefined };
}
exports.QueryAllGaugesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
            gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges)
                ? object.gauges.map((e) => gauge_1.Gauge.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gauges) {
            obj.gauges = message.gauges.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.gauges = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllGaugesResponse();
        message.gauges = ((_a = object.gauges) === null || _a === void 0 ? void 0 : _a.map((e) => gauge_1.Gauge.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryGaugeByIdRequest() {
    return { gaugeId: long_1.default.UZERO };
}
exports.QueryGaugeByIdRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.gaugeId.isZero()) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gaugeId = reader.uint64();
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
            gaugeId: isSet(object.gaugeId)
                ? long_1.default.fromValue(object.gaugeId)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gaugeId !== undefined &&
            (obj.gaugeId = (message.gaugeId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeByIdRequest();
        message.gaugeId =
            object.gaugeId !== undefined && object.gaugeId !== null
                ? long_1.default.fromValue(object.gaugeId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryGaugeByIdResponse() {
    return { gauge: undefined };
}
exports.QueryGaugeByIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gauge !== undefined) {
            gauge_1.Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge = gauge_1.Gauge.decode(reader, reader.uint32());
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
            gauge: isSet(object.gauge) ? gauge_1.Gauge.fromJSON(object.gauge) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gauge !== undefined &&
            (obj.gauge = message.gauge ? gauge_1.Gauge.toJSON(message.gauge) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeByIdResponse();
        message.gauge =
            object.gauge !== undefined && object.gauge !== null
                ? gauge_1.Gauge.fromPartial(object.gauge)
                : undefined;
        return message;
    },
};
function createBaseQueryGaugesByDurationRequest() {
    return { durationSeconds: long_1.default.UZERO };
}
exports.QueryGaugesByDurationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.durationSeconds.isZero()) {
            writer.uint32(8).uint64(message.durationSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugesByDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.durationSeconds = reader.uint64();
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
            durationSeconds: isSet(object.durationSeconds)
                ? long_1.default.fromValue(object.durationSeconds)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.durationSeconds !== undefined &&
            (obj.durationSeconds = (message.durationSeconds || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugesByDurationRequest();
        message.durationSeconds =
            object.durationSeconds !== undefined && object.durationSeconds !== null
                ? long_1.default.fromValue(object.durationSeconds)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryGaugeByDurationResponse() {
    return { gauges: [] };
}
exports.QueryGaugeByDurationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeByDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
            gauges: Array.isArray(object === null || object === void 0 ? void 0 : object.gauges)
                ? object.gauges.map((e) => gauge_1.Gauge.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gauges) {
            obj.gauges = message.gauges.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.gauges = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGaugeByDurationResponse();
        message.gauges = ((_a = object.gauges) === null || _a === void 0 ? void 0 : _a.map((e) => gauge_1.Gauge.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryRewardsRequest() {
    return { pagination: undefined };
}
exports.QueryRewardsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRewardsRequest();
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
        const message = createBaseQueryRewardsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryRewardsResponse() {
    return { rewards: [], pagination: undefined };
}
exports.QueryRewardsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            rewards_1.InternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(rewards_1.InternalRewards.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map((e) => rewards_1.InternalRewards.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? rewards_1.InternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRewardsResponse();
        message.rewards =
            ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => rewards_1.InternalRewards.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryRewardRequest() {
    return { id: long_1.default.UZERO };
}
exports.QueryRewardRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRewardRequest();
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
        const message = createBaseQueryRewardRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryRewardResponse() {
    return { reward: [] };
}
exports.QueryRewardResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.reward) {
            rewards_1.InternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reward.push(rewards_1.InternalRewards.decode(reader, reader.uint32()));
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
            reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward)
                ? object.reward.map((e) => rewards_1.InternalRewards.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reward) {
            obj.reward = message.reward.map((e) => e ? rewards_1.InternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRewardResponse();
        message.reward =
            ((_a = object.reward) === null || _a === void 0 ? void 0 : _a.map((e) => rewards_1.InternalRewards.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryExternalRewardsLockersRequest() {
    return { pagination: undefined };
}
exports.QueryExternalRewardsLockersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalRewardsLockersRequest();
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
        const message = createBaseQueryExternalRewardsLockersRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExternalRewardsLockersResponse() {
    return { lockerExternalRewards: [], pagination: undefined };
}
exports.QueryExternalRewardsLockersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockerExternalRewards) {
            rewards_1.LockerExternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalRewardsLockersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockerExternalRewards.push(rewards_1.LockerExternalRewards.decode(reader, reader.uint32()));
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
            lockerExternalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerExternalRewards)
                ? object.lockerExternalRewards.map((e) => rewards_1.LockerExternalRewards.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockerExternalRewards) {
            obj.lockerExternalRewards = message.lockerExternalRewards.map((e) => e ? rewards_1.LockerExternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.lockerExternalRewards = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExternalRewardsLockersResponse();
        message.lockerExternalRewards =
            ((_a = object.lockerExternalRewards) === null || _a === void 0 ? void 0 : _a.map((e) => rewards_1.LockerExternalRewards.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExternalRewardVaultsRequest() {
    return { pagination: undefined };
}
exports.QueryExternalRewardVaultsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalRewardVaultsRequest();
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
        const message = createBaseQueryExternalRewardVaultsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExternalRewardVaultsResponse() {
    return { vaultExternalRewards: [], pagination: undefined };
}
exports.QueryExternalRewardVaultsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaultExternalRewards) {
            rewards_1.VaultExternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalRewardVaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaultExternalRewards.push(rewards_1.VaultExternalRewards.decode(reader, reader.uint32()));
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
            vaultExternalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultExternalRewards)
                ? object.vaultExternalRewards.map((e) => rewards_1.VaultExternalRewards.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaultExternalRewards) {
            obj.vaultExternalRewards = message.vaultExternalRewards.map((e) => e ? rewards_1.VaultExternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.vaultExternalRewards = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExternalRewardVaultsResponse();
        message.vaultExternalRewards =
            ((_a = object.vaultExternalRewards) === null || _a === void 0 ? void 0 : _a.map((e) => rewards_1.VaultExternalRewards.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryWhitelistedAppIdsVaultRequest() {
    return { pagination: undefined };
}
exports.QueryWhitelistedAppIdsVaultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryWhitelistedAppIdsVaultRequest();
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
        const message = createBaseQueryWhitelistedAppIdsVaultRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryWhitelistedAppIdsVaultResponse() {
    return { whitelistedAppIdsVault: [], pagination: undefined };
}
exports.QueryWhitelistedAppIdsVaultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.whitelistedAppIdsVault) {
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
        const message = createBaseQueryWhitelistedAppIdsVaultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.whitelistedAppIdsVault.push(reader.uint64());
                        }
                    }
                    else {
                        message.whitelistedAppIdsVault.push(reader.uint64());
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
            whitelistedAppIdsVault: Array.isArray(object === null || object === void 0 ? void 0 : object.whitelistedAppIdsVault)
                ? object.whitelistedAppIdsVault.map((e) => long_1.default.fromValue(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.whitelistedAppIdsVault) {
            obj.whitelistedAppIdsVault = message.whitelistedAppIdsVault.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.whitelistedAppIdsVault = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryWhitelistedAppIdsVaultResponse();
        message.whitelistedAppIdsVault =
            ((_a = object.whitelistedAppIdsVault) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExternalRewardLendsRequest() {
    return { pagination: undefined };
}
exports.QueryExternalRewardLendsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalRewardLendsRequest();
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
        const message = createBaseQueryExternalRewardLendsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryExternalRewardLendsResponse() {
    return { lendExternalRewards: [], pagination: undefined };
}
exports.QueryExternalRewardLendsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lendExternalRewards) {
            rewards_1.LendExternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalRewardLendsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lendExternalRewards.push(rewards_1.LendExternalRewards.decode(reader, reader.uint32()));
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
            lendExternalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.lendExternalRewards)
                ? object.lendExternalRewards.map((e) => rewards_1.LendExternalRewards.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lendExternalRewards) {
            obj.lendExternalRewards = message.lendExternalRewards.map((e) => e ? rewards_1.LendExternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.lendExternalRewards = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryExternalRewardLendsResponse();
        message.lendExternalRewards =
            ((_a = object.lendExternalRewards) === null || _a === void 0 ? void 0 : _a.map((e) => rewards_1.LendExternalRewards.fromPartial(e))) || [];
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
        this.Params = this.Params.bind(this);
        this.QueryAllEpochsInfo = this.QueryAllEpochsInfo.bind(this);
        this.QueryEpochInfoByDuration = this.QueryEpochInfoByDuration.bind(this);
        this.QueryAllGauges = this.QueryAllGauges.bind(this);
        this.QueryGaugeByID = this.QueryGaugeByID.bind(this);
        this.QueryGaugeByDuration = this.QueryGaugeByDuration.bind(this);
        this.QueryRewards = this.QueryRewards.bind(this);
        this.QueryReward = this.QueryReward.bind(this);
        this.QueryExternalRewardsLockers =
            this.QueryExternalRewardsLockers.bind(this);
        this.QueryExternalRewardVaults = this.QueryExternalRewardVaults.bind(this);
        this.QueryWhitelistedAppIdsVault =
            this.QueryWhitelistedAppIdsVault.bind(this);
        this.QueryExternalRewardLends = this.QueryExternalRewardLends.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    QueryAllEpochsInfo(request) {
        const data = exports.QueryAllEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryAllEpochsInfo", data);
        return promise.then((data) => exports.QueryAllEpochsInfoResponse.decode(new _m0.Reader(data)));
    }
    QueryEpochInfoByDuration(request) {
        const data = exports.QueryEpochInfoByDurationRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryEpochInfoByDuration", data);
        return promise.then((data) => exports.QueryEpochInfoByDurationResponse.decode(new _m0.Reader(data)));
    }
    QueryAllGauges(request) {
        const data = exports.QueryAllGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryAllGauges", data);
        return promise.then((data) => exports.QueryAllGaugesResponse.decode(new _m0.Reader(data)));
    }
    QueryGaugeByID(request) {
        const data = exports.QueryGaugeByIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryGaugeByID", data);
        return promise.then((data) => exports.QueryGaugeByIdResponse.decode(new _m0.Reader(data)));
    }
    QueryGaugeByDuration(request) {
        const data = exports.QueryGaugesByDurationRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryGaugeByDuration", data);
        return promise.then((data) => exports.QueryGaugeByDurationResponse.decode(new _m0.Reader(data)));
    }
    QueryRewards(request) {
        const data = exports.QueryRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryRewards", data);
        return promise.then((data) => exports.QueryRewardsResponse.decode(new _m0.Reader(data)));
    }
    QueryReward(request) {
        const data = exports.QueryRewardRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryReward", data);
        return promise.then((data) => exports.QueryRewardResponse.decode(new _m0.Reader(data)));
    }
    QueryExternalRewardsLockers(request) {
        const data = exports.QueryExternalRewardsLockersRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryExternalRewardsLockers", data);
        return promise.then((data) => exports.QueryExternalRewardsLockersResponse.decode(new _m0.Reader(data)));
    }
    QueryExternalRewardVaults(request) {
        const data = exports.QueryExternalRewardVaultsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryExternalRewardVaults", data);
        return promise.then((data) => exports.QueryExternalRewardVaultsResponse.decode(new _m0.Reader(data)));
    }
    QueryWhitelistedAppIdsVault(request) {
        const data = exports.QueryWhitelistedAppIdsVaultRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryWhitelistedAppIdsVault", data);
        return promise.then((data) => exports.QueryWhitelistedAppIdsVaultResponse.decode(new _m0.Reader(data)));
    }
    QueryExternalRewardLends(request) {
        const data = exports.QueryExternalRewardLendsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryExternalRewardLends", data);
        return promise.then((data) => exports.QueryExternalRewardLendsResponse.decode(new _m0.Reader(data)));
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