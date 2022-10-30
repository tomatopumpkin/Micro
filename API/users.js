const { DB } = require('../config/admin.config');

exports.getUser = async (req , res ) => {
    const userRef = DB.collection("users");

    try {
        userRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }))
            return res.status(200).json(data);
        })
    } catch (error) {
        return res.status(500).json({message:`Somthing failed : ${error}`})
    }
}