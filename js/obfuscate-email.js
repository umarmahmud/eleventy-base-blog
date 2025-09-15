document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("sendEmailLink");
    if (!link) return;
  
    link.addEventListener("click", function (event) {
      event.preventDefault();
  
      const user = String.fromCharCode(115, 101, 110, 100, 46, 108, 101, 116, 116, 101, 114, 50, 51, 51);
      const domain = atob("cGFzc2luYm94LmNvbQ==");
      const email = `${user}@${domain}`;
  
      window.location.href = `mailto:${email}`;
    });
  });
  