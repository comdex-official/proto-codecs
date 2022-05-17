"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "comdex.locking.v1beta1";
function createBaseParams() {
    return { lockingDuration: undefined };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.lockingDuration !== undefined) {
            duration_1.Duration.encode(message.lockingDuration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockingDuration = duration_1.Duration.decode(reader, reader.uint32());
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
            lockingDuration: isSet(object.lockingDuration)
                ? duration_1.Duration.fromJSON(object.lockingDuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockingDuration !== undefined &&
            (obj.lockingDuration = message.lockingDuration
                ? duration_1.Duration.toJSON(message.lockingDuration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.lockingDuration =
            object.lockingDuration !== undefined && object.lockingDuration !== null
                ? duration_1.Duration.fromPartial(object.lockingDuration)
                : undefined;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map