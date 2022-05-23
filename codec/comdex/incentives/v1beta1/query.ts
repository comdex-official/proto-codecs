/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./epochs";
import { Gauge } from "./gauge";

export const protobufPackage = "comdex.incentives.v1beta1";

/** PARAMS */
export interface QueryParamsRequest {}

export interface QueryParamsResponse {
  params?: Params;
}

/** ALL EPOCHES */
export interface QueryAllEpochsInfoRequest {
  pagination?: PageRequest;
}

export interface QueryAllEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination?: PageResponse;
}

/** EPOCH BY DURATION */
export interface QueryEpochInfoByDurationRequest {
  durationSeconds: Long;
}

export interface QueryEpochInfoByDurationResponse {
  epoch?: EpochInfo;
}

/** ALL GAUGES */
export interface QueryAllGaugesRequest {
  pagination?: PageRequest;
}

export interface QueryAllGaugesResponse {
  gauges: Gauge[];
  pagination?: PageResponse;
}

/** GAUGE BY ID */
export interface QueryGaugeByIdRequest {
  gaugeId: Long;
}

export interface QueryGaugeByIdResponse {
  gauge?: Gauge;
}

/** GAUGE BY TRIIGER DURATION */
export interface QueryGaugesByDurationRequest {
  durationSeconds: Long;
}

