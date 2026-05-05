import { feature, plan, item } from "atmn";

export const qrGeneration = feature({
  id: "qr_generation",
  name: "QR Generation",
  type: "metered",
  consumable: true,
});

// Plano pay-per-use: R$2 por geração
export const payPerUse = plan({
  id: "pay_per_use",
  name: "Pay Per Use",
  items: [
    item({
      featureId: qrGeneration.id,
      price: { amount: 200, billingUnits: 1, billingMethod: "usage_based", interval: "month" },
    }),
  ],
});

export default {
  features: [qrGeneration],
  plans: [payPerUse],
};
