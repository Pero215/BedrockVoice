# VoiceChatOptimised

A lightweight and efficient voice chat plugin for Spigot/Paper servers. This plugin enables custom real‑time audio communication between players using a paired Java and Bedrock client mod.

## Features

* Low‑latency audio communication
* Custom packet‑based voice transport
* Works with paired Java and Bedrock clients
* Fully optimised for performance
* Easy to set up and integrate

## Requirements

* **Minecraft Server:** Spigot or Paper 1.20+ recommended
* **Java Version:** Java 17 or higher
* **Client Mods:**

  * VoiceClientOptimised (Java Edition)
  * VoiceBedrockOptimised (Bedrock Edition)

## Installation

1. Download the latest `VoiceChatOptimised` plugin jar.
2. Place the jar in your server's `plugins` folder.
3. Start or restart your server.
4. Verify that the plugin loads correctly.

## Commands

| Command      | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| `/voicechat` | Shows plugin info or toggles voice settings (depending on your configuration). |

## Permissions

| Permission        | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `voicechat.admin` | Allows reloading or admin-level control of the plugin. |

## Configuration

After first launch, a configuration file will generate in:

```
/plugins/VoiceChatOptimised/config.yml
```

Inside you can configure:

* Voice activation
* Proximity settings
* Packet buffer settings
* Debug mode

## Developer Notes

This plugin uses a custom networking layer instead of Mojang's vanilla voice system. It sends and receives small audio packets from the client mod. If you plan to build the system yourself, follow this flow:

1. Client encodes microphone audio.
2. Client sends packets to server plugin.
3. Server distributes packets to nearby players.
4. Clients decode and play received audio.

## Build Instructions

If you want to compile the plugin manually:

1. Clone the repository.
2. Run:

```
./gradlew build
```

3. The final jar will appear under `build/libs/`.

## Support

If you encounter issues, open an issue on the repository or contact the developer.

## License

This project is licensed under your selected license. Update this section accordingly.
