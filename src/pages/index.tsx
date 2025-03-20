import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

const textsVelocity = [
  "Alojamientos Experiencias Actividades Transporte Organización",
  "Restaurantes Bares Consejos Cultura Turismo Aventura",
];

const textsRotating = [
  "Alojamientos",
  "Actividades",
  "Restauración",
  "Transporte",
  "Promociones",
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
          <div className="flex justify-center mt-7 ">
            <p className="flex flex-row">
              Ten todo listo:
              <RotatingText texts={textsRotating} />
            </p>
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
