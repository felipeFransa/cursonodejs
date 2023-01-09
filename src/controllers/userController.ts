import { Request, Response } from 'express'

export const nome =  (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  res.render('pages/nome', { nome })
}
export const ageGet = (req: Request, res: Response) => {
  res.render('pages/age')
}
export const agePost =  (req: Request, res: Response) => {
  let showAge: boolean = false
  let age: number = 0;
  if(req.body.ano){
    let yearOfBirth: number = parseInt(req.body.ano as string);
    let currentYear: number = new Date().getFullYear();
    age = currentYear - yearOfBirth;
    showAge = true;
  }
  res.render('pages/age', { age, showAge })
}