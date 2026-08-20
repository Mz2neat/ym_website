"use server";

import { z } from "zod";

// creates the rules for the form
const contactschema = z.object({
  name: z.string().min(2, "name is too short").max(50),
  email: z.string().email({ message: "invalid email address" }),
  message: z.string().min(10, "message must be at least 10 characters").max(500),
});

export async function submitSecureForm(formdata: FormData) {
  
  // pulls strings safely from the form
  const name = formdata.get("name")?.toString() || "";
  const email = formdata.get("email")?.toString() || "";
  const message = formdata.get("message")?.toString() || "";
  const city = formdata.get("city")?.toString() || "";
  const postalcode = formdata.get("postalCode")?.toString() || "";

  // checks if the data passes the rules
  const validation = contactschema.safeParse({ name, email, message });

  // stops bad data and sends back the errors
  if (!validation.success) {
    return { 
      success: false, 
      error: "security validation failed check your inputs", 
      details: validation.error.flatten().fieldErrors 
    };
  }

  // if it passes, return the safe data back to the browser to send
  return { 
    success: true, 
    safeData: {
      name: name,
      email: email,
      city: city,
      postalCode: postalcode,
      message: message,
    }
  };
}