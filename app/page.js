
import UserList from "@/components/UserList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hiya</h1>
      <Link href='./zodder'>zodder</Link>
      <UserList />

    </>
  );
}
