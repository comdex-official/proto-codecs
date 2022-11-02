/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.lend.v1beta1";

export interface MsgLend {
  lender: string;
  assetId: Long;
  amount?: Coin;
  poolId: Long;
  appId: Long;
}

export interface MsgWithdraw {
  lender: string;
  lendId: Long;
  amount?: Coin;
}

export interface MsgDeposit {
  lender: string;
  lendId: Long;
  amount?: Coin;
}

export interface MsgCloseLend {
  lender: string;
  lendId: Long;
}

export interface MsgBorrow {
  borrower: string;
  lendId: Long;
  pairId: Long;
  isStableBorrow: boolean;
  amountIn?: Coin;
  amountOut?: Coin;
}

export interface MsgRepay {
  borrower: string;
  borrowId: Long;
  amount?: Coin;
}

export interface MsgDepositBorrow {
  borrower: string;
  borrowId: Long;
  amount?: Coin;
}

export interface MsgDraw {
  borrower: string;
  borrowId: Long;
  amount?: Coin;
}

export interface MsgCloseBorrow {
  borrower: string;
  borrowId: Long;
}

export interface MsgBorrowAlternate {
  lender: string;
  assetId: Long;
  poolId: Long;
  amountIn?: Coin;
  pairId: Long;
  isStableBorrow: boolean;
  amountOut?: Coin;
  appId: Long;
}

export interface MsgFundModuleAccounts {
  poolId: Long;
  assetId: Long;
  lender: string;
  amount?: Coin;
}

export interface MsgCalculateInterestAndRewards {
  borrower: string;
}

export interface MsgLendResponse {}

export interface MsgWithdrawResponse {}

export interface MsgDepositResponse {}

export interface MsgCloseLendResponse {}

export interface MsgBorrowResponse {}

export interface MsgRepayResponse {}

export interface MsgDepositBorrowResponse {}

export interface MsgDrawResponse {}

export interface MsgCloseBorrowResponse {}

export interface MsgBorrowAlternateResponse {}

export interface MsgFundModuleAccountsResponse {}

export interface MsgCalculateInterestAndRewardsResponse {}

