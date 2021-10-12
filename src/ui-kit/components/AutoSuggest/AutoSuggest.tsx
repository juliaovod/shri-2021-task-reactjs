import React from 'react';
import ReactAutoSuggest, { AutosuggestProps } from 'react-autosuggest';

import styles from './AutoSuggest.module.css';

type SuggestInputProps = AutosuggestProps<any, any>;

const AutoSuggest: React.FC<SuggestInputProps> = (props) => (
  <ReactAutoSuggest
    {...props}
    alwaysRenderSuggestions
    theme={{
      container: styles.autoSuggestContainer,
      input: styles.autoSuggestInput,
      suggestion: styles.autoSuggestSuggestion,
      suggestionsContainer: styles.autoSuggestSuggestionsContainer,
      suggestionsList: styles.autoSuggestSuggestionList,
    }}
  />
);

export default AutoSuggest;
