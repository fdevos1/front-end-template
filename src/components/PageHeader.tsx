import { Box, Typography } from "@mui/material";

function PageHeader({ children, pageTitle }: any) {
  return (
    <Box display="flex" width={1} justifyContent="space-between">
      <Box
        bgcolor="background.paper"
        borderRadius={5}
        minWidth={180}
        width={1}
        maxWidth={200}
      >
        <Typography
          variant="h4"
          p={1}
          color="text.primary"
          sx={{ textTransform: "uppercase" }}
          align="center"
        >
          {pageTitle}
        </Typography>
      </Box>

      {children}
    </Box>
  );
}

export default PageHeader;
