import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  js: string;
  ts: string;
}

const CodeDisplay = ({ js, ts }: Props) => {
  const [lang, setLang] = useState<'JS' | 'TS'>('JS');

  return (
    <div className="code-section">
      <div className="tabs">
        <button className={lang === 'JS' ? 'active' : ''} onClick={() => setLang('JS')}>JavaScript</button>
        <button className={lang === 'TS' ? 'active' : ''} onClick={() => setLang('TS')}>TypeScript</button>
      </div>
      <SyntaxHighlighter language={lang.toLowerCase()} style={atomDark}>
        {lang === 'JS' ? js : ts}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;