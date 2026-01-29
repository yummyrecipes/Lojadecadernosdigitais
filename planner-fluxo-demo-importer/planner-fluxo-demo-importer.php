<?php
/**
 * Plugin Name: Planner Fluxo Demo Importer
 * Plugin URI: https://plannerfluxo.com.br
 * Description: Importa conteúdo demo completo para o tema Planner Fluxo com 1 clique! Páginas, posts, configurações e mais.
 * Version: 1.0.0
 * Author: Planner Fluxo
 * Author URI: https://plannerfluxo.com.br
 * Text Domain: planner-fluxo-importer
 * License: GPL v2 or later
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Planner_Fluxo_Demo_Importer {
    
    public function __construct() {
        add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
        add_action( 'admin_post_pf_import_demo', array( $this, 'import_demo_content' ) );
        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_styles' ) );
    }
    
    public function enqueue_admin_styles( $hook ) {
        if ( 'toplevel_page_planner-fluxo-importer' !== $hook ) {
            return;
        }
        
        wp_add_inline_style( 'wp-admin', '
            .pf-importer-wrap {
                max-width: 800px;
                margin: 40px auto;
                background: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            }
            .pf-importer-header {
                text-align: center;
                margin-bottom: 40px;
            }
            .pf-importer-header h1 {
                color: #E89BB9;
                font-size: 32px;
                margin-bottom: 10px;
            }
            .pf-import-btn {
                background: linear-gradient(135deg, #E89BB9 0%, #F5A962 100%);
                color: white;
                border: none;
                padding: 18px 48px;
                font-size: 18px;
                font-weight: 600;
                border-radius: 50px;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(232, 155, 185, 0.3);
                transition: transform 0.3s ease;
            }
            .pf-import-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(232, 155, 185, 0.4);
            }
            .pf-features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 40px 0;
            }
            .pf-feature {
                text-align: center;
                padding: 20px;
                background: #FFF5F8;
                border-radius: 10px;
            }
            .pf-feature-icon {
                font-size: 40px;
                margin-bottom: 10px;
            }
            .pf-feature-title {
                color: #E89BB9;
                font-weight: 600;
                margin-bottom: 5px;
            }
            .pf-notice {
                background: #FFF5F8;
                border-left: 4px solid #E89BB9;
                padding: 20px;
                margin: 20px 0;
                border-radius: 4px;
            }
        ' );
    }
    
    public function add_admin_menu() {
        add_menu_page(
            'Planner Fluxo Importer',
            'Import Demo',
            'manage_options',
            'planner-fluxo-importer',
            array( $this, 'render_admin_page' ),
            'dashicons-download',
            59
        );
    }
    
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <div class="pf-importer-wrap">
                <div class="pf-importer-header">
                    <h1>🎉 Planner Fluxo - Importador de Demo</h1>
                    <p style="font-size: 16px; color: #666;">Importe todo o conteúdo demo com apenas 1 clique!</p>
                </div>
                
                <div class="pf-features">
                    <div class="pf-feature">
                        <div class="pf-feature-icon">📄</div>
                        <div class="pf-feature-title">Páginas</div>
                        <p style="color: #666; font-size: 14px;">5 páginas completas</p>
                    </div>
                    <div class="pf-feature">
                        <div class="pf-feature-icon">📝</div>
                        <div class="pf-feature-title">Posts</div>
                        <p style="color: #666; font-size: 14px;">Posts de blog</p>
                    </div>
                    <div class="pf-feature">
                        <div class="pf-feature-icon">🎨</div>
                        <div class="pf-feature-title">Menu</div>
                        <p style="color: #666; font-size: 14px;">Menu configurado</p>
                    </div>
                    <div class="pf-feature">
                        <div class="pf-feature-icon">⚙️</div>
                        <div class="pf-feature-title">Configurações</div>
                        <p style="color: #666; font-size: 14px;">Tudo pronto!</p>
                    </div>
                </div>
                
                <div class="pf-notice">
                    <strong style="color: #E89BB9;">⚠️ Atenção:</strong> Este processo irá criar novas páginas e posts. Recomendamos usar em uma instalação limpa do WordPress.
                </div>
                
                <form method="post" action="<?php echo admin_url( 'admin-post.php' ); ?>" style="text-align: center; margin-top: 40px;">
                    <?php wp_nonce_field( 'pf_import_demo_action', 'pf_import_demo_nonce' ); ?>
                    <input type="hidden" name="action" value="pf_import_demo">
                    <button type="submit" class="pf-import-btn">
                        ✨ Importar Conteúdo Demo Agora
                    </button>
                </form>
                
                <div style="text-align: center; margin-top: 30px; color: #999; font-size: 14px;">
                    <p>Tempo estimado: 30 segundos</p>
                </div>
            </div>
        </div>
        <?php
    }
    
    public function import_demo_content() {
        // Verify nonce
        if ( ! isset( $_POST['pf_import_demo_nonce'] ) || 
             ! wp_verify_nonce( $_POST['pf_import_demo_nonce'], 'pf_import_demo_action' ) ) {
            wp_die( 'Erro de segurança. Tente novamente.' );
        }
        
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_die( 'Você não tem permissão para fazer isso.' );
        }
        
        // Create pages
        $this->create_pages();
        
        // Create posts
        $this->create_posts();
        
        // Create menu
        $this->create_menu();
        
        // Configure settings
        $this->configure_settings();
        
        // Redirect with success message
        wp_redirect( add_query_arg( 
            array( 'page' => 'planner-fluxo-importer', 'imported' => 'true' ), 
            admin_url( 'admin.php' ) 
        ) );
        exit;
    }
    
    private function create_pages() {
        $pages = array(
            array(
                'post_title'   => 'Início',
                'post_name'    => 'inicio',
                'post_content' => $this->get_homepage_content(),
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'menu_order'   => 1,
            ),
            array(
                'post_title'   => 'Loja',
                'post_name'    => 'loja',
                'post_content' => '[products limit="12" columns="4"]',
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'menu_order'   => 2,
            ),
            array(
                'post_title'   => 'Quem Somos',
                'post_name'    => 'quem-somos',
                'post_content' => $this->get_about_content(),
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'menu_order'   => 3,
            ),
            array(
                'post_title'   => 'Blog',
                'post_name'    => 'blog',
                'post_content' => '',
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'menu_order'   => 4,
            ),
            array(
                'post_title'   => 'Contato',
                'post_name'    => 'contato',
                'post_content' => $this->get_contact_content(),
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'menu_order'   => 5,
            ),
        );
        
        foreach ( $pages as $page ) {
            // Check if page already exists
            $existing = get_page_by_path( $page['post_name'] );
            if ( ! $existing ) {
                wp_insert_post( $page );
            }
        }
    }
    
    private function create_posts() {
        $posts = array(
            array(
                'post_title'   => '5 Dicas para Organizar sua Rotina',
                'post_content' => $this->get_post_content_1(),
                'post_excerpt' => 'Descubra 5 dicas essenciais para organizar sua rotina de forma eficiente e prática.',
                'post_status'  => 'publish',
                'post_type'    => 'post',
            ),
            array(
                'post_title'   => 'Como Usar Planner Digital no iPad',
                'post_content' => $this->get_post_content_2(),
                'post_excerpt' => 'Aprenda a usar seu planner digital no iPad com o GoodNotes e Notability.',
                'post_status'  => 'publish',
                'post_type'    => 'post',
            ),
            array(
                'post_title'   => 'Benefícios do Planejamento Digital',
                'post_content' => $this->get_post_content_3(),
                'post_excerpt' => 'Descubra por que o planejamento digital está conquistando milhares de pessoas.',
                'post_status'  => 'publish',
                'post_type'    => 'post',
            ),
        );
        
        foreach ( $posts as $post ) {
            wp_insert_post( $post );
        }
    }
    
    private function create_menu() {
        // Create menu
        $menu_name = 'Menu Principal';
        $menu_exists = wp_get_nav_menu_object( $menu_name );
        
        if ( ! $menu_exists ) {
            $menu_id = wp_create_nav_menu( $menu_name );
            
            // Add pages to menu
            $pages = array( 'inicio', 'loja', 'quem-somos', 'blog', 'contato' );
            $position = 1;
            
            foreach ( $pages as $page_slug ) {
                $page = get_page_by_path( $page_slug );
                if ( $page ) {
                    wp_update_nav_menu_item( $menu_id, 0, array(
                        'menu-item-object-id' => $page->ID,
                        'menu-item-object'    => 'page',
                        'menu-item-type'      => 'post_type',
                        'menu-item-status'    => 'publish',
                        'menu-item-position'  => $position++,
                    ) );
                }
            }
            
            // Assign menu to location
            $locations = get_theme_mod( 'nav_menu_locations' );
            $locations['primary'] = $menu_id;
            set_theme_mod( 'nav_menu_locations', $locations );
        }
    }
    
    private function configure_settings() {
        // Set homepage
        $homepage = get_page_by_path( 'inicio' );
        $blog_page = get_page_by_path( 'blog' );
        
        if ( $homepage ) {
            update_option( 'page_on_front', $homepage->ID );
            update_option( 'show_on_front', 'page' );
        }
        
        if ( $blog_page ) {
            update_option( 'page_for_posts', $blog_page->ID );
        }
        
        // Set permalink structure
        update_option( 'permalink_structure', '/%postname%/' );
        flush_rewrite_rules();
        
        // Set WooCommerce shop page
        if ( class_exists( 'WooCommerce' ) ) {
            $shop_page = get_page_by_path( 'loja' );
            if ( $shop_page ) {
                update_option( 'woocommerce_shop_page_id', $shop_page->ID );
            }
        }
    }
    
    private function get_homepage_content() {
        return '<!-- wp:html -->
<div style="background: linear-gradient(135deg, #E89BB9 0%, #F5A962 100%); color: white; padding: 120px 20px; text-align: center; margin: 0 0 80px 0;">
    <h1 style="font-size: 56px; margin-bottom: 24px; font-family: Montserrat, sans-serif; font-weight: 700; line-height: 1.2;">
        Organize Sua Vida<br>com Estilo
    </h1>
    <p style="font-size: 24px; margin-bottom: 40px; opacity: 0.95;">
        Planners digitais elegantes para mulheres que querem mais!
    </p>
    <a href="/loja" style="background: white; color: #E89BB9; padding: 18px 48px; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 18px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        Ver Planners →
    </a>
</div>

<div style="max-width: 1200px; margin: 0 auto 100px; padding: 0 20px;">
    <h2 style="text-align: center; font-size: 42px; color: #E89BB9; margin-bottom: 70px; font-family: Montserrat, sans-serif; font-weight: 700;">
        Como Funciona?
    </h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px; margin-bottom: 100px;">
        <div style="text-align: center; padding: 40px 20px;">
            <div style="width: 100px; height: 100px; background: #E89BB9; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 42px; font-weight: 700; margin: 0 auto 25px;">1</div>
            <h3 style="color: #E89BB9; margin-bottom: 18px; font-size: 24px;">Escolha Seu Planner</h3>
            <p style="color: #666; font-size: 16px; line-height: 1.7;">Navegue por nossa coleção de planners digitais elegantes.</p>
        </div>
        
        <div style="text-align: center; padding: 40px 20px;">
            <div style="width: 100px; height: 100px; background: #F5A962; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 42px; font-weight: 700; margin: 0 auto 25px;">2</div>
            <h3 style="color: #F5A962; margin-bottom: 18px; font-size: 24px;">Faça o Download</h3>
            <p style="color: #666; font-size: 16px; line-height: 1.7;">Receba instantaneamente o link para download.</p>
        </div>
        
        <div style="text-align: center; padding: 40px 20px;">
            <div style="width: 100px; height: 100px; background: #E89BB9; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 42px; font-weight: 700; margin: 0 auto 25px;">3</div>
            <h3 style="color: #E89BB9; margin-bottom: 18px; font-size: 24px;">Comece a Organizar</h3>
            <p style="color: #666; font-size: 16px; line-height: 1.7;">Use no tablet, celular ou computador!</p>
        </div>
    </div>
</div>

<div style="max-width: 1200px; margin: 0 auto 100px; padding: 0 20px;">
    <h2 style="text-align: center; font-size: 42px; color: #E89BB9; margin-bottom: 70px; font-family: Montserrat, sans-serif; font-weight: 700;">
        O Que Nossas Clientes Dizem
    </h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
        <div style="background: white; padding: 35px; border-radius: 15px; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
            <div style="color: #F5A962; font-size: 32px; margin-bottom: 15px;">★★★★★</div>
            <p style="color: #666; font-size: 16px; line-height: 1.7; margin-bottom: 20px; font-style: italic;">
                "O planner mais lindo que já usei! Mudou completamente minha rotina."
            </p>
            <p style="color: #E89BB9; font-weight: 600;">— Ana Paula Silva</p>
        </div>
        
        <div style="background: white; padding: 35px; border-radius: 15px; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
            <div style="color: #F5A962; font-size: 32px; margin-bottom: 15px;">★★★★★</div>
            <p style="color: #666; font-size: 16px; line-height: 1.7; margin-bottom: 20px; font-style: italic;">
                "Comprei e me apaixonei! Uso todos os dias no iPad. Super prático!"
            </p>
            <p style="color: #E89BB9; font-weight: 600;">— Juliana Santos</p>
        </div>
        
        <div style="background: white; padding: 35px; border-radius: 15px; box-shadow: 0 8px 30px rgba(0,0,0,0.08);">
            <div style="color: #F5A962; font-size: 32px; margin-bottom: 15px;">★★★★★</div>
            <p style="color: #666; font-size: 16px; line-height: 1.7; margin-bottom: 20px; font-style: italic;">
                "Melhor investimento! Me ajuda a manter tudo organizado."
            </p>
            <p style="color: #E89BB9; font-weight: 600;">— Mariana Costa</p>
        </div>
    </div>
</div>

<div style="background: linear-gradient(135deg, #E89BB9 0%, #F5A962 100%); padding: 100px 20px; text-align: center; color: white; margin-top: 100px;">
    <h2 style="font-size: 42px; margin-bottom: 24px; font-family: Montserrat, sans-serif; font-weight: 700;">
        Pronta para Transformar Sua Rotina?
    </h2>
    <p style="font-size: 20px; margin-bottom: 40px; opacity: 0.95; max-width: 800px; margin-left: auto; margin-right: auto;">
        Junte-se a milhares de mulheres que já organizaram suas vidas!
    </p>
    <a href="/loja" style="background: white; color: #E89BB9; padding: 18px 48px; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 18px; display: inline-block; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
        Explorar Planners Agora →
    </a>
</div>
<!-- /wp:html -->';
    }
    
    private function get_about_content() {
        return '<!-- wp:html -->
<div style="max-width: 1000px; margin: 60px auto; padding: 0 20px;">
    <h1 style="text-align: center; font-size: 48px; color: #E89BB9; margin-bottom: 60px;">Sobre o Planner Fluxo</h1>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 80px;">
        <div>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop" alt="Fundadora" style="width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        </div>
        <div>
            <h2 style="color: #E89BB9; font-size: 32px; margin-bottom: 20px;">Nossa História</h2>
            <p style="color: #666; line-height: 1.8; margin-bottom: 20px;">
                Tudo começou quando percebi que os planners disponíveis no mercado não atendiam às necessidades de mulheres modernas que buscam praticidade sem abrir mão do estilo.
            </p>
            <p style="color: #666; line-height: 1.8; margin-bottom: 20px;">
                Assim nasceu o <strong style="color: #E89BB9;">Planner Fluxo</strong>: uma coleção de planners digitais elegantes, funcionais e pensados especialmente para você.
            </p>
            <p style="color: #666; line-height: 1.8;">
                Hoje, somos uma comunidade de milhares de mulheres que transformaram suas rotinas!
            </p>
        </div>
    </div>
</div>
<!-- /wp:html -->';
    }
    
    private function get_contact_content() {
        return '<!-- wp:html -->
<div style="max-width: 800px; margin: 60px auto; padding: 0 20px;">
    <h1 style="text-align: center; font-size: 48px; color: #E89BB9; margin-bottom: 60px;">Entre em Contato 💖</h1>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 60px;">
        <div style="background: #FFF5F8; padding: 30px; border-radius: 15px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 15px;">📧</div>
            <h3 style="color: #E89BB9; margin-bottom: 10px;">E-mail</h3>
            <a href="mailto:contato@plannerfluxo.com.br" style="color: #666;">contato@plannerfluxo.com.br</a>
        </div>
        
        <div style="background: #FFF5F8; padding: 30px; border-radius: 15px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 15px;">💬</div>
            <h3 style="color: #F5A962; margin-bottom: 10px;">WhatsApp</h3>
            <a href="https://wa.me/5511999999999" style="color: #666;">(11) 99999-9999</a>
        </div>
        
        <div style="background: #FFF5F8; padding: 30px; border-radius: 15px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 15px;">📷</div>
            <h3 style="color: #E89BB9; margin-bottom: 10px;">Instagram</h3>
            <a href="https://instagram.com/plannerfluxo" style="color: #666;">@plannerfluxo</a>
        </div>
    </div>
</div>
<!-- /wp:html -->';
    }
    
    private function get_post_content_1() {
        return '<p>Organizar a rotina pode parecer desafiador, mas com as ferramentas certas fica muito mais fácil! Confira nossas 5 dicas essenciais:</p>

<h2>1. Defina suas prioridades</h2>
<p>Antes de começar a planejar, identifique o que é realmente importante para você.</p>

<h2>2. Use um planner digital</h2>
<p>Planners digitais são práticos, sustentáveis e sempre à mão!</p>

<h2>3. Crie blocos de tempo</h2>
<p>Reserve horários específicos para cada atividade.</p>

<h2>4. Revise semanalmente</h2>
<p>Faça uma revisão semanal para ajustar o que não funcionou.</p>

<h2>5. Seja flexível</h2>
<p>Lembre-se que imprevistos acontecem. Adapte-se quando necessário!</p>';
    }
    
    private function get_post_content_2() {
        return '<p>Usar um planner digital no iPad é uma das melhores formas de se manter organizada. Veja como:</p>

<h2>Aplicativos Recomendados</h2>
<p>Os melhores apps para usar planners digitais são: GoodNotes, Notability e Noteshelf.</p>

<h2>Como Importar</h2>
<p>Depois de baixar seu planner em PDF, basta abrir no aplicativo de anotações e começar a usar!</p>

<h2>Dicas de Uso</h2>
<p>Use uma caneta stylus para uma experiência mais natural. A Apple Pencil é perfeita para iPad!</p>';
    }
    
    private function get_post_content_3() {
        return '<p>O planejamento digital está revolucionando a forma como organizamos nossas vidas. Veja os benefícios:</p>

<h2>Sustentabilidade</h2>
<p>Sem desperdício de papel! Contribua para um planeta melhor.</p>

<h2>Praticidade</h2>
<p>Seu planner sempre com você, em qualquer dispositivo.</p>

<h2>Economia</h2>
<p>Não precisa comprar planner novo todo ano. Use e reutilize!</p>

<h2>Personalização</h2>
<p>Escolha cores, adicione adesivos digitais e deixe do seu jeito!</p>';
    }
}

// Initialize plugin
new Planner_Fluxo_Demo_Importer();
