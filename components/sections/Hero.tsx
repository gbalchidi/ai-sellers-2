'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react'
import { SignupForm } from '@/components/SignupForm'

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Опишите свою стратегию текстом —{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  ИИ воплотит её в жизнь
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8">
                AI-агент для селлеров Wildberries, который автоматизирует любые кастомные стратегии управления рекламой.
                Вам доступно не просто 5-7 шаблонов, а реализация самых изощренных стратегий без сложных формул и кода.
              </p>

              {/* Social Proof (Trust Badges) */}
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Экономия 20-40% рекламного бюджета</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>В 4-8 раз дешевле конкурентов</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Интеграция с WB API за 2 минуты</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mb-4">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  onClick={() => {
                    // Track CTA click
                    if (typeof window !== 'undefined' && (window as any).ym) {
                      (window as any).ym(105281033, 'reachGoal', 'hero_cta_click')
                    }
                    setIsFormOpen(true);
                  }}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Попробовать бесплатно 14 дней
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Micro-copy */}
              <p className="text-sm text-slate-500">
                Без карты. Настройка за 5 минут.
              </p>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6">
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4">
                  <div className="space-y-4">
                    {/* User message */}
                    <div className="bg-blue-100 rounded-lg p-3">
                      <p className="text-xs sm:text-sm text-slate-700 font-medium mb-1">Вы:</p>
                      <p className="text-xs sm:text-sm text-slate-900">
                        "Повышай ставки на товары с маржой &gt;15%, снижай на товары с ДРР &gt;30%"
                      </p>
                    </div>

                    {/* AI response */}
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs sm:text-sm text-slate-700 font-medium mb-2">AI-агент:</p>
                      <p className="text-xs sm:text-sm text-slate-900 mb-2">"Понял! Создаю правила:</p>
                      <div className="space-y-1 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">Условие 1: маржа &gt; 15% → ставка +20%</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">Условие 2: ДРР &gt; 30% → ставка -15%</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-900 mt-2">Хотите увидеть предстоящие изменения?"</p>
                    </div>
                  </div>
                </div>

                {/* Floating annotation */}
                <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg shadow-lg border-2 border-blue-500 max-w-[200px] sm:max-w-none">
                  <p className="text-xs sm:text-sm font-semibold text-blue-600">
                    ✨ Безграничная гибкость!
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-600">
                    Любая стратегия просто через описание в чате
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SignupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}

export default Hero