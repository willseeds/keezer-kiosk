import { turso } from "@/lib/turso";

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

