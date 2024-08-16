// toBe = Exact quality
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// toEqual = Deep quality
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// toEqual ignores object keys with undefined properties, undefined
// array items, array sparseness, or object type mismatch. To take
// these into account use toStrictEqual instead.
test('object assignment (failure)', () => {
    const data = { one: 1 };
    data['two'] = 2;
    data['three'] = undefined;
    expect(data).toEqual({ one: 1, two: 2 });
});

// toStrictEqual = Strict deep equality
test('object assignment (failure)', () => {
    const data = { one: 1 };
    data['two'] = 2;
    data['three'] = undefined;
    expect(data).toStrictEqual({ one: 1, two: 2, three: undefined });
});

// not
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});