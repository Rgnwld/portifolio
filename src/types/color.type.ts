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
    anim: { slower: string; slow: string; normal: string; fast: string; instant: string };
}

export type IThemeContext = {
    theme: IColor;
    UpdateTheme: (color: string) => void;
};
