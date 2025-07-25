"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Project } from "@/data/projects";

// 1. Define the full Project type here.
// This is now the single source of truth for what a "card" is.

// --- Card Component ---
// It now expects a `Project` object for its `card` prop.
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onClick,
  }: {
    card: Project;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-neutral-900 overflow-hidden h-72 w-full transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium text-white">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

// --- FocusCards Grid Component ---
// Its props are now typed with the `Project` type.
export function FocusCards({
  cards,
  onCardClick,
}: {
  cards: Project[];
  onCardClick: (card: Project) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  );
}