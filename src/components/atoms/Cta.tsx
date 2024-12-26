import { Button } from "@/components/ui/button";
import type { FunctionComponent } from "@/common/types";

export default function CTA(): FunctionComponent {
	return (
		<section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Ready to Get Started?
				</h2>
				<p className="text-xl mb-8">
					Join thousands of satisfied users and take your project to the next
					level.
				</p>
				<Button size="lg" variant="secondary">
					Start Your Free Trial
				</Button>
			</div>
		</section>
	);
}
