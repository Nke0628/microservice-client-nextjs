import { useAuth } from "@/hooks/auth";

export default function Page() {
  const { user } = useAuth();
  return <div>private page {user.name}</div>;
}
