import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/Global.scss'
import { AppContext } from '../context'
import { useSumaTotal } from '../hooks/useSumaTotal'
const Home = lazy(() => import('../pages/Home'))
const CheckoutList = lazy(() => import('../containers/CheckoutList'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))

const App = () => {
  const initialState = useSumaTotal()

  return (
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<CheckoutList />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </Suspense>
  )
}

export { App }
