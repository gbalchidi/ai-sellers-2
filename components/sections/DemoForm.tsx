'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { Loader2, Rocket, CheckCircle } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useInView } from 'react-intersection-observer'

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  phone: z.string().regex(/^[+]?[0-9]{10,15}$/, 'Введите корректный номер телефона'),
  email: z.string().email('Введите корректный email'),
  company: z.string().optional(),
  skuCount: z.string().min(1, 'Выберите количество SKU'),
  monthlyRevenue: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const DemoForm = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      company: '',
      skuCount: '',
      monthlyRevenue: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('Заявка отправлена!', {
          description: 'Менеджер свяжется с вами в течение 30 минут',
        })
        form.reset()
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      toast.error('Ошибка отправки', {
        description: 'Пожалуйста, попробуйте еще раз',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="demo-form" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-2">
              <Badge variant="secondary" className="mb-4 mx-auto">
                🚀 Специальное предложение
              </Badge>
              <CardTitle className="text-3xl mb-2">
                Получите демо-доступ на 14 дней
              </CardTitle>
              <p className="text-gray-600">
                Покажем на ваших данных, сколько денег теряете прямо сейчас
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ваше имя *</FormLabel>
                          <FormControl>
                            <Input placeholder="Иван Иванов" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Телефон *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+7 (999) 123-45-67"
                              type="tel"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ivan@company.ru"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Company Field */}
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Компания</FormLabel>
                          <FormControl>
                            <Input placeholder="ООО Рога и Копыта" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* SKU Count Field */}
                    <FormField
                      control={form.control}
                      name="skuCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Количество SKU *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Выберите диапазон" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-50">1-50 SKU</SelectItem>
                              <SelectItem value="51-200">51-200 SKU</SelectItem>
                              <SelectItem value="201-500">201-500 SKU</SelectItem>
                              <SelectItem value="500+">500+ SKU</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Monthly Revenue Field */}
                  <FormField
                    control={form.control}
                    name="monthlyRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Месячный оборот</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите диапазон (необязательно)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="<1m">До 1 млн руб</SelectItem>
                            <SelectItem value="1-5m">1-5 млн руб</SelectItem>
                            <SelectItem value="5-10m">5-10 млн руб</SelectItem>
                            <SelectItem value="10m+">Более 10 млн руб</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Benefits */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm font-medium text-green-900 mb-2">
                      Что вы получите:
                    </p>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Анализ текущей эффективности рекламы
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Расчет потенциальной экономии
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Персональную демонстрацию платформы
                      </li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        Получить демо-доступ
                      </>
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-center text-gray-500">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacy" className="underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoForm