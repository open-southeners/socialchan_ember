import Service from '@ember/service';
import { inject as service } from '@ember-decorators/service'
import RSVP from 'rsvp';

export default class AuthService extends Service {
  @service session
  @service store

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
}
