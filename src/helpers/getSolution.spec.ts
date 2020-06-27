import getSolution from './getSolution';

describe('solution test', () => {
    const cases = [
        { bases: [3, 5, 7], remainders: [0, 1, 0], solution: 21 },
        { bases: [4, 5, 3], remainders: [1, 4, 2], solution: 29 },
        { bases: [5, 7, 11, 13], remainders: [2, 1, 3, 8], solution: 2192 },
        { bases: [5, 17, 12], remainders: [2, 15, 5], solution: 797 },
    ];

    cases.forEach(({ bases, remainders, solution }, i) => {
        test(`case: ${i + 1}`, () => expect(getSolution(bases, remainders)).toEqual(solution));
    });
});
