import { useState, useEffect } from 'react';

function CharacterLimit({ text, limit }) {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > limit) {
      setTruncatedText(text.slice(0, limit) + '...');
    } else {
      setTruncatedText(text);
    }
  }, [text, limit]);

  return truncatedText;
}

export default CharacterLimit;
