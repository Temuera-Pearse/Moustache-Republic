import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Home from './pages/home'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
    </Route>
  </Route>
)

function RootApp() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <React.Suspense>
        <RootApp />
      </React.Suspense>
    </QueryClientProvider>
  )
})
