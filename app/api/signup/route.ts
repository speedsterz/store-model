import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import * as bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Both fields are  required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { username: username.toLowerCase() },
    });

    if (user) {
      return NextResponse.json(
        { message: "این یوزرنیم گرفته شده است" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newuser = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Done!" }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong while trying to log in", result: e },
      { status: 500 }
    );
  }
}
