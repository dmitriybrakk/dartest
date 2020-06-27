import checkPositive from './checkPositive';

describe('positive test', () => {
    const cases = [
        { numbers: [3, 5, 0], isPositive: false },
        { numbers: [-1, 17, 12], isPositive: false },
        { numbers: [1, 2, 3], isPositive: true },
    ];

    cases.forEach(({ numbers, isPositive }, i) => {
        test(`case: ${i + 1}`, () => expect(checkPositive(numbers)).toEqual(isPositive));
    });
});
