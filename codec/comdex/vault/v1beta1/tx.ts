/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.vault.v1beta1";

export interface MsgCreateRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  amountIn: string;
  amountOut: string;
}

export interface MsgCreateResponse {}

export interface MsgDepositRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  userVaultId: Long;
  amount: string;
}

export interface MsgDepositResponse {}

export interface MsgWithdrawRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  userVaultId: Long;
  amount: string;
}

export interface MsgWithdrawResponse {}

export interface MsgDrawRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  userVaultId: Long;
  amount: string;
}

export interface MsgDrawResponse {}

export interface MsgRepayRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  userVaultId: Long;
  amount: string;
}

export interface MsgRepayResponse {}

export interface MsgCloseRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  userVaultId: Long;
}

export interface MsgCloseResponse {}

export interface MsgDepositAndDrawRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  userVaultId: Long;
  amount: string;
}

export interface MsgDepositAndDrawResponse {}

export interface MsgCreateStableMintRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  amount: string;
}

export interface MsgCreateStableMintResponse {}

export interface MsgDepositStableMintRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  amount: string;
  stableVaultId: Long;
}

export interface MsgDepositStableMintResponse {}

export interface MsgWithdrawStableMintRequest {
  from: string;
  appId: Long;
  extendedPairVaultId: Long;
  amount: string;
  stableVaultId: Long;
}

export interface MsgWithdrawStableMintResponse {}

export interface MsgVaultInterestCalcRequest {
  from: string;
  appId: Long;
  userVaultId: Long;
}

export interface MsgVaultInterestCalcResponse {}

function createBaseMsgCreateRequest(): MsgCreateRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    amountIn: "",
    amountOut: "",
  };
}

export const MsgCreateRequest = {
  encode(
    message: MsgCreateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(42).string(message.amountOut);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.amountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
    };
  },

  toJSON(message: MsgCreateRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRequest>, I>>(
    object: I
  ): MsgCreateRequest {
    const message = createBaseMsgCreateRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {};
}

export const MsgCreateResponse = {
  encode(
    _: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
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

  fromJSON(_: any): MsgCreateResponse {
    return {};
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(
    _: I
  ): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    return message;
  },
};

function createBaseMsgDepositRequest(): MsgDepositRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    userVaultId: Long.UZERO,
    amount: "",
  };
}

