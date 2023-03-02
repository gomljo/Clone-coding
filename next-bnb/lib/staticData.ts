//* 1월부터 12월까지
export const monthList = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
];

//* 1부터 31까지
export const dayList = Array.from(Array(31), (_, i)=> String((i + 1) + "일"));

//* 2045년부터 1920년까지
export const yaerList = Array.from(Array(126), (_, i) => String(2045 - i) + "년");