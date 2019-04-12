<div class="filter-overlay">
	<div class="filter-container-wrapper">
		<span class="close-filter-overlay"></span>
		<h6>Вибір за фільтром</h6>
		<form action="category-apartments-filter.php" id="advanced-filter-overlay">
			<div class="filter-row first-filter-row">
				<div class="first-filter-rows-col">
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
				<div class="first-filter-rows-col">
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
				<div class="first-filter-rows-col">
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
			</div>
			<div class="filter-row second-filter-row">
				<div class="second-filter-rows-col">
					<span class="filter-overlay-title">Поверх</span>
					<div class="filter-section-range-block">
                        <input type="text" id="slider_floor" class="slider" name="floor">
					</div>
				</div>
				<div class="second-filter-rows-col">
					<span class="filter-overlay-title">Площа, м²</span>
					<div class="filter-section-range-block">
                        <input type="text" id="slider_space" class="slider" name="space">
					</div>
				</div>
				<div class="second-filter-rows-col">
					<span class="filter-overlay-title">Кількість кімнат</span>
					<div class="filter-section-range-block">
                        <input type="text" id="slider_rooms" class="slider" name="rooms">
					</div>
				</div>						
			</div>
			<div class="third-filter-row">
				<span class="filter-overlay-title">Переваги</span>
				<ul class="filter-checkboxes-list adv-filter-checkboxes-list">
					<li>
						<input data-value="advftype-1" type="checkbox" name="advftype[1]" id="advftype[1]">
						<label for="advftype[1]">З терасою</label>
					</li>
					<li>
						<input data-value="advftype-2" type="checkbox" name="advftype[2]" id="advftype[2]">
						<label for="advftype[2]">З видом на парк</label>
					</li>
					<li>
						<input data-value="advftype-3" type="checkbox" name="advftype[3]" id="advftype[3]">
						<label for="advftype[3]">Пентхаус</label>
					</li>
					<li>
						<input data-value="advftype-4" type="checkbox" name="advftype[4]" id="advftype[4]">
						<label for="advftype[4]">Ізолювання від сусідів</label>
					</li>
					<li>
						<input data-value="advftype-5" type="checkbox" name="advftype[5]" id="advftype[5]">
						<label for="advftype[5]">Комерційні площі</label>
					</li>																								
					<li>
						<input data-value="advftype-6" type="checkbox" name="advftype[6]" id="advftype[6]">
						<label for="advftype[6]">Краща ціна</label>
					</li>
					<li>
						<input data-value="advftype-7" type="checkbox" name="advftype[7]" id="advftype[7]">
						<label for="advftype[7]">Королівська спальня</label>
					</li>
					<li>
						<input data-value="advftype-8" type="checkbox" name="advftype[8]" id="advftype[8]">
						<label for="advftype[8]">Світла квартира</label>
					</li>																		
				</ul>
			</div>
			<div class="fourth-filter-row">
				<span class="filter-overlay-title">Види з вікон</span>
				<ul class="filter-checkboxes-list">
					<li>
						<input data-value="viewsftype-1" type="checkbox" name="viewsftype[1]" id="viewsftype[1]">
						<label for="viewsftype[1]">Тераса</label>
					</li>
					<li>
						<input data-value="viewsftype-2" type="checkbox" name="viewsftype[2]" id="viewsftype[2]">
						<label for="viewsftype[2]">На ліс</label>
					</li>
					<li>
						<input data-value="viewsftype-3" type="checkbox" name="viewsftype[3]" id="viewsftype[3]">
						<label for="viewsftype[3]">Пентхаус</label>
					</li>
					<li>
						<input data-value="viewsftype-4" type="checkbox" name="viewsftype[4]" id="viewsftype[4]">
						<label for="viewsftype[4]">На парк</label>
					</li>
					<li>
						<input data-value="viewsftype-5" type="checkbox" name="viewsftype[5]" id="viewsftype[5]">
						<label for="viewsftype[5]">На озеро</label>
					</li>																								
					<li>
						<input data-value="viewsftype-6" type="checkbox" name="viewsftype[6]" id="viewsftype[6]">
						<label for="viewsftype[6]">На центр</label>
					</li>																		
				</ul>
			</div>
			<span class="filter-result">Знайдено <span id="filter-result-val">13</span> квартир</span>
			<div class="filter-overlay-btns-container">
				<a href="#" class="filter-reset-btn">Скинути</a>
				<button class="plc-btn white-blue-btn filter-overlay-submit-btn" id="filter-overlay-submit-btn" type="submit">Показати результат</button>
			</div>			
		</form>
	</div>
</div>