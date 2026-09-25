/**
 * HAFFU STUDIO — Input Validation Middleware
 * Zod schema validation for API routes
 */
const { z } = require('zod');

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20).optional(),
  sessionType: z.enum(['wedding','family','maternity','event','portrait','brand']).optional(),
  date: z.string().optional(),
  location: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().max(2000).optional()
});

const bookingSchema = z.object({
  sessionType: z.enum(['wedding','family','maternity','event','portrait','brand']),
  date: z.string().min(1),
  location: z.string().min(1),
  clientName: z.string().min(2),
  clientEmail: z.string().email(),
  clientPhone: z.string().optional(),
  package: z.string().optional(),
  notes: z.string().max(500).optional()
});

function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: 'Validation failed', details: result.error.flatten() });
    }
    req.validated = result.data;
    next();
  };
}

module.exports = { validate, contactSchema, bookingSchema };