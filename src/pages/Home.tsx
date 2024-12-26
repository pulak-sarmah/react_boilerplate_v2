import Hero from "@/components/atoms/Hero";
import type { FunctionComponent } from "../common/types";
import Features from "@/components/atoms/Features";
import CTA from "@/components/atoms/Cta";
import Testimonials from "@/components/atoms/Testimonials";

export const Home = (): FunctionComponent => {
	return (
		<main className="flex-grow">
			<Hero />
			<Features />
			<CTA />
			<Testimonials />
		</main>
	);
};
