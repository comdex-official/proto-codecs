/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import {
  OrderDirection,
  orderDirectionFromJSON,
  orderDirectionToJSON,
} from "../../../comdex/liquidity/v1beta1/liquidity";
import { Duration } from "../../../google/protobuf/duration";

export const protobufPackage = "comdex.liquidity.v1beta1";

/** MsgCreatePair defines an SDK message for creating a pair. */
export interface MsgCreatePair {
  /** creator specifies the bech32-encoded address that is the pair creator. */
  creator: string;
  /** base_coin_denom specifies the base coin denom of the pair. */
  baseCoinDenom: string;
  /** quote_coin_denom specifies the quote coin denom of the pair. */
  quoteCoinDenom: string;
  appId: Long;
}

export interface MsgCreatePairResponse {}

/** MsgCreatePool defines an SDK message for creating a pool. */
export interface MsgCreatePool {
  /** creator specifies the bech32-encoded address that is the pool creator */
  creator: string;
  /** pair_id specifies the pair id. */
  pairId: Long;
  /** deposit_coins specifies the amount of coins to deposit. */
  depositCoins: Coin[];
  appId: Long;
}

/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {}

/** MsgDeposit defines an SDK message for depositing coins to the pool */
export interface MsgDeposit {
  /** depositor specifies the bech32-encoded address that makes a deposit to the pool */
  depositor: string;
  /** pool_id specifies the pool id */
  poolId: Long;
  /** deposit_coins specifies the amount of coins to deposit. */
  depositCoins: Coin[];
  appId: Long;
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}

/** MsgWithdraw defines an SDK message for withdrawing pool coin from the pool */
export interface MsgWithdraw {
  /** withdrawer specifies the bech32-encoded address that withdraws pool coin from the pool */
  withdrawer: string;
  /** pool_id specifies the pool id */
  poolId: Long;
  /** pool_coin specifies the pool coin that is a proof of liquidity provider for the pool */
  poolCoin?: Coin;
  appId: Long;
}

/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {}

/** MsgLimitOrder defines an SDK message for making a limit order */
export interface MsgLimitOrder {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id */
  pairId: Long;
  /** direction specifies the order direction(buy or sell) */
  direction: OrderDirection;
  /** offer_coin specifies the amount of coin the orderer offers */
  offerCoin?: Coin;
  /** demand_coin_denom specifies the demand coin denom */
  demandCoinDenom: string;
  /** price specifies the order price */
  price: string;
  /** amount specifies the amount of base coin the orderer wants to buy or sell */
  amount: string;
  /** order_lifespan specifies the order lifespan */
  orderLifespan?: Duration;
  appId: Long;
}

/** MsgLimitOrderResponse defines the Msg/LimitOrder response type. */
export interface MsgLimitOrderResponse {}

/** MsgMarketOrder defines an SDK message for making a market order */
export interface MsgMarketOrder {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id */
  pairId: Long;
  /** direction specifies the order direction(buy or sell) */
  direction: OrderDirection;
  /** offer_coin specifies the amount of coin the orderer offers */
  offerCoin?: Coin;
  /** demand_coin_denom specifies the demand coin denom */
  demandCoinDenom: string;
  /** amount specifies the amount of base coin the orderer wants to buy or sell */
  amount: string;
  /** order_lifespan specifies the order lifespan */
  orderLifespan?: Duration;
  appId: Long;
}

/** MsgMarketOrderResponse defines the Msg/MarketOrder response type. */
export interface MsgMarketOrderResponse {}

/** MsgCancelOrder defines an SDK message for cancelling an order */
export interface MsgCancelOrder {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_id specifies the pair id */
  pairId: Long;
  /** order_id specifies the order id */
  orderId: Long;
  appId: Long;
}

/** MsgCancelOrderResponse defines the Msg/CancelOrder response type. */
export interface MsgCancelOrderResponse {}

/** MsgCancelAllOrders defines an SDK message for cancelling all orders */
export interface MsgCancelAllOrders {
  /** orderer specifies the bech32-encoded address that makes an order */
  orderer: string;
  /** pair_ids specifies pair ids to cancel orders */
  pairIds: Long[];
  appId: Long;
}

