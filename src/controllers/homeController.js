import db from '../models/index';

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

module.exports = {
    getHomepage:getHomepage,
    getAboutMe:getAboutMe,
}