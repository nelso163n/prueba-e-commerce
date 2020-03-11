const baseUrl = 'https://www.amiiboapi.com/api/';
const proxyurl = "";

export const getUrl = (url) => {
  return `${baseUrl}/${url}`;
}

export const getProductsAll = async () => {
  const messageError = 'error al cargar data';
  try {
    const url = `amiibo/?type=Figure`;  
    const response = await fetch(proxyurl + getUrl(url), {
      method : 'GET'
    });
    console.log("response:", response);
    const data = await response.json();
    console.log("data:", data);
    return (response.status === 200)? data : messageError;
  } catch (error) {
    console.log(error);
    return messageError;
  }
}

export const getProductById = async (head,tail) => {
  const messageError = 'error al cargar data';
  try {
    const url = `amiibo/?id=${head}${tail}`;  
    const response = await fetch(proxyurl + getUrl(url), {
      method : 'GET'
    });

    const data = await response.json();
    return (response.status === 200)? data : messageError;
  } catch (error) {
    console.log(error);
    return messageError;
  }
}
