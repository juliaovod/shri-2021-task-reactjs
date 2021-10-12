type Build = {
  createdAt: string;
  deployable: {
    commit: Commit;
    ref: string;
  };
  finishedAt: string;
  id: number;
  status: import('@/enums/build').BuildStatus;
}
