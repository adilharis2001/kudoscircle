import React from 'react'
import { Target, Users, Clock } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    {
      icon: Target,
      title: "Tailored Feedback",
      description: "Get insights from the right audience who understands your product's context and goals.",
    },
    {
      icon: Users,
      title: "Collaborative Community",
      description: "Build connections and exchange valuable insights within a supportive ecosystem.",
    },
    {
      icon: Clock,
      title: "Time-Efficient",
      description: "Save time with AI-moderated feedback that filters out noise and highlights what matters.",
    },
  ]

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Choose KudosCircle?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our platform is designed to make feedback collection and contribution 
            efficient, meaningful, and rewarding for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
              
              <div className="relative p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">90%</div>
            <p className="text-gray-300">Feedback Satisfaction Rate</p>
          </div>
          
          <div className="p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">&lt; 2min</div>
            <p className="text-gray-300">Average Feedback Time</p>
          </div>
          
          <div className="p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-gray-300">AI-Powered Moderation</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-300 mb-8">
            Join our growing community of founders and contributors who are building better products together.
          </p>
          <div className="inline-flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse mr-2" />
            <span className="text-sm text-gray-400">Active Community Growth</span>
          </div>
        </div>
      </div>
    </section>
  )
} 