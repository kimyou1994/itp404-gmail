import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | emails', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  });

  test('the inbox displays 2 starred and 3 unstarred emails', async function(assert) {
  	server.create('email', {
    	starred: true
    });
    server.create('email', {
      	starred: true
    });
    server.create('email', {
      	starred: false
    });
    server.create('email', {
      	starred: false
    });
    server.create('email', {
      	starred: false
    });
    await visit('/');
    assert.dom('[data-test="starred-email"]').exists({ count: 2 });
    assert.dom('[data-test="unstarred-email"]').exists({ count: 3 });
  });

  test('viewing a single email', async function(assert) {
  	server.create('email', {
  		from: 'from@email.com',
  		to: 'to@email.com',
  		subject: 'this is subject',
  		message: 'this is message',
  		starred: true
    });
    await visit('/emails/1');
    assert.dom('[data-test="email-from"]').hasText('From : from@email.com');
    assert.dom('[data-test="email-to"]').hasText('To : to@email.com');
    assert.dom('[data-test="email-subject"]').hasText('Subject: this is subject');
    assert.dom('[data-test="email-message"]').hasText('this is message');
  	assert.dom('[data-test="email-star"]').hasClass('true');
  });

  test('deleting a single email', async function(assert) {
  	server.createList('email', 2);
  	window.confirm = () => true;
    await visit('/emails/1');
    await click('[data-test="email-delete"]');
    assert.dom('[data-test="unstarred-email"]').exists({ count: 1 });
    assert.equal(currentURL(), '/');
  }); 

  test('creating an email', async function(assert) {
  	await visit('/create');
  	await fillIn('#from', 'from');
  	await fillIn('#to', 'to');
  	await fillIn('#subject', 'subject');
  	await fillIn('#message', 'message');
    await click('[data-test="create-submit"]');
    assert.dom('[data-test="unstarred-email"]').exists({ count: 1 });
    assert.equal(currentURL(), '/');
  });
});
