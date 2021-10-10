import Cookies from 'js-cookie';

const defaultConnectionSettings: ConnectionSettings = {
  branch: '',
  command: '',
  frequency: '10',
  repository: '',
};

const cookieName = '_ci_server__connection_settings_';

export const getConnectionSettings = (): ConnectionSettings => {
  const settings = Cookies.get(cookieName);
  return settings ? JSON.parse(settings) : defaultConnectionSettings;
};

export const saveConnectionSettings = (settings: ConnectionSettings): void => {
  Cookies.set(cookieName, JSON.stringify(settings));
};

export const hasConnectionSettings = (): boolean =>
  Boolean(Cookies.get(cookieName));
