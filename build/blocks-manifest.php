<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/hero-block',
		'version' => '0.1.0',
		'title' => 'Hero Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Show one image on the right and one image in the grid on the right.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'hero-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'foregroundImageId' => array(
				'type' => 'number'
			),
			'foregroundImageUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-foreground img',
				'attribute' => 'src'
			),
			'foregroundImageAlt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-foreground img',
				'attribute' => 'alt'
			),
			'backgroundImageId' => array(
				'type' => 'number'
			),
			'backgroundImageUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-background img',
				'attribute' => 'src'
			),
			'backgroundImageAlt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-background img',
				'attribute' => 'alt'
			)
		)
	)
);
