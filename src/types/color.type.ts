export interface IColor {
    name: string;
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string;
    };
    font: {
        family: string;
    };
}

export type IThemeContext = {
    theme: IColor;
    UpdateTheme: (color: IColor) => void;
};
