let customerLocation = "";

function getLocation() {
    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        status.textContent = "❌ Is browser me location support nahi hai.";
        return;
    }

    status.textContent = "📍 Location li ja rahi hai...";

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            customerLocation =
                "https://www.google.com/maps?q=" + lat + "," + lng;

            status.textContent = "✅ Current location ready hai.";
        },
        function(error) {
            customerLocation = "";
            status.textContent =
                "❌ Location permission allow karein.";
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
}

function sendEnquiry(){

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let quantity = document.getElementById("quantity").value;
    let type = document.getElementById("type").value;
    let message = document.getElementById("message").value.trim();
    let address = document.getElementById("address").value.trim();

    if(name === ""){
        alert("Please apna naam enter karein.");
        return;
    }

    if(mobile === ""){
        alert("Please mobile number enter karein.");
        return;
    }

    if(type === ""){
        alert("Please Camera Type / Service select karein.");
        return;
    }

    let text =
        "Namaste 🙏 OM CCTV,\n\n" +
        "Mujhe CCTV ke baare mein enquiry karni hai.\n\n" +
        "👤 Name: " + name + "\n" +
        "📞 Mobile: " + mobile + "\n" +
        "📹 Camera Quantity: " + (quantity || "Not selected") + "\n" +
        "📷 Camera Type / Service: " + type + "\n" +
        "📍 Customer Address: " + (address || "Address nahi diya") + "\n";

    if(customerLocation !== ""){
        text +=
            "🗺️ Google Maps Location:\n" +
            customerLocation + "\n";
    }

    text +=
        "📝 Requirement: " +
        (message || "Price aur details chahiye.") +
        "\n\n" +
        "Please mujhe price aur details bataiye.";

    const whatsappUrl =
        "https://wa.me/917060727266?text=" +
        encodeURIComponent(text);

    window.open(whatsappUrl, "_blank");
}
