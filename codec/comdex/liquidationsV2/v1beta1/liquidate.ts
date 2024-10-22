/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.liquidationsV2.v1beta1";

export interface LiquidationWhiteListing {
  appId: Long;
  /**
   * AuctionTriggerer
   * External Apps                  -------------> If external triggerer , then some params will be used from Comdex base app // If internal app triggerrer then params to be used from base app
   * Comdex Apps
   * bool param
   * true - comdex apps
   * false external apps
   */
  initiator: boolean;
  /** Sets of Params for Dutch Auction */
  isDutchActivated: boolean;
  dutchAuctionParam?: DutchAuctionParam;
  /** Sets of Params for English Auction */
  isEnglishActivated: boolean;
  /** One thing to keep in mind that somehow it should not happen that a void is created where something at level 2 gets triggerred and it has no data saved a level 1 for lookup and it fails . */
  englishAuctionParam?: EnglishAuctionParam;
  keeeperIncentive: string;
}

export interface AppReserveFunds {
  appId: Long;
  assetId: Long;
  tokenQuantity?: Coin;
}

export interface AppReserveFundsTxData {
  appId: Long;
  assetTxData: AssetTxData[];
}

export interface AssetTxData {
  assetId: Long;
  txType: string;
  tokenQuantity?: Coin;
}

export interface DutchAuctionParam {
  premium: string;
  discount: string;
  decrementFactor: string;
}

export interface EnglishAuctionParam {
  decrementFactor: string;
}

export interface LiquidationOffsetHolder {
  appId: Long;
  currentOffset: Long;
}

export interface LockedVault {
  id: Long;
  appId: Long;
  originalVaultId: Long;
  extendedPairVaultId: Long;
  owner: string;
  collateralToken?: Coin;
  debtToken?: Coin;
  currentCollateralisationRatio: string;
  collateralToBeAuctioned?: Coin;
  targetDebt?: Coin;
  liquidationTimestamp?: Date;
  /** true for internal liquidator through bot , false if abci initiated liquidation */
  isInternalKeeper: boolean;
  internalKeeperAddress: string;
  /** To return funds to the external app back */
  externalKeeperAddress: string;
  feeToBeCollected: string;
  bonusToBeGiven: string;
  initiatorType: string;
  auctionType: boolean;
  isDebtCmst: boolean;
  /**
   * uint64 pair_id = 21 [
   *   (gogoproto.customname) = "PairId",
   *   (gogoproto.moretags) = "yaml:\"pair_id\""];
   */
  collateralAssetId: Long;
  debtAssetId: Long;
}

function createBaseLiquidationWhiteListing(): LiquidationWhiteListing {
  return {
    appId: Long.UZERO,
    initiator: false,
    isDutchActivated: false,
    dutchAuctionParam: undefined,
    isEnglishActivated: false,
    englishAuctionParam: undefined,
    keeeperIncentive: "",
  };
}

