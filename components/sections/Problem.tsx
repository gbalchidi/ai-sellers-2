'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingDown, Bot, Clock, ArrowDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Problem = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const problems = [
    {
      icon: TrendingDown,
      title: 'Видите только ДРР, но не маржинальность',
      description: 'Фраза с ДРР 15% кажется прибыльной. Но после учета себестоимости, логистики и комиссий маркетплейса (которые выросли до 50%!) вы работаете в минус.',
      result: 'Результат: тратите деньги на убыточные фразы.',
      visual: (
        <div className="mt-4 p-3 bg-slate-100 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-600">До анализа:</span>
            <span className="text-green-600 font-semibold">ДРР 15% ✅</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">После анализа:</span>
            <span className="text-red-600 font-semibold">Маржа: -5% ❌</span>
          </div>
        </div>
      )
    },
    {
      icon: Bot,
      title: 'Существующие биддеры — это 5-7 шаблонов',
      description: 'MPStats, Moneyplace, MarketGuru предлагают только предустановленные стратегии: "перебить +1₽", "удержание позиции", "контроль ДРР".',
      result: 'Невозможно реализовать сложную логику: "Если маржа НЕ растет 3 дня И ДРР скачет >20%, переходи на НЧ ключи".',
      visual: (
        <div className="mt-4 p-3 bg-slate-100 rounded-lg text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="text-center">
              <div className="font-semibold text-red-600 mb-1">Жесткие шаблоны</div>
              <div className="text-slate-600 space-y-1">
                <div>⚙️ Шаблон 1</div>
                <div>⚙️ Шаблон 2</div>
                <div>⚙️ Шаблон 3</div>
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-green-600 mb-1">Ваша стратегия</div>
              <div className="text-slate-600">
                <div>✨ Любая логика</div>
                <div>✨ Любые условия</div>
                <div>✨ Полная гибкость</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Clock,
      title: 'Не успеваете управлять 50+ кампаниями',
      description: 'Только 37% селлеров ежедневно работают с рекламой. Остальные не успевают: проверка продаж, ответы на отзывы, корректировка цен, управление поставками.',
      result: 'Результат: упущенная прибыль из-за неактуальных ставок.',
      visual: (
        <div className="mt-4 p-3 bg-slate-100 rounded-lg text-xs">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-600">Проверка продаж</span>
              <span className="text-slate-700">2ч</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Работа с рекламой</span>
              <span className="text-red-600 font-semibold">10ч+ ⏰</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Ответы на отзывы</span>
              <span className="text-slate-700">3ч</span>
            </div>
          </div>
        </div>
      )
    }
  ]

  const scrollToSolution = () => {
    const element = document.querySelector('[data-section="solution"]')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Почему селлеры теряют{" "}
            <span className="text-red-600">20-40%</span>{" "}
            рекламного бюджета?
          </h2>

          {/* Problems grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow bg-white">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-3">
                    {problem.description}
                  </p>
                  <p className="text-sm font-medium text-red-600 mb-4">
                    {problem.result}
                  </p>
                  {problem.visual}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg sm:text-xl text-slate-700 mb-6">
              Знакомо? Наш AI-агент решает эти проблемы ↓
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToSolution}
              className="group"
            >
              Узнать как
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem