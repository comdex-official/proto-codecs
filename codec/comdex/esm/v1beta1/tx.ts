/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { KillSwitchParams } from "./esm";
import { Params } from "./params";

export const protobufPackage = "comdex.esm.v1beta1";

export interface MsgDepositESM {
  appId: Long;
  depositor: string;
  amount?: Coin;
}

export interface MsgExecuteESM {
  appId: Long;
  depositor: string;
}

export interface MsgKillRequest {
  from: string;
  killSwitchParams?: KillSwitchParams;
}

export interface MsgCollateralRedemptionRequest {
  appId: Long;
  amount?: Coin;
  from: string;
}

export interface MsgDepositESMResponse {
}

export interface MsgExecuteESMResponse {
}

export interface MsgKillResponse {
}

export interface MsgCollateralRedemptionResponse {
}

/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/esm parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params?: Params;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgDepositESM(): MsgDepositESM {
  return { appId: Long.UZERO, depositor: "", amount: undefined };
}

export const MsgDepositESM = {
  encode(message: MsgDepositESM, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositESM {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositESM();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
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

  fromJSON(object: any): MsgDepositESM {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDepositESM): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositESM>, I>>(base?: I): MsgDepositESM {
    return MsgDepositESM.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositESM>, I>>(object: I): MsgDepositESM {
    const message = createBaseMsgDepositESM();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgExecuteESM(): MsgExecuteESM {
  return { appId: Long.UZERO, depositor: "" };
}

export const MsgExecuteESM = {
  encode(message: MsgExecuteESM, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteESM {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteESM();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteESM {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
    };
  },

  toJSON(message: MsgExecuteESM): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExecuteESM>, I>>(base?: I): MsgExecuteESM {
    return MsgExecuteESM.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteESM>, I>>(object: I): MsgExecuteESM {
    const message = createBaseMsgExecuteESM();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  },
};

function createBaseMsgKillRequest(): MsgKillRequest {
  return { from: "", killSwitchParams: undefined };
}

export const MsgKillRequest = {
  encode(message: MsgKillRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.killSwitchParams !== undefined) {
      KillSwitchParams.encode(message.killSwitchParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgKillRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKillRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.killSwitchParams = KillSwitchParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKillRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      killSwitchParams: isSet(object.killSwitchParams) ? KillSwitchParams.fromJSON(object.killSwitchParams) : undefined,
    };
  },

  toJSON(message: MsgKillRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.killSwitchParams !== undefined &&
      (obj.killSwitchParams = message.killSwitchParams ? KillSwitchParams.toJSON(message.killSwitchParams) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgKillRequest>, I>>(base?: I): MsgKillRequest {
    return MsgKillRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgKillRequest>, I>>(object: I): MsgKillRequest {
    const message = createBaseMsgKillRequest();
    message.from = object.from ?? "";
    message.killSwitchParams = (object.killSwitchParams !== undefined && object.killSwitchParams !== null)
      ? KillSwitchParams.fromPartial(object.killSwitchParams)
      : undefined;
    return message;
  },
};

function createBaseMsgCollateralRedemptionRequest(): MsgCollateralRedemptionRequest {
  return { appId: Long.UZERO, amount: undefined, from: "" };
}

export const MsgCollateralRedemptionRequest = {
  encode(message: MsgCollateralRedemptionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(26).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollateralRedemptionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollateralRedemptionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCollateralRedemptionRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: MsgCollateralRedemptionRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCollateralRedemptionRequest>, I>>(base?: I): MsgCollateralRedemptionRequest {
    return MsgCollateralRedemptionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollateralRedemptionRequest>, I>>(
    object: I,
  ): MsgCollateralRedemptionRequest {
    const message = createBaseMsgCollateralRedemptionRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseMsgDepositESMResponse(): MsgDepositESMResponse {
  return {};
}

export const MsgDepositESMResponse = {
  encode(_: MsgDepositESMResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositESMResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositESMResponse();
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

  fromJSON(_: any): MsgDepositESMResponse {
    return {};
  },

  toJSON(_: MsgDepositESMResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDepositESMResponse>, I>>(base?: I): MsgDepositESMResponse {
    return MsgDepositESMResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositESMResponse>, I>>(_: I): MsgDepositESMResponse {
    const message = createBaseMsgDepositESMResponse();
    return message;
  },
};

function createBaseMsgExecuteESMResponse(): MsgExecuteESMResponse {
  return {};
}

export const MsgExecuteESMResponse = {
  encode(_: MsgExecuteESMResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteESMResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteESMResponse();
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

  fromJSON(_: any): MsgExecuteESMResponse {
    return {};
  },

  toJSON(_: MsgExecuteESMResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExecuteESMResponse>, I>>(base?: I): MsgExecuteESMResponse {
    return MsgExecuteESMResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteESMResponse>, I>>(_: I): MsgExecuteESMResponse {
    const message = createBaseMsgExecuteESMResponse();
    return message;
  },
};

function createBaseMsgKillResponse(): MsgKillResponse {
  return {};
}

export const MsgKillResponse = {
  encode(_: MsgKillResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgKillResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKillResponse();
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

  fromJSON(_: any): MsgKillResponse {
    return {};
  },

  toJSON(_: MsgKillResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgKillResponse>, I>>(base?: I): MsgKillResponse {
    return MsgKillResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgKillResponse>, I>>(_: I): MsgKillResponse {
    const message = createBaseMsgKillResponse();
    return message;
  },
};

function createBaseMsgCollateralRedemptionResponse(): MsgCollateralRedemptionResponse {
  return {};
}

export const MsgCollateralRedemptionResponse = {
  encode(_: MsgCollateralRedemptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCollateralRedemptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCollateralRedemptionResponse();
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

  fromJSON(_: any): MsgCollateralRedemptionResponse {
    return {};
  },

  toJSON(_: MsgCollateralRedemptionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCollateralRedemptionResponse>, I>>(base?: I): MsgCollateralRedemptionResponse {
    return MsgCollateralRedemptionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCollateralRedemptionResponse>, I>>(_: I): MsgCollateralRedemptionResponse {
    const message = createBaseMsgCollateralRedemptionResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

export interface Msg {
  DepositESM(request: MsgDepositESM): Promise<MsgDepositESMResponse>;
  ExecuteESM(request: MsgExecuteESM): Promise<MsgExecuteESMResponse>;
  MsgKillSwitch(request: MsgKillRequest): Promise<MsgKillResponse>;
  MsgCollateralRedemption(request: MsgCollateralRedemptionRequest): Promise<MsgCollateralRedemptionResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.esm.v1beta1.Msg";
    this.rpc = rpc;
    this.DepositESM = this.DepositESM.bind(this);
    this.ExecuteESM = this.ExecuteESM.bind(this);
    this.MsgKillSwitch = this.MsgKillSwitch.bind(this);
    this.MsgCollateralRedemption = this.MsgCollateralRedemption.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  DepositESM(request: MsgDepositESM): Promise<MsgDepositESMResponse> {
    const data = MsgDepositESM.encode(request).finish();
    const promise = this.rpc.request(this.service, "DepositESM", data);
    return promise.then((data) => MsgDepositESMResponse.decode(new _m0.Reader(data)));
  }

  ExecuteESM(request: MsgExecuteESM): Promise<MsgExecuteESMResponse> {
    const data = MsgExecuteESM.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExecuteESM", data);
    return promise.then((data) => MsgExecuteESMResponse.decode(new _m0.Reader(data)));
  }

  MsgKillSwitch(request: MsgKillRequest): Promise<MsgKillResponse> {
    const data = MsgKillRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgKillSwitch", data);
    return promise.then((data) => MsgKillResponse.decode(new _m0.Reader(data)));
  }

  MsgCollateralRedemption(request: MsgCollateralRedemptionRequest): Promise<MsgCollateralRedemptionResponse> {
    const data = MsgCollateralRedemptionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgCollateralRedemption", data);
    return promise.then((data) => MsgCollateralRedemptionResponse.decode(new _m0.Reader(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
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
