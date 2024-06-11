import { User } from './User';
import { CommentResponse } from '../interfaces';

export class UserComment {
  _id: string = '';
  author: User;
  post: string;
  content: string = '';
  creationDate: Date;
  constructor(commentResponseData: any) {
    Object.assign(this, commentResponseData);
  }
}