import React from 'react';

import AutoSuggest from 'UiKit/components/AutoSuggest';

import { buildCommitsMap, humanizeCommit } from '@/entities/commit';

type CommitSuggestProps = {
  commits?: Commit[];
  onChange?: (value: string) => void;
  value?: string;
}

const CommitSuggest: React.FC<CommitSuggestProps> = (props) => {
  const { commits = [], onChange = (value) => value, value = '' } = props;

  const [suggestions, setSuggestions] = React.useState<Commit[]>([]);

  const commitsMap = buildCommitsMap(commits);

  const getSuggestions = (inputValue: string): Commit[] =>
    Object.values(commitsMap).filter((commit: Commit) =>
      humanizeCommit(commit).toLowerCase().lastIndexOf(inputValue.trim().toLowerCase()) !== -1);

  return (
    <AutoSuggest
      inputProps={{
        onChange: (_, { newValue }) => {
          onChange(newValue);
        },
        placeholder: 'Commit hash',
        value,
      }}
      getSuggestionValue={(suggestion: Commit) => commitsMap[suggestion.shortId].shortId}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({ value: inputValue }) => {
        onChange(inputValue);
        setSuggestions(getSuggestions(inputValue));
      }}
      renderSuggestion={(suggestion: Commit) => humanizeCommit(suggestion)}
      suggestions={suggestions}
    />
  );
};

export default CommitSuggest;
