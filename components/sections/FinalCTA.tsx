'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { SignupForm } from '@/components/SignupForm'

const FinalCTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isFormOpen, setIsFormOpen] = useState(false)

  const benefits = [
    'Настройка за 5 минут',
    '14 дней бесплатно',
    'Без привязки карты',
    'Отмена в любой момент'
  ]

  return (
    <>
      <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 sm:p-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-40 h-40 bg-white opacity-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-white opacity-10 rounded-full"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
                >
                  Готовы автоматизировать вашу рекламу?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl text-center text-blue-100 mb-8"
                >
                  Присоединяйтесь к сотням селлеров, которые уже экономят 20-40% бюджета
                </motion.p>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                >
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                    onClick={() => setIsFormOpen(true)}
                  >
                    Попробовать бесплатно 14 дней
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-sm text-blue-100 mt-4">
                    Более 500 селлеров уже используют AI-агент
                  </p>
                </motion.div>
              </div>
            </Card>

            {/* Additional trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <p className="text-slate-600 text-sm">
                🔒 Безопасное подключение через WB API • 📞 Поддержка 24/7 • ⚡ Мгновенная активация
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SignupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default FinalCTA
