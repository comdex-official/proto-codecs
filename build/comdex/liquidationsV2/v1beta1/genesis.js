"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const params_1 = require("../../../comdex/liquidationsV2/v1beta1/params");
const liquidate_1 = require("../../../comdex/liquidationsV2/v1beta1/liquidate");
exports.protobufPackage = "comdex.liquidationsV2.v1beta1";
function createBaseGenesisState() {
    return {
        lockedVault: [],
        liquidationWhiteListing: [],
        appReserveFunds: [],
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockedVault) {
            liquidate_1.LockedVault.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.liquidationWhiteListing) {
            liquidate_1.LiquidationWhiteListing.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.appReserveFunds) {
            liquidate_1.AppReserveFunds.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.lockedVault.push(liquidate_1.LockedVault.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.liquidationWhiteListing.push(liquidate_1.LiquidationWhiteListing.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appReserveFunds.push(liquidate_1.AppReserveFunds.decode(reader, reader.uint32()));
                    break;
                case 4:
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
            lockedVault: Array.isArray(object === null || object === void 0 ? void 0 : object.lockedVault)
                ? object.lockedVault.map((e) => liquidate_1.LockedVault.fromJSON(e))
                : [],
            liquidationWhiteListing: Array.isArray(object === null || object === void 0 ? void 0 : object.liquidationWhiteListing)
                ? object.liquidationWhiteListing.map((e) => liquidate_1.LiquidationWhiteListing.fromJSON(e))
                : [],
            appReserveFunds: Array.isArray(object === null || object === void 0 ? void 0 : object.appReserveFunds)
                ? object.appReserveFunds.map((e) => liquidate_1.AppReserveFunds.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockedVault) {
            obj.lockedVault = message.lockedVault.map((e) => e ? liquidate_1.LockedVault.toJSON(e) : undefined);
        }
        else {
            obj.lockedVault = [];
        }
        if (message.liquidationWhiteListing) {
            obj.liquidationWhiteListing = message.liquidationWhiteListing.map((e) => e ? liquidate_1.LiquidationWhiteListing.toJSON(e) : undefined);
        }
        else {
            obj.liquidationWhiteListing = [];
        }
        if (message.appReserveFunds) {
            obj.appReserveFunds = message.appReserveFunds.map((e) => e ? liquidate_1.AppReserveFunds.toJSON(e) : undefined);
        }
        else {
            obj.appReserveFunds = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.lockedVault =
            ((_a = object.lockedVault) === null || _a === void 0 ? void 0 : _a.map((e) => liquidate_1.LockedVault.fromPartial(e))) || [];
        message.liquidationWhiteListing =
            ((_b = object.liquidationWhiteListing) === null || _b === void 0 ? void 0 : _b.map((e) => liquidate_1.LiquidationWhiteListing.fromPartial(e))) || [];
        message.appReserveFunds =
            ((_c = object.appReserveFunds) === null || _c === void 0 ? void 0 : _c.map((e) => liquidate_1.AppReserveFunds.fromPartial(e))) || [];
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