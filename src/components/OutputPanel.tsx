import React from 'react';

interface OutputPanelProps {
  output: string;
  error: string;
}

export function OutputPanel({ output, error }: OutputPanelProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-4 h-full overflow-auto">
      {error ? (
        <pre className="text-red-400 font-mono text-sm">{error}</pre>
      ) : (
        <pre className="text-green-400 font-mono text-sm">{output}</pre>
      )}
    </div>
  );
}