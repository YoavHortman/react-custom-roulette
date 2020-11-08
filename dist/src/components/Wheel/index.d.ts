/// <reference types="react" />
import { WheelData } from './types';
interface Props {
    mustStartSpinning: boolean;
    prizeNumber: number;
    data: WheelData[];
    onStopSpinning?: () => any;
    backgroundColors?: string[];
    textColors?: string[];
    outerBorderColor?: string;
    outerBorderWidth?: number;
    innerRadius?: number;
    innerBorderColor?: string;
    innerBorderWidth?: number;
    radiusLineColor?: string;
    radiusLineWidth?: number;
    fontSize?: number;
    fontWeight?: "bold" | "bolder" | "normal" | "lighter";
    fontFace?: string;
    perpendicularText?: boolean;
    textDistance?: number;
}
export declare const Wheel: ({ mustStartSpinning, prizeNumber, data, onStopSpinning, backgroundColors, textColors, outerBorderColor, outerBorderWidth, innerRadius, innerBorderColor, innerBorderWidth, radiusLineColor, radiusLineWidth, fontSize, fontWeight, fontFace, perpendicularText, textDistance, }: Props) => JSX.Element | null;
export {};
