# 👻 Bulgar Development Job Status

FiveM Job Status scripts that serves the purpose to show you the progress of your active job. It is a simple but useful UI that makes the game easier for your players and adds a little bit of prettiness to your fivem server!

# 📙 Usage

```lua
-- Exports (Client)

-- Shows the job stage container with the given data
exports["bd-jobstatus"]:ShowJobStage(data)

-- Updates the job stage container with the given data
exports["bd-jobstatus"]:UpdateJobStage(data)

-- Hides the job stage container
exports["bd-jobstatus"]:HideJobStage()

-- Events (Client)

-- Shows the job stage container with the given data
TriggerEvent("bd-jobstatus:client:show-job-stage", data)

-- Updates the job stage container with the given data
TriggerEvent("bd-jobstatus:client:update-job-stage", data)

-- Hides the job stage container
TriggerEvent("bd-jobstatus:client:hide-job-stage")

-- Events (Server) - No server events are supported for this resource, but you can trigger the event on the client you want, sooo its a win win.. :D

-- Shows the job stage container with the given data on the given player source
TriggerClientEvent("bd-jobstatus:client:show-job-stage", source, data)

-- Updates the job stage container with the given data on the given player source
TriggerClientEvent("bd-jobstatus:client:update-job-stage", source, data)

-- Hides the job stage container on the given player source
TriggerClientEvent("bd-jobstatus:client:hide-job-stage", source)

-- Params Explenation

-- data - table, contains status data
-- data.job - string, Header text
-- data.title - string/html, The description of the job status (Supports HTML, so you can use <br/> to split the text in new lines)
-- data.hasStatus - boolean, Whether or not you job has a status message (Check the screenshots to get a good idea of that this is)
-- data.statusMessage - string/html, The status message located on the left (Only if hasStatus is true)
-- data.statusValue - string/number/html, The status value located on the right (Only if hasStatus is true)

-- Params Examples

-- 1. If the job has a status message
{
    job = "Ammunation Heist",
    title = "Rob the container <br/> Code: 0W0W",
    hasStatus = true,
    statusMessage = "NPC's",
    statusValue = "1/10"
}

-- 2. If the job doesn't have a status message
{
    job = "Ammunation Heist",
    title = "Rob the container <br/> Code: 0W0W",
    hasStatus = false
}
```

# 📙 Example Usage

```lua
RegisterCommand("showjobstage", function()
    exports["bd-jobstatus"]:ShowJobStage({
        job = "Ammunation Heist",
        title = "Rob the container <br/> Code: 0W0W",
        hasStatus = true,
        statusMessage = "NPC's",
        statusValue = "1/10"
    })
end, false)

RegisterCommand("updatejobstage", function()
    exports["bd-jobstatus"]:UpdateJobStage({
        job = "Ammunation Heist",
        title = "Rob the loot box",
        hasStatus = false,
    })
end, false)

RegisterCommand("hidejobstage", function()
    exports["bd-jobstatus"]:HideJobStage()
end, false)
```

# 📸 Screenshots

### Explained Screenshot

![Explained Screenshot](https://r2.fivemanage.com/pub/zb1wsb4hgkl9.png)

### Clear Screenshot (With status)

![Clear Screenshot (With status)](https://r2.fivemanage.com/pub/vc9ud03pvusm.png)

### Clear Screenshot (Without status)

![Clear Screenshot (Without status)](https://r2.fivemanage.com/pub/y17ouhyzjvmk.png)
