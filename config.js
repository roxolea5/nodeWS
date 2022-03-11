const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://rotz05:rotz050990@cluster0.qgnvy.mongodb.net/NodeAPI',
    port: process.env.PORT || 3000, 
    host: process.env.HOST || 'http://localhost', 
    app: process.env.APP || '/app',
    publicRoute: process.env.PUBLIC_ROUTE || 'app'
}

module.exports = config;