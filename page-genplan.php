<? include("header.php") ?>
	<main class="page-genplan page-genplan-general">
		<section class="main-genplan">
			<h2>Оберіть секцію</h2>
			<svg class="main-genplan-svg" style="background-image: url(img/genplan/main-genplan.jpg);" width="1920" height="1080" viewBox="0 0 1920 1080">
				<a xlink:href="page-section-1.php" class="genplan-link" id="genplan-link-section1" data-description="Секція 1">
					<path class="path-part" d="M 351.5,580.5 V 521 l 9,-7.5 9,2.5 8.5,-12.5 35,11 12,-7.5 6,3.5 19.5,-11 25.5,16.5 19.5,-9 81,19 v 100.5 l 9,1.5 -31.5,27.5 -10.43513,-0.17081 -10.13728,-0.90735 -32.63329,-7.82198 -35.48456,-9.7857 -48.1416,-27.78761 -12.74336,-4.0708 L 337,587 Z"/>
				</a>
				<a xlink:href="page-section-2.php" class="genplan-link" id="genplan-link-section2" data-description="Секція 2">
					<path class="path-part" d="m 466,374.449 38.803,37.281 14.40054,-3.94239 31.15044,-12.65487 21.50443,-9.38053 40,-22.38938 35.22124,-21.50443 3.27433,-3.62831 1.41593,-13.45133 -0.93791,-58.07776 -12.65,-8.486 -32.328,10.029 -0.703,-8.486 -16.733,-5.758 -17.703,12.701 -35.14,-11.571 -61.142,21.6 v 98.284 z"/>
				</a>
				<path class="path-part-hover path-part-hover-section-2" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V1080H1920V0ZM617.421 359.458C603.695 367.906 595.159 373.16 575.018 383.958C569.493 386.92 563.52 389.467 555.731 392.789C552.231 394.282 548.365 395.931 544.007 397.844C539.428 399.854 516.916 409.018 504.803 411.73L466 374.449L474.433 375.014V276.73L535.575 255.13L570.715 266.701L588.418 254L605.151 259.758L605.854 268.244L638.182 258.215L650.832 266.701L650.944 272.047C651.754 310.591 652.074 325.847 650.83 333.983C650.76 334.44 650.705 334.862 650.653 335.256C650.003 340.205 649.919 340.843 629.044 352.33C624.662 355.001 620.877 357.331 617.421 359.458Z" fill="#282828"/>
				<path class="path-part-hover path-part-hover-section-1" opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V1080H1920V0ZM357.23 592.304C379.516 598.101 410.129 606.064 413 607.5C418.532 608.956 430.505 616.154 442.406 623.307C450.943 628.44 459.443 633.549 465.5 636.5C472 639.667 518 651 531.5 654C535.405 654.868 544 655.5 554 655.5L585.5 628L576.5 626.5V554V526L495.5 507L476 516L450.5 499.5L431 510.5L425 507L413 514.5L378 503.5L369.5 516L360.5 513.5L351.5 521V580.5L337 587C340.997 588.082 348.47 590.026 357.23 592.304Z" fill="#282828"/>
			</svg>
			<div class="genplan-description">
				<span class="genplan-text" id="genplan-text"></span>			
			</div>
		</section>
		<a href="#" class="plc-btn blue-white-btn" id="choose-in-filter-btn">Вибір за фільтром</a>
		<? include("filter-overlay.php") ?>
	</main>
<? include("footer.php") ?>