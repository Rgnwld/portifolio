export interface IProject {
    name: string;
    description: string[];
    tools: ITools[];
    url: string;
    img?: string;
}

export interface ITools {
    name: string;
    icon: string;
    url?: string;
}
