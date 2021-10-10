import Cookies from 'js-cookie';

const defaultDeploySettings: DeploySettings = {
  branch: '',
  command: '',
  frequency: '10',
  repository: '',
};

const cookieName = '_deploy_settings_';

export const getDeploySettings = (): DeploySettings => {
  const deploySettings = Cookies.get(cookieName);
  return deploySettings ? JSON.parse(deploySettings) : defaultDeploySettings;
};

export const saveDeploySettings = (deploySettings: DeploySettings): void => {
  Cookies.set(cookieName, JSON.stringify(deploySettings));
};

export const hasDeploySettings = (): boolean =>
  Boolean(Cookies.get(cookieName));
