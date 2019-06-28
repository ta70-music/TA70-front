import {User} from "./User";
import Category from "./Category";

export default class Music {
  name: string;
  id: number;
  file: string;
  img: string;
  author: User;
  category: Category;
}
