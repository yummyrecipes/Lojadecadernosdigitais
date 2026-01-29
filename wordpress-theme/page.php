<?php
/**
 * Template for displaying pages
 *
 * @package Planner_Fluxo
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="container">
                <div class="content-area">
                    <?php
                    // Check if page is built with Elementor
                    if ( class_exists( '\Elementor\Plugin' ) && \Elementor\Plugin::$instance->db->is_built_with_elementor( get_the_ID() ) ) {
                        the_content();
                    } else {
                        ?>
                        <header class="entry-header">
                            <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                        </header>

                        <div class="entry-content">
                            <?php
                            the_content();

                            wp_link_pages(
                                array(
                                    'before' => '<div class="page-links">' . esc_html__( 'Páginas:', 'planner-fluxo' ),
                                    'after'  => '</div>',
                                )
                            );
                            ?>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </article>
        <?php
    endwhile;
    ?>
</main>

<?php
get_footer();
