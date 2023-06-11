import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h2>Welcome - Open your console</h2>
      </div>
    ),
  },
  // {
  //   path: "headings",
  //   element: (
  //     <div>
  //       <div>
  //         <h2>Heading 2</h2>
  //       </div>
  //       <h2>Heading 2</h2>
  //       <h4>Don't mistake Typography for Heading Structure</h4>
  //       <ul>
  //         <li><code>&lt;main /&gt;</code> should have one H1</li>
  //         <li>Landmarks should only have one H1</li>
  //         <li>Headings should not skip levels</li>
  //         <li>Headings should be unique</li>
  //       </ul>
  //     </div>
  //   ),
  // },
  // {
  //   path: "forms",
  //   element: <div>Forms</div>,
  // },
  // {
  //   path: "tables",
  //   element: <div>Tables</div>,
  // },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <h1>@axe-core/react Demo</h1>
        {/* <nav> */}
          <Link to="/">Home</Link>
          {/* <Link to="headings">Headings</Link> */}
          {/* <Link to="tables">Tables</Link>
          <Link to="forms">Forms</Link> */}
        {/* </nav> */}
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
