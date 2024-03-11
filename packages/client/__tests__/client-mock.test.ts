import nock from 'nock';

import assets from '../../../__fixtures__/assets.json';
import chains from '../../../__fixtures__/chains.json';
import { ChainRegistryClient } from '../src/client';

const baseUrl = 'https://raw.githubusercontent.com';

function nockByChainName(chainName: string) {
  const chainDataPath = `/cosmos/chain-registry/master/${chainName}/chain.json`;
  const assetlistDataPath = `/cosmos/chain-registry/master/${chainName}/assetlist.json`;

  const chainData = chains.find((chain) => chain.chain_name === chainName);
  const assetlistData = assets.find((asset) => asset.chain_name === chainName);

  nock(baseUrl).get(chainDataPath).reply(200, chainData);
  nock(baseUrl).get(assetlistDataPath).reply(200, assetlistData);
}

describe('Test client', () => {
  let client: ChainRegistryClient;

  beforeAll(async () => {
    nockByChainName('osmosis');
    client = new ChainRegistryClient({ chainNames: ['osmosis'] });
    await client.fetch();
  });

  it('Test mock fetching chain data', () => {
    const chainData = client.getChain('osmosis');
    expect(chainData?.chain_name).toEqual('osmosis');
  });

  it('Test mock fetching asset list', () => {
    const assetList = client.getChainAssetList('osmosis');
    expect(assetList?.assets.length).toEqual(3);
  });
});