export interface QueryGaugeByDurationResponse {
  gauges: Gauge[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryAllEpochsInfoRequest(): QueryAllEpochsInfoRequest {
  return { pagination: undefined };
}

export const QueryAllEpochsInfoRequest = {
  encode(
    message: QueryAllEpochsInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllEpochsInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochsInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEpochsInfoRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllEpochsInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochsInfoRequest>, I>>(
    object: I
  ): QueryAllEpochsInfoRequest {
    const message = createBaseQueryAllEpochsInfoRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllEpochsInfoResponse(): QueryAllEpochsInfoResponse {
  return { epochs: [], pagination: undefined };
}

export const QueryAllEpochsInfoResponse = {
  encode(
    message: QueryAllEpochsInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllEpochsInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEpochsInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs)
        ? object.epochs.map((e: any) => EpochInfo.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllEpochsInfoResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) =>
        e ? EpochInfo.toJSON(e) : undefined
      );
    } else {
      obj.epochs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllEpochsInfoResponse>, I>>(
    object: I
  ): QueryAllEpochsInfoResponse {
    const message = createBaseQueryAllEpochsInfoResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryEpochInfoByDurationRequest(): QueryEpochInfoByDurationRequest {
  return { durationSeconds: Long.UZERO };
}

export const QueryEpochInfoByDurationRequest = {
  encode(
    message: QueryEpochInfoByDurationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.durationSeconds.isZero()) {
      writer.uint32(8).uint64(message.durationSeconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEpochInfoByDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoByDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.durationSeconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfoByDurationRequest {
    return {
      durationSeconds: isSet(object.durationSeconds)
        ? Long.fromString(object.durationSeconds)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryEpochInfoByDurationRequest): unknown {
    const obj: any = {};
    message.durationSeconds !== undefined &&
      (obj.durationSeconds = (
        message.durationSeconds || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEpochInfoByDurationRequest>, I>>(
    object: I
  ): QueryEpochInfoByDurationRequest {
    const message = createBaseQueryEpochInfoByDurationRequest();
    message.durationSeconds =
      object.durationSeconds !== undefined && object.durationSeconds !== null
        ? Long.fromValue(object.durationSeconds)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryEpochInfoByDurationResponse(): QueryEpochInfoByDurationResponse {
  return { epoch: undefined };
}

export const QueryEpochInfoByDurationResponse = {
  encode(
    message: QueryEpochInfoByDurationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epoch !== undefined) {
      EpochInfo.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryEpochInfoByDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfoByDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = EpochInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEpochInfoByDurationResponse {
    return {
      epoch: isSet(object.epoch) ? EpochInfo.fromJSON(object.epoch) : undefined,
    };
  },

  toJSON(message: QueryEpochInfoByDurationResponse): unknown {
    const obj: any = {};
    message.epoch !== undefined &&
      (obj.epoch = message.epoch ? EpochInfo.toJSON(message.epoch) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryEpochInfoByDurationResponse>, I>
  >(object: I): QueryEpochInfoByDurationResponse {
    const message = createBaseQueryEpochInfoByDurationResponse();
    message.epoch =
      object.epoch !== undefined && object.epoch !== null
        ? EpochInfo.fromPartial(object.epoch)
        : undefined;
    return message;
  },
};

function createBaseQueryAllGaugesRequest(): QueryAllGaugesRequest {
  return { pagination: undefined };
}

export const QueryAllGaugesRequest = {
  encode(
    message: QueryAllGaugesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllGaugesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGaugesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllGaugesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGaugesRequest>, I>>(
    object: I
  ): QueryAllGaugesRequest {
    const message = createBaseQueryAllGaugesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllGaugesResponse(): QueryAllGaugesResponse {
  return { gauges: [], pagination: undefined };
}

export const QueryAllGaugesResponse = {
  encode(
    message: QueryAllGaugesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllGaugesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGaugesResponse {
    return {
      gauges: Array.isArray(object?.gauges)
        ? object.gauges.map((e: any) => Gauge.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllGaugesResponse): unknown {
    const obj: any = {};
    if (message.gauges) {
      obj.gauges = message.gauges.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.gauges = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGaugesResponse>, I>>(
    object: I
  ): QueryAllGaugesResponse {
    const message = createBaseQueryAllGaugesResponse();
    message.gauges = object.gauges?.map((e) => Gauge.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGaugeByIdRequest(): QueryGaugeByIdRequest {
  return { gaugeId: Long.UZERO };
}

export const QueryGaugeByIdRequest = {
  encode(
    message: QueryGaugeByIdRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGaugeByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugeByIdRequest {
    return {
      gaugeId: isSet(object.gaugeId)
        ? Long.fromString(object.gaugeId)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryGaugeByIdRequest): unknown {
    const obj: any = {};
    message.gaugeId !== undefined &&
      (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeByIdRequest>, I>>(
    object: I
  ): QueryGaugeByIdRequest {
    const message = createBaseQueryGaugeByIdRequest();
    message.gaugeId =
      object.gaugeId !== undefined && object.gaugeId !== null
        ? Long.fromValue(object.gaugeId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryGaugeByIdResponse(): QueryGaugeByIdResponse {
  return { gauge: undefined };
}

export const QueryGaugeByIdResponse = {
  encode(
    message: QueryGaugeByIdResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGaugeByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge = Gauge.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugeByIdResponse {
    return {
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined,
    };
  },

  toJSON(message: QueryGaugeByIdResponse): unknown {
    const obj: any = {};
    message.gauge !== undefined &&
      (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeByIdResponse>, I>>(
    object: I
  ): QueryGaugeByIdResponse {
    const message = createBaseQueryGaugeByIdResponse();
    message.gauge =
      object.gauge !== undefined && object.gauge !== null
        ? Gauge.fromPartial(object.gauge)
        : undefined;
    return message;
  },
};

function createBaseQueryGaugesByDurationRequest(): QueryGaugesByDurationRequest {
  return { durationSeconds: Long.UZERO };
}

export const QueryGaugesByDurationRequest = {
  encode(
    message: QueryGaugesByDurationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.durationSeconds.isZero()) {
      writer.uint32(8).uint64(message.durationSeconds);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGaugesByDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugesByDurationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.durationSeconds = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugesByDurationRequest {
    return {
      durationSeconds: isSet(object.durationSeconds)
        ? Long.fromString(object.durationSeconds)
        : Long.UZERO,
    };
  },

  toJSON(message: QueryGaugesByDurationRequest): unknown {
    const obj: any = {};
    message.durationSeconds !== undefined &&
      (obj.durationSeconds = (
        message.durationSeconds || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugesByDurationRequest>, I>>(
    object: I
  ): QueryGaugesByDurationRequest {
    const message = createBaseQueryGaugesByDurationRequest();
    message.durationSeconds =
      object.durationSeconds !== undefined && object.durationSeconds !== null
        ? Long.fromValue(object.durationSeconds)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryGaugeByDurationResponse(): QueryGaugeByDurationResponse {
  return { gauges: [] };
}

export const QueryGaugeByDurationResponse = {
  encode(
    message: QueryGaugeByDurationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGaugeByDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeByDurationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGaugeByDurationResponse {
    return {
      gauges: Array.isArray(object?.gauges)
        ? object.gauges.map((e: any) => Gauge.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryGaugeByDurationResponse): unknown {
    const obj: any = {};
    if (message.gauges) {
      obj.gauges = message.gauges.map((e) => (e ? Gauge.toJSON(e) : undefined));
    } else {
      obj.gauges = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGaugeByDurationResponse>, I>>(
    object: I
  ): QueryGaugeByDurationResponse {
    const message = createBaseQueryGaugeByDurationResponse();
    message.gauges = object.gauges?.map((e) => Gauge.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  QueryAllEpochsInfo(
    request: QueryAllEpochsInfoRequest
  ): Promise<QueryAllEpochsInfoResponse>;
  QueryEpochInfoByDuration(
    request: QueryEpochInfoByDurationRequest
  ): Promise<QueryEpochInfoByDurationResponse>;
  QueryAllGauges(
    request: QueryAllGaugesRequest
  ): Promise<QueryAllGaugesResponse>;
  QueryGaugeById(
    request: QueryGaugeByIdRequest
  ): Promise<QueryGaugeByIdResponse>;
  QueryGaugeByDuration(
    request: QueryGaugesByDurationRequest
  ): Promise<QueryGaugeByDurationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.QueryAllEpochsInfo = this.QueryAllEpochsInfo.bind(this);
    this.QueryEpochInfoByDuration = this.QueryEpochInfoByDuration.bind(this);
    this.QueryAllGauges = this.QueryAllGauges.bind(this);
    this.QueryGaugeById = this.QueryGaugeById.bind(this);
    this.QueryGaugeByDuration = this.QueryGaugeByDuration.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllEpochsInfo(
    request: QueryAllEpochsInfoRequest
  ): Promise<QueryAllEpochsInfoResponse> {
    const data = QueryAllEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Query",
      "QueryAllEpochsInfo",
      data
    );
    return promise.then((data) =>
      QueryAllEpochsInfoResponse.decode(new _m0.Reader(data))
    );
  }

  QueryEpochInfoByDuration(
    request: QueryEpochInfoByDurationRequest
  ): Promise<QueryEpochInfoByDurationResponse> {
    const data = QueryEpochInfoByDurationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Query",
      "QueryEpochInfoByDuration",
      data
    );
    return promise.then((data) =>
      QueryEpochInfoByDurationResponse.decode(new _m0.Reader(data))
    );
  }

  QueryAllGauges(
    request: QueryAllGaugesRequest
  ): Promise<QueryAllGaugesResponse> {
    const data = QueryAllGaugesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Query",
      "QueryAllGauges",
      data
    );
    return promise.then((data) =>
      QueryAllGaugesResponse.decode(new _m0.Reader(data))
    );
  }

  QueryGaugeById(
    request: QueryGaugeByIdRequest
  ): Promise<QueryGaugeByIdResponse> {
    const data = QueryGaugeByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Query",
      "QueryGaugeById",
      data
    );
    return promise.then((data) =>
      QueryGaugeByIdResponse.decode(new _m0.Reader(data))
    );
  }

  QueryGaugeByDuration(
    request: QueryGaugesByDurationRequest
  ): Promise<QueryGaugeByDurationResponse> {
    const data = QueryGaugesByDurationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.incentives.v1beta1.Query",
      "QueryGaugeByDuration",
      data
    );
    return promise.then((data) =>
      QueryGaugeByDurationResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
