import React from 'react';
import { CodeBlockData } from '../types';

interface CodeBlockProps {
  data: CodeBlockData;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ data }) => {
  const { language, code } = data;

  const highlightCode = (code: string, language: 'html' | 'javascript'): string => {
    // Basic HTML entity escaping
    let highlightedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (language === 'html') {
      // Comments: must be first. Use single quotes for generated class attributes.
      highlightedCode = highlightedCode.replace(/(&lt;!--.*?--&gt;)/gs, "<span class='text-gray-500'>$1</span>");
      
      // Attribute name and value: must be before tag replacement.
      // This regex specifically targets attributes with double quotes, so it won't match our single-quoted class attributes.
      highlightedCode = highlightedCode.replace(/(\s+[\w\d-]+)(=)(".*?")/g, "<span class='text-yellow-300'>$1</span>$2<span class='text-green-400'>$3</span>");
      
      // Tags and angle brackets. Use single quotes for generated class attributes.
      highlightedCode = highlightedCode.replace(/(&lt;\/?[\w\d-]+|&gt;)/g, "<span class='text-pink-400'>$1</span>");
    }

    if (language === 'javascript') {
        // Keywords like React, etc.
        highlightedCode = highlightedCode.replace(/\b(React|createElement)\b/g, '<span class="text-cyan-400">$1</span>');
        // Strings in quotes
        highlightedCode = highlightedCode.replace(/('.*?')/g, '<span class="text-green-400">$1</span>');
        // Object keys/properties
        highlightedCode = highlightedCode.replace(/([{,]\s*)([\w]+):/g, '$1<span class="text-yellow-300">$2</span>:');
        // Punctuation like braces and parens
        highlightedCode = highlightedCode.replace(/([{}();,])/g, '<span class="text-gray-400">$1</span>');
    }

    return highlightedCode;
  };

  const highlightedCode = highlightCode(code, language);


  return (
    <div className="bg-gray-800 rounded-lg my-4 overflow-hidden shadow-lg">
      <div className="bg-gray-700 text-gray-300 px-4 py-2 text-sm font-semibold flex justify-between items-center">
        <span>{language.toUpperCase()}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none"
          title="Copy to clipboard"
        >
          <i className="far fa-copy"></i>
        </button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;