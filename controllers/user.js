const userModels = require('../models/user')

const getLogin = async (req, res, next) => {
    res.render('login')
}

const postLogin = async (req, res, next) => {

    const {
        username,
        password
    } = req.body

    const findAccount = await userModels.find({ username : username, password : password})
    // console.log('findAccount.password ', findAccount[0].username)

    // console.log(req.body.username)

    if (req.body.username === findAccount[0].username && req.body.password === findAccount[0].password)
    {
        console.log('login success')
    }

    else {
        console.log('login fail')
    }

}

const getRegister = async (req, res, next) => {
    res.render('register')
}

const postRegister = async (req, res, next) => {
    console.log(req.body)

    const {
        username,
        password
    } = req.body

    const accountData = {
        username : username,
        password : password
    }

    const addAccount = new userModels(accountData)
    addAccount.save()

    res.send('success')
}

module.exports = {
    getLogin,
    postLogin,
    getRegister,
    postRegister
}