import checkBlanks from './checkBlanks';

describe('check blanks test', () => {
    const cases = [
        { numbers: [3, 5, 7], hasBlanks: false },
        { numbers: [null, 17, 12], hasBlanks: true },
    ];

    cases.forEach(({ numbers, hasBlanks }, i) => {
        test(`case: ${i + 1}`, () => expect(checkBlanks(numbers)).toEqual(hasBlanks));
    });
});
