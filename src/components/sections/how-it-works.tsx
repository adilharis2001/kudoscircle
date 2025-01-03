import React from 'react'
import { Code2, MessageSquare, Rocket, Lock, Star, Coins, Users, Zap, Target } from 'lucide-react'

export function HowItWorksSection() {
  const personas = [
    {
      title: "Feedback Receivers",
      subtitle: "AI Founders",
      icon: Rocket,
      gradient: "from-[#FF6B6B]/10 via-[#FF6B6B]/5 to-transparent",
      iconColor: "#FF6B6B",
      steps: [
        {
          icon: Code2,
          title: "List Your App",
          description: "Share your product and specify the feedback you need—UX, usability, or technical performance."
        },
        {
          icon: Coins,
          title: "Use Kudos to Request",
          description: "Spend Kudos to invite contributors with relevant expertise to provide insights."
        },
        {
          icon: Star,
          title: "Receive Quality Feedback",
          description: "Get AI-moderated, meaningful insights from matched contributors."
        }
      ]
    },
    {
      title: "Feedback Providers",
      subtitle: "Contributors",
      icon: Users,
      gradient: "from-[#4ECDC4]/10 via-[#4ECDC4]/5 to-transparent",
      iconColor: "#4ECDC4",
      steps: [
        {
          icon: Target,
          title: "Explore Apps",
          description: "Browse listed apps and choose ones where you can add value."
        },
        {
          icon: MessageSquare,
          title: "Provide Insights",
          description: "Share thoughtful feedback aligned with requested focus areas."
        },
        {
          icon: Coins,
          title: "Earn Kudos",
          description: "Receive Kudos for high-quality feedback, verified through AI moderation."
        }
      ]
    },
    {
      title: "Promoters",
      subtitle: "Coming Soon",
      icon: Zap,
      gradient: "from-primary/10 via-primary/5 to-transparent",
      iconColor: "#F9D72F",
      steps: [
        {
          icon: Lock,
          title: "List Your Product",
          description: "Advertise tools or services to a targeted audience of AI founders."
        },
        {
          icon: Lock,
          title: "Get Discovered",
          description: "Reach users actively engaged in building and improving their apps."
        },
        {
          icon: Lock,
          title: "Coming Soon",
          description: "This feature will be available in the near future."
        }
      ],
      comingSoon: true
    }
  ]

  return (
    <section id="how-it-works" className="relative w-full py-16 sm:py-20 lg:py-32 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-background to-background" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            How KudosCircle Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Collaborate, exchange insights, and improve your AI products with ease.
          </p>
        </div>

        {/* Personas grid - modified for better mobile scrolling */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className={`relative group ${persona.comingSoon ? 'opacity-75' : ''}`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              {/* Persona Card with improved hover effects */}
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-70`} />
                
                <div className="relative p-6 lg:p-8 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm h-full transition-all duration-300 group-hover:border-gray-700/50">
                  {/* Persona Header with enhanced styling */}
                  <div className="flex items-center gap-4 mb-6 lg:mb-8">
                    <div className="w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-1">
                      <persona.icon 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: persona.iconColor }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {persona.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {persona.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Steps with improved spacing and animations */}
                  <div className="space-y-4 lg:space-y-6">
                    {persona.steps.map((step, stepIndex) => (
                      <div 
                        key={stepIndex}
                        className="flex items-start gap-3 lg:gap-4 group/step"
                      >
                        <div className="w-8 h-8 rounded bg-gray-900/50 flex items-center justify-center flex-shrink-0 mt-1 transform transition-transform duration-300 group-hover/step:-translate-y-0.5">
                          <step.icon 
                            className="w-4 h-4 transition-colors duration-300"
                            style={{ color: persona.iconColor }}
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white mb-1">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Coming Soon Badge */}
                  {persona.comingSoon && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 