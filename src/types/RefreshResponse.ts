export type RefreshResponse = {
  message: string;
  data: {
    accessToken: string;
    id: string;
    email: string;
  };
};
