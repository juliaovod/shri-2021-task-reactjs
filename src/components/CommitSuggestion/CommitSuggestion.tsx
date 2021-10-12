import React from 'react';

import AutoSuggest from 'UiKit/components/AutoSuggest';

import { buildCommitsMap, humanizeCommit } from '@/entities/commit';

type CommitSuggestionProps = {
  commits?: Commit[];
  onChange?: (value: string) => void;
  value?: string;
}

const CommitSuggestion: React.FC<CommitSuggestionProps> = (props) => {
  const { commits = [], onChange = (value) => value, value = '' } = props;

  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const commitsMap = buildCommitsMap(commits, humanizeCommit);

  const getSuggestions = (inputValue: string): string[] =>
    Object.keys(commitsMap).filter((commit: string) =>
      commit.toLowerCase().lastIndexOf(inputValue.trim().toLowerCase()) !== -1);

  return (
    <AutoSuggest
      inputProps={{
        onChange: (_, { newValue }) => {
          onChange(newValue);
        },
        placeholder: 'Commit hash',
        value,
      }}
      getSuggestionValue={(suggestion: string) => commitsMap[suggestion].shortId}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionsFetchRequested={({ value: inputValue }) => {
        onChange(inputValue);
        setSuggestions(getSuggestions(inputValue));
      }}
      renderSuggestion={(suggestion: string) => suggestion}
      suggestions={suggestions}
    />
  );
};

export default CommitSuggestion;
