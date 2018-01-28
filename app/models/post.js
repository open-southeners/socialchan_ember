import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  sticky: DS.attr('boolean'),
  comments_count: DS.attr('number'),
  kokoros_count: DS.attr('number'),
  kokored: DS.attr('boolean'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  author: DS.belongsTo('user'),
  comments: DS.hasMany('comment'),
});
