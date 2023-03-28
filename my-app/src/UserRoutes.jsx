import { NavLink , Route, Routes} from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { ProductsPage } from "./ProductsPage"
export const UserRoutes = () =>{
    return(
        <>
        <NavLink to='/'> Index</NavLink>
        <NavLink to='about'> About </NavLink>
        <NavLink to='products'> Products</NavLink>
        <NavLink to='login'> Login</NavLink>
        <Routes>
            <Route path = "products" element={<ProductsPage />}/>
            <Route path = "about" element={<AboutPage/>}/>



        </Routes>

        
        </>
    )
}