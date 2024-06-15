import { Request, Response } from 'express';
import morgan from 'morgan';

// Define custom token function
export const customToken = (_req: Request, res: Response) => {
  const statusCode = res.statusCode;
  if (statusCode >= 500) {
    return '[ERROR]';
  } else if (statusCode >= 400) {
    return '[WARN]';
  } else {
    return '[INFO]';
  }
};

// Export the custom token for use in your main app
export const setupMorgan = () => {
  // Configure Morgan with your custom token
  morgan.token('level', customToken);

  // Optionally, you can export this if you need to reuse it in other parts of your application
  return morgan;
};
