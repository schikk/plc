		<footer class="main-footer">
			<div class="main-footer-left-col">
				<div id="contacts_map">
					<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOV433evTNZIBxrVfA_-HPhW2iFgfXXbc&amp" type="text/javascript"></script>
				</div>
			</div>
			<div class="main-footer-right-col">
				<h6>Зворотній зв’язок</h6>
				<ul class="main-footer-contacts-list">
                    <li>
                        <span>Адреса</span>
                        <address>Київська обл., с. Підгірці</address>
                    </li>
                    <li>
                        <span>Телефон</span>
                        <a href="tel:+380445632134">+38 044 563 21 34</a>
                    </li>
                    <li>
                        <span>E-mail</span>
                        <a href="mailto:parklakecity@gmail.com">parklakecity@gmail.com</a>
                    </li>
                </ul>
                <a href="#" class="plc-btn green-btn" id="plc-form-init-btn">Організувати перегляд</a>
			</div>
		</footer>
		<!-- MAIN JS -->
		<script src="js/libs/jquery-3.3.1.min.js"></script>
		<script src="js/libs/jquery-migrate-3.0.0.min.js"></script>
		<script src="js/libs/jquery.mobile.custom.min.js"></script>
		<script src="js/main.js"></script>
		<!-- SPECIFIC JS -->
		<?php
			$currentpage = $_SERVER['REQUEST_URI'];
			if ( $currentpage == '/' || $currentpage == '/plc/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
				<!-- PAGE - FRONTPAGE -->
				<script src="js/templates/page-frontpage.js"></script>
				<!-- PAGE - FRONTPAGE (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-about.php' ) == true ) { ?>
				<!-- PAGE - ABOUT -->
				<script src="js/specific/about-page.js"></script>
				<!-- PAGE - ABOUT (END) -->
			<?php }															
		?>
	</body>
</html>
