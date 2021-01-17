import React from 'react';

export const LanguageItem = (props) => {
  return (
    <div>
      {props.data.map((item) => (
        <button key={item} onClick={() => props.languageCallback(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
