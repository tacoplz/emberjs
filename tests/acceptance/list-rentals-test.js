import { test } from 'qunit';
//QUnit passes in an object called an assert to each test function. An assert has functions, such as equal(), that allow your test to check for conditions within the test environment. A test must have one passing assert to be successful.
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
//Acceptance tests are setup by calling the function moduleForAcceptance. This function ensures that your Ember application is started and shut down between each test

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function (assert) {
});

test('should link to information about the company.', function (assert) {
});

test('should link to contact information.', function (assert) {
});

test('should list available rentals.', function (assert) {
});

test('should filter the list of rentals by city.', function (assert) {
});

test('should show details for a selected rental', function (assert) {
});
//Ember acceptance tests use a set of test helper functions, such as the visit, andThen, and currentURL functions used above.

//run your test suite with the CLI command, ember test --server.
//By default, when you run ember test --server, Ember CLI runs the Testem test runner, which runs Qunit in Chrome and PhantomJS.
