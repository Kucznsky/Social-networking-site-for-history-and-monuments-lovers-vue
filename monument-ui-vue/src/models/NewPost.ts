import { Category } from '../enums';
import { Localisation } from './Localisation';

export class NewPost {
  category: Category = Category.Other;
  title = '';
  content = '';
  localisation: Localisation;
  authorId = '';
  thumbnail: string;
  oldPictures?: string[];
  modernPictures?: string[];
}
