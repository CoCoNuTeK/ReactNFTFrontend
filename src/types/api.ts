export interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
  message: string;
}

export type ApiResponse<T> = T; 