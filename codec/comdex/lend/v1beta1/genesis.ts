/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  BorrowMapping,
  LendMapping,
  DepositStats,
  BorrowAsset,
  UserBorrowIdMapping,
  BorrowIdByOwnerAndPoolMapping,
  LendAsset,
  Pool,
  AssetToPairMapping,
  UserLendIdMapping,
  LendIdByOwnerAndPoolMapping,
  LendIdToBorrowIdMapping,
  AssetStats,
  ExtendedPair,
  AssetRatesStats,
  AuctionParams,
} from "../../../comdex/lend/v1beta1/lend";
import { Params } from "../../../comdex/lend/v1beta1/params";

export const protobufPackage = "comdex.lend.v1beta1";

export interface GenesisState {
  borrowAsset: BorrowAsset[];
  userBorrowIdMapping: UserBorrowIdMapping[];
  borrowIdByOwnerAndPoolMapping: BorrowIdByOwnerAndPoolMapping[];
  borrowMapping?: BorrowMapping;
  lendAsset: LendAsset[];
  pool: Pool[];
  assetToPairMapping: AssetToPairMapping[];
  userLendIdMapping: UserLendIdMapping[];
  lendIdByOwnerAndPoolMapping: LendIdByOwnerAndPoolMapping[];
  lendIdToBorrowIdMapping: LendIdToBorrowIdMapping[];
  assetStats: AssetStats[];
  lendMapping?: LendMapping;
  userDepositStats?: DepositStats;
  reserveDepositStats?: DepositStats;
  buyBackDepositStats?: DepositStats;
  borrowDepositStats?: DepositStats;
  extendedPair: ExtendedPair[];
  assetRatesStats: AssetRatesStats[];
  auctionParams: AuctionParams[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    borrowAsset: [],
    userBorrowIdMapping: [],
    borrowIdByOwnerAndPoolMapping: [],
    borrowMapping: undefined,
    lendAsset: [],
    pool: [],
    assetToPairMapping: [],
    userLendIdMapping: [],
    lendIdByOwnerAndPoolMapping: [],
    lendIdToBorrowIdMapping: [],
    assetStats: [],
    lendMapping: undefined,
    userDepositStats: undefined,
    reserveDepositStats: undefined,
    buyBackDepositStats: undefined,
    borrowDepositStats: undefined,
    extendedPair: [],
    assetRatesStats: [],
    auctionParams: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.borrowAsset) {
      BorrowAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.userBorrowIdMapping) {
      UserBorrowIdMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.borrowIdByOwnerAndPoolMapping) {
      BorrowIdByOwnerAndPoolMapping.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.borrowMapping !== undefined) {
      BorrowMapping.encode(
        message.borrowMapping,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.lendAsset) {
      LendAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.assetToPairMapping) {
      AssetToPairMapping.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.userLendIdMapping) {
      UserLendIdMapping.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.lendIdByOwnerAndPoolMapping) {
      LendIdByOwnerAndPoolMapping.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.lendIdToBorrowIdMapping) {
      LendIdToBorrowIdMapping.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.assetStats) {
      AssetStats.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.lendMapping !== undefined) {
      LendMapping.encode(
        message.lendMapping,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.userDepositStats !== undefined) {
      DepositStats.encode(
        message.userDepositStats,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.reserveDepositStats !== undefined) {
      DepositStats.encode(
        message.reserveDepositStats,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.buyBackDepositStats !== undefined) {
      DepositStats.encode(
        message.buyBackDepositStats,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.borrowDepositStats !== undefined) {
      DepositStats.encode(
        message.borrowDepositStats,
        writer.uint32(130).fork()
      ).ldelim();
    }
    for (const v of message.extendedPair) {
      ExtendedPair.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.assetRatesStats) {
      AssetRatesStats.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.auctionParams) {
      AuctionParams.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(162).fork()).ldelim();
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
          message.userBorrowIdMapping.push(
            UserBorrowIdMapping.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.borrowIdByOwnerAndPoolMapping.push(
            BorrowIdByOwnerAndPoolMapping.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.borrowMapping = BorrowMapping.decode(reader, reader.uint32());
          break;
        case 5:
          message.lendAsset.push(LendAsset.decode(reader, reader.uint32()));
          break;
        case 6:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 7:
          message.assetToPairMapping.push(
            AssetToPairMapping.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.userLendIdMapping.push(
            UserLendIdMapping.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.lendIdByOwnerAndPoolMapping.push(
            LendIdByOwnerAndPoolMapping.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.lendIdToBorrowIdMapping.push(
            LendIdToBorrowIdMapping.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.assetStats.push(AssetStats.decode(reader, reader.uint32()));
          break;
        case 12:
          message.lendMapping = LendMapping.decode(reader, reader.uint32());
          break;
        case 13:
          message.userDepositStats = DepositStats.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.reserveDepositStats = DepositStats.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.buyBackDepositStats = DepositStats.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.borrowDepositStats = DepositStats.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.extendedPair.push(
            ExtendedPair.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.assetRatesStats.push(
            AssetRatesStats.decode(reader, reader.uint32())
          );
          break;
        case 19:
          message.auctionParams.push(
            AuctionParams.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.params = Params.decode(reader, reader.uint32());
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
      userBorrowIdMapping: Array.isArray(object?.userBorrowIdMapping)
        ? object.userBorrowIdMapping.map((e: any) =>
            UserBorrowIdMapping.fromJSON(e)
          )
        : [],
      borrowIdByOwnerAndPoolMapping: Array.isArray(
        object?.borrowIdByOwnerAndPoolMapping
      )
        ? object.borrowIdByOwnerAndPoolMapping.map((e: any) =>
            BorrowIdByOwnerAndPoolMapping.fromJSON(e)
          )
        : [],
      borrowMapping: isSet(object.borrowMapping)
        ? BorrowMapping.fromJSON(object.borrowMapping)
        : undefined,
      lendAsset: Array.isArray(object?.lendAsset)
        ? object.lendAsset.map((e: any) => LendAsset.fromJSON(e))
        : [],
      pool: Array.isArray(object?.pool)
        ? object.pool.map((e: any) => Pool.fromJSON(e))
        : [],
      assetToPairMapping: Array.isArray(object?.assetToPairMapping)
        ? object.assetToPairMapping.map((e: any) =>
            AssetToPairMapping.fromJSON(e)
          )
        : [],
      userLendIdMapping: Array.isArray(object?.userLendIdMapping)
        ? object.userLendIdMapping.map((e: any) =>
            UserLendIdMapping.fromJSON(e)
          )
        : [],
      lendIdByOwnerAndPoolMapping: Array.isArray(
        object?.lendIdByOwnerAndPoolMapping
      )
        ? object.lendIdByOwnerAndPoolMapping.map((e: any) =>
            LendIdByOwnerAndPoolMapping.fromJSON(e)
          )
        : [],
      lendIdToBorrowIdMapping: Array.isArray(object?.lendIdToBorrowIdMapping)
        ? object.lendIdToBorrowIdMapping.map((e: any) =>
            LendIdToBorrowIdMapping.fromJSON(e)
          )
        : [],
      assetStats: Array.isArray(object?.assetStats)
        ? object.assetStats.map((e: any) => AssetStats.fromJSON(e))
        : [],
      lendMapping: isSet(object.lendMapping)
        ? LendMapping.fromJSON(object.lendMapping)
        : undefined,
      userDepositStats: isSet(object.userDepositStats)
        ? DepositStats.fromJSON(object.userDepositStats)
        : undefined,
      reserveDepositStats: isSet(object.reserveDepositStats)
        ? DepositStats.fromJSON(object.reserveDepositStats)
        : undefined,
      buyBackDepositStats: isSet(object.buyBackDepositStats)
        ? DepositStats.fromJSON(object.buyBackDepositStats)
        : undefined,
      borrowDepositStats: isSet(object.borrowDepositStats)
        ? DepositStats.fromJSON(object.borrowDepositStats)
        : undefined,
      extendedPair: Array.isArray(object?.extendedPair)
        ? object.extendedPair.map((e: any) => ExtendedPair.fromJSON(e))
        : [],
      assetRatesStats: Array.isArray(object?.assetRatesStats)
        ? object.assetRatesStats.map((e: any) => AssetRatesStats.fromJSON(e))
        : [],
      auctionParams: Array.isArray(object?.auctionParams)
        ? object.auctionParams.map((e: any) => AuctionParams.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.borrowAsset) {
      obj.borrowAsset = message.borrowAsset.map((e) =>
        e ? BorrowAsset.toJSON(e) : undefined
      );
    } else {
      obj.borrowAsset = [];
    }
    if (message.userBorrowIdMapping) {
      obj.userBorrowIdMapping = message.userBorrowIdMapping.map((e) =>
        e ? UserBorrowIdMapping.toJSON(e) : undefined
      );
    } else {
      obj.userBorrowIdMapping = [];
    }
    if (message.borrowIdByOwnerAndPoolMapping) {
      obj.borrowIdByOwnerAndPoolMapping =
        message.borrowIdByOwnerAndPoolMapping.map((e) =>
          e ? BorrowIdByOwnerAndPoolMapping.toJSON(e) : undefined
        );
    } else {
      obj.borrowIdByOwnerAndPoolMapping = [];
    }
    message.borrowMapping !== undefined &&
      (obj.borrowMapping = message.borrowMapping
        ? BorrowMapping.toJSON(message.borrowMapping)
        : undefined);
    if (message.lendAsset) {
      obj.lendAsset = message.lendAsset.map((e) =>
        e ? LendAsset.toJSON(e) : undefined
      );
    } else {
      obj.lendAsset = [];
    }
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    if (message.assetToPairMapping) {
      obj.assetToPairMapping = message.assetToPairMapping.map((e) =>
        e ? AssetToPairMapping.toJSON(e) : undefined
      );
    } else {
      obj.assetToPairMapping = [];
    }
    if (message.userLendIdMapping) {
      obj.userLendIdMapping = message.userLendIdMapping.map((e) =>
        e ? UserLendIdMapping.toJSON(e) : undefined
      );
    } else {
      obj.userLendIdMapping = [];
    }
    if (message.lendIdByOwnerAndPoolMapping) {
      obj.lendIdByOwnerAndPoolMapping = message.lendIdByOwnerAndPoolMapping.map(
        (e) => (e ? LendIdByOwnerAndPoolMapping.toJSON(e) : undefined)
      );
    } else {
      obj.lendIdByOwnerAndPoolMapping = [];
    }
    if (message.lendIdToBorrowIdMapping) {
      obj.lendIdToBorrowIdMapping = message.lendIdToBorrowIdMapping.map((e) =>
        e ? LendIdToBorrowIdMapping.toJSON(e) : undefined
      );
    } else {
      obj.lendIdToBorrowIdMapping = [];
    }
    if (message.assetStats) {
      obj.assetStats = message.assetStats.map((e) =>
        e ? AssetStats.toJSON(e) : undefined
      );
    } else {
      obj.assetStats = [];
    }
    message.lendMapping !== undefined &&
      (obj.lendMapping = message.lendMapping
        ? LendMapping.toJSON(message.lendMapping)
        : undefined);
    message.userDepositStats !== undefined &&
      (obj.userDepositStats = message.userDepositStats
        ? DepositStats.toJSON(message.userDepositStats)
        : undefined);
    message.reserveDepositStats !== undefined &&
      (obj.reserveDepositStats = message.reserveDepositStats
        ? DepositStats.toJSON(message.reserveDepositStats)
        : undefined);
    message.buyBackDepositStats !== undefined &&
      (obj.buyBackDepositStats = message.buyBackDepositStats
        ? DepositStats.toJSON(message.buyBackDepositStats)
        : undefined);
    message.borrowDepositStats !== undefined &&
      (obj.borrowDepositStats = message.borrowDepositStats
        ? DepositStats.toJSON(message.borrowDepositStats)
        : undefined);
    if (message.extendedPair) {
      obj.extendedPair = message.extendedPair.map((e) =>
        e ? ExtendedPair.toJSON(e) : undefined
      );
    } else {
      obj.extendedPair = [];
    }
    if (message.assetRatesStats) {
      obj.assetRatesStats = message.assetRatesStats.map((e) =>
        e ? AssetRatesStats.toJSON(e) : undefined
      );
    } else {
      obj.assetRatesStats = [];
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.borrowAsset =
      object.borrowAsset?.map((e) => BorrowAsset.fromPartial(e)) || [];
    message.userBorrowIdMapping =
      object.userBorrowIdMapping?.map((e) =>
        UserBorrowIdMapping.fromPartial(e)
      ) || [];
    message.borrowIdByOwnerAndPoolMapping =
      object.borrowIdByOwnerAndPoolMapping?.map((e) =>
        BorrowIdByOwnerAndPoolMapping.fromPartial(e)
      ) || [];
    message.borrowMapping =
      object.borrowMapping !== undefined && object.borrowMapping !== null
        ? BorrowMapping.fromPartial(object.borrowMapping)
        : undefined;
    message.lendAsset =
      object.lendAsset?.map((e) => LendAsset.fromPartial(e)) || [];
    message.pool = object.pool?.map((e) => Pool.fromPartial(e)) || [];
    message.assetToPairMapping =
      object.assetToPairMapping?.map((e) =>
        AssetToPairMapping.fromPartial(e)
      ) || [];
    message.userLendIdMapping =
      object.userLendIdMapping?.map((e) => UserLendIdMapping.fromPartial(e)) ||
      [];
    message.lendIdByOwnerAndPoolMapping =
      object.lendIdByOwnerAndPoolMapping?.map((e) =>
        LendIdByOwnerAndPoolMapping.fromPartial(e)
      ) || [];
    message.lendIdToBorrowIdMapping =
      object.lendIdToBorrowIdMapping?.map((e) =>
        LendIdToBorrowIdMapping.fromPartial(e)
      ) || [];
    message.assetStats =
      object.assetStats?.map((e) => AssetStats.fromPartial(e)) || [];
    message.lendMapping =
      object.lendMapping !== undefined && object.lendMapping !== null
        ? LendMapping.fromPartial(object.lendMapping)
        : undefined;
    message.userDepositStats =
      object.userDepositStats !== undefined && object.userDepositStats !== null
        ? DepositStats.fromPartial(object.userDepositStats)
        : undefined;
    message.reserveDepositStats =
      object.reserveDepositStats !== undefined &&
      object.reserveDepositStats !== null
        ? DepositStats.fromPartial(object.reserveDepositStats)
        : undefined;
    message.buyBackDepositStats =
      object.buyBackDepositStats !== undefined &&
      object.buyBackDepositStats !== null
        ? DepositStats.fromPartial(object.buyBackDepositStats)
        : undefined;
    message.borrowDepositStats =
      object.borrowDepositStats !== undefined &&
      object.borrowDepositStats !== null
        ? DepositStats.fromPartial(object.borrowDepositStats)
        : undefined;
    message.extendedPair =
      object.extendedPair?.map((e) => ExtendedPair.fromPartial(e)) || [];
    message.assetRatesStats =
      object.assetRatesStats?.map((e) => AssetRatesStats.fromPartial(e)) || [];
    message.auctionParams =
      object.auctionParams?.map((e) => AuctionParams.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
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
