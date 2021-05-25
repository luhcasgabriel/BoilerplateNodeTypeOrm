import { Item } from '../entities/Item'

interface IMenuItems {
  id: string,
  name: string,
  created_at: Date,
  items: [Item]
}

export { IMenuItems }
