import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { fetchLogIn } from "../services/authServices";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.loggedIn);

  console.log("token", token);
  const handleLogin = (event) => {

    event.preventDefault();
    fetchLogIn({ user, password }).then((response) => {
      console.log(response);
      if (response.success && response.token) {
        console.log("dispatched");
        dispatch(
          authActions.login({
            token: response.token,
          })
        );
        navigate("/admin");
      }
    });

  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };
  return (
    <div class="login">
      <div class="container">
        <div class="login-container d-md-flex align-items-center justify-content-between">
          <div class="box-1 mt-md-0 mt-5 d-none d-lg-block d-xl-block d-md-block">
            <img
              src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              class=""
              alt=""
            />
          </div>
          <div class=" box-2 d-flex flex-column h-100">
            <div class="mt-5 p-2">
              <p class="mb-1 h-1">Inicio de sesión.</p>
              <p class="text-muted mb-2">
                Ingrese al panel de administrador con su usuario.
              </p>
              <div>
                <form method="post">
                  <label class="form-label">Username</label>
                  <input
                    class="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleUserChange}
                    value={user}
                  />
                  <label class="form-label">Contraseña</label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="***********"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
            <div class="mt-auto">
              <p class="footer text-muted mb-0 mt-md-0 mt-4">
                Galeria de Fotos @2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
}

export default LoginPage;
