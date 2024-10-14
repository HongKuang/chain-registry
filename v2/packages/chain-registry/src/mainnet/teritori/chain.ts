import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'teritori',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://teritori.com/',
  prettyName: 'Teritori',
  chainType: 'cosmos',
  chainId: 'teritori-1',
  daemonName: 'teritorid',
  nodeHome: '$HOME/.teritorid',
  bech32Prefix: 'tori',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utori',
        lowGasPrice: 0,
        averageGasPrice: 0.25,
        highGasPrice: 0.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utori'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/TERITORI/teritori-chain',
    recommendedVersion: 'v2.0.6',
    compatibleVersions: ['v2.0.6'],
    cosmosSdkVersion: 'v0.47.6',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    cosmwasmVersion: 'v0.41.0',
    cosmwasmEnabled: true,
    cosmwasmPath: '$HOME/.teritorid/data/wasm',
    genesis: {
      genesisUrl: 'https://github.com/TERITORI/teritori-chain/raw/mainnet/mainnet/teritori-1/genesis.json'
    },
    versions: [
      {
        name: 'v1.3.1',
        recommendedVersion: 'v1.3.1',
        compatibleVersions: ['v1.3.1'],
        nextVersionName: 'v1.4.0'
      },
      {
        name: 'v1.4.0',
        proposal: 34,
        height: 3699425,
        recommendedVersion: 'v1.4.0',
        compatibleVersions: ['v1.4.0'],
        nextVersionName: 'v2.0.0'
      },
      {
        name: 'v2.0.0',
        proposal: 38,
        height: 7199342,
        recommendedVersion: 'v2.0.6',
        compatibleVersions: ['v2.0.6'],
        cosmosSdkVersion: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2'
        },
        cosmwasmVersion: 'v0.41.0',
        cosmwasmEnabled: true,
        cosmwasmPath: '$HOME/.teritorid/data/wasm',
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.6'
        },
        cosmwasm: {
          version: 'v0.41.0',
          path: '$HOME/.teritorid/data/wasm',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: 'v7.3.1'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.6'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.1'
    },
    cosmwasm: {
      version: 'v0.41.0',
      path: '$HOME/.teritorid/data/wasm',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://teritori-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://teritori.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.teritori.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://teritori-rpc.brocha.in',
        provider: 'Brochain'
      },
      {
        address: 'https://teritori-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://teritori.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc.tori.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://teritori-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://m-teritori.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://rpc-teritori.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://teritori-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-teritori.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://teritori-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://teritori-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://teritori_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://teritori-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://teritori.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.teritori.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://teritori-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://teritori.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://api.tori.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://teritori-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://m-teritori.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://api-teritori.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://teritori-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-teritori.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://teritori-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://teritori-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://teritori_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc.teritori.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'teritori.grpc.m.stavr.tech:6705',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'teritori-grpc.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'teritori-grpc.polkachu.com:15990',
        provider: 'Polkachu'
      },
      {
        address: 'teritori.grpc.silknodes.io:443',
        provider: 'Silk Nodes'
      },
      {
        address: 'teritori-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'teritori.grpc.kjnodes.com:11990',
        provider: 'kjnodes'
      },
      {
        address: 'teritori-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/teritori',
      txPage: 'https://ezstaking.app/teritori/txs/${txHash}',
      accountPage: 'https://ezstaking.app/teritori/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.teritori.com/teritori',
      txPage: 'https://explorer.teritori.com/teritori/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/teritori-main',
      txPage: 'https://explorer.stavr.tech/teritori-main/tx/${txHash}'
    },
    {
      kind: 'guru',
      url: 'https://teritori.explorers.guru/',
      txPage: 'https://teritori.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'Brochain',
      url: 'https://explorer.brocha.in/teritori',
      txPage: 'https://explorer.brocha.in/teritori/tx/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      url: 'https://exp.utsa.tech/teritori',
      txPage: 'https://exp.utsa.tech/teritori/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/teritori',
      txPage: 'https://www.mintscan.io/teritori/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/teritori/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/teritori',
      txPage: 'https://explorer.tcnetwork.io/teritori/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/teritori',
      txPage: 'https://atomscan.com/teritori/transactions/${txHash}',
      accountPage: 'https://atomscan.com/teritori/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/teritori',
      txPage: 'https://explorer.whenmoonwhenlambo.money/teritori/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/teritori/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/chain.svg',
      theme: {
        primaryColorHex: '#44c5f1'
      }
    }]
};
export default info;