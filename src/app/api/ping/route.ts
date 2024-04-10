import { checkMetrics } from "@/server/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, _res: NextResponse) {
  const { address } = await req.json();
  const metrics = await checkMetrics("");

  return NextResponse.json({ address }, { status: 200 });
}
