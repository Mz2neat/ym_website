"use server";

import { z } from "zod";

const contactSchema = z.object({
name: z.string().min(2, "Name is too short").max(50),
email: z.string().email({ message: "Invalid email address" }),
message: z.string().min(10, "Message must be at least 10 characters").max(500),
});

