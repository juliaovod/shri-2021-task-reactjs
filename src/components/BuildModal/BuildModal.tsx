import React from 'react';

import classNames from 'classnames';
import { isEmpty } from 'ramda';

import Button from 'UiKit/components/Button';
import Modal, { ModalProps } from 'UiKit/components/Modal';
import TextField from 'UiKit/components/TextField';
import Typography from 'UiKit/components/Typography';

import styles from './BuildModal.module.css';

type BuildModalProps = Omit<ModalProps, 'title' | 'cancelButton' | 'okButton'>;

const BuildModal: React.FC<BuildModalProps> = (props) => {
  const { onClose = () => undefined, ...otherProps } = props;

  const [commitHash, setCommitHash] = React.useState('');

  const isInvalid = isEmpty(commitHash);

  return (
    <Modal
      {...otherProps}
      cancelButton={<Button onClick={onClose} theme="secondary">Cancel</Button>}
      okButton={<Button isDisabled={isInvalid}>Run build</Button>}
      onClose={onClose}
      title="New build"
    >
      <Typography className={classNames(styles.buildModalDescription)} size="xs">
        Enter the commit hash which you want to build.
      </Typography>

      <TextField
        onChange={(e, value) => setCommitHash(value)}
        placeholder="Commit hash"
        value={commitHash}
      />
    </Modal>
  );
};

export default BuildModal;
