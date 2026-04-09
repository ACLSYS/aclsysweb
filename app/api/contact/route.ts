import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { nombre, empresa, email, telefono, servicio, mensaje } = await req.json()

    await resend.emails.send({
      from: 'ACLSYS Web <onboarding@resend.dev>',
      to: 'it.aclsolutions@gmail.com',
      subject: `Nuevo contacto desde aclsys.net — ${servicio || 'Sin servicio seleccionado'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0E2E47; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nuevo mensaje desde aclsys.net</h2>
          </div>
          <div style="background: #f8f9fb; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 140px;">
                  <strong style="color: #64748b; font-size: 13px;">Nombre</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0E2E47; font-size: 15px;">${nombre}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Empresa</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0E2E47; font-size: 15px;">${empresa || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${email}" style="color: #1597D3; font-size: 15px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Teléfono</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0E2E47; font-size: 15px;">${telefono || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <strong style="color: #64748b; font-size: 13px;">Servicio</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="color: #0E2E47; font-size: 15px;">${servicio || '—'}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <strong style="color: #64748b; font-size: 13px; display: block; margin-bottom: 8px;">Mensaje</strong>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                <p style="color: #1e293b; font-size: 15px; line-height: 1.7; margin: 0;">${mensaje}</p>
              </div>
            </div>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                Este mensaje fue enviado desde el formulario de contacto de aclsys.net
              </p>
            </div>

          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ ok: false, error: 'Error al enviar el mensaje' }, { status: 500 })
  }
}