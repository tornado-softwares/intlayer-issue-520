import { type Dictionary, file, insert, t } from "intlayer";
import { EmailTemplate } from "./vars";

const message = file(`./${EmailTemplate.CODE_CONFIRMATION_MESSAGE}.html`);

const indexContent = {
	key: EmailTemplate.CODE_CONFIRMATION_MESSAGE,
	content: {
		metadata: t({
			en: {
				subject: "Confirmation Message",
				textLink: "Link",
			},
			fr: {
				subject: "Message de confirmation",
				textLink: "Lien",
			},
		}),
		body: insert(message),
	},
} satisfies Dictionary;

export default indexContent;
