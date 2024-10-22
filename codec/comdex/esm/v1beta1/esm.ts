/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "comdex.esm.v1beta1";

export interface ESMTriggerParams {
  appId: Long;
  targetValue?: Coin;
  coolOffPeriod: Long;
  assetsRates: DebtAssetsRates[];
}

export interface CurrentDepositStats {
  appId: Long;
  balance?: Coin;
}

export interface ESMStatus {
  appId: Long;
  executor: string;
  status: boolean;
  startTime?: Date;
  endTime?: Date;
  vaultRedemptionStatus: boolean;
  snapshotStatus: boolean;
  stableVaultRedemptionStatus: boolean;
  collectorTransaction: boolean;
  shareCalculation: boolean;
}

export interface KillSwitchParams {
  appId: Long;
  breakerEnable: boolean;
}

export interface UsersDepositMapping {
  appId: Long;
  depositor: string;
  deposits?: Coin;
}

export interface DataAfterCoolOff {
  appId: Long;
  collateralTotalAmount: string;
  debtTotalAmount: string;
}

export interface AssetToAmount {
  appId: Long;
  assetId: Long;
  amount: string;
  share: string;
  debtTokenWorth: string;
  isCollateral: boolean;
}

export interface DebtAssetsRates {
  assetId: Long;
  rates: Long;
}

function createBaseESMTriggerParams(): ESMTriggerParams {
  return { appId: Long.UZERO, targetValue: undefined, coolOffPeriod: Long.UZERO, assetsRates: [] };
}

