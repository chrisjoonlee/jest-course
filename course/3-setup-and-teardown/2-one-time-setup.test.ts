// Necessary for async setups (can't be done inline)

const initializeCityDatabase = () => {
    return new Promise((resolve, reject) => resolve(true));
};
const clearCityDatabase = () => {
    return new Promise((resolve, reject) => resolve(true));
};
const isCity = (cityName: string) => true;

// beforeAll hook = called once before all tests
beforeAll(() => {
    return initializeCityDatabase();
});

// afterAll hook = called once after all tests
afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

export { }