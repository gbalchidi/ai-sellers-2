'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'STARTER',
      price: {
        monthly: 990,
        yearly: 890
      },
      description: 'Для небольших магазинов',
      features: [
        'До 50 SKU',
        '1 маркетплейс',
        'Базовая аналитика маржи',
        'Ручная оптимизация',
        'Email поддержка'
      ],
      recommended: false,
      color: 'border-gray-200'
    },
    {
      name: 'PROFESSIONAL',
      price: {
        monthly: 2990,
        yearly: 2690
      },
      description: 'Для растущего бизнеса',
      features: [
        'До 500 SKU',
        '3 маркетплейса',
        'Полная аналитика маржи',
        'AI-оптимизация',
        'API доступ',
        'Приоритетная поддержка'
      ],
      recommended: true,
      color: 'border-indigo-500'
    },
    {
      name: 'ENTERPRISE',
      price: {
        monthly: 9990,
        yearly: 8990
      },
      description: 'Для крупных селлеров',
      features: [
        'Без ограничений SKU',
        'Все маркетплейсы',
        'Персональный менеджер',
        'Кастомные интеграции',
        'SLA 99.9%',
        'White-label опция'
      ],
      recommended: false,
      color: 'border-gray-200',
      customPrice: true
    }
  ]

  const handleSelectPlan = (planName: string) => {
    const element = document.getElementById('demo-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} id="pricing" className="py-20 bg-gray-50">
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
              Прозрачные тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Платите только за то, что используете
            </h2>
            <p className="text-xl text-gray-600">
              Начните с малого и масштабируйтесь вместе с бизнесом
            </p>
          </div>

          {/* Billing period toggle */}
          <div className="flex justify-center mb-8">
            <Tabs
              value={billingPeriod}
              onValueChange={(value) => setBillingPeriod(value as 'monthly' | 'yearly')}
              className="w-auto"
            >
              <TabsList className="grid grid-cols-2 w-64">
                <TabsTrigger value="monthly">Месяц</TabsTrigger>
                <TabsTrigger value="yearly">
                  Год
                  <Badge variant="default" className="ml-2 bg-green-500">
                    -10%
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Рекомендуем
                    </Badge>
                  </div>
                )}
                <Card className={`h-full hover:shadow-xl transition-shadow ${plan.color} ${
                  plan.recommended ? 'border-2 shadow-lg' : ''
                }`}>
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      {plan.customPrice ? (
                        <span className="text-3xl font-bold">от </span>
                      ) : null}
                      <span className="text-4xl font-bold">
                        {plan.price[billingPeriod].toLocaleString('ru-RU')}₽
                      </span>
                      <span className="text-gray-600 ml-2">/мес</span>
                    </div>
                    {billingPeriod === 'yearly' && (
                      <p className="text-sm text-green-600 mt-2">
                        Экономия {((plan.price.monthly - plan.price.yearly) * 12).toLocaleString('ru-RU')}₽/год
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.recommended
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                          : ''
                      }`}
                      variant={plan.recommended ? 'default' : 'outline'}
                      onClick={() => handleSelectPlan(plan.name)}
                    >
                      Выбрать тариф
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Все тарифы включают 14 дней бесплатного тестирования
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Без скрытых платежей
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Отмена в любой момент
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Поддержка 24/7
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing