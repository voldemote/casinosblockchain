import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IReadMoreDataObj } from "../../../Interfaces"

interface IReadMoreProps {
    index: number,
    item: IReadMoreDataObj
}

const ReadMoreCard = (props: IReadMoreProps) => {
    const item = props.item;
    return (
        <Link to={item.link}>
            <Card sx={{ maxWidth: 300 }} elevation={4}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        image={item.image}
                        alt="Read More Image"
                        sx={{ height: "125px" }}
                    />
                    <CardContent>
                        <Typography gutterBottom color="text.secondary" className="text-[10px]" component="p">
                            {item.date}
                        </Typography>
                        <Typography variant="body2" className="font-bold mb-3" component="p" >
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant={"caption"} color="text.secondary" component="p">
                            {item.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="flex justify-between">
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                    <IconButton size="small" color="primary">
                        <ArrowRightAlt fontSize="inherit" />
                    </IconButton>
                </CardActions>
            </Card>
        </Link>
    )
}

export default ReadMoreCard