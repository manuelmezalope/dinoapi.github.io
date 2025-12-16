import { createBrowserRouter } from "react-router";
import App from "../App";
import InicioComp from "../components/InicioComp";
import DinosaurioComp from "../components/DinosaurioComp";
import Pagina404Comp from "../components/Pagina404Comp";

export const routes=createBrowserRouter([
    {path: '', Component: App, children: [
        {index: true, Component: InicioComp},
        {path: 'dinosaurios', Component: DinosaurioComp},
        {path: '*', Component: Pagina404Comp}
    ]}
])