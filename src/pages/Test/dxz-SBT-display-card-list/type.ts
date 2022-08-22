export namespace SBT_list {
	export type payload = {
		"indexStart" : number,
		"count" : number,
		"firstTimestamp" : number,
		"spaceID" : number,
		"type" : string;
		"chainID" : string;
	};
	export type response = {
		"indexEnd": number,
		"count": number,
		"firstTimestamp": number,
		"infos" : {
			"spaceID" : number;
			"sbtID" : number;
			"name" : string,
			"iconUrl" : string,
			"type" : string,
			"chainID" : string,
			"chainAddr" : string,
		}[];
	};
}
