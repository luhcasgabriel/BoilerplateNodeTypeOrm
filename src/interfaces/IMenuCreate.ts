import { Item } from '../entities/Item'

interface IMenuCreate {
  name: string;
  items: [Item];
}

export { IMenuCreate }
