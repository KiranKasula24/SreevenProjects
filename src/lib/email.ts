// src/lib/email.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kasula08@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'inquiries@sreevenprojects.com';

type InquiryData = {
  inquiryId: string;
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
  source: 'general' | 'booking';
};

// Email template for admin notification
function getAdminEmailHtml(data: InquiryData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #0ea5e9; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #fbbf24; }
          .badge { display: inline-block; background: #fbbf24; color: #000; padding: 5px 15px; border-radius: 20px; font-weight: bold; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏗️ New ${data.source === 'booking' ? 'Service Booking' : 'Contact Inquiry'}</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Reference: ${data.inquiryId}</p>
          </div>
          
          <div class="content">
            <div style="text-align: center; margin-bottom: 20px;">
              <span class="badge">${data.source === 'booking' ? '📋 SERVICE BOOKING' : '✉️ GENERAL INQUIRY'}</span>
            </div>

            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${data.name}</div>
            </div>

            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>

            ${data.phone ? `
            <div class="field">
              <div class="label">📞 Phone:</div>
              <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>
            ` : ''}

            ${data.projectType ? `
            <div class="field">
              <div class="label">🏢 Project Type:</div>
              <div class="value">${data.projectType}</div>
            </div>
            ` : ''}

            ${data.budget ? `
            <div class="field">
              <div class="label">💰 Budget:</div>
              <div class="value">${data.budget}</div>
            </div>
            ` : ''}

            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>

            <div class="footer">
              <p><strong>⏰ Received:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              <p style="color: #0ea5e9; font-weight: bold;">⚡ Please respond within 24 hours for best conversion rates!</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Email template for customer confirmation
function getCustomerEmailHtml(data: InquiryData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #fbbf24; margin: 20px 0; }
          .contact-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #0ea5e9; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Thank You for Contacting Us!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Sreeven Projects</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${data.name}</strong>,</p>
            
            <p>Thank you for your ${data.source === 'booking' ? 'service booking request' : 'inquiry'}! We have received your message and our team will review it shortly.</p>

            <div class="highlight">
              <p style="margin: 0;"><strong>📋 Your Reference Number:</strong></p>
              <p style="font-size: 20px; font-weight: bold; color: #0ea5e9; margin: 10px 0 0 0;">${data.inquiryId}</p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;">Please save this for your records</p>
            </div>

            <h3 style="color: #0ea5e9;">📝 Your Submission Details:</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
              ${data.projectType ? `<p><strong>Project Type:</strong> ${data.projectType}</p>` : ''}
              ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
              <p><strong>Message:</strong> ${data.message}</p>
            </div>

            <h3 style="color: #0ea5e9;">⏱️ What Happens Next?</h3>
            <ul>
              <li>Our team will review your ${data.source === 'booking' ? 'booking request' : 'inquiry'} within <strong>24 hours</strong></li>
              <li>We'll contact you via email or phone to discuss your requirements</li>
              <li>A project consultant will be assigned to your case</li>
              ${data.source === 'booking' ? '<li>We\'ll provide a detailed quote and timeline</li>' : ''}
            </ul>

            <div class="contact-box">
              <h3 style="color: #0ea5e9; margin-top: 0;">📞 Need Immediate Assistance?</h3>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:9030841530">9030841530</a></p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:kasula08@gmail.com">kasula08@gmail.com</a></p>
              <p style="margin: 10px 0;"><strong>Address:</strong> Jubilee Hills, Hyderabad</p>
              <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">
                <strong>Business Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM IST
              </p>
            </div>

            <p style="margin-top: 20px;">We're excited to work with you on your project!</p>
            
            <p style="margin-top: 20px;">
              Best regards,<br>
              <strong>Sreeven Projects Team</strong><br>
              <em>Where Vision Meets Structure</em>
            </p>

            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
              <p>© ${new Date().getFullYear()} Sreeven Projects. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function sendInquiryNotifications(data: InquiryData) {
  try {
    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `🔔 New ${data.source === 'booking' ? 'Service Booking' : 'Inquiry'} - ${data.inquiryId}`,
      html: getAdminEmailHtml(data),
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `✅ Thank You for Contacting Sreeven Projects - ${data.inquiryId}`,
      html: getCustomerEmailHtml(data),
    });

    return {
      success: true,
      adminEmailId: adminEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    };
  } catch (error) {
    console.error('Failed to send emails:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Optional: Send email to multiple admins
export async function sendToMultipleAdmins(data: InquiryData, adminEmails: string[]) {
  const promises = adminEmails.map(email =>
    resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `🔔 New ${data.source === 'booking' ? 'Service Booking' : 'Inquiry'} - ${data.inquiryId}`,
      html: getAdminEmailHtml(data),
    })
  );

  return Promise.all(promises);
}