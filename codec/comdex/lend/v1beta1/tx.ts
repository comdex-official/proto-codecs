/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.lend.v1beta1";

export interface MsgLend {
  lender: string;
  amount?: Coin;
  pairId: Long;
}

export interface MsgWithdraw {
  lender: string;
  amount?: Coin;
}

export interface MsgDepositLend {
  from: string;
  id: Long;
  amount?: Coin;
}

export interface MsgFundModuleAccounts {
  moduleName: string;
  lender: string;
  amount?: Coin;
}

export interface MsgLendResponse {}

export interface MsgWithdrawResponse {}

export interface MsgDepositResponse {}

export interface MsgFundModuleAccountsResponse {}

function createBaseMsgLend(): MsgLend {
  return { lender: "", amount: undefined, pairId: Long.UZERO };
}

export const MsgLend = {
  encode(
    message: MsgLend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (!message.pairId.isZero()) {
      writer.uint32(24).uint64(message.pairId);
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
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.pairId = reader.uint64() as Long;
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      pairId: isSet(object.pairId) ? Long.fromValue(object.pairId) : Long.UZERO,
    };
  },

  toJSON(message: MsgLend): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLend>, I>>(object: I): MsgLend {
    const message = createBaseMsgLend();
    message.lender = object.lender ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWithdraw(): MsgWithdraw {
  return { lender: "", amount: undefined };
}

export const MsgWithdraw = {
  encode(
    message: MsgWithdraw,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lender !== "") {
      writer.uint32(10).string(message.lender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.lender !== undefined && (obj.lender = message.lender);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(
    object: I
  ): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.lender = object.lender ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgDepositLend(): MsgDepositLend {
  return { from: "", id: Long.UZERO, amount: undefined };
}

export const MsgDepositLend = {
  encode(
    message: MsgDepositLend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositLend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositLend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
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

  fromJSON(object: any): MsgDepositLend {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDepositLend): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositLend>, I>>(
    object: I
  ): MsgDepositLend {
    const message = createBaseMsgDepositLend();
    message.from = object.from ?? "";
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseMsgFundModuleAccounts(): MsgFundModuleAccounts {
  return { moduleName: "", lender: "", amount: undefined };
}

export const MsgFundModuleAccounts = {
  encode(
    message: MsgFundModuleAccounts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.lender !== "") {
      writer.uint32(18).string(message.lender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
          message.moduleName = reader.string();
          break;
        case 2:
          message.lender = reader.string();
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

  fromJSON(object: any): MsgFundModuleAccounts {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      lender: isSet(object.lender) ? String(object.lender) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgFundModuleAccounts): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.lender !== undefined && (obj.lender = message.lender);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundModuleAccounts>, I>>(
    object: I
  ): MsgFundModuleAccounts {
    const message = createBaseMsgFundModuleAccounts();
    message.moduleName = object.moduleName ?? "";
    message.lender = object.lender ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
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

export interface Msg {
  /** LendAsset defines a method for lending coins to the ModuleAccount. */
  Lend(request: MsgLend): Promise<MsgLendResponse>;
  /**
   * WithdrawAsset defines a method for withdrawing previously loaned coins from
   * the ModuleAccount.
   */
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  /** FundModuleAccounts funds an existing module account */
  FundModuleAccounts(
    request: MsgFundModuleAccounts
  ): Promise<MsgFundModuleAccountsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Lend = this.Lend.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.FundModuleAccounts = this.FundModuleAccounts.bind(this);
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