export const LiquidationWhiteListing = {
  encode(message: LiquidationWhiteListing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.initiator === true) {
      writer.uint32(16).bool(message.initiator);
    }
    if (message.isDutchActivated === true) {
      writer.uint32(24).bool(message.isDutchActivated);
    }
    if (message.dutchAuctionParam !== undefined) {
      DutchAuctionParam.encode(message.dutchAuctionParam, writer.uint32(34).fork()).ldelim();
    }
    if (message.isEnglishActivated === true) {
      writer.uint32(40).bool(message.isEnglishActivated);
    }
    if (message.englishAuctionParam !== undefined) {
      EnglishAuctionParam.encode(message.englishAuctionParam, writer.uint32(50).fork()).ldelim();
    }
    if (message.keeeperIncentive !== "") {
      writer.uint32(58).string(message.keeeperIncentive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidationWhiteListing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidationWhiteListing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.initiator = reader.bool();
          break;
        case 3:
          message.isDutchActivated = reader.bool();
          break;
        case 4:
          message.dutchAuctionParam = DutchAuctionParam.decode(reader, reader.uint32());
          break;
        case 5:
          message.isEnglishActivated = reader.bool();
          break;
        case 6:
          message.englishAuctionParam = EnglishAuctionParam.decode(reader, reader.uint32());
          break;
        case 7:
          message.keeeperIncentive = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidationWhiteListing {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      initiator: isSet(object.initiator) ? Boolean(object.initiator) : false,
      isDutchActivated: isSet(object.isDutchActivated) ? Boolean(object.isDutchActivated) : false,
      dutchAuctionParam: isSet(object.dutchAuctionParam)
        ? DutchAuctionParam.fromJSON(object.dutchAuctionParam)
        : undefined,
      isEnglishActivated: isSet(object.isEnglishActivated) ? Boolean(object.isEnglishActivated) : false,
      englishAuctionParam: isSet(object.englishAuctionParam)
        ? EnglishAuctionParam.fromJSON(object.englishAuctionParam)
        : undefined,
      keeeperIncentive: isSet(object.keeeperIncentive) ? String(object.keeeperIncentive) : "",
    };
  },

  toJSON(message: LiquidationWhiteListing): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.isDutchActivated !== undefined && (obj.isDutchActivated = message.isDutchActivated);
    message.dutchAuctionParam !== undefined && (obj.dutchAuctionParam = message.dutchAuctionParam
      ? DutchAuctionParam.toJSON(message.dutchAuctionParam)
      : undefined);
    message.isEnglishActivated !== undefined && (obj.isEnglishActivated = message.isEnglishActivated);
    message.englishAuctionParam !== undefined && (obj.englishAuctionParam = message.englishAuctionParam
      ? EnglishAuctionParam.toJSON(message.englishAuctionParam)
      : undefined);
    message.keeeperIncentive !== undefined && (obj.keeeperIncentive = message.keeeperIncentive);
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidationWhiteListing>, I>>(base?: I): LiquidationWhiteListing {
    return LiquidationWhiteListing.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiquidationWhiteListing>, I>>(object: I): LiquidationWhiteListing {
    const message = createBaseLiquidationWhiteListing();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.initiator = object.initiator ?? false;
    message.isDutchActivated = object.isDutchActivated ?? false;
    message.dutchAuctionParam = (object.dutchAuctionParam !== undefined && object.dutchAuctionParam !== null)
      ? DutchAuctionParam.fromPartial(object.dutchAuctionParam)
      : undefined;
    message.isEnglishActivated = object.isEnglishActivated ?? false;
    message.englishAuctionParam = (object.englishAuctionParam !== undefined && object.englishAuctionParam !== null)
      ? EnglishAuctionParam.fromPartial(object.englishAuctionParam)
      : undefined;
    message.keeeperIncentive = object.keeeperIncentive ?? "";
    return message;
  },
};

function createBaseAppReserveFunds(): AppReserveFunds {
  return { appId: Long.UZERO, assetId: Long.UZERO, tokenQuantity: undefined };
}

export const AppReserveFunds = {
  encode(message: AppReserveFunds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.tokenQuantity !== undefined) {
      Coin.encode(message.tokenQuantity, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppReserveFunds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppReserveFunds();
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
          message.tokenQuantity = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppReserveFunds {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      tokenQuantity: isSet(object.tokenQuantity) ? Coin.fromJSON(object.tokenQuantity) : undefined,
    };
  },

  toJSON(message: AppReserveFunds): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.tokenQuantity !== undefined &&
      (obj.tokenQuantity = message.tokenQuantity ? Coin.toJSON(message.tokenQuantity) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AppReserveFunds>, I>>(base?: I): AppReserveFunds {
    return AppReserveFunds.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppReserveFunds>, I>>(object: I): AppReserveFunds {
    const message = createBaseAppReserveFunds();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.tokenQuantity = (object.tokenQuantity !== undefined && object.tokenQuantity !== null)
      ? Coin.fromPartial(object.tokenQuantity)
      : undefined;
    return message;
  },
};

function createBaseAppReserveFundsTxData(): AppReserveFundsTxData {
  return { appId: Long.UZERO, assetTxData: [] };
}

export const AppReserveFundsTxData = {
  encode(message: AppReserveFundsTxData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    for (const v of message.assetTxData) {
      AssetTxData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppReserveFundsTxData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppReserveFundsTxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.assetTxData.push(AssetTxData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppReserveFundsTxData {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetTxData: Array.isArray(object?.assetTxData)
        ? object.assetTxData.map((e: any) => AssetTxData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AppReserveFundsTxData): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    if (message.assetTxData) {
      obj.assetTxData = message.assetTxData.map((e) => e ? AssetTxData.toJSON(e) : undefined);
    } else {
      obj.assetTxData = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AppReserveFundsTxData>, I>>(base?: I): AppReserveFundsTxData {
    return AppReserveFundsTxData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AppReserveFundsTxData>, I>>(object: I): AppReserveFundsTxData {
    const message = createBaseAppReserveFundsTxData();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.assetTxData = object.assetTxData?.map((e) => AssetTxData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetTxData(): AssetTxData {
  return { assetId: Long.UZERO, txType: "", tokenQuantity: undefined };
}

export const AssetTxData = {
  encode(message: AssetTxData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (message.txType !== "") {
      writer.uint32(18).string(message.txType);
    }
    if (message.tokenQuantity !== undefined) {
      Coin.encode(message.tokenQuantity, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTxData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTxData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.txType = reader.string();
          break;
        case 3:
          message.tokenQuantity = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTxData {
    return {
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      txType: isSet(object.txType) ? String(object.txType) : "",
      tokenQuantity: isSet(object.tokenQuantity) ? Coin.fromJSON(object.tokenQuantity) : undefined,
    };
  },

  toJSON(message: AssetTxData): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.txType !== undefined && (obj.txType = message.txType);
    message.tokenQuantity !== undefined &&
      (obj.tokenQuantity = message.tokenQuantity ? Coin.toJSON(message.tokenQuantity) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetTxData>, I>>(base?: I): AssetTxData {
    return AssetTxData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AssetTxData>, I>>(object: I): AssetTxData {
    const message = createBaseAssetTxData();
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.txType = object.txType ?? "";
    message.tokenQuantity = (object.tokenQuantity !== undefined && object.tokenQuantity !== null)
      ? Coin.fromPartial(object.tokenQuantity)
      : undefined;
    return message;
  },
};

function createBaseDutchAuctionParam(): DutchAuctionParam {
  return { premium: "", discount: "", decrementFactor: "" };
}

export const DutchAuctionParam = {
  encode(message: DutchAuctionParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.premium !== "") {
      writer.uint32(10).string(message.premium);
    }
    if (message.discount !== "") {
      writer.uint32(18).string(message.discount);
    }
    if (message.decrementFactor !== "") {
      writer.uint32(26).string(message.decrementFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DutchAuctionParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDutchAuctionParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.premium = reader.string();
          break;
        case 2:
          message.discount = reader.string();
          break;
        case 3:
          message.decrementFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DutchAuctionParam {
    return {
      premium: isSet(object.premium) ? String(object.premium) : "",
      discount: isSet(object.discount) ? String(object.discount) : "",
      decrementFactor: isSet(object.decrementFactor) ? String(object.decrementFactor) : "",
    };
  },

  toJSON(message: DutchAuctionParam): unknown {
    const obj: any = {};
    message.premium !== undefined && (obj.premium = message.premium);
    message.discount !== undefined && (obj.discount = message.discount);
    message.decrementFactor !== undefined && (obj.decrementFactor = message.decrementFactor);
    return obj;
  },

  create<I extends Exact<DeepPartial<DutchAuctionParam>, I>>(base?: I): DutchAuctionParam {
    return DutchAuctionParam.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DutchAuctionParam>, I>>(object: I): DutchAuctionParam {
    const message = createBaseDutchAuctionParam();
    message.premium = object.premium ?? "";
    message.discount = object.discount ?? "";
    message.decrementFactor = object.decrementFactor ?? "";
    return message;
  },
};

function createBaseEnglishAuctionParam(): EnglishAuctionParam {
  return { decrementFactor: "" };
}

export const EnglishAuctionParam = {
  encode(message: EnglishAuctionParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.decrementFactor !== "") {
      writer.uint32(10).string(message.decrementFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnglishAuctionParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnglishAuctionParam();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.decrementFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnglishAuctionParam {
    return { decrementFactor: isSet(object.decrementFactor) ? String(object.decrementFactor) : "" };
  },

  toJSON(message: EnglishAuctionParam): unknown {
    const obj: any = {};
    message.decrementFactor !== undefined && (obj.decrementFactor = message.decrementFactor);
    return obj;
  },

  create<I extends Exact<DeepPartial<EnglishAuctionParam>, I>>(base?: I): EnglishAuctionParam {
    return EnglishAuctionParam.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EnglishAuctionParam>, I>>(object: I): EnglishAuctionParam {
    const message = createBaseEnglishAuctionParam();
    message.decrementFactor = object.decrementFactor ?? "";
    return message;
  },
};

function createBaseLiquidationOffsetHolder(): LiquidationOffsetHolder {
  return { appId: Long.UZERO, currentOffset: Long.UZERO };
}

export const LiquidationOffsetHolder = {
  encode(message: LiquidationOffsetHolder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.currentOffset.isZero()) {
      writer.uint32(16).uint64(message.currentOffset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidationOffsetHolder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidationOffsetHolder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.currentOffset = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidationOffsetHolder {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      currentOffset: isSet(object.currentOffset) ? Long.fromValue(object.currentOffset) : Long.UZERO,
    };
  },

  toJSON(message: LiquidationOffsetHolder): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.currentOffset !== undefined && (obj.currentOffset = (message.currentOffset || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidationOffsetHolder>, I>>(base?: I): LiquidationOffsetHolder {
    return LiquidationOffsetHolder.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LiquidationOffsetHolder>, I>>(object: I): LiquidationOffsetHolder {
    const message = createBaseLiquidationOffsetHolder();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.currentOffset = (object.currentOffset !== undefined && object.currentOffset !== null)
      ? Long.fromValue(object.currentOffset)
      : Long.UZERO;
    return message;
  },
};

function createBaseLockedVault(): LockedVault {
  return {
    id: Long.UZERO,
    appId: Long.UZERO,
    originalVaultId: Long.UZERO,
    extendedPairVaultId: Long.UZERO,
    owner: "",
    collateralToken: undefined,
    debtToken: undefined,
    currentCollateralisationRatio: "",
    collateralToBeAuctioned: undefined,
    targetDebt: undefined,
    liquidationTimestamp: undefined,
    isInternalKeeper: false,
    internalKeeperAddress: "",
    externalKeeperAddress: "",
    feeToBeCollected: "",
    bonusToBeGiven: "",
    initiatorType: "",
    auctionType: false,
    isDebtCmst: false,
    collateralAssetId: Long.UZERO,
    debtAssetId: Long.UZERO,
  };
}

export const LockedVault = {
  encode(message: LockedVault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.appId.isZero()) {
      writer.uint32(16).uint64(message.appId);
    }
    if (!message.originalVaultId.isZero()) {
      writer.uint32(24).uint64(message.originalVaultId);
    }
    if (!message.extendedPairVaultId.isZero()) {
      writer.uint32(32).uint64(message.extendedPairVaultId);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.collateralToken !== undefined) {
      Coin.encode(message.collateralToken, writer.uint32(50).fork()).ldelim();
    }
    if (message.debtToken !== undefined) {
      Coin.encode(message.debtToken, writer.uint32(58).fork()).ldelim();
    }
    if (message.currentCollateralisationRatio !== "") {
      writer.uint32(66).string(message.currentCollateralisationRatio);
    }
    if (message.collateralToBeAuctioned !== undefined) {
      Coin.encode(message.collateralToBeAuctioned, writer.uint32(74).fork()).ldelim();
    }
    if (message.targetDebt !== undefined) {
      Coin.encode(message.targetDebt, writer.uint32(82).fork()).ldelim();
    }
    if (message.liquidationTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.liquidationTimestamp), writer.uint32(90).fork()).ldelim();
    }
    if (message.isInternalKeeper === true) {
      writer.uint32(96).bool(message.isInternalKeeper);
    }
    if (message.internalKeeperAddress !== "") {
      writer.uint32(106).string(message.internalKeeperAddress);
    }
    if (message.externalKeeperAddress !== "") {
      writer.uint32(122).string(message.externalKeeperAddress);
    }
    if (message.feeToBeCollected !== "") {
      writer.uint32(130).string(message.feeToBeCollected);
    }
    if (message.bonusToBeGiven !== "") {
      writer.uint32(138).string(message.bonusToBeGiven);
    }
    if (message.initiatorType !== "") {
      writer.uint32(146).string(message.initiatorType);
    }
    if (message.auctionType === true) {
      writer.uint32(152).bool(message.auctionType);
    }
    if (message.isDebtCmst === true) {
      writer.uint32(160).bool(message.isDebtCmst);
    }
    if (!message.collateralAssetId.isZero()) {
      writer.uint32(168).uint64(message.collateralAssetId);
    }
    if (!message.debtAssetId.isZero()) {
      writer.uint32(176).uint64(message.debtAssetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockedVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockedVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.appId = reader.uint64() as Long;
          break;
        case 3:
          message.originalVaultId = reader.uint64() as Long;
          break;
        case 4:
          message.extendedPairVaultId = reader.uint64() as Long;
          break;
        case 5:
          message.owner = reader.string();
          break;
        case 6:
          message.collateralToken = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.debtToken = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.currentCollateralisationRatio = reader.string();
          break;
        case 9:
          message.collateralToBeAuctioned = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.targetDebt = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.liquidationTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.isInternalKeeper = reader.bool();
          break;
        case 13:
          message.internalKeeperAddress = reader.string();
          break;
        case 15:
          message.externalKeeperAddress = reader.string();
          break;
        case 16:
          message.feeToBeCollected = reader.string();
          break;
        case 17:
          message.bonusToBeGiven = reader.string();
          break;
        case 18:
          message.initiatorType = reader.string();
          break;
        case 19:
          message.auctionType = reader.bool();
          break;
        case 20:
          message.isDebtCmst = reader.bool();
          break;
        case 21:
          message.collateralAssetId = reader.uint64() as Long;
          break;
        case 22:
          message.debtAssetId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockedVault {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      originalVaultId: isSet(object.originalVaultId) ? Long.fromValue(object.originalVaultId) : Long.UZERO,
      extendedPairVaultId: isSet(object.extendedPairVaultId) ? Long.fromValue(object.extendedPairVaultId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralToken: isSet(object.collateralToken) ? Coin.fromJSON(object.collateralToken) : undefined,
      debtToken: isSet(object.debtToken) ? Coin.fromJSON(object.debtToken) : undefined,
      currentCollateralisationRatio: isSet(object.currentCollateralisationRatio)
        ? String(object.currentCollateralisationRatio)
        : "",
      collateralToBeAuctioned: isSet(object.collateralToBeAuctioned)
        ? Coin.fromJSON(object.collateralToBeAuctioned)
        : undefined,
      targetDebt: isSet(object.targetDebt) ? Coin.fromJSON(object.targetDebt) : undefined,
      liquidationTimestamp: isSet(object.liquidationTimestamp)
        ? fromJsonTimestamp(object.liquidationTimestamp)
        : undefined,
      isInternalKeeper: isSet(object.isInternalKeeper) ? Boolean(object.isInternalKeeper) : false,
      internalKeeperAddress: isSet(object.internalKeeperAddress) ? String(object.internalKeeperAddress) : "",
      externalKeeperAddress: isSet(object.externalKeeperAddress) ? String(object.externalKeeperAddress) : "",
      feeToBeCollected: isSet(object.feeToBeCollected) ? String(object.feeToBeCollected) : "",
      bonusToBeGiven: isSet(object.bonusToBeGiven) ? String(object.bonusToBeGiven) : "",
      initiatorType: isSet(object.initiatorType) ? String(object.initiatorType) : "",
      auctionType: isSet(object.auctionType) ? Boolean(object.auctionType) : false,
      isDebtCmst: isSet(object.isDebtCmst) ? Boolean(object.isDebtCmst) : false,
      collateralAssetId: isSet(object.collateralAssetId) ? Long.fromValue(object.collateralAssetId) : Long.UZERO,
      debtAssetId: isSet(object.debtAssetId) ? Long.fromValue(object.debtAssetId) : Long.UZERO,
    };
  },

  toJSON(message: LockedVault): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.originalVaultId !== undefined && (obj.originalVaultId = (message.originalVaultId || Long.UZERO).toString());
    message.extendedPairVaultId !== undefined &&
      (obj.extendedPairVaultId = (message.extendedPairVaultId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralToken !== undefined &&
      (obj.collateralToken = message.collateralToken ? Coin.toJSON(message.collateralToken) : undefined);
    message.debtToken !== undefined && (obj.debtToken = message.debtToken ? Coin.toJSON(message.debtToken) : undefined);
    message.currentCollateralisationRatio !== undefined &&
      (obj.currentCollateralisationRatio = message.currentCollateralisationRatio);
    message.collateralToBeAuctioned !== undefined && (obj.collateralToBeAuctioned = message.collateralToBeAuctioned
      ? Coin.toJSON(message.collateralToBeAuctioned)
      : undefined);
    message.targetDebt !== undefined &&
      (obj.targetDebt = message.targetDebt ? Coin.toJSON(message.targetDebt) : undefined);
    message.liquidationTimestamp !== undefined &&
      (obj.liquidationTimestamp = message.liquidationTimestamp.toISOString());
    message.isInternalKeeper !== undefined && (obj.isInternalKeeper = message.isInternalKeeper);
    message.internalKeeperAddress !== undefined && (obj.internalKeeperAddress = message.internalKeeperAddress);
    message.externalKeeperAddress !== undefined && (obj.externalKeeperAddress = message.externalKeeperAddress);
    message.feeToBeCollected !== undefined && (obj.feeToBeCollected = message.feeToBeCollected);
    message.bonusToBeGiven !== undefined && (obj.bonusToBeGiven = message.bonusToBeGiven);
    message.initiatorType !== undefined && (obj.initiatorType = message.initiatorType);
    message.auctionType !== undefined && (obj.auctionType = message.auctionType);
    message.isDebtCmst !== undefined && (obj.isDebtCmst = message.isDebtCmst);
    message.collateralAssetId !== undefined &&
      (obj.collateralAssetId = (message.collateralAssetId || Long.UZERO).toString());
    message.debtAssetId !== undefined && (obj.debtAssetId = (message.debtAssetId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<LockedVault>, I>>(base?: I): LockedVault {
    return LockedVault.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LockedVault>, I>>(object: I): LockedVault {
    const message = createBaseLockedVault();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.originalVaultId = (object.originalVaultId !== undefined && object.originalVaultId !== null)
      ? Long.fromValue(object.originalVaultId)
      : Long.UZERO;
    message.extendedPairVaultId = (object.extendedPairVaultId !== undefined && object.extendedPairVaultId !== null)
      ? Long.fromValue(object.extendedPairVaultId)
      : Long.UZERO;
    message.owner = object.owner ?? "";
    message.collateralToken = (object.collateralToken !== undefined && object.collateralToken !== null)
      ? Coin.fromPartial(object.collateralToken)
      : undefined;
    message.debtToken = (object.debtToken !== undefined && object.debtToken !== null)
      ? Coin.fromPartial(object.debtToken)
      : undefined;
    message.currentCollateralisationRatio = object.currentCollateralisationRatio ?? "";
    message.collateralToBeAuctioned =
      (object.collateralToBeAuctioned !== undefined && object.collateralToBeAuctioned !== null)
        ? Coin.fromPartial(object.collateralToBeAuctioned)
        : undefined;
    message.targetDebt = (object.targetDebt !== undefined && object.targetDebt !== null)
      ? Coin.fromPartial(object.targetDebt)
      : undefined;
    message.liquidationTimestamp = object.liquidationTimestamp ?? undefined;
    message.isInternalKeeper = object.isInternalKeeper ?? false;
    message.internalKeeperAddress = object.internalKeeperAddress ?? "";
    message.externalKeeperAddress = object.externalKeeperAddress ?? "";
    message.feeToBeCollected = object.feeToBeCollected ?? "";
    message.bonusToBeGiven = object.bonusToBeGiven ?? "";
    message.initiatorType = object.initiatorType ?? "";
    message.auctionType = object.auctionType ?? false;
    message.isDebtCmst = object.isDebtCmst ?? false;
    message.collateralAssetId = (object.collateralAssetId !== undefined && object.collateralAssetId !== null)
      ? Long.fromValue(object.collateralAssetId)
      : Long.UZERO;
    message.debtAssetId = (object.debtAssetId !== undefined && object.debtAssetId !== null)
      ? Long.fromValue(object.debtAssetId)
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
