import checkCoprime from './checkCoprime';

describe('relatively prime test', () => {
    const cases = [
        { numbers: [3, 5, 7], isCoprime: true },
        { numbers: [5, 17, 12], isCoprime: true },
        { numbers: [1, 2, 4], isCoprime: false },
    ];

    cases.forEach(({ numbers, isCoprime }, i) => {
        test(`case: ${i + 1}`, () => expect(checkCoprime(numbers)).toEqual(isCoprime));
    });
});
