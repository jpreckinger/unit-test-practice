const fizz = require ('./fizzBuzz');

test('numbers divisible by 3', () => {
    expect( fizz(9) ).toBe('Fizz');
})

test('numbers divisible by 5 but not 3', () => {
    expect( fizz(20) ).toBe('Buzz');
})

test('numbers divisible by 5 and 3', () => {
    expect( fizz(30) ).toBe('FizzBuzz');
})

test('numbers not divisible by 3 or 5', () => {
    expect( fizz(17) ).toBe(17);
})

test('input is a numerical string ("3")', () => {
    expect( fizz('3') ).toBe('Fizz');
})

test('input is a non-numerical string("potato")', () => {
    expect( fizz('potato') ).toBe('potato');
})