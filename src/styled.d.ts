import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            primary:string,
            secondary:string,
            white:string,
            valid:string,
            wrong:string,
        }
        fonts: {
            primary:string,
            secondary:string,
        },
        hovers: {
            transition:string,
            scale: string,
            filter: string,
        }
        
        
    }
}