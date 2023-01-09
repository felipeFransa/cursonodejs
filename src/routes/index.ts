import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router(); 

router.get('/', HomeController.home);
router.get('/contato', InfoController.contacts)
router.get('/formulario', InfoController.form)
router.get('/nome', UserController.nome)
router.get('/idade', UserController.ageGet)
router.post('/idade', UserController.agePost)

export default router;