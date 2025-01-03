import React from 'react'
import { Github, Twitter, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/50 to-background" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Ready to Improve Your AI App?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Join our community of AI founders and get actionable feedback to make your product even better.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-background hover:bg-primary/90 transition-colors duration-200 group"
            >
              <Rocket className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-y-1" />
              List Your App
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
                KudosCircle
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                A collaborative feedback marketplace connecting AI founders with contributors to exchange actionable insights and improve their products.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect With Us</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="https://twitter.com/kudoscircle" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-900/50 flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
                </a>
                <a 
                  href="https://github.com/kudoscircle" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-900/50 flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} KudosCircle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 