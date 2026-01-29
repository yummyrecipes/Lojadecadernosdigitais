<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @package Planner_Fluxo
 */
?>

<section class="no-results not-found">
    <header class="page-header">
        <h1 class="page-title"><?php esc_html_e( 'Nada Encontrado', 'planner-fluxo' ); ?></h1>
    </header>

    <div class="page-content">
        <?php
        if ( is_home() && current_user_can( 'publish_posts' ) ) :
            ?>
            <p><?php
                printf(
                    wp_kses(
                        __( 'Pronto para publicar seu primeiro post? <a href="%1$s">Comece aqui</a>.', 'planner-fluxo' ),
                        array(
                            'a' => array(
                                'href' => array(),
                            ),
                        )
                    ),
                    esc_url( admin_url( 'post-new.php' ) )
                );
            ?></p>
            <?php
        elseif ( is_search() ) :
            ?>
            <p><?php esc_html_e( 'Desculpe, nenhum resultado encontrado. Por favor, tente novamente com palavras-chave diferentes.', 'planner-fluxo' ); ?></p>
            <?php
            get_search_form();
        else :
            ?>
            <p><?php esc_html_e( 'Parece que não conseguimos encontrar o que você está procurando. Talvez a busca possa ajudar.', 'planner-fluxo' ); ?></p>
            <?php
            get_search_form();
        endif;
        ?>
    </div>
</section>
