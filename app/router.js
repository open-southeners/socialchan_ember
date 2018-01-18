import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('anime');
  this.route('manga');
  this.route('group', function() {
    this.route('found');
  });
  this.route('login');
  this.route('user', function () {
    this.route('index', { path: '/' });
    this.route('show', { path: '/:user_id' });
    this.route('groups');
  });
  this.route('list');
  this.route('music');
  this.route('settings');
  this.route('feed');
  this.route('concepts');
  this.route('cookies');
  this.route('about');
  this.route('dmca');
  this.route('policies');
  this.route('suscribe');
  this.route('contact');
  this.route('not-found', { path: '/*path' });
});

export default Router;
