import React from 'react'

export default function IntegrationsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className="mx-auto p-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold">Integrations</h1>
        <div className="border border-indigo-500 mt-4">
          {children}
        </div>
      </div>
    </section>
  )
};