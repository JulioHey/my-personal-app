require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});


module.exports = {
    type: process.env.DB_DIALECT || "postgres",
    username: process.env.DB_USER,
    database: process.env.DB_LOCATION || "postgres",
    password: process.env.DB_PASS,
    logging: true,
    entities: [
       "src/models/**/*.model.ts"
    ],
    migrations: [
       "src/migrations/**/*.migration.ts"
    ],
    cli: {
       entitiesDir: "src/models/**/*.model.ts",
       migrationsDir: "src/migrations/**/*.migration.ts"
    }
}