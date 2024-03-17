import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleImageAnalysis = async () => {
    try {
      const analysisResult = await analyzeImage(imageUrl);
      setResult(analysisResult);
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };

  const displayResults = () => {
    if (!result) return null;
    return <div>
      <h2>Image results</h2>
      <img
        width="500"
        src={result?.url ? result.url : imageUrl}
        alt="uploaded"
      ></img>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>;
  };

  return (
    <div>
      <h1>Analyze and generate images</h1>
      <input 
        type="text" 
        placeholder='Enter URL or text prompt'
        Value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      ></input>
      <button onClick={handleImageAnalysis}>Analyze Image</button>
      <button>Generate Image</button>
      {displayResults()}
    </div>
  );
}

export default App;
