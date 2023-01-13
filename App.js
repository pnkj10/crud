import { useState } from "react";
import "./App.css"
import axios from "axios";
function App() {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [isbn, setisbn] = useState("");
  const [books, setbooks] = useState([]);
  const [newtitle, setnewtitle] = useState("");

  const addBook = () => {
    axios
      .post("http://localhost:4001/create", {
        isbn: isbn,
        title: title,
        author: author,
      })
      .then(() =>
        setbooks([...books, { isbn: isbn, title: title, author: author }])
      );
  };

  const getbooks = () => {
    axios.get("http://localhost:4001/books", {}).then((Response) => {
      setbooks(Response.data);
    });
  };

  const updateDetails=(isbn)=>{
     axios.put("http://localhost:4001/update",{title:newtitle,isbn:isbn}).then((Response)=>{alert("update")})
  }
  return (
    <div>
      <div classname="app">
        <form>
          <table>
            <tr>
              <th>BooK List</th>
            </tr>
            <tr>
              <td>title</td>
              <td>
                <input
                  type="text"
                  name="title"
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                ></input>
              </td>
              <td>author</td>
              <td>
                <input
                  type="text"
                  name="author"
                  onChange={(e) => {
                    setauthor(e.target.value);
                  }}
                ></input>
              </td>
              <td>isbn</td>
              <td>
                <input
                  type="text"
                  name="isbn"
                  onChange={(e) => {
                    setisbn(e.target.value);
                  }}
                ></input>
              </td>
              <td>
                <button onClick={addBook}>submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
      -----------------------------------------------------------------------------------------------------------------------
      <div>
        <button onClick={getbooks}>show Books</button>
      </div>
      {books.map((value, key) => {
        return (
          <div className=".app">
            <h3>isbn:{value.isbn}</h3>
            <h3>author:{value.author}</h3>
            <h3>title:{value.title}</h3>
            <div>
              <input type="text" placeholder="title" onChange={(e)=>{
                setnewtitle(e.target.value)
              }}></input>
              <button onClick={()=>{updateDetails(value.isbn)}}>update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
