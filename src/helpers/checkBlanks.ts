import { Common } from 'typings/common';

export default function checkBlanks(numbers: Common.Base[] | Common.Remainder[]) {
    return numbers.some((number: Common.Base | Common.Remainder) => number === null);
}
