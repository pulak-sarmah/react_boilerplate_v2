import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Lightbulb, Zap, Shield } from "lucide-react";
import type { FunctionComponent } from "@/common/types";

const features = [
	{
		icon: Lightbulb,
		title: "Innovative Solutions",
		description: "Cutting-edge features to boost your productivity",
	},
	{
		icon: Zap,
		title: "Lightning Fast",
		description: "Optimized performance for seamless user experience",
	},
	{
		icon: Shield,
		title: "Secure & Reliable",
		description: "Your data is protected with industry-leading security",
	},
];

export default function Features(): FunctionComponent {
	return (
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-background" id="features">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				Our Features
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{features.map((feature, index) => (
					<Card key={index}>
						<CardHeader>
							<feature.icon className="w-10 h-10 mb-4 text-primary" />
							<CardTitle>{feature.title}</CardTitle>
							<CardDescription>{feature.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
