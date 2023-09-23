import {fireEvent, render, screen} from '@testing-library/react';
import {JewelryCalculator} from '@/JewelryCalculator.tsx';
import '@testing-library/jest-dom';
import React from 'react';

describe('チケットと合算したガチャ石の個数計算機能', () => {

    test('初期表示では、合計値が0であること', () => {
        render(<JewelryCalculator/>);

        expect(screen.getByRole('heading')).toHaveTextContent('Total: 0');
    });

    test('石とチケットの個数が入力されると合計値が算出されること', () => {
        render(<JewelryCalculator/>);
        const jewelry = screen.getByLabelText('石');
        fireEvent.change(jewelry, {target: {value: '3200'}});
        const ticket = screen.getByLabelText('チケット');
        fireEvent.change(ticket, {target: {value: '29'}});
        const ticket10 = screen.getByLabelText('10連チケット');
        fireEvent.change(ticket10, {target: {value: '4'}});

        expect(screen.getByRole('heading')).toHaveTextContent('Total: 23900');
    });

    test('数値以外を入力すると、直前の数値の入力から合計値が算出されること', () => {
        render(<JewelryCalculator/>);
        const jewelry = screen.getByLabelText('石');
        fireEvent.change(jewelry, {target: {value: '3200'}});
        fireEvent.change(jewelry, {target: {value: '5000兆個'}});

        expect(screen.getByRole('heading')).toHaveTextContent('Total: 3200');
    });
});