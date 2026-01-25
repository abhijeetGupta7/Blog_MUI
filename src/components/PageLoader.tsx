import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const PageLoader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default PageLoader;
