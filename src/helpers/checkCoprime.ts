function gcd(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

export default function checkCoprime(numbers: number[]) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (gcd(numbers[i], numbers[j]) !== 1) {
                return false;
            }
        }
    }

    return true;
}
