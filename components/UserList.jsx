"use client";

import { trpc } from "@/lib/trpc/trpcClient";

export default function UserList() {
  const data = trpc.userList.useQuery();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
