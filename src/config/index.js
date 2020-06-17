import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  DB: process.env.DB,
  PORT: process.env.process,
  SECRET: process.env.SECRET
};
