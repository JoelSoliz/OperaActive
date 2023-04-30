import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import NavbarApp from "@/components/NavbarApp";
import useSession from "@/hooks/useSession";

export default function Login() {
  const loading = useSession((state) => state.loading);
  const login = useSession((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggerIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
    setLoggerIn(true);
  };

  useEffect(() => {}, [loading]);

  return (
    <main>
      <NavbarApp />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-80 h-[270px] bg-slate-200 rounded-lg flex flex-col font-serif p-4">
          <div className="font-bold text-xl text-center mb-4">
            Iniciar sesión
          </div>
          <form
            className="flex flex-col gap-4 justify-center"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Correo electrónico"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {loading ? (
              <span className="text-black font-serif text-center">
                Iniciando sesión...
              </span>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="bg-slate-800"
              >
                Login
              </Button>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
