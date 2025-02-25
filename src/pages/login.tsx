import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
