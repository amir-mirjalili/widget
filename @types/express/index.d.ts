export {};

declare global {
  namespace Express {
    interface Response {
      json?: any;
      set_header?: any;
    }
  }
}
