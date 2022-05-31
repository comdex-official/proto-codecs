"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionControlByAppIdProposal = exports.LookupTableParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const collector_1 = require("../../../comdex/collector/v1beta1/collector");
exports.protobufPackage = "comdex.collector.v1beta1";
function createBaseLookupTableParams() {
    return { title: "", description: "", lookupTableData: [] };
}
exports.LookupTableParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.lookupTableData) {
            collector_1.CollectorLookupTable.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                    message.lookupTableData.push(collector_1.CollectorLookupTable.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            lookupTableData: Array.isArray(object === null || object === void 0 ? void 0 : object.lookupTableData)
                ? object.lookupTableData.map((e) => collector_1.CollectorLookupTable.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.lookupTableData) {
            obj.lookupTableData = message.lookupTableData.map((e) => e ? collector_1.CollectorLookupTable.toJSON(e) : undefined);
        }
        else {
            obj.lookupTableData = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLookupTableParams();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.lookupTableData =
            ((_c = object.lookupTableData) === null || _c === void 0 ? void 0 : _c.map((e) => collector_1.CollectorLookupTable.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseAuctionControlByAppIdProposal() {
    return { title: "", description: "", collectorAuctionLookupTable: undefined };
}
exports.AuctionControlByAppIdProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.collectorAuctionLookupTable !== undefined) {
            collector_1.CollectorAuctionLookupTable.encode(message.collectorAuctionLookupTable, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
                        collector_1.CollectorAuctionLookupTable.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            collectorAuctionLookupTable: isSet(object.collectorAuctionLookupTable)
                ? collector_1.CollectorAuctionLookupTable.fromJSON(object.collectorAuctionLookupTable)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.collectorAuctionLookupTable !== undefined &&
            (obj.collectorAuctionLookupTable = message.collectorAuctionLookupTable
                ? collector_1.CollectorAuctionLookupTable.toJSON(message.collectorAuctionLookupTable)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAuctionControlByAppIdProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.collectorAuctionLookupTable =
            object.collectorAuctionLookupTable !== undefined &&
                object.collectorAuctionLookupTable !== null
                ? collector_1.CollectorAuctionLookupTable.fromPartial(object.collectorAuctionLookupTable)
                : undefined;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=gov.js.map