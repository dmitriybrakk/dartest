function multiply(numbers: number[]) {
    return numbers.reduce((result, number) => result * number);
}

function solveAuxiliaryEquation(base: number, remainder: number, M: number) {
    const sequenceToBase = Array.from(Array(base), (_, i) => i + 1);
    const solution = sequenceToBase.find((number) => (M * number) % base === remainder);

    return solution;
}

export default function getSolution(bases: number[], remainders: number[]) {
    const M0 = multiply(bases);
    const Mi = bases.map((b) => M0 / b);
    const auxiliaryNumbers = Mi.map((M, i) => solveAuxiliaryEquation(bases[i], remainders[i], M)) as number[];
    const auxiliarySum = auxiliaryNumbers.reduce((sum, num, i) => sum + num * Mi[i], 0);

    return auxiliarySum % M0;
}
