"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const vault_1 = require("../../../comdex/vault/v1beta1/vault");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseGenesisState() {
    return { vaults: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.vaults) {
            vault_1.Vault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vaults.push(vault_1.Vault.decode(reader, reader.uint32()));
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
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.vaults = ((_a = object.vaults) === null || _a === void 0 ? void 0 : _a.map((e) => vault_1.Vault.fromPartial(e))) || [];
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=genesis.js.map