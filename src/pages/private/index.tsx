import Auth from "@/components/auth/Auth";
import { useAuth } from "@/hooks/auth";

export default function Page() {
  const { user } = useAuth();
  return (
    <Auth>
      <div>private page {user.name}</div>
    </Auth>
  );
}
