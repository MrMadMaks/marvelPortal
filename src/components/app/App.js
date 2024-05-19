import { lazy, Suspense } from 'react';
import AppHeader from "../appHeader/AppHeader";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"));

const App = () => {

    return (
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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