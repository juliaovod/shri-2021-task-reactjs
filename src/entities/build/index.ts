import { customAlphabet } from 'nanoid';

import { BuildStatus } from '@/enums/build';

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
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(builds);
    }, TIMEOUT);
  });
};

export const addBuild = (commit: Commit): Promise<Build> => {
  const TIMEOUT = 1000;

  const build = createBuild(commit);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(build);
    }, TIMEOUT);
  });
};
