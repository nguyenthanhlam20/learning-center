import { useTheme } from "@mui/material/styles";
import LogoImage from "../../assets/images/logo/logo.png";
export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <div href="/" className={`header-logo block flex items-center `}>
      <img src={LogoImage} alt="logo" width={65} height={65} />
      <span className="ml-5 text-2xl font-bold">Seed Center</span>
    </div>
  );
};
