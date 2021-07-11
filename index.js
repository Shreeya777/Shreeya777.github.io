fetch("https://api.github.com/users/Shreeya777")
  .then((response) => response.json()) //Converting the response to a JSON object
  .then(function (data) {
    console.log(data);

    let followersCount = data["followers"];
    let followersInfo = `I have been followed by ${followersCount} people on github`;
    document.getElementById("profileImage").src = data["avatar_url"];
    document.getElementById("fullname").textContent = data["name"];
    document.getElementById("bio").textContent = data["bio"];
    document.getElementById("followersInformation").textContent = followersInfo;
    document.getElementById("githubLink").href = data["html_url"];

    document.getElementById("mainContainer").hidden = false;
    document.getElementById("loading").hidden = true;
  });

fetch("https://api.github.com/users/Shreeya777/repos")
  .then((response) => response.json()) //Converting the response to a JSON object
  .then(function (data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      // variables from api
      var repo_url = data[i].html_url;
      var repo_name = data[i].name;
      document.getElementById("link" + [i]).href = repo_url;
      document.getElementById("name" + [i]).textContent = repo_name;
    }
  });
