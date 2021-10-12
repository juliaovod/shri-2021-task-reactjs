import React from 'react';

import AutoSuggest from 'UiKit/components/AutoSuggest';

import { getCommitString } from '@/entities/commit';

type CommitSuggestionProps = {
  commits?: Commit[];
  onChange?: (value: string) => void;
  value?: string;
}

const CommitSuggestion: React.FC<CommitSuggestionProps> = (props) => {
  const { commits = [], onChange = (value) => value, value = '' } = props;

  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const commitString = commits.map(getCommitString);

  const getSuggestions = (inputValue: string): string[] =>
    commitString.filter((commit: string) =>
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
      getSuggestionValue={(suggestion: string) => suggestion}
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
