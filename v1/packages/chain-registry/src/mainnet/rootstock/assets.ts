import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'rootstock',
  assets: [{
      description: 'Pegged 1:1 to Bitcoin, RBTC allows you to interact with DeFi protocols and dApps on the Rootstock network. Use RBTC for minting, swaps, gas fees, and more.',
      extended_description: 'The longest running and leading Bitcoin sidechain. Deploy dApps and EVM-compatible smart contracts secured by the world’s most accessible, decentralized and secure blockchain.',
      denom_units: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'rbtc',
          exponent: 18
        }],
      type_asset: 'evm-base',
      base: 'sat',
      display: 'rbtc',
      symbol: 'RBTC',
      name: 'Rootstock Smart Bitcoin',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Rootstock'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
          theme: {
            circle: false,
            primary_color_hex: '#FF9931',
            background_color_hex: '#00000000'
          }
        }],
      coingecko_id: 'rootstock',
      socials: {
        website: 'https://rootstock.io/',
        twitter: 'https://twitter.com/rootstock_io'
      }
    }, {
      description: 'The wrapped version of RBTC.',
      denom_units: [{
          denom: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d',
          exponent: 0
        }, {
          denom: 'wrbtc',
          exponent: 18
        }],
      type_asset: 'erc20',
      name: 'Wrapped BTC',
      symbol: 'WRBTC',
      display: 'wrbtc',
      base: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d',
      address: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chain_name: 'rootstock',
            base_denom: 'sat'
          },
          provider: 'Rootstock'
        }],
      images: [{
          image_sync: {
            chain_name: 'rootstock',
            base_denom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
          theme: {
            circle: false,
            primary_color_hex: '#FF9931',
            background_color_hex: '#00000000'
          }
        }]
    }]
};
export default info;