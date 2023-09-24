const clientId = "YSb0pLQMbX52tCpZUcfWsQ";
const apiKey =
  "oZLYQGjSqwNp6SrPW3t7IC0qCdls0yyZVfnuBgfRlEDbimXogu5Xe5W2BOtQihgk2CETjo0vjqE-FDAqj2Ex3qpmxIEMxcmfYdYFhM1HNe52GwhCq2jtvf28QPYPZXYx";

export const search = async (term, location, sort_by) => {
  const searchEndpoint =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?";
  const termParam = `term=${term}`;
  const locationParam = `&location=${location}`;
  const sortParam = `&sort_by=${sort_by}`;
  const limit = "&limit=20";
  const headers = {
    headers: { accept: "application/json", Authorization: `Bearer ${apiKey}` },
  };
  const requestUrl = searchEndpoint + termParam + locationParam + sortParam + limit;
  
    try{
        const response = await fetch(requestUrl, headers);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        console.log(jsonResponse.businesses);
        return await jsonResponse.businesses;
    }catch(error){
        alert(error);
    }
  
  
};

