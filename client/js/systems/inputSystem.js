class InputSystem {
  constructor(api) {
    this.api = api;
  }

  bindClick(button) {
    button.addEventListener("click", () => {
      this.api.click();
    });
  }
}

export default InputSystem;