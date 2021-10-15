import { getBuilds, createBuild } from '@/entities/build';

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
  getBuilds({ end: 3, start: 0 }).then((builds: Build[]) => {
    dispatch(setBuilds(builds));
  });

export const fetchMoreBuilds = () => (dispatch: any, getState: any): Promise<void> => {
  const { builds } = getState()[buildsReducerName];

  return getBuilds({ end: builds.length + 2, start: builds.length }).then((nextBuilds: Build[]) => {
    dispatch(setBuilds([...builds, ...nextBuilds]));
  });
};

export const addBuild = (commit: Commit) => (dispatch: any, getState: any): Promise<void> => {
  const TIMEOUT = 1000;

  return createBuild(commit).then((build: Build) => {
    const { builds } = getState()[buildsReducerName];
    dispatch(setBuilds([build, ...builds]));

    return new Promise((resolve) => {
      setTimeout(resolve, TIMEOUT);
    });
  });
};

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
