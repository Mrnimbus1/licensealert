
# LicenseAlert - Professional License Compliance Made Simple

A modern web application that helps contractors and professionals across North America track and renew their licenses automatically.

## Features

- **Automated License Tracking**: Never miss a renewal deadline again
- **Smart Reminders**: Get notified 90, 60, 30, and 7 days before expiration
- **Multi-Jurisdiction Support**: Works across Canada (Quebec, Ontario) and U.S. states
- **Team Management**: Manage licenses for your entire organization
- **Real-time Updates**: Stay informed of regulatory changes

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (Database, Auth, Edge Functions)
- **Email**: Resend API for transactional emails
- **Analytics**: Google Analytics 4 + Microsoft Clarity
- **Internationalization**: react-i18next (English/French)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Resend account for email functionality

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd licensealert
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `RESEND_API_KEY`: Your Resend API key (for edge functions)

5. Start the development server:
```bash
npm run dev
```

## Deployment

The application is optimized for deployment on modern hosting platforms:

- **Recommended**: Vercel, Netlify, or Cloudflare Pages
- **Build command**: `npm run build`
- **Output directory**: `dist`

### Environment Setup for Production

1. Configure your Supabase project
2. Set up Resend for email delivery
3. Update domain configurations in environment variables
4. Deploy edge functions to Supabase

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks  
├── lib/                # Utility functions
├── i18n/               # Internationalization
├── integrations/       # Third-party integrations
└── types/              # TypeScript type definitions
```

## Key Features Implementation

### Email Capture & Waitlist
- Optimized conversion funnel
- Real-time email validation
- Automated welcome emails
- Rate limiting and spam protection

### Internationalization
- English and French language support
- Automatic language detection
- Region-specific content adaptation

### Performance Optimization
- Code splitting and lazy loading
- Image optimization
- Bundle size optimization
- CDN integration ready

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Copyright © 2025 LicenseAlert. All rights reserved.

## Support

For questions or support, contact us at hello.licensealert@gmail.com
