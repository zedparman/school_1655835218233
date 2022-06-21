module.exports = {
	school_db_dbUrl: (process.env.DB_HOST || 'localhost') + ':27017/school_db',
    publicPath: '../client/dist',
	port: process.env.NODE_PORT || 3000,
    tokenSecret: 'Insert Your Secret Token',
    api: process.env.NODE_API != null ? process.env.NODE_API : '/api'
}