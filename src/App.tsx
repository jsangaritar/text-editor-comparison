import { useState } from "react";
import MDEditor from "./MDEditor";
import Quill from "./Quill";
import RTE from "./RTE";
import Slate from "./Slate";

import "./App.css";

function App() {
  const [page, setPage] = useState(1000);
  const options = [<Slate />, <Quill />, <MDEditor />, <RTE />];

  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <td></td>
            <th>
              <button
                className={page === 0 ? "active" : ""}
                onClick={() => setPage(0)}
              >
                Slate
              </button>
            </th>
            <th>
              <button
                className={page === 1 ? "active" : ""}
                onClick={() => setPage(1)}
              >
                Quill
              </button>
            </th>
            <th>
              <button
                className={page === 2 ? "active" : ""}
                onClick={() => setPage(2)}
              >
                MD Editor
              </button>
            </th>
            <th>
              <button
                className={page === 3 ? "active" : ""}
                onClick={() => setPage(3)}
              >
                Rich Text Editor
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Tex formatting</th>
            <td>✅</td>
            <td>✅</td>
            <td>➖</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>Images support</th>
            <td>➖</td>
            <td>✅</td>
            <td>✅</td>
            <td>➖</td>
          </tr>
          <tr>
            <th>Markdown support</th>
            <td>➖</td>
            <td>➖</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>Clean experience</th>
            <td>✅</td>
            <td>✅</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>Development ease</th>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>Maintainability</th>
            <td>❌</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <th>Customizable</th>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>

      {options[page] && <div className="editors">{options[page]}</div>}
    </div>
  );
}

export default App;
