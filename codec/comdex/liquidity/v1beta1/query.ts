/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params, GenericParams } from "../../../comdex/liquidity/v1beta1/params";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Pair,
  DepositRequest,
  WithdrawRequest,
  Order,
} from "../../../comdex/liquidity/v1beta1/liquidity";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidity.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}

/** QueryGenericParamsRequest is request type for the Query/GenericParams RPC method. */
export interface QueryGenericParamsRequest {
  appId: Long;
}

/** QueryGenericParamsResponse is response type for the Query/GenericParams RPC method. */
export interface QueryGenericParamsResponse {
  params?: GenericParams;
}

/** QueryPoolsRequest is request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
  pairId: Long;
  disabled: string;
  pagination?: PageRequest;
  appId: Long;
}

/** QueryPoolsResponse is response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
  pools: PoolResponse[];
  pagination?: PageResponse;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  poolId: Long;
  appId: Long;
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  pool?: PoolResponse;
}

/** QueryPoolByReserveAddressRequest is request type for the Query/PoolByReserveAddress RPC method. */
export interface QueryPoolByReserveAddressRequest {
  reserveAddress: string;
  appId: Long;
}

/** QueryPoolByPoolCoinDenomRequest is request type for the Query/PoolByPoolCoinDenom RPC method. */
export interface QueryPoolByPoolCoinDenomRequest {
  poolCoinDenom: string;
  appId: Long;
}

/** QueryPairsRequest is request type for the Query/Pairs RPC method. */
export interface QueryPairsRequest {
  denoms: string[];
  pagination?: PageRequest;
  appId: Long;
}

/** QueryPairsResponse is response type for the Query/Pairs RPC method. */
export interface QueryPairsResponse {
  pairs: Pair[];
  pagination?: PageResponse;
}

/** QueryPairRequest is request type for the Query/Pair RPC method. */
export interface QueryPairRequest {
  pairId: Long;
  appId: Long;
}

/** QueryPairResponse is response type for the Query/Pair RPC method. */
export interface QueryPairResponse {
  pair?: Pair;
}

/** QueryDepositRequestsRequest is request type for the Query/DepositRequests RPC method. */
export interface QueryDepositRequestsRequest {
  poolId: Long;
  appId: Long;
  pagination?: PageRequest;
}

/** QueryDepositRequestsResponse is response type for the Query/DepositRequests RPC method. */
export interface QueryDepositRequestsResponse {
  depositRequests: DepositRequest[];
  pagination?: PageResponse;
}

/** QueryDepositRequestRequest is request type for the Query/DepositRequest RPC method. */
export interface QueryDepositRequestRequest {
  poolId: Long;
  id: Long;
  appId: Long;
}

/** QueryDepositRequestResponse is response type for the Query/DepositRequest RPC method. */
export interface QueryDepositRequestResponse {
  depositRequest?: DepositRequest;
}

/** QueryWithdrawRequestsRequest is request type for the Query/WithdrawRequests RPC method. */
export interface QueryWithdrawRequestsRequest {
  poolId: Long;
  pagination?: PageRequest;
  appId: Long;
}

/** QueryWithdrawRequestsResponse is response type for the Query/WithdrawRequests RPC method. */
export interface QueryWithdrawRequestsResponse {
  withdrawRequests: WithdrawRequest[];
  pagination?: PageResponse;
}

/** QueryWithdrawRequestRequest is request type for the Query/WithdrawRequest RPC method. */
export interface QueryWithdrawRequestRequest {
  poolId: Long;
  id: Long;
  appId: Long;
}

/** QueryWithdrawRequestResponse is response type for the Query/WithdrawRequest RPC method. */
export interface QueryWithdrawRequestResponse {
  withdrawRequest?: WithdrawRequest;
}

/** QueryOrdersRequest is request type for the Query/Orders RPC method. */
export interface QueryOrdersRequest {
  pairId: Long;
  pagination?: PageRequest;
  appId: Long;
}

/** QueryOrdersResponse is response type for the Query/Orders RPC method. */
export interface QueryOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}

/** QueryOrderRequest is request type for the Query/Order RPC method. */
export interface QueryOrderRequest {
  pairId: Long;
  id: Long;
  appId: Long;
}

/** QueryOrderResponse is response type for the Query/Order RPC method. */
export interface QueryOrderResponse {
  order?: Order;
}

/** QueryOrdersByOrdererRequest is request type for the Query/OrdersByOrderer RPC method. */
export interface QueryOrdersByOrdererRequest {
  orderer: string;
  pairId: Long;
  pagination?: PageRequest;
  appId: Long;
}

/** PoolResponse defines a custom pool response message. */
export interface PoolResponse {
  id: Long;
  pairId: Long;
  reserveAddress: string;
  poolCoinDenom: string;
  balances: Coin[];
  lastDepositRequestId: Long;
  lastWithdrawRequestId: Long;
  appId: Long;
}

/** QueryFarmerRequest is request type for the Query/Farmer RPC method. */
export interface QueryFarmerRequest {
  appId: Long;
  poolId: Long;
  farmer: string;
}

export interface QueuedPoolCoin {
  poolCoin?: Coin;
  dequeAt?: Date;
}

/** QueryFarmerResponse is response type for the Query/Farmer RPC method. */
export interface QueryFarmerResponse {
  activePoolCoin?: Coin;
  queuedPoolCoin: QueuedPoolCoin[];
}

/** QueryDeserializePoolCoinRequest is request type for the Query/DeserializePoolCoin RPC method. */
export interface QueryDeserializePoolCoinRequest {
  poolId: Long;
  poolCoinAmount: Long;
  appId: Long;
}

