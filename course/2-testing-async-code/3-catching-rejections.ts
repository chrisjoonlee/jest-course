const failToFetchData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        reject("error");
    });
}

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await failToFetchData();
    } catch (error) {
        expect(error).toMatch('error');
    }
});

// .rejects
test('the fetch fails with an error', async () => {
    await expect(failToFetchData()).rejects.toMatch('error');
});

export { }