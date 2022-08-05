/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { GenericParams, Params } from "../../../comdex/liquidity/v1beta1/params";
import {
  Pair,
  Pool,
  DepositRequest,
  WithdrawRequest,
  Order,
  ActiveFarmer,
  QueuedFarmer,
} from "../../../comdex/liquidity/v1beta1/liquidity";

export const protobufPackage = "comdex.liquidity.v1beta1";

export interface AppGenesisState {
  appId: Long;
  genericParams?: GenericParams;
  lastPairId: Long;
  lastPoolId: Long;
  pairs: Pair[];
  pools: Pool[];
  depositRequests: DepositRequest[];
  withdrawRequests: WithdrawRequest[];
  orders: Order[];
  activeFarmers: ActiveFarmer[];
  queuedFarmers: QueuedFarmer[];
}

/** GenesisState defines the liquidity module's genesis state. */
export interface GenesisState {
  params?: Params;
  appGenesisState: AppGenesisState[];
}

function createBaseAppGenesisState(): AppGenesisState {
  return {
    appId: Long.UZERO,
    genericParams: undefined,
    lastPairId: Long.UZERO,
    lastPoolId: Long.UZERO,
    pairs: [],
    pools: [],
    depositRequests: [],
    withdrawRequests: [],
    orders: [],
    activeFarmers: [],
    queuedFarmers: [],
  };
}

export const AppGenesisState = {
  encode(
    message: AppGenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.genericParams !== undefined) {
      GenericParams.encode(
        message.genericParams,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (!message.lastPairId.isZero()) {
      writer.uint32(24).uint64(message.lastPairId);
    }
    if (!message.lastPoolId.isZero()) {
      writer.uint32(32).uint64(message.lastPoolId);
    }
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.depositRequests) {
      DepositRequest.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.withdrawRequests) {
      WithdrawRequest.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.activeFarmers) {
      ActiveFarmer.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.queuedFarmers) {
      QueuedFarmer.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppGenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.genericParams = GenericParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastPairId = reader.uint64() as Long;
          break;
        case 4:
          message.lastPoolId = reader.uint64() as Long;
          break;
        case 5:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        case 6:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 7:
          message.depositRequests.push(
            DepositRequest.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.withdrawRequests.push(
            WithdrawRequest.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 10:
          message.activeFarmers.push(
            ActiveFarmer.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.queuedFarmers.push(
            QueuedFarmer.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppGenesisState {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      genericParams: isSet(object.genericParams)
        ? GenericParams.fromJSON(object.genericParams)
        : undefined,
      lastPairId: isSet(object.lastPairId)
        ? Long.fromValue(object.lastPairId)
        : Long.UZERO,
      lastPoolId: isSet(object.lastPoolId)
        ? Long.fromValue(object.lastPoolId)
        : Long.UZERO,
      pairs: Array.isArray(object?.pairs)
        ? object.pairs.map((e: any) => Pair.fromJSON(e))
        : [],
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Pool.fromJSON(e))
        : [],
      depositRequests: Array.isArray(object?.depositRequests)
        ? object.depositRequests.map((e: any) => DepositRequest.fromJSON(e))
        : [],
      withdrawRequests: Array.isArray(object?.withdrawRequests)
        ? object.withdrawRequests.map((e: any) => WithdrawRequest.fromJSON(e))
        : [],
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      activeFarmers: Array.isArray(object?.activeFarmers)
        ? object.activeFarmers.map((e: any) => ActiveFarmer.fromJSON(e))
        : [],
      queuedFarmers: Array.isArray(object?.queuedFarmers)
        ? object.queuedFarmers.map((e: any) => QueuedFarmer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppGenesisState): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.genericParams !== undefined &&
      (obj.genericParams = message.genericParams
        ? GenericParams.toJSON(message.genericParams)
        : undefined);
    message.lastPairId !== undefined &&
      (obj.lastPairId = (message.lastPairId || Long.UZERO).toString());
    message.lastPoolId !== undefined &&
      (obj.lastPoolId = (message.lastPoolId || Long.UZERO).toString());
    if (message.pairs) {
      obj.pairs = message.pairs.map((e) => (e ? Pair.toJSON(e) : undefined));
    } else {
      obj.pairs = [];
    }
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    if (message.depositRequests) {
      obj.depositRequests = message.depositRequests.map((e) =>
        e ? DepositRequest.toJSON(e) : undefined
      );
    } else {
      obj.depositRequests = [];
    }
    if (message.withdrawRequests) {
      obj.withdrawRequests = message.withdrawRequests.map((e) =>
        e ? WithdrawRequest.toJSON(e) : undefined
      );
    } else {
      obj.withdrawRequests = [];
    }
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    if (message.activeFarmers) {
      obj.activeFarmers = message.activeFarmers.map((e) =>
        e ? ActiveFarmer.toJSON(e) : undefined
      );
    } else {
      obj.activeFarmers = [];
    }
    if (message.queuedFarmers) {
      obj.queuedFarmers = message.queuedFarmers.map((e) =>
        e ? QueuedFarmer.toJSON(e) : undefined
      );
    } else {
      obj.queuedFarmers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppGenesisState>, I>>(
    object: I
  ): AppGenesisState {
    const message = createBaseAppGenesisState();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.genericParams =
      object.genericParams !== undefined && object.genericParams !== null
        ? GenericParams.fromPartial(object.genericParams)
        : undefined;
    message.lastPairId =
      object.lastPairId !== undefined && object.lastPairId !== null
        ? Long.fromValue(object.lastPairId)
        : Long.UZERO;
    message.lastPoolId =
      object.lastPoolId !== undefined && object.lastPoolId !== null
        ? Long.fromValue(object.lastPoolId)
        : Long.UZERO;
    message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.depositRequests =
      object.depositRequests?.map((e) => DepositRequest.fromPartial(e)) || [];
    message.withdrawRequests =
      object.withdrawRequests?.map((e) => WithdrawRequest.fromPartial(e)) || [];
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.activeFarmers =
      object.activeFarmers?.map((e) => ActiveFarmer.fromPartial(e)) || [];
    message.queuedFarmers =
      object.queuedFarmers?.map((e) => QueuedFarmer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { params: undefined, appGenesisState: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.appGenesisState) {
      AppGenesisState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.appGenesisState.push(
            AppGenesisState.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      appGenesisState: Array.isArray(object?.appGenesisState)
        ? object.appGenesisState.map((e: any) => AppGenesisState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.appGenesisState) {
      obj.appGenesisState = message.appGenesisState.map((e) =>
        e ? AppGenesisState.toJSON(e) : undefined
      );
    } else {
      obj.appGenesisState = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.appGenesisState =
      object.appGenesisState?.map((e) => AppGenesisState.fromPartial(e)) || [];
    return message;
  },
};

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
