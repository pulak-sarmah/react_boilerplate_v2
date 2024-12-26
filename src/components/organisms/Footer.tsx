import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import type { FunctionComponent } from "@/common/types";
export default function Footer(): FunctionComponent {
	return (
		<footer className="bg-background py-12 px-4 md:px-6 lg:px-8">
			<div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<h3 className="text-lg font-semibold mb-4">About Us</h3>
					<p className="text-muted-foreground">
						We are dedicated to providing innovative solutions for your business
						needs.
					</p>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<Link
								className="text-muted-foreground hover:text-foreground"
								to="#"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="text-muted-foreground hover:text-foreground"
								to="#features"
							>
								Features
							</Link>
						</li>
						<li>
							<Link
								className="text-muted-foreground hover:text-foreground"
								to="#testimonials"
							>
								Testimonials
							</Link>
						</li>
						<li>
							<Link
								className="text-muted-foreground hover:text-foreground"
								to="#"
							>
								Pricing
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Contact</h3>
					<ul className="space-y-2 text-muted-foreground">
						<li>123 Main St, City, Country</li>
						<li>Phone: +1 234 567 890</li>
						<li>Email: info@example.com</li>
					</ul>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
					<div className="flex space-x-4">
						<a className="text-muted-foreground hover:text-foreground" href="#">
							<Facebook />
						</a>
						<a className="text-muted-foreground hover:text-foreground" href="#">
							<Twitter />
						</a>
						<a className="text-muted-foreground hover:text-foreground" href="#">
							<Instagram />
						</a>
						<a className="text-muted-foreground hover:text-foreground" href="#">
							<Linkedin />
						</a>
					</div>
				</div>
			</div>
			<div className="mt-8 text-center text-muted-foreground">
				<p>&copy; 2023 Your Company Name. All rights reserved.</p>
			</div>
		</footer>
	);
}
