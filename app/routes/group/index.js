import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember-decorators/service';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default class GroupIndex extends Route.extend(AuthenticatedRouteMixin) {
  @service auth

  model() {
    let user_id = get(this, 'auth.user.id');

    return RSVP.hash({
      groups: this.get('store').query('group', {
        include: 'author,author.profile,groupType,members,members.profile'
      }),
      groupTypes: this.get('store').findAll('group-type'),
      myGroups: this.get('store').query('group', {
        author: user_id
      }),
    });
  }
}
