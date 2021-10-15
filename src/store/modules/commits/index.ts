import { getCommits } from '@/entities/commit';

interface State {
  commits: Commit[];
}

export const commitsReducerName = 'commits';

const initialState: State = {
  commits: [],
};

const SET_COMMITS = 'commits/SET_COMMITS';

const setCommits = (commits: Commit[]) => ({
  payload: { commits },
  type: SET_COMMITS,
});

export const fetchCommits = () => (dispatch: any): Promise<void> =>
  getCommits().then((commits: Commit[]) => {
    dispatch(setCommits(commits));
  });

const reducer = (state: State = initialState, action: any) => {
  if (action.type === SET_COMMITS) {
    return {
      ...state,
      commits: action.payload.commits,
    };
  }

  return state;
};

export default reducer;
