import db from '../models';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10)

let createUserCRUD = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleid,
                phonenumber: data.phonenumber
            })
            resolve("create a new user successful")
        } catch (e) {
            reject(e)
        }
    })
}


let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}

let displayUserCRUD = async() => {
    return new Promise( async (resolve, reject) => {
        try {
            let dataOfUser = await db.User.findAll({
                raw: true,
            });
            resolve(dataOfUser)
        } catch (error) {
            reject(error)
        }
    })
}

let getInfoUserByID = async(user_id) => {
    return new Promise( async(resolve, reject) => {
        try {
            let inFoUser =await db.User.findOne({
                where:{id : user_id },
                raw:true,
            });
            if(inFoUser) {
                resolve(inFoUser)
            }else {
                resolve([])
            }
        } catch (e) {
            reject(e)
        }
    })
} 

module.exports = {
    createUserCRUD:createUserCRUD,
    displayUserCRUD:displayUserCRUD,
    getInfoUserByID:getInfoUserByID,
}