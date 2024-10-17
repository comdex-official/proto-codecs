/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.collector.v1beta1";

export interface MsgDeposit {
  addr: string;
  amount?: Coin;
  appId: Long;
}

export interface MsgDepositResponse {
}

export interface MsgRefund {
  addr: string;
}

export interface MsgRefundResponse {
}

export interface MsgUpdateDebtParams {
  addr: string;
  appId: Long;
  assetId: Long;
  slots: Long;
  debtThreshold: string;
  lotSize: string;
  debtLotSize: string;
  isDebtAuction: boolean;
}

export interface MsgUpdateDebtParamsResponse {
}

function createBaseMsgDeposit(): MsgDeposit {
  return { addr: "", amount: undefined, appId: Long.UZERO };
}

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (!message.appId.isZero()) {
      writer.uint32(24).uint64(message.appId);
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
          message.addr = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDeposit {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeposit>, I>>(base?: I): MsgDeposit {
    return MsgDeposit.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.addr = object.addr ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    return message;
  },
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  create<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(base?: I): MsgDepositResponse {
    return MsgDepositResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
};

function createBaseMsgRefund(): MsgRefund {
  return { addr: "" };
}

export const MsgRefund = {
  encode(message: MsgRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRefund {
    return { addr: isSet(object.addr) ? String(object.addr) : "" };
  },

  toJSON(message: MsgRefund): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRefund>, I>>(base?: I): MsgRefund {
    return MsgRefund.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefund>, I>>(object: I): MsgRefund {
    const message = createBaseMsgRefund();
    message.addr = object.addr ?? "";
    return message;
  },
};

function createBaseMsgRefundResponse(): MsgRefundResponse {
  return {};
}

export const MsgRefundResponse = {
  encode(_: MsgRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRefundResponse();
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

  fromJSON(_: any): MsgRefundResponse {
    return {};
  },

  toJSON(_: MsgRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRefundResponse>, I>>(base?: I): MsgRefundResponse {
    return MsgRefundResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRefundResponse>, I>>(_: I): MsgRefundResponse {
    const message = createBaseMsgRefundResponse();
    return message;
  },
};

function createBaseMsgUpdateDebtParams(): MsgUpdateDebtParams {
  return {
    addr: "",
    appId: Long.UZERO,
    assetId: Long.UZERO,
    slots: Long.UZERO,
    debtThreshold: "",
    lotSize: "",
    debtLotSize: "",
    isDebtAuction: false,
  };
}

export const MsgUpdateDebtParams = {
  encode(message: MsgUpdateDebtParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addr !== "") {
      writer.uint32(10).string(message.addr);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (!message.slots.isZero()) {
      writer.uint32(32).uint64(message.slots);
    }
    if (message.debtThreshold !== "") {
      writer.uint32(42).string(message.debtThreshold);
    }
    if (message.lotSize !== "") {
      writer.uint32(50).string(message.lotSize);
    }
    if (message.debtLotSize !== "") {
      writer.uint32(58).string(message.debtLotSize);
    }
    if (message.isDebtAuction === true) {
      writer.uint32(64).bool(message.isDebtAuction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDebtParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDebtParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addr = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        case 4:
          message.slots = reader.uint64() as Long;
          break;
        case 5:
          message.debtThreshold = reader.string();
          break;
        case 6:
          message.lotSize = reader.string();
          break;
        case 7:
          message.debtLotSize = reader.string();
          break;
        case 8:
          message.isDebtAuction = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDebtParams {
    return {
      addr: isSet(object.addr) ? String(object.addr) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      slots: isSet(object.slots) ? Long.fromValue(object.slots) : Long.UZERO,
      debtThreshold: isSet(object.debtThreshold) ? String(object.debtThreshold) : "",
      lotSize: isSet(object.lotSize) ? String(object.lotSize) : "",
      debtLotSize: isSet(object.debtLotSize) ? String(object.debtLotSize) : "",
      isDebtAuction: isSet(object.isDebtAuction) ? Boolean(object.isDebtAuction) : false,
    };
  },

  toJSON(message: MsgUpdateDebtParams): unknown {
    const obj: any = {};
    message.addr !== undefined && (obj.addr = message.addr);
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.slots !== undefined && (obj.slots = (message.slots || Long.UZERO).toString());
    message.debtThreshold !== undefined && (obj.debtThreshold = message.debtThreshold);
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.debtLotSize !== undefined && (obj.debtLotSize = message.debtLotSize);
    message.isDebtAuction !== undefined && (obj.isDebtAuction = message.isDebtAuction);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDebtParams>, I>>(base?: I): MsgUpdateDebtParams {
    return MsgUpdateDebtParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDebtParams>, I>>(object: I): MsgUpdateDebtParams {
    const message = createBaseMsgUpdateDebtParams();
    message.addr = object.addr ?? "";
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.slots = (object.slots !== undefined && object.slots !== null) ? Long.fromValue(object.slots) : Long.UZERO;
    message.debtThreshold = object.debtThreshold ?? "";
    message.lotSize = object.lotSize ?? "";
    message.debtLotSize = object.debtLotSize ?? "";
    message.isDebtAuction = object.isDebtAuction ?? false;
    return message;
  },
};

function createBaseMsgUpdateDebtParamsResponse(): MsgUpdateDebtParamsResponse {
  return {};
}

export const MsgUpdateDebtParamsResponse = {
  encode(_: MsgUpdateDebtParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDebtParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDebtParamsResponse();
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

  fromJSON(_: any): MsgUpdateDebtParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateDebtParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDebtParamsResponse>, I>>(base?: I): MsgUpdateDebtParamsResponse {
    return MsgUpdateDebtParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDebtParamsResponse>, I>>(_: I): MsgUpdateDebtParamsResponse {
    const message = createBaseMsgUpdateDebtParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Refund(request: MsgRefund): Promise<MsgRefundResponse>;
  UpdateDebtParams(request: MsgUpdateDebtParams): Promise<MsgUpdateDebtParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.collector.v1beta1.Msg";
    this.rpc = rpc;
    this.Deposit = this.Deposit.bind(this);
    this.Refund = this.Refund.bind(this);
    this.UpdateDebtParams = this.UpdateDebtParams.bind(this);
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request(this.service, "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  Refund(request: MsgRefund): Promise<MsgRefundResponse> {
    const data = MsgRefund.encode(request).finish();
    const promise = this.rpc.request(this.service, "Refund", data);
    return promise.then((data) => MsgRefundResponse.decode(new _m0.Reader(data)));
  }

  UpdateDebtParams(request: MsgUpdateDebtParams): Promise<MsgUpdateDebtParamsResponse> {
    const data = MsgUpdateDebtParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDebtParams", data);
    return promise.then((data) => MsgUpdateDebtParamsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
