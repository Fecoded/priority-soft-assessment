import { NextResponse } from "next/server";
import { omit } from "lodash";
import * as jwt from "jsonwebtoken";

import { authenticateUser } from "@src/lib/authenticate-user";

export async function GET(request: Request) {
  try {
    const user = await authenticateUser(request);

    return NextResponse.json(
      { success: true, data: omit(user, ["password"]) },
      { status: 200 },
    );
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      // The token has expired
      return NextResponse.json(
        {
          success: false,
          message: `${err.message}, please login again`,
        },
        { status: 401 },
      );
    } else if (err instanceof jwt.JsonWebTokenError) {
      // Other JWT errors like invalid signature, malformed token, etc.
      return NextResponse.json(
        {
          success: false,
          message: `${err.message}, please login again`,
        },
        { status: 401 },
      );
    } else {
      // Handle other potential errors
      return NextResponse.json(
        { success: false, message: `Internal server error, ${err}` },
        { status: 500 },
      );
    }
  }
}
