import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function DashboardCard({ bgColor, image, legend, count }: any) {
  const Card = styled("div")(({ theme }) => ({
    "&": {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#242526",
      justifyContent: "space-between",
      padding: 24,
      borderRadius: 8,
      height: 240,
      minWidth: 160,
    },
  }));

  return (
    <>
      <Card>
        <Box
          width={45}
          height={45}
          minHeight={35}
          bgcolor={bgColor}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={1}
        >
          {image}
        </Box>

        <Box display="flex" flexDirection="column">
          <Box>
            <Typography
              variant="body2"
              component="span"
              fontWeight={400}
              color="#B0B3B8"
            >
              {legend}
            </Typography>
          </Box>

          <Box>
            <Typography noWrap variant="h1" color="#fff" sx={{}}>
              {count}
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default DashboardCard;
