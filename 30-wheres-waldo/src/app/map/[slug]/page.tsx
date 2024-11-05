import Map from "@/app/components/Map";
import prisma from "@/lib/db";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const map = await prisma.map.findUnique({
    where: { slug },
    include: {
      characters: {
        select: {
          name: true,
          img: true,
        },
      },
    },
  });
  console.log(map);
  if (!map) {
    return <div>Map not found</div>;
  }

  return <Map map={map} />;
}
