/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const {
		foregroundImageUrl,
		foregroundImageAlt,
		backgroundImageUrl,
		backgroundImageAlt,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: "hero-block",
			})}
		>
			{foregroundImageUrl && (
				<div className="hero-block-foreground">
					<img src={foregroundImageUrl} alt={foregroundImageAlt || ""} />
				</div>
			)}

			{/* Background image */}
			{backgroundImageUrl && (
				<div
					className="hero-block-background"
					style={{ backgroundImage: `url(${backgroundImageUrl})` }}
				>
					<img src={backgroundImageUrl} alt={backgroundImageAlt || ""} />
				</div>
			)}
		</div>
	);
}
