const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect( process.env.DB_CNN,
            //'mongodb+srv://mean_user:15H4KQYwFTF4CG5R@cluster0.icvyz.mongodb.net/hospitaldb', 
        //{
        //userNewUrlParser: true,
        //useUnifiedTopology: true,
        //UseCreateIndex: true
        // }
    );
    console.log('DB Online');
  
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos o algo asi');
    }
  
}

module.exports = {
    dbConnection
}