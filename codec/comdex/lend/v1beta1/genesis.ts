/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  AllReserveStats,
  AssetRatesParams,
  AssetToPairMapping,
  AuctionParams,
  BorrowAsset,
  BorrowInterestTracker,
  ExtendedPair,
  LendAsset,
  LendRewardsTracker,
  ModBal,
  Pool,
  PoolAssetLBMapping,
  PoolDepreciate,
  ReserveBal,
  ReserveBuybackAssetData,
  UserAssetLendBorrowMapping,
} from "./lend";

export const protobufPackage = "comdex.lend.v1beta1";

export interface GenesisState {
  borrowAsset: BorrowAsset[];
  borrowInterestTracker: BorrowInterestTracker[];
  lendAsset: LendAsset[];
  pool: Pool[];
  assetToPairMapping: AssetToPairMapping[];
  poolAssetLBMapping: PoolAssetLBMapping[];
  lendRewardsTracker: LendRewardsTracker[];
  userAssetLendBorrowMapping: UserAssetLendBorrowMapping[];
  reserveBuybackAssetData: ReserveBuybackAssetData[];
  extendedPair: ExtendedPair[];
  auctionParams: AuctionParams[];
  assetRatesParams: AssetRatesParams[];
  modBal?: ModBal;
  reserveBal?: ReserveBal;
  allReserveStats: AllReserveStats[];
  poolDepreciate?: PoolDepreciate;
}

