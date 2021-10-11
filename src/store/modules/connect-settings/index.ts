import {
  getConnectSettings,
  saveConnectSettings as saveSettings,
} from 'UiKit/utils/connect-settings';

interface State {
  connectSettings: ConnectSettings;
}

export const connectSettingsReducerName = 'connect-settings';

const initialState: State = {
  connectSettings: getConnectSettings(),
};

const SET_CONNECT_SETTINGS = 'connect-settings/SET_CONNECT_SETTINGS';

const setConnectSettings = (settings: ConnectSettings) => ({
  payload: { connectSettings: settings },
  type: SET_CONNECT_SETTINGS,
});

export const saveConnectSettings = (settings: ConnectSettings) =>
  (dispatch: any): Promise<void> => {
    dispatch(setConnectSettings(settings));
    return saveSettings(settings);
  };

const reducer = (state = initialState, action: any) => {
  if (action.type === SET_CONNECT_SETTINGS) {
    return {
      ...state,
      connectSettings: action.payload,
    };
  }

  return state;
};

export default reducer;
