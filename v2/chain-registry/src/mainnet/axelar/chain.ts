import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'axelar',
  chainId: 'axelar-dojo-1',
  prettyName: 'Axelar',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://axelar.network/',
  bech32Prefix: 'axelar',
  daemonName: 'axelard',
  nodeHome: '$HOME/.axelar',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uaxl',
        fixedMinGasPrice: 0.007,
        lowGasPrice: 0.007,
        averageGasPrice: 0.007,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uaxl'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'axelarnetwork/cosmos-sdk v0.45.17-0.20230904150332-37fb903a6c62',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.33.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg'
  },
  description: 'Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.',
  apis: {
    grpcWeb: [{
        address: 'axelar-grpcweb.chainode.tech',
        provider: 'Chainode'
      }, {
        address: 'axelar-grpcweb.quantnode.tech:9091',
        provider: 'Quantnode'
      }],
    rpc: [
      {
        address: 'https://rpc-axelar.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://axelar-rpc.quickapi.com:443',
        provider: 'chainlayer'
      },
      {
        address: 'https://rpc-axelar.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://axelar-rpc.pops.one:443',
        provider: 'p-ops'
      },
      {
        address: 'https://axelar-rpc.qubelabs.io:443',
        provider: 'Qubelabs'
      },
      {
        address: 'https://rpc-1.axelar.nodes.guru:443',
        provider: 'nodes.guru'
      },
      {
        address: 'https://rpc-axelar-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://axelar-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://axelar.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://rpc.axelar.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://axelar-rpc.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://rpc-axelar.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://axelar-rpc.quantnode.tech/',
        provider: 'QuantNode'
      },
      {
        address: 'https://axelar-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://axelar-rpc.rockrpc.net/',
        provider: 'RockawayX Infra'
      },
      {
        address: 'https://axelar-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-axelar-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://axelar-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://axelar-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://axelar-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://lcd-axelar.imperator.co:443',
        provider: 'Imperator.co'
      },
      {
        address: 'https://axelar-lcd.quickapi.com:443',
        provider: 'chainlayer'
      },
      {
        address: 'https://api-axelar.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://axelar-lcd.qubelabs.io:443',
        provider: 'Qubelabs'
      },
      {
        address: 'https://api-1.axelar.nodes.guru:443',
        provider: 'nodes.guru'
      },
      {
        address: 'https://api-axelar-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://axelar-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://axelar.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://api.axelar.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://axelar-api.validatrium.club',
        provider: 'Validatrium'
      },
      {
        address: 'https://lcd-axelar.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://axelar-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://axelar-lcd.quantnode.tech/',
        provider: 'QuantNode'
      },
      {
        address: 'https://axelar-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-axelar-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://axelar-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://axelar-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://axelar-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'axelar-grpc.qubelabs.io:9092',
        provider: 'Qubelabs'
      },
      {
        address: 'axelar-grpc.quantnode.tech:9090',
        provider: 'Quantnode'
      },
      {
        address: 'services.staketab.com:9080',
        provider: 'Staketab'
      },
      {
        address: 'grpc-axelar.cosmos-spaces.cloud:1590',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-axelar-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'axelar-grpc.polkachu.com:15190',
        provider: 'Polkachu'
      },
      {
        address: 'axelar.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'axelar-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-axelar-01.stakeflow.io:1602',
        provider: 'Stakeflow'
      },
      {
        address: 'axelar-grpc.w3coins.io:15190',
        provider: 'w3coins'
      },
      {
        address: 'grpc-axelar.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'axelar-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'axelarscan',
      url: 'https://axelarscan.io',
      txPage: 'https://axelarscan.io/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/axelar',
      txPage: 'https://www.mintscan.io/axelar/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/axelar/accounts/${accountAddress}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://axelar.explorers.guru',
      txPage: 'https://axelar.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/axelar',
      txPage: 'https://atomscan.com/axelar/transactions/${txHash}',
      accountPage: 'https://atomscan.com/axelar/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/axelar',
      accountPage: 'https://stakeflow.io/axelar/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/axelar',
      txPage: 'https://ezstaking.app/axelar/txs/${txHash}',
      accountPage: 'https://ezstaking.app/axelar/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axelar-chain-logo.svg'
    }]
};
export default info;