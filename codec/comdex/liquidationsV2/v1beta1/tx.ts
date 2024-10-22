/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./params";

export const protobufPackage = "comdex.liquidationsV2.v1beta1";

export interface MsgLiquidateInternalKeeperRequest {
  from: string;
  liqType: Long;
  id: Long;
}

export interface MsgLiquidateInternalKeeperResponse {
}

export interface MsgAppReserveFundsRequest {
  appId: Long;
  assetId: Long;
  tokenQuantity?: Coin;
  from: string;
}

export interface MsgAppReserveFundsResponse {
}

export interface MsgLiquidateExternalKeeperRequest {
  from: string;
  appId: Long;
  owner: string;
  collateralToken?: Coin;
  debtToken?: Coin;
  collateralAssetId: Long;
  debtAssetId: Long;
  isDebtCmst: boolean;
}

export interface MsgLiquidateExternalKeeperResponse {
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
   * params defines the x/liquidationsV2 parameters to update.
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

function createBaseMsgLiquidateInternalKeeperRequest(): MsgLiquidateInternalKeeperRequest {
  return { from: "", liqType: Long.UZERO, id: Long.UZERO };
}

export const MsgLiquidateInternalKeeperRequest = {
  encode(message: MsgLiquidateInternalKeeperRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.liqType.isZero()) {
      writer.uint32(16).uint64(message.liqType);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateInternalKeeperRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateInternalKeeperRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.liqType = reader.uint64() as Long;
          break;
        case 3:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateInternalKeeperRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      liqType: isSet(object.liqType) ? Long.fromValue(object.liqType) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgLiquidateInternalKeeperRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.liqType !== undefined && (obj.liqType = (message.liqType || Long.UZERO).toString());
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateInternalKeeperRequest>, I>>(
    base?: I,
  ): MsgLiquidateInternalKeeperRequest {
    return MsgLiquidateInternalKeeperRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateInternalKeeperRequest>, I>>(
    object: I,
  ): MsgLiquidateInternalKeeperRequest {
    const message = createBaseMsgLiquidateInternalKeeperRequest();
    message.from = object.from ?? "";
    message.liqType = (object.liqType !== undefined && object.liqType !== null)
      ? Long.fromValue(object.liqType)
      : Long.UZERO;
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
};

function createBaseMsgLiquidateInternalKeeperResponse(): MsgLiquidateInternalKeeperResponse {
  return {};
}

export const MsgLiquidateInternalKeeperResponse = {
  encode(_: MsgLiquidateInternalKeeperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateInternalKeeperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateInternalKeeperResponse();
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

  fromJSON(_: any): MsgLiquidateInternalKeeperResponse {
    return {};
  },

  toJSON(_: MsgLiquidateInternalKeeperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateInternalKeeperResponse>, I>>(
    base?: I,
  ): MsgLiquidateInternalKeeperResponse {
    return MsgLiquidateInternalKeeperResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateInternalKeeperResponse>, I>>(
    _: I,
  ): MsgLiquidateInternalKeeperResponse {
    const message = createBaseMsgLiquidateInternalKeeperResponse();
    return message;
  },
};

function createBaseMsgAppReserveFundsRequest(): MsgAppReserveFundsRequest {
  return { appId: Long.UZERO, assetId: Long.UZERO, tokenQuantity: undefined, from: "" };
}

export const MsgAppReserveFundsRequest = {
  encode(message: MsgAppReserveFundsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.tokenQuantity !== undefined) {
      Coin.encode(message.tokenQuantity, writer.uint32(26).fork()).ldelim();
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAppReserveFundsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppReserveFundsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.tokenQuantity = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.from = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAppReserveFundsRequest {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      tokenQuantity: isSet(object.tokenQuantity) ? Coin.fromJSON(object.tokenQuantity) : undefined,
      from: isSet(object.from) ? String(object.from) : "",
    };
  },

  toJSON(message: MsgAppReserveFundsRequest): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.tokenQuantity !== undefined &&
      (obj.tokenQuantity = message.tokenQuantity ? Coin.toJSON(message.tokenQuantity) : undefined);
    message.from !== undefined && (obj.from = message.from);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAppReserveFundsRequest>, I>>(base?: I): MsgAppReserveFundsRequest {
    return MsgAppReserveFundsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAppReserveFundsRequest>, I>>(object: I): MsgAppReserveFundsRequest {
    const message = createBaseMsgAppReserveFundsRequest();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.tokenQuantity = (object.tokenQuantity !== undefined && object.tokenQuantity !== null)
      ? Coin.fromPartial(object.tokenQuantity)
      : undefined;
    message.from = object.from ?? "";
    return message;
  },
};

function createBaseMsgAppReserveFundsResponse(): MsgAppReserveFundsResponse {
  return {};
}

export const MsgAppReserveFundsResponse = {
  encode(_: MsgAppReserveFundsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAppReserveFundsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAppReserveFundsResponse();
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

  fromJSON(_: any): MsgAppReserveFundsResponse {
    return {};
  },

  toJSON(_: MsgAppReserveFundsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAppReserveFundsResponse>, I>>(base?: I): MsgAppReserveFundsResponse {
    return MsgAppReserveFundsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAppReserveFundsResponse>, I>>(_: I): MsgAppReserveFundsResponse {
    const message = createBaseMsgAppReserveFundsResponse();
    return message;
  },
};

function createBaseMsgLiquidateExternalKeeperRequest(): MsgLiquidateExternalKeeperRequest {
  return {
    from: "",
    appId: Long.UZERO,
    owner: "",
    collateralToken: undefined,
    debtToken: undefined,
    collateralAssetId: Long.UZERO,
    debtAssetId: Long.UZERO,
    isDebtCmst: false,
  };
}

export const MsgLiquidateExternalKeeperRequest = {
  encode(message: MsgLiquidateExternalKeeperRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.collateralToken !== undefined) {
      Coin.encode(message.collateralToken, writer.uint32(34).fork()).ldelim();
    }
    if (message.debtToken !== undefined) {
      Coin.encode(message.debtToken, writer.uint32(42).fork()).ldelim();
    }
    if (!message.collateralAssetId.isZero()) {
      writer.uint32(48).uint64(message.collateralAssetId);
    }
    if (!message.debtAssetId.isZero()) {
      writer.uint32(56).uint64(message.debtAssetId);
    }
    if (message.isDebtCmst === true) {
      writer.uint32(64).bool(message.isDebtCmst);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateExternalKeeperRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateExternalKeeperRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.collateralToken = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.debtToken = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.collateralAssetId = reader.uint64() as Long;
          break;
        case 7:
          message.debtAssetId = reader.uint64() as Long;
          break;
        case 8:
          message.isDebtCmst = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateExternalKeeperRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralToken: isSet(object.collateralToken) ? Coin.fromJSON(object.collateralToken) : undefined,
      debtToken: isSet(object.debtToken) ? Coin.fromJSON(object.debtToken) : undefined,
      collateralAssetId: isSet(object.collateralAssetId) ? Long.fromValue(object.collateralAssetId) : Long.UZERO,
      debtAssetId: isSet(object.debtAssetId) ? Long.fromValue(object.debtAssetId) : Long.UZERO,
      isDebtCmst: isSet(object.isDebtCmst) ? Boolean(object.isDebtCmst) : false,
    };
  },

  toJSON(message: MsgLiquidateExternalKeeperRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralToken !== undefined &&
      (obj.collateralToken = message.collateralToken ? Coin.toJSON(message.collateralToken) : undefined);
    message.debtToken !== undefined && (obj.debtToken = message.debtToken ? Coin.toJSON(message.debtToken) : undefined);
    message.collateralAssetId !== undefined &&
      (obj.collateralAssetId = (message.collateralAssetId || Long.UZERO).toString());
    message.debtAssetId !== undefined && (obj.debtAssetId = (message.debtAssetId || Long.UZERO).toString());
    message.isDebtCmst !== undefined && (obj.isDebtCmst = message.isDebtCmst);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateExternalKeeperRequest>, I>>(
    base?: I,
  ): MsgLiquidateExternalKeeperRequest {
    return MsgLiquidateExternalKeeperRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateExternalKeeperRequest>, I>>(
    object: I,
  ): MsgLiquidateExternalKeeperRequest {
    const message = createBaseMsgLiquidateExternalKeeperRequest();
    message.from = object.from ?? "";
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.collateralToken = (object.collateralToken !== undefined && object.collateralToken !== null)
      ? Coin.fromPartial(object.collateralToken)
      : undefined;
    message.debtToken = (object.debtToken !== undefined && object.debtToken !== null)
      ? Coin.fromPartial(object.debtToken)
      : undefined;
    message.collateralAssetId = (object.collateralAssetId !== undefined && object.collateralAssetId !== null)
      ? Long.fromValue(object.collateralAssetId)
      : Long.UZERO;
    message.debtAssetId = (object.debtAssetId !== undefined && object.debtAssetId !== null)
      ? Long.fromValue(object.debtAssetId)
      : Long.UZERO;
    message.isDebtCmst = object.isDebtCmst ?? false;
    return message;
  },
};

function createBaseMsgLiquidateExternalKeeperResponse(): MsgLiquidateExternalKeeperResponse {
  return {};
}

export const MsgLiquidateExternalKeeperResponse = {
  encode(_: MsgLiquidateExternalKeeperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLiquidateExternalKeeperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLiquidateExternalKeeperResponse();
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

  fromJSON(_: any): MsgLiquidateExternalKeeperResponse {
    return {};
  },

  toJSON(_: MsgLiquidateExternalKeeperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLiquidateExternalKeeperResponse>, I>>(
    base?: I,
  ): MsgLiquidateExternalKeeperResponse {
    return MsgLiquidateExternalKeeperResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgLiquidateExternalKeeperResponse>, I>>(
    _: I,
  ): MsgLiquidateExternalKeeperResponse {
    const message = createBaseMsgLiquidateExternalKeeperResponse();
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
  MsgLiquidateInternalKeeper(request: MsgLiquidateInternalKeeperRequest): Promise<MsgLiquidateInternalKeeperResponse>;
  MsgAppReserveFunds(request: MsgAppReserveFundsRequest): Promise<MsgAppReserveFundsResponse>;
  MsgLiquidateExternalKeeper(request: MsgLiquidateExternalKeeperRequest): Promise<MsgLiquidateExternalKeeperResponse>;
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "comdex.liquidationsV2.v1beta1.Msg";
    this.rpc = rpc;
    this.MsgLiquidateInternalKeeper = this.MsgLiquidateInternalKeeper.bind(this);
    this.MsgAppReserveFunds = this.MsgAppReserveFunds.bind(this);
    this.MsgLiquidateExternalKeeper = this.MsgLiquidateExternalKeeper.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MsgLiquidateInternalKeeper(request: MsgLiquidateInternalKeeperRequest): Promise<MsgLiquidateInternalKeeperResponse> {
    const data = MsgLiquidateInternalKeeperRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgLiquidateInternalKeeper", data);
    return promise.then((data) => MsgLiquidateInternalKeeperResponse.decode(new _m0.Reader(data)));
  }

  MsgAppReserveFunds(request: MsgAppReserveFundsRequest): Promise<MsgAppReserveFundsResponse> {
    const data = MsgAppReserveFundsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgAppReserveFunds", data);
    return promise.then((data) => MsgAppReserveFundsResponse.decode(new _m0.Reader(data)));
  }

  MsgLiquidateExternalKeeper(request: MsgLiquidateExternalKeeperRequest): Promise<MsgLiquidateExternalKeeperResponse> {
    const data = MsgLiquidateExternalKeeperRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "MsgLiquidateExternalKeeper", data);
    return promise.then((data) => MsgLiquidateExternalKeeperResponse.decode(new _m0.Reader(data)));
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
