import React from 'react';
import { Book, Code2, Terminal, Cpu, Workflow } from 'lucide-react';

export function Docs() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <Book className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AppStack Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive guide to using AppStack for your development workflow
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <DocSection
            icon={<Terminal className="w-8 h-8 text-blue-500" />}
            title="Getting Started"
            items={[
              { title: 'Installation', link: '#installation' },
              { title: 'Quick Start Guide', link: '#quick-start' },
              { title: 'Basic Configuration', link: '#configuration' },
            ]}
          />

          <DocSection
            icon={<Code2 className="w-8 h-8 text-purple-500" />}
            title="Language Support"
            items={[
              { title: 'Python Development', link: '#python' },
              { title: 'C/C++ Setup', link: '#cpp' },
              { title: 'Rust Projects', link: '#rust' },
              { title: 'Go Development', link: '#go' },
            ]}
          />

          <DocSection
            icon={<Cpu className="w-8 h-8 text-green-500" />}
            title="Features"
            items={[
              { title: 'Code Intelligence', link: '#intelligence' },
              { title: 'Debugging Tools', link: '#debugging' },
              { title: 'Performance Profiling', link: '#profiling' },
            ]}
          />

          <DocSection
            icon={<Workflow className="w-8 h-8 text-yellow-500" />}
            title="Advanced Topics"
            items={[
              { title: 'Custom Extensions', link: '#extensions' },
              { title: 'API Reference', link: '#api' },
              { title: 'Contributing Guide', link: '#contributing' },
            ]}
          />
        </div>

        <div className="mt-16 p-8 bg-gray-900/50 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="space-y-4">
            <UpdateItem
              version="v1.2.0"
              date="March 15, 2024"
              description="Added support for Rust analyzer and improved C++ debugging"
            />
            <UpdateItem
              version="v1.1.0"
              date="March 1, 2024"
              description="Enhanced Python virtual environment management"
            />
            <UpdateItem
              version="v1.0.0"
              date="February 15, 2024"
              description="Initial release with core features and language support"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function DocSection({ icon, title, items }) {
  return (
    <div className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-lg">
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-gray-400 hover:text-blue-400 transition-colors block py-1"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UpdateItem({ version, date, description }) {
  return (
    <div className="border-l-2 border-blue-500 pl-4">
      <div className="flex items-center space-x-3 mb-1">
        <span className="font-mono text-blue-400">{version}</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-400">{date}</span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}