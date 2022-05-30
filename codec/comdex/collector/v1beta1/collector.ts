/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "comdex.collector.v1beta1";

export interface CollectorData {
  collectedStabilityFee: string;
  collectedClosingFee: string;
  collectedOpeningFee: string;
  liquidationRewardsCollected: string;
}

export interface NetFeeCollectedData {
  appId: Long;
  assetIdToFeeCollected: AssetIdToFeeCollected[];
}

export interface AssetIdToFeeCollected {
  assetId: Long;
  netFeesCollected: string;
}

export interface AppIdToAssetCollectorMapping {
  appId: Long;
  assetCollector: AssetIdCollectorMappping[];
}

export interface AssetIdCollectorMappping {
  assetId: Long;
  collector?: CollectorData;
}

export interface CollectorLookupTable {
  appId: Long;
  collectorAssetId: Long;
  secondaryAssetId: Long;
  surplusThreshold: Long;
  debtThreshold: Long;
  lockerSavingRate: string;
  lotSize: Long;
  bidFactor: string;
}

export interface CollectorLookup {
  appId: Long;
  assetrateInfo: CollectorLookupTable[];
}

export interface AppToDenomsMapping {
  appId: Long;
  assetIds: Long[];
}

export interface HistoricalAuction {
  appId: Long;
  assetToAuction: AssetToAuctionMapping[];
}

export interface AssetToAuctionMapping {
  auctionId: Long;
  assetDenoms: string[];
}

export interface CollectorAuctionLookupTable {
  appId: Long;
  assetIdToAuctionLookup: AssetIdToAuctionLookupTable[];
}

