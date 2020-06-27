import { Common } from 'typings/common';
import extractValues from './extractValues';

describe('extract values test', () => {
    const cases = [
        {
            pairs: [
                [5, 12],
                [17, 15],
                [12, 5],
            ],
            expected: { bases: [5, 17, 12], remainders: [12, 15, 5] },
        },
        {
            pairs: [
                [2, 5],
                [1, 7],
                [3, 11],
                [8, 13],
            ],
            expected: { bases: [2, 1, 3, 8], remainders: [5, 7, 11, 13] },
        },
        {
            pairs: [
                [null, null],
                [1, null],
                [null, 1],
            ],
            expected: { bases: [null, 1, null], remainders: [null, null, 1] },
        },
    ];

    cases.forEach(({ pairs, expected }, i) => {
        test(`case: ${i + 1}`, () => expect(extractValues(pairs as Common.Pair[])).toEqual(expected));
    });
});
