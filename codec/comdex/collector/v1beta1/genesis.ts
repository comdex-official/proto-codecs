/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../comdex/collector/v1beta1/params";
import {
  AppAssetIdToFeeCollectedData,
  AppToAssetIdCollectorMapping,
  CollectorLookupTableData,
  AppAssetIdToAuctionLookupTable,
  AppToDenomsMapping,
} from "../../../comdex/collector/v1beta1/collector";

export const protobufPackage = "comdex.collector.v1beta1";

export interface GenesisState {
  netFeeCollectedData: AppAssetIdToFeeCollectedData[];
  appIdToAssetCollectorMapping: AppToAssetIdCollectorMapping[];
  collectorLookup: CollectorLookupTableData[];
  collectorAuctionLookupTable: AppAssetIdToAuctionLookupTable[];
  appToDenomsMapping: AppToDenomsMapping[];
  params?: Params;
}

function createBaseGenesisState(): GenesisState {
  return {
    netFeeCollectedData: [],
    appIdToAssetCollectorMapping: [],
    collectorLookup: [],
    collectorAuctionLookupTable: [],
    appToDenomsMapping: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.netFeeCollectedData) {
      AppAssetIdToFeeCollectedData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.appIdToAssetCollectorMapping) {
      AppToAssetIdCollectorMapping.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.collectorLookup) {
      CollectorLookupTableData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.collectorAuctionLookupTable) {
      AppAssetIdToAuctionLookupTable.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.appToDenomsMapping) {
      AppToDenomsMapping.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(50).fork()).ldelim();
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
          message.netFeeCollectedData.push(
            AppAssetIdToFeeCollectedData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.appIdToAssetCollectorMapping.push(
            AppToAssetIdCollectorMapping.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.collectorLookup.push(
            CollectorLookupTableData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.collectorAuctionLookupTable.push(
            AppAssetIdToAuctionLookupTable.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.appToDenomsMapping.push(
            AppToDenomsMapping.decode(reader, reader.uint32())
          );
          break;
        case 6:
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
      netFeeCollectedData: Array.isArray(object?.netFeeCollectedData)
        ? object.netFeeCollectedData.map((e: any) =>
            AppAssetIdToFeeCollectedData.fromJSON(e)
          )
        : [],
      appIdToAssetCollectorMapping: Array.isArray(
        object?.appIdToAssetCollectorMapping
      )
        ? object.appIdToAssetCollectorMapping.map((e: any) =>
            AppToAssetIdCollectorMapping.fromJSON(e)
          )
        : [],
      collectorLookup: Array.isArray(object?.collectorLookup)
        ? object.collectorLookup.map((e: any) =>
            CollectorLookupTableData.fromJSON(e)
          )
        : [],
      collectorAuctionLookupTable: Array.isArray(
        object?.collectorAuctionLookupTable
      )
        ? object.collectorAuctionLookupTable.map((e: any) =>
            AppAssetIdToAuctionLookupTable.fromJSON(e)
          )
        : [],
      appToDenomsMapping: Array.isArray(object?.appToDenomsMapping)
        ? object.appToDenomsMapping.map((e: any) =>
            AppToDenomsMapping.fromJSON(e)
          )
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.netFeeCollectedData) {
      obj.netFeeCollectedData = message.netFeeCollectedData.map((e) =>
        e ? AppAssetIdToFeeCollectedData.toJSON(e) : undefined
      );
    } else {
      obj.netFeeCollectedData = [];
    }
    if (message.appIdToAssetCollectorMapping) {
      obj.appIdToAssetCollectorMapping =
        message.appIdToAssetCollectorMapping.map((e) =>
          e ? AppToAssetIdCollectorMapping.toJSON(e) : undefined
        );
    } else {
      obj.appIdToAssetCollectorMapping = [];
    }
    if (message.collectorLookup) {
      obj.collectorLookup = message.collectorLookup.map((e) =>
        e ? CollectorLookupTableData.toJSON(e) : undefined
      );
    } else {
      obj.collectorLookup = [];
    }
    if (message.collectorAuctionLookupTable) {
      obj.collectorAuctionLookupTable = message.collectorAuctionLookupTable.map(
        (e) => (e ? AppAssetIdToAuctionLookupTable.toJSON(e) : undefined)
      );
    } else {
      obj.collectorAuctionLookupTable = [];
    }
    if (message.appToDenomsMapping) {
      obj.appToDenomsMapping = message.appToDenomsMapping.map((e) =>
        e ? AppToDenomsMapping.toJSON(e) : undefined
      );
    } else {
      obj.appToDenomsMapping = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.netFeeCollectedData =
      object.netFeeCollectedData?.map((e) =>
        AppAssetIdToFeeCollectedData.fromPartial(e)
      ) || [];
    message.appIdToAssetCollectorMapping =
      object.appIdToAssetCollectorMapping?.map((e) =>
        AppToAssetIdCollectorMapping.fromPartial(e)
      ) || [];
    message.collectorLookup =
      object.collectorLookup?.map((e) =>
        CollectorLookupTableData.fromPartial(e)
      ) || [];
    message.collectorAuctionLookupTable =
      object.collectorAuctionLookupTable?.map((e) =>
        AppAssetIdToAuctionLookupTable.fromPartial(e)
      ) || [];
    message.appToDenomsMapping =
      object.appToDenomsMapping?.map((e) =>
        AppToDenomsMapping.fromPartial(e)
      ) || [];
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
