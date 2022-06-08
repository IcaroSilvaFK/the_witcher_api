export class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly timestamp = new Date().toUTCString();

  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
