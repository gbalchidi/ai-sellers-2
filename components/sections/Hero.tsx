'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3,
  TrendingUp,
  Zap,
  Target,
  ArrowRight
} from 'lucide-react'

const Hero = () => {
  const metrics = [
    {
      icon: BarChart3,
      number: '50,000+',
      text: 'фраз в реальном времени',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      number: '15-25%',
      text: 'рост маржинальности',
      color: 'text-emerald-600'
    },
    {
      icon: Zap,
      number: '100+',
      text: 'кампаний одновременно',
      color: 'text-amber-600'
    },
    {
      icon: Target,
      number: '50-70%',
      text: 'увеличение ROI рекламы',
      color: 'text-purple-600'
    }
  ]

  const scrollToDemo = () => {
    const element = document.getElementById('pricing')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
              🚀 AI-платформа для умных селлеров
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Управляйте маржинальностью
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
              500+ SKU из одного окна
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            AI-платформа для селлеров, которые считают деньги, а не надеются на удачу
          </p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
              >
                <div className={`inline-flex p-2 rounded-lg bg-gray-50 mb-2 ${metric.color}`}>
                  <metric.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{metric.number}</div>
                <div className="text-sm text-gray-600">{metric.text}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 mb-4 group bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
              onClick={scrollToDemo}
            >
              📈 Получить демо-доступ
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-gray-600">
              Покажем на ваших данных, сколько денег теряете прямо сейчас
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero