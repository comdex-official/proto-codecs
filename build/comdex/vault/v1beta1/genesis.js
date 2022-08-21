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
const vault_1 = require("../../../comdex/vault/v1beta1/vault");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseGenesisState() {
    return {
        vaults: [],
        stableMintVault: [],
        appExtendedPairVaultMapping: [],
        userVaultAssetMapping: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.vaults) {
            vault_1.Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.stableMintVault) {
            vault_1.StableMintVault.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.appExtendedPairVaultMapping) {
            vault_1.AppExtendedPairVaultMappingData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.userVaultAssetMapping) {
            vault_1.OwnerAppExtendedPairVaultMappingData.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.vaults.push(vault_1.Vault.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.stableMintVault.push(vault_1.StableMintVault.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appExtendedPairVaultMapping.push(vault_1.AppExtendedPairVaultMappingData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.userVaultAssetMapping.push(vault_1.OwnerAppExtendedPairVaultMappingData.decode(reader, reader.uint32()));
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
            vaults: Array.isArray(object === null || object === void 0 ? void 0 : object.vaults)
                ? object.vaults.map((e) => vault_1.Vault.fromJSON(e))
                : [],
            stableMintVault: Array.isArray(object === null || object === void 0 ? void 0 : object.stableMintVault)
                ? object.stableMintVault.map((e) => vault_1.StableMintVault.fromJSON(e))
                : [],
            appExtendedPairVaultMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.appExtendedPairVaultMapping)
                ? object.appExtendedPairVaultMapping.map((e) => vault_1.AppExtendedPairVaultMappingData.fromJSON(e))
                : [],
            userVaultAssetMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.userVaultAssetMapping)
                ? object.userVaultAssetMapping.map((e) => vault_1.OwnerAppExtendedPairVaultMappingData.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.vaults) {
            obj.vaults = message.vaults.map((e) => (e ? vault_1.Vault.toJSON(e) : undefined));
        }
        else {
            obj.vaults = [];
        }
        if (message.stableMintVault) {
            obj.stableMintVault = message.stableMintVault.map((e) => e ? vault_1.StableMintVault.toJSON(e) : undefined);
        }
        else {
            obj.stableMintVault = [];
        }
        if (message.appExtendedPairVaultMapping) {
            obj.appExtendedPairVaultMapping = message.appExtendedPairVaultMapping.map((e) => (e ? vault_1.AppExtendedPairVaultMappingData.toJSON(e) : undefined));
        }
        else {
            obj.appExtendedPairVaultMapping = [];
        }
        if (message.userVaultAssetMapping) {
            obj.userVaultAssetMapping = message.userVaultAssetMapping.map((e) => e ? vault_1.OwnerAppExtendedPairVaultMappingData.toJSON(e) : undefined);
        }
        else {
            obj.userVaultAssetMapping = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.Vault.fromPartial(e))) || [];
        message.stableMintVault =
            ((_b = object.stableMintVault) === null || _b === void 0 ? void 0 : _b.map((e) => vault_1.StableMintVault.fromPartial(e))) || [];
        message.appExtendedPairVaultMapping =
            ((_c = object.appExtendedPairVaultMapping) === null || _c === void 0 ? void 0 : _c.map((e) => vault_1.AppExtendedPairVaultMappingData.fromPartial(e))) || [];
        message.userVaultAssetMapping =
            ((_d = object.userVaultAssetMapping) === null || _d === void 0 ? void 0 : _d.map((e) => vault_1.OwnerAppExtendedPairVaultMappingData.fromPartial(e))) || [];
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=genesis.js.map