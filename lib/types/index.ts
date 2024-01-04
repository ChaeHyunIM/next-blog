export type IBlogMetadata = {
	title: string;
	image_url: string;
	created_at: string;
	tags: string[];
	is_published: boolean;
	slug: string;
};

export type IBlogContent = string;
export type IBlogDetail = {
	slug: string;
	created_at: string;
	image_url: string;
	tags: string[];
	title: string;
	is_published: boolean;
	blog_content: {
		blog_id: string;
		content: string;
		created_at: string;
	};
} | null;

export type ITagCount = {
	[tag: string]: number;
}

export type IBlogForm = {
	created_at: string;
	id: string;
	image_url: string;
	is_premium: boolean;
	is_published: boolean;
	title: string;
	blog_content: {
		blog_id: string;
		content: string;
		created_at: string;
	};
};

export type Iuser = {
	created_at: string;
	display_name: string;
	email: string;
	id: string;
	image_url: string;
	role: string;
	stripe_customer_id: string | null;
	stripe_subscriptoin_id: string | null;
	subscription_status: boolean;
} | null;