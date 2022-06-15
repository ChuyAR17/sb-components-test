/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Text to show in the component
     */
    label: string;
    /**
     * Font-size for the component
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Color for the component
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Show the text in caps is true
     */
    allCaps?: boolean;
    /**
   * What background color to use
   */
    fontColor?: string;
}
/**
 * Label component
 */
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
