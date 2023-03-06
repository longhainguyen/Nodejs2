import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomepage = async(rep, res) => {
    try {
        let data = await db.User.findAll();
        console.log('------------');
        console.log(data);
        console.log('------------');
        return res.render('hompage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getAboutMe = (rep, res) => {
    return res.render('test/aboutme.ejs');
} 

let getCRUD = (rep, res) => {
    return res.render("./crud/crud.ejs")
}

let getPostCRUD = async (rep, res) => {
    let message = await CRUDservice.createUserCRUD(rep.body)
    return res.send("post crud from server")
}

let displayCRUD = async (rep, res) => {
    let message = await CRUDservice.displayUserCRUD();
    return res.render("./crud/display-crud.ejs", {
        data:message
    })
}

let getEditCRUB = async(rep, res) => {
    let user_id = rep.query.id
    let getInfoByID = await CRUDservice.getInfoUserByID(user_id);
    if(user_id) {
        console.log(getInfoByID)
    }else {
        console.log("Not found ID")
    }
    res.send("Hello from edit crud")
}

module.exports = {
    getHomepage:getHomepage,
    getAboutMe:getAboutMe,
    getCRUD:getCRUD,
    getPostCRUD:getPostCRUD,
    displayCRUD:displayCRUD,
    getEditCRUB:getEditCRUB,
}