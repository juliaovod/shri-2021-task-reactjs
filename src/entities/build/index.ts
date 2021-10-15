import { customAlphabet } from 'nanoid';
import { reverse } from 'ramda';

import { BuildStatus } from '@/enums/build';

const nanoid = customAlphabet('123456789', 4);

import builds from '../../../_builds_mockup.json';

export const getBuilds = (options: { start: number, end: number }): Promise<Build[]> => {
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(reverse(builds).slice(options.start, options.end));
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
