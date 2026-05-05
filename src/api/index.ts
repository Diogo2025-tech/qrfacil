import { Hono } from 'hono';
import { cors } from "hono/cors";

const app = new Hono().basePath('api');
app.use(cors({ origin: "*" }));

app.get('/ping', (c) => c.json({ message: `Pong!` }));

const MP_TOKEN = process.env.MP_ACCESS_TOKEN!;

// Cria pagamento PIX R$2 e retorna QR code
app.post('/qr/pay', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const customerId = body.customerId || 'anon_' + Date.now();
  const idempotencyKey = `qrfacil-${customerId}-${Date.now()}`;

  try {
    const res = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MP_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        transaction_amount: 2.00,
        description: 'QR Code — QRFácil',
        payment_method_id: 'pix',
        payer: { email: 'pagador@qrfacil.com' },
        external_reference: customerId,
      }),
    });

    const data: any = await res.json();

    if (!data.id) {
      console.error('MP PIX error:', JSON.stringify(data));
      return c.json({ error: 'mp_error' }, 500);
    }

    const txData = data.point_of_interaction?.transaction_data;
    return c.json({
      paymentId: data.id,
      qrCode:       txData?.qr_code,
      qrCodeBase64: txData?.qr_code_base64,
      status:       data.status,
    });
  } catch (err: any) {
    console.error('pay error:', err?.message);
    return c.json({ error: 'request_failed' }, 500);
  }
});

// Verifica status do pagamento
app.get('/qr/status/:paymentId', async (c) => {
  const { paymentId } = c.req.param();
  try {
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${MP_TOKEN}` },
    });
    const data: any = await res.json();
    return c.json({ status: data.status, detail: data.status_detail });
  } catch {
    return c.json({ status: 'unknown' });
  }
});

export default app;
