import DS from 'ember-data';
import { attr, belongsTo, hasMany } from '@ember-decorators/data'
import { inject as service } from '@ember-decorators/service'
import { computed } from '@ember-decorators/object';
import { equal } from '@ember/object/computed';
import { set, get } from '@ember/object';

const { Model } = DS

export default class User extends Model {
  @service auth

  @attr('string') nickname
  @attr('string') email
  @attr('boolean') active
  @attr('boolean') following
  @attr('date') created_at
  @attr('date') updated_at

  @belongsTo('profile') profile
  @hasMany('user', { inverse: null }) followers
  @hasMany('user', { inverse: null }) follows
  @hasMany('post') posts
  @hasMany('group') groups

  @computed('id', 'auth.user.id')
  get isLoggedIn() {
    return get(this, 'id') === get(this, 'auth.user.id');
  }

  isActive = equal('active', true)
  // isSuscriber: equal('role.suscriber')
}
