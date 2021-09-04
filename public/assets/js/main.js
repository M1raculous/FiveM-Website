let config = {
  cfx: "ydxaky",
  author: "M1raculous",
};
const api_url = `https://servers-frontend.fivem.net/api/servers/single/${config.cfx}`;

async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.dir(data);
  show(data);
}
getapi(api_url);
function show(data) {
  
    if (data["Data"]["vars"]["txAdmin-version"]) {
      txAdminVersion = `txAdmin-Version:<br> ${data["Data"]["vars"]["txAdmin-version"]}</br>`;
      txAdmin = "txAdmin:\n Ja";
    } else {
      txAdmin = "txAdmin:\n Nej";
    }
    const getResources = data["Data"]["resources"];
    if (getResources.includes("essentialmode")) {
      framework = "ESX";
    } else {
      framework = "Andet";
    }
    const uptime = `Uptime:<br> ${data["Data"]["vars"]["Uptime"]}</br>`;
    console.log(uptime);
    var  build = `Gamebuild: ${data["Data"]["vars"]["sv_enforceGameBuild"]}`;
    var maxclients = `Max Clients: ${data["Data"]["vars"]["sv_maxclients"]}`;
    var resources = `Resources: ${data["Data"]["resources"].length}`;
    var tags = `Tags: ${data["Data"]["vars"]["tags"]}`;
    var discord = data["Data"]["vars"]["Discord"];;  
    var serverip = data["EndPoint"];
    var clients = data["Data"]["clients"];
    var maxClients = data["Data"]["sv_maxclients"]
    var sv_hostname = data["Data"]["hostname"];

    let serverInformation = `
    <p class="overflow-auto">
    <b>Server Name:</b> ${sv_hostname}
    <br>
    <b>Discord:</b> <a href="${discord}"> Join discord</a>
    <p><b>Server IP:</b> <a href="fivem://connect/${serverip}">Join Server</a></p>
    <p><b>Framework:</b> ${framework}</p>
    <br>
    `;

    document.getElementById("help").innerHTML = serverInformation;
    let aboutServer = `
    Describe briefly and short what your server about, and why they should choose your server. There's currently <b class="text-green-900">${clients}</b>/<b class="text-red-700">${maxClients}</b> online. <b class="text-green-900">${uptime}</b>
    `
    document.getElementById("about").innerHTML = aboutServer;
}