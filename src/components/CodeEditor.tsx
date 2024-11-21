import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeEditorProps {
  code: string;
  language: string;
  onChange: (code: string) => void;
}

export function CodeEditor({ code, language, onChange }: CodeEditorProps) {
  return (
    <div className="w-full h-full bg-[#1e1e1e] rounded-lg overflow-hidden">
      <Editor
        value={code}
        onValueChange={onChange}
        highlight={code => highlight(code, languages[language], language)}
        padding={20}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          backgroundColor: '#1e1e1e',
          color: '#fff',
          minHeight: '400px',
        }}
        className="min-h-[400px] focus:outline-none"
      />
    </div>
  );
}