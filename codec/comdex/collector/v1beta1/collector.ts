/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.collector.v1beta1";

export interface CollectorData {
  collectedStabilityFee: string;
  collectedClosingFee: string;
  collectedOpeningFee: string;
  liquidationRewardsCollected: string;
}

export interface AppAssetIdToFeeCollectedData {
  appId: Long;
  assetId: Long;
  netFeesCollected: string;
}

export interface AppToAssetIdCollectorMapping {
  appId: Long;
  assetId: Long;
  collector?: CollectorData;
}

export interface CollectorLookupTableData {
  appId: Long;
  collectorAssetId: Long;
  secondaryAssetId: Long;
  surplusThreshold: string;
  debtThreshold: string;
  lockerSavingRate: string;
  lotSize: string;
  bidFactor: string;
  debtLotSize: string;
  blockHeight: Long;
  blockTime?: Date;
}

export interface AppToDenomsMapping {
  appId: Long;
  assetIds: Long[];
}

export interface AppAssetIdToAuctionLookupTable {
  appId: Long;
  assetId: Long;
  isSurplusAuction: boolean;
  isDebtAuction: boolean;
  isDistributor: boolean;
  isAuctionActive: boolean;
  assetOutOraclePrice: boolean;
  assetOutPrice: Long;
}

function createBaseCollectorData(): CollectorData {
  return {
    collectedStabilityFee: "",
    collectedClosingFee: "",
    collectedOpeningFee: "",
    liquidationRewardsCollected: "",
  };
}

