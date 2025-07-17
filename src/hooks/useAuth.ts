import { useEffect } from "react";
import axios from "../services/axiosInstance";

export default () => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg?.initDataUnsafe?.user) {
      console.error("Telegram WebApp user not found");
      return;
    }

    const { id, first_name, last_name, username } = tg.initDataUnsafe.user;
    axios
      .post("/auth/login", {
        telegramId: id.toString(),
        username: username || `${first_name} ${last_name || ""}`.trim(),
      })
      .then((response) => {
        console.log("Logged in:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  });
};
