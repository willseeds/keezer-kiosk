import { createClient } from "@libsql/client";
import { turso } from "@/lib/turso";

const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
});

export default async function Page() {
  const { rows } = await turso.execute("SELECT * FROM stylelist order by stylecolor ASC");

  return (
    <ul>
      {rows.map((row) => (
        <li key={row.id}>{row.id}</li>
      ))}
    </ul>
  );
}


