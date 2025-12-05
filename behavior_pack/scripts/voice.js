import { system, world } from "@minecraft/server";

// Microphone state
let recording = false;
let micStream = null;
let chunkSize = 2048; // same as Java client

// Send packets through GEYSER custom payload
function sendAudio(data) {
    try {
        world.sendMessage("voice:audio", data);
    } catch (e) {
        console.warn("Failed to send audio:", e);
    }
}

// Read microphone chunks at 60 ticks per second
system.runInterval(() => {
    if (!recording || !micStream) return;

    const chunk = micStream.read(chunkSize);
    if (chunk) {
        sendAudio(chunk);
    }
}, 1);

// Exported functions to be called from chat events
export function startMic() {
    if (recording) return;
    try {
        micStream = device.audio.openStream({
            sampleRate: 16000,
            channels: 1
        });
        recording = true;
    } catch (e) {
        console.error("Microphone access failed:", e);
    }
}

export function stopMic() {
    recording = false;
    if (micStream) {
        micStream.close();
        micStream = null;
    }
}
world.afterEvents.chatSend.subscribe(event => {
    const msg = event.message.toLowerCase();

    if (msg === "/voicerec start") {
        event.sender.sendMessage("§aMic started!");
        startMic();
    }

    if (msg === "/voicerec stop") {
        event.sender.sendMessage("§cMic stopped!");
        stopMic();
    }
});
import { DeviceAudio } from "@minecraft/server"; // preview API

let speaker = null;

function playAudio(data) {
    if (!speaker) {
        speaker = device.audio.openPlayback({
            sampleRate: 16000,
            channels: 1
        });
    }
    speaker.write(data);
}

// Listen for Geyser packet
world.beforeEvents.messageReceive.subscribe(ev => {
    if (ev.channel === "voice:audio") {
        playAudio(ev.data);
    }
});