export interface AssetIdToAuctionLookupTable {
  assetId: Long;
  isSurplusAuction: boolean;
  isDebtAuction: boolean;
  isAuctionActive: boolean;
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
      writer.uint32(42).string(message.liquidationRewardsCollected);
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
        case 5:
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

function createBaseNetFeeCollectedData(): NetFeeCollectedData {
  return { appId: Long.UZERO, assetIdToFeeCollected: [] };
}

export const NetFeeCollectedData = {
  encode(
    message: NetFeeCollectedData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assetIdToFeeCollected) {
      AssetIdToFeeCollected.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetFeeCollectedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetFeeCollectedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetIdToFeeCollected.push(
            AssetIdToFeeCollected.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetFeeCollectedData {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetIdToFeeCollected: Array.isArray(object?.assetIdToFeeCollected)
        ? object.assetIdToFeeCollected.map((e: any) =>
            AssetIdToFeeCollected.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: NetFeeCollectedData): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetIdToFeeCollected) {
      obj.assetIdToFeeCollected = message.assetIdToFeeCollected.map((e) =>
        e ? AssetIdToFeeCollected.toJSON(e) : undefined
      );
    } else {
      obj.assetIdToFeeCollected = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetFeeCollectedData>, I>>(
    object: I
  ): NetFeeCollectedData {
    const message = createBaseNetFeeCollectedData();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetIdToFeeCollected =
      object.assetIdToFeeCollected?.map((e) =>
        AssetIdToFeeCollected.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseAssetIdToFeeCollected(): AssetIdToFeeCollected {
  return { assetId: Long.UZERO, netFeesCollected: "" };
}

export const AssetIdToFeeCollected = {
  encode(
    message: AssetIdToFeeCollected,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.netFeesCollected !== "") {
      writer.uint32(18).string(message.netFeesCollected);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetIdToFeeCollected {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetIdToFeeCollected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.netFeesCollected = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetIdToFeeCollected {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromString(object.assetId)
        : Long.UZERO,
      netFeesCollected: isSet(object.netFeesCollected)
        ? String(object.netFeesCollected)
        : "",
    };
  },

  toJSON(message: AssetIdToFeeCollected): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.netFeesCollected !== undefined &&
      (obj.netFeesCollected = message.netFeesCollected);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetIdToFeeCollected>, I>>(
    object: I
  ): AssetIdToFeeCollected {
    const message = createBaseAssetIdToFeeCollected();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.netFeesCollected = object.netFeesCollected ?? "";
    return message;
  },
};

function createBaseAppIdToAssetCollectorMapping(): AppIdToAssetCollectorMapping {
  return { appId: Long.UZERO, assetCollector: [] };
}

export const AppIdToAssetCollectorMapping = {
  encode(
    message: AppIdToAssetCollectorMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assetCollector) {
      AssetIdCollectorMappping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AppIdToAssetCollectorMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppIdToAssetCollectorMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetCollector.push(
            AssetIdCollectorMappping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppIdToAssetCollectorMapping {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetCollector: Array.isArray(object?.assetCollector)
        ? object.assetCollector.map((e: any) =>
            AssetIdCollectorMappping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: AppIdToAssetCollectorMapping): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetCollector) {
      obj.assetCollector = message.assetCollector.map((e) =>
        e ? AssetIdCollectorMappping.toJSON(e) : undefined
      );
    } else {
      obj.assetCollector = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppIdToAssetCollectorMapping>, I>>(
    object: I
  ): AppIdToAssetCollectorMapping {
    const message = createBaseAppIdToAssetCollectorMapping();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetCollector =
      object.assetCollector?.map((e) =>
        AssetIdCollectorMappping.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseAssetIdCollectorMappping(): AssetIdCollectorMappping {
  return { assetId: Long.UZERO, collector: undefined };
}

export const AssetIdCollectorMappping = {
  encode(
    message: AssetIdCollectorMappping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.collector !== undefined) {
      CollectorData.encode(
        message.collector,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetIdCollectorMappping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetIdCollectorMappping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.collector = CollectorData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetIdCollectorMappping {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromString(object.assetId)
        : Long.UZERO,
      collector: isSet(object.collector)
        ? CollectorData.fromJSON(object.collector)
        : undefined,
    };
  },

  toJSON(message: AssetIdCollectorMappping): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.collector !== undefined &&
      (obj.collector = message.collector
        ? CollectorData.toJSON(message.collector)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetIdCollectorMappping>, I>>(
    object: I
  ): AssetIdCollectorMappping {
    const message = createBaseAssetIdCollectorMappping();
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

function createBaseCollectorLookupTable(): CollectorLookupTable {
  return {
    appId: Long.UZERO,
    collectorAssetId: Long.UZERO,
    secondaryAssetId: Long.UZERO,
    surplusThreshold: Long.UZERO,
    debtThreshold: Long.UZERO,
    lockerSavingRate: "",
    lotSize: Long.UZERO,
    bidFactor: "",
  };
}

export const CollectorLookupTable = {
  encode(
    message: CollectorLookupTable,
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
    if (!message.surplusThreshold.isZero()) {
      writer.uint32(32).uint64(message.surplusThreshold);
    }
    if (!message.debtThreshold.isZero()) {
      writer.uint32(40).uint64(message.debtThreshold);
    }
    if (message.lockerSavingRate !== "") {
      writer.uint32(50).string(message.lockerSavingRate);
    }
    if (!message.lotSize.isZero()) {
      writer.uint32(56).uint64(message.lotSize);
    }
    if (message.bidFactor !== "") {
      writer.uint32(66).string(message.bidFactor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollectorLookupTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectorLookupTable();
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
          message.surplusThreshold = reader.uint64() as Long;
          break;
        case 5:
          message.debtThreshold = reader.uint64() as Long;
          break;
        case 6:
          message.lockerSavingRate = reader.string();
          break;
        case 7:
          message.lotSize = reader.uint64() as Long;
          break;
        case 8:
          message.bidFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectorLookupTable {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      collectorAssetId: isSet(object.collectorAssetId)
        ? Long.fromString(object.collectorAssetId)
        : Long.UZERO,
      secondaryAssetId: isSet(object.secondaryAssetId)
        ? Long.fromString(object.secondaryAssetId)
        : Long.UZERO,
      surplusThreshold: isSet(object.surplusThreshold)
        ? Long.fromString(object.surplusThreshold)
        : Long.UZERO,
      debtThreshold: isSet(object.debtThreshold)
        ? Long.fromString(object.debtThreshold)
        : Long.UZERO,
      lockerSavingRate: isSet(object.lockerSavingRate)
        ? String(object.lockerSavingRate)
        : "",
      lotSize: isSet(object.lotSize)
        ? Long.fromString(object.lotSize)
        : Long.UZERO,
      bidFactor: isSet(object.bidFactor) ? String(object.bidFactor) : "",
    };
  },

  toJSON(message: CollectorLookupTable): unknown {
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
      (obj.surplusThreshold = (
        message.surplusThreshold || Long.UZERO
      ).toString());
    message.debtThreshold !== undefined &&
      (obj.debtThreshold = (message.debtThreshold || Long.UZERO).toString());
    message.lockerSavingRate !== undefined &&
      (obj.lockerSavingRate = message.lockerSavingRate);
    message.lotSize !== undefined &&
      (obj.lotSize = (message.lotSize || Long.UZERO).toString());
    message.bidFactor !== undefined && (obj.bidFactor = message.bidFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollectorLookupTable>, I>>(
    object: I
  ): CollectorLookupTable {
    const message = createBaseCollectorLookupTable();
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
    message.surplusThreshold =
      object.surplusThreshold !== undefined && object.surplusThreshold !== null
        ? Long.fromValue(object.surplusThreshold)
        : Long.UZERO;
    message.debtThreshold =
      object.debtThreshold !== undefined && object.debtThreshold !== null
        ? Long.fromValue(object.debtThreshold)
        : Long.UZERO;
    message.lockerSavingRate = object.lockerSavingRate ?? "";
    message.lotSize =
      object.lotSize !== undefined && object.lotSize !== null
        ? Long.fromValue(object.lotSize)
        : Long.UZERO;
    message.bidFactor = object.bidFactor ?? "";
    return message;
  },
};

function createBaseCollectorLookup(): CollectorLookup {
  return { appId: Long.UZERO, assetrateInfo: [] };
}

export const CollectorLookup = {
  encode(
    message: CollectorLookup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assetrateInfo) {
      CollectorLookupTable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectorLookup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectorLookup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetrateInfo.push(
            CollectorLookupTable.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectorLookup {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetrateInfo: Array.isArray(object?.assetrateInfo)
        ? object.assetrateInfo.map((e: any) => CollectorLookupTable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CollectorLookup): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetrateInfo) {
      obj.assetrateInfo = message.assetrateInfo.map((e) =>
        e ? CollectorLookupTable.toJSON(e) : undefined
      );
    } else {
      obj.assetrateInfo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollectorLookup>, I>>(
    object: I
  ): CollectorLookup {
    const message = createBaseCollectorLookup();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetrateInfo =
      object.assetrateInfo?.map((e) => CollectorLookupTable.fromPartial(e)) ||
      [];
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
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetIds: Array.isArray(object?.assetIds)
        ? object.assetIds.map((e: any) => Long.fromString(e))
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

function createBaseHistoricalAuction(): HistoricalAuction {
  return { appId: Long.UZERO, assetToAuction: [] };
}

export const HistoricalAuction = {
  encode(
    message: HistoricalAuction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assetToAuction) {
      AssetToAuctionMapping.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetToAuction.push(
            AssetToAuctionMapping.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalAuction {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetToAuction: Array.isArray(object?.assetToAuction)
        ? object.assetToAuction.map((e: any) =>
            AssetToAuctionMapping.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: HistoricalAuction): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetToAuction) {
      obj.assetToAuction = message.assetToAuction.map((e) =>
        e ? AssetToAuctionMapping.toJSON(e) : undefined
      );
    } else {
      obj.assetToAuction = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HistoricalAuction>, I>>(
    object: I
  ): HistoricalAuction {
    const message = createBaseHistoricalAuction();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetToAuction =
      object.assetToAuction?.map((e) => AssetToAuctionMapping.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseAssetToAuctionMapping(): AssetToAuctionMapping {
  return { auctionId: Long.UZERO, assetDenoms: [] };
}

export const AssetToAuctionMapping = {
  encode(
    message: AssetToAuctionMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    for (const v of message.assetDenoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetToAuctionMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetToAuctionMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.assetDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetToAuctionMapping {
    return {
      auctionId: isSet(object.auctionId)
        ? Long.fromString(object.auctionId)
        : Long.UZERO,
      assetDenoms: Array.isArray(object?.assetDenoms)
        ? object.assetDenoms.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: AssetToAuctionMapping): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    if (message.assetDenoms) {
      obj.assetDenoms = message.assetDenoms.map((e) => e);
    } else {
      obj.assetDenoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetToAuctionMapping>, I>>(
    object: I
  ): AssetToAuctionMapping {
    const message = createBaseAssetToAuctionMapping();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.assetDenoms = object.assetDenoms?.map((e) => e) || [];
    return message;
  },
};

function createBaseCollectorAuctionLookupTable(): CollectorAuctionLookupTable {
  return { appId: Long.UZERO, assetIdToAuctionLookup: [] };
}

export const CollectorAuctionLookupTable = {
  encode(
    message: CollectorAuctionLookupTable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assetIdToAuctionLookup) {
      AssetIdToAuctionLookupTable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollectorAuctionLookupTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectorAuctionLookupTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetIdToAuctionLookup.push(
            AssetIdToAuctionLookupTable.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectorAuctionLookupTable {
    return {
      appId: isSet(object.appId) ? Long.fromString(object.appId) : Long.UZERO,
      assetIdToAuctionLookup: Array.isArray(object?.assetIdToAuctionLookup)
        ? object.assetIdToAuctionLookup.map((e: any) =>
            AssetIdToAuctionLookupTable.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: CollectorAuctionLookupTable): unknown {
    const obj: any = {};
    message.appId !== undefined &&
      (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetIdToAuctionLookup) {
      obj.assetIdToAuctionLookup = message.assetIdToAuctionLookup.map((e) =>
        e ? AssetIdToAuctionLookupTable.toJSON(e) : undefined
      );
    } else {
      obj.assetIdToAuctionLookup = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollectorAuctionLookupTable>, I>>(
    object: I
  ): CollectorAuctionLookupTable {
    const message = createBaseCollectorAuctionLookupTable();
    message.appId =
      object.appId !== undefined && object.appId !== null
        ? Long.fromValue(object.appId)
        : Long.UZERO;
    message.assetIdToAuctionLookup =
      object.assetIdToAuctionLookup?.map((e) =>
        AssetIdToAuctionLookupTable.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseAssetIdToAuctionLookupTable(): AssetIdToAuctionLookupTable {
  return {
    assetId: Long.UZERO,
    isSurplusAuction: false,
    isDebtAuction: false,
    isAuctionActive: false,
  };
}

export const AssetIdToAuctionLookupTable = {
  encode(
    message: AssetIdToAuctionLookupTable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.isSurplusAuction === true) {
      writer.uint32(16).bool(message.isSurplusAuction);
    }
    if (message.isDebtAuction === true) {
      writer.uint32(24).bool(message.isDebtAuction);
    }
    if (message.isAuctionActive === true) {
      writer.uint32(32).bool(message.isAuctionActive);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetIdToAuctionLookupTable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetIdToAuctionLookupTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.isSurplusAuction = reader.bool();
          break;
        case 3:
          message.isDebtAuction = reader.bool();
          break;
        case 4:
          message.isAuctionActive = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetIdToAuctionLookupTable {
    return {
      assetId: isSet(object.assetId)
        ? Long.fromString(object.assetId)
        : Long.UZERO,
      isSurplusAuction: isSet(object.isSurplusAuction)
        ? Boolean(object.isSurplusAuction)
        : false,
      isDebtAuction: isSet(object.isDebtAuction)
        ? Boolean(object.isDebtAuction)
        : false,
      isAuctionActive: isSet(object.isAuctionActive)
        ? Boolean(object.isAuctionActive)
        : false,
    };
  },

  toJSON(message: AssetIdToAuctionLookupTable): unknown {
    const obj: any = {};
    message.assetId !== undefined &&
      (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.isSurplusAuction !== undefined &&
      (obj.isSurplusAuction = message.isSurplusAuction);
    message.isDebtAuction !== undefined &&
      (obj.isDebtAuction = message.isDebtAuction);
    message.isAuctionActive !== undefined &&
      (obj.isAuctionActive = message.isAuctionActive);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetIdToAuctionLookupTable>, I>>(
    object: I
  ): AssetIdToAuctionLookupTable {
    const message = createBaseAssetIdToAuctionLookupTable();
    message.assetId =
      object.assetId !== undefined && object.assetId !== null
        ? Long.fromValue(object.assetId)
        : Long.UZERO;
    message.isSurplusAuction = object.isSurplusAuction ?? false;
    message.isDebtAuction = object.isDebtAuction ?? false;
    message.isAuctionActive = object.isAuctionActive ?? false;
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
