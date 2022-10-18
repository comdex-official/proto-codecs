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
exports.AppAndGovTime = exports.MintGenesisToken = exports.AppData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseAppData() {
    return {
        id: long_1.default.UZERO,
        name: "",
        shortName: "",
        minGovDeposit: "",
        govTimeInSeconds: long_1.default.UZERO,
        genesisToken: [],
    };
}
exports.AppData = {
    encode(message, writer = _m0.Writer.create()) {
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
        if (!message.govTimeInSeconds.isZero()) {
            writer.uint32(40).uint64(message.govTimeInSeconds);
        }
        for (const v of message.genesisToken) {
            exports.MintGenesisToken.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppData();
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
                    message.govTimeInSeconds = reader.uint64();
                    break;
                case 6:
                    message.genesisToken.push(exports.MintGenesisToken.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? String(object.name) : "",
            shortName: isSet(object.shortName) ? String(object.shortName) : "",
            minGovDeposit: isSet(object.minGovDeposit)
                ? String(object.minGovDeposit)
                : "",
            govTimeInSeconds: isSet(object.govTimeInSeconds)
                ? long_1.default.fromValue(object.govTimeInSeconds)
                : long_1.default.UZERO,
            genesisToken: Array.isArray(object === null || object === void 0 ? void 0 : object.genesisToken)
                ? object.genesisToken.map((e) => exports.MintGenesisToken.fromJSON(e))
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
            (obj.govTimeInSeconds = (message.govTimeInSeconds || long_1.default.UZERO).toString());
        if (message.genesisToken) {
            obj.genesisToken = message.genesisToken.map((e) => e ? exports.MintGenesisToken.toJSON(e) : undefined);
        }
        else {
            obj.genesisToken = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseAppData();
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.shortName = (_b = object.shortName) !== null && _b !== void 0 ? _b : "";
        message.minGovDeposit = (_c = object.minGovDeposit) !== null && _c !== void 0 ? _c : "";
        message.govTimeInSeconds =
            object.govTimeInSeconds !== undefined && object.govTimeInSeconds !== null
                ? long_1.default.fromValue(object.govTimeInSeconds)
                : long_1.default.UZERO;
        message.genesisToken =
            ((_d = object.genesisToken) === null || _d === void 0 ? void 0 : _d.map((e) => exports.MintGenesisToken.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMintGenesisToken() {
    return {
        assetId: long_1.default.UZERO,
        genesisSupply: "",
        isGovToken: false,
        recipient: "",
    };
}
exports.MintGenesisToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetId.isZero()) {
            writer.uint32(8).uint64(message.assetId);
        }
        if (message.genesisSupply !== "") {
            writer.uint32(18).string(message.genesisSupply);
        }
        if (message.isGovToken === true) {
            writer.uint32(24).bool(message.isGovToken);
        }
        if (message.recipient !== "") {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
                    message.isGovToken = reader.bool();
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
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            genesisSupply: isSet(object.genesisSupply)
                ? String(object.genesisSupply)
                : "",
            isGovToken: isSet(object.isGovToken) ? Boolean(object.isGovToken) : false,
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.genesisSupply !== undefined &&
            (obj.genesisSupply = message.genesisSupply);
        message.isGovToken !== undefined && (obj.isGovToken = message.isGovToken);
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
        message.isGovToken = (_b = object.isGovToken) !== null && _b !== void 0 ? _b : false;
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseAppAndGovTime() {
    return { appId: long_1.default.UZERO, govTimeInSeconds: long_1.default.UZERO, minGovDeposit: "" };
}
exports.AppAndGovTime = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.govTimeInSeconds.isZero()) {
            writer.uint32(16).uint64(message.govTimeInSeconds);
        }
        if (message.minGovDeposit !== "") {
            writer.uint32(26).string(message.minGovDeposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppAndGovTime();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.govTimeInSeconds = reader.uint64();
                    break;
                case 3:
                    message.minGovDeposit = reader.string();
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
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            govTimeInSeconds: isSet(object.govTimeInSeconds)
                ? long_1.default.fromValue(object.govTimeInSeconds)
                : long_1.default.UZERO,
            minGovDeposit: isSet(object.minGovDeposit)
                ? String(object.minGovDeposit)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.govTimeInSeconds !== undefined &&
            (obj.govTimeInSeconds = (message.govTimeInSeconds || long_1.default.UZERO).toString());
        message.minGovDeposit !== undefined &&
            (obj.minGovDeposit = message.minGovDeposit);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppAndGovTime();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.govTimeInSeconds =
            object.govTimeInSeconds !== undefined && object.govTimeInSeconds !== null
                ? long_1.default.fromValue(object.govTimeInSeconds)
                : long_1.default.UZERO;
        message.minGovDeposit = (_a = object.minGovDeposit) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=app.js.map