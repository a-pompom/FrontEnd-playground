import {sayHello} from '../hello';

describe('Hello World', () => {

    test('文字列Helloが得られるか', () => {
        // GIVEN
        const expected = 'Hello';
        // WHEN
        const actual = sayHello();
        // THEN
        expect(actual).toBe(expected);
    });
});
