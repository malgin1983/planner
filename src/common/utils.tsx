import { MONTHS, MONTHS_FULL, YEAR_LIST } from './constants';

export const changeMonthOrYear = (data: string): string => {
    switch (data) {
        case MONTHS.JANUARY:
            return MONTHS_FULL.JANUARY;
        case MONTHS.FEBRUARY:
            return MONTHS_FULL.FEBRUARY;
        case MONTHS.MARCH:
            return MONTHS_FULL.MARCH;
        case MONTHS.APRIL:
            return MONTHS_FULL.APRIL;
        case MONTHS.MAY:
            return MONTHS_FULL.MAY;
        case MONTHS.JUNE:
            return MONTHS_FULL.JUNE;
        case MONTHS.JULY:
            return MONTHS_FULL.JULY;
        case MONTHS.AUGUST:
            return MONTHS_FULL.AUGUST;
        case MONTHS.SEPTEMBER:
            return MONTHS_FULL.SEPTEMBER;
        case MONTHS.OCTOBER:
            return MONTHS_FULL.OCTOBER;
        case MONTHS.NOVEMBER:
            return MONTHS_FULL.NOVEMBER;
        case MONTHS.DECEMBER:
            return MONTHS_FULL.DECEMBER;
        case YEAR_LIST['2020']:
            return YEAR_LIST['2020'];
        case YEAR_LIST['2021']:
            return YEAR_LIST['2021'];
        case YEAR_LIST['2022']:
            return YEAR_LIST['2022'];
        case YEAR_LIST['2023']:
            return YEAR_LIST['2023'];
        case YEAR_LIST['2024']:
            return YEAR_LIST['2024'];
        default:
            return '';
    }
};