export const CollectorData = {
  encode(
    message: CollectorData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectedStabilityFee !== "") {
      writer.uint32(10).string(message.collectedStabilityFee);
    }
    if (message.collectedClosingFee !== "") {
      writer.uint32(18).string(message.collectedClosingFee);
    }
    if (message.collectedOpeningFee !== "") {
      writer.uint32(26).string(message.collectedOpeningFee);
    }
    if (message.liquidationRewardsCollected !== "") {
      writer.uint32(34).string(message.liquidationRewardsCollected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectedStabilityFee = reader.string();
          break;
        case 2:
          message.collectedClosingFee = reader.string();
          break;
        case 3:
          message.collectedOpeningFee = reader.string();
          break;
        case 4:
          message.liquidationRewardsCollected = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectorData {
    return {
      collectedStabilityFee: isSet(object.collectedStabilityFee)
        ? String(object.collectedStabilityFee)
        : "",
      collectedClosingFee: isSet(object.collectedClosingFee)
        ? String(object.collectedClosingFee)
        : "",
      collectedOpeningFee: isSet(object.collectedOpeningFee)
        ? String(object.collectedOpeningFee)
        : "",
      liquidationRewardsCollected: isSet(object.liquidationRewardsCollected)
        ? String(object.liquidationRewardsCollected)
        : "",
    };
  },

  toJSON(message: CollectorData): unknown {
    const obj: any = {};
    message.collectedStabilityFee !== undefined &&
      (obj.collectedStabilityFee = message.collectedStabilityFee);
    message.collectedClosingFee !== undefined &&
      (obj.collectedClosingFee = message.collectedClosingFee);
    message.collectedOpeningFee !== undefined &&
      (obj.collectedOpeningFee = message.collectedOpeningFee);
    message.liquidationRewardsCollected !== undefined &&
      (obj.liquidationRewardsCollected = message.liquidationRewardsCollected);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollectorData>, I>>(
    object: I
  ): CollectorData {
    const message = createBaseCollectorData();
    message.collectedStabilityFee = object.collectedStabilityFee ?? "";
    message.collectedClosingFee = object.collectedClosingFee ?? "";
    message.collectedOpeningFee = object.collectedOpeningFee ?? "";
    message.liquidationRewardsCollected =
      object.liquidationRewardsCollected ?? "";
    return message;
  },
};

function createBaseAppAssetIdToFeeCollectedData(): AppAssetIdToFeeCollectedData {
  return { appId: Long.UZERO, assetId: Long.UZERO, netFeesCollected: "" };
}

export const AppAssetIdToFeeCollectedData = {
  encode(
    message: AppAssetIdToFeeCollectedData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.netFeesCollected !== "") {
      writer.uint32(26).string(message.netFeesCollected);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppAssetIdToFeeCollectedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppAssetIdToFeeCollectedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.netFeesCollected = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppAssetIdToFeeCollectedData {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      netFeesCollected: isSet(object.netFeesCollected)
        ? String(object.netFeesCollected)
        : "",
    };
  },

  toJSON(message: AppAssetIdToFeeCollectedData): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.netFeesCollected !== undefined &&
      (obj.netFeesCollected = message.netFeesCollected);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppAssetIdToFeeCollectedData>, I>>(
    object: I
  ): AppAssetIdToFeeCollectedData {
    const message = createBaseAppAssetIdToFeeCollectedData();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.netFeesCollected = object.netFeesCollected ?? "";
    return message;
  },
};

function createBaseAppToAssetIdCollectorMapping(): AppToAssetIdCollectorMapping {
  return { appId: Long.UZERO, assetId: Long.UZERO, collector: undefined };
}

export const AppToAssetIdCollectorMapping = {
  encode(
    message: AppToAssetIdCollectorMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.collector !== undefined) {
      CollectorData.encode(
        message.collector,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppToAssetIdCollectorMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppToAssetIdCollectorMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.collector = CollectorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppToAssetIdCollectorMapping {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      collector: isSet(object.collector)
        ? CollectorData.fromJSON(object.collector)
        : undefined,
    };
  },

  toJSON(message: AppToAssetIdCollectorMapping): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.collector !== undefined &&
      (obj.collector = message.collector
        ? CollectorData.toJSON(message.collector)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppToAssetIdCollectorMapping>, I>>(
    object: I
  ): AppToAssetIdCollectorMapping {
    const message = createBaseAppToAssetIdCollectorMapping();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.collector =
      object.collector !== undefined && object.collector !== null
        ? CollectorData.fromPartial(object.collector)
        : undefined;
    return message;
  },
};

function createBaseCollectorLookupTableData(): CollectorLookupTableData {
  return {
    appId: Long.UZERO,
    collectorAssetId: Long.UZERO,
    secondaryAssetId: Long.UZERO,
    surplusThreshold: "",
    debtThreshold: "",
    lockerSavingRate: "",
    lotSize: "",
    bidFactor: "",
    debtLotSize: "",
    blockHeight: Long.ZERO,
    blockTime: undefined,
  };
}

export const CollectorLookupTableData = {
  encode(
    message: CollectorLookupTableData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.collectorAssetId.isZero()) {
      writer.uint32(16).uint64(message.collectorAssetId);
    }
    if (!message.secondaryAssetId.isZero()) {
      writer.uint32(24).uint64(message.secondaryAssetId);
    }
    if (message.surplusThreshold !== "") {
      writer.uint32(34).string(message.surplusThreshold);
    }
    if (message.debtThreshold !== "") {
      writer.uint32(42).string(message.debtThreshold);
    }
    if (message.lockerSavingRate !== "") {
      writer.uint32(50).string(message.lockerSavingRate);
    }
    if (message.lotSize !== "") {
      writer.uint32(58).string(message.lotSize);
    }
    if (message.bidFactor !== "") {
      writer.uint32(66).string(message.bidFactor);
    }
    if (message.debtLotSize !== "") {
      writer.uint32(74).string(message.debtLotSize);
    }
    if (!message.blockHeight.isZero()) {
      writer.uint32(80).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.blockTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollectorLookupTableData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectorLookupTableData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.collectorAssetId = reader.uint64() as Long;
          break;
        case 3:
          message.secondaryAssetId = reader.uint64() as Long;
          break;
        case 4:
          message.surplusThreshold = reader.string();
          break;
        case 5:
          message.debtThreshold = reader.string();
          break;
        case 6:
          message.lockerSavingRate = reader.string();
          break;
        case 7:
          message.lotSize = reader.string();
          break;
        case 8:
          message.bidFactor = reader.string();
          break;
        case 9:
          message.debtLotSize = reader.string();
          break;
        case 10:
          message.blockHeight = reader.int64() as Long;
          break;
        case 11:
          message.blockTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectorLookupTableData {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      collectorAssetId: isSet(object.collectorAssetId)
        ? Long.fromValue(object.collectorAssetId)
        : Long.UZERO,
      secondaryAssetId: isSet(object.secondaryAssetId)
        ? Long.fromValue(object.secondaryAssetId)
        : Long.UZERO,
      surplusThreshold: isSet(object.surplusThreshold)
        ? String(object.surplusThreshold)
        : "",
      debtThreshold: isSet(object.debtThreshold)
        ? String(object.debtThreshold)
        : "",
      lockerSavingRate: isSet(object.lockerSavingRate)
        ? String(object.lockerSavingRate)
        : "",
      lotSize: isSet(object.lotSize) ? String(object.lotSize) : "",
      bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
      debtLotSize: isSet(object.debtLotSize) ? String(object.debtLotSize) : "",
      blockHeight: isSet(object.blockHeight)
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO,
      blockTime: isSet(object.blockTime)
        ? fromJsonTimestamp(object.blockTime)
        : undefined,
    };
  },

  toJSON(message: CollectorLookupTableData): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.collectorAssetId !== undefined &&
      (obj.collectorAssetId = (
        message.collectorAssetId || Long.UZERO
      ).toString());
    message.secondaryAssetId !== undefined &&
      (obj.secondaryAssetId = (
        message.secondaryAssetId || Long.UZERO
      ).toString());
    message.surplusThreshold !== undefined &&
      (obj.surplusThreshold = message.surplusThreshold);
    message.debtThreshold !== undefined &&
      (obj.debtThreshold = message.debtThreshold);
    message.lockerSavingRate !== undefined &&
      (obj.lockerSavingRate = message.lockerSavingRate);
    message.lotSize !== undefined && (obj.lotSize = message.lotSize);
    message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
    message.debtLotSize !== undefined &&
      (obj.debtLotSize = message.debtLotSize);
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.blockTime !== undefined &&
      (obj.blockTime = message.blockTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollectorLookupTableData>, I>>(
    object: I
  ): CollectorLookupTableData {
    const message = createBaseCollectorLookupTableData();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.collectorAssetId =
      object.collectorAssetId !== undefined && object.collectorAssetId !== null
        ? Long.fromValue(object.collectorAssetId)
        : Long.UZERO;
    message.secondaryAssetId =
      object.secondaryAssetId !== undefined && object.secondaryAssetId !== null
        ? Long.fromValue(object.secondaryAssetId)
        : Long.UZERO;
    message.surplusThreshold = object.surplusThreshold ?? "";
    message.debtThreshold = object.debtThreshold ?? "";
    message.lockerSavingRate = object.lockerSavingRate ?? "";
    message.lotSize = object.lotSize ?? "";
    message.bidFactor = object.bidFactor ?? "";
    message.debtLotSize = object.debtLotSize ?? "";
    message.blockHeight =
      object.blockHeight !== undefined && object.blockHeight !== null
        ? Long.fromValue(object.blockHeight)
        : Long.ZERO;
    message.blockTime = object.blockTime ?? undefined;
    return message;
  },
};

function createBaseAppToDenomsMapping(): AppToDenomsMapping {
  return { appId: Long.UZERO, assetIds: [] };
}

export const AppToDenomsMapping = {
  encode(
    message: AppToDenomsMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    writer.uint32(18).fork();
    for (const v of message.assetIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppToDenomsMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppToDenomsMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assetIds.push(reader.uint64() as Long);
            }
          } else {
            message.assetIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppToDenomsMapping {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetIds: Array.isArray(object?.assetIds)
        ? object.assetIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: AppToDenomsMapping): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetIds) {
      obj.assetIds = message.assetIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.assetIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppToDenomsMapping>, I>>(
    object: I
  ): AppToDenomsMapping {
    const message = createBaseAppToDenomsMapping();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetIds = object.assetIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseAppAssetIdToAuctionLookupTable(): AppAssetIdToAuctionLookupTable {
  return {
    appId: Long.UZERO,
    assetId: Long.UZERO,
    isSurplusAuction: false,
    isDebtAuction: false,
    isDistributor: false,
    isAuctionActive: false,
    assetOutOraclePrice: false,
    assetOutPrice: Long.UZERO,
  };
}

export const AppAssetIdToAuctionLookupTable = {
  encode(
    message: AppAssetIdToAuctionLookupTable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.isSurplusAuction === true) {
      writer.uint32(24).bool(message.isSurplusAuction);
    }
    if (message.isDebtAuction === true) {
      writer.uint32(32).bool(message.isDebtAuction);
    }
    if (message.isDistributor === true) {
      writer.uint32(40).bool(message.isDistributor);
    }
    if (message.isAuctionActive === true) {
      writer.uint32(48).bool(message.isAuctionActive);
    }
    if (message.assetOutOraclePrice === true) {
      writer.uint32(56).bool(message.assetOutOraclePrice);
    }
    if (!message.assetOutPrice.isZero()) {
      writer.uint32(64).uint64(message.assetOutPrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppAssetIdToAuctionLookupTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppAssetIdToAuctionLookupTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetId = reader.uint64() as Long;
          break;
        case 3:
          message.isSurplusAuction = reader.bool();
          break;
        case 4:
          message.isDebtAuction = reader.bool();
          break;
        case 5:
          message.isDistributor = reader.bool();
          break;
        case 6:
          message.isAuctionActive = reader.bool();
          break;
        case 7:
          message.assetOutOraclePrice = reader.bool();
          break;
        case 8:
          message.assetOutPrice = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppAssetIdToAuctionLookupTable {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId)
        ? Long.fromValue(object.assetId)
        : Long.UZERO,
      isSurplusAuction: isSet(object.isSurplusAuction)
        ? Boolean(object.isSurplusAuction)
        : false,
      isDebtAuction: isSet(object.isDebtAuction)
        ? Boolean(object.isDebtAuction)
        : false,
      isDistributor: isSet(object.isDistributor)
        ? Boolean(object.isDistributor)
        : false,
      isAuctionActive: isSet(object.isAuctionActive)
        ? Boolean(object.isAuctionActive)
        : false,
      assetOutOraclePrice: isSet(object.assetOutOraclePrice)
        ? Boolean(object.assetOutOraclePrice)
        : false,
      assetOutPrice: isSet(object.assetOutPrice)
        ? Long.fromValue(object.assetOutPrice)
        : Long.UZERO,
    };
  },

  toJSON(message: AppAssetIdToAuctionLookupTable): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.isSurplusAuction !== undefined &&
      (obj.isSurplusAuction = message.isSurplusAuction);
    message.isDebtAuction !== undefined &&
      (obj.isDebtAuction = message.isDebtAuction);
    message.isDistributor !== undefined &&
      (obj.isDistributor = message.isDistributor);
    message.isAuctionActive !== undefined &&
      (obj.isAuctionActive = message.isAuctionActive);
    message.assetOutOraclePrice !== undefined &&
      (obj.assetOutOraclePrice = message.assetOutOraclePrice);
    message.assetOutPrice !== undefined &&
      (obj.assetOutPrice = (message.assetOutPrice || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppAssetIdToAuctionLookupTable>, I>>(
    object: I
  ): AppAssetIdToAuctionLookupTable {
    const message = createBaseAppAssetIdToAuctionLookupTable();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.isSurplusAuction = object.isSurplusAuction ?? false;
    message.isDebtAuction = object.isDebtAuction ?? false;
    message.isDistributor = object.isDistributor ?? false;
    message.isAuctionActive = object.isAuctionActive ?? false;
    message.assetOutOraclePrice = object.assetOutOraclePrice ?? false;
    message.assetOutPrice =
      object.assetOutPrice !== undefined && object.assetOutPrice !== null
        ? Long.fromValue(object.assetOutPrice)
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
