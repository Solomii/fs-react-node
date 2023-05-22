class ApplicationError extends Error {
  constructor (status, message) {
    super();
    this.name = this.constructor.name;
    this.status = status;
    this.message = message || 'application Error';
  }
}

module.exports = ApplicationError;
