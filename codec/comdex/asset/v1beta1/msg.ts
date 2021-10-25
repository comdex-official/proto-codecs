/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.asset.v1beta1";

export interface MsgAddAssetRequest {
  from: string;
  name: string;
  denom: string;
  decimals: Long;
}

export interface MsgAddAssetResponse {}

export interface MsgUpdateAssetRequest {
  from: string;
  id: Long;
  name: string;
  denom: string;
  decimals: Long;
}

export interface MsgUpdateAssetResponse {}

export interface MsgAddPairRequest {
  from: string;
  assetIn: Long;
  assetOut: Long;
  liquidationRatio: string;
}

export interface MsgAddPairResponse {}

export interface MsgUpdatePairRequest {
  from: string;
  id: Long;
  liquidationRatio: string;
}

export interface MsgUpdatePairResponse {}

const baseMsgAddAssetRequest: object = {
  from: "",
  name: "",
  denom: "",
  decimals: Long.ZERO,
};

export const MsgAddAssetRequest = {
  encode(
    message: MsgAddAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(32).int64(message.decimals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAssetRequest } as MsgAddAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.decimals = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAssetRequest {
    const message = { ...baseMsgAddAssetRequest } as MsgAddAssetRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = Long.fromString(object.decimals);
    } else {
      message.decimals = Long.ZERO;
    }
    return message;
  },

  toJSON(message: MsgAddAssetRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddAssetRequest>): MsgAddAssetRequest {
    const message = { ...baseMsgAddAssetRequest } as MsgAddAssetRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals as Long;
    } else {
      message.decimals = Long.ZERO;
    }
    return message;
  },
};

const baseMsgAddAssetResponse: object = {};

export const MsgAddAssetResponse = {
  encode(
    _: MsgAddAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddAssetResponse } as MsgAddAssetResponse;
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

  fromJSON(_: any): MsgAddAssetResponse {
    const message = { ...baseMsgAddAssetResponse } as MsgAddAssetResponse;
    return message;
  },

  toJSON(_: MsgAddAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse {
    const message = { ...baseMsgAddAssetResponse } as MsgAddAssetResponse;
    return message;
  },
};

const baseMsgUpdateAssetRequest: object = {
  from: "",
  id: Long.UZERO,
  name: "",
  denom: "",
  decimals: Long.ZERO,
};

export const MsgUpdateAssetRequest = {
  encode(
    message: MsgUpdateAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(40).int64(message.decimals);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAssetRequest } as MsgUpdateAssetRequest;
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
          message.name = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.decimals = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAssetRequest {
    const message = { ...baseMsgUpdateAssetRequest } as MsgUpdateAssetRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = Long.fromString(object.decimals);
    } else {
      message.decimals = Long.ZERO;
    }
    return message;
  },

  toJSON(message: MsgUpdateAssetRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || Long.ZERO).toString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateAssetRequest>
  ): MsgUpdateAssetRequest {
    const message = { ...baseMsgUpdateAssetRequest } as MsgUpdateAssetRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals as Long;
    } else {
      message.decimals = Long.ZERO;
    }
    return message;
  },
};

const baseMsgUpdateAssetResponse: object = {};

