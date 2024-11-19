import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dungeon',
  assets: [{
      description: 'Dragon Token is the native staking and governance token of Dungeon Chain, serving as the backbone of the ecosystem. Its primary roles include staking, where users stake Dragon Tokens to secure the network, enhance its functionality, and earn rewards in return; governance, granting token holders voting rights to influence key decisions such as game onboarding, protocol updates, and community-driven initiatives; and ecosystem growth, facilitating transactions, incentivizing developers, and promoting the creation of new interchain games. Dragon Token ensures a decentralized, fair, and community-driven ecosystem, fostering the evolution of blockchain-based gaming. It plays a crucial role in driving the growth of Dungeon Chain by empowering both developers and players to participate actively in the ecosystem\'s governance and success.',
      extended_description: 'Dungeon Chain is a groundbreaking, permissioned blockchain designed specifically for interchain gaming. Launched as the first permissionless ICS (Interchain Security) chain, Dungeon Chain empowers developers and players to participate in a seamless gaming ecosystem that bridges multiple blockchains. By leveraging ICS technology, it ensures robust security, scalability, and interoperability across gaming projects. Dungeon Chain features an interchain gaming platform that allows games to interact across multiple blockchains, enabling shared assets, gameplay mechanics, and player data. It is permissioned yet inclusive, offering a streamlined, transparent process for developers to onboard games while maintaining quality and security. With high transaction throughput and low latency, it provides scalability for gamers, ensuring a smooth experience even during peak usage. Additionally, its developer-friendly ecosystem includes tools, SDKs, and documentation to facilitate the creation and integration of games into the platform. Dungeon Chain\'s vision is to redefine how games interact with blockchain technology by creating a secure, scalable, and specialized environment for interchain games, unlocking new possibilities for player ownership, collaboration, and innovation in gaming.',
      denom_units: [{
          denom: 'udgn',
          exponent: 0
        }, {
          denom: 'DGN',
          exponent: 6
        }],
      base: 'udgn',
      name: 'Dungeon Coin',
      display: 'DGN',
      symbol: 'DGN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png'
      },
      socials: {
        website: 'https://www.cryptodungeon.org',
        twitter: 'https://twitter.com/cryptodungeonma'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dungeon/images/DGN.png',
          theme: {
            circle: true
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;