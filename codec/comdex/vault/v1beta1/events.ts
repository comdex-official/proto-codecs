/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "comdex.vault.v1beta1";

export interface EventCreateVault {
  sender: string;
  collateralType: string;
}

export interface EventDepositCollateral {
  owner: string;
  collateralType: string;
  collateral?: Coin;
}

export interface EventWithdrawCollateral {
  owner: string;
  collateralType: string;
  collateral?: Coin;
}

export interface EventDrawDebt {
  owner: string;
  collateralType: string;
  debt?: Coin;
}

export interface EventRepayDebt {
  owner: string;
  collateralType: string;
  debt?: Coin;
}

export interface EventCloseVault {
  owner: string;
  collateralType: string;
}

function createBaseEventCreateVault(): EventCreateVault {
  return { sender: "", collateralType: "" };
}

export const EventCreateVault = {
  encode(
    message: EventCreateVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateVault {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      collateralType: isSet(object.collateralType)
        ? String(object.collateralType)
        : "",
    };
  },

  toJSON(message: EventCreateVault): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateVault>, I>>(
    object: I
  ): EventCreateVault {
    const message = createBaseEventCreateVault();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  },
};

function createBaseEventDepositCollateral(): EventDepositCollateral {
  return { owner: "", collateralType: "", collateral: undefined };
}

export const EventDepositCollateral = {
  encode(
    message: EventDepositCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventDepositCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDepositCollateral {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralType: isSet(object.collateralType)
        ? String(object.collateralType)
        : "",
      collateral: isSet(object.collateral)
        ? Coin.fromJSON(object.collateral)
        : undefined,
    };
  },

  toJSON(message: EventDepositCollateral): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDepositCollateral>, I>>(
    object: I
  ): EventDepositCollateral {
    const message = createBaseEventDepositCollateral();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    return message;
  },
};

function createBaseEventWithdrawCollateral(): EventWithdrawCollateral {
  return { owner: "", collateralType: "", collateral: undefined };
}

export const EventWithdrawCollateral = {
  encode(
    message: EventWithdrawCollateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventWithdrawCollateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawCollateral {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralType: isSet(object.collateralType)
        ? String(object.collateralType)
        : "",
      collateral: isSet(object.collateral)
        ? Coin.fromJSON(object.collateral)
        : undefined,
    };
  },

  toJSON(message: EventWithdrawCollateral): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawCollateral>, I>>(
    object: I
  ): EventWithdrawCollateral {
    const message = createBaseEventWithdrawCollateral();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral =
      object.collateral !== undefined && object.collateral !== null
        ? Coin.fromPartial(object.collateral)
        : undefined;
    return message;
  },
};

function createBaseEventDrawDebt(): EventDrawDebt {
  return { owner: "", collateralType: "", debt: undefined };
}

export const EventDrawDebt = {
  encode(
    message: EventDrawDebt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDrawDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDrawDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDrawDebt {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralType: isSet(object.collateralType)
        ? String(object.collateralType)
        : "",
      debt: isSet(object.debt) ? Coin.fromJSON(object.debt) : undefined,
    };
  },

  toJSON(message: EventDrawDebt): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDrawDebt>, I>>(
    object: I
  ): EventDrawDebt {
    const message = createBaseEventDrawDebt();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Coin.fromPartial(object.debt)
        : undefined;
    return message;
  },
};

function createBaseEventRepayDebt(): EventRepayDebt {
  return { owner: "", collateralType: "", debt: undefined };
}

export const EventRepayDebt = {
  encode(
    message: EventRepayDebt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRepayDebt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRepayDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRepayDebt {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralType: isSet(object.collateralType)
        ? String(object.collateralType)
        : "",
      debt: isSet(object.debt) ? Coin.fromJSON(object.debt) : undefined,
    };
  },

  toJSON(message: EventRepayDebt): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    message.debt !== undefined &&
      (obj.debt = message.debt ? Coin.toJSON(message.debt) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRepayDebt>, I>>(
    object: I
  ): EventRepayDebt {
    const message = createBaseEventRepayDebt();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.debt =
      object.debt !== undefined && object.debt !== null
        ? Coin.fromPartial(object.debt)
        : undefined;
    return message;
  },
};

function createBaseEventCloseVault(): EventCloseVault {
  return { owner: "", collateralType: "" };
}

export const EventCloseVault = {
  encode(
    message: EventCloseVault,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCloseVault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCloseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCloseVault {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      collateralType: isSet(object.collateralType)
        ? String(object.collateralType)
        : "",
    };
  },

  toJSON(message: EventCloseVault): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.collateralType !== undefined &&
      (obj.collateralType = message.collateralType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCloseVault>, I>>(
    object: I
  ): EventCloseVault {
    const message = createBaseEventCloseVault();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
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
