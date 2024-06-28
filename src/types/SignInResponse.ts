export type SignInResponse = {
  message: string;
  data: {
    accessToken: string;
    id: string;
    email: string;
  };
};
