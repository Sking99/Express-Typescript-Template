export interface AppError extends Error {
  statusCode: number;
}

export class InternalServerError implements AppError {
  name: string;
  message: string;
  statusCode: number

  constructor(message: string) {
    this.name = "InternalServerError";
    this.message = message || "An unexpected error occurred";
    this.statusCode = 500;
  }
}

export class FileNotFoundError implements AppError {
  name: string;
  message: string;
  statusCode: number

  constructor(message: string) {
    this.name = "FileNotFound";
    this.message = message || "An unexpected error occurred";
    this.statusCode = 404;
  }
}