import { Category } from '../enums';
import { LocalisationResponse } from './LocalisationResponse';
import { UserResponse } from './UserResponse';

export interface PostResponse {
  _id: string;
  title: string;
  category: Category;
  likes: number;
  usersCommentsId: string[];
  author: UserResponse;
  location: LocalisationResponse;
  thumbnail: string;
  modernImages: string[];
  archivalImages: string[];
  content: string;
  published: Date;
}
