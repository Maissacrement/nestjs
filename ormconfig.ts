export = {
    type: 'postgres',
    host: process.env.DB_CONFIG_HOST,
    port: process.env.DB_CONFIG_PORT,
    username: process.env.DB_CONFIG_USERNAME,
    password: process.env.DB_CONFIG_PASSWORD,
    database: process.env.DB_CONFIG_NAME,
    synchronize: true,
    logging: true,
    entities: ['./src/**/*.entity.ts', './dist/**/*.entity.js'],
};
