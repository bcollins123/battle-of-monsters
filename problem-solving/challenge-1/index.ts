export const numbersFractionCalculator = (numbers: number[]) => {
    let result = {
        positives: "0",
        negative: "0",
        zeros: "0",
    };
    const count = numbers.length;
    numbers.forEach((value) => {
        if (value < 0) {
            result.negative = (+result.negative + 1).toString();
        } else if (value === 0) {
            result.zeros = (+result.zeros + 1).toString();
        } else if (value > 0) {
            result.positives = (+result.positives + 1).toString();
        }
    });
    result.negative = (+result.negative / count).toFixed(6);
    result.zeros = (+result.zeros / count).toFixed(6);
    result.positives = (+result.positives / count).toFixed(6);
    return result;
};
