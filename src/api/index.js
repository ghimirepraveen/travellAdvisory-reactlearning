import axios from "axios";

const getPlacesData = async (type, sw, ne) => {
  try {
    const url =
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
    const options = {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
      },
      headers: {
        "X-RapidAPI-Key": "fd977eb070mshc91d205205e7cefp1f5deejsn4f4465282427",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    const {
      data: { data },
    } = await axios.get(url, options);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default getPlacesData;
