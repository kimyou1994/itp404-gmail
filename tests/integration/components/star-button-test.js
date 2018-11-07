import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('the star is empty when starred is true', async function(assert) {
    this.set('starred', true);
    // Template block usage:
    await render(hbs` <StarButton class="star" 
                        @starred={{starred}} 
                         />`);
    assert.dom('[data-test="star-test"]').hasClass('true');
  });
  test('the star is empty when starred is false', async function(assert) {
    this.set('starred', false);
    // Template block usage:
    await render(hbs` <StarButton class="star" 
                        @starred={{starred}} 
                         />`);
    assert.dom('[data-test="star-test"]').hasClass('false');
  });
});
