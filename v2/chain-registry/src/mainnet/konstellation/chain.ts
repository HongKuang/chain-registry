import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'konstellation',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://konstellation.tech/',
  prettyName: 'Konstellation',
  chainId: 'darchub',
  bech32Prefix: 'darc',
  daemonName: 'knstld',
  nodeHome: '$HOME/.knstld',
  slip44: 118,
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png'
  },
  fees: {
    feeTokens: [{
        denom: 'udarc',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.001,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udarc'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://konstellation-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      }],
    rest: [{
        address: 'https://api-konstellation-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://konstellation-rest.stakerhouse.com',
        provider: 'StakerHouse'
      }],
    grpc: [
      {
        address: 'grpc-konstellation-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'konstellation-grpc.polkachu.com:13390',
        provider: 'Polkachu'
      },
      {
        address: 'konstellation-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'konstellation-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [{
      kind: 'konstellation',
      url: 'https://explorer.konstellation.tech/',
      txPage: 'https://explorer.konstellation.tech/tx/${txHash}'
    }, {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/konstellation',
      txPage: 'https://cosmotracker.com/konstellation/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/Konstellation-dark.png'
    }]
};
export default info;