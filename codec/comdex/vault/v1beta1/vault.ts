/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.vault.v1beta1";

export interface Vault {
  id: Long;
  pairId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
  createdAt?: Date;
  marketCap: string;
  rewardsReceived: Coin[];
}

export interface UserVaultIdMapping {
  owner: string;
  vaultIds: Long[];
}

export interface VaultIds {
  vaultIds: Long[];
}

export interface CollateralVaultIdMapping {
  collateralDenom: string;
  cassetsVaultIdsMap: { [key: string]: VaultIds };
}

export interface CollateralVaultIdMapping_CassetsVaultIdsMapEntry {
  key: string;
  value?: VaultIds;
}

export interface CAssetsMintStatistics {
  collateralDenom: string;
  mintedAssets: { [key: string]: Long };
}

export interface CAssetsMintStatistics_MintedAssetsEntry {
  key: string;
  value: Long;
}

function createBaseVault(): Vault {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: "",
    createdAt: undefined,
    marketCap: "",
    rewardsReceived: [],
  };
}

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(42).string(message.amountOut);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.marketCap !== "") {
      writer.uint32(58).string(message.marketCap);
    }
    for (const v of message.rewardsReceived) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.pairId = reader.uint64() as Long;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.amountOut = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.marketCap = reader.string();
          break;
        case 8:
          message.rewardsReceived.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vault {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      pairId: isSet(object.pairId)
        ? Long.fromString(object.pairId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
      marketCap: isSet(object.marketCap) ? String(object.marketCap) : "",
      rewardsReceived: Array.isArray(object?.rewardsReceived)
        ? object.rewardsReceived.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Vault): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined &&
      (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    message.marketCap !== undefined && (obj.marketCap = message.marketCap);
    if (message.rewardsReceived) {
      obj.rewardsReceived = message.rewardsReceived.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.rewardsReceived = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vault>, I>>(object: I): Vault {
    const message = createBaseVault();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.pairId =
      object.pairId !== undefined && object.pairId !== null
        ? Long.fromValue(object.pairId)
        : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.createdAt = object.createdAt ?? undefined;
    message.marketCap = object.marketCap ?? "";
    message.rewardsReceived =
      object.rewardsReceived?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserVaultIdMapping(): UserVaultIdMapping {
  return { owner: "", vaultIds: [] };
}

export const UserVaultIdMapping = {
  encode(
    message: UserVaultIdMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    writer.uint32(26).fork();
    for (const v of message.vaultIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserVaultIdMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserVaultIdMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vaultIds.push(reader.uint64() as Long);
            }
          } else {
            message.vaultIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserVaultIdMapping {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => Long.fromString(e))
        : [],
    };
  },

  toJSON(message: UserVaultIdMapping): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.vaultIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserVaultIdMapping>, I>>(
    object: I
  ): UserVaultIdMapping {
    const message = createBaseUserVaultIdMapping();
    message.owner = object.owner ?? "";
    message.vaultIds = object.vaultIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseVaultIds(): VaultIds {
  return { vaultIds: [] };
}

export const VaultIds = {
  encode(
    message: VaultIds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.vaultIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VaultIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVaultIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.vaultIds.push(reader.uint64() as Long);
            }
          } else {
            message.vaultIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VaultIds {
    return {
      vaultIds: Array.isArray(object?.vaultIds)
        ? object.vaultIds.map((e: any) => Long.fromString(e))
        : [],
    };
  },

  toJSON(message: VaultIds): unknown {
    const obj: any = {};
    if (message.vaultIds) {
      obj.vaultIds = message.vaultIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.vaultIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VaultIds>, I>>(object: I): VaultIds {
    const message = createBaseVaultIds();
    message.vaultIds = object.vaultIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseCollateralVaultIdMapping(): CollateralVaultIdMapping {
  return { collateralDenom: "", cassetsVaultIdsMap: {} };
}

export const CollateralVaultIdMapping = {
  encode(
    message: CollateralVaultIdMapping,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    Object.entries(message.cassetsVaultIdsMap).forEach(([key, value]) => {
      CollateralVaultIdMapping_CassetsVaultIdsMapEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollateralVaultIdMapping {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralVaultIdMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        case 2:
          const entry2 =
            CollateralVaultIdMapping_CassetsVaultIdsMapEntry.decode(
              reader,
              reader.uint32()
            );
          if (entry2.value !== undefined) {
            message.cassetsVaultIdsMap[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralVaultIdMapping {
    return {
      collateralDenom: isSet(object.collateralDenom)
        ? String(object.collateralDenom)
        : "",
      cassetsVaultIdsMap: isObject(object.cassetsVaultIdsMap)
        ? Object.entries(object.cassetsVaultIdsMap).reduce<{
            [key: string]: VaultIds;
          }>((acc, [key, value]) => {
            acc[key] = VaultIds.fromJSON(value);
            return acc;
          }, {})
        : {},
    };
  },

  toJSON(message: CollateralVaultIdMapping): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    obj.cassetsVaultIdsMap = {};
    if (message.cassetsVaultIdsMap) {
      Object.entries(message.cassetsVaultIdsMap).forEach(([k, v]) => {
        obj.cassetsVaultIdsMap[k] = VaultIds.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollateralVaultIdMapping>, I>>(
    object: I
  ): CollateralVaultIdMapping {
    const message = createBaseCollateralVaultIdMapping();
    message.collateralDenom = object.collateralDenom ?? "";
    message.cassetsVaultIdsMap = Object.entries(
      object.cassetsVaultIdsMap ?? {}
    ).reduce<{ [key: string]: VaultIds }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = VaultIds.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCollateralVaultIdMapping_CassetsVaultIdsMapEntry(): CollateralVaultIdMapping_CassetsVaultIdsMapEntry {
  return { key: "", value: undefined };
}

export const CollateralVaultIdMapping_CassetsVaultIdsMapEntry = {
  encode(
    message: CollateralVaultIdMapping_CassetsVaultIdsMapEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      VaultIds.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CollateralVaultIdMapping_CassetsVaultIdsMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseCollateralVaultIdMapping_CassetsVaultIdsMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = VaultIds.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralVaultIdMapping_CassetsVaultIdsMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? VaultIds.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: CollateralVaultIdMapping_CassetsVaultIdsMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? VaultIds.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<CollateralVaultIdMapping_CassetsVaultIdsMapEntry>,
      I
    >
  >(object: I): CollateralVaultIdMapping_CassetsVaultIdsMapEntry {
    const message =
      createBaseCollateralVaultIdMapping_CassetsVaultIdsMapEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? VaultIds.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseCAssetsMintStatistics(): CAssetsMintStatistics {
  return { collateralDenom: "", mintedAssets: {} };
}

export const CAssetsMintStatistics = {
  encode(
    message: CAssetsMintStatistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    Object.entries(message.mintedAssets).forEach(([key, value]) => {
      CAssetsMintStatistics_MintedAssetsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CAssetsMintStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAssetsMintStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        case 2:
          const entry2 = CAssetsMintStatistics_MintedAssetsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.mintedAssets[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAssetsMintStatistics {
    return {
      collateralDenom: isSet(object.collateralDenom)
        ? String(object.collateralDenom)
        : "",
      mintedAssets: isObject(object.mintedAssets)
        ? Object.entries(object.mintedAssets).reduce<{ [key: string]: Long }>(
            (acc, [key, value]) => {
              acc[key] = Long.fromValue(value as Long | string);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: CAssetsMintStatistics): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    obj.mintedAssets = {};
    if (message.mintedAssets) {
      Object.entries(message.mintedAssets).forEach(([k, v]) => {
        obj.mintedAssets[k] = v.toString();
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CAssetsMintStatistics>, I>>(
    object: I
  ): CAssetsMintStatistics {
    const message = createBaseCAssetsMintStatistics();
    message.collateralDenom = object.collateralDenom ?? "";
    message.mintedAssets = Object.entries(object.mintedAssets ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCAssetsMintStatistics_MintedAssetsEntry(): CAssetsMintStatistics_MintedAssetsEntry {
  return { key: "", value: Long.UZERO };
}

export const CAssetsMintStatistics_MintedAssetsEntry = {
  encode(
    message: CAssetsMintStatistics_MintedAssetsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CAssetsMintStatistics_MintedAssetsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAssetsMintStatistics_MintedAssetsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAssetsMintStatistics_MintedAssetsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromString(object.value) : Long.UZERO,
    };
  },

  toJSON(message: CAssetsMintStatistics_MintedAssetsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CAssetsMintStatistics_MintedAssetsEntry>, I>
  >(object: I): CAssetsMintStatistics_MintedAssetsEntry {
    const message = createBaseCAssetsMintStatistics_MintedAssetsEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
