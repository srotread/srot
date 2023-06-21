export class KeystaticContentNotFoundError extends Error {
  constructor(location: string) {
    super(`Keystatic: Content not found - ${location}.`)
    this.name = "KeystaticContentNotFoundError"
  }
}
