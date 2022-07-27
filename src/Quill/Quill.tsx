import { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "./Quill.css";

export default function Quill() {
  const [value, setValue] = useState(
    `<p>This is editable <strong>rich</strong> text, <em>much</em> better than a <code>&lt;textarea&gt;</code>!</p><p>Since it's rich text, you can do things like turn a selection of text <strong>bold</strong>, or add a semantically rendered block quote in the middle of the page, like this:</p><p><br></p><blockquote>A wise quote.</blockquote><p class="ql-align-center">Try it out for yourself!</p>`
  );

  return (
    <>
      <div
        className={`editor ${
          process.env.NODE_ENV !== "production" ? "duplicate-toolbar" : ""
        }`}
      >
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
