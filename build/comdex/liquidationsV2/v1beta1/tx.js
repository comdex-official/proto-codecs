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
exports.MsgClientImpl = exports.MsgLiquidateExternalKeeperResponse = exports.MsgLiquidateExternalKeeperRequest = exports.MsgAppReserveFundsResponse = exports.MsgAppReserveFundsRequest = exports.MsgLiquidateInternalKeeperResponse = exports.MsgLiquidateInternalKeeperRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.liquidationsV2.v1beta1";
function createBaseMsgLiquidateInternalKeeperRequest() {
    return { from: "", liqType: long_1.default.UZERO, id: long_1.default.UZERO };
}
exports.MsgLiquidateInternalKeeperRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.liqType.isZero()) {
            writer.uint32(16).uint64(message.liqType);
        }
        if (!message.id.isZero()) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidateInternalKeeperRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.liqType = reader.uint64();
                    break;
                case 3:
                    message.id = reader.uint64();
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
            from: isSet(object.from) ? String(object.from) : "",
            liqType: isSet(object.liqType)
                ? long_1.default.fromValue(object.liqType)
                : long_1.default.UZERO,
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.liqType !== undefined &&
            (obj.liqType = (message.liqType || long_1.default.UZERO).toString());
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgLiquidateInternalKeeperRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.liqType =
            object.liqType !== undefined && object.liqType !== null
                ? long_1.default.fromValue(object.liqType)
                : long_1.default.UZERO;
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromValue(object.id)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseMsgLiquidateInternalKeeperResponse() {
    return {};
}
exports.MsgLiquidateInternalKeeperResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidateInternalKeeperResponse();
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
        const message = createBaseMsgLiquidateInternalKeeperResponse();
        return message;
    },
};
function createBaseMsgAppReserveFundsRequest() {
    return {
        appId: long_1.default.UZERO,
        assetId: long_1.default.UZERO,
        tokenQuantity: undefined,
        from: "",
    };
}
exports.MsgAppReserveFundsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.appId.isZero()) {
            writer.uint32(8).uint64(message.appId);
        }
        if (!message.assetId.isZero()) {
            writer.uint32(16).uint64(message.assetId);
        }
        if (message.tokenQuantity !== undefined) {
            coin_1.Coin.encode(message.tokenQuantity, writer.uint32(26).fork()).ldelim();
        }
        if (message.from !== "") {
            writer.uint32(34).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAppReserveFundsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.appId = reader.uint64();
                    break;
                case 2:
                    message.assetId = reader.uint64();
                    break;
                case 3:
                    message.tokenQuantity = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.from = reader.string();
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
            assetId: isSet(object.assetId)
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO,
            tokenQuantity: isSet(object.tokenQuantity)
                ? coin_1.Coin.fromJSON(object.tokenQuantity)
                : undefined,
            from: isSet(object.from) ? String(object.from) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.assetId !== undefined &&
            (obj.assetId = (message.assetId || long_1.default.UZERO).toString());
        message.tokenQuantity !== undefined &&
            (obj.tokenQuantity = message.tokenQuantity
                ? coin_1.Coin.toJSON(message.tokenQuantity)
                : undefined);
        message.from !== undefined && (obj.from = message.from);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgAppReserveFundsRequest();
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.assetId =
            object.assetId !== undefined && object.assetId !== null
                ? long_1.default.fromValue(object.assetId)
                : long_1.default.UZERO;
        message.tokenQuantity =
            object.tokenQuantity !== undefined && object.tokenQuantity !== null
                ? coin_1.Coin.fromPartial(object.tokenQuantity)
                : undefined;
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgAppReserveFundsResponse() {
    return {};
}
exports.MsgAppReserveFundsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAppReserveFundsResponse();
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
        const message = createBaseMsgAppReserveFundsResponse();
        return message;
    },
};
function createBaseMsgLiquidateExternalKeeperRequest() {
    return {
        from: "",
        appId: long_1.default.UZERO,
        owner: "",
        collateralToken: undefined,
        debtToken: undefined,
        collateralAssetId: long_1.default.UZERO,
        debtAssetId: long_1.default.UZERO,
        isDebtCmst: false,
    };
}
exports.MsgLiquidateExternalKeeperRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from !== "") {
            writer.uint32(10).string(message.from);
        }
        if (!message.appId.isZero()) {
            writer.uint32(16).uint64(message.appId);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.collateralToken !== undefined) {
            coin_1.Coin.encode(message.collateralToken, writer.uint32(34).fork()).ldelim();
        }
        if (message.debtToken !== undefined) {
            coin_1.Coin.encode(message.debtToken, writer.uint32(42).fork()).ldelim();
        }
        if (!message.collateralAssetId.isZero()) {
            writer.uint32(48).uint64(message.collateralAssetId);
        }
        if (!message.debtAssetId.isZero()) {
            writer.uint32(56).uint64(message.debtAssetId);
        }
        if (message.isDebtCmst === true) {
            writer.uint32(64).bool(message.isDebtCmst);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidateExternalKeeperRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from = reader.string();
                    break;
                case 2:
                    message.appId = reader.uint64();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                case 4:
                    message.collateralToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.debtToken = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.collateralAssetId = reader.uint64();
                    break;
                case 7:
                    message.debtAssetId = reader.uint64();
                    break;
                case 8:
                    message.isDebtCmst = reader.bool();
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
            from: isSet(object.from) ? String(object.from) : "",
            appId: isSet(object.appId) ? long_1.default.fromValue(object.appId) : long_1.default.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            collateralToken: isSet(object.collateralToken)
                ? coin_1.Coin.fromJSON(object.collateralToken)
                : undefined,
            debtToken: isSet(object.debtToken)
                ? coin_1.Coin.fromJSON(object.debtToken)
                : undefined,
            collateralAssetId: isSet(object.collateralAssetId)
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO,
            debtAssetId: isSet(object.debtAssetId)
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO,
            isDebtCmst: isSet(object.isDebtCmst) ? Boolean(object.isDebtCmst) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.from !== undefined && (obj.from = message.from);
        message.appId !== undefined &&
            (obj.appId = (message.appId || long_1.default.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.collateralToken !== undefined &&
            (obj.collateralToken = message.collateralToken
                ? coin_1.Coin.toJSON(message.collateralToken)
                : undefined);
        message.debtToken !== undefined &&
            (obj.debtToken = message.debtToken
                ? coin_1.Coin.toJSON(message.debtToken)
                : undefined);
        message.collateralAssetId !== undefined &&
            (obj.collateralAssetId = (message.collateralAssetId || long_1.default.UZERO).toString());
        message.debtAssetId !== undefined &&
            (obj.debtAssetId = (message.debtAssetId || long_1.default.UZERO).toString());
        message.isDebtCmst !== undefined && (obj.isDebtCmst = message.isDebtCmst);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgLiquidateExternalKeeperRequest();
        message.from = (_a = object.from) !== null && _a !== void 0 ? _a : "";
        message.appId =
            object.appId !== undefined && object.appId !== null
                ? long_1.default.fromValue(object.appId)
                : long_1.default.UZERO;
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.collateralToken =
            object.collateralToken !== undefined && object.collateralToken !== null
                ? coin_1.Coin.fromPartial(object.collateralToken)
                : undefined;
        message.debtToken =
            object.debtToken !== undefined && object.debtToken !== null
                ? coin_1.Coin.fromPartial(object.debtToken)
                : undefined;
        message.collateralAssetId =
            object.collateralAssetId !== undefined &&
                object.collateralAssetId !== null
                ? long_1.default.fromValue(object.collateralAssetId)
                : long_1.default.UZERO;
        message.debtAssetId =
            object.debtAssetId !== undefined && object.debtAssetId !== null
                ? long_1.default.fromValue(object.debtAssetId)
                : long_1.default.UZERO;
        message.isDebtCmst = (_c = object.isDebtCmst) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseMsgLiquidateExternalKeeperResponse() {
    return {};
}
exports.MsgLiquidateExternalKeeperResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLiquidateExternalKeeperResponse();
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
        const message = createBaseMsgLiquidateExternalKeeperResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.MsgLiquidateInternalKeeper =
            this.MsgLiquidateInternalKeeper.bind(this);
        this.MsgAppReserveFunds = this.MsgAppReserveFunds.bind(this);
        this.MsgLiquidateExternalKeeper =
            this.MsgLiquidateExternalKeeper.bind(this);
    }
    MsgLiquidateInternalKeeper(request) {
        const data = exports.MsgLiquidateInternalKeeperRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Msg", "MsgLiquidateInternalKeeper", data);
        return promise.then((data) => exports.MsgLiquidateInternalKeeperResponse.decode(new _m0.Reader(data)));
    }
    MsgAppReserveFunds(request) {
        const data = exports.MsgAppReserveFundsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Msg", "MsgAppReserveFunds", data);
        return promise.then((data) => exports.MsgAppReserveFundsResponse.decode(new _m0.Reader(data)));
    }
    MsgLiquidateExternalKeeper(request) {
        const data = exports.MsgLiquidateExternalKeeperRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.liquidationsV2.v1beta1.Msg", "MsgLiquidateExternalKeeper", data);
        return promise.then((data) => exports.MsgLiquidateExternalKeeperResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map