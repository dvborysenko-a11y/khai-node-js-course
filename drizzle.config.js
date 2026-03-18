export default {
   schema: './src/db/schema.js',
   out: './drizzle',
   driver: "pg",
   dialect: 'postgresql',
   dbCredentials: {
       host: '127.0.0.1',
       port: 5432,
       user: 'nodejs_course_admin',
       password: '123',
       database: 'nodejs_course_database',
       ssl: false,
   },
};
