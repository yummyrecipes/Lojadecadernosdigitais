<?php
/**
 * Template for displaying single posts
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
                    <header class="entry-header">
                        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                        
                        <div class="entry-meta">
                            <span class="posted-on">
                                <i class="far fa-calendar"></i>
                                <?php echo get_the_date(); ?>
                            </span>
                            <span class="byline">
                                <i class="far fa-user"></i>
                                <?php the_author(); ?>
                            </span>
                            <?php if ( has_category() ) : ?>
                                <span class="cat-links">
                                    <i class="far fa-folder"></i>
                                    <?php the_category( ', ' ); ?>
                                </span>
                            <?php endif; ?>
                        </div>
                    </header>

                    <?php if ( has_post_thumbnail() ) : ?>
                        <div class="post-thumbnail">
                            <?php the_post_thumbnail( 'large' ); ?>
                        </div>
                    <?php endif; ?>

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

                    <?php if ( has_tag() ) : ?>
                        <footer class="entry-footer">
                            <div class="tags-links">
                                <i class="fas fa-tags"></i>
                                <?php the_tags( '', ', ' ); ?>
                            </div>
                        </footer>
                    <?php endif; ?>

                    <?php
                    // Previous/next post navigation
                    the_post_navigation(
                        array(
                            'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Anterior:', 'planner-fluxo' ) . '</span> <span class="nav-title">%title</span>',
                            'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Próximo:', 'planner-fluxo' ) . '</span> <span class="nav-title">%title</span>',
                        )
                    );

                    // Comments
                    if ( comments_open() || get_comments_number() ) :
                        comments_template();
                    endif;
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
