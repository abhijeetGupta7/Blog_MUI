import CircularProgress from "@mui/material/CircularProgress";
import { CenteredLoader } from ".";

export const PageLoader = () => {
  return (
    <CenteredLoader>
      <CircularProgress />
    </CenteredLoader>
  );
};

