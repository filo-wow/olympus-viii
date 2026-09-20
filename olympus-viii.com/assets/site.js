(function () {
  const content = window.guildContent;
  if (!content) return;

  document.querySelectorAll("[data-copy]").forEach(function (element) {
    const value = content.copy[element.dataset.copy];
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-discord-link]").forEach(function (link) {
    link.href = content.discordUrl;
  });

  const guildMaster = document.getElementById("guild-master-name");
  const officerList = document.getElementById("officer-list");

  if (guildMaster) guildMaster.textContent = content.roster.guildMaster;
  if (officerList) {
    content.roster.officers.forEach(function (name) {
      const officer = document.createElement("li");
      officer.textContent = name;
      officerList.appendChild(officer);
    });
  }
})();
