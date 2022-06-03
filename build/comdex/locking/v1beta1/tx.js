"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgBeginUnlockingTokensResponse = exports.MsgBeginUnlockingTokens = exports.MsgLockTokensResponse = exports.MsgLockTokens = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.locking.v1beta1";
function createBaseMsgLockTokens() {
    return { owner: "", duration: undefined, coin: undefined };
}
exports.MsgLockTokens = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration)
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined,
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgLockTokens();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
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
function createBaseMsgLockTokensResponse() {
    return {};
}
exports.MsgLockTokensResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokensResponse();
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
        const message = createBaseMsgLockTokensResponse();
        return message;
    },
};
function createBaseMsgBeginUnlockingTokens() {
    return { owner: "", lockId: long_1.default.UZERO, coin: undefined };
}
exports.MsgBeginUnlockingTokens = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (!message.lockId.isZero()) {
            writer.uint32(16).uint64(message.lockId);
        }
        if (message.coin !== undefined) {
            coin_1.Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.lockId = reader.uint64();
                    break;
                case 3:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            lockId: isSet(object.lockId)
                ? long_1.default.fromString(object.lockId)
                : long_1.default.UZERO,
            coin: isSet(object.coin) ? coin_1.Coin.fromJSON(object.coin) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.lockId !== undefined &&
            (obj.lockId = (message.lockId || long_1.default.UZERO).toString());
        message.coin !== undefined &&
            (obj.coin = message.coin ? coin_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBeginUnlockingTokens();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.lockId =
            object.lockId !== undefined && object.lockId !== null
                ? long_1.default.fromValue(object.lockId)
                : long_1.default.UZERO;
        message.coin =
            object.coin !== undefined && object.coin !== null
                ? coin_1.Coin.fromPartial(object.coin)
                : undefined;
        return message;
    },
};
function createBaseMsgBeginUnlockingTokensResponse() {
    return {};
}
exports.MsgBeginUnlockingTokensResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingTokensResponse();
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
        const message = createBaseMsgBeginUnlockingTokensResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.LockTokens = this.LockTokens.bind(this);
        this.BeginUnlockTokens = this.BeginUnlockTokens.bind(this);
    }
    LockTokens(request) {
        const data = exports.MsgLockTokens.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Msg", "LockTokens", data);
        return promise.then((data) => exports.MsgLockTokensResponse.decode(new minimal_1.default.Reader(data)));
    }
    BeginUnlockTokens(request) {
        const data = exports.MsgBeginUnlockingTokens.encode(request).finish();
        const promise = this.rpc.request("comdex.locking.v1beta1.Msg", "BeginUnlockTokens", data);
        return promise.then((data) => exports.MsgBeginUnlockingTokensResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map