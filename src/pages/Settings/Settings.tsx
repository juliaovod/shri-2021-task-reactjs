import React from 'react';

import classNames from 'classnames';
import { isEmpty } from 'ramda';

import Button from 'UiKit/components/Button';
import TextField from 'UiKit/components/TextField';
import Typography from 'UiKit/components/Typography';

import Header from '@/components/Header';
import Layout from '@/components/Layout';
import RoutePaths from '@/router/paths';

import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const [state, setState] = React.useReducer(
    (prevState: any, nextState: any) => (nextState ? ({ ...prevState, ...nextState }) : prevState),
    {
      branch: '',
      command: '',
      minutes: '10',
      repository: '',
    },
  );

  const isInvalid = Object.values(state).some(isEmpty);

  const handleChange = (name: string) =>
    (e: React.ChangeEvent<HTMLInputElement>, value: string): void => {
      setState({
        [name]: value,
      });
    };

  const handleClear = (name: string) => (): void => {
    setState({
      [name]: '',
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

      <div className={classNames(styles.settingsBody)}>
        <TextField
          className={classNames(styles.settingsField)}
          id="repository"
          isRequired
          label="GitHub repository"
          onChange={handleChange('repository')}
          onClear={handleClear('repository')}
          value={state.repository}
        />

        <TextField
          className={classNames(styles.settingsField)}
          id="command"
          isRequired
          label="Build command"
          onChange={handleChange('command')}
          onClear={handleClear('command')}
          value={state.command}
        />

        <TextField
          className={classNames(styles.settingsField)}
          id="branch"
          isRequired
          label="Main branch"
          onChange={handleChange('branch')}
          onClear={handleClear('branch')}
          value={state.branch}
        />

        <div className={classNames(styles.settingsSync)}>
          <TextField
            className={classNames(styles.settingsTime)}
            id="minutes"
            isClearable={false}
            label="Synchronize every"
            labelPosition="left"
            onChange={handleChange('minutes')}
            onClear={handleClear('minutes')}
            placeholder={null}
            textAlign="right"
            type="number"
            value={state.minutes}
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
        >
          Save
        </Button>

        <Button
          className={classNames(styles.settingsButton)}
          path={RoutePaths.INDEX.PATH}
          theme="secondary"
        >
          Cancel
        </Button>
      </footer>
    </Layout>
  );
};

export default Settings;
