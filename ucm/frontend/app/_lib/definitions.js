import { z } from "zod";

export const SignupFormSchema = z
  .object({
    first_name: z
      .string()
      .min(2, { message: "First name must be at least 2 characters long." })
      .trim(),
    last_name: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters long." })
      .trim(),
    cin: z
      .string()
      .min(2, { message: "CIN must be at least 2 characters long." })
      .trim(),
    email: z.string().email({ message: "Please enter a valid email." }).trim(),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long. " })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter. " })
      .regex(/[0-9]/, { message: "Contain at least one number. " })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character. ",
      })
      .trim(),

    confirmPassword: z
      .string()
      .min(8, { message: "Be at least 8 characters long. " }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long." })
    .trim(),
});

export const ParticipateInFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  id_event: z.string(),
});
