import BookOpenIcon from "@heroicons/react/24/solid/BookOpenIcon";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

export const CourseOverView = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <Avatar
              sx={{
                backgroundColor: "warning.main",
                height: 42,
                width: 42,
              }}
            >
              <SvgIcon>
                <BookOpenIcon />
              </SvgIcon>
            </Avatar>
            <Typography color="text.secondary" gutterBottom variant="overline">
              Khóa học
            </Typography>
          </Stack>
          <Typography textAlign={"center"} variant="h5">
            {value}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
