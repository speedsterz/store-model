import jwt from "jsonwebtoken";

const DEFAULT_OPTIONS = {
  expiresIn: "1h",
};

export const signJwtAccessToken = (
  payload: string | object | Buffer,
  options = DEFAULT_OPTIONS
) => {
  const secretKey = process.env.JWT_SECRET_KEY!;
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

export const verifyJwt = (token: string) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY!;
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
};
