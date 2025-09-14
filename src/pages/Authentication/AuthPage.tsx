import LoginForm from "@/components/module/Authentication/LoginForm";
import RegisterForm from "@/components/module/Authentication/RegisterForm";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {isLogin ? <LoginForm /> : <RegisterForm />}

        <div className="mt-4 text-center">
          {isLogin ? (
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </button>
            </p>
          ) : (
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
