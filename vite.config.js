import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import Stripe from 'stripe'
import process from 'node:process'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables including STRIPE_SECRET_KEY from .env
  const env = loadEnv(mode, process.cwd(), '')
  const stripeSecretKey = env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'stripe-backend-api',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/create-payment-intent' && req.method === 'POST') {
              let body = ''
              req.on('data', chunk => { body += chunk })
              req.on('end', async () => {
                try {
                  if (!stripeSecretKey || stripeSecretKey.includes('sample51O3w')) {
                    res.statusCode = 400
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ 
                      error: 'STRIPE_SECRET_KEY is missing in your .env file. Please add your sk_test_... key to .env' 
                    }))
                    return
                  }

                  const stripe = new Stripe(stripeSecretKey)
                  const { amount, currency = 'usd', donorEmail, donorName, fund } = JSON.parse(body || '{}')

                  if (!amount || Number(amount) <= 0) {
                    res.statusCode = 400
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ error: 'Invalid donation amount.' }))
                    return
                  }

                  // Stripe expects amount in the smallest currency unit (cents)
                  const amountInCents = Math.round(Number(amount) * 100)

                  const paymentIntent = await stripe.paymentIntents.create({
                    amount: amountInCents,
                    currency,
                    receipt_email: donorEmail || undefined,
                    description: `Donation to ${fund || 'General Community Impact Fund'} by ${donorName || 'Donor'}`,
                    metadata: {
                      donorName: donorName || 'Anonymous',
                      donorEmail: donorEmail || '',
                      fund: fund || 'General Fund',
                      platform: 'HopeHorizon Non-Profit Website'
                    },
                    automatic_payment_methods: { enabled: true }
                  })

                  res.statusCode = 200
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({
                    clientSecret: paymentIntent.client_secret,
                    paymentIntentId: paymentIntent.id
                  }))
                } catch (err) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: err.message }))
                }
              })
            } else {
              next()
            }
          })
        }
      }
    ]
  }
})
