import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CrearCuentaPage() {
  const navigate = useNavigate();
  // Estado para alternar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Referencia de colores mapeados:
  // primary:          #135bec
  // background-light: #f6f6f8
  // background-dark:  #101622
  // text-light:       #333333
  // text-dark:        #e0e0e0
  // subtle-light:     #666666
  // subtle-dark:      #a0a0a0
  // border-light:     #d1d5db
  // border-dark:      #3b4354
  // input-bg-light:   #ffffff
  // input-bg-dark:    #1c1f27
  // error:            #D9534F

  return (
    <>
      {/* Inyección de estilos globales necesarios (Fuentes e Iconos) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 20px;
        }
      `}</style>

      <div className="flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 bg-[#f6f6f8] dark:bg-[#101622] font-['Manrope'] text-[#333333] dark:text-[#e0e0e0]">
        <div className="w-full max-w-md">
          
          {/* Header */}
          <header className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-[#135bec] rounded-full size-16 mb-4">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '36px' }}>
                account_balance
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#333333] dark:text-white">
              Crea tu cuenta
            </h1>
            <p className="text-[#666666] dark:text-[#a0a0a0] mt-2">
              Empieza a gestionar tus finanzas hoy mismo.
            </p>
          </header>

          {/* Main Form */}
          <main className="flex flex-col gap-4">
            
            {/* Nombre Completo */}
            <div className="flex flex-col">
              <label className="text-sm font-medium leading-normal mb-1 text-[#666666] dark:text-[#a0a0a0]" htmlFor="full-name">
                Nombre completo
              </label>
              <div className="relative">
                <span className="material-symbols-outlined text-[#666666] dark:text-[#a0a0a0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  person
                </span>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#135bec]/50 border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] h-12 placeholder:text-[#666666] dark:placeholder:text-[#a0a0a0] pl-10 pr-3 text-base" 
                  id="full-name" 
                  placeholder="Ingresa tu nombre completo" 
                  type="text"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="flex flex-col">
              <label className="text-sm font-medium leading-normal mb-1 text-[#666666] dark:text-[#a0a0a0]" htmlFor="email">
                Correo electrónico
              </label>
              <div className="relative">
                <span className="material-symbols-outlined text-[#666666] dark:text-[#a0a0a0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  mail
                </span>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#135bec]/50 border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] h-12 placeholder:text-[#666666] dark:placeholder:text-[#a0a0a0] pl-10 pr-3 text-base" 
                  id="email" 
                  placeholder="tu.correo@ejemplo.com" 
                  type="email"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div className="flex flex-col">
              <label className="text-sm font-medium leading-normal mb-1 text-[#666666] dark:text-[#a0a0a0]" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined text-[#666666] dark:text-[#a0a0a0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  lock
                </span>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#135bec]/50 border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] h-12 placeholder:text-[#666666] dark:placeholder:text-[#a0a0a0] pl-10 pr-10 text-base" 
                  id="password" 
                  placeholder="Crea una contraseña segura" 
                  type={showPassword ? "text" : "password"}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="material-symbols-outlined text-[#666666] dark:text-[#a0a0a0] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:text-[#135bec] transition-colors"
                >
                  {showPassword ? 'visibility' : 'visibility_off'}
                </button>
              </div>
              
              {/* Password Strength Indicators */}
              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="h-full w-1/4 rounded-full bg-[#D9534F]"></div>
                </div>
                <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-1 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>

            {/* Confirmar Contraseña */}
            <div className="flex flex-col">
              <label className="text-sm font-medium leading-normal mb-1 text-[#666666] dark:text-[#a0a0a0]" htmlFor="confirm-password">
                Confirmar contraseña
              </label>
              <div className="relative">
                <span className="material-symbols-outlined text-[#666666] dark:text-[#a0a0a0] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  lock
                </span>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#135bec]/50 border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] h-12 placeholder:text-[#666666] dark:placeholder:text-[#a0a0a0] pl-10 pr-3 text-base" 
                  id="confirm-password" 
                  placeholder="Confirma tu contraseña" 
                  type="password"
                />
              </div>
            </div>

            {/* Términos y Condiciones */}
            <div className="flex items-start mt-2">
              <input 
                className="h-5 w-5 rounded border-[#d1d5db] dark:border-[#3b4354] text-[#135bec] bg-[#ffffff] dark:bg-[#1c1f27] focus:ring-[#135bec]/50 accent-[#135bec]" 
                id="terms" 
                type="checkbox"
              />
              <label className="ml-3 text-sm text-[#666666] dark:text-[#a0a0a0]" htmlFor="terms">
                Acepto los <a className="font-semibold text-[#135bec] hover:underline" href="#">Términos y Condiciones</a> y la <a className="font-semibold text-[#135bec] hover:underline" href="#">Política de Privacidad</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button className="flex w-full items-center justify-center rounded-lg bg-[#135bec] h-12 px-6 text-base font-semibold text-white shadow-sm hover:bg-[#135bec]/90 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:ring-offset-2 dark:focus:ring-offset-[#101622] mt-4 transition-all active:scale-[0.99]">
              Crear Cuenta
            </button>

          </main>

          {/* Footer */}
          <footer className="mt-8 text-center">
            <p className="text-sm text-[#666666] dark:text-[#a0a0a0]">
              ¿Ya tienes una cuenta? <a onClick={()=>{navigate("/");}}  className="font-semibold text-[#135bec] hover:underline">Inicia sesión</a>
            </p>
          </footer>

        </div>
      </div>
    </>
  );
}