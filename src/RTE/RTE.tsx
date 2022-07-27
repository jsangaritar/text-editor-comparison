import { useState } from "react";
import RichTextEditor, { EditorValue } from "react-rte";

export default function RTE({
  initialValue = " This is editable **rich** text, much better than a `<textarea>`! \nSince it's rich text, you can do things like turn a selection of text **bold**, or add a semantically rendered block quote in the middle of the page, like this: \n\n> A wise quote. \n\nTry it out for yourself!",
}: {
  initialValue: string;
}) {
  const [value, setValue] = useState<EditorValue>(
    initialValue
      ? RichTextEditor.createValueFromString(initialValue, "markdown")
      : RichTextEditor.createEmptyValue()
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
