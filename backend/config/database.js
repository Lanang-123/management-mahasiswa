import {createPool} from "mysql"
const db = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_managemhs"
})

db.getConnection((err)=>{
    if(err) throw err;
    console.log("Database berhasil terkoneksi");
})

const executeQuery = (query,arraParams) => {
    return new Promise((resolve,reject)=>{
        try{
            db.query(query,arraParams,(err,data)=>{
                if(err){
                    console.log("Query gagal dijalankan");
                    reject(err)
                }
                resolve(data)
            })
        }catch(err) {
            reject(err)
        }
    })
}

export {executeQuery}