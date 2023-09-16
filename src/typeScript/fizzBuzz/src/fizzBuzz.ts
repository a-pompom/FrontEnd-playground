/**
 * FizzBuzzゲームのメッセージを出力
 *
 * @param input 入力となる数値
 * @return 数に応じたメッセージ
 */
export const fizzBuzz = (input: number): string => {
    if (input % 15 === 0) {
        return 'FizzBuzz';
    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input.toString();
}