import pool from "../configs/connectDB";

let allUser = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
    return res.status(200).json({
        data: rows
    })
}
let detailUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [id]);

}
let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName,lastName,email,address,ngay) values(?,?,?,?,?)', [firstName, lastName, email, address]);
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update users set firstName=?,lastName=?,email=?,address=? where id=?', [firstName, lastName, email, address, id]);
}
let deleteUser = async (req, res) => {
    let userId = req.params.id;
    await pool.execute('delete from users where id =?', [userId]);
}

module.exports = {
    allUser, detailUser, createNewUser, updateUser, deleteUser
}