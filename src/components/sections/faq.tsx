'use client'

import React, { useState } from 'react'
import { ChevronDown, Info, Users, Zap, Shield, Scale, Laptop, User, MessageSquare, Coins } from 'lucide-react'

export function FaqSection() {
  const [openCategory, setOpenCategory] = useState<string | null>('general')
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: Info,
      iconColor: '#FF6B6B',
      questions: [
        {
          id: 'what-is',
          question: 'What is KudosCircle?',
          answer: 'KudosCircle is a feedback marketplace that connects AI founders with contributors to exchange actionable insights and improve their products. Founders request feedback using Kudos, while contributors earn Kudos by providing thoughtful, relevant feedback.'
        },
        {
          id: 'who-can-use',
          question: 'Who can use KudosCircle?',
          answer: 'KudosCircle is designed for AI founders (Feedback Receivers) looking to refine their products, contributors (Feedback Providers) who want to share their expertise, and, in the future, promoters who want to advertise tools and services to SaaS founders.'
        }
      ]
    },
    {
      id: 'feedback',
      title: 'Feedback Process',
      icon: MessageSquare,
      iconColor: '#4ECDC4',
      questions: [
        {
          id: 'feedback-quality',
          question: 'How does the platform ensure feedback quality?',
          answer: 'We use AI-driven moderation to analyze feedback for quality, relevance, and actionability. Our system filters out spam and ensures contributors provide specific, constructive insights aligned with your needs.'
        },
        {
          id: 'not-satisfied',
          question: 'What if I\'m not satisfied with the feedback received?',
          answer: 'We guarantee a minimum number of quality feedback responses for each request. If you\'re not satisfied, we\'ll prioritize your request and ensure you get additional insights from different contributors.'
        },
        {
          id: 'matching',
          question: 'How does the matching algorithm work?',
          answer: 'Our matching algorithm considers multiple factors including expertise areas, past feedback quality, and specific project requirements to connect you with the most relevant contributors.'
        }
      ]
    },
    {
      id: 'features',
      title: 'Platform Features',
      icon: Zap,
      iconColor: '#A78BFA',
      questions: [
        {
          id: 'feedback-types',
          question: 'What types of feedback can I request?',
          answer: 'You can request feedback on:\n• UX/UI design\n• Usability testing\n• Technical performance\n• Content quality\n• Market positioning\n• Product strategy\n\nSimply specify your needs when listing your app.'
        },
        {
          id: 'voice-feedback',
          question: 'How does voice-based feedback work?',
          answer: 'Contributors can record voice feedback up to 90 seconds long. Our AI transcribes and analyzes the feedback for key insights, making it easy for receivers to review and implement suggestions.'
        }
      ]
    },
    {
      id: 'kudos',
      title: 'Kudos System',
      icon: Coins,
      iconColor: '#F9D72F',
      questions: [
        {
          id: 'earn-spend',
          question: 'How do I earn and spend Kudos?',
          answer: 'Earn Kudos by providing quality feedback to others. Spend your earned Kudos to request feedback for your own projects. The better the feedback quality, the more Kudos you earn.'
        },
        {
          id: 'kudos-value',
          question: 'How are Kudos valued?',
          answer: 'Kudos value is determined by the quality and depth of feedback provided. AI moderation and receiver ratings influence the amount of Kudos earned for each contribution.'
        }
      ]
    },
    {
      id: 'ecosystem',
      title: 'Community & Ecosystem',
      icon: Users,
      iconColor: '#34D399',
      questions: [
        {
          id: 'balanced-system',
          question: 'How do you maintain ecosystem balance?',
          answer: 'New users must contribute feedback before posting their own apps, ensuring a continuous flow of high-quality participation and maintaining balance between Feedback Providers and Receivers.'
        },
        {
          id: 'expertise-matching',
          question: 'How is expertise matching handled?',
          answer: 'Contributors are matched to Feedback Receivers based on their skill tags and the app\'s feedback requirements, ensuring insights are always relevant and impactful.'
        }
      ]
    }
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-background to-background" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about using KudosCircle
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              style={{ 
                animationDelay: '150ms',
                opacity: 0,
                animation: 'fadeIn 0.5s ease-out forwards'
              }}
            >
              {/* Category Header */}
              <button
                onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                className="w-full flex items-center gap-4 p-4 sm:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-900/50 flex items-center justify-center">
                  <category.icon 
                    className="w-5 h-5"
                    style={{ color: category.iconColor }}
                  />
                </div>
                <span className="text-lg sm:text-xl font-semibold">{category.title}</span>
                <ChevronDown
                  className={`ml-auto w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                    openCategory === category.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Questions */}
              {openCategory === category.id && (
                <div className="mt-4 space-y-3 pl-14">
                  {category.questions.map((item) => (
                    <div key={item.id} className="relative">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                        className="w-full text-left p-4 rounded-lg bg-gray-900/20 backdrop-blur-sm border border-gray-800/30 hover:border-gray-700/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-medium pr-8">{item.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-400 transform transition-transform duration-200 ${
                              openQuestion === item.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        {openQuestion === item.id && (
                          <div className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </div>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 