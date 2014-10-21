tileSize = 64;
maxZoom = 6;

var contents = 
[
	{
		id: "Map0",
		name: "Nibiru Reborn",
		players: Map0_playerData,
		beds: Map0_bedData,
		signs: Map0_signData,
		portals: Map0_portalData,
		views: Map0_viewData,
		blockStats: Map0_blockStats,
		worldStats: Map0_worldStats,
		worldVectors: Map0_worldVectors,
		layers:
		[
			{
				id: "LayerA",
				name: "Day",
				imageFormat: "png",
				isPng: "true"
			},
			{
				id: "LayerB",
				name: "Nether",
				imageFormat: "png",
				isPng: "true"
			}
		]
	},
	{
		id: "Map1",
		name: "Nibiru Nether",
		players: Map1_playerData,
		beds: Map1_bedData,
		signs: Map1_signData,
		portals: Map1_portalData,
		views: Map1_viewData,
		blockStats: Map1_blockStats,
		worldStats: Map1_worldStats,
		worldVectors: Map1_worldVectors,
		layers:
		[
			{
				id: "LayerC",
				name: "Nether",
				imageFormat: "png",
				isPng: "true"
			}
		]
	}
]
