<? include("header.php") ?>
	<main class="category-apartments-filter">
		<a href="javascript:history.go(-1)" class="back-to-ganplan-btn">До вибору квартири</a>
		<h1 class="animation-elementY">Вибір квартири</h1>
		<div class="category-apartments-filter-top-row animation-elementY">
			<div class="category-apartments-filter-top-left-col">
				<nav class="category-apartments-filter-nav">
					<ul class="category-apartments-filter-list">
						<li class="current-item">
							<a href="#">Всі квартири</a>
						</li>
						<li>
							<a href="#">Акційні</a>
						</li>
						<li>
							<a href="#">Коммерційна нерухомість</a>
						</li>
						<li>
							<a href="#">Паркінги</a>
						</li>
						<li>
							<a href="#">Комори</a>
						</li>
					</ul>
				</nav>
				<span class="total-number-filter-ap-result">Показано <span id="showed_items">6</span> квартир</span>
			</div>
			<div class="category-apartments-filter-top-right-col">
				<span class="show-param-filter-btn">Показати фільтри</span>
				<form action="#" id="sort_by_form">
					<div class="filter-range-block-select-floor">
						<span class="select-floor-title">Сортувати по</span>
	                    <select name="sort-param" id="sort_select_param">
	                        <option value="floors">Поверхам</option>
	                        <option value="rooms">Кількості кімнат</option>
	                        <option value="space">Площі</option>
	                    </select>
					</div>
                </form>
			</div>
		</div>
		<section class="category-apartments-filter-result white-section">
			<ul class="category-apartments-filter-result-list animation-elementY">
				<li>
					<a href="single-apartment.php">
						<span class="ap-item-name">1Е-1</span>
						<div class="ap-item-scheme-container">
							<img src="schemes/apartments-schemes/ap-scheme-test.png" alt="">
						</div>
						<div class="ap-item-info-container">
							<div class="ap-item-info-container-left-col">
								<span id="ap_item_space">54.36 м²</span>
								<span id="ap_item_rooms">1 кімната</span>
							</div>
							<div class="ap-item-info-container-right-col">
								<span id="ap_item_floors">7 поверх</span>
								<span id="ap_item_stage_section">1 черга, 1 секція</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="single-apartment.php">
						<span class="ap-item-name">1Е-1</span>
						<div class="ap-item-scheme-container">
							<img src="schemes/apartments-schemes/ap-scheme-test.png" alt="">
						</div>
						<div class="ap-item-info-container">
							<div class="ap-item-info-container-left-col">
								<span id="ap_item_space">54.36 м²</span>
								<span id="ap_item_rooms">1 кімната</span>
							</div>
							<div class="ap-item-info-container-right-col">
								<span id="ap_item_floors">7 поверх</span>
								<span id="ap_item_stage_section">1 черга, 1 секція</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="single-apartment.php">
						<span class="ap-item-name">1Е-1</span>
						<div class="ap-item-scheme-container">
							<img src="schemes/apartments-schemes/ap-scheme-test.png" alt="">
						</div>
						<div class="ap-item-info-container">
							<div class="ap-item-info-container-left-col">
								<span id="ap_item_space">54.36 м²</span>
								<span id="ap_item_rooms">1 кімната</span>
							</div>
							<div class="ap-item-info-container-right-col">
								<span id="ap_item_floors">7 поверх</span>
								<span id="ap_item_stage_section">1 черга, 1 секція</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="single-apartment.php">
						<span class="ap-item-name">1Е-1</span>
						<div class="ap-item-scheme-container">
							<img src="schemes/apartments-schemes/ap-scheme-test.png" alt="">
						</div>
						<div class="ap-item-info-container">
							<div class="ap-item-info-container-left-col">
								<span id="ap_item_space">54.36 м²</span>
								<span id="ap_item_rooms">1 кімната</span>
							</div>
							<div class="ap-item-info-container-right-col">
								<span id="ap_item_floors">7 поверх</span>
								<span id="ap_item_stage_section">1 черга, 1 секція</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="single-apartment.php">
						<span class="ap-item-name">1Е-1</span>
						<div class="ap-item-scheme-container">
							<img src="schemes/apartments-schemes/ap-scheme-test.png" alt="">
						</div>
						<div class="ap-item-info-container">
							<div class="ap-item-info-container-left-col">
								<span id="ap_item_space">54.36 м²</span>
								<span id="ap_item_rooms">1 кімната</span>
							</div>
							<div class="ap-item-info-container-right-col">
								<span id="ap_item_floors">7 поверх</span>
								<span id="ap_item_stage_section">1 черга, 1 секція</span>
							</div>
						</div>
					</a>
				</li>
				<li>
					<a href="single-apartment.php">
						<span class="ap-item-name">1Е-1</span>
						<div class="ap-item-scheme-container">
							<img src="schemes/apartments-schemes/ap-scheme-test.png" alt="">
						</div>
						<div class="ap-item-info-container">
							<div class="ap-item-info-container-left-col">
								<span id="ap_item_space">54.36 м²</span>
								<span id="ap_item_rooms">1 кімната</span>
							</div>
							<div class="ap-item-info-container-right-col">
								<span id="ap_item_floors">7 поверх</span>
								<span id="ap_item_stage_section">1 черга, 1 секція</span>
							</div>
						</div>
					</a>
				</li>																				
			</ul>
		</section>
		<? include("filter-overlay.php") ?>
	</main>
<? include("footer.php") ?>	