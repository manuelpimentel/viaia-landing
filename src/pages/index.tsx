import { Link } from "@heroui/link";
import { Button, Chip } from "@heroui/react";
import posthog from "posthog-js";

import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import DefaultLayout from "@/layouts/default";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
// import { siteConfig } from "@/config/site";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import MobileOnly from "@/components/MobileOnly";
import ComparisonSection from "@/components/ComparisonSection";
import { PricingTiers } from "@/components/pricing";

const textsVelocity = [
  "Alojamientos Experiencias Actividades Transporte Organización",
  "Restaurantes Bares Consejos Cultura Turismo Aventura",
];

const textsRotating = [
  "Atención 24/7",
  "Ten un perfil web profesional",
  "Cómo atiendes a tus clientes",
  "Cómo te descubren",
  "Control total de lo que ofreces",
  "Tus reservas",
  "Atención multilenguaje",
  "Productos listos para mostrar",
  "Tu tiempo",
];

export default function IndexPage() {
  return (
    <MobileOnly>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 md:py-4 overflow-x-hidden">
          <div className="inline-block w-full mt-52 text-center justify-center">
            <div className="bg-gradient-to-b from-[#fff] to-[#e9e9e9] w-full pb-10 px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center py-10">
                  <SplitText
                    className="text-5xl font-bold md:text-5xl lg:text-6xl"
                    delay={50}
                    text="¡Hola, servicio!"
                  />
                </div>

                <div className="text-center mt-12">
                  <div className="text-4xl md:text-4xl lg:text-5xl flex flex-col items-center justify-center">
                    <GradientText
                      animationSpeed={10}
                      className="custom-class max-w-3xl mx-auto"
                      colors={[
                        "#2E005D",
                        "#5C0087",
                        "#8A0087",
                        "#FF6200",
                        "#FF8000",
                      ]}
                      showBorder={false}
                    >
                      ¿Alguna vez perdiste un cliente por una respuesta lenta o
                      confusa?
                    </GradientText>
                    <br />
                    <div className="text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl">
                      <p>
                        <b>Viaia</b> organiza tu información para que no vuelva
                        a pasar.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col items-center gap-6">
                    {/* Botón principal - Web App */}
                    <div className="mt-12 flex flex-col items-center gap-6 w-full">
                      <div
                        className="w-full glowing-border group hover:scale-[1.02] active:scale-95 transition-all duration-300"
                        style={
                          {
                            "--surface": "white",
                            "--glow-intensity": "0.23",
                            "--border-width": "1px",
                          } as React.CSSProperties
                        }
                      >
                        <Button
                          as="a"
                          className="w-full bg-[rgba(243,243,243,1)] dark:bg-[#808080] backdrop-blur-xl font-medium tracking-wide border-none"
                          href="https://app.esviaia.com/details/c363b451-6815-4395-88d6-f6b08fe27447"
                          radius="full"
                          size="lg"
                          style={{
                            color: "black",
                            height: "56px",
                          }}
                        >
                          <span
                            className="flex items-center gap-3 relative z-10"
                            style={{ fontWeight: "bold" }}
                          >
                            <span className="flex">
                              Vive una nueva forma de atención ✨
                            </span>
                          </span>
                        </Button>
                      </div>
                    </div>

                    {/* Botones deshabilitados - App Store y Google Play */}
                    <Chip
                      className="relative overflow-hidden cursor-pointer transition-all hover:scale-105 bg-gray-50 border-2 border-gray-200 mx-auto"
                      style={{
                        padding: "16px 24px",
                        borderRadius: "999px",
                      }}
                    >
                      <ShinyText
                        className="text-gray-800 font-semibold text-lg"
                        disabled={false}
                        speed={10}
                        text="Apps móviles en camino"
                      />
                    </Chip>

                    <div className="flex flex-row gap-4 justify-center items-center w-full">
                      <button
                        disabled
                        className="opacity-70 cursor-not-allowed bg-transparent border-0 p-0"
                      >
                        <img
                          alt="Get it on Google Play"
                          className="h-10 w-auto"
                          src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                        />
                      </button>
                      <button
                        disabled
                        className="opacity-70 cursor-not-allowed bg-transparent border-0 p-0"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="Download on the App Store"
                          className="h-10 w-auto"
                          src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        />
                      </button>
                    </div>

                    <div className="pt-8 flex flex-col items-center">
                      <SplitText
                        className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto"
                        delay={50}
                        text="La claridad para tu cliente lo cambia todo."
                      />
                      <p className="text-4xl mt-4">✅</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 w-full py-6">
              <div className="flex flex-col items-center justify-center px-4 gap-10">
                <div className="text-4xl pt-8 md:text-4xl lg:text-5xl text-center">
                  <GradientText
                    animationSpeed={10}
                    className="custom-class"
                    colors={[
                      "#2E005D",
                      "#5C0087",
                      "#8A0087",
                      "#FF6200",
                      "#FF8000",
                    ]}
                    showBorder={false}
                  >
                    Todo empieza con una conversación clara
                  </GradientText>
                  <p>💬</p>
                </div>

                <div className="text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl">
                  <p>
                    Tus clientes preguntan, <b>Viaia</b> responde al instante,
                    claro y profesional. Disponible siempre, incluso cuando tú
                    no estás.
                  </p>
                </div>

                {/* Ejemplos de prompts */}
                <div className="flex flex-col items-start justify-center px-6 gap-6 text-left">
                  <div className="bg-white border border-neutral-300 rounded-2xl shadow-sm p-6 max-w-2xl w-full">
                    <p className="font-semibold mb-4 text-neutral-600 text-base md:text-lg">
                      Ejemplos de preguntas que hacen tus clientes:
                    </p>
                    <ul className="space-y-3 text-neutral-800 text-base md:text-lg">
                      <li>💬 ¿Qué incluye este servicio?</li>
                      <li>📅 ¿Tienen disponibilidad para esta fecha?</li>
                      <li>💰 ¿Cuánto cuesta y que formas de pago hay?</li>
                      <li>📍 ¿Dónde están ubicados?</li>
                      <li>🕒 ¿Cuánto dura la experiencia?</li>
                      <li>📄 ¿Qué debo saber antes de reservar?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-orange-50 w-full pt-6">
              <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl">
                <div className="text-4xl  md:text-4xl lg:text-5xl text-center">
                  <GradientText
                    animationSpeed={10}
                    className="custom-class"
                    colors={[
                      "#2E005D",
                      "#5C0087",
                      "#8A0087",
                      "#FF6200",
                      "#FF8000",
                    ]}
                    showBorder={false}
                  >
                    Hazte fácil de conocer
                  </GradientText>
                  <p>🔍</p>
                </div>
                <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl px-4">
                  <p>Que te encuentren y te entiendan en segundos. 🤓</p>
                </div>
              </div>

              <div className="flex justify-center items-center flex-col gap-4 mt-7 pb-4 px-6 w-full max-w-3xl mx-auto">
                <AnimatedContent>
                  <div className="flex justify-center w-full">
                    <img
                      alt="Chat interface illustration"
                      className="w-3/4 max-w-md"
                      src="/MensajeUser.png"
                    />
                  </div>
                </AnimatedContent>
              </div>
            </div> */}

            <div className="bg-gradient-to-b from-[#fff] to-[#f4f4f4] w-full pb-10 px-6">
              <div className="text-4xl pt-6 md:text-4xl lg:text-5xl flex flex-col items-center justify-center text-center">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={[
                    "#2E005D",
                    "#5C0087",
                    "#8A0087",
                    "#FF6200",
                    "#FF8000",
                  ]}
                  showBorder={false}
                >
                  Siempre tu servicio al alcance de tus clientes.
                </GradientText>
                <p>⚡️</p>
                <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl px-4">
                  <p>
                    Tu servicio listo, claro y profesional, sin perder tiempo ni
                    clientes.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-7">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/dash.png"
                  />
                </AnimatedContent>
              </div>
            </div>

            <div className="bg-[#fff] pb-10 px-6">
              <div className="text-4xl pt-6 md:text-4xl lg:text-5xl flex flex-col items-center justify-center text-center">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={[
                    "#2E005D",
                    "#5C0087",
                    "#8A0087",
                    "#FF6200",
                    "#FF8000",
                  ]}
                  showBorder={false}
                >
                  Atención 24/7 en todos los idiomas
                </GradientText>
                <p>🌎</p>
                <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl px-4">
                  <p>
                    Tus clientes siempre reciben respuestas claras y rápidas.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70 rounded-md"
                    src="/DETAIL.png"
                  />
                </AnimatedContent>
              </div>
              <div className="flex justify-center mt-7">
                <ScrollVelocity
                  className="custom-scroll-text"
                  texts={textsVelocity}
                  velocity={50}
                />
              </div>
            </div>
            <ComparisonSection />
            <div className="flex justify-center my-4">
              <div className="flex gap-3">
                <Link
                  isExternal
                  className="bg-[#FF6200] text-white hover:bg-[#FF6200]/90 rounded-full shadow-lg px-8 py-2 transition-all"
                  href="https://app.esviaia.com/"
                  onPress={() => {
                    {
                      posthog.capture("button_clicked", { property: "to_app" });
                    }
                  }}
                >
                  Ir a la App
                </Link>
              </div>
            </div>
            <div className="flex justify-center gap-2 align-content-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <div>
                <span> Optimiza todo lo que tu servicio ofrece 🛎️</span>
              </div>
            </div>
            <div className="flex justify-center">
              <RotatingText
                animate={{ y: 0 }}
                className="px-3 sm:px-4 md:px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg tracking-wide"
                exit={{ y: "-120%" }}
                initial={{ y: "100%" }}
                rotationInterval={3500} // más lento
                splitLevelClassName="inline-flex mr-1 overflow-hidden justify-center items-center"
                staggerDuration={0.025}
                staggerFrom="last"
                texts={textsRotating}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </div>
            <Button
              className="bg-[#007A8A] text-white hover:bg-[#0088C2] rounded-full shadow-lg px-8 py-2 transition-all mt-6"
              size="lg"
              onPress={() =>
                (window.location.href = "https://wa.me/584228846783")
              }
            >
              Contáctanos
            </Button>
            <div className="flex gap-4 justify-center my-4">
              <Chip
                className="relative overflow-hidden cursor-pointer transition-all hover:scale-105 bg-gray-50 border-2 border-gray-200 "
                style={{
                  padding: "16px 24px",
                  borderRadius: "999px",
                }}
              >
                <ShinyText
                  className="text-gray-800  font-semibold text-lg"
                  disabled={false}
                  speed={10}
                  text="¡Muy pronto más!"
                />
              </Chip>
            </div>
          </div>
          {/* Blur */}
          <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-200/50 w-full pb-3 px-8 opacity-50 blur-md">
            <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-100/50 w-full pb-3 px-8">
              <div className="py-8">
                <SplitText
                  className="text-2xl font-bold md:text-5xl lg:text-6xl"
                  delay={50}
                  text="Tu plan de viaje se organiza solo."
                />
              </div>
              <div className="flex justify-center">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/itinerario.png"
                  />
                </AnimatedContent>
              </div>
              <div className="text-4xl pt-10 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={[
                    "#2E005D",
                    "#5C0087",
                    "#8A0087",
                    "#FF6200",
                    "#FF8000",
                  ]}
                  showBorder={false}
                >
                  Viaia ya está lista. Solo faltas tú.
                </GradientText>
                <p>😎</p>
              </div>
            </div>
          </div>
          <PricingTiers />
        </section>
      </DefaultLayout>
    </MobileOnly>
  );
}
