import xmlToJson from "./xml2json.js";

const searchDict = (NEWWORD) => {
  const myHeaders = new Headers();
  myHeaders.append("Origin", "*");
  myHeaders.append("Cookie", "STCID=STC1&&FQ3YB1PPicV02NV09w-1zoS8JX4185FqGz3JLw59okO2bkBYFnGK!-3910530!1622827029455; WMONID=Q28imZE32eM; stdict=FQ3YB1PPicV02NV09w-1zoS8JX4185FqGz3JLw59okO2bkBYFnGK!-3910530");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(`https://stdict.korean.go.kr/api/search.do?q=${NEWWORD}&key=1A72658DC4EC53B25E519646E76D3591`, requestOptions)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      let JSONData = xmlToJson(data);
      console.log(JSONData.channel.item.sense.definition)
      return (JSONData.channel.item.sense.definition["#cdata-section"]);
      }
    )
    .catch(error => console.log('error', error));
}
export default searchDict;

// 2. 짠 코드가 return을 안하는 것 같아....
