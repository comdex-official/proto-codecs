"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customAminoTypes = void 0;
const long_1 = __importDefault(require("long"));
function omitDefault(input) {
    if (typeof input === 'string') {
        return input === '' ? undefined : input;
    }
    if (typeof input === 'number') {
        return input === 0 ? undefined : input;
    }
    if (long_1.default.isLong(input)) {
        return input.isZero() ? undefined : input;
    }
    throw new Error(`Got unsupported type '${typeof input}'`);
}
exports.customAminoTypes = {
    '/comdex.liquidity.v1beta1.MsgSwapWithinBatch': {
        aminoType: 'liquidity/MsgSwapWithinBatch',
        toAmino: ({ swapRequesterAddress, poolId, swapTypeId, offerCoin, demandCoinDenom, offerCoinFee, orderPrice }) => ({
            swap_requester_address: swapRequesterAddress,
            pool_id: poolId,
            swap_type_id: swapTypeId,
            offer_coin: offerCoin,
            demand_coin_denom: demandCoinDenom,
            offer_coin_fee: offerCoinFee,
            order_price: orderPrice,
        }),
        fromAmino: ({ swap_requester_address, pool_id, swap_type_id, offer_coin, demand_coin_denom, offer_coin_fee, order_price, }) => ({
            swapRequesterAddress: swap_requester_address,
            poolId: pool_id,
            swapTypeId: swap_type_id,
            offerCoin: offer_coin,
            demandCoinDenom: demand_coin_denom,
            offerCoinFee: offer_coin_fee,
            orderPrice: order_price
        }),
    },
};
//# sourceMappingURL=aminoConverter.js.map