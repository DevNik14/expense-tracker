import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { GoolgeSvg } from "@/assets/google";

export default function LoginForm(): React.JSX.Element {
  const [message, setMessage] = useState("");

  const googleLoginClickHandler = () => {
    setMessage("Still in development");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[url('@/assets/auth-bg.jpg')] bg-no-repeat bg-cover bg-center h-full w-full"></div>
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className="flex flex-col w-4/6 text-center gap-y-3">
              <Input
                type="email"
                placeholder="name@example.com"
                className="rounded"
              />
              <Input
                type="password"
                placeholder="Password"
                className="rounded"
              />
              <Button
                className="rounded border-solid border-black"
                variant="outline"
              >
                Login in with email
              </Button>
              <span>Or continue with</span>
              {message !== "" && <p>{message}</p>}
              <Button
                onClick={googleLoginClickHandler}
                className="w-full rounded flex justify-items-center"
                variant="outline"
              >
                <GoolgeSvg />
                <span className="ml-2">Google</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
