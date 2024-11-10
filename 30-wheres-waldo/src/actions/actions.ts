"use server";
import prisma from "@/lib/db";

type AddScoreParams = {
  userName: string;
  mapId: number;
  timeTaken: number;
};

export async function addScore({ userName, mapId, timeTaken }: AddScoreParams) {
  if (!userName || !mapId || typeof timeTaken !== "number") {
    throw new Error("userName, mapId, and timeTaken are required.");
  }

  try {
    const score = await prisma.score.create({
      data: {
        userName,
        mapId,
        value: timeTaken,
      },
    });

    return { message: "Score added successfully", score };
  } catch (error) {
    console.error("Error adding score:", error);
    throw new Error("Failed to add score.");
  }
}

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
    return;
  }

  const tolerance = 3;

  const isCorrect =
    Math.abs(character.xPercent - xPercent) <= tolerance &&
    Math.abs(character.yPercent - yPercent) <= tolerance;

  return { success: isCorrect };
}
