"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgFetchPriceDataResponse = exports.MsgFetchPriceData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const fetch_price_1 = require("./fetch_price");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "comdex.bandoracle.v1beta1";
function createBaseMsgFetchPriceData() {
    return {
        creator: "",
        oracleScriptId: long_1.default.UZERO,
        sourceChannel: "",
        calldata: undefined,
        askCount: long_1.default.UZERO,
        minCount: long_1.default.UZERO,
        feeLimit: [],
        requestKey: "",
        prepareGas: long_1.default.UZERO,
        executeGas: long_1.default.UZERO,
        clientId: "",
    };
}
exports.MsgFetchPriceData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).uint64(message.oracleScriptId);
        }
        if (message.sourceChannel !== "") {
            writer.uint32(26).string(message.sourceChannel);
        }
        if (message.calldata !== undefined) {
            fetch_price_1.FetchPriceCallData.encode(message.calldata, writer.uint32(34).fork()).ldelim();
        }
        if (!message.askCount.isZero()) {
            writer.uint32(40).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(48).uint64(message.minCount);
        }
        for (const v of message.feeLimit) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.requestKey !== "") {
            writer.uint32(66).string(message.requestKey);
        }
        if (!message.prepareGas.isZero()) {
            writer.uint32(72).uint64(message.prepareGas);
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(80).uint64(message.executeGas);
        }
        if (message.clientId !== "") {
            writer.uint32(90).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFetchPriceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.oracleScriptId = reader.uint64();
                    break;
                case 3:
                    message.sourceChannel = reader.string();
                    break;
                case 4:
                    message.calldata = fetch_price_1.FetchPriceCallData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.askCount = reader.uint64();
                    break;
                case 6:
                    message.minCount = reader.uint64();
                    break;
                case 7:
                    message.feeLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.requestKey = reader.string();
                    break;
                case 9:
                    message.prepareGas = reader.uint64();
                    break;
                case 10:
                    message.executeGas = reader.uint64();
                    break;
                case 11:
                    message.clientId = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            oracleScriptId: isSet(object.oracleScriptId)
                ? long_1.default.fromString(object.oracleScriptId)
                : long_1.default.UZERO,
            sourceChannel: isSet(object.sourceChannel)
                ? String(object.sourceChannel)
                : "",
            calldata: isSet(object.calldata)
                ? fetch_price_1.FetchPriceCallData.fromJSON(object.calldata)
                : undefined,
            askCount: isSet(object.askCount)
                ? long_1.default.fromString(object.askCount)
                : long_1.default.UZERO,
            minCount: isSet(object.minCount)
                ? long_1.default.fromString(object.minCount)
                : long_1.default.UZERO,
            feeLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.feeLimit)
                ? object.feeLimit.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            requestKey: isSet(object.requestKey) ? String(object.requestKey) : "",
            prepareGas: isSet(object.prepareGas)
                ? long_1.default.fromString(object.prepareGas)
                : long_1.default.UZERO,
            executeGas: isSet(object.executeGas)
                ? long_1.default.fromString(object.executeGas)
                : long_1.default.UZERO,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.UZERO).toString());
        message.sourceChannel !== undefined &&
            (obj.sourceChannel = message.sourceChannel);
        message.calldata !== undefined &&
            (obj.calldata = message.calldata
                ? fetch_price_1.FetchPriceCallData.toJSON(message.calldata)
                : undefined);
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.UZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.UZERO).toString());
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.feeLimit = [];
        }
        message.requestKey !== undefined && (obj.requestKey = message.requestKey);
        message.prepareGas !== undefined &&
            (obj.prepareGas = (message.prepareGas || long_1.default.UZERO).toString());
        message.executeGas !== undefined &&
            (obj.executeGas = (message.executeGas || long_1.default.UZERO).toString());
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgFetchPriceData();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.oracleScriptId =
            object.oracleScriptId !== undefined && object.oracleScriptId !== null
                ? long_1.default.fromValue(object.oracleScriptId)
                : long_1.default.UZERO;
        message.sourceChannel = (_b = object.sourceChannel) !== null && _b !== void 0 ? _b : "";
        message.calldata =
            object.calldata !== undefined && object.calldata !== null
                ? fetch_price_1.FetchPriceCallData.fromPartial(object.calldata)
                : undefined;
        message.askCount =
            object.askCount !== undefined && object.askCount !== null
                ? long_1.default.fromValue(object.askCount)
                : long_1.default.UZERO;
        message.minCount =
            object.minCount !== undefined && object.minCount !== null
                ? long_1.default.fromValue(object.minCount)
                : long_1.default.UZERO;
        message.feeLimit = ((_c = object.feeLimit) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.requestKey = (_d = object.requestKey) !== null && _d !== void 0 ? _d : "";
        message.prepareGas =
            object.prepareGas !== undefined && object.prepareGas !== null
                ? long_1.default.fromValue(object.prepareGas)
                : long_1.default.UZERO;
        message.executeGas =
            object.executeGas !== undefined && object.executeGas !== null
                ? long_1.default.fromValue(object.executeGas)
                : long_1.default.UZERO;
        message.clientId = (_e = object.clientId) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgFetchPriceDataResponse() {
    return {};
}
exports.MsgFetchPriceDataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFetchPriceDataResponse();
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
        const message = createBaseMsgFetchPriceDataResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.FetchPriceData = this.FetchPriceData.bind(this);
    }
    FetchPriceData(request) {
        const data = exports.MsgFetchPriceData.encode(request).finish();
        const promise = this.rpc.request("comdex.bandoracle.v1beta1.Msg", "FetchPriceData", data);
        return promise.then((data) => exports.MsgFetchPriceDataResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map