import nodemailer from 'nodemailer'

interface LeadData {
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
}

export async function sendLeadNotification(leadData: LeadData) {
  // Проверяем наличие необходимых переменных окружения
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Gmail credentials not configured')
    return
  }

  // Создаем транспорт для отправки писем
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  // Получатели из переменной окружения
  const recipients = process.env.NOTIFICATION_EMAILS || 'g.balchidi@redmadrobot.com,s.shmykova@redmadrobot.com'

  // Формируем HTML письма
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">🎉 Новая заявка с лендинга AI-агента для WB</h2>

      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Контактная информация:</h3>
        <p><strong>Имя:</strong> ${leadData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${leadData.email}">${leadData.email}</a></p>
        ${leadData.phone ? `<p><strong>Телефон:</strong> ${leadData.phone}</p>` : ''}
        ${leadData.company ? `<p><strong>Компания:</strong> ${leadData.company}</p>` : ''}
      </div>

      ${leadData.message ? `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Сообщение:</h3>
          <p>${leadData.message}</p>
        </div>
      ` : ''}

      <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; color: #64748b; font-size: 12px;">
        <p>Это автоматическое уведомление с лендинга AI-агента для Wildberries</p>
        <p>Дата получения: ${new Date().toLocaleString('ru-RU')}</p>
      </div>
    </div>
  `

  // Формируем текстовую версию письма
  const textContent = `
Новая заявка с лендинга AI-агента для WB

Контактная информация:
Имя: ${leadData.name}
Email: ${leadData.email}
${leadData.phone ? `Телефон: ${leadData.phone}` : ''}
${leadData.company ? `Компания: ${leadData.company}` : ''}

${leadData.message ? `
Сообщение:
${leadData.message}
` : ''}

Дата получения: ${new Date().toLocaleString('ru-RU')}
  `

  try {
    // Отправляем письмо
    await transporter.sendMail({
      from: `"AI-агент WB уведомления" <${process.env.GMAIL_USER}>`,
      to: recipients,
      subject: `Новая заявка: ai-agent-2`,
      text: textContent,
      html: htmlContent,
    })

    console.log('Email notification sent successfully')
  } catch (error) {
    console.error('Error sending email notification:', error)
    throw error
  }
}
