<?php
/**
 * The main template file
 *
 * @package Planner_Fluxo
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container">
        <div class="content-area">
            <?php
            if ( have_posts() ) :

                if ( is_home() && ! is_front_page() ) :
                    ?>
                    <header>
                        <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
                    </header>
                    <?php
                endif;

                /* Start the Loop */
                while ( have_posts() ) :
                    the_post();

                    get_template_part( 'template-parts/content', get_post_type() );

                endwhile;

                planner_fluxo_pagination();

            else :

                get_template_part( 'template-parts/content', 'none' );

            endif;
            ?>
        </div>
    </div>
</main>

<?php
get_footer();
