import type { FunctionComponent } from "@/common/types";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BrandLogo from "../atoms/BrandLogo";

const menuItems = [
	{ title: "Home", href: "/" },
	{ title: "About", href: "/about" },
	{ title: "Services", href: "/services" },
	{ title: "Contact", href: "/contact" },
];

export default function Header(): FunctionComponent {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className=" bg-background/20 backdrop-blur-sm fixed w-full z-10">
			<div className=" mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<BrandLogo />
					</div>
					<div className="hidden md:flex items-center space-x-1">
						{menuItems.map((item) => (
							<Button
								key={item.title}
								asChild
								variant={
									location.pathname === item.href ? "secondary" : "ghost"
								}
							>
								<Link
									className={`${location.pathname === item.href ? " text-black" : "text-white"}`}
									to={item.href}
								>
									{item.title}
								</Link>
							</Button>
						))}
					</div>
					<div className="md:hidden flex items-center">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button size="icon" variant="ghost">
									<Menu className="h-6 w-6" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<nav className="flex flex-col space-y-4 mt-4">
									{menuItems.map((item) => (
										<Button
											key={item.title}
											asChild
											variant={
												location.pathname === item.href ? "secondary" : "ghost"
											}
											onClick={() => {
												setIsOpen(false);
											}}
										>
											<Link to={item.href}>{item.title}</Link>
										</Button>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
