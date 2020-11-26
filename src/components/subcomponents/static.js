export default function project() {
  const projectColor = "#1D8348"; //"#1E8449"; //"#58D68D";
  const projectUrl = "http://localhost:3000/";
  const CompanyName = "PawaGreen Energy";
  const nav_item_font = "tangerine"; //labelle //pacifico
  const home_component_background_color = "#eee";
  const check_width = () => {
    if (window.screen.availWidth < 500) {
      return true;
    }
    return false;
  };
  return {
    projectColor: projectColor,
    projectUrl: projectUrl,
    companyName: CompanyName,
    nav_item_font: nav_item_font,
    home_component_background_color: home_component_background_color,
    check_width: check_width(),
  };
}
