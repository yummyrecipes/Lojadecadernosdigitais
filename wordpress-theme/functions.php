<?php
/**
 * Planner Fluxo Functions
 *
 * @package Planner_Fluxo
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Theme Setup
 */
function planner_fluxo_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1200, 800, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Menu', 'planner-fluxo' ),
        'footer'  => esc_html__( 'Footer Menu', 'planner-fluxo' ),
    ) );

    // Switch default core markup to output valid HTML5
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Add theme support for selective refresh for widgets
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add support for custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 150,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // WooCommerce support
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );

    // Elementor support
    add_theme_support( 'elementor' );
}
add_action( 'after_setup_theme', 'planner_fluxo_setup' );

/**
 * Set content width
 */
function planner_fluxo_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'planner_fluxo_content_width', 1200 );
}
add_action( 'after_setup_theme', 'planner_fluxo_content_width', 0 );

/**
 * Register Widget Areas
 */
function planner_fluxo_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Footer 1', 'planner-fluxo' ),
        'id'            => 'footer-1',
        'description'   => esc_html__( 'Add widgets here for footer column 1.', 'planner-fluxo' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer 2', 'planner-fluxo' ),
        'id'            => 'footer-2',
        'description'   => esc_html__( 'Add widgets here for footer column 2.', 'planner-fluxo' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer 3', 'planner-fluxo' ),
        'id'            => 'footer-3',
        'description'   => esc_html__( 'Add widgets here for footer column 3.', 'planner-fluxo' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
        'name'          => esc_html__( 'Footer 4', 'planner-fluxo' ),
        'id'            => 'footer-4',
        'description'   => esc_html__( 'Add widgets here for footer column 4.', 'planner-fluxo' ),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'planner_fluxo_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function planner_fluxo_scripts() {
    // Google Fonts
    wp_enqueue_style( 'planner-fluxo-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap', array(), null );

    // Font Awesome
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0' );

    // Theme stylesheet
    wp_enqueue_style( 'planner-fluxo-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

    // Theme scripts
    wp_enqueue_script( 'planner-fluxo-navigation', get_template_directory_uri() . '/js/navigation.js', array( 'jquery' ), wp_get_theme()->get( 'Version' ), true );

    // Smooth scroll
    wp_enqueue_script( 'planner-fluxo-smooth-scroll', get_template_directory_uri() . '/js/smooth-scroll.js', array( 'jquery' ), wp_get_theme()->get( 'Version' ), true );

    // Comment reply
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'planner_fluxo_scripts' );

/**
 * Elementor compatibility
 */
function planner_fluxo_register_elementor_locations( $elementor_theme_manager ) {
    $elementor_theme_manager->register_all_core_location();
}
add_action( 'elementor/theme/register_locations', 'planner_fluxo_register_elementor_locations' );

/**
 * WooCommerce customizations
 */
if ( class_exists( 'WooCommerce' ) ) {
    // Remove default WooCommerce wrapper
    remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
    remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10 );

    // Add custom wrapper
    function planner_fluxo_woocommerce_wrapper_start() {
        echo '<div class="container"><div class="content-area">';
    }
    add_action( 'woocommerce_before_main_content', 'planner_fluxo_woocommerce_wrapper_start', 10 );

    function planner_fluxo_woocommerce_wrapper_end() {
        echo '</div></div>';
    }
    add_action( 'woocommerce_after_main_content', 'planner_fluxo_woocommerce_wrapper_end', 10 );

    // Products per page
    function planner_fluxo_products_per_page() {
        return 12;
    }
    add_filter( 'loop_shop_per_page', 'planner_fluxo_products_per_page', 20 );

    // Product columns
    function planner_fluxo_loop_columns() {
        return 4;
    }
    add_filter( 'loop_shop_columns', 'planner_fluxo_loop_columns' );
}

/**
 * Custom logo output
 */
function planner_fluxo_custom_logo() {
    if ( has_custom_logo() ) {
        the_custom_logo();
    } else {
        echo '<a href="' . esc_url( home_url( '/' ) ) . '" class="site-title" style="font-size: 24px; font-weight: 700; color: #E89BB9;">';
        bloginfo( 'name' );
        echo '</a>';
    }
}

/**
 * Default menu fallback
 */
function planner_fluxo_default_menu() {
    echo '<ul id="primary-menu" class="menu-primary">';
    echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">Início</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/loja' ) ) . '">Loja</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/quem-somos' ) ) . '">Quem Somos</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/blog' ) ) . '">Blog</a></li>';
    echo '<li><a href="' . esc_url( home_url( '/contato' ) ) . '">Contato</a></li>';
    echo '</ul>';
}

/**
 * Add body classes
 */
function planner_fluxo_body_classes( $classes ) {
    // Add class if it's a singular page/post
    if ( is_singular() ) {
        $classes[] = 'singular';
    }

    // Add class if using Elementor
    if ( did_action( 'elementor/loaded' ) ) {
        $classes[] = 'elementor-active';
    }

    return $classes;
}
add_filter( 'body_class', 'planner_fluxo_body_classes' );

/**
 * Customize excerpt length
 */
function planner_fluxo_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'planner_fluxo_excerpt_length', 999 );

/**
 * Customize excerpt more
 */
function planner_fluxo_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'planner_fluxo_excerpt_more' );

/**
 * Add Read More button to excerpt
 */
function planner_fluxo_excerpt_read_more( $excerpt ) {
    if ( ! is_single() ) {
        $excerpt .= '<p><a href="' . get_permalink() . '" class="btn">Ler mais</a></p>';
    }
    return $excerpt;
}
add_filter( 'the_excerpt', 'planner_fluxo_excerpt_read_more' );

/**
 * Pagination
 */
function planner_fluxo_pagination() {
    the_posts_pagination( array(
        'mid_size'  => 2,
        'prev_text' => __( '&laquo; Anterior', 'planner-fluxo' ),
        'next_text' => __( 'Próximo &raquo;', 'planner-fluxo' ),
    ) );
}

/**
 * Remove jQuery Migrate
 */
function planner_fluxo_remove_jquery_migrate( $scripts ) {
    if ( ! is_admin() && isset( $scripts->registered['jquery'] ) ) {
        $script = $scripts->registered['jquery'];
        if ( $script->deps ) {
            $script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
        }
    }
}
add_action( 'wp_default_scripts', 'planner_fluxo_remove_jquery_migrate' );

/**
 * Disable emojis
 */
function planner_fluxo_disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
}
add_action( 'init', 'planner_fluxo_disable_emojis' );

/**
 * Security headers
 */
function planner_fluxo_security_headers() {
    header( 'X-Content-Type-Options: nosniff' );
    header( 'X-Frame-Options: SAMEORIGIN' );
    header( 'X-XSS-Protection: 1; mode=block' );
}
add_action( 'send_headers', 'planner_fluxo_security_headers' );