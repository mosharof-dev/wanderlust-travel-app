import Banner from "@/components/home/Banne";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";

export default async function Home() {
  let destinations = [];
  try {
    const res = await fetch("http://localhost:5000/destinations", {
      cache: "no-store",
    });
    if (res.ok) {
      destinations = await res.json();
    }
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }

  return (
   <>
    <Banner/>
    <FeaturedDestinations destinations={destinations} />
   </>
  );
}
