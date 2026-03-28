import numbertest from './test.ts';
import { expect, test } from 'vitest'

test('test if the function returns correct number value', () => {
    expect(numbertest("test")).toBe(1);
    expect(numbertest("hello")).toBe(2);
    expect(numbertest("other")).toBe(0);
})