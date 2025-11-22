const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    // Parse request body
    const { name, email, message } = JSON.parse(event.body);

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: 'error',
          message: 'All fields are required'
        })
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: 'error',
          message: 'Invalid email format'
        })
      };
    }

    // Debug: Log environment variables (without showing actual values)
    console.log('Environment check:', {
      hasGmailUser: !!process.env['GMAIL_USER'],
      hasGmailPassword: !!process.env['GMAIL_APP_PASSWORD'],
      userLength: process.env['GMAIL_USER'] ? process.env['GMAIL_USER'].length : 0,
      passLength: process.env['GMAIL_APP_PASSWORD'] ? process.env['GMAIL_APP_PASSWORD'].length : 0
    });

    // Check if environment variables exist
    if (!process.env['GMAIL_USER'] || !process.env['GMAIL_APP_PASSWORD']) {
      console.error('Missing environment variables');
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: 'error',
          message: 'Server configuration error - missing credentials'
        })
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env['GMAIL_USER'],
        pass: process.env['GMAIL_APP_PASSWORD']
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email options
    const mailOptions = {
      from: {
        name: 'Portfolio Contact Form',
        address: process.env['GMAIL_USER']
      },
      to: process.env['GMAIL_USER'],
      replyTo: email,
      subject: `Portfolio Contact from: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #a855f7;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
      text: `
Portfolio Contact Form

Name: ${name}
Email: ${email}
Message: ${message}

Reply to: ${email}
      `
    };

    // Send email
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'success',
        message: 'Email sent successfully!'
      })
    };

  } catch (error) {
    console.error('❌ Email sending error:', error.message);
    console.error('❌ Full error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'error',
        message: `Failed to send email: ${error.message}`
      })
    };
        message: 'Failed to send email. Please try again later.'
      })
    };
  }
};