// By default, Jest tests complete once they reach the end of their
// execution.
// Jest waits until "done" is called before finishing the test
// If done is never called, the test fails with timeout error

const fetchData = (callback) => {
    setTimeout(() => {
        callback(null, "peanut butter");
    }, 1000);
}

// Doesn't work -- callback never gets called
test('the data is peanut butter', () => {
    function callback(error, data) {
        if (error) {
            throw error;
        }
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});

// Works
test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error); // In case expect fails -- to avoid timeout error
        }
    }

    fetchData(callback);
});