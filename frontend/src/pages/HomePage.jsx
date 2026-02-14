const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mx-auto text-center">
      <div className="max-w-screen mx-auto text-center">
        <div className="text-gray-800 text-6xl font-bold mb-7">
          Welcome to my Web app hehe
        </div>
        <div className="text-blue-800 text-3xl font-bold mb-12">
          Welcome sa webapp ni opao. Sana okay lang kayo
        </div>
        <button className="btn bg-red-700 border-none text-white hover:bg-red-600 px-14 mr-5">
          Create
        </button>
        <button className="btn bg-green-700 border-none text-white hover:bg-red-600 px-14">
          Edit
        </button>
      </div>
    </div>
  )
}

export default HomePage
