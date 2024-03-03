import { api } from "@/utils/values";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token");
    const res = await fetch(`${api}survey/user`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA2NjgxNzE3LCJleHAiOjE3MDcyODY1MTd9.N9ymjz1SNBjAZwCZ6ddlMv9Hl_PCMRhsMhtjM7lqI8c"}`,
      },
    });
    console.log(res);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {}
};
