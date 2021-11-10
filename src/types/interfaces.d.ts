/**
 *
 */

export interface Hero {
  id: number;
  name: string;
  power: string;
}

export interface Crisis{
  id: number;
  name: string;
}

// Facebook clone
export interface User {
  id: string;
  email: string | null;
  username: string | null;
  avatar: string | null;
  emailVerified: boolean;

}

export interface Post {
  title: string;
  message: string;
  files: File[];
  filesUrl?: string[];
  activities?: string[];
  visibility: string;
}
