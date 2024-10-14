import { CLI } from 'inquirerer';

import { commands } from '../src/commands/info';
import { getRegistryFixtureDir, setupTests, TestEnvironment } from '../test-utils';

const beforeEachSetup = setupTests();
const registryDir = getRegistryFixtureDir();

describe('Inquirerer', () => {
  let environment: TestEnvironment;

  beforeEach(() => {
    environment = beforeEachSetup();
  });

  it('prompts user and correctly processes delayed input', async () => {
    const { options  } = environment;

    const app = new CLI(commands, options, {
      _: ['validate'],
      registryDir
    });

    const result = await app.run();

    expect(result).toMatchSnapshot();
  });
});