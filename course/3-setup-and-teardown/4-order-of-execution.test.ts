/*
Jest executes all describe handlers in a test file before it executes
any of the actual tests. This is another reason to do setup and teardown
inside before* and after* handlers rather than inside the describe
blocks. Once the describe blocks are complete, by default Jest runs all
the tests serially in the order they were encountered in the collection 
phase, waiting for each to finish and be tidied up before moving on.
*/

describe('describe outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
        console.log('describe inner 1');

        test('test 1', () => console.log('test 1'));
    });

    console.log('describe outer-b');

    test('test 2', () => console.log('test 2'));

    describe('describe inner 2', () => {
        console.log('describe inner 2');

        test('test 3', () => console.log('test 3'));
    });

    console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3


// Hooks in outer scopes are called before hooks in inner scopes

beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
    beforeEach(() => console.log('extra database setup'));
    afterEach(() => console.log('extra database teardown'));

    test('test 2', () => console.log('test 2'));
});

// connection setup
// database setup
// test 1
// database teardown
// connection teardown

// connection setup
// database setup
// extra database setup
// test 2
// extra database teardown
// database teardown
// connection teardown

export { }