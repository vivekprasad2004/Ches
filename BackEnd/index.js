import axios from "axios";

const res = await axios.post(
  "http://cdn.defencepost.in/ches_team_app/index.php/apis/login",
  new URLSearchParams({
    username: "CHES",
    password: "CHES",
  })
);
console.log(res.data);
