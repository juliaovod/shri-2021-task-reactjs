import { RootState } from '@/store';
import { commitsReducerName } from '@/store/modules/commits';

const selector = (state: RootState) => state[commitsReducerName];

export const commitsSelector = (state: RootState): Commit[] => selector(state).commits;
