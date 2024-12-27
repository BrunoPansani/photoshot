import { NextApiRequest, NextApiResponse } from 'next';
import s3Client from "@/core/clients/s3";
import db from "@/core/db";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, status, output } = req.body;

    console.log(`Body: ${req.body}`);

    // Query the database for the prediction ID on the Shots table

    const prediction = await db.shot.findFirst({
      where: {
        replicateId: id,
      },
    });

    console.log(`Prediction: ${prediction}`);

    if (!prediction) {
      res.status(404).json({ message: 'Prediction not found' });
      return;
    }

    // Get the output URL from the webhook data
    const outputUrl = output?.outputUrl;

    // Download the file, upload it to S3, and update the Shot record with the S3 URL
    if (outputUrl) {
      const file = await fetch(outputUrl);
      const buffer = await file.arrayBuffer();
      const extension = outputUrl.split('.').pop();
      const key = `${id}.${extension}`;
      const s3Url = `https://${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com/${key}`;

      await s3Client.send(
        new PutObjectCommand({
          Bucket: process.env.S3_UPLOAD_BUCKET!,
          Key: key,
          Body: Buffer.from(buffer),
        })
      );

      let shot = await db.shot.update({
        where: { id: prediction.id },
        data: {
          outputUrl: s3Url || null,
        },
      });

      console.log(`Shot: ${shot}`);
    }

    // Respond with a 200 status to acknowledge receipt of the webhook
    res.status(200).json({ message: 'Webhook received' });
  } else {
    // Respond with a 405 status if the method is not POST
    res.status(405).json({ message: 'Method not allowed' });
  }
}
