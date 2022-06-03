"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryRewardResponse = exports.QueryRewardRequest = exports.QueryRewardsResponse = exports.QueryRewardsRequest = exports.QueryGaugeByDurationResponse = exports.QueryGaugesByDurationRequest = exports.QueryGaugeByIdResponse = exports.QueryGaugeByIdRequest = exports.QueryAllGaugesResponse = exports.QueryAllGaugesRequest = exports.QueryEpochInfoByDurationResponse = exports.QueryEpochInfoByDurationRequest = exports.QueryAllEpochsInfoResponse = exports.QueryAllEpochsInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const epochs_1 = require("./epochs");
const gauge_1 = require("./gauge");
const rewards_1 = require("./rewards");
exports.protobufPackage = "comdex.rewards.v1beta1";
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
function createBaseQueryAllEpochsInfoRequest() {
    return { pagination: undefined };
}
exports.QueryAllEpochsInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.epochs) {
            epochs_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.durationSeconds.isZero()) {
            writer.uint32(8).uint64(message.durationSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                ? long_1.default.fromString(object.durationSeconds)
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.epoch !== undefined) {
            epochs_1.EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.gaugeId.isZero()) {
            writer.uint32(8).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                ? long_1.default.fromString(object.gaugeId)
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.gauge !== undefined) {
            gauge_1.Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.durationSeconds.isZero()) {
            writer.uint32(8).uint64(message.durationSeconds);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
                ? long_1.default.fromString(object.durationSeconds)
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.rewards) {
            rewards_1.InternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        const message = createBaseQueryRewardRequest();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryRewardResponse() {
    return { reward: undefined };
}
exports.QueryRewardResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reward !== undefined) {
            rewards_1.InternalRewards.encode(message.reward, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reward = rewards_1.InternalRewards.decode(reader, reader.uint32());
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
            reward: isSet(object.reward)
                ? rewards_1.InternalRewards.fromJSON(object.reward)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.reward !== undefined &&
            (obj.reward = message.reward
                ? rewards_1.InternalRewards.toJSON(message.reward)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRewardResponse();
        message.reward =
            object.reward !== undefined && object.reward !== null
                ? rewards_1.InternalRewards.fromPartial(object.reward)
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
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAllEpochsInfo(request) {
        const data = exports.QueryAllEpochsInfoRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryAllEpochsInfo", data);
        return promise.then((data) => exports.QueryAllEpochsInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryEpochInfoByDuration(request) {
        const data = exports.QueryEpochInfoByDurationRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryEpochInfoByDuration", data);
        return promise.then((data) => exports.QueryEpochInfoByDurationResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryAllGauges(request) {
        const data = exports.QueryAllGaugesRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryAllGauges", data);
        return promise.then((data) => exports.QueryAllGaugesResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryGaugeByID(request) {
        const data = exports.QueryGaugeByIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryGaugeByID", data);
        return promise.then((data) => exports.QueryGaugeByIdResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryGaugeByDuration(request) {
        const data = exports.QueryGaugesByDurationRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryGaugeByDuration", data);
        return promise.then((data) => exports.QueryGaugeByDurationResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryRewards(request) {
        const data = exports.QueryRewardsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryRewards", data);
        return promise.then((data) => exports.QueryRewardsResponse.decode(new minimal_1.default.Reader(data)));
    }
    QueryReward(request) {
        const data = exports.QueryRewardRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.rewards.v1beta1.Query", "QueryReward", data);
        return promise.then((data) => exports.QueryRewardResponse.decode(new minimal_1.default.Reader(data)));
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
//# sourceMappingURL=query.js.map