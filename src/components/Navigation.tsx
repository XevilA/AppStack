import React from 'react';
import { Layers, Github, Book } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <Layers className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">AppStack</span>
          </a>
          
          <div className="flex items-center space-x-6">
            <a href="/docs" className="text-gray-300 hover:text-white flex items-center space-x-2">
              <Book className="w-5 h-5" />
              <span>Docs</span>
            </a>
            <a 
              href="https://github.com/xevilA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}