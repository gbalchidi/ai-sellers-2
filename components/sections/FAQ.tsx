'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useInView } from 'react-intersection-observer'

const FAQ = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const faqs = [
    {
      question: 'Как быстро я увижу результаты?',
      answer: 'Первые результаты видны уже через 3-5 дней после подключения. AI начинает анализировать данные сразу после интеграции. Полная оптимизация занимает 2-3 недели, за это время система собирает достаточно данных для точных рекомендаций.'
    },
    {
      question: 'Нужны ли технические знания для работы?',
      answer: 'Нет, интерфейс интуитивно понятен и не требует специальных навыков. Мы предоставляем полное обучение и поддержку на всех этапах. Подключение занимает 15 минут, а все сложные расчеты делает AI автоматически.'
    },
    {
      question: 'Работает ли с моим маркетплейсом?',
      answer: 'Поддерживаем Wildberries, Ozon, Яндекс.Маркет и еще 7 площадок. Интеграция происходит через официальные API маркетплейсов. Другие площадки добавляем по запросу клиентов в течение 2-3 недель.'
    },
    {
      question: 'Что если у меня нестандартная бизнес-модель?',
      answer: 'Тариф Enterprise включает полную кастомизацию под ваши процессы. Наша команда настроит алгоритмы под вашу специфику: дропшиппинг, производство, работа с поставщиками. Также доступны индивидуальные интеграции с вашими системами учета.'
    },
    {
      question: 'Есть ли API для интеграций?',
      answer: 'Да, полноценный REST API доступен начиная с тарифа Professional. Вы можете интегрировать нашу платформу с 1С, CRM, BI-системами. Предоставляем подробную документацию и примеры кода.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Оплата происходит ежемесячно или ежегодно (со скидкой 10%). Принимаем карты, безналичный расчет для юрлиц. Первые 14 дней — бесплатный тестовый период с полным функционалом.'
    },
    {
      question: 'Безопасны ли мои данные?',
      answer: 'Все данные шифруются и хранятся на защищенных серверах в России. Мы соблюдаем 152-ФЗ о персональных данных. Доступ к вашим данным есть только у вас, мы их не передаем третьим лицам.'
    },
    {
      question: 'Можно ли отменить подписку?',
      answer: 'Да, вы можете отменить подписку в любой момент без штрафов. Данные сохраняются 30 дней после отмены, вы можете их экспортировать. При возврате в течение 3 месяцев все настройки восстанавливаются.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о платформе
            </p>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Additional help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Не нашли ответ на свой вопрос?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo-form"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Задайте вопрос менеджеру →
              </a>
              <a
                href="mailto:support@ai-agent.ru"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Напишите на support@ai-agent.ru
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