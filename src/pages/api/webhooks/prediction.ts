import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, status, output } = req.body;

    // Handle the webhook data here
    console.log(`Prediction ID: ${id}`);
    console.log(`Status: ${status}`);
    console.log(`Output: ${output}`);

    // Respond with a 200 status to acknowledge receipt of the webhook
    res.status(200).json({ message: 'Webhook received' });
  } else {
    // Respond with a 405 status if the method is not POST
    res.status(405).json({ message: 'Method not allowed' });
  }
}
