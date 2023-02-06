import { ITools } from '../types/project.type';
import ReactIcon from '../imgs/icons8-react-40.png';
import TSIcon from '../imgs/icons8-typescript-48.png';
import HtmlIcon from '../imgs/icons8-html-5-48.png';
import SCIcon from '../imgs/styled-Components.png';

const ReactTool: ITools = {
    icon: ReactIcon,
    name: 'React',
};

const StyledTool: ITools = {
    icon: SCIcon,
    name: 'Styled-Components',
};

const TsTool: ITools = {
    icon: TSIcon,
    name: 'Typescript',
};

const HtmlTool: ITools = {
    icon: HtmlIcon,
    name: 'Html 5',
};

export const exampleTools = [HtmlTool, TsTool, ReactTool, StyledTool];
