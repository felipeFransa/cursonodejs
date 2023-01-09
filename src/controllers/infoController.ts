import { Request, Response } from 'express'

export const contacts =  (req: Request, res: Response) => {
  res.render('pages/contacts')
}
export const form = (req: Request, res: Response) => {
  res.render('pages/form')
}