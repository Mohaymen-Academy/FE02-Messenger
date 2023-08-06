import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import Navigate from react-router-dom
import routes from './Routes/Routes'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}
    </Routes>
  </BrowserRouter>
)

export default AppRouter
