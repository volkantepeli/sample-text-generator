import "./App.css" ;
import React, { useState , useEffect} from 'react'
import Options from "./components/Options";
import Output from "./components/Output";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState ('p');
  const [inputValue, setInputValue] = useState(4);
  const [includeHtml, setIncludeHtml] = useState ("Yes");

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1` ;

    fetch(url)
    .then(res => res.json())
    .then(data => setParagraphs(data));
  },[inputValue])
  return (
    <div className="App">
      <div className="container">
        <div className="title">
            <h1>React sample text generator app</h1>
        </div>
        <Options 
        paragraphs={paragraphs} 
        includeHtml={includeHtml} 
        setIncludeHtml={setIncludeHtml}
        inputValue={inputValue}
        setInputValue={setInputValue}
        tag={tag}
        setTag={setTag}
        />
        <Output paragraphs={paragraphs} tag={tag} includeHtml={includeHtml} />
      </div>
    </div>
  );
}

export default App;
