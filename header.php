<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html <?php language_attributes(); ?> class="no-js">
<!--<![endif]-->

<head>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-772269-2"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-772269-2');
	</script>


	<meta charset="utf-8">

	<?php // force Internet Explorer to use the latest rendering engine available ?>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<title>
		<?php wp_title(''); ?>
	</title>

	<?php // mobile meta (hooray!) ?>
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
	<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">

	<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
	<?php // or, set /favicon.ico for IE10 win ?>
	<meta name="msapplication-TileColor" content="#f01d4f">
	<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
	<meta name="theme-color" content="#121212">

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php // wordpress head functions ?>
	<?php wp_head(); ?>
	<?php // end of wordpress head ?>


	<?php // drop Google Analytics Here ?>

	<?php // end analytics ?>

	 <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script> -->
	<!-- <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script> -->
	<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>






</head>

<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

	<div id="container">

		<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

			<div id="inner-header" class="wrap cf">

				<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
				<h1 id="logo" class="h1" itemscope itemtype="http://schema.org/Organization">
					<a href="<?php echo home_url(); ?>" rel="nofollow">
						<?php bloginfo('name'); ?>
					</a>
				</h1>
				<!--<p id="logo" class="h1" itemscope itemtype="http://schema.org/Organization"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p>-->

				<?php // if you'd like to use the site description you can un-comment it below ?>
				<?php // bloginfo('description'); ?>


					<div class="hamburger hamburger--elastic hidden-lg" tabindex="0" aria-label="Menu" role="button" aria-controls="navigation">
					<div class="hamburger-box">
						<div class="hamburger-inner"></div>
					</div>
				</div>
				<nav id="navigation">

				</nav>


				<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
					<?php wp_nav_menu(array(
    					         'container' => false,                           // remove nav container
    					         'container_class' => 'menu cf hidden-sm',                 // class of container (should you choose to use it)
    					         'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
    					         'menu_class' => 'nav top-nav cf hidden-sm',     // adding custom nav class
    					         'theme_location' => 'main-nav',                 // where it's located in the theme
    					         'before' => '',                                 // before the menu
        			               'after' => '',                                  // after the menu
        			               'link_before' => '',                            // before each link
        			               'link_after' => '',                             // after each link
        			               'depth' => 0,                                   // limit the depth of the nav
    					         'fallback_cb' => ''                             // fallback function (if there is one)
						)); ?>


				</nav>




			</div>




		</header>
