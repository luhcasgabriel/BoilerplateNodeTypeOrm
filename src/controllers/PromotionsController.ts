import { Item } from '../entities/Item';
import { Menu } from '../entities/Menu';
import { Order } from '../entities/Order';
import { OrderMenusItemItem } from '../entities/OrderMenusItemItem';
import { Promotion } from '../entities/Promotion'
import { PromotionEnum } from '../Enum/PromotionEnum'
import { IOrdersCreate } from '../interfaces/IOrdersCreate'

class PromotionsController {

    /* method of calculating the final value of the order */
    calculation ({ clientName, orderNumber, price, discount, menu } : IOrdersCreate ) {


        menu.forEach((menuItem) => {
            menuItem.items.forEach((item) => {
                
                item.price *= item.quantity
                discount = 0
                price += item.price            
            })
        })

        /* calls promotion method */
        const {order, menu : listMenu } = this.promotion({clientName, orderNumber, price, discount, menu : menu})
        
        return {
            order,
            listMenu
        }
    }




    /* promotion method  */
    promotion ({clientName, orderNumber, price, discount, menu } : IOrdersCreate ) {

        const order = new Order();

        let response;
        menu.forEach((menuItem) => {

            /* calls promotion methods - light, a lot of meat, a lot of cheese */
            response = this.promotionLotOfCheese(menuItem, price , discount)
            response = this.promotionLotOfMeat(menuItem, response.order.price , response.order.discount)
            response = this.promotionLight(menuItem, response.order.price , response.order.discount)
        })

        order.price = response.order.price
        order.discount = response.order.discount

        return {
            order,
            menu
        }
    }

    /* 'a lot of meat' method */
    promotionLotOfMeat (menu: Menu, priceTotalOrder: number, discountTotalOrder: number) {

        const promotionEnum = new PromotionEnum()
        const order = new Order()
        let priceIngredient = 0
        let counter = 0

        menu.items.forEach((item) => {

            if (item.name == promotionEnum.typePromo.A_LOT_OF_MEAT.item) {
                
                counter++;
                priceIngredient = item.price;

                
                
            }
        })
        if (counter > 2) {

            discountTotalOrder += (Math.floor( counter / 3 ) * priceIngredient)
            priceTotalOrder -= discountTotalOrder
            menu.promotions = new Array()
            const promotion = new Promotion()
            promotion.description = promotionEnum.typePromo.A_LOT_OF_MEAT.description
            promotion.name = promotionEnum.typePromo.A_LOT_OF_MEAT.name
            promotion.discount = discountTotalOrder
            menu.promotions.push(promotion)
        }

        order.price = priceTotalOrder
        order.discount = discountTotalOrder

        return {
            order,
            menu
        }
    }

    /* light method */
    promotionLight (menu: Menu, priceTotalOrder: number, discountTotalOrder: number) {

        const promotionEnum = new PromotionEnum()
        const order = new Order()


        let num = 0
        menu.items.forEach((item) => {
            if (item.name == 'Alface') {
                num = 1
            }
            else if (item.name == 'Bacon') {
                num = 0
            }
        })

        if (num == 1) {
            discountTotalOrder += ((priceTotalOrder * 10) / 100)
            priceTotalOrder -= ((priceTotalOrder * 10) / 100)
            menu.promotions = new Array()
            const promotion = new Promotion()
            promotion.description = promotionEnum.typePromo.LIGHT.description
            promotion.name = promotionEnum.typePromo.LIGHT.name
            promotion.discount = discountTotalOrder
            menu.promotions.push(promotion)
        }

        order.price = parseFloat( priceTotalOrder.toFixed(2) )
        order.discount = parseFloat( discountTotalOrder.toFixed(2))

        return {
            order,
            menu
        }
    }

    /* 'too much cheese' method */
    promotionLotOfCheese (menu: Menu, priceTotalOrder: number, discountTotalOrder: number) {

        const promotionEnum = new PromotionEnum()
        const order = new Order()

        let priceIngredient = 0
        let counter = 0

        menu.items.forEach((item) => {
            if (item.name == promotionEnum.typePromo.A_LOT_OF_CHEESE.item) {
                counter++
                priceIngredient = item.price
            }
        })

        
        if (counter > 2) {
            discountTotalOrder += (Math.floor( counter / 3 ) * priceIngredient)
            priceTotalOrder -= discountTotalOrder
            menu.promotions = new Array()
            const promotion = new Promotion()
            promotion.description = promotionEnum.typePromo.A_LOT_OF_CHEESE.description
            promotion.name = promotionEnum.typePromo.A_LOT_OF_CHEESE.name
            promotion.discount = discountTotalOrder
            menu.promotions.push(promotion)
        }

        order.price = priceTotalOrder
        order.discount = discountTotalOrder
        
        return {
            order,
            menu
        }

    }
}

export { PromotionsController }
