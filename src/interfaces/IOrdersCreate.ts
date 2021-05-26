import { Menu } from '../entities/Menu'

interface IOrdersCreate {
  clientName: string,
  orderNumber: number,
  price: number,
  discount: number,
  menu: Menu[]
}

export { IOrdersCreate }
