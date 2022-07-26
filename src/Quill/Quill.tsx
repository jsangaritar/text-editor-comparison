import { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "./Quill.css";

export default function Quill() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="editor">
        <ReactQuill
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote", "code-block"],

              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              [{ direction: "rtl" }], // text direction

              [{ size: ["small", false, "large", "huge"] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["link", "image"],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],

              ["clean"], // remove formatting button
            ],
          }}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="output">{value}</div>
    </>
  );
}