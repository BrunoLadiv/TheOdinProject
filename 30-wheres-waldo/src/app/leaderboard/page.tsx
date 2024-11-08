import prisma from "@/lib/db";
import formatTime from "@/lib/helpers/formatTime";

export default async function getHighScores() {
  let rank = 0;
  try {
    const scores = await prisma.score.findMany({
      orderBy: {
        value: "desc",
      },
    });

    console.log(scores);
    return (
      <div>
        <ol className="list-decimal pb-4 px-14 pt-4 font-font1 text-2xl border w-[400px] mt-[10%] rounded mx-auto border-green-500">
          <h1 className="mb-4 text-center text-5xl">LEADERBOARD</h1>
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
      </div>
    );
  } catch (error) {
    console.error("Error fetching scores:", error);
    throw new Error("Could not fetch high scores");
  }
}
