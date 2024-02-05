"use client";

import { trpc } from "@/lib/trpc/trpcClient";

export default function UserList() {
  const data = trpc.user2.useQuery();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
