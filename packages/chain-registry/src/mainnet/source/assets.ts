import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'source',
  assets: [
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [
        {
          denom: 'usource',
          exponent: 0
        },
        {
          denom: 'source',
          exponent: 6
        }
      ],
      base: 'usource',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      coingecko_id: 'source',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }
      ]
    }
  ]
};
export default info;