/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeeds contain non-empty url values', function () {
            var i, n = allFeeds.length;
            for (i = 0; i < n; ++i) {
                expect(allFeeds[i].hasOwnProperty('url')).toBe(true);
                expect(allFeeds[i].url.trim().length).toBeGreaterThan(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('allFeeds contain non-empty name values', function () {
            var i, n = allFeeds.length;
            for (i = 0; i < n; ++i) {
                expect(allFeeds[i].hasOwnProperty('name')).toBe(true);
                expect(allFeeds[i].name.trim().length).toBeGreaterThan(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should hide the menu initially', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('should hide and show the menu when the menu icon is clicked', function () {
             // First click on the menu icon should show the menu (remove .menu-hidden class)
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe(false);
             // Second click on the menu icon should hide the menu (add .menu-hidden class)
             $('.menu-icon-link').click();
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            setTimeout(function() {
                // Give the application time to initialize and call loadFeed()
                done();
            }, 2500);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should call loadFeed() and initialize the the entries', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        beforeEach(function (done) {
            setTimeout(function() {
                // Give the application time to initialize and call loadFeed()
                done();
            }, 2500);
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should populate entries with content', function () {
            $('.entry').each(function(i, entryElem) {
                expect($(entryElem).find('h2')).not.toBe(null);
                expect($(entryElem).find('h2').text().trim().length).toBeGreaterThan(0);
            });
        });
    });
}());
