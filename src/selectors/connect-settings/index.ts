import { RootState } from '@/store';
import { connectSettingsReducerName } from '@/store/modules/connect-settings';

const selector = (state: RootState) => state[connectSettingsReducerName];

export const connectSettingsSelector = (state: RootState) => selector(state).connectSettings;
