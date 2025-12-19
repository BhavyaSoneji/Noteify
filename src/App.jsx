import React from "react";
import { useState } from "react";
import { Trash } from "lucide-react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Descrp, setDescrp] = useState("");
  const [Notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited");
    const NoteArray = [...Notes];
    if (Title != "" && Descrp != "") {
      NoteArray.push({ Title, Descrp });
      setNotes(NoteArray);
    }
    console.log(Notes);
    setTitle("");
    setDescrp("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...Notes];
    copyTask.splice(idx,1);
    setNotes(copyTask);
  };
  return (
    <div className="w-full h-screen lg:pt-10 lg:pb-10 lg:flex flex-row">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          console.log(Notes);
        }}
        className="lg:w-1/2 text-xl lg:border-r-3 p-10 "
      >
        <div className="flex flex-col gap-5 font-medium">
          <h1 className="text-5xl">Add Notes</h1>
          <input
            className="border-3 rounded-lg p-3 w-full outline-none"
            type="text"
            placeholder="Enter tile of note"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="block border-3 p-3 outline-none rounded-lg h-40 w-full"
            placeholder="Write details"
            value={Descrp}
            onChange={(e) => {
              setDescrp(e.target.value);
            }}
          />
          <button className="bg-white active:bg-gray-300 text-black h-13 rounded-lg">
            Add Note
          </button>
        </div>
      </form>
      <div className="lg:w-1/2 flex flex-col p-10 gap-5">
        <h1 className="text-5xl font-medium flex justify-center">
          Recent Notes
        </h1>
        <div
          id="notes"
          className="flex h-fit flex-wrap overflow-auto rounded-xl gap-6 justify-start"
        >
          {Notes.map((value, index) => {
            return (
              <div
                key={index}
                className="h-70 w-53 text-black relative bg-white rounded-2xl flex flex-col items-center pr-2 pl-2 pt-4 pb-10 gap-3 overflow-auto"
              >
                <h3 className="text-2xl font-bold w-full wrap-break-word text-center">{value.Title}</h3>
                <p
                  id="description"
                  className="leading-snug p-2 h-full text-gray-700 rounded-xl w-full shadow wrap-break-word overflow-auto"
                >
                  {value.Descrp}
                </p>
                <div
                  className="absolute bottom-3 right-3 w-fit h-fit"
                  onClick={() => {
                    deleteNote(index);
                  }}
                >
                  <Trash />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
