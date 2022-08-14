import {executeQuery} from "../config/database.js"

const getAllMahasiswa = async (req,res) => {
    try{
        let dataMahasiswa = await executeQuery("SELECT * FROM tb_mahasiswa",[]);
        res.status(200).json(dataMahasiswa);
    }catch(err) {
        res.status(400).json(err)
    }
}

const getMahasiswaByNim = async(req,res)=>{
    const {nim} = req.params;

    try{
        let dataMahasiswa = await executeQuery("SELECT * FROM tb_mahasiswa WHERE nim = ?",[nim]);
        res.status(200).json(dataMahasiswa);
    }catch(err) {
        res.status(400).json(err);
    }
}

const insertDataMahasiswa = async (req,res)=>{
    const {nama_mahasiswa,nim,kelas} = req.body
    try{
        let insertData = await executeQuery("INSERT INTO tb_mahasiswa (nama_mahasiswa,nim,kelas) VALUES (?,?,?)",[nama_mahasiswa,nim,kelas]);

        res.status(201).json({"message" : "Data berhasil ditambahkan"})
    }catch(err) {
        res.status(400).json(err)
    }
}

const updateDataMahasiswa = async (req,res) => {
    const {id} = req.params;
    const {nama_mahasiswa,nim,kelas} = req.body;

   try{
        let dataId = await executeQuery("SELECT * FROM tb_mahasiswa WHERE id_mahasiswa = ? ",[id]);
        console.log(dataId)
        if(dataId.length > 0) {
            dataId = await executeQuery("UPDATE tb_mahasiswa SET nama_mahasiswa = ?,nim = ?,kelas = ? WHERE id_mahasiswa = ?",[nama_mahasiswa,nim,kelas,id]);
            res.status(200).json({"message" : "Data berhasil diupdate"})
        }else {
            res.status(400).json({"message":"Data tidak ditemukan"})
        }

   }catch(err) {
        res.status(400).json(err)
   }
}

const deleteMahasiswa = (req,res) => {
    const {id} = req.params;
    
    let sql = "DELETE FROM tb_mahasiswa WHERE id_mahasiswa = ?";
    executeQuery(sql,[id])
        .then(()=>res.status(200).json({"message":"Data berhasil dihapus"}))
        .catch((err)=>res.status(400).json(err))
}



export {getAllMahasiswa,insertDataMahasiswa,getMahasiswaByNim,updateDataMahasiswa,deleteMahasiswa};