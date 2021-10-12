import commits from '../../../_commits_mockup.json';

export const getCommits = (): Promise<Commit[]> => {
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(commits);
    }, TIMEOUT);
  });
};

export const getCommitString = (commit: Commit): string =>
  [commit.authorName, commit.message, commit.shortId].join(', ');
