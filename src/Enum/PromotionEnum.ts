class PromotionEnum {
    typePromo = {
        LIGHT:           { value: 1, name: 'Light',        item: "",                     description: 'Se o lanche tem alface e não tem bacon, ganha 10% de desconto' },
        A_LOT_OF_MEAT:   { value: 2, name: 'Muita carne',  item: 'Hambúrguer de carne' , description: 'A cada 3 porções de carne o cliente só paga 2' },
        A_LOT_OF_CHEESE: { value: 3, name: 'Muito queijo', item: 'Queijo',               description: 'A cada 3 porções de queijo o cliente só paga 2' },
    }
}

export { PromotionEnum }
