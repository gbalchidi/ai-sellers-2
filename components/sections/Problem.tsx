'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { XCircle, AlertTriangle } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Problem = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const problems = [
    {
      title: '50+ рекламных кампаний',
      description: 'а какие из них прибыльные — загадка'
    },
    {
      title: 'ДРР показывает 25%',
      description: 'но по факту работаете в минус'
    },
    {
      title: 'Аналитик тратит 40% времени',
      description: 'на сбор данных вместо оптимизации'
    },
    {
      title: 'Конкуренты с меньшим бюджетом',
      description: 'обгоняют вас в выдаче'
    },
    {
      title: 'Excel с расчетами обновляется раз в неделю',
      description: 'решения принимаете вслепую'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Знакомая ситуация?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Большинство селлеров теряют 20-40% прибыли из-за этих проблем
          </p>

          {/* Problems list */}
          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-5 border-l-4 border-red-500 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <strong className="text-lg text-gray-900">{problem.title},</strong>
                      <span className="text-gray-600 ml-2">
                        {problem.description}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Cost of problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Alert className="border-2 border-amber-500 bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <AlertDescription className="text-lg text-gray-900">
                <strong>Цена ошибки:</strong> При обороте 5 млн руб/мес потеря даже 5% маржи =
                <span className="text-red-600 font-bold"> минус 3 миллиона в год</span>.
                Можете себе это позволить?
              </AlertDescription>
            </Alert>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem