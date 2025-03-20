import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

import { siteConfig } from "@/config/site";
// import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";

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
        <div className="inline-block max-w-full text-center justify-center">
          <SplitText
            className="text-3xl font-semibold md:text-5xl lg:text-6xl"
            delay={50}
            text="¡Descubre, planifica y reserva en un solo lugar!"
          />
          <div className="flex justify-center mt-7">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="public/CHAT.png"
              />
            </AnimatedContent>
          </div>
          <p className="text-xl py-4 md:text-4xl lg:text-5xl">
            Conéctate con servicios turísticos únicos y experiencias auténticas.
            <span className="font-bold"> VIAIA </span> te ayuda a organizarlo
            todo.
          </p>
          <div className="flex justify-center mt-7">
            <AnimatedContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="public/DETAIL.png"
              />
            </AnimatedContent>
          </div>
          <div>
            <ScrollVelocity
              className="custom-scroll-text"
              texts={textsVelocity}
            />
          </div>
          <p className="text-xl pt-4 md:text-4xl lg:text-5xl">
            Organiza y gestiona tus viajes como nunca antes.
          </p>
          <div className="flex justify-center gap-2  text-xl md:text-4xl lg:text-5xl ">
            <p className="flex flex-row">Todo desde el chat</p>
            <RotatingText
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              initial={{ y: "100%" }}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              rotationInterval={2000}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              staggerDuration={0.025}
              staggerFrom={"last"}
              texts={textsRotating}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </div>
          <div className="flex justify-center mt-7">
            <FadeContent>
              <img
                alt="Chat interface illustration"
                className="w-70"
                src="public/inputchat.png"
              />
            </FadeContent>
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
            Documentation
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