export const MsgDepositRequest = {
  encode(
    message: MsgDepositRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(32).uint64(message.userVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.userVaultId = reader.uint64() as Long;
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgDepositRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositRequest>, I>>(
    object: I
  ): MsgDepositRequest {
    const message = createBaseMsgDepositRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
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

function createBaseMsgWithdrawRequest(): MsgWithdrawRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    userVaultId: Long.UZERO,
    amount: "",
  };
}

export const MsgWithdrawRequest = {
  encode(
    message: MsgWithdrawRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(32).uint64(message.userVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.userVaultId = reader.uint64() as Long;
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgWithdrawRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRequest>, I>>(
    object: I
  ): MsgWithdrawRequest {
    const message = createBaseMsgWithdrawRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
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

function createBaseMsgDrawRequest(): MsgDrawRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    userVaultId: Long.UZERO,
    amount: "",
  };
}

export const MsgDrawRequest = {
  encode(
    message: MsgDrawRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(32).uint64(message.userVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrawRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.userVaultId = reader.uint64() as Long;
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrawRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgDrawRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDrawRequest>, I>>(
    object: I
  ): MsgDrawRequest {
    const message = createBaseMsgDrawRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
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

function createBaseMsgRepayRequest(): MsgRepayRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    userVaultId: Long.UZERO,
    amount: "",
  };
}

export const MsgRepayRequest = {
  encode(
    message: MsgRepayRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(32).uint64(message.userVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRepayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRepayRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.userVaultId = reader.uint64() as Long;
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepayRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgRepayRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRepayRequest>, I>>(
    object: I
  ): MsgRepayRequest {
    const message = createBaseMsgRepayRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
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

function createBaseMsgCloseRequest(): MsgCloseRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    userVaultId: Long.UZERO,
  };
}

export const MsgCloseRequest = {
  encode(
    message: MsgCloseRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(32).uint64(message.userVaultId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.userVaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseRequest>, I>>(
    object: I
  ): MsgCloseRequest {
    const message = createBaseMsgCloseRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {};
}

export const MsgCloseResponse = {
  encode(
    _: MsgCloseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseResponse();
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

  fromJSON(_: any): MsgCloseResponse {
    return {};
  },

  toJSON(_: MsgCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseResponse>, I>>(
    _: I
  ): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  },
};

function createBaseMsgDepositAndDrawRequest(): MsgDepositAndDrawRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    userVaultId: Long.UZERO,
    amount: "",
  };
}

export const MsgDepositAndDrawRequest = {
  encode(
    message: MsgDepositAndDrawRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(32).uint64(message.userVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositAndDrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAndDrawRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.userVaultId = reader.uint64() as Long;
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositAndDrawRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgDepositAndDrawRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositAndDrawRequest>, I>>(
    object: I
  ): MsgDepositAndDrawRequest {
    const message = createBaseMsgDepositAndDrawRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgDepositAndDrawResponse(): MsgDepositAndDrawResponse {
  return {};
}

export const MsgDepositAndDrawResponse = {
  encode(
    _: MsgDepositAndDrawResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositAndDrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAndDrawResponse();
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

  fromJSON(_: any): MsgDepositAndDrawResponse {
    return {};
  },

  toJSON(_: MsgDepositAndDrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositAndDrawResponse>, I>>(
    _: I
  ): MsgDepositAndDrawResponse {
    const message = createBaseMsgDepositAndDrawResponse();
    return message;
  },
};

function createBaseMsgCreateStableMintRequest(): MsgCreateStableMintRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    amount: "",
  };
}

export const MsgCreateStableMintRequest = {
  encode(
    message: MsgCreateStableMintRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateStableMintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableMintRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStableMintRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgCreateStableMintRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStableMintRequest>, I>>(
    object: I
  ): MsgCreateStableMintRequest {
    const message = createBaseMsgCreateStableMintRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgCreateStableMintResponse(): MsgCreateStableMintResponse {
  return {};
}

export const MsgCreateStableMintResponse = {
  encode(
    _: MsgCreateStableMintResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateStableMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateStableMintResponse();
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

  fromJSON(_: any): MsgCreateStableMintResponse {
    return {};
  },

  toJSON(_: MsgCreateStableMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateStableMintResponse>, I>>(
    _: I
  ): MsgCreateStableMintResponse {
    const message = createBaseMsgCreateStableMintResponse();
    return message;
  },
};

function createBaseMsgDepositStableMintRequest(): MsgDepositStableMintRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    amount: "",
    stableVaultId: Long.UZERO,
  };
}

export const MsgDepositStableMintRequest = {
  encode(
    message: MsgDepositStableMintRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (!message.stableVaultId.isZero()) {
      writer.uint32(40).uint64(message.stableVaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositStableMintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositStableMintRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.stableVaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositStableMintRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      stableVaultId: isSet(object.stableVaultId)
        ? Long.fromValue(object.stableVaultId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgDepositStableMintRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.stableVaultId !== undefined &&
      (obj.stableVaultId = (message.stableVaultId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositStableMintRequest>, I>>(
    object: I
  ): MsgDepositStableMintRequest {
    const message = createBaseMsgDepositStableMintRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    message.stableVaultId =
      object.stableVaultId !== undefined && object.stableVaultId !== null
        ? Long.fromValue(object.stableVaultId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgDepositStableMintResponse(): MsgDepositStableMintResponse {
  return {};
}

export const MsgDepositStableMintResponse = {
  encode(
    _: MsgDepositStableMintResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositStableMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositStableMintResponse();
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

  fromJSON(_: any): MsgDepositStableMintResponse {
    return {};
  },

  toJSON(_: MsgDepositStableMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositStableMintResponse>, I>>(
    _: I
  ): MsgDepositStableMintResponse {
    const message = createBaseMsgDepositStableMintResponse();
    return message;
  },
};

function createBaseMsgWithdrawStableMintRequest(): MsgWithdrawStableMintRequest {
  return {
    from: "",
    appId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    amount: "",
    stableVaultId: Long.UZERO,
  };
}

export const MsgWithdrawStableMintRequest = {
  encode(
    message: MsgWithdrawStableMintRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(24).uint64(message.extendedPairVaultId);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (!message.stableVaultId.isZero()) {
      writer.uint32(40).uint64(message.stableVaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawStableMintRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawStableMintRequest();
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
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.stableVaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawStableMintRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId)
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      stableVaultId: isSet(object.stableVaultId)
        ? Long.fromValue(object.stableVaultId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgWithdrawStableMintRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (
        message.extendedPairVaultId || Long.UZERO
      ).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.stableVaultId !== undefined &&
      (obj.stableVaultId = (message.stableVaultId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawStableMintRequest>, I>>(
    object: I
  ): MsgWithdrawStableMintRequest {
    const message = createBaseMsgWithdrawStableMintRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.extendedPairVaultId =
      object.extendedPairVaultId !== undefined &&
      object.extendedPairVaultId !== null
        ? Long.fromValue(object.extendedPairVaultId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    message.stableVaultId =
      object.stableVaultId !== undefined && object.stableVaultId !== null
        ? Long.fromValue(object.stableVaultId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWithdrawStableMintResponse(): MsgWithdrawStableMintResponse {
  return {};
}

export const MsgWithdrawStableMintResponse = {
  encode(
    _: MsgWithdrawStableMintResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawStableMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawStableMintResponse();
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

  fromJSON(_: any): MsgWithdrawStableMintResponse {
    return {};
  },

  toJSON(_: MsgWithdrawStableMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawStableMintResponse>, I>>(
    _: I
  ): MsgWithdrawStableMintResponse {
    const message = createBaseMsgWithdrawStableMintResponse();
    return message;
  },
};

function createBaseMsgVaultInterestCalcRequest(): MsgVaultInterestCalcRequest {
  return { from: "", appId: Long.UZERO, userVaultId: Long.UZERO };
}

export const MsgVaultInterestCalcRequest = {
  encode(
    message: MsgVaultInterestCalcRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.userVaultId.isZero()) {
      writer.uint32(24).uint64(message.userVaultId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgVaultInterestCalcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVaultInterestCalcRequest();
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
          message.userVaultId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVaultInterestCalcRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      userVaultId: isSet(object.userVaultId)
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgVaultInterestCalcRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.userVaultId !== undefined &&
      (obj.userVaultId = (message.userVaultId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVaultInterestCalcRequest>, I>>(
    object: I
  ): MsgVaultInterestCalcRequest {
    const message = createBaseMsgVaultInterestCalcRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.userVaultId =
      object.userVaultId !== undefined && object.userVaultId !== null
        ? Long.fromValue(object.userVaultId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgVaultInterestCalcResponse(): MsgVaultInterestCalcResponse {
  return {};
}

export const MsgVaultInterestCalcResponse = {
  encode(
    _: MsgVaultInterestCalcResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgVaultInterestCalcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVaultInterestCalcResponse();
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

  fromJSON(_: any): MsgVaultInterestCalcResponse {
    return {};
  },

  toJSON(_: MsgVaultInterestCalcResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVaultInterestCalcResponse>, I>>(
    _: I
  ): MsgVaultInterestCalcResponse {
    const message = createBaseMsgVaultInterestCalcResponse();
    return message;
  },
};

export interface Msg {
  MsgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse>;
  MsgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse>;
  MsgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse>;
  MsgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse>;
  MsgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse>;
  MsgClose(request: MsgCloseRequest): Promise<MsgCloseResponse>;
  MsgDepositAndDraw(
    request: MsgDepositAndDrawRequest
  ): Promise<MsgDepositAndDrawResponse>;
  MsgCreateStableMint(
    request: MsgCreateStableMintRequest
  ): Promise<MsgCreateStableMintResponse>;
  MsgDepositStableMint(
    request: MsgDepositStableMintRequest
  ): Promise<MsgDepositStableMintResponse>;
  MsgWithdrawStableMint(
    request: MsgWithdrawStableMintRequest
  ): Promise<MsgWithdrawStableMintResponse>;
  MsgVaultInterestCalc(
    request: MsgVaultInterestCalcRequest
  ): Promise<MsgVaultInterestCalcResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgCreate = this.MsgCreate.bind(this);
    this.MsgDeposit = this.MsgDeposit.bind(this);
    this.MsgWithdraw = this.MsgWithdraw.bind(this);
    this.MsgDraw = this.MsgDraw.bind(this);
    this.MsgRepay = this.MsgRepay.bind(this);
    this.MsgClose = this.MsgClose.bind(this);
    this.MsgDepositAndDraw = this.MsgDepositAndDraw.bind(this);
    this.MsgCreateStableMint = this.MsgCreateStableMint.bind(this);
    this.MsgDepositStableMint = this.MsgDepositStableMint.bind(this);
    this.MsgWithdrawStableMint = this.MsgWithdrawStableMint.bind(this);
    this.MsgVaultInterestCalc = this.MsgVaultInterestCalc.bind(this);
  }
  MsgCreate(request: MsgCreateRequest): Promise<MsgCreateResponse> {
    const data = MsgCreateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgCreate",
      data
    );
    return promise.then((data) =>
      MsgCreateResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDeposit(request: MsgDepositRequest): Promise<MsgDepositResponse> {
    const data = MsgDepositRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgDeposit",
      data
    );
    return promise.then((data) =>
      MsgDepositResponse.decode(new _m0.Reader(data))
    );
  }

  MsgWithdraw(request: MsgWithdrawRequest): Promise<MsgWithdrawResponse> {
    const data = MsgWithdrawRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgWithdraw",
      data
    );
    return promise.then((data) =>
      MsgWithdrawResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDraw(request: MsgDrawRequest): Promise<MsgDrawResponse> {
    const data = MsgDrawRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgDraw",
      data
    );
    return promise.then((data) => MsgDrawResponse.decode(new _m0.Reader(data)));
  }

  MsgRepay(request: MsgRepayRequest): Promise<MsgRepayResponse> {
    const data = MsgRepayRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgRepay",
      data
    );
    return promise.then((data) =>
      MsgRepayResponse.decode(new _m0.Reader(data))
    );
  }

  MsgClose(request: MsgCloseRequest): Promise<MsgCloseResponse> {
    const data = MsgCloseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgClose",
      data
    );
    return promise.then((data) =>
      MsgCloseResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDepositAndDraw(
    request: MsgDepositAndDrawRequest
  ): Promise<MsgDepositAndDrawResponse> {
    const data = MsgDepositAndDrawRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgDepositAndDraw",
      data
    );
    return promise.then((data) =>
      MsgDepositAndDrawResponse.decode(new _m0.Reader(data))
    );
  }

  MsgCreateStableMint(
    request: MsgCreateStableMintRequest
  ): Promise<MsgCreateStableMintResponse> {
    const data = MsgCreateStableMintRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgCreateStableMint",
      data
    );
    return promise.then((data) =>
      MsgCreateStableMintResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDepositStableMint(
    request: MsgDepositStableMintRequest
  ): Promise<MsgDepositStableMintResponse> {
    const data = MsgDepositStableMintRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgDepositStableMint",
      data
    );
    return promise.then((data) =>
      MsgDepositStableMintResponse.decode(new _m0.Reader(data))
    );
  }

  MsgWithdrawStableMint(
    request: MsgWithdrawStableMintRequest
  ): Promise<MsgWithdrawStableMintResponse> {
    const data = MsgWithdrawStableMintRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgWithdrawStableMint",
      data
    );
    return promise.then((data) =>
      MsgWithdrawStableMintResponse.decode(new _m0.Reader(data))
    );
  }

  MsgVaultInterestCalc(
    request: MsgVaultInterestCalcRequest
  ): Promise<MsgVaultInterestCalcResponse> {
    const data = MsgVaultInterestCalcRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.vault.v1beta1.Msg",
      "MsgVaultInterestCalc",
      data
    );
    return promise.then((data) =>
      MsgVaultInterestCalcResponse.decode(new _m0.Reader(data))
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
