import { useEffect, useState } from "react";
import type { FunctionComponent } from "@/common/types";

export default function SpiderWebAnimation(): FunctionComponent {
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		setIsAnimating(true);
	}, []);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<svg
				className="absolute w-full h-full"
				preserveAspectRatio="none"
				viewBox="0 0 100 100"
			>
				{/* Cross Lines */}
				<line
					className={`web-line ${isAnimating ? "animate-web" : ""}`}
					x1="0"
					x2="100"
					y1="0"
					y2="100"
				/>
				<line
					className={`web-line ${isAnimating ? "animate-web" : ""}`}
					x1="0"
					x2="100"
					y1="100"
					y2="0"
				/>
				{/* Vertical and Horizontal Lines */}
				<line
					className={`web-line ${isAnimating ? "animate-web" : ""}`}
					x1="50"
					x2="50"
					y1="0"
					y2="100"
				/>
				<line
					className={`web-line ${isAnimating ? "animate-web" : ""}`}
					x1="0"
					x2="100"
					y1="50"
					y2="50"
				/>
				{/* Circles */}
				<circle
					className={`web-circle ${isAnimating ? "animate-web-circle" : ""}`}
					cx="50"
					cy="50"
					r="30"
				/>
				<circle
					className={`web-circle ${isAnimating ? "animate-web-circle" : ""}`}
					cx="50"
					cy="50"
					r="20"
				/>
				<circle
					className={`web-circle ${isAnimating ? "animate-web-circle" : ""}`}
					cx="50"
					cy="50"
					r="10"
				/>
			</svg>

			<style>{`
				@keyframes drawLine {
					0% {
						stroke-dasharray: 0, 100;
					}
					100% {
						stroke-dasharray: 100, 0;
					}
				}

				@keyframes drawCircle {
					0% {
						stroke-dasharray: 0, 100;
					}
					100% {
						stroke-dasharray: 100, 0;
					}
				}

				.web-line {
					stroke: rgba(
						255,
						255,
						255,
						0.7
					); /* Changed to a more visible color */
					stroke-width: 0.5;
					fill: none;
					stroke-dasharray: 100, 0;
					animation: drawLine 2s ease forwards;
				}

				.web-circle {
					stroke: rgba(
						255,
						255,
						255,
						0.7
					); /* Changed to a more visible color */
					stroke-width: 0.5;
					fill: none;
					stroke-dasharray: 100, 0;
					animation: drawCircle 2s ease forwards;
				}

				.animate-web {
					animation: drawLine 2s ease forwards;
				}

				.animate-web-circle {
					animation: drawCircle 2s ease forwards;
				}
			`}</style>
		</div>
	);
}
