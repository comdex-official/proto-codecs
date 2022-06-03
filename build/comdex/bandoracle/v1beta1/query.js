"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryLastFetchPriceIdResponse = exports.QueryLastFetchPriceIdRequest = exports.QueryFetchPriceResponse = exports.QueryFetchPriceRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const params_1 = require("./params");
const fetch_price_1 = require("./fetch_price");
exports.protobufPackage = "comdex.bandoracle.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
function createBaseQueryFetchPriceRequest() {
    return { requestId: long_1.default.ZERO };
}
exports.QueryFetchPriceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
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
            requestId: isSet(object.requestId)
                ? long_1.default.fromString(object.requestId)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFetchPriceRequest();
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? long_1.default.fromValue(object.requestId)
                : long_1.default.ZERO;
        return message;
    },
};
function createBaseQueryFetchPriceResponse() {
    return { result: undefined };
}
exports.QueryFetchPriceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            fetch_price_1.FetchPriceResult.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = fetch_price_1.FetchPriceResult.decode(reader, reader.uint32());
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
            result: isSet(object.result)
                ? fetch_price_1.FetchPriceResult.fromJSON(object.result)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result
                ? fetch_price_1.FetchPriceResult.toJSON(message.result)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFetchPriceResponse();
        message.result =
            object.result !== undefined && object.result !== null
                ? fetch_price_1.FetchPriceResult.fromPartial(object.result)
                : undefined;
        return message;
    },
};
function createBaseQueryLastFetchPriceIdRequest() {
    return {};
}
exports.QueryLastFetchPriceIdRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastFetchPriceIdRequest();
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
        const message = createBaseQueryLastFetchPriceIdRequest();
        return message;
    },
};
function createBaseQueryLastFetchPriceIdResponse() {
    return { requestId: long_1.default.ZERO };
}
exports.QueryLastFetchPriceIdResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastFetchPriceIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
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
            requestId: isSet(object.requestId)
                ? long_1.default.fromString(object.requestId)
                : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastFetchPriceIdResponse();
        message.requestId =
            object.requestId !== undefined && object.requestId !== null
                ? long_1.default.fromValue(object.requestId)
                : long_1.default.ZERO;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.FetchPriceResult = this.FetchPriceResult.bind(this);
        this.LastFetchPriceId = this.LastFetchPriceId.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.bandoracle.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    FetchPriceResult(request) {
        const data = exports.QueryFetchPriceRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.bandoracle.v1beta1.Query", "FetchPriceResult", data);
        return promise.then((data) => exports.QueryFetchPriceResponse.decode(new minimal_1.default.Reader(data)));
    }
    LastFetchPriceId(request) {
        const data = exports.QueryLastFetchPriceIdRequest.encode(request).finish();
        const promise = this.rpc.request("comdex.bandoracle.v1beta1.Query", "LastFetchPriceId", data);
        return promise.then((data) => exports.QueryLastFetchPriceIdResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map