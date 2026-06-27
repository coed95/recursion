function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const result = fibsRec(n - 1);

    const last = result[result.length - 1];
    const secondLast = result[result.length - 2];

    return [...result, last + secondLast];

}