function createBaseMsgLend(): MsgLend {
  return {
    lender: "",
    assetId: Long.UZERO,
    amount: undefined,
    poolId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const MsgLend = {
  encode(
    message: MsgLend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (!message.poolId.isZero()) {
      writer.uint32(32).uint64(message.poolId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(40).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lender = reader.string();
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.poolId = reader.uint64() as Long;
          break;
        case 5:
          message.appId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLend {
    return {
      lender: isSet(object.lender) ? String(object.lender) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgLend): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLend>, I>>(object: I): MsgLend {
    const message = createBaseMsgLend();
    message.lender = object.lender ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
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

function createBaseMsgWithdraw(): MsgWithdraw {
  return { lender: "", lendId: Long.UZERO, amount: undefined };
}

export const MsgWithdraw = {
  encode(
    message: MsgWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (!message.lendId.isZero()) {
      writer.uint32(16).uint64(message.lendId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
          message.lender = reader.string();
          break;
        case 2:
          message.lendId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
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
      lender: isSet(object.lender) ? String(object.lender) : "",
      lendId: isSet(object.lendId) ? Long.fromValue(object.lendId) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.lendId !== undefined &&
      (obj.lendId = (message.lendId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(
    object: I
  ): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.lender = object.lender ?? "";
    message.lendId =
      object.lendId !== undefined && object.lendId !== null
        ? Long.fromValue(object.lendId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgDeposit(): MsgDeposit {
  return { lender: "", lendId: Long.UZERO, amount: undefined };
}

export const MsgDeposit = {
  encode(
    message: MsgDeposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (!message.lendId.isZero()) {
      writer.uint32(16).uint64(message.lendId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
          message.lender = reader.string();
          break;
        case 2:
          message.lendId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
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
      lender: isSet(object.lender) ? String(object.lender) : "",
      lendId: isSet(object.lendId) ? Long.fromValue(object.lendId) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.lendId !== undefined &&
      (obj.lendId = (message.lendId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(
    object: I
  ): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.lender = object.lender ?? "";
    message.lendId =
      object.lendId !== undefined && object.lendId !== null
        ? Long.fromValue(object.lendId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgCloseLend(): MsgCloseLend {
  return { lender: "", lendId: Long.UZERO };
}

export const MsgCloseLend = {
  encode(
    message: MsgCloseLend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (!message.lendId.isZero()) {
      writer.uint32(16).uint64(message.lendId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lender = reader.string();
          break;
        case 2:
          message.lendId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLend {
    return {
      lender: isSet(object.lender) ? String(object.lender) : "",
      lendId: isSet(object.lendId) ? Long.fromValue(object.lendId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseLend): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.lendId !== undefined &&
      (obj.lendId = (message.lendId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLend>, I>>(
    object: I
  ): MsgCloseLend {
    const message = createBaseMsgCloseLend();
    message.lender = object.lender ?? "";
    message.lendId =
      object.lendId !== undefined && object.lendId !== null
        ? Long.fromValue(object.lendId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgBorrow(): MsgBorrow {
  return {
    borrower: "",
    lendId: Long.UZERO,
    pairId: Long.UZERO,
    isStableBorrow: false,
    amountIn: undefined,
    amountOut: undefined,
  };
}

export const MsgBorrow = {
  encode(
    message: MsgBorrow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (!message.lendId.isZero()) {
      writer.uint32(16).uint64(message.lendId);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
    }
    if (message.isStableBorrow === true) {
      writer.uint32(32).bool(message.isStableBorrow);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(42).fork()).ldelim();
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.lendId = reader.uint64() as Long;
          break;
        case 3:
          message.pairId = reader.uint64() as Long;
          break;
        case 4:
          message.isStableBorrow = reader.bool();
          break;
        case 5:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.amountOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      lendId: isSet(object.lendId) ? Long.fromValue(object.lendId) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      isStableBorrow: isSet(object.isStableBorrow)
        ? Boolean(object.isStableBorrow)
        : false,
      amountIn: isSet(object.amountIn)
        ? Coin.fromJSON(object.amountIn)
        : undefined,
      amountOut: isSet(object.amountOut)
        ? Coin.fromJSON(object.amountOut)
        : undefined,
    };
  },

  toJSON(message: MsgBorrow): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.lendId !== undefined &&
      (obj.lendId = (message.lendId || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.isStableBorrow !== undefined &&
      (obj.isStableBorrow = message.isStableBorrow);
    message.amountIn !== undefined &&
      (obj.amountIn = message.amountIn
        ? Coin.toJSON(message.amountIn)
        : undefined);
    message.amountOut !== undefined &&
      (obj.amountOut = message.amountOut
        ? Coin.toJSON(message.amountOut)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBorrow>, I>>(
    object: I
  ): MsgBorrow {
    const message = createBaseMsgBorrow();
    message.borrower = object.borrower ?? "";
    message.lendId =
      object.lendId !== undefined && object.lendId !== null
        ? Long.fromValue(object.lendId)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.isStableBorrow = object.isStableBorrow ?? false;
    message.amountIn =
      object.amountIn !== undefined && object.amountIn !== null
        ? Coin.fromPartial(object.amountIn)
        : undefined;
    message.amountOut =
      object.amountOut !== undefined && object.amountOut !== null
        ? Coin.fromPartial(object.amountOut)
        : undefined;
    return message;
  },
};

function createBaseMsgRepay(): MsgRepay {
  return { borrower: "", borrowId: Long.UZERO, amount: undefined };
}

export const MsgRepay = {
  encode(
    message: MsgRepay,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (!message.borrowId.isZero()) {
      writer.uint32(16).uint64(message.borrowId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.borrowId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepay {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      borrowId: isSet(object.borrowId)
        ? Long.fromValue(object.borrowId)
        : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgRepay): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.borrowId !== undefined &&
      (obj.borrowId = (message.borrowId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRepay>, I>>(object: I): MsgRepay {
    const message = createBaseMsgRepay();
    message.borrower = object.borrower ?? "";
    message.borrowId =
      object.borrowId !== undefined && object.borrowId !== null
        ? Long.fromValue(object.borrowId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgDepositBorrow(): MsgDepositBorrow {
  return { borrower: "", borrowId: Long.UZERO, amount: undefined };
}

export const MsgDepositBorrow = {
  encode(
    message: MsgDepositBorrow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (!message.borrowId.isZero()) {
      writer.uint32(16).uint64(message.borrowId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.borrowId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      borrowId: isSet(object.borrowId)
        ? Long.fromValue(object.borrowId)
        : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDepositBorrow): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.borrowId !== undefined &&
      (obj.borrowId = (message.borrowId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositBorrow>, I>>(
    object: I
  ): MsgDepositBorrow {
    const message = createBaseMsgDepositBorrow();
    message.borrower = object.borrower ?? "";
    message.borrowId =
      object.borrowId !== undefined && object.borrowId !== null
        ? Long.fromValue(object.borrowId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgDraw(): MsgDraw {
  return { borrower: "", borrowId: Long.UZERO, amount: undefined };
}

export const MsgDraw = {
  encode(
    message: MsgDraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (!message.borrowId.isZero()) {
      writer.uint32(16).uint64(message.borrowId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.borrowId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDraw {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      borrowId: isSet(object.borrowId)
        ? Long.fromValue(object.borrowId)
        : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDraw): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.borrowId !== undefined &&
      (obj.borrowId = (message.borrowId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDraw>, I>>(object: I): MsgDraw {
    const message = createBaseMsgDraw();
    message.borrower = object.borrower ?? "";
    message.borrowId =
      object.borrowId !== undefined && object.borrowId !== null
        ? Long.fromValue(object.borrowId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgCloseBorrow(): MsgCloseBorrow {
  return { borrower: "", borrowId: Long.UZERO };
}

export const MsgCloseBorrow = {
  encode(
    message: MsgCloseBorrow,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    if (!message.borrowId.isZero()) {
      writer.uint32(16).uint64(message.borrowId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBorrow {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        case 2:
          message.borrowId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseBorrow {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
      borrowId: isSet(object.borrowId)
        ? Long.fromValue(object.borrowId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseBorrow): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    message.borrowId !== undefined &&
      (obj.borrowId = (message.borrowId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseBorrow>, I>>(
    object: I
  ): MsgCloseBorrow {
    const message = createBaseMsgCloseBorrow();
    message.borrower = object.borrower ?? "";
    message.borrowId =
      object.borrowId !== undefined && object.borrowId !== null
        ? Long.fromValue(object.borrowId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgBorrowAlternate(): MsgBorrowAlternate {
  return {
    lender: "",
    assetId: Long.UZERO,
    poolId: Long.UZERO,
    amountIn: undefined,
    pairId: Long.UZERO,
    isStableBorrow: false,
    amountOut: undefined,
    appId: Long.UZERO,
  };
}

export const MsgBorrowAlternate = {
  encode(
    message: MsgBorrowAlternate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.amountIn !== undefined) {
      Coin.encode(message.amountIn, writer.uint32(34).fork()).ldelim();
    }
    if (!message.pairId.isZero()) {
      writer.uint32(40).uint64(message.pairId);
    }
    if (message.isStableBorrow === true) {
      writer.uint32(48).bool(message.isStableBorrow);
    }
    if (message.amountOut !== undefined) {
      Coin.encode(message.amountOut, writer.uint32(58).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(64).uint64(message.appId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrowAlternate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowAlternate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lender = reader.string();
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.poolId = reader.uint64() as Long;
          break;
        case 4:
          message.amountIn = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.pairId = reader.uint64() as Long;
          break;
        case 6:
          message.isStableBorrow = reader.bool();
          break;
        case 7:
          message.amountOut = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgBorrowAlternate {
    return {
      lender: isSet(object.lender) ? String(object.lender) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      amountIn: isSet(object.amountIn)
        ? Coin.fromJSON(object.amountIn)
        : undefined,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
      isStableBorrow: isSet(object.isStableBorrow)
        ? Boolean(object.isStableBorrow)
        : false,
      amountOut: isSet(object.amountOut)
        ? Coin.fromJSON(object.amountOut)
        : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgBorrowAlternate): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.amountIn !== undefined &&
      (obj.amountIn = message.amountIn
        ? Coin.toJSON(message.amountIn)
        : undefined);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.isStableBorrow !== undefined &&
      (obj.isStableBorrow = message.isStableBorrow);
    message.amountOut !== undefined &&
      (obj.amountOut = message.amountOut
        ? Coin.toJSON(message.amountOut)
        : undefined);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBorrowAlternate>, I>>(
    object: I
  ): MsgBorrowAlternate {
    const message = createBaseMsgBorrowAlternate();
    message.lender = object.lender ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.amountIn =
      object.amountIn !== undefined && object.amountIn !== null
        ? Coin.fromPartial(object.amountIn)
        : undefined;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.isStableBorrow = object.isStableBorrow ?? false;
    message.amountOut =
      object.amountOut !== undefined && object.amountOut !== null
        ? Coin.fromPartial(object.amountOut)
        : undefined;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgFundModuleAccounts(): MsgFundModuleAccounts {
  return {
    poolId: Long.UZERO,
    assetId: Long.UZERO,
    lender: "",
    amount: undefined,
  };
}

export const MsgFundModuleAccounts = {
  encode(
    message: MsgFundModuleAccounts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.lender !== "") {
      writer.uint32(26).string(message.lender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFundModuleAccounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundModuleAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.lender = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundModuleAccounts {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      lender: isSet(object.lender) ? String(object.lender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgFundModuleAccounts): unknown {
    const obj: any = {};
    message.poolId !== undefined &&
      (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.lender !== undefined && (obj.lender = message.lender);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundModuleAccounts>, I>>(
    object: I
  ): MsgFundModuleAccounts {
    const message = createBaseMsgFundModuleAccounts();
    message.poolId =
      object.poolId !== undefined && object.poolId !== null
        ? Long.fromValue(object.poolId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.lender = object.lender ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgCalculateInterestAndRewards(): MsgCalculateInterestAndRewards {
  return { borrower: "" };
}

export const MsgCalculateInterestAndRewards = {
  encode(
    message: MsgCalculateInterestAndRewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrower !== "") {
      writer.uint32(10).string(message.borrower);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCalculateInterestAndRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCalculateInterestAndRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrower = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCalculateInterestAndRewards {
    return {
      borrower: isSet(object.borrower) ? String(object.borrower) : "",
    };
  },

  toJSON(message: MsgCalculateInterestAndRewards): unknown {
    const obj: any = {};
    message.borrower !== undefined && (obj.borrower = message.borrower);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCalculateInterestAndRewards>, I>>(
    object: I
  ): MsgCalculateInterestAndRewards {
    const message = createBaseMsgCalculateInterestAndRewards();
    message.borrower = object.borrower ?? "";
    return message;
  },
};

function createBaseMsgLendResponse(): MsgLendResponse {
  return {};
}

export const MsgLendResponse = {
  encode(
    _: MsgLendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLendResponse();
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

  fromJSON(_: any): MsgLendResponse {
    return {};
  },

  toJSON(_: MsgLendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLendResponse>, I>>(
    _: I
  ): MsgLendResponse {
    const message = createBaseMsgLendResponse();
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

function createBaseMsgCloseLendResponse(): MsgCloseLendResponse {
  return {};
}

export const MsgCloseLendResponse = {
  encode(
    _: MsgCloseLendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseLendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLendResponse();
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

  fromJSON(_: any): MsgCloseLendResponse {
    return {};
  },

  toJSON(_: MsgCloseLendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLendResponse>, I>>(
    _: I
  ): MsgCloseLendResponse {
    const message = createBaseMsgCloseLendResponse();
    return message;
  },
};

function createBaseMsgBorrowResponse(): MsgBorrowResponse {
  return {};
}

export const MsgBorrowResponse = {
  encode(
    _: MsgBorrowResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowResponse();
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

  fromJSON(_: any): MsgBorrowResponse {
    return {};
  },

  toJSON(_: MsgBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBorrowResponse>, I>>(
    _: I
  ): MsgBorrowResponse {
    const message = createBaseMsgBorrowResponse();
    return message;
  },
};

function createBaseMsgRepayResponse(): MsgRepayResponse {
  return {};
}

export const MsgRepayResponse = {
  encode(
    _: MsgRepayResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayResponse();
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

  fromJSON(_: any): MsgRepayResponse {
    return {};
  },

  toJSON(_: MsgRepayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRepayResponse>, I>>(
    _: I
  ): MsgRepayResponse {
    const message = createBaseMsgRepayResponse();
    return message;
  },
};

function createBaseMsgDepositBorrowResponse(): MsgDepositBorrowResponse {
  return {};
}

export const MsgDepositBorrowResponse = {
  encode(
    _: MsgDepositBorrowResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositBorrowResponse();
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

  fromJSON(_: any): MsgDepositBorrowResponse {
    return {};
  },

  toJSON(_: MsgDepositBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositBorrowResponse>, I>>(
    _: I
  ): MsgDepositBorrowResponse {
    const message = createBaseMsgDepositBorrowResponse();
    return message;
  },
};

function createBaseMsgDrawResponse(): MsgDrawResponse {
  return {};
}

export const MsgDrawResponse = {
  encode(
    _: MsgDrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawResponse();
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

  fromJSON(_: any): MsgDrawResponse {
    return {};
  },

  toJSON(_: MsgDrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDrawResponse>, I>>(
    _: I
  ): MsgDrawResponse {
    const message = createBaseMsgDrawResponse();
    return message;
  },
};

function createBaseMsgCloseBorrowResponse(): MsgCloseBorrowResponse {
  return {};
}

export const MsgCloseBorrowResponse = {
  encode(
    _: MsgCloseBorrowResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseBorrowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBorrowResponse();
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

  fromJSON(_: any): MsgCloseBorrowResponse {
    return {};
  },

  toJSON(_: MsgCloseBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseBorrowResponse>, I>>(
    _: I
  ): MsgCloseBorrowResponse {
    const message = createBaseMsgCloseBorrowResponse();
    return message;
  },
};

function createBaseMsgBorrowAlternateResponse(): MsgBorrowAlternateResponse {
  return {};
}

export const MsgBorrowAlternateResponse = {
  encode(
    _: MsgBorrowAlternateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBorrowAlternateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBorrowAlternateResponse();
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

  fromJSON(_: any): MsgBorrowAlternateResponse {
    return {};
  },

  toJSON(_: MsgBorrowAlternateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBorrowAlternateResponse>, I>>(
    _: I
  ): MsgBorrowAlternateResponse {
    const message = createBaseMsgBorrowAlternateResponse();
    return message;
  },
};

function createBaseMsgFundModuleAccountsResponse(): MsgFundModuleAccountsResponse {
  return {};
}

export const MsgFundModuleAccountsResponse = {
  encode(
    _: MsgFundModuleAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFundModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundModuleAccountsResponse();
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

  fromJSON(_: any): MsgFundModuleAccountsResponse {
    return {};
  },

  toJSON(_: MsgFundModuleAccountsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundModuleAccountsResponse>, I>>(
    _: I
  ): MsgFundModuleAccountsResponse {
    const message = createBaseMsgFundModuleAccountsResponse();
    return message;
  },
};

function createBaseMsgCalculateInterestAndRewardsResponse(): MsgCalculateInterestAndRewardsResponse {
  return {};
}

export const MsgCalculateInterestAndRewardsResponse = {
  encode(
    _: MsgCalculateInterestAndRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCalculateInterestAndRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCalculateInterestAndRewardsResponse();
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

  fromJSON(_: any): MsgCalculateInterestAndRewardsResponse {
    return {};
  },

  toJSON(_: MsgCalculateInterestAndRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgCalculateInterestAndRewardsResponse>, I>
  >(_: I): MsgCalculateInterestAndRewardsResponse {
    const message = createBaseMsgCalculateInterestAndRewardsResponse();
    return message;
  },
};

export interface Msg {
  /** LendAsset defines a method for lending coins to the ModuleAccount. */
  Lend(request: MsgLend): Promise<MsgLendResponse>;
  /**
   * WithdrawAsset defines a method for withdrawing previously loaned coins from
   * the ModuleAccount.
   */
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  CloseLend(request: MsgCloseLend): Promise<MsgCloseLendResponse>;
  /** BorrowAsset defines a method for borrowing coins from the ModuleAccount. */
  Borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
  /** RepayAsset defines a method for repaying borrowed coins to the ModuleAccount. */
  Repay(request: MsgRepay): Promise<MsgRepayResponse>;
  DepositBorrow(request: MsgDepositBorrow): Promise<MsgDepositBorrowResponse>;
  Draw(request: MsgDraw): Promise<MsgDrawResponse>;
  CloseBorrow(request: MsgCloseBorrow): Promise<MsgCloseBorrowResponse>;
  BorrowAlternate(
    request: MsgBorrowAlternate
  ): Promise<MsgBorrowAlternateResponse>;
  /** FundModuleAccounts funds an existing module account */
  FundModuleAccounts(
    request: MsgFundModuleAccounts
  ): Promise<MsgFundModuleAccountsResponse>;
  CalculateInterestAndRewards(
    request: MsgCalculateInterestAndRewards
  ): Promise<MsgCalculateInterestAndRewardsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Lend = this.Lend.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.CloseLend = this.CloseLend.bind(this);
    this.Borrow = this.Borrow.bind(this);
    this.Repay = this.Repay.bind(this);
    this.DepositBorrow = this.DepositBorrow.bind(this);
    this.Draw = this.Draw.bind(this);
    this.CloseBorrow = this.CloseBorrow.bind(this);
    this.BorrowAlternate = this.BorrowAlternate.bind(this);
    this.FundModuleAccounts = this.FundModuleAccounts.bind(this);
    this.CalculateInterestAndRewards =
      this.CalculateInterestAndRewards.bind(this);
  }
  Lend(request: MsgLend): Promise<MsgLendResponse> {
    const data = MsgLend.encode(request).finish();
    const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Lend", data);
    return promise.then((data) => MsgLendResponse.decode(new _m0.Reader(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "Withdraw",
      data
    );
    return promise.then((data) =>
      MsgWithdrawResponse.decode(new _m0.Reader(data))
    );
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "Deposit",
      data
    );
    return promise.then((data) =>
      MsgDepositResponse.decode(new _m0.Reader(data))
    );
  }

  CloseLend(request: MsgCloseLend): Promise<MsgCloseLendResponse> {
    const data = MsgCloseLend.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "CloseLend",
      data
    );
    return promise.then((data) =>
      MsgCloseLendResponse.decode(new _m0.Reader(data))
    );
  }

  Borrow(request: MsgBorrow): Promise<MsgBorrowResponse> {
    const data = MsgBorrow.encode(request).finish();
    const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Borrow", data);
    return promise.then((data) =>
      MsgBorrowResponse.decode(new _m0.Reader(data))
    );
  }

  Repay(request: MsgRepay): Promise<MsgRepayResponse> {
    const data = MsgRepay.encode(request).finish();
    const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Repay", data);
    return promise.then((data) =>
      MsgRepayResponse.decode(new _m0.Reader(data))
    );
  }

  DepositBorrow(request: MsgDepositBorrow): Promise<MsgDepositBorrowResponse> {
    const data = MsgDepositBorrow.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "DepositBorrow",
      data
    );
    return promise.then((data) =>
      MsgDepositBorrowResponse.decode(new _m0.Reader(data))
    );
  }

  Draw(request: MsgDraw): Promise<MsgDrawResponse> {
    const data = MsgDraw.encode(request).finish();
    const promise = this.rpc.request("comdex.lend.v1beta1.Msg", "Draw", data);
    return promise.then((data) => MsgDrawResponse.decode(new _m0.Reader(data)));
  }

  CloseBorrow(request: MsgCloseBorrow): Promise<MsgCloseBorrowResponse> {
    const data = MsgCloseBorrow.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "CloseBorrow",
      data
    );
    return promise.then((data) =>
      MsgCloseBorrowResponse.decode(new _m0.Reader(data))
    );
  }

  BorrowAlternate(
    request: MsgBorrowAlternate
  ): Promise<MsgBorrowAlternateResponse> {
    const data = MsgBorrowAlternate.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "BorrowAlternate",
      data
    );
    return promise.then((data) =>
      MsgBorrowAlternateResponse.decode(new _m0.Reader(data))
    );
  }

  FundModuleAccounts(
    request: MsgFundModuleAccounts
  ): Promise<MsgFundModuleAccountsResponse> {
    const data = MsgFundModuleAccounts.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "FundModuleAccounts",
      data
    );
    return promise.then((data) =>
      MsgFundModuleAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  CalculateInterestAndRewards(
    request: MsgCalculateInterestAndRewards
  ): Promise<MsgCalculateInterestAndRewardsResponse> {
    const data = MsgCalculateInterestAndRewards.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.lend.v1beta1.Msg",
      "CalculateInterestAndRewards",
      data
    );
    return promise.then((data) =>
      MsgCalculateInterestAndRewardsResponse.decode(new _m0.Reader(data))
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
