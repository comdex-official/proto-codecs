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
exports.EventCloseVault = exports.EventRepayDebt = exports.EventDrawDebt = exports.EventWithdrawCollateral = exports.EventDepositCollateral = exports.EventCreateVault = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.vault.v1beta1";
function createBaseEventCreateVault() {
    return { sender: "", collateralType: "" };
}
exports.EventCreateVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCreateVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            collateralType: isSet(object.collateralType)
                ? String(object.collateralType)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventCreateVault();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.collateralType = (_b = object.collateralType) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseEventDepositCollateral() {
    return { owner: "", collateralType: "", collateral: undefined };
}
exports.EventDepositCollateral = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDepositCollateral();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
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
            collateralType: isSet(object.collateralType)
                ? String(object.collateralType)
                : "",
            collateral: isSet(object.collateral)
                ? coin_1.Coin.fromJSON(object.collateral)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventDepositCollateral();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateralType = (_b = object.collateralType) !== null && _b !== void 0 ? _b : "";
        message.collateral =
            object.collateral !== undefined && object.collateral !== null
                ? coin_1.Coin.fromPartial(object.collateral)
                : undefined;
        return message;
    },
};
function createBaseEventWithdrawCollateral() {
    return { owner: "", collateralType: "", collateral: undefined };
}
exports.EventWithdrawCollateral = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.collateral !== undefined) {
            coin_1.Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventWithdrawCollateral();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.collateral = coin_1.Coin.decode(reader, reader.uint32());
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
            collateralType: isSet(object.collateralType)
                ? String(object.collateralType)
                : "",
            collateral: isSet(object.collateral)
                ? coin_1.Coin.fromJSON(object.collateral)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.collateral !== undefined &&
            (obj.collateral = message.collateral
                ? coin_1.Coin.toJSON(message.collateral)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventWithdrawCollateral();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateralType = (_b = object.collateralType) !== null && _b !== void 0 ? _b : "";
        message.collateral =
            object.collateral !== undefined && object.collateral !== null
                ? coin_1.Coin.fromPartial(object.collateral)
                : undefined;
        return message;
    },
};
function createBaseEventDrawDebt() {
    return { owner: "", collateralType: "", debt: undefined };
}
exports.EventDrawDebt = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventDrawDebt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
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
            collateralType: isSet(object.collateralType)
                ? String(object.collateralType)
                : "",
            debt: isSet(object.debt) ? coin_1.Coin.fromJSON(object.debt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventDrawDebt();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateralType = (_b = object.collateralType) !== null && _b !== void 0 ? _b : "";
        message.debt =
            object.debt !== undefined && object.debt !== null
                ? coin_1.Coin.fromPartial(object.debt)
                : undefined;
        return message;
    },
};
function createBaseEventRepayDebt() {
    return { owner: "", collateralType: "", debt: undefined };
}
exports.EventRepayDebt = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        if (message.debt !== undefined) {
            coin_1.Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRepayDebt();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
                    break;
                case 3:
                    message.debt = coin_1.Coin.decode(reader, reader.uint32());
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
            collateralType: isSet(object.collateralType)
                ? String(object.collateralType)
                : "",
            debt: isSet(object.debt) ? coin_1.Coin.fromJSON(object.debt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        message.debt !== undefined &&
            (obj.debt = message.debt ? coin_1.Coin.toJSON(message.debt) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventRepayDebt();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateralType = (_b = object.collateralType) !== null && _b !== void 0 ? _b : "";
        message.debt =
            object.debt !== undefined && object.debt !== null
                ? coin_1.Coin.fromPartial(object.debt)
                : undefined;
        return message;
    },
};
function createBaseEventCloseVault() {
    return { owner: "", collateralType: "" };
}
exports.EventCloseVault = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.collateralType !== "") {
            writer.uint32(18).string(message.collateralType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventCloseVault();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.collateralType = reader.string();
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
            collateralType: isSet(object.collateralType)
                ? String(object.collateralType)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralType !== undefined &&
            (obj.collateralType = message.collateralType);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEventCloseVault();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.collateralType = (_b = object.collateralType) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=events.js.map