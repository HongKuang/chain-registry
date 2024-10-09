import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'vidulum',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://vidulum.app/',
  prettyName: 'Vidulum',
  chainId: 'vidulum-1',
  bech32Prefix: 'vdl',
  daemonName: 'vidulumd',
  nodeHome: '$HOME/.vidulum',
  keyAlgos: ['secp256k1'],
  slip44: 370,
  fees: {
    feeTokens: [{
        denom: 'uvdl',
        fixedMinGasPrice: 0.0002,
        lowGasPrice: 0.002,
        averageGasPrice: 0.005,
        highGasPrice: 0.007
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uvdl'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-rpc.vidulum.app/',
        provider: 'vidulum'
      },
      {
        address: 'https://vidulum.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-vidulum-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://vidulum.declab.pro:26619',
        provider: 'Decloud Nodes Lab'
      }
    ],
    rest: [
      {
        address: 'https://mainnet-lcd.vidulum.app',
        provider: 'vidulum'
      },
      {
        address: 'https://api-vidulum-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://vidulum.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-vdl.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://vidulum.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      }
    ],
    grpc: [
      {
        address: 'grpc-vidulum-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'vidulum.grpc.m.stavr.tech:2040',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://vidulum.declab.pro:9013',
        provider: 'Decloud Nodes Lab'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorers.vidulum.app/vidulum',
      txPage: 'https://explorers.vidulum.app/vidulum/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/vidulum',
      txPage: 'https://ping.pub/vidulum/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Vidulum-Mainnet',
      txPage: 'https://explorer.stavr.tech/Vidulum-Mainnet/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/vidulum',
      txPage: 'https://atomscan.com/vidulum/transactions/${txHash}',
      accountPage: 'https://atomscan.com/vidulum/accounts/${accountAddress}'
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/vidulum',
      txPage: 'https://explorer.co.id/vidulum/tx/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Vidulum',
      txPage: 'https://explorer.declab.pro/Vidulum/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
    }]
};
export default info;