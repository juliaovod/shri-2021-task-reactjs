import { RootState } from '@/store';
import { buildsReducerName } from '@/store/modules/builds';

const selector = (state: RootState) => state[buildsReducerName];

export const buildsSelector = (state: RootState) => selector(state).builds;
