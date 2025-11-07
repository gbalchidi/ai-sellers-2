'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3,
  Brain,
  Lightbulb,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Solution = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: BarChart3,
      title: 'Сквозная аналитика',
      description: 'Показы → Клики (CTR) → Корзина (CR) → Заказ → Выкуп → МАРЖА',
      benefits: [
        'Полная воронка продаж',
        'Реальная юнит-экономика',
        'Учет всех расходов'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Brain,
      title: 'AI-оптимизация в реальном времени',
      description: 'Автоматическое управление рекламными кампаниями на основе маржинальности',
      benefits: [
        'Автопауза убыточных фраз',
        'Перераспределение бюджета',
        'Предсказание маржи новых фраз'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Lightbulb,
      title: 'Умная сегментация',
      description: 'Группировка фраз по эффективности и потенциалу',
      benefits: [
        'Топ-20% приносят 80% маржи',
        'Фразы для масштабирования',
        'Токсичные фразы для отключения'
      ],
      color: 'bg-emerald-500'
    },
    {
      icon: Zap,
      title: 'Массовые операции',
      description: 'Управление тысячами фраз одним кликом',
      benefits: [
        'Изменение ставок для 1000+ фраз',
        'Шаблоны стратегий',
        'Автоматические A/B тесты'
      ],
      color: 'bg-amber-500'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section heading */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Полный контроль над маржинальностью
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI-платформа, которая считает прибыль,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
                а не просто клики
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Видите полную картину: от показа рекламы до чистой прибыли с учетом всех расходов
            </p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${feature.color} text-white`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Workflow visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-indigo-50 to-emerald-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Как это работает
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    'Подключаете маркетплейс',
                    'AI анализирует данные',
                    'Получаете рекомендации',
                    'Растет маржинальность'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-indigo-600 shadow-md">
                          {index + 1}
                        </div>
                        <p className="mt-2 text-center font-medium text-gray-700">
                          {step}
                        </p>
                      </div>
                      {index < 3 && (
                        <ArrowRight className="w-6 h-6 text-gray-400 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution