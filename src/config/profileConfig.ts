import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "/myavatar.png", // Relative to the /public directory
	name: "InfinityNeko",
	bio: "为什么会变成这样呢？",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github", // Visit https://icones.js.org/ for icon codes
			url: "https://github.com/InfinityNeko",
		},
	],
});
