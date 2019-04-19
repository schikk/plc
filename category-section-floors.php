<? include("header.php") ?>
	<main class="category-sections-floors">
		<a href="javascript:history.go(-1)" class="back-to-ganplan-btn">До вибору квартири</a>
		<div class="category-sections-floors-filter-col animation-elementY">
			<h1>Вибір квартири</h1>
			<form action="#" id="category-sections-floors-filter">
				<div class="filter-range-block">
					<span class="filter-overlay-title">Черга</span>
					<div class="filter-checkbox-wrapper">
						<div class="filter-checkbox-digital">
							<input type="radio" value="1" name="qu">
							<span>1</span>
						</div>
						<div class="filter-checkbox-digital">
							<input type="radio" value="2" name="qu">
							<span>2</span>
						</div>									
					</div>					
				</div>
				<div class="filter-range-block">
					<span class="filter-overlay-title">Будинок</span>
					<div class="filter-checkbox-wrapper">
						<div class="filter-checkbox-digital">
							<input type="radio" value="1" name="house">
							<span>1</span>
						</div>
						<div class="filter-checkbox-digital">
							<input type="radio" value="2" name="house">
							<span>2</span>
						</div>
					</div>					
				</div>
				<div class="filter-range-block">
					<span class="filter-overlay-title">Секція</span>
					<div class="filter-checkbox-wrapper">
						<div class="filter-checkbox-digital">
							<input type="radio" value="1" name="section">
							<span>1</span>
						</div>
						<div class="filter-checkbox-digital">
							<input type="radio" value="2" name="section">
							<span>2</span>
						</div>
					</div>						
				</div>
				<div class="filter-range-block-select-floor">
					<span class="select-floor-title">Поверх</span>
                    <select name="sort" id="sort_select">
                        <option value="floor2-3">1-2</option>
                        <option value="floor4-5">4-5</option>
                        <option value="floor6-7">6-7</option>
                        <option value="floor8-9">8-9</option>
                    </select>
				</div>
			</form>
		</div>
		<div class="category-sections-floors-filter-result-col">
			<div class="filter-result-floor-container animation-element">
				<img src="img/genplan/floor-scheme-test.svg" alt="">
			</div>
            <ul class="floor-legend-list animation-element">
                <li class="blue">1 - кiмнатнi</li>
                <li class="light-green">2 - кiмнатнi</li>
                <li class="navy">3 - кiмнатнi</li>
                <li class="pink">4+ - кiмнатнi</li>
                <li class="dark-green">2 - рiвневi</li>
            </ul>
		</div>
	</main>
<? include("footer.php") ?>		