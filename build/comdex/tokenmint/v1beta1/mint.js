"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintedTokens = exports.TokenMint = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "comdex.tokenmint.v1beta1";
function createBaseTokenMint() {
    return { appMappingId: long_1.default.UZERO, mintedTokens: [] };
}
exports.TokenMint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.appMappingId.isZero()) {
            writer.uint32(8).uint64(message.appMappingId);
        }
        for (const v of message.mintedTokens) {
            exports.MintedTokens.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appMappingId = reader.uint64();
                    break;
                case 2:
                    message.mintedTokens.push(exports.MintedTokens.decode(reader, reader.uint32()));
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
            appMappingId: isSet(object.appMappingId)
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO,
            mintedTokens: Array.isArray(object === null || object === void 0 ? void 0 : object.mintedTokens)
                ? object.mintedTokens.map((e) => exports.MintedTokens.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.appMappingId !== undefined &&
            (obj.appMappingId = (message.appMappingId || long_1.default.UZERO).toString());
        if (message.mintedTokens) {
            obj.mintedTokens = message.mintedTokens.map((e) => e ? exports.MintedTokens.toJSON(e) : undefined);
        }
        else {
            obj.mintedTokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTokenMint();
        message.appMappingId =
            object.appMappingId !== undefined && object.appMappingId !== null
                ? long_1.default.fromValue(object.appMappingId)
                : long_1.default.UZERO;
        message.mintedTokens =
            ((_a = object.mintedTokens) === null || _a === void 0 ? void 0 : _a.map((e) => exports.MintedTokens.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMintedTokens() {
    return {
        assetId: long_1.default.UZERO,
        genesisSupply: "",
        createdAt: undefined,
        currentSupply: "",
    };
}
exports.MintedTokens = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.genesisSupply !== "") {
            writer.uint32(18).string(message.genesisSupply);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.currentSupply !== "") {
            writer.uint32(34).string(message.currentSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMintedTokens();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.uint64();
                    break;
                case 2:
                    message.genesisSupply = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.currentSupply = reader.string();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            genesisSupply: isSet(object.genesisSupply)
                ? String(object.genesisSupply)
                : "",
            createdAt: isSet(object.createdAt)
                ? fromJsonTimestamp(object.createdAt)
                : undefined,
            currentSupply: isSet(object.currentSupply)
                ? String(object.currentSupply)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.genesisSupply !== undefined &&
            (obj.genesisSupply = message.genesisSupply);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        message.currentSupply !== undefined &&
            (obj.currentSupply = message.currentSupply);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMintedTokens();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.genesisSupply = (_a = object.genesisSupply) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.currentSupply = (_c = object.currentSupply) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=mint.js.map