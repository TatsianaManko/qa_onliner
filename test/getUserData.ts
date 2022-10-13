const E2EMailBox = require("e2e-mailbox").default;
const mailbox = new E2EMailBox();
export async function getUserData() {
  const email = await mailbox.createEmailAddress();
  const username = email;
  const password = email;
  const passwordConfirm = email;

  return {
    username,
    email,
    password,
    passwordConfirm,
  };
}
