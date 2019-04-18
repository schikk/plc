<? include("header.php") ?>
	<main class="page-section-1 page-genplan-general">
		<section class="main-genplan">
			<a href="javascript:history.go(-1)" class="back-to-ganplan-btn">Генплан</a>
			<svg class="main-genplan-svg" style="background-image: url(img/genplan/section1.jpg);" viewBox="0 0 1821.3333 933.33331">
				<a xlink:href="category-section-floors.php" class="genplan-link" id="genplan-link-section1" data-description="<span class='floor-text1'>Дім 1</span><span class='floor-text'>1</span><span class='floor-text2'>поверх</span>">
					<path class="floor-hovered" d="m 598.51161,454.24303 161.57004,37.46552 116.84557,70.24784 247.97488,65.09633 0.3507,36.72327 L 876.22687,598.8703 751.38276,526.01697 599.05306,488.2657 Z"/>
				</a>
				<a xlink:href="category-section-floors.php" class="genplan-link" id="genplan-link-section1" data-description="<span class='floor-text1'>Дім 1</span><span class='floor-text'>2-3</span><span class='floor-text2'>типовий поверх</span>">
					<path class="floor-hovered" d="m 598.51161,454.24303 -2.10744,-57.36907 156.88685,36.52888 122.69956,73.99439 246.56992,62.05226 2.3416,57.60323 -247.97488,-65.09633 -116.84557,-70.24784 z"/>
				</a>
				<a xlink:href="category-section-floors.php" class="genplan-link" id="genplan-link-section1" data-description="<span class='floor-text1'>Дім 1</span><span class='floor-text'>4</span><span class='floor-text2'>типовий поверх</span>">
					<path class="floor-hovered" d="m 596.40417,396.87396 156.88685,36.52888 122.69956,73.99439 246.56992,62.05226 -1.2815,-30.84877 L 877.22033,479.98691 755.02542,408.45818 595.4104,369.05116 Z"/>
				</a>								
			</svg>
			<div class="genplan-description">
				<span class="genplan-text" id="genplan-text"></span>			
			</div>
		</section>
		<a href="#" class="plc-btn blue-white-btn" id="choose-in-filter-btn">Вибір за фільтром</a>
		<? include("filter-overlay.php") ?>
	</main>
<? include("footer.php") ?>