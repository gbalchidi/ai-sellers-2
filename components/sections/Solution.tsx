'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { CheckCircle, MessageSquare, BarChart3, Shield, Check, X } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Solution = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} data-section="solution" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              AI-агент, который понимает вашу стратегию
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                и автоматически её исполняет
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Не нужно выбирать из 5-7 шаблонов. Просто опишите свою логику на русском языке — ИИ интерпретирует и применит.
            </p>
          </div>

          {/* Feature 1: Безграничная гибкость стратегий */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full mb-4">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Безграничная гибкость</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Любая сложность стратегии
                </h3>
                <p className="text-slate-600 mb-6">
                  Комбинируйте условия, временные рамки и тренды для создания уникальной стратегии, которая подходит именно вашему бизнесу.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Любая сложность стратегии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Комбинирование условий (И, ИЛИ, ЕСЛИ-ТОГДА)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Временные условия (за 3 дня, за неделю)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Тренды (растет, падает, скачет)</span>
                  </li>
                </ul>
              </div>
              <Card className="p-4 sm:p-6 bg-slate-50">
                <div className="space-y-4">
                  <div className="bg-blue-100 rounded-lg p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-2">👤 Вы:</p>
                    <p className="text-xs sm:text-sm text-slate-800">
                      "Повышай ставки на товары с маржой &gt;15% в течение 3 дней. Если маржа не растет, а ДРР прыгает на 20%+ за сутки, переходи только на низкочастотные ключи."
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-semibold text-green-900 mb-2">🤖 AI-агент:</p>
                    <p className="text-xs sm:text-sm text-slate-800 mb-3">"Понял! Создаю 2-этапную стратегию:</p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-3">
                      <div className="bg-white rounded p-2">
                        <strong>Этап 1 (дни 1-3):</strong>
                        <div className="ml-2 mt-1">→ Товары с маржой &gt;15%<br/>→ Повышать ставки на 20%</div>
                      </div>
                      <div className="bg-white rounded p-2">
                        <strong>Этап 2 (после дня 3):</strong>
                        <div className="ml-2 mt-1">→ Если маржа НЕ растет за последние 3 дня<br/>→ И ДРР увеличивается &gt;20% за сутки<br/>→ Переключить на продвижение только по НЧ ключам</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800">Сохранить эту стратегию?"</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Feature 2: Расчет реальной маржинальности */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="p-4 sm:p-6 bg-slate-50">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-300">
                          <th className="text-left py-2 px-2">Фраза</th>
                          <th className="text-center py-2 px-2">ДРР</th>
                          <th className="text-center py-2 px-2">Маржа</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-2">кружка термос</td>
                          <td className="text-center">18%</td>
                          <td className="text-center text-green-600 font-semibold">+23% ✅</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="py-3 px-2">термокружка</td>
                          <td className="text-center">12%</td>
                          <td className="text-center text-red-600 font-semibold">-5% ❌</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">travel mug</td>
                          <td className="text-center">25%</td>
                          <td className="text-center text-amber-600 font-semibold">+8% ⚠️</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 rounded-lg text-xs sm:text-sm">
                    <p className="text-amber-900">
                      <strong>Инсайт:</strong> Фраза "термокружка" с ДРР 12% кажется прибыльной, но после учета себестоимости (250₽), логистики (40₽) и комиссии WB (50%), реальная маржа отрицательная!
                    </p>
                  </div>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full mb-4">
                  <BarChart3 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">Реальная маржинальность</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Видите реальную прибыль
                </h3>
                <p className="text-slate-600 mb-6">
                  AI-агент рассчитывает полную юнит-экономику с учетом всех расходов и автоматически отключает убыточные фразы.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Полный расчет юнит-экономики</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Учет себестоимости, логистики, комиссий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Маржа по каждой фразе/товару</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Автоотключение убыточных фраз</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Human-in-the-Loop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full mb-4">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">Полный контроль</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Вы всегда в курсе
                </h3>
                <p className="text-slate-600 mb-6">
                  AI показывает ЧТО изменит до применения. Вы можете одобрить, отменить или скорректировать любое действие.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Полный контроль: AI показывает ЧТО изменит</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Прогноз результатов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Можно откатить любое изменение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">История всех действий</span>
                  </li>
                </ul>
              </div>
              <Card className="p-4 sm:p-6 bg-slate-50">
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-3 sm:p-4">
                    <p className="font-semibold text-blue-900 text-sm sm:text-base mb-2">
                      📋 Стратегия "Повышение маржинальных товаров" готова применить изменения
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <p><strong>Будет изменено 18 ставок:</strong></p>
                      <p>↗ Повысить ставку (12 товаров): +15-25₽</p>
                      <p>↘ Снизить ставку (6 товаров): -10-20₽</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-3 sm:p-4">
                    <p className="font-semibold text-green-900 text-sm mb-2">Прогноз:</p>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <li>• Маржинальность: +8% (с 12% до 20%)</li>
                      <li>• ДРР: стабильно (~18%)</li>
                      <li>• Бюджет: +3,500₽/день</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Почему мы лучше других биддеров
            </h3>
            <Card className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4">Параметр</th>
                    <th className="text-center py-4 px-4">Другие биддеры</th>
                    <th className="text-center py-4 px-4 bg-blue-50">Наш AI-агент</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium">Кастомные стратегии</td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-600" />
                        <span>5-7 шаблонов</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Безграничная гибкость</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium">Расчет маржи</td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-600" />
                        <span>Только ДРР</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Полная юнит-экономика</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium">Условия</td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-red-600" />
                        <span>Простые (&gt;/&lt;)</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Любые (И, ИЛИ, тренды)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 font-medium">Контроль</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-amber-600">⚠️ Автоприменение</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-semibold">Показываем изменения</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Цена</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-red-600 font-semibold">💸 40,000₽/мес</span>
                    </td>
                    <td className="text-center py-4 px-4 bg-blue-50">
                      <span className="text-green-600 font-semibold">💰 От 1,000₽/мес</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution