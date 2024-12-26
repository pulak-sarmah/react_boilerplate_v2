import { Button } from "@/components/ui/button";
import type { FunctionComponent } from "@/common/types";
import ParticleWave from "./ParticleWave";

export default function Hero(): FunctionComponent {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r ">
				<div className="absolute inset-0 bg-opacity-60">
					<ParticleWave />
				</div>
			</div>
			<div className="relative z-10 text-center px-4 md:px-6 lg:px-8">
				<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6">
					Welcome to Our Amazing Platform
				</h1>
				<p className="text-xl sm:text-2xl md:text-4xl text-white/80 mb-8">
					Discover the power of innovation and creativity
				</p>
				<div className="flex justify-center space-x-4">
					<Button size="lg" variant="secondary">
						Learn More
					</Button>
					<Button size="lg">Get Started</Button>
				</div>
			</div>
		</section>
	);
}
