"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintGenesisToken = exports.AppMapping = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseAppMapping() {
    return {
        id: long_1.default.UZERO,
        name: "",
        shortName: "",
        minGovDeposit: "",
        govTimeInSeconds: 0,
        mintGenesisToken: [],
    };
}
exports.AppMapping = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.shortName !== "") {
            writer.uint32(26).string(message.shortName);
        }
        if (message.minGovDeposit !== "") {
            writer.uint32(34).string(message.minGovDeposit);
        }
        if (message.govTimeInSeconds !== 0) {
            writer.uint32(41).double(message.govTimeInSeconds);
        }
        for (const v of message.mintGenesisToken) {
            exports.MintGenesisToken.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.shortName = reader.string();
                    break;
                case 4:
                    message.minGovDeposit = reader.string();
                    break;
                case 5:
                    message.govTimeInSeconds = reader.double();
                    break;
                case 6:
                    message.mintGenesisToken.push(exports.MintGenesisToken.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? String(object.name) : "",
            shortName: isSet(object.shortName) ? String(object.shortName) : "",
            minGovDeposit: isSet(object.minGovDeposit)
                ? String(object.minGovDeposit)
                : "",
            govTimeInSeconds: isSet(object.govTimeInSeconds)
                ? Number(object.govTimeInSeconds)
                : 0,
            mintGenesisToken: Array.isArray(object === null || object === void 0 ? void 0 : object.mintGenesisToken)
                ? object.mintGenesisToken.map((e) => exports.MintGenesisToken.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.shortName !== undefined && (obj.shortName = message.shortName);
        message.minGovDeposit !== undefined &&
            (obj.minGovDeposit = message.minGovDeposit);
        message.govTimeInSeconds !== undefined &&
            (obj.govTimeInSeconds = message.govTimeInSeconds);
        if (message.mintGenesisToken) {
            obj.mintGenesisToken = message.mintGenesisToken.map((e) => e ? exports.MintGenesisToken.toJSON(e) : undefined);
        }
        else {
            obj.mintGenesisToken = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseAppMapping();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.shortName = (_b = object.shortName) !== null && _b !== void 0 ? _b : "";
        message.minGovDeposit = (_c = object.minGovDeposit) !== null && _c !== void 0 ? _c : "";
        message.govTimeInSeconds = (_d = object.govTimeInSeconds) !== null && _d !== void 0 ? _d : 0;
        message.mintGenesisToken =
            ((_e = object.mintGenesisToken) === null || _e === void 0 ? void 0 : _e.map((e) => exports.MintGenesisToken.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseMintGenesisToken() {
    return {
        assetId: long_1.default.UZERO,
        genesisSupply: "",
        isgovToken: false,
        recipient: "",
    };
}
exports.MintGenesisToken = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.genesisSupply !== "") {
            writer.uint32(18).string(message.genesisSupply);
        }
        if (message.isgovToken === true) {
            writer.uint32(24).bool(message.isgovToken);
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMintGenesisToken();
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
                    message.isgovToken = reader.bool();
                    break;
                case 4:
                    message.recipient = reader.string();
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
                ? long_1.default.fromString(object.assetId)
                : long_1.default.UZERO,
            genesisSupply: isSet(object.genesisSupply)
                ? String(object.genesisSupply)
                : "",
            isgovToken: isSet(object.isgovToken) ? Boolean(object.isgovToken) : false,
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.genesisSupply !== undefined &&
            (obj.genesisSupply = message.genesisSupply);
        message.isgovToken !== undefined && (obj.isgovToken = message.isgovToken);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMintGenesisToken();
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.genesisSupply = (_a = object.genesisSupply) !== null && _a !== void 0 ? _a : "";
        message.isgovToken = (_b = object.isgovToken) !== null && _b !== void 0 ? _b : false;
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=appMapping.js.map