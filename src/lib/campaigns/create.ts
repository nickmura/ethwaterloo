import { PUBLIC_WEB3_STORAGE_API_KEY } from '$env/static/public';
import { Web3Storage } from 'web3.storage';

export async function createCampaign() {
	// upload images ?
	// create JSON
	// upload JSON
	//

	const metadata = { message: 'hello world' };

	const client = new Web3Storage({ token: PUBLIC_WEB3_STORAGE_API_KEY });
	const metadataBlob = new Blob([JSON.stringify(metadata)], {
		type: 'application/json',
	});
	const metadataCid = await client.put([metadataBlob]);
	console.log(metadataCid);
}
