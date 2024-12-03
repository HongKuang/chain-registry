import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'pockettestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://www.pokt.network/',
  pretty_name: 'Pocket Beta TestNet',
  chain_type: 'cosmos',
  chain_id: 'pocket-beta',
  bech32_prefix: 'pokt@',
  daemon_name: 'poktrolld',
  node_home: '$HOME/.poktroll',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'upokt',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.0025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upokt'
      }]
  },
  codebase: {

  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.svg'
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.png'
    }],
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.svg'
  },
  apis: {
    rpc: [{
        address: 'https://shannon-testnet-grove-rpc.beta.poktroll.com',
        provider: 'Grove'
      }],
    rest: [{
        address: 'https://shannon-testnet-grove-api.beta.poktroll.com',
        provider: 'Grove'
      }]
  },
  explorers: [{
      kind: '🔍 POKTScan Explorer 🔎',
      url: 'https://shannon-beta.poktscan.com/',
      tx_page: 'https://shannon-beta.poktscan.com/tx/${txHash}',
      account_page: 'https://shannon-beta.poktscan.com/accounts/${accountAddress}'
    }, {
      kind: '🗺 Shannon Explorer (stakenodes.org) 🗺',
      url: 'https://shannon.beta.testnet.pokt.network/',
      tx_page: 'https://shannon.beta.testnet.pokt.network/poktroll/tx/${txHash}',
      account_page: 'https://shannon.beta.testnet.pokt.network/poktroll/account/${accountAddress}'
    }],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;