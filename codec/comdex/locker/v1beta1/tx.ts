/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.locker.v1beta1";

export interface MsgCreateLockerRequest {
  depositor: string;
  amount: string;
  assetId: Long;
  appId: Long;
}

export interface MsgCreateLockerResponse {}

export interface MsgAddWhiteListedAssetRequest {
  from: string;
  appId: Long;
  assetId: Long;
}

export interface MsgAddWhiteListedAssetResponse {}

export interface MsgDepositAssetRequest {
  depositor: string;
  lockerId: Long;
  amount: string;
  assetId: Long;
  appId: Long;
}

export interface MsgDepositAssetResponse {}

export interface MsgWithdrawAssetRequest {
  depositor: string;
  lockerId: Long;
  amount: string;
  assetId: Long;
  appId: Long;
}

export interface MsgWithdrawAssetResponse {}

export interface MsgCloseLockerRequest {
  depositor: string;
  appId: Long;
  assetId: Long;
  lockerId: Long;
}

export interface MsgCloseLockerResponse {}

export interface MsgLockerRewardCalcRequest {
  from: string;
  appId: Long;
  lockerId: Long;
}

export interface MsgLockerRewardCalcResponse {}

function createBaseMsgCreateLockerRequest(): MsgCreateLockerRequest {
  return { depositor: "", amount: "", assetId: Long.UZERO, appId: Long.UZERO };
}

