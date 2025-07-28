import { z } from "zod"

// Login Schema
export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  password: z.string().min(1, {
    message: "La contraseña es requerida.",
  }),
})

// Register Schema
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
      })
      .max(50, {
        message: "El nombre no puede exceder 50 caracteres.",
      }),
    lastName1: z
      .string()
      .min(2, {
        message: "El primer apellido debe tener al menos 2 caracteres.",
      })
      .max(50, {
        message: "El primer apellido no puede exceder 50 caracteres.",
      }),
    lastName2: z
      .string()
      .max(50, {
        message: "El segundo apellido no puede exceder 50 caracteres.",
      })
      .optional(),
    email: z.string().email({
      message: "Por favor ingresa un correo electrónico válido.",
    }),
    password: z
      .string()
      .min(8, {
        message: "La contraseña debe tener al menos 8 caracteres.",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message: "La contraseña debe contener al menos una mayúscula, una minúscula y un número.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  })

// Reset Request Schema
export const resetRequestSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
})

// Verify Code Schema
export const verifyCodeSchema = z.object({
  code: z
    .string()
    .length(6, {
      message: "El código debe tener exactamente 6 dígitos.",
    })
    .regex(/^\d+$/, {
      message: "El código solo debe contener números.",
    }),
})

// New Password Schema
export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, {
        message: "La contraseña debe tener al menos 8 caracteres.",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message: "La contraseña debe contener al menos una mayúscula, una minúscula y un número.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  })

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
export type ResetRequestFormData = z.infer<typeof resetRequestSchema>
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>
export type NewPasswordFormData = z.infer<typeof newPasswordSchema>
