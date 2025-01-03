import React from 'react'
import { Target, Zap, Clock } from 'lucide-react'

export function ProblemSection() {
  const challenges = [
    {
      icon: Target,
      title: "Finding the Right Audience",
      description: "Getting feedback from users who understand your product's context",
      gradient: "from-[#FF6B6B]/10 via-[#FF6B6B]/5 to-transparent",
      iconColor: "#FF6B6B",
    },
    {
      icon: Zap,
      title: "Quality Insights",
      description: "Receiving actionable feedback instead of vague opinions",
      gradient: "from-[#4ECDC4]/10 via-[#4ECDC4]/5 to-transparent",
      iconColor: "#4ECDC4",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Balancing development with gathering and processing feedback",
      gradient: "from-primary/10 via-primary/5 to-transparent",
      iconColor: "#F9D72F",
    },
  ]

  return (
    <section id="problem" className="relative w-full py-16 sm:py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-background to-background" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            The Challenge AI Founders Face
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Building{" "}
            <span className="text-white font-medium">
              apps, landing pages, and AI agents
            </span>{" "}
            is easier than ever, but getting{" "}
            <span className="text-primary font-medium">
              high-quality, actionable feedback
            </span>{" "}
            from the right audience is not.
          </p>
        </div>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-70`} />
              
              <div className="relative p-6 sm:p-8 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm h-full">
                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center transform transition-transform group-hover:-translate-y-1">
                    <challenge.icon 
                      className="w-6 h-6 transition-colors duration-300"
                      style={{ color: challenge.iconColor }}
                    />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                  {challenge.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 