import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $title = document.createElement('h2');
    $title.className = 'donates-container__title';
    $title.textContent = 'Список донатов';

    const $listContainer = document.createElement('div');
    $listContainer.className = 'donates-container__donates';

    this.$rootElement.append($title, $listContainer);
    this.$listContainer = $listContainer;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
    item.props.onRemove = this.removeItem.bind(this);
  }
  removeItem(amount, id) {
    this.props.onRemoveItem(amount, id);
  }
}