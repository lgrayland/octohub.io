import {ItemList} from './item';
import {qs, $on, $delegate} from '../../utils/helpers';
import Template from './template';

const _itemId = element => parseInt(element.parentNode.dataset.id, 10);
const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default class View {
	/**
	 * @param {!Template} template A Template instance
	 */
	constructor(template) {
		this.template = template;
		this.$todoList = qs('.todo-list');
	}

	/**
	 * Populate the todo list with a list of items.
	 *
	 * @param {ItemList} items Array of items to display
	 */
	showItems(items) {
		this.$todoList.innerHTML = this.template.itemList(items);
	}

}
