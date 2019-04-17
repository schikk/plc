<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Park Lake City</title>
		<!--styles-->
		<link rel="stylesheet" href="fonts/fonts.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
		<link rel="stylesheet" href="css/rSlider.min.css">
		<link rel="stylesheet" href="css/selectize.css">
		<link rel="stylesheet" href="css/main.css">
		<!-- SPECIFIC CSS -->
		<?php
			$currentpage = $_SERVER['REQUEST_URI'];
			if ( strpos( $currentpage, 'page-remodeled.php' ) == true ) { ?>
				<!-- PAGE - REMODELED -->
				<link rel="stylesheet" href="css/twentytwenty.css">
				<!-- PAGE - REMODELED (END) -->
			<?php }	
		?>	
	</head>
	<body class="home">
		<header class="main-header-container">
			<div class="header-sidebar">
				<h1 class="main-header-logo">
					<a href="/" class="header-logo">
						<img src="img/logo.svg" alt="Park Lake City">
					</a>					
				</h1>
				<ul class="header-sidebar-socials-list">
					<li>
						<a href="https://www.facebook.com/" target="_blank">
							<i class="fab fa-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/" target="_blank">
							<i class="fab fa-youtube"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/" target="_blank">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
				<ul class="header-sidebar-lang-list">
					<li class="active">
						<a href="/">UA</a>				
					</li>
					<li>
						<a href="/ru/">RU</a>				
					</li>
					<li>
						<a href="/en/">EN</a>				
					</li>
				</ul>
			</div>
			<div class="header-menu-btn" role="button">
				<svg class="header-menu-icon" xmlns="http://www.w3.org/2000/svg" width="31" height="21" viewBox="0 0 31 21" fill="none">
					<path class="menu-stroke menu-stroke1" d="M1 3.21656C2.3789 2.0962 6.88188 -0.0152297 14.6867 1.56833C19.5182 2.89338 26.3373 5.54346 30.0862 4.44466" stroke="#1C5630" stroke-width="2"/>
					<path class="menu-stroke menu-stroke2" d="M1 10.4217C2.3789 9.30137 6.88188 7.18994 14.6867 8.7735C19.5182 10.0985 26.3373 12.7486 30.0862 11.6498" stroke="#1C5630" stroke-width="2"/>
					<path class="menu-stroke menu-stroke3" d="M1 17.6269C2.3789 16.5065 6.88188 14.3951 14.6867 15.9787C19.5182 17.3037 26.3373 19.9538 30.0862 18.855" stroke="#1C5630" stroke-width="2"/>
				</svg>
				<span class="header-menu-text">MENU</span>
			</div>
			<div class="header-btns">
				<div class="cta-callback-btn callback-ringo" id="cta-callback-btn">
					<img src="img/elements/call-main.svg" alt="Phone icon">
					<div class="pulse"></div>
				</div>
				<div class="camera-btn" id="cctv-btn">
					<img src="img/elements/camera-main.svg" alt="CCTV icon">
				</div>		
			</div>
			<div class="header-menu-container">
				<a href="/" class="header-logo header-menu-logo">
					<img src="img/logo.svg" alt="Park Lake City">
				</a>
				<nav class="header-menu-nav">
					<ul class="header-menu-left-col-list">
						<li>
							<a href="page-about.php">Про комплекс</a>
						</li>
						<li>
							<a href="page-certificate.php">Сертифікація BREEAM</a>
						</li>
						<li>
							<a href="page-genplan.php">Планування</a>
						</li>
						<li>
							<a href="page-remodeled.php">Квартири з ремонтом</a>
						</li>
						<li>
							<a href="#">White Box</a>
						</li>
						<li>
							<a href="#">Хід будівництва</a>
						</li>
						<li>
							<a href="#">Галерея</a>
						</li>
					</ul>
					<ul class="header-menu-right-col-list">
						<li>
							<a href="#">Новини</a>
						</li>
						<li>
							<a href="#">Забудовник</a>
						</li>
						<li>
							<a href="#">Документація</a>
						</li>
						<li>
							<a href="#">Контакти</a>
						</li>
					</ul>
				</nav>
				<span class="close-menu-btn"></span>
				<a href="http://rossery.com" class="site-made-by" target="_blank">
					<span>Handcrafted by</span>
					<img src="img/elements/rossery-logo.svg" alt="rossery logo">
				</a>
				<div class="header-decorate-lines"></div>
			</div>
		</header>