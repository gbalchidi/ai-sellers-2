'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link2, MessageSquare, PlayCircle, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { SignupForm } from '@/components/SignupForm'

const HowItWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [isFormOpen, setIsFormOpen] = useState(false)

  const steps = [
    {
      number: '1',
      icon: Link2,
      title: 'Подключение',
      description: 'Вводите API-ключ WB (2 минуты)',
      details: [
        'Копируете API-ключ из личного кабинета WB',
        'Вставляете в форму',
        'Готово! Мы получаем данные по вашим кампаниям'
      ]
    },
    {
      number: '2',
      icon: MessageSquare,
      title: 'Стратегия',
      description: 'Описываете стратегию текстом (3 минуты)',
      details: [
        'Открываете чат с AI-агентом',
        'Описываете свою логику на русском языке',
        'AI создает правила автоматически'
      ]
    },
    {
      number: '3',
      icon: PlayCircle,
      title: 'Автоматизация',
      description: 'AI работает 24/7 (автоматически)',
      details: [
        'Система мониторит метрики каждый час',
        'Применяет изменения согласно вашей стратегии',
        'Вы получаете уведомления о результатах'
      ]
    }
  ]

  return (
    <>
      <section ref={ref} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Как это работает?
            </h2>
            <p className="text-center text-slate-600 mb-12">
              От регистрации до автоматизации за <span className="font-semibold text-blue-600">5 минут</span>
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-400 to-purple-400"></div>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 z-10">
                      {step.number}
                    </div>

                    <Card className="p-6 pt-10 h-full hover:shadow-lg transition-shadow">
                      <div className="text-center mb-4">
                        <div className="inline-block mb-3">
                          <step.icon className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 text-center">{step.description}</p>

                      <div className="space-y-1">
                        {step.details.map((detail, i) => (
                          <p key={i} className="text-xs text-slate-500 leading-snug">
                            • {detail}
                          </p>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final Result */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-xl font-bold text-green-600 mb-2">
                  💰 Результат
                </p>
                <p className="text-slate-600">
                  Экономия 10+ часов в неделю • Снижение ДРР на 20-30% • Рост маржи на 15-25%
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                onClick={() => setIsFormOpen(true)}
              >
                Начать бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SignupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default HowItWorks
