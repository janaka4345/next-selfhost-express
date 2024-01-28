import { userSchema } from "@/zSchema/user";

export default function Zodder() {
  const user = {
    username: "wds",
    password: "fdasffadsfd",
    confirmPassword: "fdasffadsfd",
    age: 2,
    remeber: true,
  };
  const validateField = userSchema.safeParse(user);
  console.log(validateField);

  return (
    <>
      <div>Zodder</div>
    </>
  );
}
