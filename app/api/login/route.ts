import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { signJwtAccessToken } from "../../helper/jwt";

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

    if (!user) {
      return NextResponse.json({ message: "No user found" }, { status: 400 });
    }

    if (await bcrypt.compare(password, user.password)) {
      const { password: hashedPasswrod, ...result } = user;
      const accessToken = signJwtAccessToken(result);
      return NextResponse.json(
        { result: { ...result, accessToken } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Password incorrect" },
        { status: 400 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong while trying to log in", result: e },
      { status: 500 }
    );
  }
}
