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
    .then(data => console.log(data))
    .catch(error => console.log('error', error));
}



export default searchDict;