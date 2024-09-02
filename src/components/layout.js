'use client'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <div>
      <Meta />
      <div className="min-h-screen">
        {children}
      </div>
    </div>
  )
}
