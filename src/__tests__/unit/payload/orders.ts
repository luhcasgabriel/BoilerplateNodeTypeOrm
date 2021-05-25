import { Item } from "../../../entities/Item";
import { Menu } from "../../../entities/Menu";

export const order = { 
    price: 0, 
    discount: 0,    
    
}

export const menuXBacon = <Menu>{
    id: "81d8c4a7-8956-483d-b81d-88d37c140f02",
    items: [
        {
            id: "41acfc3f-47bd-4a13-9090-6799d18bde0f",
            quantity: 1,
            name: "Alface",
            price: 0.4
        },
        {
            id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3",
            quantity: 1,
            name: "Bacon",
            price: 2.0
        }
    ]
};

export const menuXBurger = <Menu>{
    id: "409dc803-ae9c-4097-b48a-aaf9a0ec28dc",
    items: [
        {
            id: "41acfc3f-47bd-4a13-9090-6799d18bde0f",
            quantity: 1,
            name: "Alface",
            price: 0.4
        },
        {
            id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3",
            quantity: 1,
            name: "Bacon",
            price: 2.0
        }
    ]
};

/*
const listMenus = [Menu]
const menuEntityXbacon = new Menu();
menuEntityXbacon.id = menuXBacon.id
menuEntityXbacon.items = []

const itemAlface = new Item();
itemAlface.id = alfaceItem.id
itemAlface.name = alfaceItem.name
itemAlface.quantity = alfaceItem.quantity
menuEntityXbacon.items.push(itemAlface);

const itemBacon = new Item();
itemBacon.id = baconItem.id
itemBacon.name = baconItem.name
itemBacon.quantity = baconItem.quantity
menuEntityXbacon.items.push(itemBacon);


const menuEntityXburger = new Menu();
menuEntityXburger.id = menuXBurger.id
menuEntityXburger.items = []

menuEntityXburger.items.push(itemAlface);
menuEntityXburger.items.push(itemBacon);

listMenus.push(menuEntityXburger);
listMenus.push(menuEntityXbacon);

export {listMenus}


/*
export const menu =  [
        {
            id: "eeb6fe56-6249-43b7-86aa-3d4e7bc03849",
            items: [
                {
                    id: "41acfc3f-47bd-4a13-9090-6799d18bde0f",
                    quantity: 1,
                    name: "Alface",
                    price: 0.4
                },
                {
                    id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3",
                    quantity: 1,
                    name: "Bacon",
                    price: 2.0
                }
            ]
        },
        {
            id: "eeb6fe56-6249-43b7-86aa-3d4e7bc03849",
            items: [
                {
                    id: "41acfc3f-47bd-4a13-9090-6799d18bde0f",
                    quantity: 1,
                    name: "Alface",
                    price: 0.4
                },
                {
                    id: "db911c5b-26e3-4f31-9c7e-2d800eb58ed3",
                    quantity: 1,
                    name: "Bacon",
                    price: 2.0
                }
            ]
        }

    ];
*/

