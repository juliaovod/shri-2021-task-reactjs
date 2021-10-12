import React from 'react';

import classNames from 'classnames';
import { isEmpty } from 'ramda';

import Button from 'UiKit/components/Button';
import TextField from 'UiKit/components/TextField';
import Typography from 'UiKit/components/Typography';
import { getConnectSettings, saveConnectSettings } from '@/entities/connect-settings';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';

import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const [state, setState] = React.useReducer(
    (prevState: ConnectSettings, nextState: { [key: string]: string }) =>
      (nextState ? ({ ...prevState, ...nextState }) : prevState),
    getConnectSettings(),
  );

  const [isSaved, setIsSaved] = React.useState(false);
  const [isFetching, setIsFetching] = React.useState(false);

  const isInvalid = Object.values(state).some(isEmpty) || Number(state.frequency) <= 0;

  const handleChange = (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement>, value: string): void => {
      setState({
        [name]: value,
      });
    };

  const handleSave = (): void => {
    if (isInvalid) {
      return;
    }

    setIsFetching(true);
    setIsSaved(false);

    saveConnectSettings(state)
      .then(() => {
        setIsFetching(false);
        setIsSaved(true);
      });
  };

  return (
    <Layout header={(
      <Header>
        <Typography size="l" tagName="h1" theme="grey">School CI server</Typography>
      </Header>
    )}
    >
      <header className={classNames(styles.settingsHeader)}>
        <Typography className={classNames(styles.settingsSubtitle)} tagName="h2" weight={600}>
          Settings
        </Typography>

        <Typography tagName="p" size="xs" theme="grey">
          Configure repository connection and synchronization settings.
        </Typography>
      </header>

      {isSaved && (
        <Typography
          className={classNames(styles.settingsSaved)}
          size="xs"
          theme="green"
        >
          Saved
        </Typography>
      )}

      <div className={classNames(styles.settingsBody)}>
        <TextField
          className={classNames(styles.settingsField)}
          id="repository"
          isRequired
          label="GitHub repository"
          onChange={handleChange('repository')}
          placeholder="user-name/repo-name"
          value={state.repository}
        />

        <TextField
          className={classNames(styles.settingsField)}
          id="command"
          isRequired
          label="Build command"
          onChange={handleChange('command')}
          placeholder="npm ci && npm run build"
          value={state.command}
        />

        <TextField
          className={classNames(styles.settingsField)}
          id="branch"
          isRequired
          label="Main branch"
          onChange={handleChange('branch')}
          placeholder="master"
          value={state.branch}
        />

        <div className={classNames(styles.settingsSync)}>
          <TextField
            className={classNames(styles.settingsTime)}
            id="frequency"
            isClearable={false}
            label="Synchronize every"
            labelPosition="left"
            onChange={handleChange('frequency')}
            placeholder="10"
            textAlign="right"
            type="number"
            value={state.frequency}
          />

          <Typography className={classNames(styles.settingsMinutes)} size="xs" tagName="span">
            minutes
          </Typography>
        </div>
      </div>

      <footer className={classNames(styles.settingsFooter)}>
        <Button
          className={classNames(styles.settingsButton)}
          isDisabled={isInvalid}
          isProgress={isFetching}
          onClick={handleSave}
          view="action"
        >
          Save
        </Button>

        <Button
          className={classNames(styles.settingsButton)}
          isDisabled={isFetching}
          path={RoutePaths.INDEX.PATH}
        >
          Cancel
        </Button>
      </footer>
    </Layout>
  );
};

export default Settings;
