import React from "react";

const themes = ["light", "dark"];

const user = {
  theme: "light",
};

const changeTheme = (e) => {
  user.theme = e.target.value;

  document.documentElement.className = "";
  document.documentElement.classList.add(`theme-${user.theme}`);
};

export default function App() {
  return (
    <select defaultValue={user.theme} onChange={changeTheme}>
      {themes.map((theme, index) => (
        <option value={theme} key={index}>
          {theme}
        </option>
      ))}
    </select>
  );
}
