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
export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}

