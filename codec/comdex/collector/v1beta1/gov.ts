/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  CollectorAuctionLookupTable,
  CollectorLookupTable,
} from "./collector";

export const protobufPackage = "comdex.collector.v1beta1";

export interface LookupTableParams {
  title: string;
  description: string;
  lookupTableData: CollectorLookupTable[];
}

export interface AuctionControlByAppIdProposal {
  title: string;
  description: string;
  collectorAuctionLookupTable?: CollectorAuctionLookupTable;
}

function createBaseLookupTableParams(): LookupTableParams {
  return { title: "", description: "", lookupTableData: [] };
}

export const LookupTableParams = {
  encode(
    message: LookupTableParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.lookupTableData) {
      CollectorLookupTable.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LookupTableParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLookupTableParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.lookupTableData.push(
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

  fromJSON(object: any): LookupTableParams {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lookupTableData: Array.isArray(object?.lookupTableData)
        ? object.lookupTableData.map((e: any) =>
            CollectorLookupTable.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LookupTableParams): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.lookupTableData) {
      obj.lookupTableData = message.lookupTableData.map((e) =>
        e ? CollectorLookupTable.toJSON(e) : undefined
      );
    } else {
      obj.lookupTableData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LookupTableParams>, I>>(
    object: I
  ): LookupTableParams {
    const message = createBaseLookupTableParams();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.lookupTableData =
      object.lookupTableData?.map((e) => CollectorLookupTable.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseAuctionControlByAppIdProposal(): AuctionControlByAppIdProposal {
  return { title: "", description: "", collectorAuctionLookupTable: undefined };
}

export const AuctionControlByAppIdProposal = {
  encode(
    message: AuctionControlByAppIdProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.collectorAuctionLookupTable !== undefined) {
      CollectorAuctionLookupTable.encode(
        message.collectorAuctionLookupTable,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuctionControlByAppIdProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionControlByAppIdProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.collectorAuctionLookupTable =
            CollectorAuctionLookupTable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionControlByAppIdProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      collectorAuctionLookupTable: isSet(object.collectorAuctionLookupTable)
        ? CollectorAuctionLookupTable.fromJSON(
            object.collectorAuctionLookupTable
          )
        : undefined,
    };
  },

  toJSON(message: AuctionControlByAppIdProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.collectorAuctionLookupTable !== undefined &&
      (obj.collectorAuctionLookupTable = message.collectorAuctionLookupTable
        ? CollectorAuctionLookupTable.toJSON(
            message.collectorAuctionLookupTable
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionControlByAppIdProposal>, I>>(
    object: I
  ): AuctionControlByAppIdProposal {
    const message = createBaseAuctionControlByAppIdProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.collectorAuctionLookupTable =
      object.collectorAuctionLookupTable !== undefined &&
      object.collectorAuctionLookupTable !== null
        ? CollectorAuctionLookupTable.fromPartial(
            object.collectorAuctionLookupTable
          )
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
