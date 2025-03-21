import React from "react"; // Added missing React import
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import DefaultLayout from "@/layouts/default";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import { siteConfig } from "@/config/site";

const textsVelocity = [
  "Alojamientos Experiencias Actividades Transporte Organización",
  "Restaurantes Bares Consejos Cultura Turismo Aventura",
];

const textsRotating = [
  "Grupos",
  "Estadias",
  "Actividades",
  "Transporte",
  "Aventura",
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 md:py-4">
        <div className="inline-block max-w-full mt-52 text-center justify-center">
          <SplitText
            className="text-5xl font-bold md:text-5xl lg:text-6xl"
            delay={50}
            text="¡Hola Viajero!"
          />
          <div className="text-2xl pt-72 md:text-4xl lg:text-5xl">
            <SplitText
              className="text-2xl pt-10 md:text-4xl lg:text-5xl"
              delay={50}
              text="Algunos viajes empiezan con un mapa"
            />
            <p>🗺️</p>
          </div>
          <div className="flex justify-center mt-7">
            <FadeContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="/inputchat.png"
              />
            </FadeContent>
          </div>
          <div className="text-2xl pt-10 md:text-4xl lg:text-5xl">
            <SplitText
              className="text-2xl pt-10 md:text-4xl lg:text-5xl"
              delay={50}
              text="El tuyo empieza con un Prompt"
            />
            <p>💬</p>
          </div>
          <div className="text-2xl pt-10 md:text-4xl lg:text-5xl">
            <p>
              Sin mil pestañas abiertas. Solo tú, tus ideas y un espacio donde
              todo fluye.
            </p>
          </div>
          <div className="flex justify-center mt-7">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="/conver1.png"
              />
            </AnimatedContent>
          </div>
          <div className="text-2xl pt-10 md:text-4xl lg:text-5xl">
            <p>
              <span className="font-semibold">
                VIAIA escucha, sugiere y se adapta.
              </span>
              <br />
              <br />
              Ya sea que estés planeando una escapada en solitario o un viaje en
              grupo, todo sucede en el chat.
            </p>
          </div>
          <div className="flex justify-center mt-7">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="/CHAT.png"
              />
            </AnimatedContent>
          </div>
          <p className="text-xl py-4 md:text-4xl lg:text-5xl">
            ¿Te imaginas que planear un viaje fuera como hablar con alguien que
            ha recorrido Venezuela?
          </p>
          <div className="flex justify-center">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="/DETAIL.png"
              />
            </AnimatedContent>
          </div>
          <div>
            <ScrollVelocity
              className="custom-scroll-text"
              texts={textsVelocity}
            />
          </div>
          <p className="text-xl py-10 md:text-4xl lg:text-5xl">
            Adiós a las notas sueltas y los links que se pierden🌪️
          </p>
          <div className="flex justify-center">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-full"
                src="/orden.png"
              />
            </AnimatedContent>
          </div>
          <p className="text-xl text-left py-10 md:text-4xl lg:text-5xl">
            🗓️ Elige fechas → VIAIA las guarda. <br />
            💰 Define un presupuesto → VIAIA encuentra lo que encaja. <br />
            👥 Invita a amigos → VIAIA mantiene todo sincronizado.
          </p>
          <div className="flex justify-center">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-full"
                src="/config.png"
              />
            </AnimatedContent>
          </div>
          <p className="text-xl font-semibold py-10 md:text-4xl lg:text-5xl">
            VIAIA organiza todo mientras tú piensas en la aventura.
          </p>
          <div className="flex justify-center">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-full"
                src="/friend.png"
              />
            </AnimatedContent>
          </div>
          <p className="text-xl py-10 md:text-4xl lg:text-5xl">
            Con VIAIA, todos pueden proponer, votar y ajustar detalles en un
          </p>
          <p className="text-xl py-4 text-left md:text-4xl lg:text-5xl">
            🚫 No más “¿Dónde nos quedamos?” <br />
            🚫 No más “¿Alguien reservó esto?” <br />✅ Todo está ahí, listo
            para que el viaje fluya.
          </p>
          <p className="text-xl font-semibold md:text-4xl lg:text-5xl">
            Viajar en grupo no debería sentirse como coordinar una logística
            imposible.
          </p>
          <div className="py-8">
            <SplitText
              className="text-2xl font-bold md:text-5xl lg:text-6xl"
              delay={50}
              text="¡El Planner lo tiene todo!"
            />
          </div>
          <p className="text-xl py-4 md:text-4xl lg:text-5xl">
            Reservar Sin Estrés, Solo Emoción
          </p>
          <p className="text-xl py-4 text-left md:text-4xl lg:text-5xl">
            🛒 Elige lo que te gusta. <br />
            📑 Revisa los detalles. <br />
            💳 Paga solo o divide entre amigos. <br />✅ Listo.
          </p>
          <div className="flex justify-center">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="/shopping.png"
              />
            </AnimatedContent>
          </div>
          <p className="text-xl py-4 md:text-4xl lg:text-5xl">
            Después de tu viaje, VIAIA te preguntará ¿Cómo estuvo?
          </p>
          <p className="text-xl py-4 text-left md:text-4xl lg:text-5xl">
            📝 Deja una calificación rápida <br />
            💬 Unas palabras si quieres. <br />
            ✨ Eso es todo. <br />
            <br />
            Tu experiencia ayuda a hacer VIAIA más inteligente.
          </p>
          <div className="flex justify-center">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="/review.png"
              />
            </AnimatedContent>
          </div>
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
          <div className="py-8">
            <SplitText
              className="text-2xl font-bold md:text-5xl lg:text-6xl"
              delay={50}
              text="VIAIA ya está lista para partir. Solo faltas tú."
            />
          </div>
          <div className="flex justify-center gap-2 align-content-center text-xl md:text-4xl lg:text-5xl">
            <div>
              <span> Vamos a planear algo juntos.</span>
            </div>
          </div>
          <div className="flex justify-center">
            <RotatingText
              animate={{ y: 0 }}
              className="px-2 sm:px-2 md:px-3 text-black font-boldoverflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              exit={{ y: "-120%" }}
              initial={{ y: "100%" }}
              rotationInterval={2000}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              staggerDuration={0.025}
              staggerFrom="last"
              texts={textsRotating}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}>
            Ir a la App
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
