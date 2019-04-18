<? include("header.php") ?>
	<main class="page-section-2 page-genplan-general">
		<section class="main-genplan">
			<a href="javascript:history.go(-1)" class="back-to-ganplan-btn">Генплан</a>
			<svg class="main-genplan-svg" style="background-image: url(img/genplan/section1.jpg);" viewBox="0 0 1821.3333 933.33331">
				<a xlink:href="category-section-floors.php" class="genplan-link" id="genplan-link-section1" data-description="<span class='floor-text1'>Дім 2</span><span class='floor-text'>1-2</span><span class='floor-text2'>типовий поверх</span>">
					<path class="floor-hovered" d="m 596.40385,426.34037 160.93963,37.75127 119.54569,73.51563 243.72753,64.57454 19.8691,-10.928 -0.3312,64.57455 -12.9149,6.29187 L 876.22687,606.48678 747.74009,521.712 594.7481,481.97382 Z"/>
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