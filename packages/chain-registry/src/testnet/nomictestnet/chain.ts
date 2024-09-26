import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'nomictestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Nomic Testnet',
  website: 'https://nomic.io/',
  chain_type: 'cosmos',
  chain_id: 'nomic-testnet-6',
  bech32_prefix: 'nomic',
  daemon_name: 'nomic',
  node_home: '$HOME/.nomic-testnet-6',
  slip44: 118,
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'unom',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }, {
        denom: 'usat',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unom'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
  },
  description: 'The superior way to use Bitcoin in Cosmos DeFi. Use IBC to securely and efficiently bridge your BTC to Osmosis and more.',
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.nomic.io:2096',
        provider: 'nomic'
      }],
    rest: [{
        address: 'https://testnet-api.nomic.io:8443',
        provider: 'nomic'
      }]
  },
  explorers: [],
  images: [{
      image_sync: {
        chain_name: 'nomic',
        base_denom: 'unom'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg',
      theme: {
        primary_color_hex: '#6404fc'
      }
    }],
  bech32_config: {
    bech32PrefixAccAddr: 'nomic',
    bech32PrefixAccPub: 'nomic',
    bech32PrefixConsAddr: 'nomic',
    bech32PrefixConsPub: 'nomic',
    bech32PrefixValAddr: 'nomic',
    bech32PrefixValPub: 'nomic'
  }
};
export default info;