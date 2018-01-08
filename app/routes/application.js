import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import {inject as service} from '@ember/service';
import moment from 'moment';

export default Route.extend(ApplicationRouteMixin, {
  moment: service(),

  beforeModel() {
    this.get('moment').setLocale('es');
  }
});
