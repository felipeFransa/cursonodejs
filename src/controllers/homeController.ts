import { Request, Response } from 'express';
import { Product } from '../models/Products';

export const home = (req: Request, res: Response) => {
  let listText: string[] = [];
  let user = {
    firstName: 'Felipe',
    age: 25
  }
  let showOld: boolean = false;
  if(user.age > 18){
    showOld = true;
  }
  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);
  res.render('pages/home', { 
    user, 
    showOld,
    listText,
    products: list,
    expensives: expensiveList
  });
}