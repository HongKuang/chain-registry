import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'statemine',
  assets: [{
      denom_units: [{
          denom: '130',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'substrate',
      base: '130',
      name: 'Statemine',
      display: 'usdt',
      symbol: 'USDT',
      coingecko_id: 'tether',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }]
    }]
};
export default info;