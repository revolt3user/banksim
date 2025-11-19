import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets';

export default function LoginPage() {
  const navigate = useNavigate();
  // Estado para manejar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Configuración de colores extraída del HTML original para referencia:
  // primary:              #004A99
  // background-light:     #F5F7FA
  // background-dark:      #101622
  // text-light:           #1C1C1E
  // text-dark:            #F5F7FA
  // text-secondary-light: #6b7280
  // text-secondary-dark:  #9ca3af
  // input-bg-light:       #ffffff
  // input-bg-dark:        #1c1f27
  // input-border-light:   #d1d5db
  // input-border-dark:    #3b4354

  return (
    <>
      {/* Inyección de estilos de fuentes e iconos */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 24px;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#F5F7FA] dark:bg-[#101622] group/design-root overflow-x-hidden font-['Manrope']">
        <div className="flex flex-col items-center justify-center w-full grow px-4 py-8">
          <div className="w-full max-w-md">
            
            {/* Logo / Icon */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center h-16 w-16 bg-[#004A99] rounded-full">
                <div className='text-white text-[36px]' dangerouslySetInnerHTML={{ __html: assets.svg.accountBalance }} />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[#1C1C1E] dark:text-[#F5F7FA] tracking-tight text-3xl font-bold leading-tight text-center pb-8">
              Bienvenido de nuevo
            </h1>

            {/* Form Fields */}
            <div className="flex w-full flex-col gap-4">
              
              {/* Usuario Input */}
              <label className="flex flex-col w-full">
                <p className="text-[#1C1C1E] dark:text-[#F5F7FA] text-base font-medium leading-normal pb-2">
                  Usuario o Correo Electrónico
                </p>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1C1C1E] dark:text-[#F5F7FA] focus:outline-0 focus:ring-2 focus:ring-[#004A99]/50 border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] h-14 placeholder:text-[#6b7280] dark:placeholder:text-[#9ca3af] p-[15px] text-base font-normal leading-normal" 
                  placeholder="Introduce tu usuario o correo" 
                  type="text"
                />
              </label>

              {/* Password Input */}
              <label className="flex flex-col w-full">
                <p className="text-[#1C1C1E] dark:text-[#F5F7FA] text-base font-medium leading-normal pb-2">
                  Contraseña
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input 
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1C1C1E] dark:text-[#F5F7FA] focus:outline-0 focus:ring-2 focus:ring-[#004A99]/50 border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] h-14 placeholder:text-[#6b7280] dark:placeholder:text-[#9ca3af] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal" 
                    placeholder="Introduce tu contraseña" 
                    type={showPassword ? "text" : "password"} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#6b7280] dark:text-[#9ca3af] flex border border-[#d1d5db] dark:border-[#3b4354] bg-[#ffffff] dark:bg-[#1c1f27] items-center justify-center px-4 rounded-r-lg border-l-0 focus:outline-0 focus:ring-2 focus:ring-[#004A99]/50 cursor-pointer" 
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <div onClick={()=>{navigate("/account");}} className="py-6">
              <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-[#004A99] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#004A99]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004A99] focus:ring-offset-[#F5F7FA] dark:focus:ring-offset-[#101622] transition-colors">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col items-center gap-4 text-center">
              <a onClick={()=>{navigate("/register");}} className="text-[#004A99] text-sm font-medium hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
              <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm">
                ¿No tienes cuenta? <a onClick={()=>{navigate("/register");}} className="text-[#004A99] font-medium hover:underline">Regístrate</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}