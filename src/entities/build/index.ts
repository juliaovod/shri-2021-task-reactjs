import { customAlphabet } from 'nanoid';

import { BuildStatus } from '@/enums/build';

const nanoid = customAlphabet('123456789', 4);

import builds from '../../../_builds_mockup.json';

export const getBuilds = (): Promise<Build[]> => {
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(builds);
    }, TIMEOUT);
  });
};

export const createBuild = (commit: Commit): Promise<Build> => {
  const TIMEOUT = 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        createdAt: new Date().toString(),
        deployable: {
          commit: commit,
          ref: 'master',
        },
        finishedAt: new Date().toString(),
        id: Number(nanoid()),
        status: BuildStatus.Running,
      });
    }, TIMEOUT);
  });
};
