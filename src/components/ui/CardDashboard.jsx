import { NavLink } from "react-router-dom";

export default function CardDashboard({ link, text1, text2, image }) {
  return (
    <NavLink
      to={link}
      className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3"
    >
      <h3 className="text-xl font-bold text-primary">{text1}</h3>
      {<img className="h-20" src={image} alt="" />}
      <p className="text-center text-sm font-medium text-primary/50">{text2}</p>
    </NavLink>
  );
}
