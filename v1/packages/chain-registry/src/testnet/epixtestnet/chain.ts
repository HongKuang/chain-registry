import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'epixtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://epix.zone/',
  pretty_name: 'Epix Testnet',
  chain_type: 'cosmos',
  chain_id: 'epix_4243-1',
  bech32_prefix: 'epix',
  daemon_name: 'epixd',
  node_home: '$HOME/.epixd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'aepix',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aepix'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.epix.zone',
        provider: 'Epix Testnet'
      }],
    rest: [{
        address: 'https://api.testnet.epix.zone',
        provider: 'Epix Testnet'
      }],
    grpc: [{
        address: 'https://grpc.testnet.epix.zone:443',
        provider: 'Epix Testnet'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://evmrpc.testnet.epix.zone/',
        provider: 'Epix Testnet'
      }]
  },
  explorers: [{
      kind: 'Silk Nodes Explorer',
      url: 'https://https://testnet.epix.zone/epix',
      tx_page: 'https://https://testnet.epix.zone/epix/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/epix/images/epix.svg',
      theme: {
        primary_color_hex: '#69e9f5'
      }
    }]
};
export default info;