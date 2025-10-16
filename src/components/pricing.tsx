import React, { useState } from "react";
import { Card, CardBody, CardHeader, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

const CATEGORY_STYLES = {
  ACCOMMODATION: { color: "#5C0087", name: "Alojamiento", action: "Reserva" },
  ACTIVITY: { color: "#FF8000", name: "Actividad", action: "Vive" },
  F_AND_B: { color: "#B40078", name: "Restaurante", action: "Ordena" },
  TRANSPORT: { color: "#2E005D", name: "Transporte", action: "Viaja" },
};

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
  category: keyof typeof CATEGORY_STYLES;
  isPopular?: boolean;
};

export const PricingTiers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof CATEGORY_STYLES>("ACCOMMODATION");

  const tiers: PricingTier[] = [
    {
      name: "Alojamientos (hasta 20 habitaciones)",
      originalPrice: 70.0,
      discountedPrice: 50.0,
      description:
        "Ideal para posadas o alojamientos pequeños que buscan más visibilidad y gestión inteligente.",
      features: [
        "1 mes de prueba gratis",
        "20% de descuento por suscripción anual",
        "Certificación de servicio Viaia",
        "Soporte de IA 24/7",
        "Gestión completa de perfil y reservas",
      ],
      icon: "lucide:home",
      category: "ACCOMMODATION",
    },
    {
      name: "Alojamientos (más de 20 habitaciones)",
      originalPrice: 100.0,
      discountedPrice: 80.0,
      description:
        "Para hoteles o complejos turísticos con más demanda y necesidad de control avanzado.",
      features: [
        "1 mes de prueba gratis",
        "20% de descuento por suscripción anual",
        "Gestión de datos, disponibilidad y precios",
        "Panel completo de reservas y clientes",
        "Certificación de servicio Viaia",
      ],
      icon: "lucide:building",
      category: "ACCOMMODATION",
      isPopular: true,
    },
    {
      name: "Actividades turísticas",
      originalPrice: 70.0,
      discountedPrice: 50.0,
      description:
        "Perfecto para operadores, guías y experiencias locales que quieren conectar con más viajeros.",
      features: [
        "1 mes de prueba gratis",
        "20% de descuento por suscripción anual",
        "Certificación de servicio Viaia",
        "Gestión de reservas y disponibilidad",
        "Integración con atención automática por chat",
      ],
      icon: "lucide:compass",
      category: "ACTIVITY",
      isPopular: true,
    },
    {
      name: "Restaurantes",
      originalPrice: 50.0,
      discountedPrice: 30.0,
      description:
        "Pensado para restaurantes, cafés y bares que buscan atraer viajeros y mostrar su oferta.",
      features: [
        "1 mes de prueba gratis",
        "20% de descuento por suscripción anual",
        "Certificación de servicio Viaia",
        "Gestión de perfil y reseñas",
        "Atención automatizada a consultas",
      ],
      icon: "lucide:utensils-crossed",
      category: "F_AND_B",
      isPopular: true,
    },
    {
      name: "Transporte",
      originalPrice: 50.0,
      discountedPrice: 30.0,
      description:
        "Ideal para servicios de traslado, tours sobre ruedas o transporte privado que deseen más reservas.",
      features: [
        "1 mes de prueba gratis",
        "20% de descuento por suscripción anual",
        "Certificación de servicio Viaia",
        "Gestión de perfil, rutas y disponibilidad",
        "Atención automatizada a solicitudes de traslado",
      ],
      icon: "lucide:bus",
      category: "TRANSPORT",
      isPopular: true,
    },
  ];

  const filteredTiers = tiers.filter(
    (tier) => tier.category === selectedCategory,
  );

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
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Viaia impulsa tu visibilidad, optimiza tu gestión y conecta tu
          servicio con más exploradores.
        </p>
      </div>

      {/* Tabs de categorías */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.entries(CATEGORY_STYLES).map(([key, { color, name }]) => (
          <button
            key={key}
            className={`px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all ${
              selectedCategory === key
                ? "text-white"
                : "bg-transparent text-gray-600"
            }`}
            style={{
              backgroundColor: selectedCategory === key ? color : "transparent",
              borderColor: color,
            }}
            onClick={() =>
              setSelectedCategory(key as keyof typeof CATEGORY_STYLES)
            }
          >
            {name}
          </button>
        ))}
      </div>

      {/* Cards centradas */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex flex-row justify-center gap-8 max-w-6xl w-full">
          {filteredTiers.map((tier, index) => (
            <Card
              key={index}
              className={`border-2 relative ${
                tier.isPopular
                  ? "border-[#007A8A] shining-border"
                  : "border-default-200"
              } overflow-visible transition-all duration-300`}
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

              <CardHeader className="flex flex-col items-center gap-2 pt-6 text-center">
                <Icon
                  className="text-3xl mb-1"
                  icon={tier.icon}
                  style={{ color: CATEGORY_STYLES[tier.category].color }}
                />
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <p className="text-sm text-foreground-500 px-4">
                  {tier.description}
                </p>
              </CardHeader>

              <CardBody className="py-6 text-center">
                <div className="flex justify-center items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">
                    ${tier.discountedPrice}
                  </span>
                  <span className="line-through text-gray-500 text-sm">
                    ${tier.originalPrice}
                  </span>
                  <span className="text-danger text-sm font-medium">/mes</span>
                </div>

                <div className="flex flex-col gap-2">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon className="text-success" icon="lucide:check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center mt-10 text-center">
        <Button
          className="bg-[#007A8A] text-white hover:bg-[#0088C2] shining-border"
          size="lg"
          onPress={() => (window.location.href = "https://wa.me/584248005957")}
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
