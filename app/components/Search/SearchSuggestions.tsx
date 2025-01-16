import {Analytics} from '@shopify/hydrogen';

import {useSettings} from '~/hooks';

import type {SearchSuggestionsProps} from './Search.types';

export function SearchSuggestions({
  handleSuggestion,
  hasNoProductResults,
  searchTerm,
}: SearchSuggestionsProps) {
  const {search} = useSettings();
  const {results, suggestions, input} = {...search};
  const {noResultsText} = {...results};
  const {heading, terms} = {...suggestions};
  const characterMin = Number(input?.characterMin || 1);

  return (
    <div className="scrollbar-hide flex flex-1 flex-col gap-8 overflow-y-auto p-8">
      {hasNoProductResults && (
        <>
          <h3 className="text-base font-normal">{noResultsText}</h3>

          {searchTerm?.length >= characterMin && (
            <Analytics.SearchView data={{searchTerm, searchResults: []}} />
          )}
        </>
      )}

      {terms?.length > 0 && (
        <div>
          <h3 className="text-h5 mb-3">{heading}</h3>

          <ul className="flex flex-col items-start gap-3">
            {terms.map((suggestion) => {
              return (
                <li key={suggestion}>
                  <button
                    aria-label={suggestion}
                    onClick={() => handleSuggestion(suggestion)}
                    type="button"
                  >
                    <p className="hover-text-underline">{suggestion}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

SearchSuggestions.displayName = 'SearchSuggestions';
