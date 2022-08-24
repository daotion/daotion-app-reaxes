export namespace SBT_list {
	
	export type SBTListItem = {
		"spaceID" : number;
		"SBTID" : number;
		"name" : string,
		"iconUrl" : string,
		"type" : string,
		"chainID" : string,
		"chainAddr" : string,
	};
	
	export type payload = {
		"indexStart" : number,
		"count" : number,
		"firstTimestamp" : number,
		"spaceID" : number,
		"type" : string;
		"chainID" : string;
		/*模糊搜索*/
		"name" : string;
	};
	export type response = {
		"indexEnd": number,
		"count": number,
		"firstTimestamp": number,
		"total": number,
		"infos" : SBTListItem[];
	};
}
