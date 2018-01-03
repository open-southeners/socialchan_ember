import Component from '@ember/component';

export default Component.extend({
  isSubsidebarActive: false,

  actions: {
    toggleSubsidebar() {
      this.toggleProperty('isSubsidebarActive');
    }
  }
});
