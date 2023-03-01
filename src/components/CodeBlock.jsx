import React, { useState, useEffect, useRef } from 'react';
import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/base16/horizon-dark.css';

hljs.registerLanguage('xml', html);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('javascript', javascript);

const CodeBlock = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const preRef = useRef(null);

  useEffect(() => {
    hljs.highlightBlock(preRef.current);
  }, [code, language]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopyClick}
        className="absolute top-0 right-0 invisible px-2 py-1 m-2 text-xs text-gray-400 bg-transparent rounded sm:visible focus:outline-none">
        {isCopied ? 'Copied!' : 'Copy Code'}
      </button>
      <pre
        className="p-4 overflow-x-auto rounded-md bg-black-pearl"
        ref={preRef}>
        <code className={`text-gray-300 language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
