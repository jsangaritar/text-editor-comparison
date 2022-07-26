import { useState } from "react";
import RichTextEditor, { EditorValue } from "react-rte";

export default function RTE() {
  const [value, setValue] = useState<EditorValue>(
    RichTextEditor.createEmptyValue()
  );

  return (
    <>
      <div className="editor">
        <RichTextEditor value={value} onChange={setValue} />
      </div>
      <div className="output">{value.toString("markdown")}</div>
    </>
  );
}
