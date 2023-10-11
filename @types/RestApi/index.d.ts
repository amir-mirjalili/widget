export {};

declare global {
  namespace RestApi {
    interface ResInterface {
      status: number;
      msg?: string | undefined;
      data?: any | undefined;
    }
    interface ObjectResInterface {
      is_success: boolean;
      data?: any;
      msg?: string;
    }
    interface RestApiTokenInterface {
      public_id: string;
      public_token: string;
      expire_at: number;
    }
  }
}
