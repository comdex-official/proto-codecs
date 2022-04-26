import { AminoMsg, Coin } from '@cosmjs/amino';
import { MsgSwapWithinBatch } from "./liquidity/v1beta1/tx";
import Long from 'long';
export interface AminoMsgSwapWithInBatch extends AminoMsg {
    readonly type: 'liquidity/MsgSwapWithinBatch';
    readonly value: {
        swap_requester_address: string;
        pool_id: Long;
        swap_type_id: number;
        offer_coin?: Coin;
        demand_coin_denom: string;
        offer_coin_fee?: Coin;
        order_price: string;
    };
}
export declare const customAminoTypes: {
    '/comdex.liquidity.v1beta1.MsgSwapWithinBatch': {
        aminoType: string;
        toAmino: ({ swapRequesterAddress, poolId, swapTypeId, offerCoin, demandCoinDenom, offerCoinFee, orderPrice }: MsgSwapWithinBatch) => AminoMsgSwapWithInBatch['value'];
        fromAmino: ({ swap_requester_address, pool_id, swap_type_id, offer_coin, demand_coin_denom, offer_coin_fee, order_price, }: AminoMsgSwapWithInBatch['value']) => MsgSwapWithinBatch;
    };
};