/** QueryDeserializePoolCoinResponse is response type for the Query/DeserializePoolCoin RPC method. */
export interface QueryDeserializePoolCoinResponse {
  coins: Coin[];
}

/** QueryPoolsIncentivesRequest is request type for the Query/PoolsIncentives RPC method. */
export interface QueryPoolsIncentivesRequest {
  appId: Long;
}

export interface PoolIncentive {
  poolId: Long;
  masterPool: boolean;
  childPoolIds: Long[];
  totalRewards?: Coin;
  distributedRewards?: Coin;
  totalEpochs: Long;
  filledEpochs: Long;
  epochDuration?: Duration;
  nextDistribution?: Date;
  isSwapFee: boolean;
  appId: Long;
}

/** QueryPoolIncentivesResponse is response type for the Query/PoolsIncentives RPC method. */
export interface QueryPoolIncentivesResponse {
  poolIncentives: PoolIncentive[];
}

export interface QueryFarmedPoolCoinRequest {
  poolId: Long;
  appId: Long;
}

export interface QueryFarmedPoolCoinResponse {
  coin?: Coin;
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

function createBaseQueryGenericParamsRequest(): QueryGenericParamsRequest {
  return { appId: Long.UZERO };
}

export const QueryGenericParamsRequest = {
  encode(
    message: QueryGenericParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGenericParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGenericParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGenericParamsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryGenericParamsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGenericParamsRequest>, I>>(
    object: I
  ): QueryGenericParamsRequest {
    const message = createBaseQueryGenericParamsRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryGenericParamsResponse(): QueryGenericParamsResponse {
  return { params: undefined };
}

export const QueryGenericParamsResponse = {
  encode(
    message: QueryGenericParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      GenericParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGenericParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGenericParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = GenericParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGenericParamsResponse {
    return {
      params: isSet(object.params)
        ? GenericParams.fromJSON(object.params)
        : undefined,
    };
  },

  toJSON(message: QueryGenericParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params
        ? GenericParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGenericParamsResponse>, I>>(
    object: I
  ): QueryGenericParamsResponse {
    const message = createBaseQueryGenericParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? GenericParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pairId: Long.UZERO,
    disabled: "",
    pagination: undefined,
    appId: Long.UZERO,
  };
}

export const QueryPoolsRequest = {
  encode(
    message: QueryPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (message.disabled !== "") {
      writer.uint32(18).string(message.disabled);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.disabled = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      disabled: isSet(object.disabled) ? String(object.disabled) : "",
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.disabled !== undefined && (obj.disabled = message.disabled);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    object: I
  ): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.disabled = object.disabled ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(
    message: QueryPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      PoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(PoolResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => PoolResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) =>
        e ? PoolResponse.toJSON(e) : undefined
      );
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    object: I
  ): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => PoolResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { poolId: Long.UZERO, appId: Long.UZERO };
}

export const QueryPoolRequest = {
  encode(
    message: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    object: I
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      PoolResponse.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = PoolResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? PoolResponse.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? PoolResponse.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? PoolResponse.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolByReserveAddressRequest(): QueryPoolByReserveAddressRequest {
  return { reserveAddress: "", appId: Long.UZERO };
}

export const QueryPoolByReserveAddressRequest = {
  encode(
    message: QueryPoolByReserveAddressRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reserveAddress !== "") {
      writer.uint32(10).string(message.reserveAddress);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolByReserveAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByReserveAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAddress = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolByReserveAddressRequest {
    return {
      reserveAddress: isSet(object.reserveAddress)
        ? String(object.reserveAddress)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolByReserveAddressRequest): unknown {
    const obj: any = {};
    message.reserveAddress !== undefined &&
      (obj.reserveAddress = message.reserveAddress);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryPoolByReserveAddressRequest>, I>
  >(object: I): QueryPoolByReserveAddressRequest {
    const message = createBaseQueryPoolByReserveAddressRequest();
    message.reserveAddress = object.reserveAddress ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolByPoolCoinDenomRequest(): QueryPoolByPoolCoinDenomRequest {
  return { poolCoinDenom: "", appId: Long.UZERO };
}

export const QueryPoolByPoolCoinDenomRequest = {
  encode(
    message: QueryPoolByPoolCoinDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolCoinDenom !== "") {
      writer.uint32(10).string(message.poolCoinDenom);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolByPoolCoinDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolByPoolCoinDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCoinDenom = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolByPoolCoinDenomRequest {
    return {
      poolCoinDenom: isSet(object.poolCoinDenom)
        ? String(object.poolCoinDenom)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolByPoolCoinDenomRequest): unknown {
    const obj: any = {};
    message.poolCoinDenom !== undefined &&
      (obj.poolCoinDenom = message.poolCoinDenom);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolByPoolCoinDenomRequest>, I>>(
    object: I
  ): QueryPoolByPoolCoinDenomRequest {
    const message = createBaseQueryPoolByPoolCoinDenomRequest();
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairsRequest(): QueryPairsRequest {
  return { denoms: [], pagination: undefined, appId: Long.UZERO };
}

export const QueryPairsRequest = {
  encode(
    message: QueryPairsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairsRequest {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPairsRequest): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairsRequest>, I>>(
    object: I
  ): QueryPairsRequest {
    const message = createBaseQueryPairsRequest();
    message.denoms = object.denoms?.map((e) => e) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairsResponse(): QueryPairsResponse {
  return { pairs: [], pagination: undefined };
}

export const QueryPairsResponse = {
  encode(
    message: QueryPairsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => Pair.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? Pair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairsResponse>, I>>(
    object: I
  ): QueryPairsResponse {
    const message = createBaseQueryPairsResponse();
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryPairRequest(): QueryPairRequest {
  return { pairId: Long.UZERO, appId: Long.UZERO };
}

export const QueryPairRequest = {
  encode(
    message: QueryPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairRequest {
    return {
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPairRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairRequest>, I>>(
    object: I
  ): QueryPairRequest {
    const message = createBaseQueryPairRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPairResponse(): QueryPairResponse {
  return { pair: undefined };
}

export const QueryPairResponse = {
  encode(
    message: QueryPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPairResponse {
    return {
      pair: isSet(object.pair) ? Pair.fromJSON(object.pair) : undefined,
    };
  },

  toJSON(message: QueryPairResponse): unknown {
    const obj: any = {};
    message.pair !== undefined &&
      (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPairResponse>, I>>(
    object: I
  ): QueryPairResponse {
    const message = createBaseQueryPairResponse();
    message.pair =
      object.pair !== undefined && object.pair !== null
        ? Pair.fromPartial(object.pair)
        : undefined;
    return message;
  },
};

function createBaseQueryDepositRequestsRequest(): QueryDepositRequestsRequest {
  return { poolId: Long.UZERO, appId: Long.UZERO, pagination: undefined };
}

export const QueryDepositRequestsRequest = {
  encode(
    message: QueryDepositRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequestsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDepositRequestsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestsRequest>, I>>(
    object: I
  ): QueryDepositRequestsRequest {
    const message = createBaseQueryDepositRequestsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDepositRequestsResponse(): QueryDepositRequestsResponse {
  return { depositRequests: [], pagination: undefined };
}

export const QueryDepositRequestsResponse = {
  encode(
    message: QueryDepositRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.depositRequests) {
      DepositRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryDepositRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRequests.push(
            DepositRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryDepositRequestsResponse {
    return {
      depositRequests: Array.isArray(object?.depositRequests)
        ? object.depositRequests.map((e: any) => DepositRequest.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDepositRequestsResponse): unknown {
    const obj: any = {};
    if (message.depositRequests) {
      obj.depositRequests = message.depositRequests.map((e) =>
        e ? DepositRequest.toJSON(e) : undefined
      );
    } else {
      obj.depositRequests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestsResponse>, I>>(
    object: I
  ): QueryDepositRequestsResponse {
    const message = createBaseQueryDepositRequestsResponse();
    message.depositRequests =
      object.depositRequests?.map((e) => DepositRequest.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDepositRequestRequest(): QueryDepositRequestRequest {
  return { poolId: Long.UZERO, id: Long.UZERO, appId: Long.UZERO };
}

export const QueryDepositRequestRequest = {
  encode(
    message: QueryDepositRequestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequestRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryDepositRequestRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestRequest>, I>>(
    object: I
  ): QueryDepositRequestRequest {
    const message = createBaseQueryDepositRequestRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryDepositRequestResponse(): QueryDepositRequestResponse {
  return { depositRequest: undefined };
}

export const QueryDepositRequestResponse = {
  encode(
    message: QueryDepositRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositRequest !== undefined) {
      DepositRequest.encode(
        message.depositRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDepositRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositRequest = DepositRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDepositRequestResponse {
    return {
      depositRequest: isSet(object.depositRequest)
        ? DepositRequest.fromJSON(object.depositRequest)
        : undefined,
    };
  },

  toJSON(message: QueryDepositRequestResponse): unknown {
    const obj: any = {};
    message.depositRequest !== undefined &&
      (obj.depositRequest = message.depositRequest
        ? DepositRequest.toJSON(message.depositRequest)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDepositRequestResponse>, I>>(
    object: I
  ): QueryDepositRequestResponse {
    const message = createBaseQueryDepositRequestResponse();
    message.depositRequest =
      object.depositRequest !== undefined && object.depositRequest !== null
        ? DepositRequest.fromPartial(object.depositRequest)
        : undefined;
    return message;
  },
};

function createBaseQueryWithdrawRequestsRequest(): QueryWithdrawRequestsRequest {
  return { poolId: Long.UZERO, pagination: undefined, appId: Long.UZERO };
}

export const QueryWithdrawRequestsRequest = {
  encode(
    message: QueryWithdrawRequestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWithdrawRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawRequestsRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryWithdrawRequestsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestsRequest>, I>>(
    object: I
  ): QueryWithdrawRequestsRequest {
    const message = createBaseQueryWithdrawRequestsRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryWithdrawRequestsResponse(): QueryWithdrawRequestsResponse {
  return { withdrawRequests: [], pagination: undefined };
}

export const QueryWithdrawRequestsResponse = {
  encode(
    message: QueryWithdrawRequestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.withdrawRequests) {
      WithdrawRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryWithdrawRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawRequests.push(
            WithdrawRequest.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryWithdrawRequestsResponse {
    return {
      withdrawRequests: Array.isArray(object?.withdrawRequests)
        ? object.withdrawRequests.map((e: any) => WithdrawRequest.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryWithdrawRequestsResponse): unknown {
    const obj: any = {};
    if (message.withdrawRequests) {
      obj.withdrawRequests = message.withdrawRequests.map((e) =>
        e ? WithdrawRequest.toJSON(e) : undefined
      );
    } else {
      obj.withdrawRequests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestsResponse>, I>>(
    object: I
  ): QueryWithdrawRequestsResponse {
    const message = createBaseQueryWithdrawRequestsResponse();
    message.withdrawRequests =
      object.withdrawRequests?.map((e) => WithdrawRequest.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryWithdrawRequestRequest(): QueryWithdrawRequestRequest {
  return { poolId: Long.UZERO, id: Long.UZERO, appId: Long.UZERO };
}

export const QueryWithdrawRequestRequest = {
  encode(
    message: QueryWithdrawRequestRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWithdrawRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawRequestRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryWithdrawRequestRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestRequest>, I>>(
    object: I
  ): QueryWithdrawRequestRequest {
    const message = createBaseQueryWithdrawRequestRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryWithdrawRequestResponse(): QueryWithdrawRequestResponse {
  return { withdrawRequest: undefined };
}

export const QueryWithdrawRequestResponse = {
  encode(
    message: QueryWithdrawRequestResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawRequest !== undefined) {
      WithdrawRequest.encode(
        message.withdrawRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryWithdrawRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawRequest = WithdrawRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawRequestResponse {
    return {
      withdrawRequest: isSet(object.withdrawRequest)
        ? WithdrawRequest.fromJSON(object.withdrawRequest)
        : undefined,
    };
  },

  toJSON(message: QueryWithdrawRequestResponse): unknown {
    const obj: any = {};
    message.withdrawRequest !== undefined &&
      (obj.withdrawRequest = message.withdrawRequest
        ? WithdrawRequest.toJSON(message.withdrawRequest)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawRequestResponse>, I>>(
    object: I
  ): QueryWithdrawRequestResponse {
    const message = createBaseQueryWithdrawRequestResponse();
    message.withdrawRequest =
      object.withdrawRequest !== undefined && object.withdrawRequest !== null
        ? WithdrawRequest.fromPartial(object.withdrawRequest)
        : undefined;
    return message;
  },
};

function createBaseQueryOrdersRequest(): QueryOrdersRequest {
  return { pairId: Long.UZERO, pagination: undefined, appId: Long.UZERO };
}

export const QueryOrdersRequest = {
  encode(
    message: QueryOrdersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrdersRequest {
    return {
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryOrdersRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrdersRequest>, I>>(
    object: I
  ): QueryOrdersRequest {
    const message = createBaseQueryOrdersRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return { orders: [], pagination: undefined };
}

export const QueryOrdersResponse = {
  encode(
    message: QueryOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrdersResponse>, I>>(
    object: I
  ): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryOrderRequest(): QueryOrderRequest {
  return { pairId: Long.UZERO, id: Long.UZERO, appId: Long.UZERO };
}

export const QueryOrderRequest = {
  encode(
    message: QueryOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.pairId.isZero()) {
      writer.uint32(8).uint64(message.pairId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderRequest {
    return {
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryOrderRequest): unknown {
    const obj: any = {};
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrderRequest>, I>>(
    object: I
  ): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryOrderResponse(): QueryOrderResponse {
  return { order: undefined };
}

export const QueryOrderResponse = {
  encode(
    message: QueryOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrderResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrderResponse>, I>>(
    object: I
  ): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseQueryOrdersByOrdererRequest(): QueryOrdersByOrdererRequest {
  return {
    orderer: "",
    pairId: Long.UZERO,
    pagination: undefined,
    appId: Long.UZERO,
  };
}

export const QueryOrdersByOrdererRequest = {
  encode(
    message: QueryOrdersByOrdererRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOrdersByOrdererRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersByOrdererRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOrdersByOrdererRequest {
    return {
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryOrdersByOrdererRequest): unknown {
    const obj: any = {};
    message.orderer !== undefined && (obj.orderer = message.orderer);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOrdersByOrdererRequest>, I>>(
    object: I
  ): QueryOrdersByOrdererRequest {
    const message = createBaseQueryOrdersByOrdererRequest();
    message.orderer = object.orderer ?? "";
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBasePoolResponse(): PoolResponse {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    reserveAddress: "",
    poolCoinDenom: "",
    balances: [],
    lastDepositRequestId: Long.UZERO,
    lastWithdrawRequestId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const PoolResponse = {
  encode(
    message: PoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(26).string(message.reserveAddress);
    }
    if (message.poolCoinDenom !== "") {
      writer.uint32(34).string(message.poolCoinDenom);
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.lastDepositRequestId.isZero()) {
      writer.uint32(48).uint64(message.lastDepositRequestId);
    }
    if (!message.lastWithdrawRequestId.isZero()) {
      writer.uint32(56).uint64(message.lastWithdrawRequestId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.reserveAddress = reader.string();
          break;
        case 4:
          message.poolCoinDenom = reader.string();
          break;
        case 5:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastDepositRequestId = reader.uint64() as Long;
          break;
        case 7:
          message.lastWithdrawRequestId = reader.uint64() as Long;
          break;
        case 8:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      reserveAddress: isSet(object.reserveAddress)
        ? String(object.reserveAddress)
        : "",
      poolCoinDenom: isSet(object.poolCoinDenom)
        ? String(object.poolCoinDenom)
        : "",
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => Coin.fromJSON(e))
        : [],
      lastDepositRequestId: isSet(object.lastDepositRequestId)
        ? Long.fromValue(object.lastDepositRequestId)
        : Long.UZERO,
      lastWithdrawRequestId: isSet(object.lastWithdrawRequestId)
        ? Long.fromValue(object.lastWithdrawRequestId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: PoolResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.reserveAddress !== undefined &&
      (obj.reserveAddress = message.reserveAddress);
    message.poolCoinDenom !== undefined &&
      (obj.poolCoinDenom = message.poolCoinDenom);
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    message.lastDepositRequestId !== undefined &&
      (obj.lastDepositRequestId = (
        message.lastDepositRequestId || Long.UZERO
      ).toString());
    message.lastWithdrawRequestId !== undefined &&
      (obj.lastWithdrawRequestId = (
        message.lastWithdrawRequestId || Long.UZERO
      ).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolResponse>, I>>(
    object: I
  ): PoolResponse {
    const message = createBasePoolResponse();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.reserveAddress = object.reserveAddress ?? "";
    message.poolCoinDenom = object.poolCoinDenom ?? "";
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    message.lastDepositRequestId =
      object.lastDepositRequestId !== undefined &&
      object.lastDepositRequestId !== null
        ? Long.fromValue(object.lastDepositRequestId)
        : Long.UZERO;
    message.lastWithdrawRequestId =
      object.lastWithdrawRequestId !== undefined &&
      object.lastWithdrawRequestId !== null
        ? Long.fromValue(object.lastWithdrawRequestId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryFarmerRequest(): QueryFarmerRequest {
  return { appId: Long.UZERO, poolId: Long.UZERO, farmer: "" };
}

export const QueryFarmerRequest = {
  encode(
    message: QueryFarmerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.farmer !== "") {
      writer.uint32(26).string(message.farmer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.farmer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmerRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
    };
  },

  toJSON(message: QueryFarmerRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.farmer !== undefined && (obj.farmer = message.farmer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmerRequest>, I>>(
    object: I
  ): QueryFarmerRequest {
    const message = createBaseQueryFarmerRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.farmer = object.farmer ?? "";
    return message;
  },
};

function createBaseQueuedPoolCoin(): QueuedPoolCoin {
  return { poolCoin: undefined, dequeAt: undefined };
}

export const QueuedPoolCoin = {
  encode(
    message: QueuedPoolCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.dequeAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.dequeAt),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueuedPoolCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueuedPoolCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.dequeAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueuedPoolCoin {
    return {
      poolCoin: isSet(object.poolCoin)
        ? Coin.fromJSON(object.poolCoin)
        : undefined,
      dequeAt: isSet(object.dequeAt)
        ? fromJsonTimestamp(object.dequeAt)
        : undefined,
    };
  },

  toJSON(message: QueuedPoolCoin): unknown {
    const obj: any = {};
    message.poolCoin !== undefined &&
      (obj.poolCoin = message.poolCoin
        ? Coin.toJSON(message.poolCoin)
        : undefined);
    message.dequeAt !== undefined &&
      (obj.dequeAt = message.dequeAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueuedPoolCoin>, I>>(
    object: I
  ): QueuedPoolCoin {
    const message = createBaseQueuedPoolCoin();
    message.poolCoin =
      object.poolCoin !== undefined && object.poolCoin !== null
        ? Coin.fromPartial(object.poolCoin)
        : undefined;
    message.dequeAt = object.dequeAt ?? undefined;
    return message;
  },
};

function createBaseQueryFarmerResponse(): QueryFarmerResponse {
  return { activePoolCoin: undefined, queuedPoolCoin: [] };
}

export const QueryFarmerResponse = {
  encode(
    message: QueryFarmerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.activePoolCoin !== undefined) {
      Coin.encode(message.activePoolCoin, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.queuedPoolCoin) {
      QueuedPoolCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFarmerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activePoolCoin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.queuedPoolCoin.push(
            QueuedPoolCoin.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmerResponse {
    return {
      activePoolCoin: isSet(object.activePoolCoin)
        ? Coin.fromJSON(object.activePoolCoin)
        : undefined,
      queuedPoolCoin: Array.isArray(object?.queuedPoolCoin)
        ? object.queuedPoolCoin.map((e: any) => QueuedPoolCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFarmerResponse): unknown {
    const obj: any = {};
    message.activePoolCoin !== undefined &&
      (obj.activePoolCoin = message.activePoolCoin
        ? Coin.toJSON(message.activePoolCoin)
        : undefined);
    if (message.queuedPoolCoin) {
      obj.queuedPoolCoin = message.queuedPoolCoin.map((e) =>
        e ? QueuedPoolCoin.toJSON(e) : undefined
      );
    } else {
      obj.queuedPoolCoin = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmerResponse>, I>>(
    object: I
  ): QueryFarmerResponse {
    const message = createBaseQueryFarmerResponse();
    message.activePoolCoin =
      object.activePoolCoin !== undefined && object.activePoolCoin !== null
        ? Coin.fromPartial(object.activePoolCoin)
        : undefined;
    message.queuedPoolCoin =
      object.queuedPoolCoin?.map((e) => QueuedPoolCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDeserializePoolCoinRequest(): QueryDeserializePoolCoinRequest {
  return { poolId: Long.UZERO, poolCoinAmount: Long.UZERO, appId: Long.UZERO };
}

export const QueryDeserializePoolCoinRequest = {
  encode(
    message: QueryDeserializePoolCoinRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.poolCoinAmount.isZero()) {
      writer.uint32(16).uint64(message.poolCoinAmount);
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDeserializePoolCoinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeserializePoolCoinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.poolCoinAmount = reader.uint64() as Long;
          break;
        case 3:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDeserializePoolCoinRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolCoinAmount: isSet(object.poolCoinAmount)
        ? Long.fromValue(object.poolCoinAmount)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryDeserializePoolCoinRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolCoinAmount !== undefined &&
      (obj.poolCoinAmount = (message.poolCoinAmount || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDeserializePoolCoinRequest>, I>>(
    object: I
  ): QueryDeserializePoolCoinRequest {
    const message = createBaseQueryDeserializePoolCoinRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.poolCoinAmount =
      object.poolCoinAmount !== undefined && object.poolCoinAmount !== null
        ? Long.fromValue(object.poolCoinAmount)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryDeserializePoolCoinResponse(): QueryDeserializePoolCoinResponse {
  return { coins: [] };
}

export const QueryDeserializePoolCoinResponse = {
  encode(
    message: QueryDeserializePoolCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDeserializePoolCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeserializePoolCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDeserializePoolCoinResponse {
    return {
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDeserializePoolCoinResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDeserializePoolCoinResponse>, I>
  >(object: I): QueryDeserializePoolCoinResponse {
    const message = createBaseQueryDeserializePoolCoinResponse();
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPoolsIncentivesRequest(): QueryPoolsIncentivesRequest {
  return { appId: Long.UZERO };
}

export const QueryPoolsIncentivesRequest = {
  encode(
    message: QueryPoolsIncentivesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolsIncentivesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsIncentivesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsIncentivesRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryPoolsIncentivesRequest): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsIncentivesRequest>, I>>(
    object: I
  ): QueryPoolsIncentivesRequest {
    const message = createBaseQueryPoolsIncentivesRequest();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBasePoolIncentive(): PoolIncentive {
  return {
    poolId: Long.UZERO,
    masterPool: false,
    childPoolIds: [],
    totalRewards: undefined,
    distributedRewards: undefined,
    totalEpochs: Long.UZERO,
    filledEpochs: Long.UZERO,
    epochDuration: undefined,
    nextDistribution: undefined,
    isSwapFee: false,
    appId: Long.UZERO,
  };
}

export const PoolIncentive = {
  encode(
    message: PoolIncentive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.masterPool === true) {
      writer.uint32(16).bool(message.masterPool);
    }
    writer.uint32(26).fork();
    for (const v of message.childPoolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.totalRewards !== undefined) {
      Coin.encode(message.totalRewards, writer.uint32(34).fork()).ldelim();
    }
    if (message.distributedRewards !== undefined) {
      Coin.encode(
        message.distributedRewards,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (!message.totalEpochs.isZero()) {
      writer.uint32(48).uint64(message.totalEpochs);
    }
    if (!message.filledEpochs.isZero()) {
      writer.uint32(56).uint64(message.filledEpochs);
    }
    if (message.epochDuration !== undefined) {
      Duration.encode(message.epochDuration, writer.uint32(66).fork()).ldelim();
    }
    if (message.nextDistribution !== undefined) {
      Timestamp.encode(
        toTimestamp(message.nextDistribution),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.isSwapFee === true) {
      writer.uint32(80).bool(message.isSwapFee);
    }
    if (!message.appId.isZero()) {
      writer.uint32(88).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolIncentive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.masterPool = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.childPoolIds.push(reader.uint64() as Long);
            }
          } else {
            message.childPoolIds.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.totalRewards = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.distributedRewards = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.totalEpochs = reader.uint64() as Long;
          break;
        case 7:
          message.filledEpochs = reader.uint64() as Long;
          break;
        case 8:
          message.epochDuration = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.nextDistribution = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.isSwapFee = reader.bool();
          break;
        case 11:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolIncentive {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      masterPool: isSet(object.masterPool) ? Boolean(object.masterPool) : false,
      childPoolIds: Array.isArray(object?.childPoolIds)
        ? object.childPoolIds.map((e: any) => Long.fromValue(e))
        : [],
      totalRewards: isSet(object.totalRewards)
        ? Coin.fromJSON(object.totalRewards)
        : undefined,
      distributedRewards: isSet(object.distributedRewards)
        ? Coin.fromJSON(object.distributedRewards)
        : undefined,
      totalEpochs: isSet(object.totalEpochs)
        ? Long.fromValue(object.totalEpochs)
        : Long.UZERO,
      filledEpochs: isSet(object.filledEpochs)
        ? Long.fromValue(object.filledEpochs)
        : Long.UZERO,
      epochDuration: isSet(object.epochDuration)
        ? Duration.fromJSON(object.epochDuration)
        : undefined,
      nextDistribution: isSet(object.nextDistribution)
        ? fromJsonTimestamp(object.nextDistribution)
        : undefined,
      isSwapFee: isSet(object.isSwapFee) ? Boolean(object.isSwapFee) : false,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: PoolIncentive): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.masterPool !== undefined && (obj.masterPool = message.masterPool);
    if (message.childPoolIds) {
      obj.childPoolIds = message.childPoolIds.map((e) =>
        (e || Long.UZERO).toString()
      );
    } else {
      obj.childPoolIds = [];
    }
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards
        ? Coin.toJSON(message.totalRewards)
        : undefined);
    message.distributedRewards !== undefined &&
      (obj.distributedRewards = message.distributedRewards
        ? Coin.toJSON(message.distributedRewards)
        : undefined);
    message.totalEpochs !== undefined &&
      (obj.totalEpochs = (message.totalEpochs || Long.UZERO).toString());
    message.filledEpochs !== undefined &&
      (obj.filledEpochs = (message.filledEpochs || Long.UZERO).toString());
    message.epochDuration !== undefined &&
      (obj.epochDuration = message.epochDuration
        ? Duration.toJSON(message.epochDuration)
        : undefined);
    message.nextDistribution !== undefined &&
      (obj.nextDistribution = message.nextDistribution.toISOString());
    message.isSwapFee !== undefined && (obj.isSwapFee = message.isSwapFee);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PoolIncentive>, I>>(
    object: I
  ): PoolIncentive {
    const message = createBasePoolIncentive();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.masterPool = object.masterPool ?? false;
    message.childPoolIds =
      object.childPoolIds?.map((e) => Long.fromValue(e)) || [];
    message.totalRewards =
      object.totalRewards !== undefined && object.totalRewards !== null
        ? Coin.fromPartial(object.totalRewards)
        : undefined;
    message.distributedRewards =
      object.distributedRewards !== undefined &&
      object.distributedRewards !== null
        ? Coin.fromPartial(object.distributedRewards)
        : undefined;
    message.totalEpochs =
      object.totalEpochs !== undefined && object.totalEpochs !== null
        ? Long.fromValue(object.totalEpochs)
        : Long.UZERO;
    message.filledEpochs =
      object.filledEpochs !== undefined && object.filledEpochs !== null
        ? Long.fromValue(object.filledEpochs)
        : Long.UZERO;
    message.epochDuration =
      object.epochDuration !== undefined && object.epochDuration !== null
        ? Duration.fromPartial(object.epochDuration)
        : undefined;
    message.nextDistribution = object.nextDistribution ?? undefined;
    message.isSwapFee = object.isSwapFee ?? false;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryPoolIncentivesResponse(): QueryPoolIncentivesResponse {
  return { poolIncentives: [] };
}

export const QueryPoolIncentivesResponse = {
  encode(
    message: QueryPoolIncentivesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.poolIncentives) {
      PoolIncentive.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryPoolIncentivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolIncentives.push(
            PoolIncentive.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolIncentivesResponse {
    return {
      poolIncentives: Array.isArray(object?.poolIncentives)
        ? object.poolIncentives.map((e: any) => PoolIncentive.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPoolIncentivesResponse): unknown {
    const obj: any = {};
    if (message.poolIncentives) {
      obj.poolIncentives = message.poolIncentives.map((e) =>
        e ? PoolIncentive.toJSON(e) : undefined
      );
    } else {
      obj.poolIncentives = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolIncentivesResponse>, I>>(
    object: I
  ): QueryPoolIncentivesResponse {
    const message = createBaseQueryPoolIncentivesResponse();
    message.poolIncentives =
      object.poolIncentives?.map((e) => PoolIncentive.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFarmedPoolCoinRequest(): QueryFarmedPoolCoinRequest {
  return { poolId: Long.UZERO, appId: Long.UZERO };
}

export const QueryFarmedPoolCoinRequest = {
  encode(
    message: QueryFarmedPoolCoinRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFarmedPoolCoinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmedPoolCoinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmedPoolCoinRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: QueryFarmedPoolCoinRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmedPoolCoinRequest>, I>>(
    object: I
  ): QueryFarmedPoolCoinRequest {
    const message = createBaseQueryFarmedPoolCoinRequest();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseQueryFarmedPoolCoinResponse(): QueryFarmedPoolCoinResponse {
  return { coin: undefined };
}

export const QueryFarmedPoolCoinResponse = {
  encode(
    message: QueryFarmedPoolCoinResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFarmedPoolCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFarmedPoolCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFarmedPoolCoinResponse {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: QueryFarmedPoolCoinResponse): unknown {
    const obj: any = {};
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFarmedPoolCoinResponse>, I>>(
    object: I
  ): QueryFarmedPoolCoinResponse {
    const message = createBaseQueryFarmedPoolCoinResponse();
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** GenericParams returns app parameters of the module. */
  GenericParams(
    request: QueryGenericParamsRequest
  ): Promise<QueryGenericParamsResponse>;
  /** Pools returns all liquidity pools. */
  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  /** Pool returns the specific liquidity pool. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** PoolByReserveAddress returns all pools that correspond to the reserve account. */
  PoolByReserveAddress(
    request: QueryPoolByReserveAddressRequest
  ): Promise<QueryPoolResponse>;
  /** PoolByPoolCoinDenom returns all pools that correspond to the pool coin denom. */
  PoolByPoolCoinDenom(
    request: QueryPoolByPoolCoinDenomRequest
  ): Promise<QueryPoolResponse>;
  /** Pairs returns all liquidity pairs. */
  Pairs(request: QueryPairsRequest): Promise<QueryPairsResponse>;
  /** Pair returns the specific pair. */
  Pair(request: QueryPairRequest): Promise<QueryPairResponse>;
  /** DepositRequests returns all deposit requests. */
  DepositRequests(
    request: QueryDepositRequestsRequest
  ): Promise<QueryDepositRequestsResponse>;
  /** DepositRequest returns the specific deposit request. */
  DepositRequest(
    request: QueryDepositRequestRequest
  ): Promise<QueryDepositRequestResponse>;
  /** WithdrawRequests returns all withdraw requests. */
  WithdrawRequests(
    request: QueryWithdrawRequestsRequest
  ): Promise<QueryWithdrawRequestsResponse>;
  /** WithdrawRequest returns the specific withdraw request. */
  WithdrawRequest(
    request: QueryWithdrawRequestRequest
  ): Promise<QueryWithdrawRequestResponse>;
  /** Orders returns all orders within the pair. */
  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse>;
  /** Order returns the specific order. */
  Order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** OrdersByOrderer returns orders made by an orderer. */
  OrdersByOrderer(
    request: QueryOrdersByOrdererRequest
  ): Promise<QueryOrdersResponse>;
  /** Farmer returns deposited poolcoin for farming . */
  Farmer(request: QueryFarmerRequest): Promise<QueryFarmerResponse>;
  /** DeserializePoolCoin splits poolcoin into the actual provided pool assets . */
  DeserializePoolCoin(
    request: QueryDeserializePoolCoinRequest
  ): Promise<QueryDeserializePoolCoinResponse>;
  /** PoolIncentives provides insights about available pool incentives. */
  PoolIncentives(
    request: QueryPoolsIncentivesRequest
  ): Promise<QueryPoolIncentivesResponse>;
  /** FarmedPoolCoin returns the total farmed pool coins. */
  FarmedPoolCoin(
    request: QueryFarmedPoolCoinRequest
  ): Promise<QueryFarmedPoolCoinResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GenericParams = this.GenericParams.bind(this);
    this.Pools = this.Pools.bind(this);
    this.Pool = this.Pool.bind(this);
    this.PoolByReserveAddress = this.PoolByReserveAddress.bind(this);
    this.PoolByPoolCoinDenom = this.PoolByPoolCoinDenom.bind(this);
    this.Pairs = this.Pairs.bind(this);
    this.Pair = this.Pair.bind(this);
    this.DepositRequests = this.DepositRequests.bind(this);
    this.DepositRequest = this.DepositRequest.bind(this);
    this.WithdrawRequests = this.WithdrawRequests.bind(this);
    this.WithdrawRequest = this.WithdrawRequest.bind(this);
    this.Orders = this.Orders.bind(this);
    this.Order = this.Order.bind(this);
    this.OrdersByOrderer = this.OrdersByOrderer.bind(this);
    this.Farmer = this.Farmer.bind(this);
    this.DeserializePoolCoin = this.DeserializePoolCoin.bind(this);
    this.PoolIncentives = this.PoolIncentives.bind(this);
    this.FarmedPoolCoin = this.FarmedPoolCoin.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  GenericParams(
    request: QueryGenericParamsRequest
  ): Promise<QueryGenericParamsResponse> {
    const data = QueryGenericParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "GenericParams",
      data
    );
    return promise.then((data) =>
      QueryGenericParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Pools",
      data
    );
    return promise.then((data) =>
      QueryPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolByReserveAddress(
    request: QueryPoolByReserveAddressRequest
  ): Promise<QueryPoolResponse> {
    const data = QueryPoolByReserveAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "PoolByReserveAddress",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  PoolByPoolCoinDenom(
    request: QueryPoolByPoolCoinDenomRequest
  ): Promise<QueryPoolResponse> {
    const data = QueryPoolByPoolCoinDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "PoolByPoolCoinDenom",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  Pairs(request: QueryPairsRequest): Promise<QueryPairsResponse> {
    const data = QueryPairsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Pairs",
      data
    );
    return promise.then((data) =>
      QueryPairsResponse.decode(new _m0.Reader(data))
    );
  }

  Pair(request: QueryPairRequest): Promise<QueryPairResponse> {
    const data = QueryPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Pair",
      data
    );
    return promise.then((data) =>
      QueryPairResponse.decode(new _m0.Reader(data))
    );
  }

  DepositRequests(
    request: QueryDepositRequestsRequest
  ): Promise<QueryDepositRequestsResponse> {
    const data = QueryDepositRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "DepositRequests",
      data
    );
    return promise.then((data) =>
      QueryDepositRequestsResponse.decode(new _m0.Reader(data))
    );
  }

  DepositRequest(
    request: QueryDepositRequestRequest
  ): Promise<QueryDepositRequestResponse> {
    const data = QueryDepositRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "DepositRequest",
      data
    );
    return promise.then((data) =>
      QueryDepositRequestResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawRequests(
    request: QueryWithdrawRequestsRequest
  ): Promise<QueryWithdrawRequestsResponse> {
    const data = QueryWithdrawRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "WithdrawRequests",
      data
    );
    return promise.then((data) =>
      QueryWithdrawRequestsResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawRequest(
    request: QueryWithdrawRequestRequest
  ): Promise<QueryWithdrawRequestResponse> {
    const data = QueryWithdrawRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "WithdrawRequest",
      data
    );
    return promise.then((data) =>
      QueryWithdrawRequestResponse.decode(new _m0.Reader(data))
    );
  }

  Orders(request: QueryOrdersRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrdersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Orders",
      data
    );
    return promise.then((data) =>
      QueryOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  Order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Order",
      data
    );
    return promise.then((data) =>
      QueryOrderResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersByOrderer(
    request: QueryOrdersByOrdererRequest
  ): Promise<QueryOrdersResponse> {
    const data = QueryOrdersByOrdererRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "OrdersByOrderer",
      data
    );
    return promise.then((data) =>
      QueryOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  Farmer(request: QueryFarmerRequest): Promise<QueryFarmerResponse> {
    const data = QueryFarmerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "Farmer",
      data
    );
    return promise.then((data) =>
      QueryFarmerResponse.decode(new _m0.Reader(data))
    );
  }

  DeserializePoolCoin(
    request: QueryDeserializePoolCoinRequest
  ): Promise<QueryDeserializePoolCoinResponse> {
    const data = QueryDeserializePoolCoinRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "DeserializePoolCoin",
      data
    );
    return promise.then((data) =>
      QueryDeserializePoolCoinResponse.decode(new _m0.Reader(data))
    );
  }

  PoolIncentives(
    request: QueryPoolsIncentivesRequest
  ): Promise<QueryPoolIncentivesResponse> {
    const data = QueryPoolsIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "PoolIncentives",
      data
    );
    return promise.then((data) =>
      QueryPoolIncentivesResponse.decode(new _m0.Reader(data))
    );
  }

  FarmedPoolCoin(
    request: QueryFarmedPoolCoinRequest
  ): Promise<QueryFarmedPoolCoinResponse> {
    const data = QueryFarmedPoolCoinRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Query",
      "FarmedPoolCoin",
      data
    );
    return promise.then((data) =>
      QueryFarmedPoolCoinResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
