import { Category } from '../enums';
import { PostResponse } from '../interfaces';
import { Localisation } from './Localisation';
import { User } from './User';

export class UsersPost {
  public _id: string = '';
  public title: string = '';
  public category: Category = Category.Other;
  public numberOfLikes: number = 0;
  public numberOFComments: number = 0;
  public author: User = new User();
  public localisation: Localisation = new Localisation();
  public thumbnail: string = '';
  public modernImages: string[] = [];
  public archivalImages: string[] = [];
  public content: string = '';
  public published: Date;

  constructor(postResponseData: PostResponse) {
    Object.assign(this, postResponseData);
  }
}
