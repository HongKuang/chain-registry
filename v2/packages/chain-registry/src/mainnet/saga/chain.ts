import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'saga',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.saga.xyz/',
  prettyName: 'Saga',
  chainType: 'cosmos',
  chainId: 'ssc-1',
  bech32Prefix: 'saga',
  daemonName: 'sscd',
  nodeHome: '$HOME/.ssc',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'usaga'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'usaga',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sagaxyz/ssc',
    genesis: {
      name: 'v0.1.5',
      genesisUrl: 'https://raw.githubusercontent.com/sagaxyz/mainnet/main/genesis/genesis.json'
    },
    recommendedVersion: 'v0.1.5',
    compatibleVersions: ['v0.1.5'],
    cosmosSdkVersion: 'osmosis-labs/cosmos-sdk v0.47.5',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
      repo: 'https://github.com/osmosis-labs/cometbft'
    },
    cosmwasmEnabled: false,
    language: {
      type: 'go',
      version: '1.21'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/osmosis-labs/cosmos-sdk',
      version: 'v0.47.5'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-saga.keplr.app',
        provider: 'chainapsis'
      },
      {
        address: 'https://saga-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://saga-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.saga.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://saga.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.saga.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://rpc.saga.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/saga',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://saga-rpc.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    rest: [
      {
        address: 'https://saga-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://saga-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest.saga.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://api.saga.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://saga.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://lcd.saga.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rest.lavenderfive.com:443/saga',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://saga-api.stakeandrelax.net',
        provider: 'Stake&Relax 🦥'
      }
    ],
    grpc: [
      {
        address: 'saga-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'saga-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.saga.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'saga.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'grpc.saga.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'saga.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://saga-grpc.stakeandrelax.net:24990',
        provider: 'Stake&Relax 🦥'
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
  },
  description: 'Saga is a Layer 1 protocol that allows developers to automatically spin up VM-agnostic, parallelized and interoperable dedicated chains, or “Chainlets,” that provide applications with infinite horizontal scalability. Each Chainlet is a replica of the Saga Mainnet, with the same validator set and security model.\n\nSaga’s mission is to enable the next 1000 chains in gaming and entertainment as part of the growing Saga Multiverse. ',
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/saga',
      txPage: 'https://www.mintscan.io/saga/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/saga/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/saga',
      txPage: 'https://ezstaking.app/saga/txs/${txHash}',
      accountPage: 'https://ezstaking.app/saga/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/saga',
      txPage: 'https://explorer.nodestake.org/saga/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/saga/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
      theme: {
        primaryColorHex: '#040404'
      }
    }]
};
export default info;