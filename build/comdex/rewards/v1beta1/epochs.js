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
exports.EpochInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseEpochInfo() {
    return {
        startTime: undefined,
        duration: undefined,
        currentEpoch: long_1.default.ZERO,
        currentEpochStartTime: undefined,
        currentEpochStartHeight: long_1.default.ZERO,
    };
}
exports.EpochInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (!message.currentEpoch.isZero()) {
            writer.uint32(32).int64(message.currentEpoch);
        }
        if (message.currentEpochStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
        }
        if (!message.currentEpochStartHeight.isZero()) {
            writer.uint32(48).int64(message.currentEpochStartHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.startTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentEpoch = reader.int64();
                    break;
                case 5:
                    message.currentEpochStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.currentEpochStartHeight = reader.int64();
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
            startTime: isSet(object.startTime)
                ? fromJsonTimestamp(object.startTime)
                : undefined,
            duration: isSet(object.duration)
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined,
            currentEpoch: isSet(object.currentEpoch)
                ? long_1.default.fromValue(object.currentEpoch)
                : long_1.default.ZERO,
            currentEpochStartTime: isSet(object.currentEpochStartTime)
                ? fromJsonTimestamp(object.currentEpochStartTime)
                : undefined,
            currentEpochStartHeight: isSet(object.currentEpochStartHeight)
                ? long_1.default.fromValue(object.currentEpochStartHeight)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.startTime !== undefined &&
            (obj.startTime = message.startTime.toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        message.currentEpoch !== undefined &&
            (obj.currentEpoch = (message.currentEpoch || long_1.default.ZERO).toString());
        message.currentEpochStartTime !== undefined &&
            (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
        message.currentEpochStartHeight !== undefined &&
            (obj.currentEpochStartHeight = (message.currentEpochStartHeight || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEpochInfo();
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        message.currentEpoch =
            object.currentEpoch !== undefined && object.currentEpoch !== null
                ? long_1.default.fromValue(object.currentEpoch)
                : long_1.default.ZERO;
        message.currentEpochStartTime = (_b = object.currentEpochStartTime) !== null && _b !== void 0 ? _b : undefined;
        message.currentEpochStartHeight =
            object.currentEpochStartHeight !== undefined &&
                object.currentEpochStartHeight !== null
                ? long_1.default.fromValue(object.currentEpochStartHeight)
                : long_1.default.ZERO;
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
//# sourceMappingURL=epochs.js.map