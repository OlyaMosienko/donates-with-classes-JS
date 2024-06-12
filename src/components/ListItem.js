import { Component } from '../core/Component';
import moment from 'moment';
import 'moment-precise-range-plugin';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    let donateDate = moment(this.state.date).format(
      'DD/MM/YYYY, HH:mm:ss'
    );
    this.$rootElement.textContent = donateDate;

    const $donateAmount = document.createElement('b');
    $donateAmount.innerHTML = `&nbsp;- $${this.state.amount}`;

    const $deleteDonate = document.createElement('button');
    $deleteDonate.className = 'delete-button';
    $deleteDonate.textContent = 'Удалить';

    this.$rootElement.append($donateAmount, $deleteDonate);

    $deleteDonate.addEventListener('click', () => {
      const donateToDelete = $deleteDonate.closest('.donate-item');
      donateToDelete.remove();
      this.props.onRemove(this.props.amount, this.state.id);
    });
  }
}
