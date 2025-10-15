import mysql from 'mysql2/promise';

export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  try {
    const conn = await pool.getConnection();
    console.log('✅ MySQL подключён');
    conn.release();
  } catch (err) {
    console.error('❌ Ошибка подключения к MySQL:', err.message);
    return;
  }

  nitroApp.hooks.hook('request', (event) => {
    event.context.$db = pool;
  });

  nitroApp.hooks.hook('close', async () => {
    await pool.end();
    console.log('🔌 Пул MySQL закрыт');
  });
});
