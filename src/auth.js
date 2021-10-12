import { SHA512 } from "crypto-js";
import { mainWidget, passwordInput, signInWidget } from "./elements";
import { getDocument } from "./firebaseData";
window.SHA = SHA512
async function signIn() {
  let hash = SHA512(passwordInput.val()).toString();
  const authData = await getDocument("Records/Auth");

  if (hash == authData.hash) {
    signInWidget.hide();
    mainWidget.show();
  } else {
    alert("Wrong password");
  }
  console.log(hash, authData.hash);
}

export { signIn };
