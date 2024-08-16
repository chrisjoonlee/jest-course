/*
Be sure to return (or await) the promise - if you omit the return/await
statement, your test will complete before the promise returned from 
fetchData resolves or rejects.
*/

const fetchData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("peanut butter");
    });
}

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

// .resolves
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

export { }