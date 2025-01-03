import { User, Users, Briefcase } from 'lucide-react'

export function PersonasSection() {
  const personas = [
    {
      icon: User,
      title: "Feedback Receivers (AI Founders)",
      description: "Founders seeking actionable insights to refine their products and accelerate growth.",
      features: [
        "Get targeted feedback from relevant users",
        "Improve product-market fit",
        "Save time on user research",
      ],
    },
    {
      icon: Users,
      title: "Feedback Providers (Contributors)",
      description: "Contributors who help others while earning Kudos for their own projects.",
      features: [
        "Share valuable insights",
        "Earn Kudos for your contributions",
        "Build your reputation in the community",
      ],
    },
    {
      icon: Briefcase,
      title: "Promoters",
      description: "Coming Soon",
      features: [
        "Connect with SaaS founders",
        "Provide targeted recommendations",
        "Expand your network",
      ],
      comingSoon: true,
    },
  ]

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Who Is KudosCircle For?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our platform brings together different roles to create a thriving 
            feedback ecosystem that benefits everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className={`relative group ${persona.comingSoon ? 'opacity-75' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-lg" />
              
              <div className="relative p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <persona.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  {persona.title}
                  {persona.comingSoon && (
                    <span className="text-xs font-normal px-2 py-1 rounded-full bg-primary/20 text-primary">
                      Coming Soon
                    </span>
                  )}
                </h3>
                
                <p className="text-gray-300 mb-6">{persona.description}</p>

                <ul className="space-y-3">
                  {persona.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Community stats */}
        <div className="mt-20 p-8 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-gray-300">Active Founders</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <p className="text-gray-300">Contributors</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15000+</div>
              <p className="text-gray-300">Feedback Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 