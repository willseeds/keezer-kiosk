import { createClient } from "@libsql/client";

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

const result = await client.execute("SELECT * FROM stylelist order by stylecolor ASC");

console.log("Styles:", result.rows);