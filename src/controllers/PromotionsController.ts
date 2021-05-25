import { Menu } from "../entities/Menu";
import { Promotion } from "../entities/Promotion";
import { PromotionEnum } from "../Enum/PromotionEnum";

interface IOrdersCreate {
    client_name?: string,
    order_number?: number,
    price: number,
    discount: number,
    menu: [Menu]
}


class PromotionsController {


    Promotion({client_name, order_number, price, discount, menu} : IOrdersCreate ) {

    
        menu.forEach((menuItem) => {

            this.PromotionALotOfCheese(menuItem, price , discount);
            this.PromotionALotOfMeat(menuItem, price , discount);
            this.PromotionLight(menuItem, price , discount);
            
        });
     
    }

    PromotionALotOfMeat( menu: Menu, priceTotalOrder: number, discountTotalOrder: number){

        const promotionEnum = new PromotionEnum();

        let priceIngredient = 0;
        let counter = 0;
        menu.items.forEach((item) => {
            
            
            if(item.name == promotionEnum.typePromo.A_LOT_OF_MEAT.name) {
                counter++;
                priceIngredient = item.price;
            }
        });

        if(counter > 2) {
            discountTotalOrder += (Math.floor( counter / 3 ) * priceIngredient);
            priceTotalOrder -= discountTotalOrder;
            menu.promotions = new Array();
            const promotion = new Promotion();
            promotion.description = promotionEnum.typePromo.A_LOT_OF_MEAT.description;
            promotion.name = promotionEnum.typePromo.A_LOT_OF_MEAT.name;
            promotion.discount = discountTotalOrder;
            menu.promotions.push(promotion);
        }


    }

    PromotionLight(menu: Menu, priceTotalOrder: number, discountTotalOrder: number){
        const promotionEnum = new PromotionEnum();

        let num = 0;
        menu.items.forEach((item) => {
            
            
            if(item.name == "Alface") {
                num = 1;
            }
            else if(item.name == "Bacon") {
                num = 0;
            }

        });

        if(num == 1) {
            discountTotalOrder += ((priceTotalOrder * 10) / 100) ;
            priceTotalOrder -= discountTotalOrder;
            menu.promotions = new Array();
            const promotion = new Promotion();
            promotion.description = promotionEnum.typePromo.LIGHT.description;
            promotion.name = promotionEnum.typePromo.LIGHT.name;
            promotion.discount = discountTotalOrder;
            menu.promotions.push(promotion);
        }
    }


    PromotionALotOfCheese(menu: Menu, priceTotalOrder: number, discountTotalOrder: number){

        const promotionEnum = new PromotionEnum();

        let priceIngredient = 0;
        let counter = 0;
        menu.items.forEach((item) => {
            
            
            if(item.name == promotionEnum.typePromo.A_LOT_OF_CHEESE.name) {
                counter++;
                priceIngredient = item.price;
            }
        });

        if(counter > 2) {
            discountTotalOrder += (Math.floor( counter / 3 ) * priceIngredient);
            priceTotalOrder -= discountTotalOrder;
            menu.promotions = new Array();
            const promotion = new Promotion();
            promotion.description = promotionEnum.typePromo.A_LOT_OF_CHEESE.description;
            promotion.name = promotionEnum.typePromo.A_LOT_OF_CHEESE.name;
            promotion.discount = discountTotalOrder;
            menu.promotions.push(promotion);
        }


    }


    
    
    
   
}

export { PromotionsController } 