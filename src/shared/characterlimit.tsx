import React, { useState, useEffect } from 'react';

function CharacterLimit({ text, limit }) {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > limit) {
      setTruncatedText(text.slice(0, limit) + '...');
    } else {
      setTruncatedText(text);
    }
  }, [text, limit]);

  return <div>{truncatedText}</div>;
}

export default CharacterLimit;
