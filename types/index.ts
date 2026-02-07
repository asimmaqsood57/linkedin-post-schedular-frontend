export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Post {
  id: string;
  content: string;
  category: string;
  scheduledAt?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}