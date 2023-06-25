import * as f from 'funtypes';

const BigIntParser: f.ParsedValue<f.String, bigint>['config'] = {
	parse: (value) => {
		if (!/^0x([a-fA-F0-9]{1,64})$/.test(value))
			return {
				success: false,
				message: `${value} is not a hex string encoded number.`,
			};
		else return { success: true, value: BigInt(value) };
	},
	serialize: (value) => {
		if (typeof value !== 'bigint')
			return { success: false, message: `${typeof value} is not a bigint.` };
		return { success: true, value: `0x${value.toString(16)}` };
	},
};

export const BigIntQuantity = f.String.withParser(BigIntParser);
export type BigIntQuantity = f.Static<typeof BigIntQuantity>;

export const Campaign = f.Object({
	title: f.String,
	description: f.String,
	photo: f.String,
	goal: f.Object({
		currency: f.Union(f.Literal('USD'), f.Literal('CAD'), f.Literal('ETH')),
		amount: BigIntQuantity,
	}),
});

export type Campaign = f.Static<typeof Campaign>;
