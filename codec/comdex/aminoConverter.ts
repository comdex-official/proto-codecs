import { AminoMsg, Coin } from '@cosmjs/amino';
import {MsgSwapWithinBatch} from "./liquidity/v1beta1/tx";
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
  }
}


function omitDefault<T extends string | number | Long>(input: T): T | undefined {
  if (typeof input === 'string') {
    return input === '' ? undefined : input;
  }

  if (typeof input === 'number') {
    return input === 0 ? undefined : input;
  }

  if (Long.isLong(input)) {
    return input.isZero() ? undefined : input;
  }

  throw new Error(`Got unsupported type '${typeof input}'`);
}

export const customAminoTypes = {
  '/comdex.liquidity.v1beta1.MsgSwapWithinBatch': {
    aminoType: 'liquidity/MsgSwapWithinBatch',
    toAmino: ({swapRequesterAddress,
                poolId,
                swapTypeId,
                offerCoin,
                demandCoinDenom,
                offerCoinFee,
                orderPrice }: MsgSwapWithinBatch): AminoMsgSwapWithInBatch['value'] => ({

      swap_requester_address: swapRequesterAddress,
      pool_id: poolId,
      swap_type_id: swapTypeId,
      offer_coin: offerCoin,
      demand_coin_denom: demandCoinDenom,
      offer_coin_fee: offerCoinFee,
      order_price: orderPrice,
    }),
    fromAmino: ({
                  swap_requester_address,
                  pool_id,
                  swap_type_id,
                  offer_coin,
                  demand_coin_denom,
                  offer_coin_fee,
                  order_price, }: AminoMsgSwapWithInBatch['value']): MsgSwapWithinBatch => ({
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
