"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPoolUnbondingTokens = exports.UserPools = exports.UserPoolsData = exports.AllUserAddressesArray = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.liquidity.v1beta1";
function createBaseAllUserAddressesArray() {
    return { userAddresses: [] };
}
exports.AllUserAddressesArray = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.userAddresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllUserAddressesArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddresses.push(reader.string());
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
            userAddresses: Array.isArray(object === null || object === void 0 ? void 0 : object.userAddresses)
                ? object.userAddresses.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userAddresses) {
            obj.userAddresses = message.userAddresses.map((e) => e);
        }
        else {
            obj.userAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAllUserAddressesArray();
        message.userAddresses = ((_a = object.userAddresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseUserPoolsData() {
    return { userAddress: "", userPools: [] };
}
exports.UserPoolsData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userAddress !== "") {
            writer.uint32(10).string(message.userAddress);
        }
        for (const v of message.userPools) {
            exports.UserPools.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPoolsData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userAddress = reader.string();
                    break;
                case 2:
                    message.userPools.push(exports.UserPools.decode(reader, reader.uint32()));
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
            userPools: Array.isArray(object === null || object === void 0 ? void 0 : object.userPools)
                ? object.userPools.map((e) => exports.UserPools.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.userAddress !== undefined &&
            (obj.userAddress = message.userAddress);
        if (message.userPools) {
            obj.userPools = message.userPools.map((e) => e ? exports.UserPools.toJSON(e) : undefined);
        }
        else {
            obj.userPools = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserPoolsData();
        message.userAddress = (_a = object.userAddress) !== null && _a !== void 0 ? _a : "";
        message.userPools =
            ((_b = object.userPools) === null || _b === void 0 ? void 0 : _b.map((e) => exports.UserPools.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserPools() {
    return {
        poolId: long_1.default.UZERO,
        bondedPoolCoin: "",
        unbondedPoolCoin: "",
        unbondingCoins: [],
    };
}
exports.UserPools = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.bondedPoolCoin !== "") {
            writer.uint32(18).string(message.bondedPoolCoin);
        }
        if (message.unbondedPoolCoin !== "") {
            writer.uint32(26).string(message.unbondedPoolCoin);
        }
        for (const v of message.unbondingCoins) {
            exports.UserPoolUnbondingTokens.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPools();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.bondedPoolCoin = reader.string();
                    break;
                case 3:
                    message.unbondedPoolCoin = reader.string();
                    break;
                case 4:
                    message.unbondingCoins.push(exports.UserPoolUnbondingTokens.decode(reader, reader.uint32()));
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
            poolId: isSet(object.poolId)
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO,
            bondedPoolCoin: isSet(object.bondedPoolCoin)
                ? String(object.bondedPoolCoin)
                : "",
            unbondedPoolCoin: isSet(object.unbondedPoolCoin)
                ? String(object.unbondedPoolCoin)
                : "",
            unbondingCoins: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingCoins)
                ? object.unbondingCoins.map((e) => exports.UserPoolUnbondingTokens.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.bondedPoolCoin !== undefined &&
            (obj.bondedPoolCoin = message.bondedPoolCoin);
        message.unbondedPoolCoin !== undefined &&
            (obj.unbondedPoolCoin = message.unbondedPoolCoin);
        if (message.unbondingCoins) {
            obj.unbondingCoins = message.unbondingCoins.map((e) => e ? exports.UserPoolUnbondingTokens.toJSON(e) : undefined);
        }
        else {
            obj.unbondingCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUserPools();
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromValue(object.poolId)
                : long_1.default.UZERO;
        message.bondedPoolCoin = (_a = object.bondedPoolCoin) !== null && _a !== void 0 ? _a : "";
        message.unbondedPoolCoin = (_b = object.unbondedPoolCoin) !== null && _b !== void 0 ? _b : "";
        message.unbondingCoins =
            ((_c = object.unbondingCoins) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UserPoolUnbondingTokens.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUserPoolUnbondingTokens() {
    return {
        isUnbondingPoolCoin: "",
        unbondingStartTime: undefined,
        unbondingEndTime: undefined,
    };
}
exports.UserPoolUnbondingTokens = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.isUnbondingPoolCoin !== "") {
            writer.uint32(10).string(message.isUnbondingPoolCoin);
        }
        if (message.unbondingStartTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.unbondingStartTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.unbondingEndTime !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.unbondingEndTime), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserPoolUnbondingTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isUnbondingPoolCoin = reader.string();
                    break;
                case 2:
                    message.unbondingStartTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.unbondingEndTime = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            isUnbondingPoolCoin: isSet(object.isUnbondingPoolCoin)
                ? String(object.isUnbondingPoolCoin)
                : "",
            unbondingStartTime: isSet(object.unbondingStartTime)
                ? fromJsonTimestamp(object.unbondingStartTime)
                : undefined,
            unbondingEndTime: isSet(object.unbondingEndTime)
                ? fromJsonTimestamp(object.unbondingEndTime)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.isUnbondingPoolCoin !== undefined &&
            (obj.isUnbondingPoolCoin = message.isUnbondingPoolCoin);
        message.unbondingStartTime !== undefined &&
            (obj.unbondingStartTime = message.unbondingStartTime.toISOString());
        message.unbondingEndTime !== undefined &&
            (obj.unbondingEndTime = message.unbondingEndTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUserPoolUnbondingTokens();
        message.isUnbondingPoolCoin = (_a = object.isUnbondingPoolCoin) !== null && _a !== void 0 ? _a : "";
        message.unbondingStartTime = (_b = object.unbondingStartTime) !== null && _b !== void 0 ? _b : undefined;
        message.unbondingEndTime = (_c = object.unbondingEndTime) !== null && _c !== void 0 ? _c : undefined;
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
//# sourceMappingURL=userPoolData.js.map