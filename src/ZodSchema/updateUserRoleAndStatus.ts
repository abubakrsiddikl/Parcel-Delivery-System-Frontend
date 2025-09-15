import { z } from "zod";

export const userStatusSchema = z.object({
  isActive: z.enum(["ACTIVE", "BLOCKED"]).refine((val) => !!val, {
    message: "Please select status (ACTIVE or BLOCKED)",
  }),
  role: z.enum(["admin", "sender", "receiver"]).refine((val) => !!val, {
    message: "Please select a role",
  }),
});

export type TUserStatus = z.infer<typeof userStatusSchema>;
