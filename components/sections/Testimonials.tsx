'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      name: 'Михаил',
      role: 'Владелец бренда одежды',
      metrics: '320 SKU, оборот 8 млн/мес',
      content: 'Раньше у нас было 3 человека на аналитике. Теперь справляется один, и результаты лучше. Экономим 200к в месяц на зарплатах и получаем более точные данные.',
      initials: 'МК',
      color: 'bg-blue-500'
    },
    {
      name: 'Елена',
      role: 'Категорийный менеджер',
      metrics: '180 SKU',
      content: 'За первый месяц снизили ДРР с 35% до 22%. Это +50% к чистой прибыли. Окупаемость платформы — 3 дня. Теперь точно знаем, какие фразы работают.',
      initials: 'ЕС',
      color: 'bg-purple-500'
    },
    {
      name: 'Сергей',
      role: 'Индивидуальный предприниматель',
      metrics: '45 SKU',
      content: 'Наконец-то вижу реальную картину по каждой фразе. Отключил 30% убыточных — сразу вышел в плюс. Платформа простая, разобрался за час.',
      initials: 'СА',
      color: 'bg-emerald-500'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Истории успеха наших клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Реальные результаты от реальных селлеров
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="w-10 h-10 text-gray-200 mb-4" />
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className={`${testimonial.color} text-white`}>
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.metrics}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: '2,500+', label: 'Активных селлеров' },
              { number: '15-25%', label: 'Средний рост маржи' },
              { number: '3 дня', label: 'Окупаемость' },
              { number: '4.8/5', label: 'Оценка клиентов' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials