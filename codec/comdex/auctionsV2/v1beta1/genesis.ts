/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Auction } from "./auction";
import { AuctionFeesCollectionFromLimitBidTx, AuctionParams } from "./bid";
import { Params } from "./params";

export const protobufPackage = "comdex.auctionsV2.v1beta1";

export interface GenesisState {
  auction: Auction[];
  auctionParams?: AuctionParams;
  auctionFeesCollectionFromLimitBidTx: AuctionFeesCollectionFromLimitBidTx[];
  params?: Params;
  AuctionId: Long;
  UserBiddingID: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    auction: [],
    auctionParams: undefined,
    auctionFeesCollectionFromLimitBidTx: [],
    params: undefined,
    AuctionId: Long.UZERO,
    UserBiddingID: Long.UZERO,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auction) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.auctionParams !== undefined) {
      AuctionParams.encode(message.auctionParams, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.auctionFeesCollectionFromLimitBidTx) {
      AuctionFeesCollectionFromLimitBidTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (!message.AuctionId.isZero()) {
      writer.uint32(40).uint64(message.AuctionId);
    }
    if (!message.UserBiddingID.isZero()) {
      writer.uint32(48).uint64(message.UserBiddingID);
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
          message.auction.push(Auction.decode(reader, reader.uint32()));
          break;
        case 2:
          message.auctionParams = AuctionParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.auctionFeesCollectionFromLimitBidTx.push(
            AuctionFeesCollectionFromLimitBidTx.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.AuctionId = reader.uint64() as Long;
          break;
        case 6:
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
      auction: Array.isArray(object?.auction) ? object.auction.map((e: any) => Auction.fromJSON(e)) : [],
      auctionParams: isSet(object.auctionParams) ? AuctionParams.fromJSON(object.auctionParams) : undefined,
      auctionFeesCollectionFromLimitBidTx: Array.isArray(object?.auctionFeesCollectionFromLimitBidTx)
        ? object.auctionFeesCollectionFromLimitBidTx.map((e: any) => AuctionFeesCollectionFromLimitBidTx.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      AuctionId: isSet(object.AuctionId) ? Long.fromValue(object.AuctionId) : Long.UZERO,
      UserBiddingID: isSet(object.UserBiddingID) ? Long.fromValue(object.UserBiddingID) : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.auction) {
      obj.auction = message.auction.map((e) => e ? Auction.toJSON(e) : undefined);
    } else {
      obj.auction = [];
    }
    message.auctionParams !== undefined &&
      (obj.auctionParams = message.auctionParams ? AuctionParams.toJSON(message.auctionParams) : undefined);
    if (message.auctionFeesCollectionFromLimitBidTx) {
      obj.auctionFeesCollectionFromLimitBidTx = message.auctionFeesCollectionFromLimitBidTx.map((e) =>
        e ? AuctionFeesCollectionFromLimitBidTx.toJSON(e) : undefined
      );
    } else {
      obj.auctionFeesCollectionFromLimitBidTx = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.AuctionId !== undefined && (obj.AuctionId = (message.AuctionId || Long.UZERO).toString());
    message.UserBiddingID !== undefined && (obj.UserBiddingID = (message.UserBiddingID || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.auction = object.auction?.map((e) => Auction.fromPartial(e)) || [];
    message.auctionParams = (object.auctionParams !== undefined && object.auctionParams !== null)
      ? AuctionParams.fromPartial(object.auctionParams)
      : undefined;
    message.auctionFeesCollectionFromLimitBidTx =
      object.auctionFeesCollectionFromLimitBidTx?.map((e) => AuctionFeesCollectionFromLimitBidTx.fromPartial(e)) || [];
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.AuctionId = (object.AuctionId !== undefined && object.AuctionId !== null)
      ? Long.fromValue(object.AuctionId)
      : Long.UZERO;
    message.UserBiddingID = (object.UserBiddingID !== undefined && object.UserBiddingID !== null)
      ? Long.fromValue(object.UserBiddingID)
      : Long.UZERO;
    return message;
  },
};

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
