"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LendAsset = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.lend.v1beta1";
function createBaseLendAsset() {
    return {
        lendingId: long_1.default.UZERO,
        pairId: long_1.default.UZERO,
        owner: "",
        amountIn: undefined,
        lendingTime: undefined,
        reward: undefined,
    };
}
exports.LendAsset = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.lendingId.isZero()) {
            writer.uint32(8).uint64(message.lendingId);
        }
        if (!message.pairId.isZero()) {
            writer.uint32(16).uint64(message.pairId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.amountIn !== undefined) {
            coin_1.Coin.encode(message.amountIn, writer.uint32(34).fork()).ldelim();
        }
        if (message.lendingTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lendingTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.reward !== undefined) {
            coin_1.Coin.encode(message.reward, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLendAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lendingId = reader.uint64();
                    break;
                case 2:
                    message.pairId = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.amountIn = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.lendingTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.reward = coin_1.Coin.decode(reader, reader.uint32());
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
            lendingId: isSet(object.lendingId)
                ? long_1.default.fromString(object.lendingId)
                : long_1.default.UZERO,
            pairId: isSet(object.pairId)
                ? long_1.default.fromString(object.pairId)
                : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            amountIn: isSet(object.amountIn)
                ? coin_1.Coin.fromJSON(object.amountIn)
                : undefined,
            lendingTime: isSet(object.lendingTime)
                ? fromJsonTimestamp(object.lendingTime)
                : undefined,
            reward: isSet(object.reward) ? coin_1.Coin.fromJSON(object.reward) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lendingId !== undefined &&
            (obj.lendingId = (message.lendingId || long_1.default.UZERO).toString());
        message.pairId !== undefined &&
            (obj.pairId = (message.pairId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.amountIn !== undefined &&
            (obj.amountIn = message.amountIn
                ? coin_1.Coin.toJSON(message.amountIn)
                : undefined);
        message.lendingTime !== undefined &&
            (obj.lendingTime = message.lendingTime.toISOString());
        message.reward !== undefined &&
            (obj.reward = message.reward ? coin_1.Coin.toJSON(message.reward) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLendAsset();
        message.lendingId =
            object.lendingId !== undefined && object.lendingId !== null
                ? long_1.default.fromValue(object.lendingId)
                : long_1.default.UZERO;
        message.pairId =
            object.pairId !== undefined && object.pairId !== null
                ? long_1.default.fromValue(object.pairId)
                : long_1.default.UZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.amountIn =
            object.amountIn !== undefined && object.amountIn !== null
                ? coin_1.Coin.fromPartial(object.amountIn)
                : undefined;
        message.lendingTime = (_b = object.lendingTime) !== null && _b !== void 0 ? _b : undefined;
        message.reward =
            object.reward !== undefined && object.reward !== null
                ? coin_1.Coin.fromPartial(object.reward)
                : undefined;
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
//# sourceMappingURL=lend.js.map