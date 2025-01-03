import React from 'react'
import { Target, Coins, Shield, Users, Mic, Scale } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Targeted Insights",
      description: "Get actionable feedback tailored to your app's specific needs—UX, usability, technical performance, or content quality.",
      gradient: "from-[#FF6B6B]/10 via-[#FF6B6B]/5 to-transparent",
      iconColor: "#FF6B6B",
      delay: "0"
    },
    {
      icon: Coins,
      title: "Collaborative Kudos System",
      description: "Earn and spend Kudos credits in a self-sustaining ecosystem that rewards meaningful contributions and facilitates valuable exchanges.",
      gradient: "from-[#4ECDC4]/10 via-[#4ECDC4]/5 to-transparent",
      iconColor: "#4ECDC4",
      delay: "100"
    },
    {
      icon: Shield,
      title: "AI-Powered Moderation",
      description: "Our advanced AI ensures all feedback is spam-free, relevant, and actionable, maintaining quality and trust within the community.",
      gradient: "from-[#A78BFA]/10 via-[#A78BFA]/5 to-transparent",
      iconColor: "#A78BFA",
      delay: "200"
    },
    {
      icon: Users,
      title: "Expertise Matching",
      description: "Get matched with contributors who understand your domain, ensuring every piece of feedback is relevant and impactful.",
      gradient: "from-[#F472B6]/10 via-[#F472B6]/5 to-transparent",
      iconColor: "#F472B6",
      delay: "300"
    },
    {
      icon: Mic,
      title: "Voice-Based Feedback",
      description: "Share insights quickly through AI-powered voice recording and transcription—meaningful feedback in under 90 seconds.",
      gradient: "from-[#34D399]/10 via-[#34D399]/5 to-transparent",
      iconColor: "#34D399",
      delay: "400"
    },
    {
      icon: Scale,
      title: "Balanced Ecosystem",
      description: "A sustainable community where new users contribute first, ensuring continuous high-quality participation and balanced exchanges.",
      gradient: "from-primary/10 via-primary/5 to-transparent",
      iconColor: "#F9D72F",
      delay: "500"
    }
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-background to-background" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        {/* Animated background shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            What Makes KudosCircle Unique
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            A powerful platform designed to make feedback meaningful, actionable, and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ 
                animationDelay: `${feature.delay}ms`,
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              {/* Feature card */}
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-70`} />
                
                <div className="relative p-6 lg:p-8 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm h-full">
                  {/* Icon container */}
                  <div className="mb-6 relative">
                    <div className="w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center transform transition-transform duration-300 group-hover:-translate-y-1">
                      <feature.icon 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: feature.iconColor }}
                      />
                    </div>
                    <div 
                      className="absolute -inset-2 rounded-lg blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-20"
                      style={{ backgroundColor: feature.iconColor }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 