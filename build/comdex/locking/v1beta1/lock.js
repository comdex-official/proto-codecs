"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnlockingByOwner = exports.LockByOwner = exports.Unlocking = exports.Lock = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.locking.v1beta1";
function createBaseLock() {
    return {
        id: long_1.default.UZERO,
        owner: "",
        createdAt: undefined,
        duration: undefined,
        coin: undefined,
    };
}
exports.Lock = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            duration: isSet(object.duration)
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined,
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLock();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
};
function createBaseUnlocking() {
    return {
        id: long_1.default.UZERO,
        owner: "",
        duration: undefined,
        endTime: undefined,
        coin: undefined,
    };
}
exports.Unlocking = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnlocking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.endTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.coin = coin_1.Coin.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration)
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined,
            endTime: isSet(object.endTime)
                ? fromJsonTimestamp(object.endTime)
                : undefined,
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        message.endTime !== undefined &&
            (obj.endTime = message.endTime.toISOString());
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUnlocking();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        message.endTime = (_b = object.endTime) !== null && _b !== void 0 ? _b : undefined;
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
};
function createBaseLockByOwner() {
    return { owner: "", lockIds: [] };
}
exports.LockByOwner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.lockIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockByOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.lockIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.lockIds.push(reader.uint64());
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
            lockIds: Array.isArray(object === null || object === void 0 ? void 0 : object.lockIds)
                ? object.lockIds.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.lockIds) {
            obj.lockIds = message.lockIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.lockIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLockByOwner();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.lockIds = ((_b = object.lockIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
function createBaseUnlockingByOwner() {
    return { owner: "", unlockingIds: [] };
}
exports.UnlockingByOwner = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        writer.uint32(18).fork();
        for (const v of message.unlockingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnlockingByOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.unlockingIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.unlockingIds.push(reader.uint64());
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
            unlockingIds: Array.isArray(object === null || object === void 0 ? void 0 : object.unlockingIds)
                ? object.unlockingIds.map((e) => long_1.default.fromString(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.unlockingIds) {
            obj.unlockingIds = message.unlockingIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.unlockingIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUnlockingByOwner();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.unlockingIds =
            ((_b = object.unlockingIds) === null || _b === void 0 ? void 0 : _b.map((e) => long_1.default.fromValue(e))) || [];
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=lock.js.map