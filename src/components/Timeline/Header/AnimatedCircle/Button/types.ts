export interface ButtonProps {
    text: string;
    value: number;
    x: number;
    y: number;
    rotateAngle: number;
    isSelected: boolean;
    isRotating: boolean;
    onClick: () => void;
}
