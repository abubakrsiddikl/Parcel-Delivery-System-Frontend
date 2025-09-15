import LoginForm from "@/components/module/Authentication/LoginForm";
import RegisterForm from "@/components/module/Authentication/RegisterForm";
import { useState } from "react";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md border-4 shadow-lg rounded-lg p-6">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-5 text-2xl mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`cursor-pointer font-semibold ${
              isLogin
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`cursor-pointer font-semibold ${
              !isLogin
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        {/* Form Section */}
        {isLogin ? <LoginForm /> : <RegisterForm />}

        {/* Toggle Text */}
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
