interface IItem {
    id: string,
    brand: string,
    title: string,
    desc: string,
    price: string,
    likes?: string,
    size: string,
    stocked: string,
    photo: any
}
// IMPORTANT : Il faut créer une interface IProduct pour placer toute 
//             l'interface IItem afin qu'elle puisse passer en props 
//             sous forme de propriété=valeur
interface IProduct {
    product: IItem
}

interface IPrice {
    price: string;
}

interface ILikes {
    likes?: string;
}

export { IProduct, IPrice, ILikes, IItem }