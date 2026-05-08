import type { Request, Response } from "express"
import { getStripe } from "../../utils/stripe"

export const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const stripe = getStripe()
    const userId = req.user?.id
    const { ideaId, amount } = req.body
    console.log(ideaId,userId,amount);
    if (!userId || !ideaId) {
      return res.status(400).json({
        message: "Missing userId or ideaId",
      })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",

      metadata: {
        userId,
        ideaId,
      },
    })

    res.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    res.status(400).json({ error: "Payment failed" })
  }
}