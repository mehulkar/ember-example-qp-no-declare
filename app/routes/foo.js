import Route from '@ember/routing/route';

export default Route.extend({

  setupController(controller) {
    this._super(...arguments);
    const paramValue = this.paramsFor('index').test
    controller.set('testParam', paramValue);
  }
});
