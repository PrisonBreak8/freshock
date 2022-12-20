// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//=========== FILTERS =============================================================================================================================================
const list = document.querySelector('.list');
const items = document.querySelectorAll('.body__item');

const listItems = document.querySelectorAll('.list__item');

if (list) {
	function filter() {
		list.addEventListener('click', event => {
			const targetId = event.target.dataset.id;
			const target = event.target;

			if (target.classList.contains('list__item')) {
				listItems.forEach(listItem => listItem.classList.remove('tab-active'));
				target.classList.add('tab-active')
			}

			console.log(targetId);

			switch (targetId) {
				case 'all':
					getItems('body__item')
					break

				case 'fruit':
					getItems(targetId)
					break

				case 'vegetables':
					getItems(targetId)
					break

				case 'drinks':
					getItems(targetId)
					break

				case 'grocery':
					getItems(targetId)
					break
			}

		})
	};
	filter();

	function getItems(className) {
		items.forEach(item => {
			if (item.classList.contains(className)) {
				item.style.display = 'block'
			} else {
				item.style.display = 'none'
			}
		})
	}
}
//========================================================================================================================================================

