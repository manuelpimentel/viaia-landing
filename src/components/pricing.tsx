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
      name: "FrontDesk",
      originalPrice: 179.99,
      discountedPrice: 89.99,
      description: "Tu agente de IA turístico disponible 24/7.",
      features: [
        "Atención automática 24/7 a potenciales clientes",
        "Respuestas a dudas y orientación a la reserva",
        "Invitación conversacional a generar reservas",
        "Certificado VIAIA (insignia de servicio validado)",
        "Validación de datos y métodos de gestión",
        "Notificación de leads vía WhatsApp",
      ],
      icon: "lucide:bot",
    },
    {
      name: "FrontDesk + BackOffice",
      originalPrice: 499.99,
      discountedPrice: 249.99,
      description: "Todo lo del FrontDesk con gestión completa de tu servicio.",
      features: [
        "Incluye todo lo de FrontDesk",
        "Dashboard de leads y reservas",
        "Gestión de datos relevantes de tu servicio",
        "Control de información, precios y fotos",
        "Gestión de la disponibilidad y reservas",
        "Soporte prioritario",
      ],
      isPopular: true,
      icon: "lucide:layout-dashboard",
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
          <GradientText
            animationSpeed={8}
            className="text-5xl md:text-6xl font-black tracking-tight"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
            showBorder={true}
          >
            Haz crecer tu servicio con Viaia
          </GradientText>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Lleva tu negocio turístico al siguiente nivel con planes diseñados
          para potenciar tu alcance, certificar tu servicio y atraer más
          clientes.{" "}
          <span className="font-bold text-[#007A8A]">
            Es tu momento de destacar.
          </span>
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <h3 className="text-4xl font-extrabold text-[#007A8A] text-center">
          Descubre nuestros precios
        </h3>
      </div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-3 bg-content2 px-4 py-2 rounded-full">
          <Icon className="text-[#007A8A]" icon="lucide:calendar" />
          <span className="text-sm font-medium">
            Oferta por tiempo limitado - 50% de descuento los primeros 2 meses
          </span>
        </div>
      </div>
      <div className="grid px-4 md:px-10 grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <Card
            key={index}
            className={`border-2 relative ${tier.isPopular ? "border-[#007A8A] shining-border" : "border-default-200"} overflow-visible transition-all duration-300`}
          >
            {tier.isPopular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <Chip
                  className="h-6 bg-[#007A8A] text-white border-2 border-white/50 shining-chip"
                  variant="shadow"
                >
                  Más popular
                </Chip>
              </div>
            )}
            <CardHeader className="flex gap-3 pb-0 pt-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon className="text-2xl text-[#007A8A]" icon={tier.icon} />
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
          className="bg-[#007A8A] text-white hover:bg-[#0088C2] shining-border"
          size="lg"
          variant="solid"
          onPress={() => (window.location.href = "https://wa.me/584248005957")}
        >
          Contáctanos
        </Button>
        <p className="text-center text-foreground-500 max-w-xl mt-6">
          Queremos conocerte. Contáctanos para más información.
        </p>
      </div>
    </div>
  );
};
