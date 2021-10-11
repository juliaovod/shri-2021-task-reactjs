import { customAlphabet } from 'nanoid';

import { BuildStatus } from '@/enums/build';

const getId = customAlphabet('123456789', 5);
const getCommitHash = customAlphabet('a-z', 40);

import builds from '../../../../_builds_mockup.json';

export const getBuilds = (): Promise<Build[]> => {
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(builds);
    }, TIMEOUT);
  });
};

export const createBuild = (): Build => {
  const commitHash = getCommitHash();

  return {
    createdAt: '',
    deployable: {
      commit: {
        authorEmail: 'bublick.semenovish@gmail.com',
        authorName: 'Bublick Semenovich',
        createdAt: new Date().toString(),
        id: commitHash,
        message: 'Super cool UI kit for making websites that look like games',
        shortId: commitHash.slice(0, 7),
        title: 'Super cool UI kit for making websites that look like game',
      },
      ref: 'develop',
    },
    finishedAt: new Date().toString(),
    id: Number(getId()),
    status: BuildStatus.Running,
  };
};
