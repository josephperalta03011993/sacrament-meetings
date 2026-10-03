"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  addMeeting,
  updateMeeting as updateMeetingDb,
  deleteMeeting as deleteMeetingDb,
} from "./meetings-db";

const MeetingFormSchema = z.object({
  date: z.string().min(1, "Date is required."),
  meetingType: z.enum(["testimony", "regular", "stake", "general"], {
    message: "Please select a meeting type.",
  }),
  presiding: z.string().min(1, "Presiding officer is required."),
  conducting: z.string().min(1, "Conducting officer is required."),
  openingPrayer: z.string().min(1, "Opening prayer is required."),
  closingPrayer: z.string().min(1, "Closing prayer is required."),
});

export type State = {
  message?: string;
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    openingPrayer?: string[];
    closingPrayer?: string[];
  };
};

function getFormData(formData: FormData) {
  return {
    date: String(formData.get("date") ?? ""),
    meetingType: String(formData.get("meetingType") ?? ""),
    presiding: String(formData.get("presiding") ?? ""),
    conducting: String(formData.get("conducting") ?? ""),
    openingPrayer: String(formData.get("openingPrayer") ?? ""),
    closingPrayer: String(formData.get("closingPrayer") ?? ""),
  };
}

export async function createMeeting(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse(
    getFormData(formData)
  );

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await addMeeting({
      ...validatedFields.data,
      announcements: [],
      openingHymn: {
        number: 0,
        title: "",
      },
      openingPrayer: validatedFields.data.openingPrayer,
      wardBusiness: [],
      stakeBusiness: false,
      sacramentHymn: {
        number: 0,
        title: "",
      },
      speakers: [],
      closingHymn: {
        number: 0,
        title: "",
      },
      closingPrayer: validatedFields.data.closingPrayer,
    });
  } catch (error) {
    console.error("Failed to create meeting:", error);

    return {
      message: "Unable to create the meeting. Please try again.",
    };
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  _prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = MeetingFormSchema.safeParse(
    getFormData(formData)
  );

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await updateMeetingDb(id, {
      ...validatedFields.data,
    });
  } catch (error) {
    console.error("Failed to update meeting:", error);

    return {
      message: "Unable to update the meeting. Please try again.",
    };
  }

  revalidatePath("/meetings");
  revalidatePath(`/meetings/${id}`);
  redirect("/meetings");
}

export async function deleteMeeting(id: number) {
  try {
    await deleteMeetingDb(id);
  } catch (error) {
    console.error("Failed to delete meeting:", error);
    throw new Error("Unable to delete the meeting. Please try again.");
  }

  revalidatePath("/meetings");
  redirect("/meetings");
}