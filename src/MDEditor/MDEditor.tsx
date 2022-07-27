import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

export default function MDEditorPage() {
  const [value, setValue] = useState<undefined | string>(
    "This is editable **rich** text, much better than a `<textarea>`! \nSince it's rich text, you can do things like turn a selection of text **bold**, or add a semantically rendered block quote in the middle of the page, like this: \n\n> A wise quote. \n\nTry it out for yourself!"
  );
  return (
    <>
      <div className="editor">
        <MDEditor value={value} onChange={(s) => setValue(s)} />
      </div>
      <div className="output">{value}</div>
    </>
  );
}
