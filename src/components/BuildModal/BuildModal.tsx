import React from 'react';

import classNames from 'classnames';
import { isEmpty } from 'ramda';

import Button from 'UiKit/components/Button';
import Modal, { ModalProps } from 'UiKit/components/Modal';
import Typography from 'UiKit/components/Typography';

import CommitSuggestion from '@/components/CommitSuggestion';
import { getCommits, isInvalidCommitHash } from '@/entities/commit';

import styles from './BuildModal.module.css';

type BuildModalProps = Omit<ModalProps, 'title' | 'cancelButton' | 'okButton'>;

const BuildModal: React.FC<BuildModalProps> = (props) => {
  const { onClose = () => undefined, ...otherProps } = props;

  const [commits, setCommits] = React.useState<Commit[]>([]);
  const [commitHash, setCommitHash] = React.useState('');

  React.useEffect(() => {
    getCommits().then(setCommits);
  }, []);

  const isInvalid = isEmpty(commitHash) || isInvalidCommitHash(commitHash, commits);

  const handleClose = (): void => {
    setCommitHash('');
    onClose();
  };

  return (
    <Modal
      {...otherProps}
      cancelButton={<Button onClick={onClose}>Cancel</Button>}
      okButton={<Button isDisabled={isInvalid} view="action">Run build</Button>}
      onClose={handleClose}
      title="New build"
    >
      <Typography className={classNames(styles.buildModalDescription)} size="xs">
        Enter the commit hash which you want to build.
      </Typography>

      <CommitSuggestion commits={commits} onChange={setCommitHash} value={commitHash} />
    </Modal>
  );
};

export default BuildModal;