export const MsgUpdateAssetResponse = {
  encode(
    _: MsgUpdateAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
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

  fromJSON(_: any): MsgUpdateAssetResponse {
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    return message;
  },
};

const baseMsgAddPairRequest: object = {
  from: "",
  assetIn: Long.UZERO,
  assetOut: Long.UZERO,
  liquidationRatio: "",
};

export const MsgAddPairRequest = {
  encode(
    message: MsgAddPairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }
    if (!message.assetOut.isZero()) {
      writer.uint32(24).uint64(message.assetOut);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(34).string(message.liquidationRatio);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPairRequest } as MsgAddPairRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.assetIn = reader.uint64() as Long;
          break;
        case 3:
          message.assetOut = reader.uint64() as Long;
          break;
        case 4:
          message.liquidationRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPairRequest {
    const message = { ...baseMsgAddPairRequest } as MsgAddPairRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.assetIn !== undefined && object.assetIn !== null) {
      message.assetIn = Long.fromString(object.assetIn);
    } else {
      message.assetIn = Long.UZERO;
    }
    if (object.assetOut !== undefined && object.assetOut !== null) {
      message.assetOut = Long.fromString(object.assetOut);
    } else {
      message.assetOut = Long.UZERO;
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = String(object.liquidationRatio);
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },

  toJSON(message: MsgAddPairRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.assetIn !== undefined &&
      (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.assetOut !== undefined &&
      (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.liquidationRatio !== undefined &&
      (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddPairRequest>): MsgAddPairRequest {
    const message = { ...baseMsgAddPairRequest } as MsgAddPairRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.assetIn !== undefined && object.assetIn !== null) {
      message.assetIn = object.assetIn as Long;
    } else {
      message.assetIn = Long.UZERO;
    }
    if (object.assetOut !== undefined && object.assetOut !== null) {
      message.assetOut = object.assetOut as Long;
    } else {
      message.assetOut = Long.UZERO;
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = object.liquidationRatio;
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },
};

const baseMsgAddPairResponse: object = {};

export const MsgAddPairResponse = {
  encode(
    _: MsgAddPairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPairResponse } as MsgAddPairResponse;
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

  fromJSON(_: any): MsgAddPairResponse {
    const message = { ...baseMsgAddPairResponse } as MsgAddPairResponse;
    return message;
  },

  toJSON(_: MsgAddPairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddPairResponse>): MsgAddPairResponse {
    const message = { ...baseMsgAddPairResponse } as MsgAddPairResponse;
    return message;
  },
};

const baseMsgUpdatePairRequest: object = {
  from: "",
  id: Long.UZERO,
  liquidationRatio: "",
};

export const MsgUpdatePairRequest = {
  encode(
    message: MsgUpdatePairRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.liquidationRatio !== "") {
      writer.uint32(26).string(message.liquidationRatio);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePairRequest } as MsgUpdatePairRequest;
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
          message.liquidationRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePairRequest {
    const message = { ...baseMsgUpdatePairRequest } as MsgUpdatePairRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = String(object.liquidationRatio);
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePairRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.liquidationRatio !== undefined &&
      (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePairRequest>): MsgUpdatePairRequest {
    const message = { ...baseMsgUpdatePairRequest } as MsgUpdatePairRequest;
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (
      object.liquidationRatio !== undefined &&
      object.liquidationRatio !== null
    ) {
      message.liquidationRatio = object.liquidationRatio;
    } else {
      message.liquidationRatio = "";
    }
    return message;
  },
};

const baseMsgUpdatePairResponse: object = {};

export const MsgUpdatePairResponse = {
  encode(
    _: MsgUpdatePairResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdatePairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePairResponse } as MsgUpdatePairResponse;
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

  fromJSON(_: any): MsgUpdatePairResponse {
    const message = { ...baseMsgUpdatePairResponse } as MsgUpdatePairResponse;
    return message;
  },

  toJSON(_: MsgUpdatePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePairResponse>): MsgUpdatePairResponse {
    const message = { ...baseMsgUpdatePairResponse } as MsgUpdatePairResponse;
    return message;
  },
};

export interface MsgService {
  MsgAddAsset(request: MsgAddAssetRequest): Promise<MsgAddAssetResponse>;
  MsgUpdateAsset(
    request: MsgUpdateAssetRequest
  ): Promise<MsgUpdateAssetResponse>;
  MsgAddPair(request: MsgAddPairRequest): Promise<MsgAddPairResponse>;
  MsgUpdatePair(request: MsgUpdatePairRequest): Promise<MsgUpdatePairResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgAddAsset = this.MsgAddAsset.bind(this);
    this.MsgUpdateAsset = this.MsgUpdateAsset.bind(this);
    this.MsgAddPair = this.MsgAddPair.bind(this);
    this.MsgUpdatePair = this.MsgUpdatePair.bind(this);
  }
  MsgAddAsset(request: MsgAddAssetRequest): Promise<MsgAddAssetResponse> {
    const data = MsgAddAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.MsgService",
      "MsgAddAsset",
      data
    );
    return promise.then((data) =>
      MsgAddAssetResponse.decode(new _m0.Reader(data))
    );
  }

  MsgUpdateAsset(
    request: MsgUpdateAssetRequest
  ): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.MsgService",
      "MsgUpdateAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateAssetResponse.decode(new _m0.Reader(data))
    );
  }

  MsgAddPair(request: MsgAddPairRequest): Promise<MsgAddPairResponse> {
    const data = MsgAddPairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.MsgService",
      "MsgAddPair",
      data
    );
    return promise.then((data) =>
      MsgAddPairResponse.decode(new _m0.Reader(data))
    );
  }

  MsgUpdatePair(request: MsgUpdatePairRequest): Promise<MsgUpdatePairResponse> {
    const data = MsgUpdatePairRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.asset.v1beta1.MsgService",
      "MsgUpdatePair",
      data
    );
    return promise.then((data) =>
      MsgUpdatePairResponse.decode(new _m0.Reader(data))
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
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
