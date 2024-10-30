import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function CataItemsCard(data) {
  // console.log(data);

  return (<div>
    <Card className="">
      {rabdata.meals?.map((data, index) => (
        <div key={index} className="grid grid-cols-3">


          <CardHeader floated={false} className="h-[400px]">
            <img src={data.strMealThumb} alt="profile-picture" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray-400" className="mb-2">
              {data.strMeal}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {data.idMeal}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>

        </div>
      ))}
    </Card>
  </div>
  );
}

