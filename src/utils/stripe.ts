import dotenv from "dotenv"
import Stripe from "stripe"

dotenv.config({ path: ".env.local" })
dotenv.config()

let stripeInstance: Stripe | null = null

export const getStripe = () => {
  if (stripeInstance) {
    return stripeInstance
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY is missing. Add it to .env.local before starting the server."
    )
  }

  stripeInstance = new Stripe(secretKey, {
    apiVersion: "2026-03-25.dahlia",
  })

  return stripeInstance
}