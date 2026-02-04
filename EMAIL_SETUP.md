# Email Integration Setup Guide

This portfolio now uses **EmailJS** to send contact form messages directly to your email. Follow these steps to set it up:

## Setup Instructions

### 1. Create an EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Create an Email Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add New Service**
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the provider-specific setup instructions
- Copy your **Service ID**

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Name it something like "Contact Form"
- Use the following template variables in your email content:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}
```

- Save the template and copy your **Template ID**

### 4. Get Your Public Key
- Go to **Account** settings
- Copy your **Public Key**

### 5. Add Environment Variables
- Copy the `.env.example` file to `.env.local`
- Fill in the three values:
  - `VITE_EMAILJS_PUBLIC_KEY` - Your public key
  - `VITE_EMAILJS_SERVICE_ID` - Your service ID
  - `VITE_EMAILJS_TEMPLATE_ID` - Your template ID

### 6. Restart Your Development Server
```bash
npm run dev
```

## How It Works

When a user submits the contact form:
1. Their message is sent to your email via EmailJS
2. You receive an email with their name, email, subject, and message
3. User sees a success message on the website
4. Form is cleared and ready for the next submission

## Testing

To test the email integration:
1. Fill out the contact form on your portfolio
2. Check your email to confirm you received the message
3. Reply to the user from your email inbox

## Troubleshooting

### Common Issues

- **Messages not sending?** Make sure your environment variables are correctly set
- **Template not working?** Check that variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

### Gmail: "Insufficient Authentication Scopes"

If you receive an error about insufficient authentication scopes:

1. Go to your **EmailJS Dashboard** → **Email Services**
2. **Delete** your Gmail service
3. **Create a new Gmail service** with OAuth 2.0:
   - Click "Add New Service"
   - Select "Gmail"
   - Click "Connect Gmail Account"
   - **Important**: When Google prompts you, grant permission for "Send emails as you"
   - This grants the proper `gmail.send` scope
4. Copy the new **Service ID** and update it in your `.env.local`
5. Test again with the contact form

If you previously used an **App Password**, that won't work—you must use OAuth 2.0 authentication to get the necessary scopes.

- **Need more help?** Visit [EmailJS documentation](https://www.emailjs.com/docs/)
