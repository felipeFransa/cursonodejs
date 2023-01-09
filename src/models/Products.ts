type Product = {
  title: string,
  price: number
}

const data: Product[] = [
  {title: 'Celular', price: 10},
  {title: 'Notebook', price: 25},
  {title: 'TV', price: 20},
  {title: 'Shom', price: 5},
]

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter(item => item.price >= price);
  }
}