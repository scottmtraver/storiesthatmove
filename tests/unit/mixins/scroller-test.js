import Ember from 'ember';
import ScrollerMixin from 'storiesthatmove/mixins/scroller';
import { module, test } from 'qunit';

module('Unit | Mixin | scroller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScrollerObject = Ember.Object.extend(ScrollerMixin);
  let subject = ScrollerObject.create();
  assert.ok(subject);
});
