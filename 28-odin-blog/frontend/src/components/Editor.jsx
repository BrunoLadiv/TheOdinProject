import { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "../index.css";

export const Editor = () => {
  const [state, setState] = useState({ value: null });
  console.log(state.value);
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <div dangerouslySetInnerHTML={{ __html: state.value }} />
    </div>
  );
};

export default Editor;
