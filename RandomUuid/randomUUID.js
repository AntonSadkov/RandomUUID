function generateUuid() {
    let uuid = crypto.randomUUID();
    document.getElementById("generated_uuid").value = uuid;
  }
  function copyUuid() {
  	generated_uuid.select();
    document.execCommand('copy');
  }