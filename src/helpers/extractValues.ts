import { Common } from 'typings/common';

export default function extractValues(pairs: Common.Pair[]) {
    return pairs.reduce(
        (result: { bases: Common.Base[]; remainders: Common.Remainder[] }, [base, remainder]: Common.Pair) => ({
            bases: [...result.bases, base],
            remainders: [...result.remainders, remainder],
        }),
        {
            bases: [],
            remainders: [],
        },
    );
}
