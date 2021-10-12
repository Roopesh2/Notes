import { signIn } from "./auth";
import { header, passwordInput, passwordVisibility } from "./elements";

export const events = {
  "#password": {
    enter: signIn,
  },
  "#passwordVisibility": {
    click: togglePasswordVisibility,
  },
  document: {
    scroll: scrollManager,
  },
};

function togglePasswordVisibility() {
  if (passwordInput.attr("type") === "password") {
    passwordInput.attr("type", "text");
    passwordVisibility.text("visibility");
  } else {
    passwordInput.attr("type", "password");
    passwordVisibility.text("visibility_off");
  }
}

function scrollManager() {
  if (window.scrollY == 0) {
    header.removeClass("shadow-below");
  } else {
    header.addClass("shadow-below");
  }
}

export { togglePasswordVisibility };
