/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";

import {
	Button,
	PanelBody,
	PanelRow,
	ToggleControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		foregroundImageId,
		foregroundImageUrl,
		foregroundImageAlt,
		backgroundImageId,
		backgroundImageUrl,
		backgroundImageAlt,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Foreground Image", "hero-block")}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(image) =>
									setAttributes((previousAttributes) => ({
										...previousAttributes,
										foregroundImageId: image.id,
										foregroundImageUrl: image.url,
										foregroundImageAlt: image.alt,
									}))
								}
								allowedTypes={["image"]}
								value={foregroundImageId}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{foregroundImageUrl
											? __("Change Foreground Image", "hero-block")
											: __("Select Foreground Image", "hero-block")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>

				<PanelBody title={__("Background Image", "hero-block")}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(image) =>
									setAttributes((previousAttributes) => ({
										...previousAttributes,
										backgroundImageId: image.id,
										backgroundImageUrl: image.url,
										backgroundImageAlt: image.alt,
									}))
								}
								allowedTypes={["image"]}
								value={backgroundImageId}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{backgroundImageUrl
											? __("Change Background Image", "hero-block")
											: __("Select Background Image", "hero-block")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps({ className: "hero-block-preview" })}>
				<div className="hero-block-foreground">
					{foregroundImageUrl ? (
						<img src={foregroundImageUrl} alt={foregroundImageAlt} />
					) : (
						<p>{__("No foreground image selected", "hero-block")}</p>
					)}
				</div>
				<div
					className="hero-block-background"
					style={{ backgroundImage: `url(${backgroundImageUrl})` }}
				>
					{backgroundImageUrl ? (
						<img src={backgroundImageUrl} alt={backgroundImageAlt} />
					) : (
						<p>{__("No background image selected", "hero-block")}</p>
					)}
				</div>
			</div>
		</>
	);
}
