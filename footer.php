		<footer class="main-footer white-section">
			<div class="main-footer-left-col">
				<div id="contacts_map">
					<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFJl-oqf0NECka4ZBhXlOVfeUnLvAa-Yw" type="text/javascript"></script>
				</div>
				<div class="footer-decorate-line"></div>
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
                <a href="#" class="plc-btn green-btn plc-form-init-btn">Організувати перегляд</a>
			</div>
		</footer>
		<!-- GO UP ANCHOR -->
		<a href="#" class="up-anchor"></a>
		<!-- GALLERY MODAL -->
		<? include("gallery.php") ?>
		<!-- FEEDBACK FORM -->
		<div class="feedback-form-container">
			<span class="close-menu-btn"></span>
			<div class="feedback-form-wrapper">
				<h6>Замовити дзвінок</h6>
				<form action="#" id="form-feedback">
					<div class="input-wrapper">
						<input class="forms-input" type="text" id="client-name" name="client-name" placeholder="Ваше ім’я" autocomplete="off">
						<span class="wrong-mssg">Введіть коректне ім’я</span>
					</div>
					<div class="input-wrapper">
						<input class="forms-input" type="tel" id="client-phone" name="client-phone" placeholder="Ваш телефон" autocomplete="off">
						<span class="wrong-mssg">Ви не ввели номер телефону</span>
					</div>
					<span class="plc-btn green-btn">
	                    <input id="order-button" type="submit">
	                    <span>Відправити</span>
	                </span>
				</form>
			</div>
			<div class="success-mssg">
				<h6>Дякуємо за Вашу заявку!</h6>
				<p>Ми зв’яжемося з Вами найближчим часом</p>
			</div>
			<div class="decorate-lines"></div>
		</div>
		<!-- MAIN JS -->
		<script src="js/libs/jquery-3.3.1.min.js"></script>
		<script src="js/libs/jquery-migrate-3.0.0.min.js"></script>
		<script src="js/libs/jquery.mobile.custom.min.js"></script>
		<script src="js/libs/jquery.mask.min.js"></script>
		<script src="js/libs/sine-waves.min.js"></script>
		<script src="js/main.js"></script>
		<!-- SPECIFIC JS -->
		<?php
			$currentpage = $_SERVER['REQUEST_URI'];
			if ( $currentpage == '/' || $currentpage == '/plc/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
				<!-- PAGE - FRONTPAGE -->
				<script src="js/templates/page-frontpage.js"></script>
				<!-- PAGE - FRONTPAGE (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-genplan.php' ) || strpos( $currentpage, 'page-section-1.php' ) || strpos( $currentpage, 'page-section-2.php' ) == true ) { ?>
				<!-- PAGE - GENPLAN -->
				<script src="js/libs/rSlider.min.js"></script>
				<script src="js/templates/page-genplan.js"></script>
				<!-- PAGE - GENPLAN (END) -->
			<?php }
			if ( strpos( $currentpage, 'category-section-floors.php' ) == true ) { ?>
				<!-- PAGE - SECTIONS-FLOORS -->
				<script src="js/libs/selectize.js"></script>
				<script src="js/templates/category-section-floors.js"></script>
				<!-- PAGE - SECTIONS-FLOORS (END) -->
			<?php }
			if ( strpos( $currentpage, 'category-apartments-filter.php' ) == true ) { ?>
				<!-- PAGE - APARTMENTS FILTER -->
				<script src="js/libs/selectize.js"></script>
				<script src="js/libs/rSlider.min.js"></script>
				<script src="js/templates/category-apartments-filter.js"></script>
				<!-- PAGE -APARTMENTS FILTER (END) -->
			<?php }
			if ( strpos( $currentpage, 'single-apartment.php' ) == true ) { ?>
				<!-- PAGE - SINGLE APARTMENT -->
				<script src="js/templates/single-apartment.js"></script>
				<!-- PAGE - SINGLE APARTMENT (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-about.php' ) == true ) { ?>
				<!-- PAGE - ABOUT -->
				<script src="js/templates/page-about.js"></script>
				<!-- PAGE - ABOUT (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-remodeled.php' ) == true ) { ?>
				<!-- PAGE - REMODELED -->
				<script src="js/libs/jquery.event.move.js"></script>
				<script src="js/libs/jquery.twentytwenty.js"></script>
				<script src="js/templates/page-remodeled.js"></script>
				<!-- PAGE - REMODELED (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-progress.php' ) == true ) { ?>
				<!-- PAGE - PROGRESS -->
				<script src="js/templates/page-progress.js"></script>
				<!-- PAGE - PROGRESS (END) -->
			<?php }
			if ( strpos( $currentpage, 'single-progress.php' ) == true ) { ?>
				<!-- PAGE - SINGLE PROGRESS -->
				<script src="js/templates/single-progress.js"></script>
				<!-- PAGE - SINGLE PROGRESS (END) -->
			<?php }
			if ( strpos( $currentpage, 'single-news.php' ) == true ) { ?>
				<!-- PAGE - SINGLE NEWS -->
				<script src="js/templates/single-news.js"></script>
				<!-- PAGE - SINGLE NEWS (END) -->
			<?php }
			if ( strpos( $currentpage, 'about-developer.php' ) == true ) { ?>
				<!-- PAGE - ABOUT DEVELOPER -->
				<script src="js/templates/single-news.js"></script>
				<!-- PAGE - ABOUT DEVELOPER (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-certificate.php' ) == true ) { ?>
				<!-- PAGE - CERTIFICATE -->
				<script src="js/templates/page-certificate.js"></script>
				<!-- PAGE - CERTIFICATE (END) -->
			<?php }
			if ( strpos( $currentpage, 'page-about-developer.php' ) == true ) { ?>
				<!-- PAGE - ABOUT DEVELOPER -->
				<script src="js/templates/page-about-developer.js"></script>
				<!-- PAGE - ABOUT DEVELOPER (END) -->
			<?php }																														
		?>
	</body>
</html>
