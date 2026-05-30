'use strict';

require('../bootstrap');

const dbHost = process.env.DB_HOST || '';
const sslEnabled = process.env.DB_SSL === 'true' || dbHost.includes('neon.tech');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: dbHost,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  storage: './__tests__/database.sqlite',
  dialectOptions: sslEnabled
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
