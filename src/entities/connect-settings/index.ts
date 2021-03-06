import Cookies from 'js-cookie';

const defaultConnectSettings: ConnectSettings = {
  branch: '',
  command: '',
  frequency: '10',
  repository: '',
};

const cookieName = '_ci_server__connect_settings_';

export const getConnectSettings = (): ConnectSettings => {
  const settings = Cookies.get(cookieName);
  return settings ? JSON.parse(settings) : defaultConnectSettings;
};

export const saveConnectSettings = (settings: ConnectSettings): Promise<void> => {
  const TIMEOUT = 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      Cookies.set(cookieName, JSON.stringify(settings));
      resolve();
    }, TIMEOUT);
  });
};

export const hasConnectSettings = (): boolean =>
  Boolean(Cookies.get(cookieName));
