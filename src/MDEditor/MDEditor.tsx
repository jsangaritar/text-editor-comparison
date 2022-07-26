import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function MDEditorPage() {
  const [value, setValue] = useState<undefined | string>("");
  return (
    <>
      <div className="editor">
        <MDEditor value={value} onChange={(s) => setValue(s)} />
      </div>
      <div className="output">{value}</div>
    </>
  );
}
