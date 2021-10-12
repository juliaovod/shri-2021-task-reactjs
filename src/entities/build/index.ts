import { customAlphabet } from 'nanoid';

import { BuildStatus } from '@/enums/build';

const nanoid = customAlphabet('123456789', 5);

export const createBuild = (commit: Commit): Build => ({
  createdAt: '',
  deployable: {
    commit: commit,
    ref: 'master',
  },
  finishedAt: new Date().toString(),
  id: Number(nanoid()),
  status: BuildStatus.Running,
});
