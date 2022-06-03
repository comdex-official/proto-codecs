/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FetchPriceCallData } from "./fetch_price";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.bandoracle.v1beta1";

export interface MsgFetchPriceData {
  creator: string;
  oracleScriptId: Long;
  sourceChannel: string;
  calldata?: FetchPriceCallData;
  askCount: Long;
  minCount: Long;
  feeLimit: Coin[];
  requestKey: string;
  prepareGas: Long;
  executeGas: Long;
  clientId: string;
}

export interface MsgFetchPriceDataResponse {}

function createBaseMsgFetchPriceData(): MsgFetchPriceData {
  return {
    creator: "",
    oracleScriptId: Long.UZERO,
    sourceChannel: "",
    calldata: undefined,
    askCount: Long.UZERO,
    minCount: Long.UZERO,
    feeLimit: [],
    requestKey: "",
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO,
    clientId: "",
  };
}

export const MsgFetchPriceData = {
  encode(
    message: MsgFetchPriceData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.oracleScriptId.isZero()) {
      writer.uint32(16).uint64(message.oracleScriptId);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }
    if (message.calldata !== undefined) {
      FetchPriceCallData.encode(
        message.calldata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.askCount.isZero()) {
      writer.uint32(40).uint64(message.askCount);
    }
    if (!message.minCount.isZero()) {
      writer.uint32(48).uint64(message.minCount);
    }
    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.requestKey !== "") {
      writer.uint32(66).string(message.requestKey);
    }
    if (!message.prepareGas.isZero()) {
      writer.uint32(72).uint64(message.prepareGas);
    }
    if (!message.executeGas.isZero()) {
      writer.uint32(80).uint64(message.executeGas);
    }
    if (message.clientId !== "") {
      writer.uint32(90).string(message.clientId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFetchPriceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.oracleScriptId = reader.uint64() as Long;
          break;
        case 3:
          message.sourceChannel = reader.string();
          break;
        case 4:
          message.calldata = FetchPriceCallData.decode(reader, reader.uint32());
          break;
        case 5:
          message.askCount = reader.uint64() as Long;
          break;
        case 6:
          message.minCount = reader.uint64() as Long;
          break;
        case 7:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.requestKey = reader.string();
          break;
        case 9:
          message.prepareGas = reader.uint64() as Long;
          break;
        case 10:
          message.executeGas = reader.uint64() as Long;
          break;
        case 11:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFetchPriceData {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      oracleScriptId: isSet(object.oracleScriptId)
        ? Long.fromString(object.oracleScriptId)
        : Long.UZERO,
      sourceChannel: isSet(object.sourceChannel)
        ? String(object.sourceChannel)
        : "",
      calldata: isSet(object.calldata)
        ? FetchPriceCallData.fromJSON(object.calldata)
        : undefined,
      askCount: isSet(object.askCount)
        ? Long.fromString(object.askCount)
        : Long.UZERO,
      minCount: isSet(object.minCount)
        ? Long.fromString(object.minCount)
        : Long.UZERO,
      feeLimit: Array.isArray(object?.feeLimit)
        ? object.feeLimit.map((e: any) => Coin.fromJSON(e))
        : [],
      requestKey: isSet(object.requestKey) ? String(object.requestKey) : "",
      prepareGas: isSet(object.prepareGas)
        ? Long.fromString(object.prepareGas)
        : Long.UZERO,
      executeGas: isSet(object.executeGas)
        ? Long.fromString(object.executeGas)
        : Long.UZERO,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
    };
  },

  toJSON(message: MsgFetchPriceData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.oracleScriptId !== undefined &&
      (obj.oracleScriptId = (message.oracleScriptId || Long.UZERO).toString());
    message.sourceChannel !== undefined &&
      (obj.sourceChannel = message.sourceChannel);
    message.calldata !== undefined &&
      (obj.calldata = message.calldata
        ? FetchPriceCallData.toJSON(message.calldata)
        : undefined);
    message.askCount !== undefined &&
      (obj.askCount = (message.askCount || Long.UZERO).toString());
    message.minCount !== undefined &&
      (obj.minCount = (message.minCount || Long.UZERO).toString());
    if (message.feeLimit) {
      obj.feeLimit = message.feeLimit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.feeLimit = [];
    }
    message.requestKey !== undefined && (obj.requestKey = message.requestKey);
    message.prepareGas !== undefined &&
      (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
    message.executeGas !== undefined &&
      (obj.executeGas = (message.executeGas || Long.UZERO).toString());
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFetchPriceData>, I>>(
    object: I
  ): MsgFetchPriceData {
    const message = createBaseMsgFetchPriceData();
    message.creator = object.creator ?? "";
    message.oracleScriptId =
      object.oracleScriptId !== undefined && object.oracleScriptId !== null
        ? Long.fromValue(object.oracleScriptId)
        : Long.UZERO;
    message.sourceChannel = object.sourceChannel ?? "";
    message.calldata =
      object.calldata !== undefined && object.calldata !== null
        ? FetchPriceCallData.fromPartial(object.calldata)
        : undefined;
    message.askCount =
      object.askCount !== undefined && object.askCount !== null
        ? Long.fromValue(object.askCount)
        : Long.UZERO;
    message.minCount =
      object.minCount !== undefined && object.minCount !== null
        ? Long.fromValue(object.minCount)
        : Long.UZERO;
    message.feeLimit = object.feeLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.requestKey = object.requestKey ?? "";
    message.prepareGas =
      object.prepareGas !== undefined && object.prepareGas !== null
        ? Long.fromValue(object.prepareGas)
        : Long.UZERO;
    message.executeGas =
      object.executeGas !== undefined && object.executeGas !== null
        ? Long.fromValue(object.executeGas)
        : Long.UZERO;
    message.clientId = object.clientId ?? "";
    return message;
  },
};

function createBaseMsgFetchPriceDataResponse(): MsgFetchPriceDataResponse {
  return {};
}

export const MsgFetchPriceDataResponse = {
  encode(
    _: MsgFetchPriceDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFetchPriceDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFetchPriceDataResponse();
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

  fromJSON(_: any): MsgFetchPriceDataResponse {
    return {};
  },

  toJSON(_: MsgFetchPriceDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFetchPriceDataResponse>, I>>(
    _: I
  ): MsgFetchPriceDataResponse {
    const message = createBaseMsgFetchPriceDataResponse();
    return message;
  },
};

export interface Msg {
  FetchPriceData(
    request: MsgFetchPriceData
  ): Promise<MsgFetchPriceDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FetchPriceData = this.FetchPriceData.bind(this);
  }
  FetchPriceData(
    request: MsgFetchPriceData
  ): Promise<MsgFetchPriceDataResponse> {
    const data = MsgFetchPriceData.encode(request).finish();
    const promise = this.rpc.request(
      "comdex.bandoracle.v1beta1.Msg",
      "FetchPriceData",
      data
    );
    return promise.then((data) =>
      MsgFetchPriceDataResponse.decode(new _m0.Reader(data))
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
