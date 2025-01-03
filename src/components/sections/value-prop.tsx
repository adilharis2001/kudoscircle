import React from 'react'
import { MessageSquare, Target, Users, ArrowDown, ArrowRight } from 'lucide-react'

export function ValuePropSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 lg:mb-8">
            Introducing{" "}
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
              KudosCircle
            </span>
          </h2>
          
          <p className="text-xl leading-relaxed text-gray-400">
            A{" "}
            <span className="text-white font-medium">
              credit-based feedback community
            </span>{" "}
            where AI founders and contributors help each other succeed.
          </p>
        </div>

        {/* Value Props with Enhanced Visual Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-ping" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Provide Feedback Card */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-sm" />
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Provide Feedback</h3>
                  <p className="text-gray-400">
                    Help fellow founders improve their products by offering targeted, actionable insights tailored to their needs.
                  </p>
                </div>
              </div>
              {/* Flow Arrow - Mobile */}
              <div className="lg:hidden h-8 flex items-center justify-center mt-2">
                <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
              </div>
            </div>

            {/* Receive Feedback Card */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-sm" />
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Receive Feedback</h3>
                  <p className="text-gray-400">
                    Use the Kudos you've earned to get personalized feedback from contributors matched to your product's goals.
                  </p>
                </div>
              </div>
              {/* Flow Arrow - Mobile */}
              <div className="lg:hidden h-8 flex items-center justify-center mt-2">
                <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
              </div>
            </div>

            {/* Build Community Card */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-full group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-sm" />
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Build a Collaborative Community</h3>
                  <p className="text-gray-400">
                    Join a thriving ecosystem where AI founders and contributors exchange expertise to help each other succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Diagram - Updated for better mobile display */}
          <div className="mt-12 lg:mt-16">
            <div className="relative p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <span className="text-primary font-medium">Give feedback</span>
                <ArrowDown className="w-4 h-4 text-gray-400 block sm:hidden" />
                <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                <span className="text-primary font-medium">Earn credits</span>
                <ArrowDown className="w-4 h-4 text-gray-400 block sm:hidden" />
                <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                <span className="text-primary font-medium">Get feedback</span>
                <ArrowDown className="w-4 h-4 text-gray-400 block sm:hidden" />
                <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                <span className="text-white font-medium">Improve & grow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 