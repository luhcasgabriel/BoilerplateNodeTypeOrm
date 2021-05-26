import { order } from "./payload/orders"
import { Menu } from '../../entities/Menu'
import { PromotionsController } from "../../controllers/PromotionsController"
import { 
    menuXBacon,menuXBurger, 
    menuXEgg, 
    menuXEggBacon,
    menuLunchCustomAlotOfMeatHamburgers, 
    menuLunchCustomAlotOfMeatHamburgers2, 
    menuLunchCustomAlotOfCheese,
    menuLunchCustomAlotOfCheese2,
    menuLunchCustomLettucAndNoBacon,
    bacon,
    cheese,
    hamburgers,
    lettuce } from './payload/orders'

/* Unit tests to calculate the final value and discount of promotions */
describe('Calculate value total with promotion', () => {

    it('should return price with discount to list order - Test XBacon', async () => {
    const menus: Menu[] = []
    menus.push(menuXBacon);

    const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
    expect(resultOrder.price).toEqual(6.50)
    expect(resultOrder.discount).toEqual(0)
    })

    it('should return price with discount to list order - Test XBurger', async () => {
        const menus: Menu[] = []
        menus.push(menuXBurger);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(4.50)
        expect(resultOrder.discount).toEqual(0)

    })

    it('should return price with discount to list order - Test XEgg', async () => {
        const menus: Menu[] = []
        menus.push(menuXEgg);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(5.30)
        expect(resultOrder.discount).toEqual(0)

    })

    it('should return price with discount to list order - Test XEgg Bacon', async () => {
        const menus: Menu[] = []
        menus.push(menuXEggBacon);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(7.30)
        expect(resultOrder.discount).toEqual(0)

    })

    it('should return price with discount to list order - Custom Test - A lot of meat (3 Hamburgers)', async () => {
        const menus: Menu[] = []
        menus.push(menuLunchCustomAlotOfMeatHamburgers);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(10.30)
        expect(resultOrder.discount).toEqual(3)

    })

    it('should return price with discount to list order - Custom Test - A lot of meat (4 Hamburgers)', async () => {
        const menus: Menu[] = []
        menuLunchCustomAlotOfMeatHamburgers.items.push(hamburgers)
        menus.push(menuLunchCustomAlotOfMeatHamburgers);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(13.30)
        expect(resultOrder.discount).toEqual(3)

    })

    it('should return price with discount to list order - Custom Test - A lot of meat (6 Hamburgers)', async () => {
        const menus: Menu[] = []
        menuLunchCustomAlotOfMeatHamburgers2.items.push(hamburgers)
        menuLunchCustomAlotOfMeatHamburgers2.items.push(hamburgers)
        menuLunchCustomAlotOfMeatHamburgers2.items.push(hamburgers)
        menus.push(menuLunchCustomAlotOfMeatHamburgers2);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(12)
        expect(resultOrder.discount).toEqual(6)

    })

    it('should return price with discount to list order - Custom Test - A lot of Cheese (3 Cheeses)', async () => {
        const menus: Menu[] = []
        menus.push(menuLunchCustomAlotOfCheese);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(5.80)
        expect(resultOrder.discount).toEqual(1.5)

    })

    it('should return price with discount to list order - Custom Test - A lot of Cheese (4 Cheeses)', async () => {
        const menus: Menu[] = []
        menuLunchCustomAlotOfCheese.items.push(cheese)
        menus.push(menuLunchCustomAlotOfCheese);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(7.3)
        expect(resultOrder.discount).toEqual(1.5)

    })

    it('should return price with discount to list order - Custom Test - A lot of Cheese (6 Cheeses)', async () => {
        const menus: Menu[] = []
        menuLunchCustomAlotOfCheese2.items.push(cheese)
        menuLunchCustomAlotOfCheese2.items.push(cheese)
        menuLunchCustomAlotOfCheese2.items.push(cheese)
        menus.push(menuLunchCustomAlotOfCheese2);
    
        const {order: resultOrder, listMenu} = (new PromotionsController()).calculation({  clientName: order.clientName, orderNumber: order.orderNumber, price: order.price , discount: order.discount, menu: menus })
        expect(resultOrder.price).toEqual(6)
        expect(resultOrder.discount).toEqual(3)

    })

 
})