function createBaseGenesisState(): GenesisState {
  return {
    borrowAsset: [],
    borrowInterestTracker: [],
    lendAsset: [],
    pool: [],
    assetToPairMapping: [],
    poolAssetLBMapping: [],
    lendRewardsTracker: [],
    userAssetLendBorrowMapping: [],
    reserveBuybackAssetData: [],
    extendedPair: [],
    auctionParams: [],
    assetRatesParams: [],
    modBal: undefined,
    reserveBal: undefined,
    allReserveStats: [],
    poolDepreciate: undefined,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.borrowAsset) {
      BorrowAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.borrowInterestTracker) {
      BorrowInterestTracker.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lendAsset) {
      LendAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.assetToPairMapping) {
      AssetToPairMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.poolAssetLBMapping) {
      PoolAssetLBMapping.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.lendRewardsTracker) {
      LendRewardsTracker.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.userAssetLendBorrowMapping) {
      UserAssetLendBorrowMapping.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.reserveBuybackAssetData) {
      ReserveBuybackAssetData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.extendedPair) {
      ExtendedPair.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.auctionParams) {
      AuctionParams.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.assetRatesParams) {
      AssetRatesParams.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.modBal !== undefined) {
      ModBal.encode(message.modBal, writer.uint32(106).fork()).ldelim();
    }
    if (message.reserveBal !== undefined) {
      ReserveBal.encode(message.reserveBal, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.allReserveStats) {
      AllReserveStats.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.poolDepreciate !== undefined) {
      PoolDepreciate.encode(message.poolDepreciate, writer.uint32(130).fork()).ldelim();
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
          message.borrowAsset.push(BorrowAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.borrowInterestTracker.push(BorrowInterestTracker.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lendAsset.push(LendAsset.decode(reader, reader.uint32()));
          break;
        case 4:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 5:
          message.assetToPairMapping.push(AssetToPairMapping.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolAssetLBMapping.push(PoolAssetLBMapping.decode(reader, reader.uint32()));
          break;
        case 7:
          message.lendRewardsTracker.push(LendRewardsTracker.decode(reader, reader.uint32()));
          break;
        case 8:
          message.userAssetLendBorrowMapping.push(UserAssetLendBorrowMapping.decode(reader, reader.uint32()));
          break;
        case 9:
          message.reserveBuybackAssetData.push(ReserveBuybackAssetData.decode(reader, reader.uint32()));
          break;
        case 10:
          message.extendedPair.push(ExtendedPair.decode(reader, reader.uint32()));
          break;
        case 11:
          message.auctionParams.push(AuctionParams.decode(reader, reader.uint32()));
          break;
        case 12:
          message.assetRatesParams.push(AssetRatesParams.decode(reader, reader.uint32()));
          break;
        case 13:
          message.modBal = ModBal.decode(reader, reader.uint32());
          break;
        case 14:
          message.reserveBal = ReserveBal.decode(reader, reader.uint32());
          break;
        case 15:
          message.allReserveStats.push(AllReserveStats.decode(reader, reader.uint32()));
          break;
        case 16:
          message.poolDepreciate = PoolDepreciate.decode(reader, reader.uint32());
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
      borrowAsset: Array.isArray(object?.borrowAsset)
        ? object.borrowAsset.map((e: any) => BorrowAsset.fromJSON(e))
        : [],
      borrowInterestTracker: Array.isArray(object?.borrowInterestTracker)
        ? object.borrowInterestTracker.map((e: any) => BorrowInterestTracker.fromJSON(e))
        : [],
      lendAsset: Array.isArray(object?.lendAsset) ? object.lendAsset.map((e: any) => LendAsset.fromJSON(e)) : [],
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromJSON(e)) : [],
      assetToPairMapping: Array.isArray(object?.assetToPairMapping)
        ? object.assetToPairMapping.map((e: any) => AssetToPairMapping.fromJSON(e))
        : [],
      poolAssetLBMapping: Array.isArray(object?.poolAssetLBMapping)
        ? object.poolAssetLBMapping.map((e: any) => PoolAssetLBMapping.fromJSON(e))
        : [],
      lendRewardsTracker: Array.isArray(object?.lendRewardsTracker)
        ? object.lendRewardsTracker.map((e: any) => LendRewardsTracker.fromJSON(e))
        : [],
      userAssetLendBorrowMapping: Array.isArray(object?.userAssetLendBorrowMapping)
        ? object.userAssetLendBorrowMapping.map((e: any) => UserAssetLendBorrowMapping.fromJSON(e))
        : [],
      reserveBuybackAssetData: Array.isArray(object?.reserveBuybackAssetData)
        ? object.reserveBuybackAssetData.map((e: any) => ReserveBuybackAssetData.fromJSON(e))
        : [],
      extendedPair: Array.isArray(object?.extendedPair)
        ? object.extendedPair.map((e: any) => ExtendedPair.fromJSON(e))
        : [],
      auctionParams: Array.isArray(object?.auctionParams)
        ? object.auctionParams.map((e: any) => AuctionParams.fromJSON(e))
        : [],
      assetRatesParams: Array.isArray(object?.assetRatesParams)
        ? object.assetRatesParams.map((e: any) => AssetRatesParams.fromJSON(e))
        : [],
      modBal: isSet(object.modBal) ? ModBal.fromJSON(object.modBal) : undefined,
      reserveBal: isSet(object.reserveBal) ? ReserveBal.fromJSON(object.reserveBal) : undefined,
      allReserveStats: Array.isArray(object?.allReserveStats)
        ? object.allReserveStats.map((e: any) => AllReserveStats.fromJSON(e))
        : [],
      poolDepreciate: isSet(object.poolDepreciate) ? PoolDepreciate.fromJSON(object.poolDepreciate) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.borrowAsset) {
      obj.borrowAsset = message.borrowAsset.map((e) => e ? BorrowAsset.toJSON(e) : undefined);
    } else {
      obj.borrowAsset = [];
    }
    if (message.borrowInterestTracker) {
      obj.borrowInterestTracker = message.borrowInterestTracker.map((e) =>
        e ? BorrowInterestTracker.toJSON(e) : undefined
      );
    } else {
      obj.borrowInterestTracker = [];
    }
    if (message.lendAsset) {
      obj.lendAsset = message.lendAsset.map((e) => e ? LendAsset.toJSON(e) : undefined);
    } else {
      obj.lendAsset = [];
    }
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    if (message.assetToPairMapping) {
      obj.assetToPairMapping = message.assetToPairMapping.map((e) => e ? AssetToPairMapping.toJSON(e) : undefined);
    } else {
      obj.assetToPairMapping = [];
    }
    if (message.poolAssetLBMapping) {
      obj.poolAssetLBMapping = message.poolAssetLBMapping.map((e) => e ? PoolAssetLBMapping.toJSON(e) : undefined);
    } else {
      obj.poolAssetLBMapping = [];
    }
    if (message.lendRewardsTracker) {
      obj.lendRewardsTracker = message.lendRewardsTracker.map((e) => e ? LendRewardsTracker.toJSON(e) : undefined);
    } else {
      obj.lendRewardsTracker = [];
    }
    if (message.userAssetLendBorrowMapping) {
      obj.userAssetLendBorrowMapping = message.userAssetLendBorrowMapping.map((e) =>
        e ? UserAssetLendBorrowMapping.toJSON(e) : undefined
      );
    } else {
      obj.userAssetLendBorrowMapping = [];
    }
    if (message.reserveBuybackAssetData) {
      obj.reserveBuybackAssetData = message.reserveBuybackAssetData.map((e) =>
        e ? ReserveBuybackAssetData.toJSON(e) : undefined
      );
    } else {
      obj.reserveBuybackAssetData = [];
    }
    if (message.extendedPair) {
      obj.extendedPair = message.extendedPair.map((e) => e ? ExtendedPair.toJSON(e) : undefined);
    } else {
      obj.extendedPair = [];
    }
    if (message.auctionParams) {
      obj.auctionParams = message.auctionParams.map((e) => e ? AuctionParams.toJSON(e) : undefined);
    } else {
      obj.auctionParams = [];
    }
    if (message.assetRatesParams) {
      obj.assetRatesParams = message.assetRatesParams.map((e) => e ? AssetRatesParams.toJSON(e) : undefined);
    } else {
      obj.assetRatesParams = [];
    }
    message.modBal !== undefined && (obj.modBal = message.modBal ? ModBal.toJSON(message.modBal) : undefined);
    message.reserveBal !== undefined &&
      (obj.reserveBal = message.reserveBal ? ReserveBal.toJSON(message.reserveBal) : undefined);
    if (message.allReserveStats) {
      obj.allReserveStats = message.allReserveStats.map((e) => e ? AllReserveStats.toJSON(e) : undefined);
    } else {
      obj.allReserveStats = [];
    }
    message.poolDepreciate !== undefined &&
      (obj.poolDepreciate = message.poolDepreciate ? PoolDepreciate.toJSON(message.poolDepreciate) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.borrowAsset = object.borrowAsset?.map((e) => BorrowAsset.fromPartial(e)) || [];
    message.borrowInterestTracker = object.borrowInterestTracker?.map((e) => BorrowInterestTracker.fromPartial(e)) ||
      [];
    message.lendAsset = object.lendAsset?.map((e) => LendAsset.fromPartial(e)) || [];
    message.pool = object.pool?.map((e) => Pool.fromPartial(e)) || [];
    message.assetToPairMapping = object.assetToPairMapping?.map((e) => AssetToPairMapping.fromPartial(e)) || [];
    message.poolAssetLBMapping = object.poolAssetLBMapping?.map((e) => PoolAssetLBMapping.fromPartial(e)) || [];
    message.lendRewardsTracker = object.lendRewardsTracker?.map((e) => LendRewardsTracker.fromPartial(e)) || [];
    message.userAssetLendBorrowMapping =
      object.userAssetLendBorrowMapping?.map((e) => UserAssetLendBorrowMapping.fromPartial(e)) || [];
    message.reserveBuybackAssetData =
      object.reserveBuybackAssetData?.map((e) => ReserveBuybackAssetData.fromPartial(e)) || [];
    message.extendedPair = object.extendedPair?.map((e) => ExtendedPair.fromPartial(e)) || [];
    message.auctionParams = object.auctionParams?.map((e) => AuctionParams.fromPartial(e)) || [];
    message.assetRatesParams = object.assetRatesParams?.map((e) => AssetRatesParams.fromPartial(e)) || [];
    message.modBal = (object.modBal !== undefined && object.modBal !== null)
      ? ModBal.fromPartial(object.modBal)
      : undefined;
    message.reserveBal = (object.reserveBal !== undefined && object.reserveBal !== null)
      ? ReserveBal.fromPartial(object.reserveBal)
      : undefined;
    message.allReserveStats = object.allReserveStats?.map((e) => AllReserveStats.fromPartial(e)) || [];
    message.poolDepreciate = (object.poolDepreciate !== undefined && object.poolDepreciate !== null)
      ? PoolDepreciate.fromPartial(object.poolDepreciate)
      : undefined;
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
