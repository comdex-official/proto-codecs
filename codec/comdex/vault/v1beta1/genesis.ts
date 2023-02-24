/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Vault,
  StableMintVault,
  AppExtendedPairVaultMappingData,
  OwnerAppExtendedPairVaultMappingData,
} from "../../../comdex/vault/v1beta1/vault";

export const protobufPackage = "comdex.vault.v1beta1";

export interface GenesisState {
  vaults: Vault[];
  stableMintVault: StableMintVault[];
  appExtendedPairVaultMapping: AppExtendedPairVaultMappingData[];
  userVaultAssetMapping: OwnerAppExtendedPairVaultMappingData[];
  lengthOfVaults: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    vaults: [],
    stableMintVault: [],
    appExtendedPairVaultMapping: [],
    userVaultAssetMapping: [],
    lengthOfVaults: Long.UZERO,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.vaults) {
      Vault.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stableMintVault) {
      StableMintVault.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.appExtendedPairVaultMapping) {
      AppExtendedPairVaultMappingData.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.userVaultAssetMapping) {
      OwnerAppExtendedPairVaultMappingData.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (!message.lengthOfVaults.isZero()) {
      writer.uint32(40).uint64(message.lengthOfVaults);
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
          message.vaults.push(Vault.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stableMintVault.push(
            StableMintVault.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.appExtendedPairVaultMapping.push(
            AppExtendedPairVaultMappingData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.userVaultAssetMapping.push(
            OwnerAppExtendedPairVaultMappingData.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.lengthOfVaults = reader.uint64() as Long;
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
      vaults: Array.isArray(object?.vaults)
        ? object.vaults.map((e: any) => Vault.fromJSON(e))
        : [],
      stableMintVault: Array.isArray(object?.stableMintVault)
        ? object.stableMintVault.map((e: any) => StableMintVault.fromJSON(e))
        : [],
      appExtendedPairVaultMapping: Array.isArray(
        object?.appExtendedPairVaultMapping
      )
        ? object.appExtendedPairVaultMapping.map((e: any) =>
            AppExtendedPairVaultMappingData.fromJSON(e)
          )
        : [],
      userVaultAssetMapping: Array.isArray(object?.userVaultAssetMapping)
        ? object.userVaultAssetMapping.map((e: any) =>
            OwnerAppExtendedPairVaultMappingData.fromJSON(e)
          )
        : [],
      lengthOfVaults: isSet(object.lengthOfVaults)
        ? Long.fromValue(object.lengthOfVaults)
        : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map((e) => (e ? Vault.toJSON(e) : undefined));
    } else {
      obj.vaults = [];
    }
    if (message.stableMintVault) {
      obj.stableMintVault = message.stableMintVault.map((e) =>
        e ? StableMintVault.toJSON(e) : undefined
      );
    } else {
      obj.stableMintVault = [];
    }
    if (message.appExtendedPairVaultMapping) {
      obj.appExtendedPairVaultMapping = message.appExtendedPairVaultMapping.map(
        (e) => (e ? AppExtendedPairVaultMappingData.toJSON(e) : undefined)
      );
    } else {
      obj.appExtendedPairVaultMapping = [];
    }
    if (message.userVaultAssetMapping) {
      obj.userVaultAssetMapping = message.userVaultAssetMapping.map((e) =>
        e ? OwnerAppExtendedPairVaultMappingData.toJSON(e) : undefined
      );
    } else {
      obj.userVaultAssetMapping = [];
    }
    message.lengthOfVaults !== undefined &&
      (obj.lengthOfVaults = (message.lengthOfVaults || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.vaults = object.vaults?.map((e) => Vault.fromPartial(e)) || [];
    message.stableMintVault =
      object.stableMintVault?.map((e) => StableMintVault.fromPartial(e)) || [];
    message.appExtendedPairVaultMapping =
      object.appExtendedPairVaultMapping?.map((e) =>
        AppExtendedPairVaultMappingData.fromPartial(e)
      ) || [];
    message.userVaultAssetMapping =
      object.userVaultAssetMapping?.map((e) =>
        OwnerAppExtendedPairVaultMappingData.fromPartial(e)
      ) || [];
    message.lengthOfVaults =
      object.lengthOfVaults !== undefined && object.lengthOfVaults !== null
        ? Long.fromValue(object.lengthOfVaults)
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
