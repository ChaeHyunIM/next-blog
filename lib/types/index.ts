export type IBlogMetadata = {
	title: string;
	image_url: string;
	created_at: string;
	tags: string[];
	is_published: boolean;
	slug: string;
};

export type IBlogContent = string;

export type ITagCount = {
	[tag: string]: number;
};