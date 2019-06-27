import {User} from "./User";
import Category from "./Category";

export default class Music {
  name: string;
  id: number;
  file: string;
  author: User;
  category: Category;
}
