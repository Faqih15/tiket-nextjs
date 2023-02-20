import mysql from "mysql";
export default async function handler(req, res) {

    const agusconnection = await mysql.createConnection({
        host: "localhost",
        database: "test_datakereta",
        // port: 3306,
        user: "root",
        password: "gaskencoy",
        // socketPath: "",
    })


  res.status(200).json({ name: "Agus Mendo" });
}
