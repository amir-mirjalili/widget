import { Response } from 'express';
const status_message: any = {
  200: 'Request Found!',
  201: 'Request Found And Content Ready!',
  202: 'Request Accepted This Actions take a long while to process!',
  204: 'Request Accepted but No Content Here!',
  400: 'Bad Request!',
  401: 'Authorization Required!',
  403: 'Request Forbidden!',
  404: 'Request Not Found !',
  405: 'Method Not Allowed!',
  406: 'Not Acceptable!',
  412: 'Precondition Failed!',
  500: 'Internal Server Error!',
};

export const ApiRes = (res: Response, result: RestApi.ResInterface) => {
  res.status(result.status).json({
    status: result.status,
    msg: result.msg || status_message[result.status] || `Status ${result.status} Happened!`,
    data: result.data || undefined,
  });
};
