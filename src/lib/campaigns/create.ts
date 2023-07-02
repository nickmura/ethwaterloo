import { API } from '$lib/stores/state';
import { Web3Storage } from 'web3.storage';
import { Campaign } from './types';

export async function createCampaign(data: Campaign, image?: File) {
	console.log(data);
	if (!Campaign.safeSerialize(data).success) throw new Error('Invalid Data');
	const client = new Web3Storage({ token: API });

	if (image) {
		const imageCid = await client.put([image], {
			wrapWithDirectory: false,
			name: 'image',
		});
		data.imageUrl = `ipfs://${imageCid}`;
	}

	const metadata = Campaign.safeSerialize(data);

	if (!metadata.success) throw new Error('Could not serialize metadata');

	const metadataBlob = new Blob([JSON.stringify(metadata.value)], {
		type: 'application/json',
	});
	const metadataCid = await client.put([metadataBlob], {
		wrapWithDirectory: false,
		name: 'metadata.json',
	});

	console.log('Our IPFS hash', metadataCid);
	// Create tx with ethers
}
