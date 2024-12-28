export const formatStudioPrice = () =>
  `R$ ${Number(process.env.NEXT_PUBLIC_STRIPE_STUDIO_PRICE) / 100}`;
