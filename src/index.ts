import { Elysia } from "elysia";
import { getIntlayer, intlayer, t } from "elysia-intlayer";
import { globals } from "./globals";
import { EmailTemplate } from "./vars";

const app = new Elysia()
	.use(intlayer()!)
	.get("/email", () => {
		const { body, metadata } = getIntlayer(
			EmailTemplate.CODE_CONFIRMATION_MESSAGE,
		);
		// We inject globals, localized metadata, and the dynamically generated code !
		// Note: globals can contain more data than the email  needs
		return body({ ...globals, ...metadata, code: 1234 });

		/** curl -H "Accept-Language: fr" http://localhost:3000/email
		 * <div>Message de confirmation</div>
		 *	<div>1234</div>
		 *	<a href="https://example.com">{textLink}</a>
		 */

		/** curl -H "Accept-Language: en" http://localhost:3000/email
		 * <div>Confirmation Message</div>
		 *	<div>1234</div>
		 *	<a href="https://example.com">{textLink}</a>
		 */
	})
	.listen(3000);

console.log(
	`> Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
