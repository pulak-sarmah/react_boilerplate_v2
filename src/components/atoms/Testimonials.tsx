import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FunctionComponent } from "@/common/types";

const testimonials = [
	{
		name: "Alice Johnson",
		role: "CEO, TechCorp",
		content:
			"This platform has revolutionized our workflow. Highly recommended!",
		avatar: "/avatar1.jpg",
	},
	{
		name: "Bob Smith",
		role: "Freelance Designer",
		content:
			"The features and support are unmatched. A game-changer for my business.",
		avatar: "/avatar2.jpg",
	},
	{
		name: "Carol Williams",
		role: "Marketing Manager",
		content: "Intuitive, powerful, and constantly improving. Love it!",
		avatar: "/avatar3.jpg",
	},
];

export default function Testimonials(): FunctionComponent {
	return (
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-muted" id="testimonials">
			<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
				What Our Clients Say
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{testimonials.map((testimonial, index) => (
					<Card key={index}>
						<CardHeader>
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage
										alt={testimonial.name}
										src={testimonial.avatar}
									/>
									<AvatarFallback>
										{testimonial.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div>
									<CardTitle>{testimonial.name}</CardTitle>
									<CardDescription>{testimonial.role}</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">{testimonial.content}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
