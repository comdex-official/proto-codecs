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
exports.GaugeByTriggerDuration = exports.Gauge = exports.LiquidtyGaugeMetaData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseLiquidtyGaugeMetaData() {
    return { poolId: long_1.default.UZERO, isMasterPool: false, childPoolIds: [] };
}
exports.LiquidtyGaugeMetaData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.isMasterPool === true) {
            writer.uint32(16).bool(message.isMasterPool);
        }
        writer.uint32(26).fork();
        for (const v of message.childPoolIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLiquidtyGaugeMetaData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.isMasterPool = reader.bool();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.childPoolIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.childPoolIds.push(reader.uint64());
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
            poolId: isSet(object.poolId) ? long_1.default.fromValue(object.poolId) : long_1.default.UZERO,
            isMasterPool: isSet(object.isMasterPool)
                ? Boolean(object.isMasterPool)
                : false,
            childPoolIds: Array.isArray(object === null || object === void 0 ? void 0 : object.childPoolIds)
                ? object.childPoolIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.isMasterPool !== undefined &&
            (obj.isMasterPool = message.isMasterPool);
        if (message.childPoolIds) {
            obj.childPoolIds = message.childPoolIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.childPoolIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLiquidtyGaugeMetaData();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.isMasterPool = (_a = object.isMasterPool) !== null && _a !== void 0 ? _a : false;
        message.childPoolIds =
            ((_b = object.childPoolIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseGauge() {
    return {
        id: long_1.default.UZERO,
        from: "",
        createdAt: undefined,
        startTime: undefined,
        gaugeTypeId: long_1.default.UZERO,
        triggerDuration: undefined,
        depositAmount: undefined,
        totalTriggers: long_1.default.UZERO,
        triggeredCount: long_1.default.UZERO,
        distributedAmount: undefined,
        isActive: false,
        forSwapFee: false,
        liquidityMetaData: undefined,
        appId: long_1.default.UZERO,
    };
}
exports.Gauge = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.from !== "") {
            writer.uint32(18).string(message.from);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
        }
        if (!message.gaugeTypeId.isZero()) {
            writer.uint32(40).uint64(message.gaugeTypeId);
        }
        if (message.triggerDuration !== undefined) {
            duration_1.Duration.encode(message.triggerDuration, writer.uint32(50).fork()).ldelim();
        }
        if (message.depositAmount !== undefined) {
            coin_1.Coin.encode(message.depositAmount, writer.uint32(58).fork()).ldelim();
        }
        if (!message.totalTriggers.isZero()) {
            writer.uint32(64).uint64(message.totalTriggers);
        }
        if (!message.triggeredCount.isZero()) {
            writer.uint32(72).uint64(message.triggeredCount);
        }
        if (message.distributedAmount !== undefined) {
            coin_1.Coin.encode(message.distributedAmount, writer.uint32(82).fork()).ldelim();
        }
        if (message.isActive === true) {
            writer.uint32(88).bool(message.isActive);
        }
        if (message.forSwapFee === true) {
            writer.uint32(96).bool(message.forSwapFee);
        }
        if (message.liquidityMetaData !== undefined) {
            exports.LiquidtyGaugeMetaData.encode(message.liquidityMetaData, writer.uint32(106).fork()).ldelim();
        }
        if (!message.appId.isZero()) {
            writer.uint32(112).uint64(message.appId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.from = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.gaugeTypeId = reader.uint64();
                    break;
                case 6:
                    message.triggerDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.depositAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.totalTriggers = reader.uint64();
                    break;
                case 9:
                    message.triggeredCount = reader.uint64();
                    break;
                case 10:
                    message.distributedAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.isActive = reader.bool();
                    break;
                case 12:
                    message.forSwapFee = reader.bool();
                    break;
                case 13:
                    message.liquidityMetaData = exports.LiquidtyGaugeMetaData.decode(reader, reader.uint32());
                    break;
                case 14:
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
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            from: isSet(object.from) ? String(object.from) : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
            gaugeTypeId: isSet(object.gaugeTypeId)
                ? long_1.default.fromValue(object.gaugeTypeId)
                : long_1.default.UZERO,
            triggerDuration: isSet(object.triggerDuration)
                ? duration_1.Duration.fromJSON(object.triggerDuration)
                : undefined,
            depositAmount: isSet(object.depositAmount)
                ? coin_1.Coin.fromJSON(object.depositAmount)
                : undefined,
            totalTriggers: isSet(object.totalTriggers)
                ? long_1.default.fromValue(object.totalTriggers)
                : long_1.default.UZERO,
            triggeredCount: isSet(object.triggeredCount)
                ? long_1.default.fromValue(object.triggeredCount)
                : long_1.default.UZERO,
            distributedAmount: isSet(object.distributedAmount)
                ? coin_1.Coin.fromJSON(object.distributedAmount)
                : undefined,
            isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
            forSwapFee: isSet(object.forSwapFee) ? Boolean(object.forSwapFee) : false,
            liquidityMetaData: isSet(object.liquidityMetaData)
                ? exports.LiquidtyGaugeMetaData.fromJSON(object.liquidityMetaData)
                : undefined,
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.from !== undefined && (obj.from = message.from);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.gaugeTypeId !== undefined &&
            (obj.gaugeTypeId = (message.gaugeTypeId || long_1.default.UZERO).toString());
        message.triggerDuration !== undefined &&
            (obj.triggerDuration = message.triggerDuration
                ? duration_1.Duration.toJSON(message.triggerDuration)
                : undefined);
        message.depositAmount !== undefined &&
            (obj.depositAmount = message.depositAmount
                ? coin_1.Coin.toJSON(message.depositAmount)
                : undefined);
        message.totalTriggers !== undefined &&
            (obj.totalTriggers = (message.totalTriggers || long_1.default.UZERO).toString());
        message.triggeredCount !== undefined &&
            (obj.triggeredCount = (message.triggeredCount || long_1.default.UZERO).toString());
        message.distributedAmount !== undefined &&
            (obj.distributedAmount = message.distributedAmount
                ? coin_1.Coin.toJSON(message.distributedAmount)
                : undefined);
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.forSwapFee !== undefined && (obj.forSwapFee = message.forSwapFee);
        message.liquidityMetaData !== undefined &&
            (obj.liquidityMetaData = message.liquidityMetaData
                ? exports.LiquidtyGaugeMetaData.toJSON(message.liquidityMetaData)
                : undefined);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGauge();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.startTime = (_c = object.startTime) !== null && _c !== void 0 ? _c : undefined;
        message.gaugeTypeId =
            object.gaugeTypeId !== undefined && object.gaugeTypeId !== null
                ? long_1.default.fromValue(object.gaugeTypeId)
                : long_1.default.UZERO;
        message.triggerDuration =
            object.triggerDuration !== undefined && object.triggerDuration !== null
                ? duration_1.Duration.fromPartial(object.triggerDuration)
                : undefined;
        message.depositAmount =
            object.depositAmount !== undefined && object.depositAmount !== null
                ? coin_1.Coin.fromPartial(object.depositAmount)
                : undefined;
        message.totalTriggers =
            object.totalTriggers !== undefined && object.totalTriggers !== null
                ? long_1.default.fromValue(object.totalTriggers)
                : long_1.default.UZERO;
        message.triggeredCount =
            object.triggeredCount !== undefined && object.triggeredCount !== null
                ? long_1.default.fromValue(object.triggeredCount)
                : long_1.default.UZERO;
        message.distributedAmount =
            object.distributedAmount !== undefined &&
                object.distributedAmount !== null
                ? coin_1.Coin.fromPartial(object.distributedAmount)
                : undefined;
        message.isActive = (_d = object.isActive) !== null && _d !== void 0 ? _d : false;
        message.forSwapFee = (_e = object.forSwapFee) !== null && _e !== void 0 ? _e : false;
        message.liquidityMetaData =
            object.liquidityMetaData !== undefined &&
                object.liquidityMetaData !== null
                ? exports.LiquidtyGaugeMetaData.fromPartial(object.liquidityMetaData)
                : undefined;
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseGaugeByTriggerDuration() {
    return { triggerDuration: undefined, gaugeIds: [] };
}
exports.GaugeByTriggerDuration = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.triggerDuration !== undefined) {
            duration_1.Duration.encode(message.triggerDuration, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(18).fork();
        for (const v of message.gaugeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGaugeByTriggerDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggerDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.gaugeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.gaugeIds.push(reader.uint64());
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
            triggerDuration: isSet(object.triggerDuration)
                ? duration_1.Duration.fromJSON(object.triggerDuration)
                : undefined,
            gaugeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.gaugeIds)
                ? object.gaugeIds.map((e) => long_1.default.fromValue(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.triggerDuration !== undefined &&
            (obj.triggerDuration = message.triggerDuration
                ? duration_1.Duration.toJSON(message.triggerDuration)
                : undefined);
        if (message.gaugeIds) {
            obj.gaugeIds = message.gaugeIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.gaugeIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGaugeByTriggerDuration();
        message.triggerDuration =
            object.triggerDuration !== undefined && object.triggerDuration !== null
                ? duration_1.Duration.fromPartial(object.triggerDuration)
                : undefined;
        message.gaugeIds = ((_a = object.gaugeIds) === null || _a === void 0 ? void 0 : _a.map((e) => long_1.default.fromValue(e))) || [];
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=gauge.js.map