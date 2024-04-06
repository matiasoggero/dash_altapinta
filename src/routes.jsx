import App from './App'
import { createBrowserRouter } from "react-router-dom";
import ContentWrapper from './components/ContentWrapper';
import ProductTable from './components/ProductTable';
import UserTable from './components/UserTable';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ContentWrapper />
            },
            {
                path: '/product',
                element: <ProductTable />
            },
            {
                path: '/user',
                element: <UserTable />
            }
        ]
    }
])

export default routes