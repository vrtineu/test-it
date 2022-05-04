export class AppError {
  _message;
  _statusCode;

  constructor(message, statusCode = 400) {
    this._message = message;
    this._statusCode = statusCode;
  }
}