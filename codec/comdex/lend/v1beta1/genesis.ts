/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.lend.v1beta1";

/**
 * repeated BorrowAsset borrowAsset = 1
 *   [ (gogoproto.moretags) = "yaml:\"borrowAsset\"", (gogoproto.nullable) = false ];
 *   repeated UserBorrowIdMapping userBorrowIdMapping = 2
 *   [ (gogoproto.moretags) = "yaml:\"userBorrowIdMapping\"", (gogoproto.nullable) = false ];
 *   repeated BorrowIdByOwnerAndPoolMapping borrowIdByOwnerAndPoolMapping = 3
 *   [ (gogoproto.moretags) = "yaml:\"borrowIdByOwnerAndPoolMapping\"", (gogoproto.nullable) = false ];
 *   BorrowMapping borrowMapping = 4
 *   [ (gogoproto.moretags) = "yaml:\"borrowMapping\"", (gogoproto.nullable) = false ];
 *   repeated LendAsset lendAsset = 5
 *   [ (gogoproto.moretags) = "yaml:\"lendAsset\"", (gogoproto.nullable) = false ];
 *   repeated Pool pool = 6
 *   [ (gogoproto.moretags) = "yaml:\"pool\"", (gogoproto.nullable) = false ];
 *   repeated AssetToPairMapping assetToPairMapping = 7
 *   [ (gogoproto.moretags) = "yaml:\"assetToPairMapping\"", (gogoproto.nullable) = false ];
 *   repeated UserLendIdMapping userLendIdMapping = 8
 *   [ (gogoproto.moretags) = "yaml:\"userLendIdMapping\"", (gogoproto.nullable) = false ];
 *   repeated LendIdByOwnerAndPoolMapping lendIdByOwnerAndPoolMapping = 9
 *   [ (gogoproto.moretags) = "yaml:\"lendIdByOwnerAndPoolMapping\"", (gogoproto.nullable) = false ];
 *   repeated LendIdToBorrowIdMapping lendIdToBorrowIdMapping = 10
 *   [ (gogoproto.moretags) = "yaml:\"lendIdToBorrowIdMapping\"", (gogoproto.nullable) = false ];
 *   repeated AssetStats assetStats = 11
 *   [ (gogoproto.moretags) = "yaml:\"assetStats\"", (gogoproto.nullable) = false ];
 *   LendMapping lendMapping = 12
 *   [ (gogoproto.moretags) = "yaml:\"lendMapping\"", (gogoproto.nullable) = false ];
 *   DepositStats userDepositStats = 13
 *   [ (gogoproto.moretags) = "yaml:\"userDepositStats\"", (gogoproto.nullable) = false ];
 *   DepositStats reserveDepositStats = 14
 *   [ (gogoproto.moretags) = "yaml:\"reserveDepositStats\"", (gogoproto.nullable) = false ];
 *   DepositStats buyBackDepositStats = 15
 *   [ (gogoproto.moretags) = "yaml:\"buyBackDepositStats\"", (gogoproto.nullable) = false ];
 *   DepositStats borrowDepositStats = 16
 *   [ (gogoproto.moretags) = "yaml:\"borrowDepositStats\"", (gogoproto.nullable) = false ];
 *   repeated Extended_Pair extended_Pair = 17
 *   [ (gogoproto.moretags) = "yaml:\"extended_Pair\"", (gogoproto.nullable) = false ];
 *   repeated AssetRatesStats assetRatesStats = 18
 *   [ (gogoproto.moretags) = "yaml:\"assetRatesStats\"", (gogoproto.nullable) = false ];
 *   repeated AuctionParams auctionParams = 19
 *   [ (gogoproto.moretags) = "yaml:\"auctionParams\"", (gogoproto.nullable) = false ];
 *   Params params = 20 [(gogoproto.nullable) = false];
 */
export interface GenesisState {}

function createBaseGenesisState(): GenesisState {
  return {};
}

export const GenesisState = {
  encode(
    _: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
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

  fromJSON(_: any): GenesisState {
    return {};
  },

  toJSON(_: GenesisState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    _: I
  ): GenesisState {
    const message = createBaseGenesisState();
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
