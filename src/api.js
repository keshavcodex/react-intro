import axios from "axios";

const searchImages = async() => {
    const accessKey = "kC-I-mubKlgzOrYzzwA6uOYWUifo_h1ONO-m6mq1Hb8"; // Replace with your actual access key
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?count=10`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
      );
  return response.data;
};

export default searchImages;