$outputFile = "$PSScriptRoot\package.zip"

Compress-Archive -Path "$PSScriptRoot\manifest.json","$PSScriptRoot\copy-id.js" -DestinationPath $outputFile -Force