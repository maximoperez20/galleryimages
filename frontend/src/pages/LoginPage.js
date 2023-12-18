import React from "react";
import "./Login.css";
function LoginPage() {
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
              <p class="text-muted mb-2">Ingrese al panel de administrador con su usuario.</p>
              <div>
                <form method="post">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInput"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <label class="form-label">Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    id="passwordInput"
                    placeholder="***********"
                  />
                  <button type="submit" class="btn btn-primary">
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
