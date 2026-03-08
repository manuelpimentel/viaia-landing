import React from "react";
import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

// const CATEGORY_STYLES = {
//   ACCOMMODATION: { color: "#5C0087", name: "Alojamiento", action: "Reserva" },
//   ACTIVITY: { color: "#FF8000", name: "Actividad", action: "Vive" },
//   F_AND_B: { color: "#B40078", name: "Restaurante", action: "Ordena" },
//   TRANSPORT: { color: "#2E005D", name: "Transporte", action: "Viaja" },
// };

const styles = `
  @keyframes borderShine {
    0% { box-shadow: 0 0 2px 0px rgba(0, 120, 168, 0.5); }
    50% { box-shadow: 0 0 4px 1px rgba(0, 168, 232, 0.6); }
    100% { box-shadow: 0 0 2px 0px rgba(0, 120, 168, 0.5); }
  }
  .shining-border { animation: borderShine 4s infinite ease-in-out; }
  .shining-chip { animation: borderShine 4s infinite ease-in-out; }
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
  icon: string;
  // category: keyof typeof CATEGORY_STYLES;
  isPopular?: boolean;
};

export const PricingTiers: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Plan Freemium",
      originalPrice: 0,
      discountedPrice: 0,
      description:
        "Vive la experiencia de organiza tu servicio de manera eficiente y descubre cómo podemos optimizar la atención a tus clientes.",
      features: [
        "Hasta 50 conversaciones para probar la plataforma",
        "Acceso inmediato y sin riesgos",
        "Evalúa el potencial de Viaia antes de avanzar al siguiente nivel",
      ],
      icon: "lucide:star",
      // category: "ACCOMMODATION",
    },
    {
      name: "Plan Prepago",
      originalPrice: 10,
      discountedPrice: 10,
      description:
        "Flexibilidad total para servicios que buscan escalar a su ritmo. Recarga conversaciones según tus necesidades y aprovecha todo el potencial de Viaia.",
      features: [
        "75 conversaciones por recarga, con opción de aumentar el saldo fácilmente",
        "Prueba la plataforma mientras crece tu operación",
        "Soporte básico con seguimiento personalizado",
        "Control total sobre el uso y la expansión de tus servicios",
      ],
      icon: "lucide:credit-card",
      // category: "ACCOMMODATION",
      isPopular: true,
    },
    {
      name: "Plan Básico",
      originalPrice: 30,
      discountedPrice: 30,
      description:
        "Diseñado para servicios consolidados que buscan eficiencia y excelencia. Maximiza la interacción con clientes mientras disfrutas soporte integral y certificación oficial Viaia.",
      features: [
        "Hasta 300 conversaciones mensuales para atención efectiva",
        "Soporte completo 24/7 para operaciones sin interrupciones",
        "Panel de control avanzado para métricas y gestión de conversaciones",
        "Certificación oficial Viaia que potencia la confianza de tus clientes",
      ],
      icon: "lucide:shield-check",
      // category: "ACCOMMODATION",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          <GradientText
            showBorder
            animationSpeed={8}
            className="font-black tracking-tight"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
          >
            Planes adaptados a tu servicio
          </GradientText>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Viaia organiza la información de tu servicio y responde a tus clientes
          de forma clara y automática, para que no pierdas oportunidades por
          desorden o falta de tiempo.
        </p>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-7xl w-full mx-auto px-4">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`border-2 relative rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 overflow-visible ${
                tier.isPopular
                  ? "border-[#007A8A] shining-border bg-gradient-to-b from-white to-[#f0faff]"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Etiqueta de plan más popular */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Chip
                    className="h-7 px-3 bg-[#007A8A] text-white font-semibold border-2 border-white/50 shining-chip"
                    variant="shadow"
                  >
                    Más popular
                  </Chip>
                </div>
              )}

              {/* Header del Card */}
              <CardHeader className="flex flex-col items-center gap-3 pt-8 text-center">
                <Icon
                  className="text-4xl mb-1"
                  icon={tier.icon}
                  style={{ color: tier.isPopular ? "#007A8A" : "#5C0087" }}
                />
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-500 px-6">{tier.description}</p>
              </CardHeader>

              {/* Body del Card */}
              <CardBody className="py-8 text-center">
                <div className="flex justify-center items-baseline gap-2 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.originalPrice}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    /mes
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon
                        className="text-green-500 flex-shrink-0"
                        icon="lucide:check"
                        style={{ width: "1.2rem", height: "1.2rem" }} // 19px, perfecto para texto sm
                      />
                      <span className="text-gray-700 text-sm leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardBody>

              {/* Call-to-Action opcional */}
              {/* <div className="pb-6 px-6 flex justify-center">
                <button
                  className={`mt-4 px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    tier.isPopular
                      ? "bg-[#007A8A] text-white hover:bg-[#005f67]"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Seleccionar plan
                </button>
              </div> */}
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center mt-10 text-center">
        <Button
          className="bg-[#007A8A] text-white hover:bg-[#0088C2] shining-border"
          size="lg"
          onPress={() => (window.location.href = "https://wa.me/13075001620")}
        >
          Contáctanos
        </Button>
        <p className="text-sm text-gray-500 mt-4 max-w-xs">
          Conversemos sobre tu servicio y personaliza tu plan con Viaia.
        </p>
      </div>
    </div>
  );
};
