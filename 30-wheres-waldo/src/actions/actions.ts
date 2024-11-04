"use server";
import prisma from "@/lib/db";

export async function checkLocation(
  mapId: number,
  xPercent: number,
  yPercent: number,
  characterName: string,
) {
  const character = await prisma.character.findFirst({
    where: {
      mapId: mapId,
      name: characterName,
    },
  });

  if (!character) {
    return { success: false, message: "Character not found" };
  }

  const tolerance = 3;

  const isCorrect =
    Math.abs(character.xPercent - xPercent) <= tolerance &&
    Math.abs(character.yPercent - yPercent) <= tolerance;

  return { success: isCorrect };
}
