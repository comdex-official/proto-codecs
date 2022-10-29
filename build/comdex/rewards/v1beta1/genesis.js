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
const params_1 = require("../../../comdex/rewards/v1beta1/params");
const rewards_1 = require("../../../comdex/rewards/v1beta1/rewards");
const epochs_1 = require("../../../comdex/rewards/v1beta1/epochs");
const gauge_1 = require("../../../comdex/rewards/v1beta1/gauge");
exports.protobufPackage = "comdex.rewards.v1beta1";
function createBaseGenesisState() {
    return {
        internalRewards: [],
        lockerRewardsTracker: [],
        vaultInterestTracker: [],
        lockerExternalRewards: [],
        vaultExternalRewards: [],
        appIDs: [],
        epochInfo: [],
        gauge: [],
        gaugeByTriggerDuration: [],
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.internalRewards) {
            rewards_1.InternalRewards.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockerRewardsTracker) {
            rewards_1.LockerRewardsTracker.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.vaultInterestTracker) {
            rewards_1.VaultInterestTracker.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.lockerExternalRewards) {
            rewards_1.LockerExternalRewards.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.vaultExternalRewards) {
            rewards_1.VaultExternalRewards.encode(v, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(50).fork();
        for (const v of message.appIDs) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.epochInfo) {
            epochs_1.EpochInfo.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.gauge) {
            gauge_1.Gauge.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.gaugeByTriggerDuration) {
            gauge_1.GaugeByTriggerDuration.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(82).fork()).ldelim();
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
                    message.internalRewards.push(rewards_1.InternalRewards.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lockerRewardsTracker.push(rewards_1.LockerRewardsTracker.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.vaultInterestTracker.push(rewards_1.VaultInterestTracker.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lockerExternalRewards.push(rewards_1.LockerExternalRewards.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.vaultExternalRewards.push(rewards_1.VaultExternalRewards.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.appIDs.push(reader.uint64());
                        }
                    }
                    else {
                        message.appIDs.push(reader.uint64());
                    }
                    break;
                case 7:
                    message.epochInfo.push(epochs_1.EpochInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.gauge.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.gaugeByTriggerDuration.push(gauge_1.GaugeByTriggerDuration.decode(reader, reader.uint32()));
                    break;
                case 10:
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
            internalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.internalRewards)
                ? object.internalRewards.map((e) => rewards_1.InternalRewards.fromJSON(e))
                : [],
            lockerRewardsTracker: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerRewardsTracker)
                ? object.lockerRewardsTracker.map((e) => rewards_1.LockerRewardsTracker.fromJSON(e))
                : [],
            vaultInterestTracker: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultInterestTracker)
                ? object.vaultInterestTracker.map((e) => rewards_1.VaultInterestTracker.fromJSON(e))
                : [],
            lockerExternalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.lockerExternalRewards)
                ? object.lockerExternalRewards.map((e) => rewards_1.LockerExternalRewards.fromJSON(e))
                : [],
            vaultExternalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.vaultExternalRewards)
                ? object.vaultExternalRewards.map((e) => rewards_1.VaultExternalRewards.fromJSON(e))
                : [],
            appIDs: Array.isArray(object === null || object === void 0 ? void 0 : object.appIDs)
                ? object.appIDs.map((e) => long_1.default.fromValue(e))
                : [],
            epochInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.epochInfo)
                ? object.epochInfo.map((e) => epochs_1.EpochInfo.fromJSON(e))
                : [],
            gauge: Array.isArray(object === null || object === void 0 ? void 0 : object.gauge)
                ? object.gauge.map((e) => gauge_1.Gauge.fromJSON(e))
                : [],
            gaugeByTriggerDuration: Array.isArray(object === null || object === void 0 ? void 0 : object.gaugeByTriggerDuration)
                ? object.gaugeByTriggerDuration.map((e) => gauge_1.GaugeByTriggerDuration.fromJSON(e))
                : [],
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.internalRewards) {
            obj.internalRewards = message.internalRewards.map((e) => e ? rewards_1.InternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.internalRewards = [];
        }
        if (message.lockerRewardsTracker) {
            obj.lockerRewardsTracker = message.lockerRewardsTracker.map((e) => e ? rewards_1.LockerRewardsTracker.toJSON(e) : undefined);
        }
        else {
            obj.lockerRewardsTracker = [];
        }
        if (message.vaultInterestTracker) {
            obj.vaultInterestTracker = message.vaultInterestTracker.map((e) => e ? rewards_1.VaultInterestTracker.toJSON(e) : undefined);
        }
        else {
            obj.vaultInterestTracker = [];
        }
        if (message.lockerExternalRewards) {
            obj.lockerExternalRewards = message.lockerExternalRewards.map((e) => e ? rewards_1.LockerExternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.lockerExternalRewards = [];
        }
        if (message.vaultExternalRewards) {
            obj.vaultExternalRewards = message.vaultExternalRewards.map((e) => e ? rewards_1.VaultExternalRewards.toJSON(e) : undefined);
        }
        else {
            obj.vaultExternalRewards = [];
        }
        if (message.appIDs) {
            obj.appIDs = message.appIDs.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.appIDs = [];
        }
        if (message.epochInfo) {
            obj.epochInfo = message.epochInfo.map((e) => e ? epochs_1.EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochInfo = [];
        }
        if (message.gauge) {
            obj.gauge = message.gauge.map((e) => (e ? gauge_1.Gauge.toJSON(e) : undefined));
        }
        else {
            obj.gauge = [];
        }
        if (message.gaugeByTriggerDuration) {
            obj.gaugeByTriggerDuration = message.gaugeByTriggerDuration.map((e) => e ? gauge_1.GaugeByTriggerDuration.toJSON(e) : undefined);
        }
        else {
            obj.gaugeByTriggerDuration = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseGenesisState();
        message.internalRewards =
            ((_a = object.internalRewards) === null || _a === void 0 ? void 0 : _a.map((e) => rewards_1.InternalRewards.fromPartial(e))) || [];
        message.lockerRewardsTracker =
            ((_b = object.lockerRewardsTracker) === null || _b === void 0 ? void 0 : _b.map((e) => rewards_1.LockerRewardsTracker.fromPartial(e))) || [];
        message.vaultInterestTracker =
            ((_c = object.vaultInterestTracker) === null || _c === void 0 ? void 0 : _c.map((e) => rewards_1.VaultInterestTracker.fromPartial(e))) || [];
        message.lockerExternalRewards =
            ((_d = object.lockerExternalRewards) === null || _d === void 0 ? void 0 : _d.map((e) => rewards_1.LockerExternalRewards.fromPartial(e))) || [];
        message.vaultExternalRewards =
            ((_e = object.vaultExternalRewards) === null || _e === void 0 ? void 0 : _e.map((e) => rewards_1.VaultExternalRewards.fromPartial(e))) || [];
        message.appIDs = ((_f = object.appIDs) === null || _f === void 0 ? void 0 : _f.map((e) => long_1.default.fromValue(e))) || [];
        message.epochInfo =
            ((_g = object.epochInfo) === null || _g === void 0 ? void 0 : _g.map((e) => epochs_1.EpochInfo.fromPartial(e))) || [];
        message.gauge = ((_h = object.gauge) === null || _h === void 0 ? void 0 : _h.map((e) => gauge_1.Gauge.fromPartial(e))) || [];
        message.gaugeByTriggerDuration =
            ((_j = object.gaugeByTriggerDuration) === null || _j === void 0 ? void 0 : _j.map((e) => gauge_1.GaugeByTriggerDuration.fromPartial(e))) || [];
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