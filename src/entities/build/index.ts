import { customAlphabet } from 'nanoid';

import { getRandomArbitrary } from 'UiKit/utils/random';

import { BuildStatus } from '@/enums/build';
import { CustomMetrics } from '@/analytics/utils';

import builds from '../../../_builds_mockup.json';

const nanoid = customAlphabet('123456789', 5);

export const createBuild = (commit: Commit): Build => ({
  createdAt: new Date().toString(),
  deployable: {
    commit: commit,
    ref: 'master',
  },
  finishedAt: new Date().toString(),
  id: Number(nanoid()),
  status: BuildStatus.Running,
});

export const getBuilds = (): Promise<Build[]> => {
  const TIMEOUT = getRandomArbitrary(1000, 8000);

  const requestStart = Date.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(builds);

      const requestEnd = Date.now();

      if (window.counter) {
        window.counter.send(CustomMetrics.request.BUILD_LIST, requestEnd - requestStart);
      }
    }, TIMEOUT);
  });
};

export const addBuild = (commit: Commit): Promise<Build> => {
  const TIMEOUT = getRandomArbitrary(1000, 5000);

  const build = createBuild(commit);

  const requestStart = Date.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(build);

      const requestEnd = Date.now();

      if (window.counter) {
        window.counter.send(CustomMetrics.request.BUILD_ADD, requestEnd - requestStart);
      }
    }, TIMEOUT);
  });
};
