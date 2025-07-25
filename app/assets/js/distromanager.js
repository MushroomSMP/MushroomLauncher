const { DistributionAPI } = require('hasta-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
exports.REMOTE_DISTRO_URL = 'https://mushroomsmp.github.io/MushroomMods/distribution.json' 

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api