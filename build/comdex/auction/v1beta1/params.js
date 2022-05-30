"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "comdex.auction.v1beta1";
function createBaseParams() {
    return {
        liquidationPaneltyPercent: long_1.default.UZERO,
        auctionDiscountPercent: long_1.default.UZERO,
        auctionDurationHours: long_1.default.UZERO,
    };
}
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.liquidationPaneltyPercent.isZero()) {
            writer.uint32(8).uint64(message.liquidationPaneltyPercent);
        }
        if (!message.auctionDiscountPercent.isZero()) {
            writer.uint32(16).uint64(message.auctionDiscountPercent);
        }
        if (!message.auctionDurationHours.isZero()) {
            writer.uint32(24).uint64(message.auctionDurationHours);
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
                    message.liquidationPaneltyPercent = reader.uint64();
                    break;
                case 2:
                    message.auctionDiscountPercent = reader.uint64();
                    break;
                case 3:
                    message.auctionDurationHours = reader.uint64();
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
            liquidationPaneltyPercent: isSet(object.liquidationPaneltyPercent)
                ? long_1.default.fromString(object.liquidationPaneltyPercent)
                : long_1.default.UZERO,
            auctionDiscountPercent: isSet(object.auctionDiscountPercent)
                ? long_1.default.fromString(object.auctionDiscountPercent)
                : long_1.default.UZERO,
            auctionDurationHours: isSet(object.auctionDurationHours)
                ? long_1.default.fromString(object.auctionDurationHours)
                : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.liquidationPaneltyPercent !== undefined &&
            (obj.liquidationPaneltyPercent = (message.liquidationPaneltyPercent || long_1.default.UZERO).toString());
        message.auctionDiscountPercent !== undefined &&
            (obj.auctionDiscountPercent = (message.auctionDiscountPercent || long_1.default.UZERO).toString());
        message.auctionDurationHours !== undefined &&
            (obj.auctionDurationHours = (message.auctionDurationHours || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.liquidationPaneltyPercent =
            object.liquidationPaneltyPercent !== undefined &&
                object.liquidationPaneltyPercent !== null
                ? long_1.default.fromValue(object.liquidationPaneltyPercent)
                : long_1.default.UZERO;
        message.auctionDiscountPercent =
            object.auctionDiscountPercent !== undefined &&
                object.auctionDiscountPercent !== null
                ? long_1.default.fromValue(object.auctionDiscountPercent)
                : long_1.default.UZERO;
        message.auctionDurationHours =
            object.auctionDurationHours !== undefined &&
                object.auctionDurationHours !== null
                ? long_1.default.fromValue(object.auctionDurationHours)
                : long_1.default.UZERO;
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