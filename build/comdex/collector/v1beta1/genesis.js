"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const params_1 = require("../../../comdex/collector/v1beta1/params");
const collector_1 = require("../../../comdex/collector/v1beta1/collector");
exports.protobufPackage = "comdex.collector.v1beta1";
function createBaseGenesisState() {
    return {
        netFeeCollectedData: [],
        appIdToAssetCollectorMapping: [],
        collectorLookup: [],
        collectorAuctionLookupTable: [],
        appToDenomsMapping: [],
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.netFeeCollectedData) {
            collector_1.AppAssetIdToFeeCollectedData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.appIdToAssetCollectorMapping) {
            collector_1.AppToAssetIdCollectorMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.collectorLookup) {
            collector_1.CollectorLookupTableData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.collectorAuctionLookupTable) {
            collector_1.AppAssetIdToAuctionLookupTable.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.appToDenomsMapping) {
            collector_1.AppToDenomsMapping.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.netFeeCollectedData.push(collector_1.AppAssetIdToFeeCollectedData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.appIdToAssetCollectorMapping.push(collector_1.AppToAssetIdCollectorMapping.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.collectorLookup.push(collector_1.CollectorLookupTableData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.collectorAuctionLookupTable.push(collector_1.AppAssetIdToAuctionLookupTable.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.appToDenomsMapping.push(collector_1.AppToDenomsMapping.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            netFeeCollectedData: Array.isArray(object === null || object === void 0 ? void 0 : object.netFeeCollectedData)
                ? object.netFeeCollectedData.map((e) => collector_1.AppAssetIdToFeeCollectedData.fromJSON(e))
                : [],
            appIdToAssetCollectorMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.appIdToAssetCollectorMapping)
                ? object.appIdToAssetCollectorMapping.map((e) => collector_1.AppToAssetIdCollectorMapping.fromJSON(e))
                : [],
            collectorLookup: Array.isArray(object === null || object === void 0 ? void 0 : object.collectorLookup)
                ? object.collectorLookup.map((e) => collector_1.CollectorLookupTableData.fromJSON(e))
                : [],
            collectorAuctionLookupTable: Array.isArray(object === null || object === void 0 ? void 0 : object.collectorAuctionLookupTable)
                ? object.collectorAuctionLookupTable.map((e) => collector_1.AppAssetIdToAuctionLookupTable.fromJSON(e))
                : [],
            appToDenomsMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.appToDenomsMapping)
                ? object.appToDenomsMapping.map((e) => collector_1.AppToDenomsMapping.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.netFeeCollectedData) {
            obj.netFeeCollectedData = message.netFeeCollectedData.map((e) => e ? collector_1.AppAssetIdToFeeCollectedData.toJSON(e) : undefined);
        }
        else {
            obj.netFeeCollectedData = [];
        }
        if (message.appIdToAssetCollectorMapping) {
            obj.appIdToAssetCollectorMapping =
                message.appIdToAssetCollectorMapping.map((e) => e ? collector_1.AppToAssetIdCollectorMapping.toJSON(e) : undefined);
        }
        else {
            obj.appIdToAssetCollectorMapping = [];
        }
        if (message.collectorLookup) {
            obj.collectorLookup = message.collectorLookup.map((e) => e ? collector_1.CollectorLookupTableData.toJSON(e) : undefined);
        }
        else {
            obj.collectorLookup = [];
        }
        if (message.collectorAuctionLookupTable) {
            obj.collectorAuctionLookupTable = message.collectorAuctionLookupTable.map((e) => (e ? collector_1.AppAssetIdToAuctionLookupTable.toJSON(e) : undefined));
        }
        else {
            obj.collectorAuctionLookupTable = [];
        }
        if (message.appToDenomsMapping) {
            obj.appToDenomsMapping = message.appToDenomsMapping.map((e) => e ? collector_1.AppToDenomsMapping.toJSON(e) : undefined);
        }
        else {
            obj.appToDenomsMapping = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.netFeeCollectedData =
            ((_a = object.netFeeCollectedData) === null || _a === void 0 ? void 0 : _a.map((e) => collector_1.AppAssetIdToFeeCollectedData.fromPartial(e))) || [];
        message.appIdToAssetCollectorMapping =
            ((_b = object.appIdToAssetCollectorMapping) === null || _b === void 0 ? void 0 : _b.map((e) => collector_1.AppToAssetIdCollectorMapping.fromPartial(e))) || [];
        message.collectorLookup =
            ((_c = object.collectorLookup) === null || _c === void 0 ? void 0 : _c.map((e) => collector_1.CollectorLookupTableData.fromPartial(e))) || [];
        message.collectorAuctionLookupTable =
            ((_d = object.collectorAuctionLookupTable) === null || _d === void 0 ? void 0 : _d.map((e) => collector_1.AppAssetIdToAuctionLookupTable.fromPartial(e))) || [];
        message.appToDenomsMapping =
            ((_e = object.appToDenomsMapping) === null || _e === void 0 ? void 0 : _e.map((e) => collector_1.AppToDenomsMapping.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
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
//# sourceMappingURL=genesis.js.map