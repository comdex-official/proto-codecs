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
const params_1 = require("../../../comdex/locker/v1beta1/params");
const locker_1 = require("../../../comdex/locker/v1beta1/locker");
exports.protobufPackage = "comdex.locker.v1beta1";
function createBaseGenesisState() {
    return {
        lockers: [],
        lockerProductAssetMapping: [],
        lockerTotalRewardsByAssetAppWise: [],
        lockerLookupTable: [],
        userLockerAssetMapping: [],
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.lockers) {
            locker_1.Locker.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockerProductAssetMapping) {
            locker_1.LockerProductAssetMapping.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockerTotalRewardsByAssetAppWise) {
            locker_1.LockerTotalRewardsByAssetAppWise.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.lockerLookupTable) {
            locker_1.LockerLookupTableData.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.userLockerAssetMapping) {
            locker_1.UserAppAssetLockerMapping.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.lockers.push(locker_1.Locker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lockerProductAssetMapping.push(locker_1.LockerProductAssetMapping.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockerTotalRewardsByAssetAppWise.push(locker_1.LockerTotalRewardsByAssetAppWise.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lockerLookupTable.push(locker_1.LockerLookupTableData.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.userLockerAssetMapping.push(locker_1.UserAppAssetLockerMapping.decode(reader, reader.uint32()));
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
            lockers: Array.isArray(object === null || object === void 0 ? void 0 : object.lockers)
                ? object.lockers.map((e) => locker_1.Locker.fromJSON(e))
                : [],
            lockerProductAssetMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerProductAssetMapping)
                ? object.lockerProductAssetMapping.map((e) => locker_1.LockerProductAssetMapping.fromJSON(e))
                : [],
            lockerTotalRewardsByAssetAppWise: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerTotalRewardsByAssetAppWise)
                ? object.lockerTotalRewardsByAssetAppWise.map((e) => locker_1.LockerTotalRewardsByAssetAppWise.fromJSON(e))
                : [],
            lockerLookupTable: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerLookupTable)
                ? object.lockerLookupTable.map((e) => locker_1.LockerLookupTableData.fromJSON(e))
                : [],
            userLockerAssetMapping: Array.isArray(object === null || object === void 0 ? void 0 : object.userLockerAssetMapping)
                ? object.userLockerAssetMapping.map((e) => locker_1.UserAppAssetLockerMapping.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockers) {
            obj.lockers = message.lockers.map((e) => e ? locker_1.Locker.toJSON(e) : undefined);
        }
        else {
            obj.lockers = [];
        }
        if (message.lockerProductAssetMapping) {
            obj.lockerProductAssetMapping = message.lockerProductAssetMapping.map((e) => (e ? locker_1.LockerProductAssetMapping.toJSON(e) : undefined));
        }
        else {
            obj.lockerProductAssetMapping = [];
        }
        if (message.lockerTotalRewardsByAssetAppWise) {
            obj.lockerTotalRewardsByAssetAppWise =
                message.lockerTotalRewardsByAssetAppWise.map((e) => e ? locker_1.LockerTotalRewardsByAssetAppWise.toJSON(e) : undefined);
        }
        else {
            obj.lockerTotalRewardsByAssetAppWise = [];
        }
        if (message.lockerLookupTable) {
            obj.lockerLookupTable = message.lockerLookupTable.map((e) => e ? locker_1.LockerLookupTableData.toJSON(e) : undefined);
        }
        else {
            obj.lockerLookupTable = [];
        }
        if (message.userLockerAssetMapping) {
            obj.userLockerAssetMapping = message.userLockerAssetMapping.map((e) => e ? locker_1.UserAppAssetLockerMapping.toJSON(e) : undefined);
        }
        else {
            obj.userLockerAssetMapping = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.lockers = ((_a = object.lockers) === null || _a === void 0 ? void 0 : _a.map((e) => locker_1.Locker.fromPartial(e))) || [];
        message.lockerProductAssetMapping =
            ((_b = object.lockerProductAssetMapping) === null || _b === void 0 ? void 0 : _b.map((e) => locker_1.LockerProductAssetMapping.fromPartial(e))) || [];
        message.lockerTotalRewardsByAssetAppWise =
            ((_c = object.lockerTotalRewardsByAssetAppWise) === null || _c === void 0 ? void 0 : _c.map((e) => locker_1.LockerTotalRewardsByAssetAppWise.fromPartial(e))) || [];
        message.lockerLookupTable =
            ((_d = object.lockerLookupTable) === null || _d === void 0 ? void 0 : _d.map((e) => locker_1.LockerLookupTableData.fromPartial(e))) || [];
        message.userLockerAssetMapping =
            ((_e = object.userLockerAssetMapping) === null || _e === void 0 ? void 0 : _e.map((e) => locker_1.UserAppAssetLockerMapping.fromPartial(e))) || [];
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