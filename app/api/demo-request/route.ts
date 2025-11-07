import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const demoRequestSchema = z.object({
  name: z.string().min(2),
  phone: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  skuCount: z.string(),
  monthlyRevenue: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = demoRequestSchema.parse(body)

    // Get UTM parameters from headers
    const referer = request.headers.get('referer') || ''
    const utmParams = new URLSearchParams(referer.split('?')[1] || '')

    const leadData = {
      ...validatedData,
      source: 'demo_request',
      utm_source: utmParams.get('utm_source') || 'direct',
      utm_medium: utmParams.get('utm_medium') || 'none',
      utm_campaign: utmParams.get('utm_campaign') || 'none',
      created_at: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
    }

    // В продакшене здесь будет отправка в CRM и Telegram
    console.log('New demo request received:', leadData)

    // Здесь можно добавить:
    // - Отправку в CRM (AmoCRM, Bitrix24, HubSpot)
    // - Уведомление в Telegram для менеджеров
    // - Email автоматизацию через SendPulse/Mailchimp
    // - Сохранение в базу данных

    return NextResponse.json({
      success: true,
      message: 'Demo request created successfully'
    })
  } catch (error) {
    console.error('Demo request error:', error)
    return NextResponse.json(
      { error: 'Failed to process demo request' },
      { status: 500 }
    )
  }
}