export const ESMTriggerParams = {
  encode(message: ESMTriggerParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.targetValue !== undefined) {
      Coin.encode(message.targetValue, writer.uint32(18).fork()).ldelim();
    }
    if (!message.coolOffPeriod.isZero()) {
      writer.uint32(24).uint64(message.coolOffPeriod);
    }
    for (const v of message.assetsRates) {
      DebtAssetsRates.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ESMTriggerParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseESMTriggerParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.targetValue = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.coolOffPeriod = reader.uint64() as Long;
          break;
        case 4:
          message.assetsRates.push(DebtAssetsRates.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ESMTriggerParams {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      targetValue: isSet(object.targetValue) ? Coin.fromJSON(object.targetValue) : undefined,
      coolOffPeriod: isSet(object.coolOffPeriod) ? Long.fromValue(object.coolOffPeriod) : Long.UZERO,
      assetsRates: Array.isArray(object?.assetsRates)
        ? object.assetsRates.map((e: any) => DebtAssetsRates.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ESMTriggerParams): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.targetValue !== undefined &&
      (obj.targetValue = message.targetValue ? Coin.toJSON(message.targetValue) : undefined);
    message.coolOffPeriod !== undefined && (obj.coolOffPeriod = (message.coolOffPeriod || Long.UZERO).toString());
    if (message.assetsRates) {
      obj.assetsRates = message.assetsRates.map((e) => e ? DebtAssetsRates.toJSON(e) : undefined);
    } else {
      obj.assetsRates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ESMTriggerParams>, I>>(base?: I): ESMTriggerParams {
    return ESMTriggerParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ESMTriggerParams>, I>>(object: I): ESMTriggerParams {
    const message = createBaseESMTriggerParams();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.targetValue = (object.targetValue !== undefined && object.targetValue !== null)
      ? Coin.fromPartial(object.targetValue)
      : undefined;
    message.coolOffPeriod = (object.coolOffPeriod !== undefined && object.coolOffPeriod !== null)
      ? Long.fromValue(object.coolOffPeriod)
      : Long.UZERO;
    message.assetsRates = object.assetsRates?.map((e) => DebtAssetsRates.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCurrentDepositStats(): CurrentDepositStats {
  return { appId: Long.UZERO, balance: undefined };
}

export const CurrentDepositStats = {
  encode(message: CurrentDepositStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentDepositStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentDepositStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentDepositStats {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: CurrentDepositStats): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentDepositStats>, I>>(base?: I): CurrentDepositStats {
    return CurrentDepositStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CurrentDepositStats>, I>>(object: I): CurrentDepositStats {
    const message = createBaseCurrentDepositStats();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Coin.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseESMStatus(): ESMStatus {
  return {
    appId: Long.UZERO,
    executor: "",
    status: false,
    startTime: undefined,
    endTime: undefined,
    vaultRedemptionStatus: false,
    snapshotStatus: false,
    stableVaultRedemptionStatus: false,
    collectorTransaction: false,
    shareCalculation: false,
  };
}

export const ESMStatus = {
  encode(message: ESMStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    if (message.status === true) {
      writer.uint32(24).bool(message.status);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.vaultRedemptionStatus === true) {
      writer.uint32(48).bool(message.vaultRedemptionStatus);
    }
    if (message.snapshotStatus === true) {
      writer.uint32(56).bool(message.snapshotStatus);
    }
    if (message.stableVaultRedemptionStatus === true) {
      writer.uint32(64).bool(message.stableVaultRedemptionStatus);
    }
    if (message.collectorTransaction === true) {
      writer.uint32(72).bool(message.collectorTransaction);
    }
    if (message.shareCalculation === true) {
      writer.uint32(80).bool(message.shareCalculation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ESMStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseESMStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.executor = reader.string();
          break;
        case 3:
          message.status = reader.bool();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.vaultRedemptionStatus = reader.bool();
          break;
        case 7:
          message.snapshotStatus = reader.bool();
          break;
        case 8:
          message.stableVaultRedemptionStatus = reader.bool();
          break;
        case 9:
          message.collectorTransaction = reader.bool();
          break;
        case 10:
          message.shareCalculation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ESMStatus {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      executor: isSet(object.executor) ? String(object.executor) : "",
      status: isSet(object.status) ? Boolean(object.status) : false,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      vaultRedemptionStatus: isSet(object.vaultRedemptionStatus) ? Boolean(object.vaultRedemptionStatus) : false,
      snapshotStatus: isSet(object.snapshotStatus) ? Boolean(object.snapshotStatus) : false,
      stableVaultRedemptionStatus: isSet(object.stableVaultRedemptionStatus)
        ? Boolean(object.stableVaultRedemptionStatus)
        : false,
      collectorTransaction: isSet(object.collectorTransaction) ? Boolean(object.collectorTransaction) : false,
      shareCalculation: isSet(object.shareCalculation) ? Boolean(object.shareCalculation) : false,
    };
  },

  toJSON(message: ESMStatus): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.executor !== undefined && (obj.executor = message.executor);
    message.status !== undefined && (obj.status = message.status);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    message.vaultRedemptionStatus !== undefined && (obj.vaultRedemptionStatus = message.vaultRedemptionStatus);
    message.snapshotStatus !== undefined && (obj.snapshotStatus = message.snapshotStatus);
    message.stableVaultRedemptionStatus !== undefined &&
      (obj.stableVaultRedemptionStatus = message.stableVaultRedemptionStatus);
    message.collectorTransaction !== undefined && (obj.collectorTransaction = message.collectorTransaction);
    message.shareCalculation !== undefined && (obj.shareCalculation = message.shareCalculation);
    return obj;
  },

  create<I extends Exact<DeepPartial<ESMStatus>, I>>(base?: I): ESMStatus {
    return ESMStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ESMStatus>, I>>(object: I): ESMStatus {
    const message = createBaseESMStatus();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.executor = object.executor ?? "";
    message.status = object.status ?? false;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.vaultRedemptionStatus = object.vaultRedemptionStatus ?? false;
    message.snapshotStatus = object.snapshotStatus ?? false;
    message.stableVaultRedemptionStatus = object.stableVaultRedemptionStatus ?? false;
    message.collectorTransaction = object.collectorTransaction ?? false;
    message.shareCalculation = object.shareCalculation ?? false;
    return message;
  },
};

function createBaseKillSwitchParams(): KillSwitchParams {
  return { appId: Long.UZERO, breakerEnable: false };
}

export const KillSwitchParams = {
  encode(message: KillSwitchParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.breakerEnable === true) {
      writer.uint32(16).bool(message.breakerEnable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KillSwitchParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKillSwitchParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.breakerEnable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KillSwitchParams {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      breakerEnable: isSet(object.breakerEnable) ? Boolean(object.breakerEnable) : false,
    };
  },

  toJSON(message: KillSwitchParams): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.breakerEnable !== undefined && (obj.breakerEnable = message.breakerEnable);
    return obj;
  },

  create<I extends Exact<DeepPartial<KillSwitchParams>, I>>(base?: I): KillSwitchParams {
    return KillSwitchParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KillSwitchParams>, I>>(object: I): KillSwitchParams {
    const message = createBaseKillSwitchParams();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.breakerEnable = object.breakerEnable ?? false;
    return message;
  },
};

function createBaseUsersDepositMapping(): UsersDepositMapping {
  return { appId: Long.UZERO, depositor: "", deposits: undefined };
}

export const UsersDepositMapping = {
  encode(message: UsersDepositMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    if (message.deposits !== undefined) {
      Coin.encode(message.deposits, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsersDepositMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsersDepositMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.deposits = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UsersDepositMapping {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      deposits: isSet(object.deposits) ? Coin.fromJSON(object.deposits) : undefined,
    };
  },

  toJSON(message: UsersDepositMapping): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.deposits !== undefined && (obj.deposits = message.deposits ? Coin.toJSON(message.deposits) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UsersDepositMapping>, I>>(base?: I): UsersDepositMapping {
    return UsersDepositMapping.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UsersDepositMapping>, I>>(object: I): UsersDepositMapping {
    const message = createBaseUsersDepositMapping();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.deposits = (object.deposits !== undefined && object.deposits !== null)
      ? Coin.fromPartial(object.deposits)
      : undefined;
    return message;
  },
};

function createBaseDataAfterCoolOff(): DataAfterCoolOff {
  return { appId: Long.UZERO, collateralTotalAmount: "", debtTotalAmount: "" };
}

export const DataAfterCoolOff = {
  encode(message: DataAfterCoolOff, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (message.collateralTotalAmount !== "") {
      writer.uint32(18).string(message.collateralTotalAmount);
    }
    if (message.debtTotalAmount !== "") {
      writer.uint32(26).string(message.debtTotalAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataAfterCoolOff {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataAfterCoolOff();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appId = reader.uint64() as Long;
          break;
        case 2:
          message.collateralTotalAmount = reader.string();
          break;
        case 3:
          message.debtTotalAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataAfterCoolOff {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      collateralTotalAmount: isSet(object.collateralTotalAmount) ? String(object.collateralTotalAmount) : "",
      debtTotalAmount: isSet(object.debtTotalAmount) ? String(object.debtTotalAmount) : "",
    };
  },

  toJSON(message: DataAfterCoolOff): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.collateralTotalAmount !== undefined && (obj.collateralTotalAmount = message.collateralTotalAmount);
    message.debtTotalAmount !== undefined && (obj.debtTotalAmount = message.debtTotalAmount);
    return obj;
  },

  create<I extends Exact<DeepPartial<DataAfterCoolOff>, I>>(base?: I): DataAfterCoolOff {
    return DataAfterCoolOff.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataAfterCoolOff>, I>>(object: I): DataAfterCoolOff {
    const message = createBaseDataAfterCoolOff();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.collateralTotalAmount = object.collateralTotalAmount ?? "";
    message.debtTotalAmount = object.debtTotalAmount ?? "";
    return message;
  },
};

function createBaseAssetToAmount(): AssetToAmount {
  return { appId: Long.UZERO, assetId: Long.UZERO, amount: "", share: "", debtTokenWorth: "", isCollateral: false };
}

export const AssetToAmount = {
  encode(message: AssetToAmount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.appId.isZero()) {
      writer.uint32(8).uint64(message.appId);
    }
    if (!message.assetId.isZero()) {
      writer.uint32(16).uint64(message.assetId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.share !== "") {
      writer.uint32(34).string(message.share);
    }
    if (message.debtTokenWorth !== "") {
      writer.uint32(42).string(message.debtTokenWorth);
    }
    if (message.isCollateral === true) {
      writer.uint32(48).bool(message.isCollateral);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetToAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetToAmount();
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
          message.amount = reader.string();
          break;
        case 4:
          message.share = reader.string();
          break;
        case 5:
          message.debtTokenWorth = reader.string();
          break;
        case 6:
          message.isCollateral = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetToAmount {
    return {
      appId: isSet(object.appId) ? Long.fromValue(object.appId) : Long.UZERO,
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      amount: isSet(object.amount) ? String(object.amount) : "",
      share: isSet(object.share) ? String(object.share) : "",
      debtTokenWorth: isSet(object.debtTokenWorth) ? String(object.debtTokenWorth) : "",
      isCollateral: isSet(object.isCollateral) ? Boolean(object.isCollateral) : false,
    };
  },

  toJSON(message: AssetToAmount): unknown {
    const obj: any = {};
    message.appId !== undefined && (obj.appId = (message.appId || Long.UZERO).toString());
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.share !== undefined && (obj.share = message.share);
    message.debtTokenWorth !== undefined && (obj.debtTokenWorth = message.debtTokenWorth);
    message.isCollateral !== undefined && (obj.isCollateral = message.isCollateral);
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetToAmount>, I>>(base?: I): AssetToAmount {
    return AssetToAmount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AssetToAmount>, I>>(object: I): AssetToAmount {
    const message = createBaseAssetToAmount();
    message.appId = (object.appId !== undefined && object.appId !== null) ? Long.fromValue(object.appId) : Long.UZERO;
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.amount = object.amount ?? "";
    message.share = object.share ?? "";
    message.debtTokenWorth = object.debtTokenWorth ?? "";
    message.isCollateral = object.isCollateral ?? false;
    return message;
  },
};

function createBaseDebtAssetsRates(): DebtAssetsRates {
  return { assetId: Long.UZERO, rates: Long.UZERO };
}

export const DebtAssetsRates = {
  encode(message: DebtAssetsRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.assetId.isZero()) {
      writer.uint32(8).uint64(message.assetId);
    }
    if (!message.rates.isZero()) {
      writer.uint32(16).uint64(message.rates);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebtAssetsRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebtAssetsRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.uint64() as Long;
          break;
        case 2:
          message.rates = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebtAssetsRates {
    return {
      assetId: isSet(object.assetId) ? Long.fromValue(object.assetId) : Long.UZERO,
      rates: isSet(object.rates) ? Long.fromValue(object.rates) : Long.UZERO,
    };
  },

  toJSON(message: DebtAssetsRates): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = (message.assetId || Long.UZERO).toString());
    message.rates !== undefined && (obj.rates = (message.rates || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtAssetsRates>, I>>(base?: I): DebtAssetsRates {
    return DebtAssetsRates.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DebtAssetsRates>, I>>(object: I): DebtAssetsRates {
    const message = createBaseDebtAssetsRates();
    message.assetId = (object.assetId !== undefined && object.assetId !== null)
      ? Long.fromValue(object.assetId)
      : Long.UZERO;
    message.rates = (object.rates !== undefined && object.rates !== null) ? Long.fromValue(object.rates) : Long.UZERO;
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
