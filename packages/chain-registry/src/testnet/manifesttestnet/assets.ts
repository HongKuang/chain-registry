import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'manifesttestnet',
  assets: [{
      description: 'Manifest testnet native token',
      denom_units: [{
          denom: 'umfx',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'umfx',
      name: 'Manifest Testnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }]
    }, {
      description: 'Proof of Authority token for the Manifest testnet',
      denom_units: [{
          denom: 'upoa',
          exponent: 0
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'upoa',
      name: 'Manifest Testnet Token',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }]
    }]
};
export default info;