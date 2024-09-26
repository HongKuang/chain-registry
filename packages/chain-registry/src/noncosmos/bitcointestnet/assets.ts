import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chain_name: 'bitcointestnet',
  assets: [{
      description: 'The testnet version of Bitcoin.',
      denom_units: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      type_asset: 'bitcoin-like',
      base: 'sat',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Bitcoin'
        }],
      images: [{
          image_sync: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoin/images/btc.png',
          theme: {
            primary_color_hex: '#f4941c',
            background_color_hex: '#f4941c',
            circle: true
          }
        }]
    }]
};
export default info;