export const MsgCreateLockerRequest = {
  encode(
    message: MsgCreateLockerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(32).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateLockerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLockerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgCreateLockerRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateLockerRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.amount !== undefined && (obj.amount = message.amount);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLockerRequest>, I>>(
    object: I
  ): MsgCreateLockerRequest {
    const message = createBaseMsgCreateLockerRequest();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateLockerResponse(): MsgCreateLockerResponse {
  return {};
}

export const MsgCreateLockerResponse = {
  encode(
    _: MsgCreateLockerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateLockerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLockerResponse();
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

  fromJSON(_: any): MsgCreateLockerResponse {
    return {};
  },

  toJSON(_: MsgCreateLockerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLockerResponse>, I>>(
    _: I
  ): MsgCreateLockerResponse {
    const message = createBaseMsgCreateLockerResponse();
    return message;
  },
};

function createBaseMsgAddWhiteListedAssetRequest(): MsgAddWhiteListedAssetRequest {
  return { from: "", appId: Long.UZERO, assetId: Long.UZERO };
}

export const MsgAddWhiteListedAssetRequest = {
  encode(
    message: MsgAddWhiteListedAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddWhiteListedAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWhiteListedAssetRequest();
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
          message.assetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddWhiteListedAssetRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgAddWhiteListedAssetRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddWhiteListedAssetRequest>, I>>(
    object: I
  ): MsgAddWhiteListedAssetRequest {
    const message = createBaseMsgAddWhiteListedAssetRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgAddWhiteListedAssetResponse(): MsgAddWhiteListedAssetResponse {
  return {};
}

export const MsgAddWhiteListedAssetResponse = {
  encode(
    _: MsgAddWhiteListedAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddWhiteListedAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWhiteListedAssetResponse();
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

  fromJSON(_: any): MsgAddWhiteListedAssetResponse {
    return {};
  },

  toJSON(_: MsgAddWhiteListedAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddWhiteListedAssetResponse>, I>>(
    _: I
  ): MsgAddWhiteListedAssetResponse {
    const message = createBaseMsgAddWhiteListedAssetResponse();
    return message;
  },
};

function createBaseMsgDepositAssetRequest(): MsgDepositAssetRequest {
  return {
    depositor: "",
    lockerId: Long.UZERO,
    amount: "",
    assetId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const MsgDepositAssetRequest = {
  encode(
    message: MsgDepositAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (!message.lockerId.isZero()) {
      writer.uint32(16).uint64(message.lockerId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(40).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.lockerId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.assetId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgDepositAssetRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgDepositAssetRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositAssetRequest>, I>>(
    object: I
  ): MsgDepositAssetRequest {
    const message = createBaseMsgDepositAssetRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgDepositAssetResponse(): MsgDepositAssetResponse {
  return {};
}

export const MsgDepositAssetResponse = {
  encode(
    _: MsgDepositAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDepositAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositAssetResponse();
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

  fromJSON(_: any): MsgDepositAssetResponse {
    return {};
  },

  toJSON(_: MsgDepositAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositAssetResponse>, I>>(
    _: I
  ): MsgDepositAssetResponse {
    const message = createBaseMsgDepositAssetResponse();
    return message;
  },
};

function createBaseMsgWithdrawAssetRequest(): MsgWithdrawAssetRequest {
  return {
    depositor: "",
    lockerId: Long.UZERO,
    amount: "",
    assetId: Long.UZERO,
    appId: Long.UZERO,
  };
}

export const MsgWithdrawAssetRequest = {
  encode(
    message: MsgWithdrawAssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (!message.lockerId.isZero()) {
      writer.uint32(16).uint64(message.lockerId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(32).uint64(message.assetId);
    }
    if (!message.appId.isZero()) {
      writer.uint32(40).uint64(message.appId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.lockerId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.assetId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgWithdrawAssetRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
    };
  },

  toJSON(message: MsgWithdrawAssetRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAssetRequest>, I>>(
    object: I
  ): MsgWithdrawAssetRequest {
    const message = createBaseMsgWithdrawAssetRequest();
    message.depositor = object.depositor ?? "";
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    message.amount = object.amount ?? "";
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgWithdrawAssetResponse(): MsgWithdrawAssetResponse {
  return {};
}

export const MsgWithdrawAssetResponse = {
  encode(
    _: MsgWithdrawAssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAssetResponse();
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

  fromJSON(_: any): MsgWithdrawAssetResponse {
    return {};
  },

  toJSON(_: MsgWithdrawAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawAssetResponse>, I>>(
    _: I
  ): MsgWithdrawAssetResponse {
    const message = createBaseMsgWithdrawAssetResponse();
    return message;
  },
};

function createBaseMsgCloseLockerRequest(): MsgCloseLockerRequest {
  return {
    depositor: "",
    appId: Long.UZERO,
    assetId: Long.UZERO,
    lockerId: Long.UZERO,
  };
}

export const MsgCloseLockerRequest = {
  encode(
    message: MsgCloseLockerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(24).uint64(message.assetId);
    }
    if (!message.lockerId.isZero()) {
      writer.uint32(32).uint64(message.lockerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseLockerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLockerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.assetId = reader.uint64() as Long;
          break;
        case 4:
          message.lockerId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLockerRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseLockerRequest): unknown {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLockerRequest>, I>>(
    object: I
  ): MsgCloseLockerRequest {
    const message = createBaseMsgCloseLockerRequest();
    message.depositor = object.depositor ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgCloseLockerResponse(): MsgCloseLockerResponse {
  return {};
}

export const MsgCloseLockerResponse = {
  encode(
    _: MsgCloseLockerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCloseLockerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLockerResponse();
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

  fromJSON(_: any): MsgCloseLockerResponse {
    return {};
  },

  toJSON(_: MsgCloseLockerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLockerResponse>, I>>(
    _: I
  ): MsgCloseLockerResponse {
    const message = createBaseMsgCloseLockerResponse();
    return message;
  },
};

function createBaseMsgLockerRewardCalcRequest(): MsgLockerRewardCalcRequest {
  return { from: "", appId: Long.UZERO, lockerId: Long.UZERO };
}

export const MsgLockerRewardCalcRequest = {
  encode(
    message: MsgLockerRewardCalcRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.lockerId.isZero()) {
      writer.uint32(24).uint64(message.lockerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLockerRewardCalcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockerRewardCalcRequest();
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
          message.lockerId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLockerRewardCalcRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      lockerId: isSet(object.lockerId)
        ? Long.fromValue(object.lockerId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgLockerRewardCalcRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.lockerId !== undefined &&
      (obj.lockerId = (message.lockerId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockerRewardCalcRequest>, I>>(
    object: I
  ): MsgLockerRewardCalcRequest {
    const message = createBaseMsgLockerRewardCalcRequest();
    message.from = object.from ?? "";
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.lockerId =
      object.lockerId !== undefined && object.lockerId !== null
        ? Long.fromValue(object.lockerId)
        : Long.UZERO;
    return message;
  },
};

function createBaseMsgLockerRewardCalcResponse(): MsgLockerRewardCalcResponse {
  return {};
}

export const MsgLockerRewardCalcResponse = {
  encode(
    _: MsgLockerRewardCalcResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgLockerRewardCalcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockerRewardCalcResponse();
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

  fromJSON(_: any): MsgLockerRewardCalcResponse {
    return {};
  },

  toJSON(_: MsgLockerRewardCalcResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLockerRewardCalcResponse>, I>>(
    _: I
  ): MsgLockerRewardCalcResponse {
    const message = createBaseMsgLockerRewardCalcResponse();
    return message;
  },
};

/** For CLI Command & Proposals */
export interface Msg {
  MsgCreateLocker(
    request: MsgCreateLockerRequest
  ): Promise<MsgCreateLockerResponse>;
  MsgDepositAsset(
    request: MsgDepositAssetRequest
  ): Promise<MsgDepositAssetResponse>;
  MsgWithdrawAsset(
    request: MsgWithdrawAssetRequest
  ): Promise<MsgWithdrawAssetResponse>;
  MsgCloseLocker(
    request: MsgCloseLockerRequest
  ): Promise<MsgCloseLockerResponse>;
  MsgLockerRewardCalc(
    request: MsgLockerRewardCalcRequest
  ): Promise<MsgLockerRewardCalcResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MsgCreateLocker = this.MsgCreateLocker.bind(this);
    this.MsgDepositAsset = this.MsgDepositAsset.bind(this);
    this.MsgWithdrawAsset = this.MsgWithdrawAsset.bind(this);
    this.MsgCloseLocker = this.MsgCloseLocker.bind(this);
    this.MsgLockerRewardCalc = this.MsgLockerRewardCalc.bind(this);
  }
  MsgCreateLocker(
    request: MsgCreateLockerRequest
  ): Promise<MsgCreateLockerResponse> {
    const data = MsgCreateLockerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Msg",
      "MsgCreateLocker",
      data
    );
    return promise.then((data) =>
      MsgCreateLockerResponse.decode(new _m0.Reader(data))
    );
  }

  MsgDepositAsset(
    request: MsgDepositAssetRequest
  ): Promise<MsgDepositAssetResponse> {
    const data = MsgDepositAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Msg",
      "MsgDepositAsset",
      data
    );
    return promise.then((data) =>
      MsgDepositAssetResponse.decode(new _m0.Reader(data))
    );
  }

  MsgWithdrawAsset(
    request: MsgWithdrawAssetRequest
  ): Promise<MsgWithdrawAssetResponse> {
    const data = MsgWithdrawAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Msg",
      "MsgWithdrawAsset",
      data
    );
    return promise.then((data) =>
      MsgWithdrawAssetResponse.decode(new _m0.Reader(data))
    );
  }

  MsgCloseLocker(
    request: MsgCloseLockerRequest
  ): Promise<MsgCloseLockerResponse> {
    const data = MsgCloseLockerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Msg",
      "MsgCloseLocker",
      data
    );
    return promise.then((data) =>
      MsgCloseLockerResponse.decode(new _m0.Reader(data))
    );
  }

  MsgLockerRewardCalc(
    request: MsgLockerRewardCalcRequest
  ): Promise<MsgLockerRewardCalcResponse> {
    const data = MsgLockerRewardCalcRequest.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.locker.v1beta1.Msg",
      "MsgLockerRewardCalc",
      data
    );
    return promise.then((data) =>
      MsgLockerRewardCalcResponse.decode(new _m0.Reader(data))
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
