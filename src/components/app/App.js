import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

const App = () => {



    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="comics" element={<LayoutComics />}>
                        <Route index element={<ComicsPage />} />
                        <Route path=":comicId" element={<SingleComicPage />} />
                    </Route>
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </Router>
    )
}


const LayoutComics = () => {
    return (
        <Outlet />
    )
}

const Layout = () => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default App;