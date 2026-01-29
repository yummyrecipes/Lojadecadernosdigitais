<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Pular para o conteúdo', 'planner-fluxo' ); ?></a>

    <header id="masthead" class="site-header">
        <div class="header-container">
            <div class="site-logo">
                <?php planner_fluxo_custom_logo(); ?>
            </div>

            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav id="site-navigation" class="main-navigation">
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'menu_class'     => 'menu-primary',
                        'container'      => false,
                        'fallback_cb'    => 'planner_fluxo_default_menu',
                    )
                );
                ?>
            </nav>
        </div>
    </header>

    <div id="content" class="site-content">
