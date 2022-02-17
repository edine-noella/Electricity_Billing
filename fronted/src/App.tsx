import {Fragment} from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";
import Buy from "./components/buy"
import Check from "./components/check"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="buy" element={<Buy />} />
          <Route path="check" element={<Check />} />
        </Route>
      </Routes>

    </Fragment>
  )

}


function Home() {
  return <section>
    <nav className="flex shadow-sm bg-sky-900 text-white items-center justify-center gap-8 py-4">

      <h1 className="font-bold">Electri-C</h1>
      <div className="flex gap-4">
        <Link to="/buy">Buy</Link>
        <Link to="/check">Check</Link>
      </div>
    </nav>
    <div className="flex justify-center items-center py-20 flex-col">
      <Outlet />
    </div>
  </section>

}

export default App
