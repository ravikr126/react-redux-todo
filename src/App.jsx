import React from 'react'

const App = () => {
  

  return (
    <>
      <div className="p-8 max-w-xs mx-auto">
        <h1 className="text-3xl font-bold mb-4">TodoMatic</h1>
        <p className="text-gray-700">What needs to be done?</p>

        <div className="flex mt-4">
          <input type="text" className="border-2 border-gray-300 p-2 flex-1"  />
          <button className="ml-2 bg-blue-500 text-white p-2 rounded">Add</button>
        </div>
      </div>

    </>
  )
}

export default App