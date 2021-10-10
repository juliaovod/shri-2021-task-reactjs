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

export const saveConnectSettings = (settings: ConnectSettings): void => {
  Cookies.set(cookieName, JSON.stringify(settings));
};

export const hasConnectSettings = (): boolean =>
  Boolean(Cookies.get(cookieName));
