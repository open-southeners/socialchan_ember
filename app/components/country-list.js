import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import $ from 'jquery';
// import Ember from 'ember';

@tagName('select')
export default class CountryListComponent extends Component {
  // @attribute('selected-code') selectedCode;
  selectedCode = 'ES';

  didInsertElement() {
    this._super(...arguments);

    $.getJSON('/static/countries.json').done(res => {
      // Ember.run.bind(this, this.set('countries', res));
      this.set('countries', res);
    });


  }
}