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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/asset/v1beta1/params");
const asset_1 = require("../../../comdex/asset/v1beta1/asset");
const pair_1 = require("../../../comdex/asset/v1beta1/pair");
const app_1 = require("../../../comdex/asset/v1beta1/app");
const extendedPairVault_1 = require("../../../comdex/asset/v1beta1/extendedPairVault");
exports.protobufPackage = "comdex.asset.v1beta1";
function createBaseGenesisState() {
    return {
        assets: [],
        pairs: [],
        appData: [],
        extendedPairVault: [],
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.assets) {
            asset_1.Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.pairs) {
            pair_1.Pair.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.appData) {
            app_1.AppData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.extendedPairVault) {
            extendedPairVault_1.ExtendedPairVault.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(asset_1.Asset.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pairs.push(pair_1.Pair.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appData.push(app_1.AppData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.extendedPairVault.push(extendedPairVault_1.ExtendedPairVault.decode(reader, reader.uint32()));
                    break;
                case 5:
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
            assets: Array.isArray(object === null || object === void 0 ? void 0 : object.assets)
                ? object.assets.map((e) => asset_1.Asset.fromJSON(e))
                : [],
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs)
                ? object.pairs.map((e) => pair_1.Pair.fromJSON(e))
                : [],
            appData: Array.isArray(object === null || object === void 0 ? void 0 : object.appData)
                ? object.appData.map((e) => app_1.AppData.fromJSON(e))
                : [],
            extendedPairVault: Array.isArray(object === null || object === void 0 ? void 0 : object.extendedPairVault)
                ? object.extendedPairVault.map((e) => extendedPairVault_1.ExtendedPairVault.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map((e) => (e ? asset_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.assets = [];
        }
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => (e ? pair_1.Pair.toJSON(e) : undefined));
        }
        else {
            obj.pairs = [];
        }
        if (message.appData) {
            obj.appData = message.appData.map((e) => e ? app_1.AppData.toJSON(e) : undefined);
        }
        else {
            obj.appData = [];
        }
        if (message.extendedPairVault) {
            obj.extendedPairVault = message.extendedPairVault.map((e) => e ? extendedPairVault_1.ExtendedPairVault.toJSON(e) : undefined);
        }
        else {
            obj.extendedPairVault = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.assets = ((_a = object.assets) === null || _a === void 0 ? void 0 : _a.map((e) => asset_1.Asset.fromPartial(e))) || [];
        message.pairs = ((_b = object.pairs) === null || _b === void 0 ? void 0 : _b.map((e) => pair_1.Pair.fromPartial(e))) || [];
        message.appData = ((_c = object.appData) === null || _c === void 0 ? void 0 : _c.map((e) => app_1.AppData.fromPartial(e))) || [];
        message.extendedPairVault =
            ((_d = object.extendedPairVault) === null || _d === void 0 ? void 0 : _d.map((e) => extendedPairVault_1.ExtendedPairVault.fromPartial(e))) ||
                [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
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
//# sourceMappingURL=genesis.js.map