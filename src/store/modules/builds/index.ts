import { getBuilds } from '@/entities/build';

interface State {
  builds: Build[];
}

const initialState: State = {
  builds: [],
};

export const buildsReducerName = 'builds';

const SET_BUILDS = 'builds/SET_BUILDS';

const setBuilds = (builds: Build[]) => ({
  payload: { builds },
  type: SET_BUILDS,
});

export const fetchBuilds = () => (dispatch: any): Promise<void> =>
  getBuilds().then((builds: Build[]) => {
    dispatch(setBuilds(builds));
  });

const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case SET_BUILDS:
      return {
        ...state,
        builds: action.payload.builds,
      };
    default:
      return state;
  }
};

export default reducer;
