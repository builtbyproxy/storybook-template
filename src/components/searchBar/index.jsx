import './styles.css'
import React from "react";
import FuzzySearch from 'react-fuzzy'
import { capitalCase } from 'change-case'

export default function SearchBar(props) {
  function selectResult(selectedResult) {
    props.handleSubmit(selectedResult.name, selectedResult.url);
  }

  return (
    <FuzzySearch
      className="searchForm"
      list={props.dataToSearch}
      placeholder="Choose Your Pokemon!"
      keys={['name']}
      onSelect={selectResult}
      resultsTemplate={(props, state, styles, clickHandler) => {
        return state.results.map((val, i) => {
          const style = state.selectedIndex === i ? styles.selectedResultStyle : styles.resultsStyle;
          return (
            <div
              key={i}
              style={style}
              onClick={() => clickHandler(i)}
            >
              {capitalCase(val.name)}
            </div>
          );
        });
      }}
    />
  );
}
