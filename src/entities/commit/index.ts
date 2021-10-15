import { not } from 'ramda';

// eslint-disable-next-line camelcase
import _commits_mockup from '../../../_commits_mockup.json';

export const getCommits = (): Promise<Commit[]> => {
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(_commits_mockup);
    }, TIMEOUT);
  });
};

export const isInvalidCommitHash = (value: string, commits: Commit[]): boolean =>
  not(commits.some((commit) => value === commit.id || value === commit.shortId));

export const humanizeCommit = (commit: Commit): string =>
  [
    commit.authorName,
    commit.message,
    commit.shortId,
  ].join(', ');

export const buildCommitsMap = (commits: Commit[]) =>
  commits.reduce<{ [key: string]: Commit }>((accum, commit) => {
    accum[commit.shortId] = commit;
    return accum;
  }, {});
