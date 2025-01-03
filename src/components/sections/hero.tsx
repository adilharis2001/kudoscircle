import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        
        {/* Animated shapes */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Highlight badge */}
          <div className="inline-flex items-center justify-center">
            <div className="relative inline-flex items-center rounded-full border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm px-6 py-2 text-sm text-gray-300">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span>Revolutionizing AI Product Feedback</span>
              <Star className="w-4 h-4 text-primary ml-2" />
            </div>
          </div>

          {/* Main heading with enhanced typography */}
          <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Get{" "}
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
              Actionable Feedback
            </span>
            {" "}for Your{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              AI Products
            </span>
          </h1>

          {/* Enhanced description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
            Join our community of AI founders and contributors. Exchange insights, earn rewards, and build better products together.
          </p>

          {/* CTA buttons with improved styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary text-background hover:bg-primary/90 transition-colors duration-200 group"
            >
              List Your App
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-gray-800 hover:bg-gray-800/50 text-white transition-colors duration-200"
            >
              Explore Apps
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 