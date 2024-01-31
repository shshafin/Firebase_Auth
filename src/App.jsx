import "./App.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import toast, { Toaster } from "react-hot-toast";
import useAuth from "./Hook/useAuth";

function App() {
  const { googleLogin, emailLogin } = useAuth();

  // google sign in
  const handleLogin = (media) => {
    media()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // email password register
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.name.value;
    const image = e.target.image.value;
    console.log(email, password, username, image);

    // password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // register
    emailLogin(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Registration successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-around h-[80vh] items-center">
      <Toaster />
      <div>
        <form onSubmit={handleSubmit}>
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign Up
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input type="text" name="name" label="Username" size="lg" />
              <Input type="text" name="image" label="Image" size="lg" />
              <Input type="email" name="email" label="Email" size="lg" />
              <Input
                type="password"
                name="password"
                label="Password"
                size="lg"
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Sign Up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>

      <div>
        <Button
          onClick={() => handleLogin(googleLogin)}
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}

export default App;
