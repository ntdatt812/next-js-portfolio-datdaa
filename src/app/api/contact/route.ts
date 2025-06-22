import { ISendContact } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    (await request.json()) as ISendContact;
    return NextResponse.json(
      {
        message: "Message send successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send message!";
    return NextResponse.json(
      {
        message: errorMessage,
      },
      { status: 500 },
    );
  }
}
