import React from "react";
import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

const styles = `
  @keyframes borderShine {
    0% {
      box-shadow: 0 0 2px 0px rgba(0, 120, 168, 0.5);
    }
    50% {
      box-shadow: 0 0 4px 1px rgba(0, 168, 232, 0.6);
    }
    100% {
      box-shadow: 0 0 2px 0px rgba(0, 120, 168, 0.5);
    }
  }
  
  .shining-border {
    position: relative;
    animation: borderShine 4s infinite ease-in-out;
  }
  
  .shining-chip {
    animation: borderShine 4s infinite ease-in-out;
  }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");

  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

type PricingTier = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon: string;
};

export const PricingTiers: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Gratis",
      originalPrice: 29.99,
      discountedPrice: 0.0,
      description: "Todo lo esencial para empezar con nuestros productos.",
      features: [
        "Acceso a funciones básicas",
        "Soporte por correo electrónico",
        "Visibilidad en Viaia",
        "Acceso al Certificado Viaia",
        "Actualizaciones mensuales",
        "1 usuarios incluidos con acceso a Whatsapp",
      ],
      icon: "lucide:package",
    },
    {
      name: "Profesional",
      originalPrice: 59.99,
      discountedPrice: 29.99,
      description: "Perfecto para profesionales y equipos pequeños.",
      features: [
        "Todo lo del plan Gratuito",
        "Funciones avanzadas",
        "Soporte prioritario",
        "Visibilidad en Viaia",
        "Acceso al Certificado Viaia",
        "Actualizaciones semanales",
        "3 usuarios incluidos con acceso a Whatsapp",
      ],
      isPopular: true,
      icon: "lucide:briefcase",
    },
    {
      name: "Empresarial",
      originalPrice: 199.99,
      discountedPrice: 99.99,
      description: "Soluciones completas para empresas de cualquier tamaño.",
      features: [
        "Todo lo del plan Profesional",
        "Funciones exclusivas",
        "Soporte exclusivo",
        "Visibilidad en Viaia",
        "Acceso al Certificado Viaia",
        "Actualizaciones diarias",
        "10 usuarios incluidos con acceso a Whatsapp",
        "Acceso a la API",
      ],
      icon: "lucide:building",
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <GradientText
            animationSpeed={10}
            className="text-4xl md:text-5xl font-extrabold"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
            showBorder={false}
          >
            Haz crecer tu servicio con Viaia
          </GradientText>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades y lleva tu negocio
          al siguiente nivel
        </p>
      </div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-3 bg-content2 px-4 py-2 rounded-full">
          <Icon className="text-[#0078A8]" icon="lucide:calendar" />
          <span className="text-sm font-medium">
            Oferta por tiempo limitado - 50% de descuento
          </span>
        </div>
      </div>
      <div className="grid px-10 grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier, index) => (
          <Card
            key={index}
            className={`border-2 relative ${tier.isPopular ? "border-[#0078A8] shining-border" : "border-default-200"} overflow-visible transition-all duration-300`}
          >
            {tier.isPopular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <Chip
                  className="h-6 bg-[#0078A8] text-white border-2 border-white/50 shining-chip"
                  variant="shadow"
                >
                  Más popular
                </Chip>
              </div>
            )}
            <CardHeader className="flex gap-3 pb-0 pt-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon className="text-2xl text-[#0078A8]" icon={tier.icon} />
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>
                <p className="text-small text-foreground-500">
                  {tier.description}
                </p>
              </div>
            </CardHeader>
            <CardBody className="py-6">
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold">
                  ${tier.discountedPrice}
                </span>
                <span className="text-foreground-500 line-through text-sm">
                  ${tier.originalPrice}
                </span>
                <span className="text-danger text-sm font-medium">/mes</span>
              </div>

              <div className="flex flex-col gap-3">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="text-success" icon="lucide:check" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-10 flex-col items-center">
        <Button
          className="bg-[#0078A8] text-white hover:bg-[#0088C2] shining-border"
          size="lg"
          variant="solid"
          onPress={() => (window.location.href = "https://wa.me/584248005957")}
        >
          Contáctanos
        </Button>
        <p className="text-center text-foreground-500 max-w-xl mt-6">
          ¿Necesitas un plan personalizado para tu empresa? Contáctanos para
          crear una solución a medida.
        </p>
      </div>
    </div>
  );
};
