import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function ShowCata({ data }) {
  const nav = useNavigate();
  console.log(data);

  return (
    <div className="w-screen mx-0"> {/* Centers card and prevents scrolling */}
      <Card className="w-screen max-w-screen-xl"> {/* Takes full width up to a max width */}
        <CardBody>
          <div className="mb-4 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Latest Customers
            </Typography>
            <Typography as="a" href="#" variant="small" color="blue" className="font-bold">
              View all
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 divide-gray-200">
            {data.categories.map((data, index) => (
              <div key={index} onClick={() => nav(`/cata-items/${data.strCategory}`)}
                className="flex items-center shadow-lg space-y-3  justify-between pb-3 pt-3 last:pb-0">
                <div className="flex items-center gap-x-3">
                  <Avatar size="xl" src={data.strCategoryThumb} alt="" />
                  <div>
                    <Typography color="blue-gray" variant="h6">
                      {data.strCategory}
                    </Typography>
                    <Typography variant="small" color="gray">
                      {data.strCategoryDescription.slice(0, 150)}...
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
