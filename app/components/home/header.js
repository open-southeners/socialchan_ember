import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { inject as service } from '@ember-decorators/service';

export default class HeaderComponent extends Component {
  @service session;
  @service media;

  @action
  logout() {
    this.get('session').invalidate();
  }
}