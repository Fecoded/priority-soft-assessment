import * as jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const ErrorHandler = (err: unknown) => {
  const error = err as { message: string };
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
  } else if (error.message === "Unauthorized access") {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 403 },
    );
  } else {
    // Handle other potential errors
    return NextResponse.json(
      { success: false, message: `Internal server error, ${err}` },
      { status: 500 },
    );
  }
};
