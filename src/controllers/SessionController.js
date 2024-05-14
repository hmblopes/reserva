/*
index(listAll): listagem de sessões
store(add): criar uma sessão
show(list): Quando queremos listar uma unica sessão
update: alterar alguma sessão
destroy(delete): Quando queremos deletar uma sessão
*/

import User from '../models/User'
import * as Yup from 'yup'

class SessionController {
    async store(req,res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        })
        const { email } = req.body
        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Falha na validação'})
        }
        let user = await User.findOne({ email })
        if(!user) {
            user = await User.create({ email })
        }
        return res.json(user)
    }
}

export default new SessionController()