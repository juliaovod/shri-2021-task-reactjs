type DeployBuild = {
  createdAt: string;
  deployable: {
    commit: {
      authorEmail: string;
      authorName: string;
      createdAt: string;
      id: string;
      message: string;
      shortId: string;
      title: string;
    };
    ref: string;
  };
  finishedAt: string;
  id: number;
  status: import('@/enums/deploy').DeployStatus;
}

type DeploySettings = {
  branch: string;
  command: string;
  frequency: string;
  repository: string;
}
