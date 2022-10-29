/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/auction/v1beta1/params";
import {
  SurplusAuction,
  DebtAuction,
  DutchAuction,
  ProtocolStatistics,
  AuctionParams,
} from "../../../comdex/auction/v1beta1/auction";

export const protobufPackage = "comdex.auction.v1beta1";

export interface GenesisState {
  surplusAuction: SurplusAuction[];
  debtAuction: DebtAuction[];
  dutchAuction: DutchAuction[];
  protocolStatistics: ProtocolStatistics[];
  auctionParams: AuctionParams[];
  params?: Params;
  UserBiddingID: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    surplusAuction: [],
    debtAuction: [],
    dutchAuction: [],
    protocolStatistics: [],
    auctionParams: [],
    params: undefined,
    UserBiddingID: Long.UZERO,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.surplusAuction) {
      SurplusAuction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.debtAuction) {
      DebtAuction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dutchAuction) {
      DutchAuction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.protocolStatistics) {
      ProtocolStatistics.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.auctionParams) {
      AuctionParams.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(50).fork()).ldelim();
    }
    if (!message.UserBiddingID.isZero()) {
      writer.uint32(56).uint64(message.UserBiddingID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.surplusAuction.push(
            SurplusAuction.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.debtAuction.push(DebtAuction.decode(reader, reader.uint32()));
          break;
        case 3:
          message.dutchAuction.push(
            DutchAuction.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.protocolStatistics.push(
            ProtocolStatistics.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.auctionParams.push(
            AuctionParams.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 7:
          message.UserBiddingID = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      surplusAuction: Array.isArray(object?.surplusAuction)
        ? object.surplusAuction.map((e: any) => SurplusAuction.fromJSON(e))
        : [],
      debtAuction: Array.isArray(object?.debtAuction)
        ? object.debtAuction.map((e: any) => DebtAuction.fromJSON(e))
        : [],
      dutchAuction: Array.isArray(object?.dutchAuction)
        ? object.dutchAuction.map((e: any) => DutchAuction.fromJSON(e))
        : [],
      protocolStatistics: Array.isArray(object?.protocolStatistics)
        ? object.protocolStatistics.map((e: any) =>
            ProtocolStatistics.fromJSON(e)
          )
        : [],
      auctionParams: Array.isArray(object?.auctionParams)
        ? object.auctionParams.map((e: any) => AuctionParams.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      UserBiddingID: isSet(object.UserBiddingID)
        ? Long.fromValue(object.UserBiddingID)
        : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.surplusAuction) {
      obj.surplusAuction = message.surplusAuction.map((e) =>
        e ? SurplusAuction.toJSON(e) : undefined
      );
    } else {
      obj.surplusAuction = [];
    }
    if (message.debtAuction) {
      obj.debtAuction = message.debtAuction.map((e) =>
        e ? DebtAuction.toJSON(e) : undefined
      );
    } else {
      obj.debtAuction = [];
    }
    if (message.dutchAuction) {
      obj.dutchAuction = message.dutchAuction.map((e) =>
        e ? DutchAuction.toJSON(e) : undefined
      );
    } else {
      obj.dutchAuction = [];
    }
    if (message.protocolStatistics) {
      obj.protocolStatistics = message.protocolStatistics.map((e) =>
        e ? ProtocolStatistics.toJSON(e) : undefined
      );
    } else {
      obj.protocolStatistics = [];
    }
    if (message.auctionParams) {
      obj.auctionParams = message.auctionParams.map((e) =>
        e ? AuctionParams.toJSON(e) : undefined
      );
    } else {
      obj.auctionParams = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.UserBiddingID !== undefined &&
      (obj.UserBiddingID = (message.UserBiddingID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.surplusAuction =
      object.surplusAuction?.map((e) => SurplusAuction.fromPartial(e)) || [];
    message.debtAuction =
      object.debtAuction?.map((e) => DebtAuction.fromPartial(e)) || [];
    message.dutchAuction =
      object.dutchAuction?.map((e) => DutchAuction.fromPartial(e)) || [];
    message.protocolStatistics =
      object.protocolStatistics?.map((e) =>
        ProtocolStatistics.fromPartial(e)
      ) || [];
    message.auctionParams =
      object.auctionParams?.map((e) => AuctionParams.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.UserBiddingID =
      object.UserBiddingID !== undefined && object.UserBiddingID !== null
        ? Long.fromValue(object.UserBiddingID)
        : Long.UZERO;
    return message;
  },
};

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
