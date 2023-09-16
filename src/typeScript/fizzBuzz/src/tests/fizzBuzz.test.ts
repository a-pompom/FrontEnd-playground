import {fizzBuzz} from "@/fizzBuzz";

describe('Fizz Buzz', () => {

    type Args = {
        value: number;
        expected: string;
    };

    test.each<Args>([
        {value: 3, expected: 'Fizz'},
        {value: 12, expected: 'Fizz'},
        {value: 99, expected: 'Fizz'},
    ])('3で割り切れる数はメッセージFizzが得られること %p', ({value, expected}) => {
        // WHEN
        const actual = fizzBuzz(value);
        // THEN
        expect(actual).toBe(expected);
    });

    test.each<Args>([
        {value: 5, expected: 'Buzz'},
        {value: 100, expected: 'Buzz'},
        {value: 25, expected: 'Buzz'},
    ])('5で割り切れる数はメッセージBuzzが得られること %p', ({value, expected}) => {
        // WHEN
        const actual = fizzBuzz(value);
        // THEN
        expect(actual).toBe(expected);
    });

    test.each<Args>([
        {value: 15, expected: 'FizzBuzz'},
        {value: 90, expected: 'FizzBuzz'},
        {value: 150, expected: 'FizzBuzz'},
    ])('15で割り切れる数はメッセージFizzBuzzが得られること %p', ({value, expected}) => {
        // WHEN
        const actual = fizzBuzz(value);
        // THEN
        expect(actual).toBe(expected);
    });

    test.each<Args>([
        {value: 1, expected: '1'},
        {value: 11, expected: '11'},
        {value: 109, expected: '109'},
    ])('3でも5でも割り切れない数は数字がメッセージとして得られること %p', ({value, expected}) => {
        // WHEN
        const actual = fizzBuzz(value);
        // THEN
        expect(actual).toBe(expected);
    });
});
