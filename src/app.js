 fetch("assets/json/interview_info.json")
    .then(res=> res.json())
    .then(data=> console.log(data))