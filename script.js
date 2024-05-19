navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener('chargingchange', updateChargeInfo);
    function updateChargeInfo() {
        const chargingStatus = document.getElementById('chargingStatus');
        chargingStatus.textContent = `Battery charging? ${battery.charging ? "Yes" : "No"}`;
    }

    battery.addEventListener('levelchange', updateLevelInfo);
    function updateLevelInfo() {
        const batteryLevel = document.getElementById('batteryLevel');
        batteryLevel.textContent = `Battery level: ${(battery.level * 100).toFixed(0)}%`;
    }

    battery.addEventListener('chargingtimechange', updateChargingInfo);
    function updateChargingInfo() {
        const chargingTime = document.getElementById('chargingTime');
        chargingTime.textContent = `Battery charging time: ${battery.chargingTime} seconds`;
    }

    battery.addEventListener('dischargingtimechange', updateDischargingInfo);
    function updateDischargingInfo() {
        const dischargingTime = document.getElementById('dischargingTime');
        dischargingTime.textContent = `Battery discharging time: ${battery.dischargingTime} seconds`;
    }
});
