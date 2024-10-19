import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { turso } from "@/lib/turso";

export const getServerSideProps = (async () => {
    const { rows } = await turso.execute("SELECT * FROM stylelist order by stylecolor ASC");

    return {
      props: {
        rows,
      },
    };
  }) satisfies GetServerSideProps<{ rows: any[] }>;

  export default function Page({
    rows,
  }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
      <ul>
        {rows.map((row) => (
          <li key={row.id}>{row.id}</li>
        ))}
      </ul>
    );
  }