/** MsgCancelAllOrdersResponse defines the Msg/CancelAllOrders response type. */
export interface MsgCancelAllOrdersResponse {}

/** MsgFarm defines a SDK message for farming coins (i.e without bonding) for incentivisation. */
export interface MsgFarm {
  appId: Long;
  poolId: Long;
  farmer: string;
  farmingPoolCoin?: Coin;
}

/** MsgFarmResponse  defines the Msg/MsgFarmResponse response type. */
export interface MsgFarmResponse {}

/** MsgUnfarm defines a SDK message for performing unfarm of the farmed coins */
export interface MsgUnfarm {
  appId: Long;
  poolId: Long;
  farmer: string;
  unfarmingPoolCoin?: Coin;
}

/** MsgUnfarmResponse defines the Msg/MsgUnfarmResponse response type. */
export interface MsgUnfarmResponse {}

function createBaseMsgCreatePair(): MsgCreatePair {
  return {
    creator: "",
    baseCoinDenom: "",
    quoteCoinDenom: "",
    appId: Long.UZERO,
  };
}

export const MsgCreatePair = {
  encode(
    message: MsgCreatePair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.baseCoinDenom !== "") {
      writer.uint32(18).string(message.baseCoinDenom);
    }
    if (message.quoteCoinDenom !== "") {
      writer.uint32(26).string(message.quoteCoinDenom);
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.baseCoinDenom = reader.string();
          break;
        case 3:
          message.quoteCoinDenom = reader.string();
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

  fromJSON(object: any): MsgCreatePair {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      baseCoinDenom: isSet(object.baseCoinDenom)
        ? String(object.baseCoinDenom)
        : "",
      quoteCoinDenom: isSet(object.quoteCoinDenom)
        ? String(object.quoteCoinDenom)
        : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreatePair): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.baseCoinDenom !== undefined &&
      (obj.baseCoinDenom = message.baseCoinDenom);
    message.quoteCoinDenom !== undefined &&
      (obj.quoteCoinDenom = message.quoteCoinDenom);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePair>, I>>(
    object: I
  ): MsgCreatePair {
    const message = createBaseMsgCreatePair();
    message.creator = object.creator ?? "";
    message.baseCoinDenom = object.baseCoinDenom ?? "";
    message.quoteCoinDenom = object.quoteCoinDenom ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreatePairResponse(): MsgCreatePairResponse {
  return {};
}

export const MsgCreatePairResponse = {
  encode(
    _: MsgCreatePairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePairResponse();
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

  fromJSON(_: any): MsgCreatePairResponse {
    return {};
  },

  toJSON(_: MsgCreatePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePairResponse>, I>>(
    _: I
  ): MsgCreatePairResponse {
    const message = createBaseMsgCreatePairResponse();
    return message;
  },
};

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    pairId: Long.UZERO,
    depositCoins: [],
    appId: Long.UZERO,
  };
}

export const MsgCreatePool = {
  encode(
    message: MsgCreatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgCreatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      depositCoins: Array.isArray(object?.depositCoins)
        ? object.depositCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.depositCoins = [];
    }
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePool>, I>>(
    object: I
  ): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.depositCoins =
      object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(
    _: MsgCreatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
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

  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreatePoolResponse>, I>>(
    _: I
  ): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
};

function createBaseMsgDeposit(): MsgDeposit {
  return {
    depositor: "",
    poolId: Long.UZERO,
    depositCoins: [],
    appId: Long.UZERO,
  };
}

export const MsgDeposit = {
  encode(
    message: MsgDeposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.depositCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgDeposit {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      depositCoins: Array.isArray(object?.depositCoins)
        ? object.depositCoins.map((e: any) => Coin.fromJSON(e))
        : [],
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.depositCoins = [];
    }
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(
    object: I
  ): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.depositor = object.depositor ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.depositCoins =
      object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(
    _: MsgDepositResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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

  fromJSON(_: any): MsgDepositResponse {
    return {};
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(
    _: I
  ): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {
    withdrawer: "",
    poolId: Long.UZERO,
    poolCoin: undefined,
    appId: Long.UZERO,
  };
}

export const MsgWithdraw = {
  encode(
    message: MsgWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawer !== "") {
      writer.uint32(10).string(message.withdrawer);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64() as Long;
          break;
        case 3:
          message.poolCoin = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgWithdraw {
    return {
      withdrawer: isSet(object.withdrawer) ? String(object.withdrawer) : "",
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      poolCoin: isSet(object.poolCoin)
        ? Coin.fromJSON(object.poolCoin)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.poolCoin !== undefined &&
      (obj.poolCoin = message.poolCoin
        ? Coin.toJSON(message.poolCoin)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(
    object: I
  ): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.withdrawer = object.withdrawer ?? "";
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.poolCoin =
      object.poolCoin !== undefined && object.poolCoin !== null
        ? Coin.fromPartial(object.poolCoin)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {};
}

export const MsgWithdrawResponse = {
  encode(
    _: MsgWithdrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawResponse();
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

  fromJSON(_: any): MsgWithdrawResponse {
    return {};
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(
    _: I
  ): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    return message;
  },
};

function createBaseMsgLimitOrder(): MsgLimitOrder {
  return {
    orderer: "",
    pairId: Long.UZERO,
    direction: 0,
    offerCoin: undefined,
    demandCoinDenom: "",
    price: "",
    amount: "",
    orderLifespan: undefined,
    appId: Long.UZERO,
  };
}

export const MsgLimitOrder = {
  encode(
    message: MsgLimitOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }
    if (message.price !== "") {
      writer.uint32(50).string(message.price);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(66).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(72).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLimitOrder();
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
          message.direction = reader.int32() as any;
          break;
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.demandCoinDenom = reader.string();
          break;
        case 6:
          message.price = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.orderLifespan = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLimitOrder {
    return {
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      direction: isSet(object.direction)
        ? orderDirectionFromJSON(object.direction)
        : 0,
      offerCoin: isSet(object.offerCoin)
        ? Coin.fromJSON(object.offerCoin)
        : undefined,
      demandCoinDenom: isSet(object.demandCoinDenom)
        ? String(object.demandCoinDenom)
        : "",
      price: isSet(object.price) ? String(object.price) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      orderLifespan: isSet(object.orderLifespan)
        ? Duration.fromJSON(object.orderLifespan)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgLimitOrder): unknown {
    const obj: any = {};
    message.orderer !== undefined && (obj.orderer = message.orderer);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.direction !== undefined &&
      (obj.direction = orderDirectionToJSON(message.direction));
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin
        ? Coin.toJSON(message.offerCoin)
        : undefined);
    message.demandCoinDenom !== undefined &&
      (obj.demandCoinDenom = message.demandCoinDenom);
    message.price !== undefined && (obj.price = message.price);
    message.amount !== undefined && (obj.amount = message.amount);
    message.orderLifespan !== undefined &&
      (obj.orderLifespan = message.orderLifespan
        ? Duration.toJSON(message.orderLifespan)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLimitOrder>, I>>(
    object: I
  ): MsgLimitOrder {
    const message = createBaseMsgLimitOrder();
    message.orderer = object.orderer ?? "";
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.direction = object.direction ?? 0;
    message.offerCoin =
      object.offerCoin !== undefined && object.offerCoin !== null
        ? Coin.fromPartial(object.offerCoin)
        : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.price = object.price ?? "";
    message.amount = object.amount ?? "";
    message.orderLifespan =
      object.orderLifespan !== undefined && object.orderLifespan !== null
        ? Duration.fromPartial(object.orderLifespan)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgLimitOrderResponse(): MsgLimitOrderResponse {
  return {};
}

export const MsgLimitOrderResponse = {
  encode(
    _: MsgLimitOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLimitOrderResponse();
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

  fromJSON(_: any): MsgLimitOrderResponse {
    return {};
  },

  toJSON(_: MsgLimitOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLimitOrderResponse>, I>>(
    _: I
  ): MsgLimitOrderResponse {
    const message = createBaseMsgLimitOrderResponse();
    return message;
  },
};

function createBaseMsgMarketOrder(): MsgMarketOrder {
  return {
    orderer: "",
    pairId: Long.UZERO,
    direction: 0,
    offerCoin: undefined,
    demandCoinDenom: "",
    amount: "",
    orderLifespan: undefined,
    appId: Long.UZERO,
  };
}

export const MsgMarketOrder = {
  encode(
    message: MsgMarketOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
    }
    if (message.demandCoinDenom !== "") {
      writer.uint32(42).string(message.demandCoinDenom);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(58).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMarketOrder();
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
          message.direction = reader.int32() as any;
          break;
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.demandCoinDenom = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.orderLifespan = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgMarketOrder {
    return {
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      direction: isSet(object.direction)
        ? orderDirectionFromJSON(object.direction)
        : 0,
      offerCoin: isSet(object.offerCoin)
        ? Coin.fromJSON(object.offerCoin)
        : undefined,
      demandCoinDenom: isSet(object.demandCoinDenom)
        ? String(object.demandCoinDenom)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      orderLifespan: isSet(object.orderLifespan)
        ? Duration.fromJSON(object.orderLifespan)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgMarketOrder): unknown {
    const obj: any = {};
    message.orderer !== undefined && (obj.orderer = message.orderer);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.direction !== undefined &&
      (obj.direction = orderDirectionToJSON(message.direction));
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin
        ? Coin.toJSON(message.offerCoin)
        : undefined);
    message.demandCoinDenom !== undefined &&
      (obj.demandCoinDenom = message.demandCoinDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.orderLifespan !== undefined &&
      (obj.orderLifespan = message.orderLifespan
        ? Duration.toJSON(message.orderLifespan)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMarketOrder>, I>>(
    object: I
  ): MsgMarketOrder {
    const message = createBaseMsgMarketOrder();
    message.orderer = object.orderer ?? "";
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.direction = object.direction ?? 0;
    message.offerCoin =
      object.offerCoin !== undefined && object.offerCoin !== null
        ? Coin.fromPartial(object.offerCoin)
        : undefined;
    message.demandCoinDenom = object.demandCoinDenom ?? "";
    message.amount = object.amount ?? "";
    message.orderLifespan =
      object.orderLifespan !== undefined && object.orderLifespan !== null
        ? Duration.fromPartial(object.orderLifespan)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgMarketOrderResponse(): MsgMarketOrderResponse {
  return {};
}

export const MsgMarketOrderResponse = {
  encode(
    _: MsgMarketOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMarketOrderResponse();
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

  fromJSON(_: any): MsgMarketOrderResponse {
    return {};
  },

  toJSON(_: MsgMarketOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMarketOrderResponse>, I>>(
    _: I
  ): MsgMarketOrderResponse {
    const message = createBaseMsgMarketOrderResponse();
    return message;
  },
};

function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    orderer: "",
    pairId: Long.UZERO,
    orderId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const MsgCancelOrder = {
  encode(
    message: MsgCancelOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (!message.orderId.isZero()) {
      writer.uint32(24).uint64(message.orderId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
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
          message.orderId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgCancelOrder {
    return {
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      orderId: isSet(object.orderId)
        ? Long.fromValue(object.orderId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.orderer !== undefined && (obj.orderer = message.orderer);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.orderId !== undefined &&
      (obj.orderId = (message.orderId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelOrder>, I>>(
    object: I
  ): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.orderer = object.orderer ?? "";
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.orderId =
      object.orderId !== undefined && object.orderId !== null
        ? Long.fromValue(object.orderId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}

export const MsgCancelOrderResponse = {
  encode(
    _: MsgCancelOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
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

  fromJSON(_: any): MsgCancelOrderResponse {
    return {};
  },

  toJSON(_: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelOrderResponse>, I>>(
    _: I
  ): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
};

function createBaseMsgCancelAllOrders(): MsgCancelAllOrders {
  return { orderer: "", pairIds: [], appId: Long.UZERO };
}

export const MsgCancelAllOrders = {
  encode(
    message: MsgCancelAllOrders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderer !== "") {
      writer.uint32(10).string(message.orderer);
    }
    writer.uint32(18).fork();
    for (const v of message.pairIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelAllOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAllOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pairIds.push(reader.uint64() as Long);
            }
          } else {
            message.pairIds.push(reader.uint64() as Long);
          }
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

  fromJSON(object: any): MsgCancelAllOrders {
    return {
      orderer: isSet(object.orderer) ? String(object.orderer) : "",
      pairIds: Array.isArray(object?.pairIds)
        ? object.pairIds.map((e: any) => Long.fromValue(e))
        : [],
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelAllOrders): unknown {
    const obj: any = {};
    message.orderer !== undefined && (obj.orderer = message.orderer);
    if (message.pairIds) {
      obj.pairIds = message.pairIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.pairIds = [];
    }
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelAllOrders>, I>>(
    object: I
  ): MsgCancelAllOrders {
    const message = createBaseMsgCancelAllOrders();
    message.orderer = object.orderer ?? "";
    message.pairIds = object.pairIds?.map((e) => Long.fromValue(e)) || [];
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCancelAllOrdersResponse(): MsgCancelAllOrdersResponse {
  return {};
}

export const MsgCancelAllOrdersResponse = {
  encode(
    _: MsgCancelAllOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelAllOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelAllOrdersResponse();
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

  fromJSON(_: any): MsgCancelAllOrdersResponse {
    return {};
  },

  toJSON(_: MsgCancelAllOrdersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelAllOrdersResponse>, I>>(
    _: I
  ): MsgCancelAllOrdersResponse {
    const message = createBaseMsgCancelAllOrdersResponse();
    return message;
  },
};

function createBaseMsgFarm(): MsgFarm {
  return {
    appId: Long.UZERO,
    poolId: Long.UZERO,
    farmer: "",
    farmingPoolCoin: undefined,
  };
}

export const MsgFarm = {
  encode(
    message: MsgFarm,
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
    if (message.farmingPoolCoin !== undefined) {
      Coin.encode(message.farmingPoolCoin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFarm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFarm();
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
        case 4:
          message.farmingPoolCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFarm {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      farmingPoolCoin: isSet(object.farmingPoolCoin)
        ? Coin.fromJSON(object.farmingPoolCoin)
        : undefined,
    };
  },

  toJSON(message: MsgFarm): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.farmingPoolCoin !== undefined &&
      (obj.farmingPoolCoin = message.farmingPoolCoin
        ? Coin.toJSON(message.farmingPoolCoin)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFarm>, I>>(object: I): MsgFarm {
    const message = createBaseMsgFarm();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.farmer = object.farmer ?? "";
    message.farmingPoolCoin =
      object.farmingPoolCoin !== undefined && object.farmingPoolCoin !== null
        ? Coin.fromPartial(object.farmingPoolCoin)
        : undefined;
    return message;
  },
};

function createBaseMsgFarmResponse(): MsgFarmResponse {
  return {};
}

export const MsgFarmResponse = {
  encode(
    _: MsgFarmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFarmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFarmResponse();
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

  fromJSON(_: any): MsgFarmResponse {
    return {};
  },

  toJSON(_: MsgFarmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFarmResponse>, I>>(
    _: I
  ): MsgFarmResponse {
    const message = createBaseMsgFarmResponse();
    return message;
  },
};

function createBaseMsgUnfarm(): MsgUnfarm {
  return {
    appId: Long.UZERO,
    poolId: Long.UZERO,
    farmer: "",
    unfarmingPoolCoin: undefined,
  };
}

export const MsgUnfarm = {
  encode(
    message: MsgUnfarm,
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
    if (message.unfarmingPoolCoin !== undefined) {
      Coin.encode(message.unfarmingPoolCoin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfarm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfarm();
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
        case 4:
          message.unfarmingPoolCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnfarm {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      farmer: isSet(object.farmer) ? String(object.farmer) : "",
      unfarmingPoolCoin: isSet(object.unfarmingPoolCoin)
        ? Coin.fromJSON(object.unfarmingPoolCoin)
        : undefined,
    };
  },

  toJSON(message: MsgUnfarm): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.farmer !== undefined && (obj.farmer = message.farmer);
    message.unfarmingPoolCoin !== undefined &&
      (obj.unfarmingPoolCoin = message.unfarmingPoolCoin
        ? Coin.toJSON(message.unfarmingPoolCoin)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnfarm>, I>>(
    object: I
  ): MsgUnfarm {
    const message = createBaseMsgUnfarm();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.farmer = object.farmer ?? "";
    message.unfarmingPoolCoin =
      object.unfarmingPoolCoin !== undefined &&
      object.unfarmingPoolCoin !== null
        ? Coin.fromPartial(object.unfarmingPoolCoin)
        : undefined;
    return message;
  },
};

function createBaseMsgUnfarmResponse(): MsgUnfarmResponse {
  return {};
}

export const MsgUnfarmResponse = {
  encode(
    _: MsgUnfarmResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnfarmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnfarmResponse();
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

  fromJSON(_: any): MsgUnfarmResponse {
    return {};
  },

  toJSON(_: MsgUnfarmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnfarmResponse>, I>>(
    _: I
  ): MsgUnfarmResponse {
    const message = createBaseMsgUnfarmResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** CreatePair defines a method for creating a pair */
  CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
  /** CreatePool defines a method for creating a pool */
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
  /** Deposit defines a method for depositing coins to the pool */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** Withdraw defines a method for withdrawing pool coin from the pool */
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** LimitOrder defines a method for making a limit order */
  LimitOrder(request: MsgLimitOrder): Promise<MsgLimitOrderResponse>;
  /** MarketOrder defines a method for making a market order */
  MarketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse>;
  /** CancelOrder defines a method for cancelling an order */
  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  /** CancelAllOrders defines a method for cancelling all orders */
  CancelAllOrders(
    request: MsgCancelAllOrders
  ): Promise<MsgCancelAllOrdersResponse>;
  /** MsgFarm defines a method to farm the pool token, for incentivization */
  Farm(request: MsgFarm): Promise<MsgFarmResponse>;
  /** Unfarm defines a method to unfarm the farmed pool token */
  Unfarm(request: MsgUnfarm): Promise<MsgUnfarmResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePair = this.CreatePair.bind(this);
    this.CreatePool = this.CreatePool.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.LimitOrder = this.LimitOrder.bind(this);
    this.MarketOrder = this.MarketOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
    this.CancelAllOrders = this.CancelAllOrders.bind(this);
    this.Farm = this.Farm.bind(this);
    this.Unfarm = this.Unfarm.bind(this);
  }
  CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse> {
    const data = MsgCreatePair.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "CreatePair",
      data
    );
    return promise.then((data) =>
      MsgCreatePairResponse.decode(new _m0.Reader(data))
    );
  }

  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "CreatePool",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "Deposit",
      data
    );
    return promise.then((data) =>
      MsgDepositResponse.decode(new _m0.Reader(data))
    );
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "Withdraw",
      data
    );
    return promise.then((data) =>
      MsgWithdrawResponse.decode(new _m0.Reader(data))
    );
  }

  LimitOrder(request: MsgLimitOrder): Promise<MsgLimitOrderResponse> {
    const data = MsgLimitOrder.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "LimitOrder",
      data
    );
    return promise.then((data) =>
      MsgLimitOrderResponse.decode(new _m0.Reader(data))
    );
  }

  MarketOrder(request: MsgMarketOrder): Promise<MsgMarketOrderResponse> {
    const data = MsgMarketOrder.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "MarketOrder",
      data
    );
    return promise.then((data) =>
      MsgMarketOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "CancelOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelAllOrders(
    request: MsgCancelAllOrders
  ): Promise<MsgCancelAllOrdersResponse> {
    const data = MsgCancelAllOrders.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "CancelAllOrders",
      data
    );
    return promise.then((data) =>
      MsgCancelAllOrdersResponse.decode(new _m0.Reader(data))
    );
  }

  Farm(request: MsgFarm): Promise<MsgFarmResponse> {
    const data = MsgFarm.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "Farm",
      data
    );
    return promise.then((data) => MsgFarmResponse.decode(new _m0.Reader(data)));
  }

  Unfarm(request: MsgUnfarm): Promise<MsgUnfarmResponse> {
    const data = MsgUnfarm.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.liquidity.v1beta1.Msg",
      "Unfarm",
      data
    );
    return promise.then((data) =>
      MsgUnfarmResponse.decode(new _m0.Reader(data))
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
