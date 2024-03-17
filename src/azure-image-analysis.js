import axios from "axios";

async function analyzeImage(imageUrl){
    const endpoint = "https://cvazurelearn25.cognitiveservices.azure.com/";
    const apiKey = "a13b733ae818486bae094706af4aa789";
    const url = `${endpoint}/computervision/imageanalysis:analyze?api-version=2023-04-01-preview`;
    try {
        const response = await axios.post(
            url,
            { url:imageUrl },
            {
                headers: {
                    "Ocp-Apim-Subscription-Key": apiKey,
                    "Content-Type": "application/json",
                },
                params:{
                    features: "caption,read,objects", 
                    "model-version": "latest", 
                    language: "en",
                }
            }
        );
        return response.data;
    }   catch (error) {
        console.error("Error analyzing image:", error);
        throw error;
    }

}
export default analyzeImage;