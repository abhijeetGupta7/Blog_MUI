import CircularProgress from "@mui/material/CircularProgress";
import { CenteredLoader } from "./ui/Loading";

const PageLoader = () => {
  return (
    <CenteredLoader>
      <CircularProgress />
    </CenteredLoader>
  );
};

export default PageLoader;
