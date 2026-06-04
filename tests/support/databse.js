const { Pool } = require('pg')

const DbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'zombieplus',
    password: 'pwd123',
    port: 5433
}

const pool = new Pool(DbConfig)

async function executeSQL(sqlScript) {
    const client = await pool.connect()

    try {
        const result = await client.query(sqlScript)
        return result
    } catch (error) {
        console.log('Erro ao executar o SQL ' + error)
        throw error
    } finally {
        client.release()
    }
}

module.exports = { executeSQL }
