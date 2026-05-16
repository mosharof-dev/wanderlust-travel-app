import Banner from "@/components/home/Banne";
import CTASection from "@/components/home/CTASection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default async function Home() {
  let destinations = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
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
      <Banner />
      <FeaturedDestinations destinations={destinations} />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
