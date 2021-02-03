import renderImage from './renderBackground';

const accessKey = '5iAIiKDYmv_P_ObUQlw9Y9-d--ivWfRxdpEUR-Pd2cw';

const getBackgroundImage = async () => {
  try {
    const res = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
    console.log(res.data);
    renderImage(res.data);
  } catch (error) {
    console.log(error);
  }
};

// axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
// .then(res => console.log(res.data.urls.regular))

export default getBackgroundImage;