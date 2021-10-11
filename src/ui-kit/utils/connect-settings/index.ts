import Cookies from 'js-cookie';

const cookieKey = '_ci_server__connect_settings_';

export const getConnectSettings = (): ConnectSettings => {
  const settings = Cookies.get(cookieKey);
  return settings ? JSON.parse(settings) : null;
};

export const saveConnectSettings = (settings: ConnectSettings): Promise<void> => {
  const TIMEOUT = 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      Cookies.set(cookieKey, JSON.stringify(settings));
      resolve();
    }, TIMEOUT);
  });
};
