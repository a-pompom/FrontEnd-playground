import React, {useState} from "react";

import {Jewelry} from "@/Jewelry.tsx";
import {Ticket} from "@/Ticket.tsx";
import {Ticket10} from "@/Ticket10.tsx";

/**
 * 入力値を個数を表す数値へ変換
 * 整数値以外が渡された場合は合計値を変動させないことで、自然な表示とする
 *
 * @param value
 * @param prev
 * @return 入力が整数値→数値型へ変換した結果 それ以外→前回の整数値の入力値
 */
export const toUnitsOfNumber = (value: string, prev: number): number => {
    if (/\d/.test(value)) {
        return parseInt(value);
    }
    return prev;
}

/**
 * チケットと合算したガチャ石の個数を算出
 */
export const JewelryCalculator: React.FC = () => {
    const RATE_TICKET = 300;
    const RATE_TICKET_10 = 3000;

    const [jewelry, setJewelry] = useState<number>(0);
    const [ticket, setTicket] = useState<number>(0);
    const [ticket10, setTicket10] = useState<number>(0);

    /**
     * チケットを石に換算した上での合計値を算出
     */
    const calculateTotal = (): number => {
        return jewelry + (ticket * RATE_TICKET) + (ticket10 * RATE_TICKET_10);
    }

    return (
        <div>
            <h2>Total: {calculateTotal()}</h2>

            <Jewelry jewelry={jewelry} setJewelry={setJewelry}/>
            <Ticket ticket={ticket} setTicket={setTicket}/>
            <Ticket10 ticket10={ticket10} setTicket10={setTicket10}/>
        </div>
    );
};