import prisma from "@/lib/db";
import formatTime from "@/lib/helpers/formatTime";
import Link from "next/link";

export default async function getHighScores({ searchParams }) {
  let rank = 0;
  const { score } = await searchParams;
  try {
    const scores = await prisma.score.findMany({
      orderBy: {
        value: "asc",
      },
      take: 10,
    });

    return (
      <div className="w-screen h-screen bg-[url('/images/universe11-infested.jpeg')] bg-cover bg-no-repeat flex justify-center">
        <div className="pb-4 px-14 flex flex-col  pt-4 font-font1 text-2xl self-start border w-[400px] rounded border-yellow-200 bg-black/50 mt-12 md:mt-28 mx-auto">
          <h1 className="mb-4 text-center text-5xl text-yellow-300">
            LEADERBOARD
          </h1>
          <span className="text-center text-sky-600">top 10</span>
          <ol className="list-decimal flex flex-col">
            {scores.map((score) => {
              rank += 1;
              return (
                <li className="flex gap-4 mx-auto" key={score.id}>
                  <span className="w-36 max-w-36 overflow-hidden ">
                    {`${rank} ${score.userName}`}
                  </span>
                  <span>{formatTime(score.value)}</span>
                </li>
              );
            })}
          </ol>
          {score && (
            <h3 className="text-center mt-4 text-pink-600">
              Your score: {formatTime(Number(score))}
            </h3>
          )}
          <Link
            href="/map/universe-infested"
            className="mt-4 text-center border border-yellow-300 py-2 rounded hover:bg-yellow-200 hover:text-black "
          >
            {score ? "PLAY AGAIN" : "START GAME"}
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching scores:", error);
    throw new Error("Could not fetch high scores");
  }
}
