import { IBlog, IBlogDetail, ITagCount } from "./types";

export const blogDeafultValue = `
## Serendipity Chronicles: Tales from a Random Blog

As we wrap up our adventures, let's reflect on the serendipitous moments that defined this journey. The JavaScript snippet below captures a moment of serendipity in code:

### 안녕하세요
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
\`hello world\`

# [슈퍼링크](https://www.google.com)


hello world
- hello
- **world**
- ~~world~~
- \`hello world\`
	- hello world
		- hello world

* Lists
* [ ] todo
* [x] done

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number

[링크](https://www.google.com)

A table:

| a | b |
| - | - |

\`\`\`ts @app/lib/serendipityMoments.s
const serendipityMoments = [
  "Unexpectedly meeting a fellow adventurer",
  "Discovering a hidden gem in a random location",
  "Finding the perfect solution when least expected"
];

const randomSerendipity = serendipityMoments[Math.floor(Math.random() * serendipityMoments.length)];
console.log(\`Serendipity at its finest: \${randomSerendipity}\`);
\`\`\`

~~~js
console.log('It works!')
~~~

`;

export const blogs: IBlog[] = [
	{
		slug: `1`,
		title: "Random Blog Adventures",
		image_url:
			"https://images.unsplash.com/photo-1700164805522-c3f2f8885144?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		created_at: "2023-05-15",
		is_published: true,
		tags: ["JavaScript", "TypeScript"],
		content: blogDeafultValue,
	},
	{
		slug: "2",
		title: "Exploring the Unknown: A Random Blog Journey",
		image_url:
			"https://images.unsplash.com/photo-1700130862148-8bea5f545bfe?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

		created_at: "2023-06-22",
		is_published: false,
		tags: ["React", "Next.js"],
		content: blogDeafultValue,
	},
	{
		slug: "3",
		title: "City Lights at Night",
		image_url:
			"https://images.unsplash.com/photo-1699968237129-b8d83b25ecd9?q=80&w=3557&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		tags: ["Hello", "World"],
		created_at: "2023-08-10",
		is_published: false,
		content: blogDeafultValue,
	},
	{
		slug: "4",
		title: "Unleashing Creativity: The Surprising Benefits of Doodling",
		image_url:
			"https://images.unsplash.com/photo-1699100329878-7f28bb780787?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		created_at: "2023-10-05",
		is_published: false,
		tags: ["diary"],
		content: blogDeafultValue,
	},
	{
		slug: "5",
		title: "Unleashing Creativity: The Surprising Benefits of Doodling",
		image_url:
			"https://images.unsplash.com/photo-1700316740839-f5afe22536e4?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		created_at: "2023-10-05",
		tags: ["Hello", "React"],
		is_published: false,
		content: blogDeafultValue,
	},
];

export const tagCount: ITagCount = blogs.map((blog) => blog.tags).flat().reduce((acc: { [key: string]: number }, cur) => {
	acc[cur] = (acc[cur] || 0) + 1;
	return acc;
}, {});

export const defaultCreateBlog: IBlogDetail = {
	slug: "",
	title: "",
	image_url: "",
	created_at: "",
	tags: [],
	is_published: false,
	blog_content: {
		created_at: "",
		content: "",
		blog_id: "",
	},
};
export const users = [
	{
		display_name: "John Doe",
		image_url: "/profile.png",
		subscription_status: "Active",
		customer_id: "123456",
		email: "john.doe@example.com",
	},
	{
		display_name: "Alice Smith",
		image_url: "/profile.png",
		subscription_status: "Inactive",
		customer_id: "789012",
		email: "alice.smith@example.com",
	},
	{
		display_name: "Bob Johnson",
		image_url: "/profile.png",
		subscription_status: "Active",
		customer_id: "345678",
		email: "bob.johnson@example.com",
	},
	{
		display_name: "Eva Brown",
		image_url: "/profile.png",
		subscription_status: "Active",
		customer_id: "901234",
		email: "eva.brown@example.com",
	},
];

export const menu = [
	// {
	// 	id: "1",
	// 	title: "Home",
	// 	href: "/",
	// },
	{
		id: '1',
		title: 'Tags',
		href: '/tag',
	},
	{
		id: "3",
		title: "About",
		href: "/about",
	},
	{
		id: "4",
		title: "Diary",
		href: "/diary",
	},
];
