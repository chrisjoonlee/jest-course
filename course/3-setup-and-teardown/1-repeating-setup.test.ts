const initializeCityDatabase = () => { };
const clearCityDatabase = () => { };
const isCity = (cityName: string) => true;

// beforeEach hook = called before each test
beforeEach(() => {
    initializeCityDatabase();
});

// afterEach hook = called after each hook
afterEach(() => {
    clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

export { }