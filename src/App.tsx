import React from 'react';
import { Navigation } from './components/Navigation';
import { Docs } from './pages/Docs';
import { Terminal, Cpu, Layers, Code2, Workflow, Zap, Github } from 'lucide-react';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {path === '/docs' ? (
        <Docs />
      ) : (
        <main>
          {/* Hero Section */}
          <header className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=3540"
                alt="AppStack Hero"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
            </div>
            
            <div className="relative container mx-auto px-4 text-center">
              <div className="flex items-center justify-center mb-6">
                <Layers className="w-16 h-16 text-blue-500" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AppStack
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The next generation development environment for macOS and Linux
              </p>
              <div className="flex items-center justify-center space-x-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
                  Download for macOS
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
                  Download for Linux
                </button>
              </div>
            </div>
          </header>

          {/* Features Grid */}
          <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Terminal className="w-8 h-8 text-blue-500" />}
                  title="Multi-Language Support"
                  description="Write and run code in Python, Go, C++, Rust, and more with native performance."
                />
                <FeatureCard
                  icon={<Cpu className="w-8 h-8 text-purple-500" />}
                  title="Native Performance"
                  description="Built for Apple Silicon and modern Linux systems with optimized compilation."
                />
                <FeatureCard
                  icon={<Code2 className="w-8 h-8 text-green-500" />}
                  title="Smart Code Editor"
                  description="Intelligent code completion, real-time diagnostics, and powerful refactoring tools."
                />
              </div>
            </div>
          </section>

          {/* Preview Section */}
          <section className="py-24 bg-gradient-to-b from-black to-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Designed for Modern Development
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=3540"
                  alt="AppStack Interface"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-24 bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">
                Powerful Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <TechCard
                  icon={<Workflow className="w-6 h-6" />}
                  title="Python"
                  description="Advanced Python development environment with virtual env support"
                />
                <TechCard
                  icon={<Zap className="w-6 h-6" />}
                  title="Rust"
                  description="Native Rust development with cargo integration"
                />
                <TechCard
                  icon={<Terminal className="w-6 h-6" />}
                  title="C/C++"
                  description="Full C/C++ support with CMake and debugging tools"
                />
                <TechCard
                  icon={<Code2 className="w-6 h-6" />}
                  title="Go"
                  description="Complete Go development environment with go modules"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8">
                Ready to Transform Your Development Workflow?
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 w-full md:w-auto">
                  Download Now
                </button>
                <a
                  href="https://github.com/xevilA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 w-full md:w-auto"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 bg-black border-t border-gray-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <Layers className="w-8 h-8 text-blue-500" />
                  <span className="text-xl font-bold">AppStack</span>
                </div>
                <div className="flex space-x-6 text-gray-400">
                  <a href="/docs" className="hover:text-white transition-colors">Documentation</a>
                  <a href="#" className="hover:text-white transition-colors">Blog</a>
                  <a 
                    href="https://github.com/xevilA"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-500">
                <p>© 2024 AppStack. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TechCard({ icon, title, description }) {
  return (
    <div className="bg-black/50 backdrop-blur-lg rounded-xl p-6 hover:bg-black/70 transition-all">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default App;