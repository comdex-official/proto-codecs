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
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryMarketResponse = exports.QueryMarketRequest = exports.QueryMarketsResponse = exports.QueryMarketsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const market_1 = require("../../../comdex/market/v1beta1/market");
const params_1 = require("../../../comdex/market/v1beta1/params");
exports.protobufPackage = "comdex.market.v1beta1";
function createBaseQueryMarketsRequest() {
    return { pagination: undefined };
}
exports.QueryMarketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryMarketsResponse() {
    return { timeWeightedAverage: [], pagination: undefined };
}
exports.QueryMarketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.timeWeightedAverage) {
            market_1.TimeWeightedAverage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeWeightedAverage.push(market_1.TimeWeightedAverage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            timeWeightedAverage: Array.isArray(object === null || object === void 0 ? void 0 : object.timeWeightedAverage)
                ? object.timeWeightedAverage.map((e) => market_1.TimeWeightedAverage.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.timeWeightedAverage) {
            obj.timeWeightedAverage = message.timeWeightedAverage.map((e) => e ? market_1.TimeWeightedAverage.toJSON(e) : undefined);
        }
        else {
            obj.timeWeightedAverage = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryMarketsResponse();
        message.timeWeightedAverage =
            ((_a = object.timeWeightedAverage) === null || _a === void 0 ? void 0 : _a.map((e) => market_1.TimeWeightedAverage.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryMarketRequest() {
    return { assetID: long_1.default.UZERO };
}
exports.QueryMarketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.assetID.isZero()) {
            writer.uint32(8).uint64(message.assetID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetID = reader.uint64();
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
            assetID: isSet(object.assetID)
                ? long_1.default.fromValue(object.assetID)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.assetID !== undefined &&
            (obj.assetID = (message.assetID || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketRequest();
        message.assetID =
            object.assetID !== undefined && object.assetID !== null
                ? long_1.default.fromValue(object.assetID)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryMarketResponse() {
    return { timeWeightedAverage: undefined };
}
exports.QueryMarketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timeWeightedAverage !== undefined) {
            market_1.TimeWeightedAverage.encode(message.timeWeightedAverage, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeWeightedAverage = market_1.TimeWeightedAverage.decode(reader, reader.uint32());
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
            timeWeightedAverage: isSet(object.timeWeightedAverage)
                ? market_1.TimeWeightedAverage.fromJSON(object.timeWeightedAverage)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.timeWeightedAverage !== undefined &&
            (obj.timeWeightedAverage = message.timeWeightedAverage
                ? market_1.TimeWeightedAverage.toJSON(message.timeWeightedAverage)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketResponse();
        message.timeWeightedAverage =
            object.timeWeightedAverage !== undefined &&
                object.timeWeightedAverage !== null
                ? market_1.TimeWeightedAverage.fromPartial(object.timeWeightedAverage)
                : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.QueryMarkets = this.QueryMarkets.bind(this);
        this.QueryMarket = this.QueryMarket.bind(this);
        this.QueryParams = this.QueryParams.bind(this);
    }
    QueryMarkets(request) {
        const data = exports.QueryMarketsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.market.v1beta1.Query", "QueryMarkets", data);
        return promise.then((data) => exports.QueryMarketsResponse.decode(new _m0.Reader(data)));
    }
    QueryMarket(request) {
        const data = exports.QueryMarketRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.market.v1beta1.Query", "QueryMarket", data);
        return promise.then((data) => exports.QueryMarketResponse.decode(new _m0.Reader(data)));
    }
    QueryParams(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.market.v1beta1.Query", "QueryParams", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map