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

    //
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
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="text" name="name" label="Username" size="lg" />
            <Input type="text" name="image" label="Image" size="lg" />
            <Input type="email" name="email" label="Email" size="lg" />
            <Input type="password" name="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </form>

      <br />
      <br />
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
    </>
  );
}

export default App;
