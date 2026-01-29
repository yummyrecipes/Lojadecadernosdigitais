    </div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="footer-widgets">
            <div class="footer-widget footer-col-1">
                <?php if ( is_active_sidebar( 'footer-1' ) ) : ?>
                    <?php dynamic_sidebar( 'footer-1' ); ?>
                <?php else : ?>
                    <div class="footer-logo">
                        <?php planner_fluxo_custom_logo(); ?>
                    </div>
                    <p>Transforme sua rotina com planners digitais elegantes e funcionais. Organização com estilo para mulheres que querem mais!</p>
                    <div class="footer-social">
                        <a href="https://instagram.com/plannerfluxo" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="https://facebook.com/plannerfluxo" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://pinterest.com/plannerfluxo" target="_blank" title="Pinterest"><i class="fab fa-pinterest-p"></i></a>
                        <a href="https://wa.me/5511999999999" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                    </div>
                <?php endif; ?>
            </div>

            <div class="footer-widget footer-col-2">
                <?php if ( is_active_sidebar( 'footer-2' ) ) : ?>
                    <?php dynamic_sidebar( 'footer-2' ); ?>
                <?php else : ?>
                    <h3>Links Rápidos</h3>
                    <ul class="footer-menu">
                        <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/loja' ) ); ?>">Loja</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/clube-freebies' ) ); ?>">Clube de Freebies</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/afiliados' ) ); ?>">Programa de Afiliados</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>">Blog</a></li>
                    </ul>
                <?php endif; ?>
            </div>

            <div class="footer-widget footer-col-3">
                <?php if ( is_active_sidebar( 'footer-3' ) ) : ?>
                    <?php dynamic_sidebar( 'footer-3' ); ?>
                <?php else : ?>
                    <h3>Institucional</h3>
                    <ul class="footer-menu">
                        <li><a href="<?php echo esc_url( home_url( '/quem-somos' ) ); ?>">Quem Somos</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/contato' ) ); ?>">Contato</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/#duvidas' ) ); ?>">Dúvidas Frequentes</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/politica-privacidade' ) ); ?>">Política de Privacidade</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/termos-uso' ) ); ?>">Termos de Uso</a></li>
                    </ul>
                <?php endif; ?>
            </div>

            <div class="footer-widget footer-col-4">
                <?php if ( is_active_sidebar( 'footer-4' ) ) : ?>
                    <?php dynamic_sidebar( 'footer-4' ); ?>
                <?php else : ?>
                    <h3>Fale Conosco</h3>
                    <p><i class="fas fa-envelope"></i> <a href="mailto:contato@plannerfluxo.com.br">contato@plannerfluxo.com.br</a></p>
                    <p><i class="fab fa-whatsapp"></i> <a href="https://wa.me/5511999999999" target="_blank">(11) 99999-9999</a></p>
                    <p><i class="fab fa-instagram"></i> <a href="https://instagram.com/plannerfluxo" target="_blank">@plannerfluxo</a></p>
                    <p><i class="fas fa-clock"></i> Seg-Sex: 9h às 18h</p>
                <?php endif; ?>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <p>© <?php echo date( 'Y' ); ?> <strong><?php bloginfo( 'name' ); ?></strong>. Todos os direitos reservados. | Desenvolvido com 💖 para mulheres que querem organização com estilo.</p>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
function toggleMenu() {
    var menu = document.getElementById('primary-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    var menu = document.getElementById('primary-menu');
    var toggle = document.querySelector('.menu-toggle');
    
    if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(2);
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
</script>

</body>
</html>
