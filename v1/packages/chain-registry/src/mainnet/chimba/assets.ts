import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'chimba',
  assets: [{
      description: 'The first blockchain in colombia',
      denom_units: [{
          denom: 'ucmba',
          exponent: 0
        }, {
          denom: 'chimba',
          exponent: 6
        }],
      base: 'ucmba',
      name: 'Chimba',
      display: 'chimba',
      symbol: 'CMBA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chimba/images/chimba-blue.svg',
          theme: {
            primary_color_hex: '#5454a4'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;