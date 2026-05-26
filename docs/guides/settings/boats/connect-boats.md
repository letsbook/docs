---
sidebar_position: 3
---

# Connect boats

Create a hardware connection between your boats and Let's Book software, allowing customers to start boats themselves with their smartphone and giving you complete remote control over your fleet.

## What is connected fleet?

Connected fleet creates a seamless link between your bookings and physical boats. Customers receive an SMS with their booking details, select their boat, and start the engine directly from their phone. Meanwhile, you get real-time monitoring, GPS tracking, and remote control capabilities.

**Customer experience:**

- SMS notification with booking link before departure
- Select available boat from their booking page
- Start and stop the boat engine with one click
- Automatic trip timeline registration

**Your benefits:**

- Perfect overview of fleet status and trip progress
- Remote boat control for quick assistance
- Accurate rental duration tracking
- Less staff required for check-in/check-out
- Real-time location monitoring and battery voltage tracking

## Hardware partners

**[Sentinel Marine](https://sentinelmarine.net):** Our recommended partner. One-click connect (no API keys to copy), automatic engine lock and unlock at trip start and end, paired to each boat by serial number.

**Qondor:** Real-time fleet monitoring with route history and geofencing alerts. Ideal for ensuring boats stay within designated areas.

**SMS-Relay:** Basic remote start/stop functionality via SMS commands. Simple solution for essential remote control.

## Connecting boats to software

### Sentinel Marine integration

**Prerequisites:** Sentinel Marine hardware installed and an active Sentinel account.

**Steps:**

1. Go to [Hardware integrations](https://dashboard.letsbook.app/integrations/hardware) in Let's Book.
1. Find the Sentinel Marine card and click **Connect with Sentinel**.
1. Authorize Let's Book on Sentinel's page. You return to Let's Book automatically.
1. Open [your boat models](https://dashboard.letsbook.app/models) and pick the boat you want to connect.
1. In the **Connect boat** section, select **Sentinel**.
1. Paste the serial number and save.

Engine lock and unlock now fires automatically when a trip starts and ends.

### Qondor integration

**Prerequisites:** Qondor hardware installed in boats

**Steps:**

1. Find tracker ID in your Qondor dashboard or on the physical tracker
2. Go to [your boat models](https://dashboard.letsbook.app/models)
3. Select the boat model and click on specific boat
4. In "Connect boat" section, select "Qondor"
5. Paste tracker serial number and save

### SMS-Relay connection

**Prerequisites:** SMS-relay hardware installed

**Steps:**

1. Go to [your boat models](https://dashboard.letsbook.app/models)
2. Select boat model and click on specific boat
3. In "Connect boat" section, select "SMS-Relay"
4. Enter the SMS relay number and save

## After connection

Once hardware is connected, continue to configure customer permissions, rental rules, and operational settings.
